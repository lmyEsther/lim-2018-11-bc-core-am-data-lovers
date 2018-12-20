const recentYears = (arr) => {
  return arr.filter(ele => parseInt(ele.Year) >= 2010 & parseInt(ele.Year) <= 2015);
};

const obtenerAñosUnicos = (arr) => {
  return arr.reduce((acum, ele) => {
    acum.push(parseInt(ele.Year));
    return acum;
  }, []);
};
const filtrarRango = () => {};

window.injuries = {
  recentYears,
  obtenerAñosUnicos,
  filtrarRango
};

