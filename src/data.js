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
  const copyData2 = [ ...arr].map(element => {
    if (element['Total_Injured_Persons'] === null) {
      element['Total_Injured_Persons'] = 0;
      return element;
    } else {
      return element;
    }
  });

  const orderByYear = copyData.sort((aaa, bbb) => {
    (parseInt(aaa['Year']) > parseInt(bbb['Year']) ? 1 : -1);
  });
  const orderByTotalInjured = copyData2.sort((aaa, bbb) => { 
    (aaa['Total_Injured_Persons'] - bbb['Total_Injured_Persons']);
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


