const argv = require("./config/yargs.js").argv;
const clima = require("./clima/clima");

clima
  .getClima(argv.direccion)
  .then((resp) => {
    console.log(
      `El clima de ${argv.direccion} es de ${resp.temp} grados centígrados`
    );
  })
  .catch(() => {
    console.log(`No se pudo obtener el clima de ${argv.direccion}`);
  });
