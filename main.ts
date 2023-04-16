import {Serie} from './serie.js';
import {dataSeries} from './data.js';

let seriesTbody: HTMLElement = document.getElementById("series")!; 
const averageTSeason: HTMLElement = document.getElementById("promedio-temporadas")!;

renderSeriesInTable(dataSeries);

averageTSeason.innerHTML = `${averageSeason(dataSeries)}`

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

function averageSeason(series: Serie[]): number {
  let totalCredits: number = 0;
  let num: number = 0;
  series.forEach((serie) => {
    totalCredits = totalCredits + serie.temporadas
    num=num+1});
  return totalCredits/num;
}