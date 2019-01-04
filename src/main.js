const buttonData = document.getElementById('data');
const buttonStart = document.getElementById('start');
// const buttonStats = document.getElementById('stats');
const screenStar = document.getElementById('screenStar');
const allData = document.getElementById('allData');


const clickButtonData = () => {
  allData.classList.add('mostrar');
  allData.classList.remove('ocultar');
  screenStar.classList.add('ocultar');
  screenStar.classList.remove('mostrar');
};

const clickButtonStart = () => {
  allData.classList.add('ocultar');
  allData.classList.remove('mostrar');
  screenStar.classList.add('mostrar');
  screenStar.classList.remove('ocultar');
};


const data = window.INJURIES;
let sectionCard = document.getElementById('card');
let tableDataPrevia = document.getElementById('previa');
let dataRecent = injuries.recentYears(data).reverse();
let selectYearStar = document.getElementById('añoInicio');
let selectYearFinish = document.getElementById('añoFin');
let btnFilterByRange = document.getElementById('btn-select-range');
let arrAños = injuries.obtenerAñosUnicos(data);
// let dataTableFilter = document.getElementById('dataFilter');
const selectOrderInjuries = document.getElementById('order-injuries');

const cardCreater = (arr, section) => {
  let cardData = '';

  arr.forEach((cant => {
    cardData += '<div class="col-md-3">' + 
    '<div class="card">' + '<div class="card-block">' +
    `<h3 class="card-title">${parseInt(cant['Year'])}</h3>` +
      '<ul class="list-unstyled">' + 
      `<li>Urbano: ${cant['Total_Injured_Persons_Highway'] + 
        cant['Total_Injured_Persons_Bus_Occupants'] +
        cant['Total_Injured_Persons_Commuter_Carrier'] + 
        cant['Total_Injured_Persons_Motorcyclists'] +
        cant['Total_Injured_Persons_Passenger_Car_Occupants'] +
        cant['Total_Injured_Persons_Pedalcyclists'] +
        cant['Total_Injured_Persons_Pedestrians']}</li>` +
      `<li>Camión: ${cant['Total_Injured_Persons_Truck_Occupants_Light'] +
        cant['Total_Injured_Persons_Truck_Occupants_Large']}</li>` +
      `<li>Aéreo: ${cant['Total_Injured_Persons_Air'] +
        cant['Total_Injured_Persons_General_Aviation'] +
        cant['Total_Injured_Persons_On_Demand_Air_Taxi'] +
        cant['Total_Injured_Persons_US_Air_Carrier']}</li>` + 
      `<li>Férreo: ${cant['Total_Injured_Persons_Railroad_Alone'] + 
      cant['Total_Injured_Persons_Railroad_Train_Accidents'] +
      cant['Total_Injured_Persons_Train_Accidents_Rail_Roads'] + 
      cant['Total_Injured_Persons_Transit_Rail']}</li>` +
      `<li>Maritimo y Fluvial: ${cant['Total_Injured_Persons_Water'] +
        cant['Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties'] +
        cant['Total_Injured_Persons_Water_Vessel_Related']}</li>` +
      `<li>Buques: ${cant['Total_Injured_Persons_Freight_Vessel'] +
        cant['Total_Injured_Persons_Passenger_Vessel']}</li>` +
      `<li>Yates: ${cant['Total_Injured_Persons_Recreational_Boating'] + 0}</li>` +
      `<li>Otros: ${cant['Total_Injured_Persons_Employee_Or_Worker'] +
        cant['Total_Injured_Persons_Gas_Pipeline'] +
        cant['Total_Injured_Persons_Hazardous_Liquid_Pipeline'] +
        cant['Total_Injured_Persons_Industrial_Or_Other'] +
        cant['Total_Injured_Persons_Other_Incident'] +
        cant['Total_Injured_Persons_Other_Incidents'] +
        cant['Total_Injured_Persons_Pipeline']}</li>` +
    '</ul>' 
    + '</div>' + '</div>' + '</div>';
  }));

  section.innerHTML = cardData;
};

cardCreater(dataRecent, tableDataPrevia);

cardCreater(data, sectionCard);

arrAños.forEach((año) => {
  selectYearStar.innerHTML += `<option value = ${año}>${año}</option>`;
  selectYearFinish.innerHTML += `<option value = ${año}>${año}</option>`;
});

btnFilterByRange.addEventListener('click', (event) => { 
  event.preventDefault();
  
  const yearStar = selectYearStar.value;
  const yearFinish = selectYearFinish.value;
  const message = document.getElementById('messageError');

  if (yearStar > yearFinish) {
    message.innerHTML = '<i>Por favor, ingresa un rango válido</i>';
    sectionCard.innerHTML = '';
  } else {
    message.innerHTML = '';
    let arrFilterByYear = injuries.totalInjuredPersonsByYear(data, yearStar, yearFinish);
    cardCreater(arrFilterByYear, sectionCard);
  }
});

selectOrderInjuries.addEventListener('change', () => {
  const arrOrderData = injuries.sortData(data, selectOrderInjuries.value);
  cardCreater(arrOrderData, sectionCard);
});

buttonData.addEventListener('click', clickButtonData);
buttonStart.addEventListener('click', clickButtonStart);
