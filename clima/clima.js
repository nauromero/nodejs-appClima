const axios = require("axios");

const getClima = async (direccion) => {
  const encodedUrl = encodeURI(direccion);

  const instance = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&units=metric&APPID=211e982555d903824c891bb4c3a79202`,
    //   headers: { "X-Custom-Header": "foobar" },
  });

  try {
    const resp = await instance.get();
    const data = resp.data;
    const temp = data.main.temp;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    return {
      temp,
      lat,
      lon,
    };
  } catch (e) {
    console.log(e.response.data.cod, "ERROR");
  }

  // if (response.data.cod = 404) {
  //   throw new Error(response.data.cod);
  // }
};

module.exports = {
  getClima,
};
