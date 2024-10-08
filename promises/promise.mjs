import * as fs from "node:fs/promises";

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

/*
andava fatto così
luckyDraw("Joe")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
  .then(()=>luckyDraw('Caroline'))
  .then((data)=> console.log(data))
  .catch((err)=> console.error(err))
  .then(()=>luckyDraw('Sabrina'))
  .then((data)=> console.log(data))
  .catch((err)=> console.error(err))
*/
luckyDraw("Joe")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

luckyDraw("Caroline")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

luckyDraw("Sabrina")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
