const data = window.INJURIES;
let sectionCard = document.getElementById('card');
let tableDataPrevia = document.getElementById('previa');
let dataRecent = injuries.recentYears(data).reverse();
let selectYearStar = document.getElementById('añoInicio');
let selectYearFinish = document.getElementById('añoFin');
let btnFilterByRange = document.getElementById('btn-select-range');
let arrAños = injuries.obtenerAñosUnicos(data);
let dataTableFilter = document.getElementById('dataFilter');


const cardCreater = (arr, section) => {
  let cardData = '';

  arr.forEach((cant => {
    cardData += '<div class="col-md-3">' + 
    '<div class="card">' + '<div class="card-block">' +
    `<h3 class="card-title">${parseInt(cant.Year)}</h3>` +
    '<ul class="list-unstyled">' + 
      `<li>Urbano: ${parseInt(cant.Total_Injured_Persons_Highway) + 
        cant.Total_Injured_Persons_Bus_Occupants +
        cant.Total_Injured_Persons_Commuter_Carrier + 
        parseInt(cant.Total_Injured_Persons_Motorcyclists) +
        parseInt(cant.Total_Injured_Persons_Passenger_Car_Occupants) +
        parseInt(cant.Total_Injured_Persons_Pedalcyclists) +
        parseInt(cant.Total_Injured_Persons_Pedestrians)}</li>` +
      `<li>Camión: ${parseInt(cant.Total_Injured_Persons_Truck_Occupants_Light) +
        parseInt(cant.Total_Injured_Persons_Truck_Occupants_Large)}</li>` +
      `<li>Aéreo: ${parseInt(cant.Total_Injured_Persons_Air) +
        parseInt(cant.Total_Injured_Persons_General_Aviation) +
        parseInt(cant.Total_Injured_Persons_On_Demand_Air_Taxi) +
        parseInt(cant.Total_Injured_Persons_US_Air_Carrier)}</li>` + 
      `<li>Férreo: ${parseInt(cant.Total_Injured_Persons_Railroad_Alone)}</li>` +
      `<li>Maritimo y Fluvial: ${parseInt(cant.Total_Injured_Persons_Water) +
        parseInt(cant.Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties) +
        parseInt(cant.Total_Injured_Persons_Water_Vessel_Related)}</li>` +
      `<li>Buques: ${parseInt(cant.Total_Injured_Persons_Freight_Vessel) +
        parseInt(cant.Total_Injured_Persons_Passenger_Vessel)}</li>` +
      `<li>Yates: ${parseInt(cant.Total_Injured_Persons_Recreational_Boating)}</li>` +
      `<li>Otros: ${parseInt(cant.Total_Injured_Persons_Employee_Or_Worker) +
        parseInt(cant.Total_Injured_Persons_Gas_Pipeline) +
        parseInt(cant.Total_Injured_Persons_Hazardous_Liquid_Pipeline) +
        parseInt(cant.Total_Injured_Persons_Industrial_Or_Other) +
        parseInt(cant.Total_Injured_Persons_Other_Incident) +
        parseInt(cant.Total_Injured_Persons_Other_Incidents) +
        parseInt(cant.Total_Injured_Persons_Pipeline)}</li>` +
    '</ul>' + '</div>' + '</div>' + '</div>';
  }));
  section.innerHTML = cardData;
};

cardCreater(dataRecent, tableDataPrevia);

arrAños.forEach((año) => {
  selectYearStar.innerHTML += `<option value = ${año}>${año}</option>`;
  selectYearFinish.innerHTML += `<option value = ${año}>${año}</option>`;
});

btnFilterByRange.addEventListener('click', () => {
  let arrFilterByYear = injuries.totalInjuredPersonsByYear(data, selectYearStar.value, selectYearFinish.value);
  cardCreater(arrFilterByYear, dataTableFilter);
});

cardCreater(data, sectionCard);
