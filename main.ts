import {Serie} from './serie.js';
import {dataSeries} from './data.js';

let seriesTbody: HTMLElement = document.getElementById("series")!; 

renderSeriesInTable(dataSeries);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.titulo}</td>
                           <td>${c.canal}</td>
                           <td>${c.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
  });
}