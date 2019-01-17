const classifiedTransp = (arr) => { 
    const copyData3 = [ ...arr];

    const newArr = [];
  
    copyData3.forEach(cant => {
      let obj = {};
  
      obj.urbano = (cant['Total_Injured_Persons_Highway'] + 
          cant['Total_Injured_Persons_Bus_Occupants'] +
          cant['Total_Injured_Persons_Commuter_Carrier'] + 
          cant['Total_Injured_Persons_Passenger_Car_Occupants'] +
          cant['Total_Injured_Persons_Pedalcyclists']);
    
      obj.motocicleta = (cant['Total_Injured_Persons_Motorcyclists'] +
        cant['Total_Injured_Persons_Pedestrians']);
  
      obj.carretera = (cant['Total_Injured_Persons_Truck_Occupants_Light'] +
          cant['Total_Injured_Persons_Truck_Occupants_Large']);
      
      obj.aereo = (cant['Total_Injured_Persons_Air'] +
          cant['Total_Injured_Persons_General_Aviation'] +
          cant['Total_Injured_Persons_On_Demand_Air_Taxi'] +
          cant['Total_Injured_Persons_US_Air_Carrier']);
  
      obj.ferrocarril = (cant['Total_Injured_Persons_Railroad_Alone'] + 
          cant['Total_Injured_Persons_Railroad_Train_Accidents'] +
          cant['Total_Injured_Persons_Train_Accidents_Rail_Roads'] + 
          cant['Total_Injured_Persons_Transit_Rail']);
      
      obj.maritimo = (cant['Total_Injured_Persons_Water'] +
          cant['Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties'] +
          cant['Total_Injured_Persons_Water_Vessel_Related'] + 
          cant['Total_Injured_Persons_Freight_Vessel'] +
          cant['Total_Injured_Persons_Passenger_Vessel'] +
          cant['Total_Injured_Persons_Recreational_Boating']);
  
      obj.otros = (cant['Total_Injured_Persons_Employee_Or_Worker'] +
          cant['Total_Injured_Persons_Gas_Pipeline'] +
          cant['Total_Injured_Persons_Hazardous_Liquid_Pipeline'] +
          cant['Total_Injured_Persons_Industrial_Or_Other'] +
          cant['Total_Injured_Persons_Other_Incident'] +
          cant['Total_Injured_Persons_Other_Incidents'] +
          cant['Total_Injured_Persons_Pipeline']);
      
      obj.year = cant['Year']
      
      newArr.push(obj);
    });
    return newArr;
  };

  window.newDataClass = {
      classifiedTransp
    };