let tableDataPrevia = document.getElementById('previa');
const data = window.INJURIES;
let dataRecent = injuries.recentYears(data);

let listRecent = '';
listRecent +=
      '<tr>' +
        '<th>Año</th>' +
        '<th>Autopista</th>' +
        '<th>Autobús</th>' +
        '<th>Motocicletas</th>' +
        '<th>Vehículos</th>' +
        '<th>Bicicletas</th>' +
        '<th>Peatones</th>' +
        '<th>Camión</th>' +
        '<th>Aéreo</th>' +
        '<th>Férreo</th>' +
        '<th>Marítimo y Fluvial</th>' +
        '<th>Buques</th>' +
        '<th>Yates</th>' +
        '<th>Otros</th>';
'</tr>';

dataRecent.forEach(cant => {
  listRecent += '<tr>';
  listRecent += `<th>${parseInt(cant.Year)}</th>`;
  listRecent += `<td>${parseInt(cant.Total_Injured_Persons_Highway)}</td>`;
  listRecent += `<td>${cant.Total_Injured_Persons_Bus_Occupants +
                            cant.Total_Injured_Persons_Commuter_Carrier}</td>`;
  listRecent += `<td>${parseInt(cant.Total_Injured_Persons_Motorcyclists)}</td>`;
  listRecent += `<td>${parseInt(cant.Total_Injured_Persons_Passenger_Car_Occupants)}</td>`;
  listRecent += `<td>${parseInt(cant.Total_Injured_Persons_Pedalcyclists)}</td>`;
  listRecent += `<td>${parseInt(cant.Total_Injured_Persons_Pedestrians)}</td>`;
  listRecent += `<td>${parseInt(cant.Total_Injured_Persons_Truck_Occupants_Light) +
                            parseInt(cant.Total_Injured_Persons_Truck_Occupants_Large)}</td>`;
  listRecent += `<td>${parseInt(cant.Total_Injured_Persons_Air) +
                            parseInt(cant.Total_Injured_Persons_General_Aviation) +
                            parseInt(cant.Total_Injured_Persons_On_Demand_Air_Taxi) +
                            parseInt(cant.Total_Injured_Persons_US_Air_Carrier)}</td>`;
  listRecent += `<td>${parseInt(cant.Total_Injured_Persons_Railroad_Alone)}</td>`;
  listRecent += `<td>${parseInt(cant.Total_Injured_Persons_Water) +
                            parseInt(cant.Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties) +
                            parseInt(cant.Total_Injured_Persons_Water_Vessel_Related)}</td>`;
  listRecent += `<td>${parseInt(cant.Total_Injured_Persons_Freight_Vessel) +
                            parseInt(cant.Total_Injured_Persons_Passenger_Vessel)}</td>`;
  listRecent += `<td>${parseInt(cant.Total_Injured_Persons_Recreational_Boating)}</td>`;
  listRecent += `<td>${parseInt(cant.Total_Injured_Persons_Employee_Or_Worker) +
                            parseInt(cant.Total_Injured_Persons_Gas_Pipeline) +
                            parseInt(cant.Total_Injured_Persons_Hazardous_Liquid_Pipeline) +
                            parseInt(cant.Total_Injured_Persons_Industrial_Or_Other) +
                            parseInt(cant.Total_Injured_Persons_Other_Incident) +
                            parseInt(cant.Total_Injured_Persons_Other_Incidents) +
                            parseInt(cant.Total_Injured_Persons_Pipeline)}</td>`;
});

tableDataPrevia.innerHTML = listRecent; // fin primera tabla de vista previa

// selector de rango y filtrado por años que elija el usuario
let selectYearStar = document.getElementById('añoInicio');
let selectYearFinish = document.getElementById('añoFin');
let btnFilterByRange = document.getElementById('btn-select-range')
let arrAños = injuries.obtenerAñosUnicos(data);
let dataTableFilter = document.getElementById('dataFilter');

arrAños.forEach((año) => {
  selectYearStar.innerHTML += `<option value = ${año}>${año}</option>`;
  selectYearFinish.innerHTML += `<option value = ${año}>${año}</option>`;
});

btnFilterByRange.addEventListener('click', () => {

  if (selectYearStar.value <= selectYearFinish.value) {

  let arrFilterByYear = injuries.totalInjuredPersonsByYear(data, selectYearStar.value, selectYearFinish.value);
  
  let listFilter = '';
  listFilter += '<tr>' +
  '<th>Año</th>' +
  '<th>Autopista</th>' +
  '<th>Autobús</th>' +
  '<th>Motocicletas</th>' +
  '<th>Vehículos</th>' +
  '<th>Bicicletas</th>' +
  '<th>Peatones</th>' +
  '<th>Camión</th>' +
  '<th>Aéreo</th>' +
  '<th>Férreo</th>' +
  '<th>Marítimo y Fluvial</th>' +
  '<th>Buques</th>' +
  '<th>Yates</th>' +
  '<th>Otros</th>';
  '</tr>';

  arrFilterByYear.forEach((cant => {
    listFilter += '<tr>';
    listFilter += `<th>${parseInt(cant.Year)}</th>`;
    listFilter += `<td>${parseInt(cant.Total_Injured_Persons_Highway)}</td>`;
    listFilter += `<td>${cant.Total_Injured_Persons_Bus_Occupants +
                              cant.Total_Injured_Persons_Commuter_Carrier}</td>`;
    listFilter += `<td>${parseInt(cant.Total_Injured_Persons_Motorcyclists)}</td>`;
    listFilter += `<td>${parseInt(cant.Total_Injured_Persons_Passenger_Car_Occupants)}</td>`;
    listFilter += `<td>${parseInt(cant.Total_Injured_Persons_Pedalcyclists)}</td>`;
    listFilter += `<td>${parseInt(cant.Total_Injured_Persons_Pedestrians)}</td>`;
    listFilter += `<td>${parseInt(cant.Total_Injured_Persons_Truck_Occupants_Light) +
                              parseInt(cant.Total_Injured_Persons_Truck_Occupants_Large)}</td>`;
    listFilter += `<td>${parseInt(cant.Total_Injured_Persons_Air) +
                              parseInt(cant.Total_Injured_Persons_General_Aviation) +
                              parseInt(cant.Total_Injured_Persons_On_Demand_Air_Taxi) +
                              parseInt(cant.Total_Injured_Persons_US_Air_Carrier)}</td>`;
    listFilter += `<td>${parseInt(cant.Total_Injured_Persons_Railroad_Alone)}</td>`;
    listFilter += `<td>${parseInt(cant.Total_Injured_Persons_Water) +
                              parseInt(cant.Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties) +
                              parseInt(cant.Total_Injured_Persons_Water_Vessel_Related)}</td>`;
    listFilter += `<td>${parseInt(cant.Total_Injured_Persons_Freight_Vessel) +
                              parseInt(cant.Total_Injured_Persons_Passenger_Vessel)}</td>`;
    listFilter += `<td>${parseInt(cant.Total_Injured_Persons_Recreational_Boating)}</td>`;
    listFilter += `<td>${parseInt(cant.Total_Injured_Persons_Employee_Or_Worker) +
                              parseInt(cant.Total_Injured_Persons_Gas_Pipeline) +
                              parseInt(cant.Total_Injured_Persons_Hazardous_Liquid_Pipeline) +
                              parseInt(cant.Total_Injured_Persons_Industrial_Or_Other) +
                              parseInt(cant.Total_Injured_Persons_Other_Incident) +
                              parseInt(cant.Total_Injured_Persons_Other_Incidents) +
                              parseInt(cant.Total_Injured_Persons_Pipeline)}</td>`;
  }));

  dataTableFilter.innerHTML = listFilter;
});


