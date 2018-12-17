// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

const recentYear = INJURIES.filter(INJURIE =>
  parseInt(INJURIE.Year) >= 2010 & parseInt(INJURIE.Year) <= 2015);

window.recentYear = recentYear;

/*let medioMaritimo = INJURIES.map(INJURIE =>
      INJURIE.Total_Injured_Persons_Freight_Vessel
      INJURIE.Total_Injured_Persons_Passenger_Vessel +
      INJURIE.Total_Injured_Persons_Water +
      INJURIE.Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties +
      INJURIE.Total_Injured_Persons_Water_Vessel_Related +
      INJURIE.Total_Injured_Persons_Recreational_Boating
);

let medioAereo = INJURIES.map(INJURIE =>
      INJURIE.Total_Injured_Persons_Air +
      INJURIE.Total_Injured_Persons_General_Aviation +
      INJURIE.Total_Injured_Persons_On_Demand_Air_Taxi +
      INJURIE.Total_Injured_Persons_US_Air_Carrier
);
let medioTerreste = INJURIES.map(INJURIE =>
      INJURIE.Total_Injured_Persons_Highway +
      INJURIE.Total_Injured_Persons_Bus_Occupants +
      INJURIE.Total_Injured_Persons_Motorcyclists +
      INJURIE.Total_Injured_Persons_Other_Incident_Transit +
      INJURIE.Total_Injured_Persons_Highway_Rail_Grade_Crossing +
      INJURIE.Total_Injured_Persons_Passenger_Car_Occupants +
      INJURIE.Total_Injured_Persons_Passenger_Or_Occupant +
      INJURIE.Total_Injured_Persons_Pedalcyclists +
      INJURIE.Total_Injured_Persons_Pedestrians +
      INJURIE.Total_Injured_Persons_Transit_Total +
      INJURIE.Total_Injured_Persons_Trespassers +
      INJURIE.Total_Injured_Persons_Truck_Occupants_Large +
      INJURIE.Total_Injured_Persons_Truck_Occupants_Light +
      INJURIE.Total_Injured_Persons_Commuter_Carrier
);

let medioFerroviario = INJURIES.map(INJURIE =>
      INJURIE.Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads +
      INJURIE.Total_Injured_Persons_Other_Incidents_Railroads +
      INJURIE.Total_Injured_Persons_Rail +
      INJURIE.Total_Injured_Persons_Rail_Freight +
      INJURIE.Total_Injured_Persons_Rail_Freight_Other_Incidents +
      INJURIE.Total_Injured_Persons_Rail_Freight_Train_Accidents +
      INJURIE.Total_Injured_Persons_Rail_Freight_Trespassers +
      INJURIE.Total_Injured_Persons_Rail_Road_Trespassers +
      INJURIE.Total_Injured_Persons_Railroad +
      INJURIE.Total_Injured_Persons_Railroad_Alone +
      INJURIE.Total_Injured_Persons_Railroad_Train_Accident +
      INJURIE.Total_Injured_Persons_Train_Accidents_Rail_Roads +
      INJURIE.Total_Injured_Persons_Transit_Non_Rail +
      INJURIE.Total_Injured_Persons_Transit_Rail +
      INJURIE.Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing +

);

let otrosMedios = INJURIES.map(INJURIE =>
      INJURIE.Total_Injured_Persons +
      INJURIE.Total_Injured_Persons_Employee_Or_Worker +
      INJURIE.Total_Injured_Persons_Gas_Pipeline +
      INJURIE.Total_Injured_Persons_Hazardous_Liquid_Pipeline +
      INJURIE.Total_Injured_Persons_Industrial_Or_Other +
      INJURIE.Total_Injured_Persons_Other_Incident +
      INJURIE.Total_Injured_Persons_Other_Incidents +
      INJURIE.Total_Injured_Persons_Pipeline
); */
