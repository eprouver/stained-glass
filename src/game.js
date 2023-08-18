const gameLoop = () => {
  const size = 5;
  const cSize = 100;
  let baddies = [];
  const ptoken = "🦊";
  const base = document.getElementById("b-base");
  base.innerHTML = "";

  const mboard = [...new Array(size)].map((row) => [...new Array(size)]);
  const bmoj = ["🌹", "🌻", "🌼", "🌱", "🌿"];

  const Board = () => {
    return mboard.map((row, i) =>
      div(
        { class: "row" },
        row.map((cell, j) =>
          div({
            id: `cell-${i}-${j}`,
            class: "cell",
          })
        )
      )
    );
  };

  const Baddies = () => {
    return [...new Array(10)].map((bad, i) => () => {
      const row = (i % 2) + (size - 2);
      const col = i % 5;
      const baddie = {
        bad: bmoj[i % bmoj.length],
        row,
        col,
        id: "baddie" + baddies.length,
      };
      baddies.push(baddie);

      mboard[row][col] = baddie;
      return div(
        {
          id: baddie.id,
          class: "baddy",
          style: `transform: translate3d(${col * cSize}px,${row * cSize}px,0)`,
        },
        div(baddie.bad)
      );
    });
  };

  const player = div({ id: "player", class: "hidden player" }, ptoken);
  van.add(base, Board(), Baddies(), player);

  let winning = false;
  const possibles = (row, col) => {
    arr = [];
    for (var i = -1; i <= 1; i += 2) {
      arr.push([row + i, col]);
    }
    for (var j = -1; j <= 1; j += 2) {
      arr.push([row, col + j]);
    }
    return arr.filter(
      (move) => move[0] > -1 && move[0] < size && move[1] > -1 && move[1] < size
    );
  };

  const turn = () => {
    const playerLoc = player.dataset.loc.split(",").map((n) => Number(n));
    const dangerZone = possibles(playerLoc[0], playerLoc[1]);

    // find the closest to the player
    const mover = baddies
      .map((b) => {
        b.dist = Math.sqrt(
          Math.pow(playerLoc[0] - b.row, 2) + Math.pow(playerLoc[1] - b.col, 2)
        );
        return b;
      })
      .sort((a, b) => a.dist - b.dist)
      .filter((b) => {
        b.moves = possibles(b.row, b.col).filter((move) => {
          return (
            dangerZone
              .concat([playerLoc])
              .concat(baddies.map((bad) => [bad.row, bad.col]))
              .map((loc) => loc.toString())
              .indexOf(move.toString()) === -1
          );
        });
        return b.moves.length > 0;
      })[0];

    // move into a non capture spot.
    const move = mover.moves.sort((m) => Math.random() - 0.5)[0];
    mover.row = move[0];
    mover.col = move[1];
    document.getElementById(mover.id).style.transform = `translate3d(${
      mover.col * cSize
    }px,${mover.row * cSize}px,0)`;

    // move your token
    let pmoves = possibles(playerLoc[0], playerLoc[1]);
    pmoves = pmoves
      .map((move) => {
        // check if it's a capture
        const bmap = baddies.map((b) => [b.row, b.col]);
        const bad = bmap.filter((b) => b[0] == move[0] && b[1] == move[1])[0];
        if (bad) {
          const dest = [
            bad[0] - playerLoc[0] + bad[0],
            bad[1] - playerLoc[1] + bad[1],
          ];
          const dbad = bmap.filter(
            (b) => b[0] === dest[0] && b[1] == dest[1]
          )[0];
          if (
            !dbad &&
            dest[1] > -1 &&
            dest[1] < size &&
            dest[0] > -1 &&
            dest[0] < size
          ) {
            // row capture
            return {
              col: dest[0],
              row: dest[1],
              cap: true,
              bad,
            };
          }
          return null;
        } else {
          return {
            col: move[0],
            row: move[1],
          };
        }
      })
      .filter((move) => move);
    console.log(pmoves);

    pmoves
      .map((loc) => document.getElementById(`cell-${loc.col}-${loc.row}`))
      .forEach((cell, index) => {
        cell.classList.add("highlight");
        cell.onclick = () => {
          const move = pmoves[index];
          const loc = cell.id
            .split("-")
            .slice(1)
            .map((n) => Number(n));
          player.style.transform = `translate3d(${loc[1] * cSize}px,${
            loc[0] * cSize
          }px,0)`;

          player.dataset.loc = loc;
          [...document.getElementsByClassName("highlight")].forEach((c) => {
            c.classList.remove("highlight");
            c.onclick = null;
          });

          // check if the move was a capture
          if (move.cap) {
            const i = baddies.findIndex(
              (bad) => bad.row == move.bad[0] && bad.col === move.bad[1]
            );
            document.getElementById(baddies[i].id).classList.add("hidden");
            baddies.splice(i, 1);
          }

          // check if wining
          if (!winning) {
            setTimeout(turn, 300);
          }
        };
      });
  };

  // place your token
  const starts = [...document.getElementsByClassName("cell")].filter(
    (cell) => Number(cell.id.split("-")[1]) < 3
  );

  starts.forEach((cell) => {
    const loc = cell.id
      .split("-")
      .slice(1)
      .map((n) => Number(n));
    cell.classList.add("highlight");
    cell.onclick = () => {
      player.classList.remove("hidden");
      player.style.transform = `translate3d(${loc[1] * cSize}px,${
        loc[0] * cSize
      }px,0)`;

      player.dataset.loc = loc;
      starts.forEach((c) => {
        c.classList.remove("highlight");
        c.onclick = null;
      });
      setTimeout(turn, 300);
    };
  });
};
