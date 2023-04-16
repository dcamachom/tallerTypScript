import { dataSeries } from './data.js';
var seriesTbody = document.getElementById("series");
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.titulo, "</td>\n                           <td>").concat(c.canal, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
