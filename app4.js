const gucGPA = document.getElementById("GUCGPA");
const pt4GPA = document.getElementById("pt4Scale");
const convert = document.getElementById("convertGPA");
convert.addEventListener("click", convertF);
gucGPA.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    convertF();
  }
});
function convertF() {
  let resGPA = 0;
  let toConvert = parseFloat(gucGPA.value);
  if (isNaN(toConvert) || toConvert < 0.7 || toConvert > 5) {
    alert("Plaese enter a valid number between 0.7 and 5.0");
    return;
  }
  // resGPA = ((5.0 - toConvert) / (5.0 - 0.7)) * 3 + 1;
  resGPA = 4 - ((toConvert - 1.0) / 3) * 2;
  resGPA = Math.round((resGPA + Number.EPSILON) * 1000) / 1000;
  pt4GPA.textContent = resGPA;
}
