var columns = document.querySelectorAll(".col"); /*v List of elements (.col) */

function changeSize(event) {
  console.log("Column clicked!!!", event.target);

  columns.forEach(function (col) {
    col.style.width = "25%";
  });

  var column = event.target;
  column.style.width = "50%";
}
