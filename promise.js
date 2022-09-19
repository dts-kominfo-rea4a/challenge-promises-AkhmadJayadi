const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (expresion) => {
  let count = 0;
  try {
    const tiix = await promiseTheaterIXX();
    const tvgc = await promiseTheaterVGC();
    const result = [...tiix, ...tvgc];
    
    result.forEach((Element) => {
      if (Element.hasil == expresion) {
        count++;
      }
    });
    if (count > 0) {
      return count;
    };
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  promiseOutput,
};