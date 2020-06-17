const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccion de la ciudad",
    demand: true,
  },
}).argv;

console.log(argv.direccion);

module.exports = {
  argv,
};
