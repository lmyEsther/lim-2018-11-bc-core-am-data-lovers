const recentYears = (arr) => {
  return arr.filter(ele => parseInt(ele.Year) >= 2010 && parseInt(ele.Year) <= 2015);
};

const obtenerAñosUnicos = (arr) => {
  return arr.reduce((acum, ele) => {
    acum.push(parseInt(ele.Year));
    return acum;
  }, []);
};

const totalInjuredPersonsByYear = (arr, yearStar, yearFinish) => {
  return arr.filter((obj) => {
    if (parseInt(obj.Year) >= yearStar && parseInt(obj.Year) <= yearFinish) {
      return obj;
    }
  });
};


window.injuries = {
  recentYears,
  obtenerAñosUnicos,
  totalInjuredPersonsByYear
};

