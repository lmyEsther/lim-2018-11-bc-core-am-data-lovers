// obteniendo injuries.json
fetch('https://raw.githubusercontent.com/lmyEsther/lim-2018-11-bc-core-am-data-lovers/DevOps/src/data/injuries/injuries.json')
  .then((response) => {
    if (response.status === 200) return response.json();
  })
  .then((respuestaJson) => {
    let data = respuestaJson;
    injuriesFetch(data);    
  });

function injuriesFetch(data) {
  const buttonData = document.getElementById('datos');
  const buttonStart = document.getElementById('start');
  const screenStar = document.getElementById('screenStar');
  const allData = document.getElementById('allData');

  const newData = newDataClass.classifiedTransp(data);
  let sectionCard = document.querySelector('#card');
  let tableDataPrevia = document.querySelector('#previa');
  let dataRecent = injuries.recentYears(newData).reverse();
  let selectYearStar = document.getElementById('anioInicio');
  let selectYearFinish = document.getElementById('anioFin');
  let btnFilterByRange = document.getElementById('btn-select-range');
  let arrAnios = injuries.obtenerAniosUnicos(newData);
  const selectOrderInjuries = document.getElementById('order-injuries');

  window.google.charts.load('current', {'packages': ['corechart']});
  
  const cardCreater = (arr, section) => {
    let cardData = '';
    
    arr.forEach((cant => {
      cardData += `<div class="card"><div class="col-sm-4">
                <h4 class="card-title">${parseInt(cant.year)}</h4>
                <div class="pie-chart"></div></div></div>`;
    }));
    
    section.innerHTML = cardData;

    // pie charts
    const drawChart = (index, element) => {
      if (index >= arr.length) return;
      let scores = Object.entries(arr[index]); // creates an array like [key, value]
      scores = scores.filter((score) => {
        return score[0] !== 'year' && score[0] !== 'promedio';
      });
    
      let data = window.google.visualization.arrayToDataTable([
        ['Medio de Transporte', 'Total Personas Accidentadas'], ...scores
      ]);
    
      let options = {
        'responsive': true,
        'width': 300
      };
    
      let chart = new window.google.visualization.PieChart(element);
      chart.draw(data, options);
    };
    
    const sectionPieCharts = $(section).find('.pie-chart');
    // dibujar los pie chart cuando se haya cargado la libreria
    window.google.charts.setOnLoadCallback(() => {
      sectionPieCharts.each(drawChart);
    });
  };

  arrAnios.forEach((anio) => {
    selectYearStar.innerHTML += `<option value = ${anio}>${anio}</option>`;
    selectYearFinish.innerHTML += `<option value = ${anio}>${anio}</option>`;
  });

  // evento para filtrar la data
  btnFilterByRange.addEventListener('click', (event) => { 
    event.preventDefault();
    
    const yearStar = selectYearStar.value;
    const yearFinish = selectYearFinish.value;
    const message = document.getElementById('messageError');

    if (yearStar > yearFinish) {
      message.innerHTML = '<i>Por favor, ingresa un rango válido</i>';
      sectionCard.innerHTML = '';
    } else {
      sectionCard.innerHTML = '';
      message.innerHTML = '';
      let arrFilterByYear = injuries.totalInjuredPersonsByYear(newData, yearStar, yearFinish);
      
      const dataEnArr = (arr) => {
        let newArr2 = [];

        arr.forEach(ele => {
          newArr2.push(Object.values(ele));
        });
        return newArr2;
      };
      graficaCombo(dataEnArr(arrFilterByYear));
      // cardCreater(arrFilterByYear, sectionCard);
    }
  });

  // funcion para graficas de barras y promedio
  const graficaCombo = (arr) => {
    window.google.charts.load('current', {'packages': ['bar']});
    window.google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      let data = window.google.visualization.arrayToDataTable([
        ['Year', 'Urban', 'Motorcycles', 'Highway', 'Air', 'Railway', 'Seaborne', 'Others', 'Average'], ...arr
      ]);

      let options = {
        title: 'Persons Injured by Transportation',
        vAxis: {title: 'Number Persons Injuried'},
        hAxis: {title: 'Year'},
        seriesType: 'bars',
        series: {7: {type: 'line'}},
        responsive: true
      };

      const chart = new window. google.visualization.ComboChart(document.getElementById('combochart_material'));
      chart.draw(data, options);
    }
  };
  // evento para ordenar data
  selectOrderInjuries.addEventListener('change', () => {
    document.getElementById('combochart_material').innerHTML = '';

    const orderBy = selectOrderInjuries.value;

    let orderCondition;

    switch (orderBy) {
    case 'lessRecent':
      orderCondition = 'asc';
      break;
    case 'lessUrbano':
      orderCondition = 'asc';
      break;
    case 'mostRecent':
      orderCondition = 'desc';
      break;
    case 'mostUrbano':
      orderCondition = 'desc';
      break;
    default:
    }

    const arrOrderData = injuries.sortData(newData, orderBy, orderCondition);
    cardCreater(arrOrderData, sectionCard);
  });

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

  cardCreater(dataRecent, tableDataPrevia);

  cardCreater(newData, sectionCard);
  buttonData.addEventListener('click', clickButtonData); // muestra ventana principal
  buttonStart.addEventListener('click', clickButtonStart); // muestra ventana de datos
}
