const recentYears = (arr) => {
  return arr.filter(ele => parseInt(ele.year) >= 2010 && parseInt(ele.year) <= 2015);
};

const obtenerAñosUnicos = (arr) => {
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

const sortDataYear = (arr, sortBy) => {
  const copyData = [ ...arr];

  const orderByYear = copyData.sort((aaa, bbb) => {
    (aaa['year'] > bbb['year'] ? 1 : -1);
  });
  

  if (sortBy === 'lessRecent') {
    return orderByYear;
  } else if (sortBy === 'mostRecent') {
    return orderByYear.reverse();
  } 
};

const sortDataUrbano = (arr, sortBy) => {
  const copyData2 = [ ...arr];

  const orderByUrbano = copyData2.sort((aaa, bbb) => { 
    (aaa['urbano'] > bbb['urbano'] ? 1 : -1);
  });

  if (sortBy === 'lessInjured') {
    return orderByUrbano;
  } else if (sortBy === 'mostInjured') {
    return orderByUrbano.reverse();
  }
};


const classifiedTransp = (arr) => { // falta test unitario de esto...
  const copyData3 = [ ...arr];
  const newArr = [];

  copyData3.forEach(cant => {
    let obj = {};

    obj.urbano = (cant['Total_Injured_Persons_Highway'] + 
        cant['Total_Injured_Persons_Bus_Occupants'] +
        cant['Total_Injured_Persons_Commuter_Carrier'] + 
        cant['Total_Injured_Persons_Motorcyclists'] +
        cant['Total_Injured_Persons_Passenger_Car_Occupants'] +
        cant['Total_Injured_Persons_Pedalcyclists'] +
        cant['Total_Injured_Persons_Pedestrians']);

    obj.camion = (cant['Total_Injured_Persons_Truck_Occupants_Light'] +
        cant['Total_Injured_Persons_Truck_Occupants_Large']);
    
    obj.aereo = (cant['Total_Injured_Persons_Air'] +
        cant['Total_Injured_Persons_General_Aviation'] +
        cant['Total_Injured_Persons_On_Demand_Air_Taxi'] +
        cant['Total_Injured_Persons_US_Air_Carrier']);

    obj.ferreo = (cant['Total_Injured_Persons_Railroad_Alone'] + 
        cant['Total_Injured_Persons_Railroad_Train_Accidents'] +
        cant['Total_Injured_Persons_Train_Accidents_Rail_Roads'] + 
        cant['Total_Injured_Persons_Transit_Rail']);
    
    obj.maritimo = (cant['Total_Injured_Persons_Water'] +
        cant['Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties'] +
        cant['Total_Injured_Persons_Water_Vessel_Related']);

    obj.buques = (cant['Total_Injured_Persons_Freight_Vessel'] +
        cant['Total_Injured_Persons_Passenger_Vessel']);
    
    obj.yates = (cant['Total_Injured_Persons_Recreational_Boating'] + 0);

    obj.otros = (cant['Total_Injured_Persons_Employee_Or_Worker'] +
        cant['Total_Injured_Persons_Gas_Pipeline'] +
        cant['Total_Injured_Persons_Hazardous_Liquid_Pipeline'] +
        cant['Total_Injured_Persons_Industrial_Or_Other'] +
        cant['Total_Injured_Persons_Other_Incident'] +
        cant['Total_Injured_Persons_Other_Incidents'] +
        cant['Total_Injured_Persons_Pipeline']);
    
    obj.year = parseInt(cant['Year']);
    
    newArr.push(obj);
  });
  return newArr;
};

window.injuries = {
  recentYears,
  obtenerAñosUnicos,
  totalInjuredPersonsByYear,
  sortDataYear,
  sortDataUrbano,
  classifiedTransp
};

window.stats = {};


