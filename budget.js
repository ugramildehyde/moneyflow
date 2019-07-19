function addRow() {
   "use strict";

    var i;
    var sumVal = 0;
    var table = document.getElementById("table");
    var row= document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.innerHTML = document.getElementById("name").value;
    td2.innerHTML  = parseInt(document.getElementById("amount").value);

    row.appendChild(td1);
    row.appendChild(td2);

    table.children[0].appendChild(row);

    for (i = 0, i < table.rows.length; i ++;) {
      sumVal = sumVal + parseInt(table.rows[i].cells[1].innerHTML)
    }
    var sV = addTotal(sumVal);

    document.getElementById("val").innerHTML = "Sum Value = " + sV;
}

function addTotal(sumVal) {
    var newVal = sumVal;
    return newVal + sumVal;
    }
