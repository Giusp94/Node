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

async function getResults() {
  try {
    const resTina = await luckyDraw("Tina");
    const resJorge = await luckyDraw("Jorge");
    const resJulien = await luckyDraw("Julien");

    console.log(resTina);
    console.log(resJorge);
    console.log(resJulien);
  } catch (error) {
    console.log(error);
  }
}

getResults();
