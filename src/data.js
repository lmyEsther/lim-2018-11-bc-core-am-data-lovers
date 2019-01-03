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

const sortData = (arr, sortBy) => {
  const copyData = [ ...arr];
  const orderByYear = copyData.sort((aaa, bbb) => {
    (parseInt(aaa['Year']) > parseInt(bbb['Year']) ? 1 : -1);
  });
  const orderByTotalInjured = copyData.sort((aaa, bbb) => { 
    (parseInt(aaa['Total_Injured_Persons']) > parseInt(bbb['Total_Injured_Persons']) ? 1 : -1);
  });

  if (sortBy === 'lessRecent') {
    return orderByYear;
  } 
  if (sortBy === 'mostRecent') {
    return orderByYear.reverse();
  } 
  if (sortBy === 'lessInjured') {
    return orderByTotalInjured;
  }
  if (sortBy === 'mostInjured') {
    return orderByTotalInjured.reverse();
  }
};

window.injuries = {
  recentYears,
  obtenerAñosUnicos,
  totalInjuredPersonsByYear,
  sortData
};


