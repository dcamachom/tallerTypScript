import { dataSeries } from './data.js';
var seriesTbody = document.getElementById("series");
var averageTSeason = document.getElementById("promedio-temporadas");
renderSeriesInTable(dataSeries);
averageTSeason.innerHTML = "".concat(averageSeason(dataSeries));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.titulo, "</td>\n                           <td>").concat(c.canal, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function averageSeason(series) {
    var totalCredits = 0;
    var num = 0;
    series.forEach(function (serie) {
        totalCredits = totalCredits + serie.temporadas;
        num = num + 1;
    });
    return totalCredits / num;
}
