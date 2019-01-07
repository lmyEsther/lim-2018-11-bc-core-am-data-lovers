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
const newData = injuries.classifiedTransp(data);
let sectionCard = document.getElementById('card');
let tableDataPrevia = document.getElementById('previa');
let dataRecent = injuries.recentYears(newData).reverse();
let selectYearStar = document.getElementById('añoInicio');
let selectYearFinish = document.getElementById('añoFin');
let btnFilterByRange = document.getElementById('btn-select-range');
let arrAños = injuries.obtenerAñosUnicos(newData);
// let dataTableFilter = document.getElementById('dataFilter');
const selectOrderInjuries = document.getElementById('order-injuries');
const YEAR_KEY = 'year';

window.google.charts.load('current', {'packages': ['corechart']});

const cardCreater = (arr, section) => {
  let cardData = '';

  arr.forEach((cant => {
    cardData += '<div class="card">' + '<div class="card-block">' +
   `<h3 class="card-title">${parseInt(cant.year)}</h3>` +
   '<div class="pie-chart"></div>' + '</div>' + '</div>' + '</div>';
  }));

  section.innerHTML = cardData;

  const drawChart = (index, element) => {
    if (index >= arr.length) return;
    let scores = Object.entries(arr[index]); // creates an array like [key, value]
    scores = scores.filter((score) => {
      return score[0] !== YEAR_KEY;
    });
   
    let data = window.google.visualization.arrayToDataTable([
      ['Medio de Transporte', 'Total Personas Accidentadas'], ...scores
    ]);

    let options = {
      width: 400
    };

    let chart = new window.google.visualization.PieChart(element);
    chart.draw(data, options);
  };

  // eslint-disable-next-line no-undef
  const sectionPieCharts = $(section).find('.pie-chart');
  // dibujar los pie chart cuando se haya cargado la libreria
  window.google.charts.setOnLoadCallback(() => {
    sectionPieCharts.each(drawChart);
  }
  );
};


cardCreater(dataRecent, tableDataPrevia);

cardCreater(newData, sectionCard);

arrAños.forEach((año) => {
  selectYearStar.innerHTML += `<option value = ${año}>${año}</option>`;
  selectYearFinish.innerHTML += `<option value = ${año}>${año}</option>`;
});

btnFilterByRange.addEventListener('click', (event) => { 
  event.preventDefault();
  
  const yearStar = selectYearStar.value;
  const yearFinish = selectYearFinish.value;
  const message = document.getElementById('messageError');
  const averageText = document.getElementById('average')

  if (yearStar > yearFinish) {
    message.innerHTML = '<i>Por favor, ingresa un rango válido</i>';
    sectionCard.innerHTML = '';
    averageText.innerHTML = '';
  } else {
    message.innerHTML = '';
    let arrFilterByYear = injuries.totalInjuredPersonsByYear(newData, yearStar, yearFinish);
    cardCreater(arrFilterByYear, sectionCard);
    averageText.innerHTML = `<h4>El promedio de camion es ${promedio.camion(arrFilterByYear).toFixed(2)}</h4>`;
  }
});

selectOrderInjuries.addEventListener('change', () => {
  const arrOrderData = injuries.sortDataYear(newData, selectOrderInjuries.value);
  cardCreater(arrOrderData, sectionCard);
});

buttonData.addEventListener('click', clickButtonData);
buttonStart.addEventListener('click', clickButtonStart);