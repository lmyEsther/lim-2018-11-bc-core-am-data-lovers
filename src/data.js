const recentYears = (arr) => {
  return arr.filter(ele => parseInt(ele.year) >= 2012 && parseInt(ele.year) <= 2015);
};

const obtenerAniosUnicos = (arr) => {
  return arr.reduce((acum, ele) => {
    acum.push(parseInt(ele.year));
    return acum;
  }, []);
};

const totalInjuredPersonsByYear = (arr, yearStar, yearFinish) => {
  return arr.filter((obj) => {
    if (parseInt(obj.year) >= yearStar && parseInt(obj.year) <= yearFinish) {
      return obj;
    }
  });
};

const sortData = (arr, sortBy, sortOrder) => {
  const copyData = [ ...arr];
  let injuriesOrder = [];
  
  if (sortOrder === 'asc') {
    if (sortBy === 'lessRecent') {
      injuriesOrder = copyData.sort((aaa, bbb) => (aaa.year > bbb.year ? 1 : -1));
      return injuriesOrder;
    } else if (sortBy === 'lessUrbano') {
      injuriesOrder = copyData.sort((aaa, bbb) => (aaa.urbano > bbb.urbano ? 1 : -1));
      return injuriesOrder;
    }
  } else if (sortOrder === 'desc') {
    if (sortBy === 'mostRecent') {
      injuriesOrder = copyData.sort((aaa, bbb) => (aaa.year > bbb.year ? 1 : -1));
      return injuriesOrder.reverse();
    } else if (sortBy === 'mostUrbano') {
      injuriesOrder = copyData.sort((aaa, bbb) => (aaa.urbano > bbb.urbano ? 1 : -1));
      return injuriesOrder.reverse();
    }
  }
};

window.injuries = {
  recentYears,
  obtenerAniosUnicos,
  totalInjuredPersonsByYear,
  sortData
};

const averageCalc = (arr, transp) => {
  if (transp === 'urbano') {
    return parseInt(arr.reduce((acum, ele) => {
      return acum + ele.urbano;
    }, 0) / arr.length);
  } else if (transp === 'aereo') {
    return parseInt(arr.reduce((acum, ele) => {
      return acum + ele.aereo;
    }, 0) / arr.length);
  } else if (transp === 'ferrocarril') {
    return parseInt(arr.reduce((acum, ele) => {
      return acum + ele.ferrocarril;
    }, 0) / arr.length);
  } else if (transp === 'maritimo') {
    return parseInt(arr.reduce((acum, ele) => {
      return acum + ele.maritimo;
    }, 0) / arr.length);
  } else if (transp === 'otros') {
    return parseInt(arr.reduce((acum, ele) => {
      return acum + ele.otros;
    }, 0) / arr.length);
  }
};


window.promedio = {
  averageCalc
};
