document.getElementById("Submit").onclick = function () {
  let side1 = document.getElementById("s1").value;
  let side2 = document.getElementById("s2").value;

  side1 = parseInt(side1) || 0;
  side2 = parseInt(side2) || 0;
  let hypotenuse = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
  document.getElementById("output").value = hypotenuse;
};
