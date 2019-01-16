let data;
const buttonData = document.getElementById('datos');
const buttonStart = document.getElementById('start');
const screenStar = document.getElementById('screenStar');
const allData = document.getElementById('allData');

// fetch

fetch('https://raw.githubusercontent.com/lmyEsther/lim-2018-11-bc-core-am-data-lovers/DevOps/src/data/injuries/injuries.json')
  .then((response) => {
    if (response.status === 200) return response.json();
  })
  .then((respuestaJson) => {
    data = respuestaJson;
    injuriesFetch(data);    
  });

function injuriesFetch(data) {
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
      cardData += `<div class="card">
                <h3 class="card-title">${parseInt(cant.year)}</h3>
                <div class="pie-chart"></div></div>`;
    }));
    
    section.innerHTML = cardData;
    // pie charts
    const drawChart = (index, element) => {
      if (index >= arr.length) return;
      let scores = Object.entries(arr[index]); // creates an array like [key, value]
      scores = scores.filter((score) => {
        return score[0] !== 'year';
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
    const averageText = document.getElementById('average');

    if (yearStar > yearFinish) {
      message.innerHTML = '<i>Por favor, ingresa un rango válido</i>';
      sectionCard.innerHTML = '';
      averageText.innerHTML = '';
    } else {
      message.innerHTML = '';
      let arrFilterByYear = injuries.totalInjuredPersonsByYear(newData, yearStar, yearFinish);
    
      if (yearStar >= 1990) {
        cardCreater(arrFilterByYear, sectionCard);
        averageText.innerHTML = `<ul class="list-unstyled">
      <li>The Average Number of People Injured by Transport</li>
      <li>Urban: ${promedio.averageCalc(arrFilterByYear, 'urbano')}</li>
      <li>Air: ${promedio.averageCalc(arrFilterByYear, 'aereo')}</li>
      <li>Railway: ${promedio.averageCalc(arrFilterByYear, 'ferrocarril')}</li>
      <li>Seaborne: ${promedio.averageCalc(arrFilterByYear, 'maritimo')}</li>
      <li>Others: ${promedio.averageCalc(arrFilterByYear, 'otros')}</li>
      </ul>`;
      } else {
        cardCreater(arrFilterByYear, sectionCard);
        averageText.innerHTML = '';
      }
    }
  });

  // evento para ordenar data
  selectOrderInjuries.addEventListener('change', () => {
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

  buttonData.addEventListener('click', clickButtonData); // muestra ventana principal
  buttonStart.addEventListener('click', clickButtonStart); // muestra ventana de datos
}
