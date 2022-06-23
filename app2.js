/////////////////////////////
// COURSE GRADE CALCULATOR //
/////////////////////////////
////////////
// INPUTS //
////////////
let CGCCname = document.getElementById("CGCCname");
let CGCWeights = document.getElementById("CGCWeights");
let CGCGrades = document.getElementById("CGCGrades");
let ins = [CGCCname, CGCWeights];
/////////////
// OUTPUTS //
/////////////
let CourseGradePercent = document.getElementById("CGP");
let CourseGradeChar = document.getElementById("CGC");
let outs = [CourseGradePercent, CourseGradeChar];
/////////////
// BUTTONS //
/////////////
let CalculateCourseGrade = document.getElementById("CalculateCourseGrade");
let neededForFinal = document.getElementById("CHMNIFFCG");
let resetCourseGrade = document.getElementById("resetCourseGrade");
/////////////////////
//ADDING LISTENERS //
/////////////////////
CalculateCourseGrade.addEventListener("click", calculateCourse);
neededForFinal.addEventListener("click", calculateNeededFinal);
resetCourseGrade.addEventListener("click", restPageCourseGrade);
///////////////
// VARIABLES //
///////////////

//////////////////////
// BUTTON FUNCTIONS //
//////////////////////
function calculateCourse() {
  let weightsString = CGCWeights.value;
  let gradesString = CGCGrades.value;
  let weightsList = getList(weightsString);
  let gradesList = getList(gradesString);

  if (weightsList.length !== gradesList.length) {
    alert("Wrong input at Weights and grades!");
    return;
  }
  let totalGrade = calculateCourseGrade(weightsList, gradesList);
  CourseGradePercent.value = totalGrade;
  CourseGradeChar.value = getCharPercent(totalGrade / 100);
}

function calculateNeededFinal() {
  let weightsString = CGCWeights.value;
  let gradesString = CGCGrades.value;
  let weightsList = getList(weightsString);
  let gradesList = getList(gradesString);
  let total = 0;
  for (let i = 0; i < weightsList.length; i++) {
    total += weightsList[i];
  }
  if (total < 100) weightsList.push(100 - total);

  //   let omak = "set fadelah";
  //   if (omak !== "set fadela") {
  //     omak = "ra2asa";
  //   }
  if (CourseGradeChar.value === "default") {
    alert("Please Select a grade.");
    return;
  }
  let uperBound = getUpperBoundPercentage(CourseGradeChar.value);
  let lwerBound = getLowerBoundPercentage(CourseGradeChar.value);

  let finalUper = getGrade(weightsList, gradesList, uperBound);
  let finallower = getGrade(weightsList, gradesList, lwerBound);
  log(finalUper + " " + finallower);
  document.getElementById("CGPLabel").textContent = "Final Course Percentage";
  CourseGradePercent.value =
    " Score between " +
    finalUper +
    " and " +
    finallower +
    " in the Final. Good Luck :)";
}
function restPageCourseGrade() {
  location.reload();
}
//////////////////////
// HELPER FUNCTIONS //
//////////////////////
function getList(string) {
  //"20, 50, 60" => [20,50,60]
  let temp = string.split(",");
  let resList = [];
  for (let i = 0; i < temp.length; i++) {
    resList.push(parseFloat(temp[i]));
  }
  for (let i = 0; i < resList.length; i++) {
    if (isNaN(resList[i])) {
      alert("error in list");
      return;
    }
  }
  return resList;
}

function getGrade(listOfWeights, listOfGrades, desiredPercent) {
  //list of grades length = list of weights length -1
  let totalSoFar = 0;
  for (let i = 0; i < listOfGrades.length; i++) {
    totalSoFar += (listOfGrades[i] / 100) * listOfWeights[i];
  }

  return (
    ((desiredPercent - totalSoFar) / listOfWeights[listOfWeights.length - 1]) *
    100
  );
}

//////////////////////////
// END HELPER FUNCTIONS //
//////////////////////////

/////////////////////////////////
// END COURSE GRADE CALCULATOR //
/////////////////////////////////
//////////////////
// GLOBAL LOGIC //
//////////////////
function log(x) {
  console.log(x);
}

function calculateGPA(courseList) {
  //////////////////////////////////
  // takes a list of courses and  //
  // returns the corresponding    //
  // GPA and grade                //
  //////////////////////////////////

  let totalHours = 0; //total hours in the list
  let totalPts = 0; //total points in the list
  let CurrGPAValue = parseFloat(CurrGPA.value);
  let PrevTotCredHrsValue = parseFloat(PrevTotCredHrs.value);

  if (isNaN(CurrGPAValue) || isNaN(PrevTotCredHrsValue)) {
    totalHours = 0;
    totalPts = 0;
  } else {
    totalHours = PrevTotCredHrsValue;
    totalPts = PrevTotCredHrsValue * CurrGPAValue;
  }
  for (let i = 0; i < courseList.length; i++) {
    totalHours += courseList[i].CHours;
    //summing the total hours
    totalPts += courseList[i].CPts * courseList[i].CHours;
    //each course points = individual grade points * credit hours of the course and adding them together
  }
  return totalPts / totalHours;
}

function getNumericGPA(charGrade) {
  ///////////////////////////////////////
  // takes a char of course grade and  //////
  // returns the corresponding numeric GPA //
  ///////////////////////////////////////////
  let grade = 0;
  charGrade = charGrade.toLowerCase();
  switch (charGrade) {
    case "A+":
      grade = 0.7;
      break;
    case "A":
      grade = 1.0;
      break;
    case "A-":
      grade = 1.3;
      break;
    case "B+":
      grade = 1.7;
      break;
    case "B":
      grade = 2.0;
      break;
    case "B-":
      grade = 2.3;
      break;
    case "C+":
      grade = 2.7;
      break;
    case "C":
      grade = 3.0;
      break;
    case "C-":
      grade = 3.3;
      break;
    case "D+":
      grade = 3.7;
      break;
    case "D":
      grade = 4.0;
      break;
    case "F":
      grade = 5.0;
      break;
    default:
      console.log("WRONG GRADE ENTERED");
  }

  return grade;
}

function getIndexGPA(charGrade) {
  ///////////////////////////////////////
  // takes a char of course grade and  //////
  // returns the corresponding numeric GPA //
  ///////////////////////////////////////////
  let grade = 0;
  charGrade = charGrade.toLowerCase();
  switch (charGrade) {
    case "A+":
      grade = 1;
      break;
    case "A":
      grade = 2;
      break;
    case "A-":
      grade = 3;
      break;
    case "B+":
      grade = 4;
      break;
    case "B":
      grade = 5;
      break;
    case "B-":
      grade = 6;
      break;
    case "C+":
      grade = 7;
      break;
    case "C":
      grade = 8;
      break;
    case "C-":
      grade = 9;
      break;
    case "D+":
      grade = 10;
      break;
    case "D":
      grade = 11;
      break;
    case "F":
      grade = 12;
      break;
    default:
      console.log("WRONG GRADE ENTERED");
  }

  return grade;
}

function getUpperBoundPercentage(charGrade) {
  ///////////////////////////////////////
  // takes a char of course grade and  //
  // returns the corresponding //////////
  // upper bound percentage    //
  ///////////////////////////////
  let upperPercentage = 0;
  switch (charGrade) {
    case "A+":
      upperPercentage = 100;
      break;
    case "A":
      upperPercentage = 93.9;
      break;
    case "A-":
      upperPercentage = 89.9;
      break;
    case "B+":
      upperPercentage = 85.9;
      break;
    case "B":
      upperPercentage = 81.9;
      break;
    case "B-":
      upperPercentage = 77.9;
      break;
    case "C+":
      upperPercentage = 73.9;
      break;
    case "C":
      upperPercentage = 69.9;
      break;
    case "C-":
      upperPercentage = 64.9;
      break;
    case "D+":
      upperPercentage = 59.9;
      break;
    case "D":
      upperPercentage = 54.9;
      break;
    case "F":
      upperPercentage = 49.9;
      break;
    default:
      console.log("WRONG GRADE ENTERED");
  }

  return upperPercentage;
}

function getLowerBoundPercentage(charGrade) {
  ///////////////////////////////////////
  // takes a char of course grade and  //
  // returns the corresponding //////////
  // upper bound percentage    //
  ///////////////////////////////
  let lowerPercentage = 0;
  switch (charGrade) {
    case "A+":
      lowerPercentage = 94;
      break;
    case "A":
      lowerPercentage = 90;
      break;
    case "A-":
      lowerPercentage = 86;
      break;
    case "B+":
      lowerPercentage = 82;
      break;
    case "B":
      lowerPercentage = 78;
      break;
    case "B-":
      lowerPercentage = 74;
      break;
    case "C+":
      lowerPercentage = 70;
      break;
    case "C":
      lowerPercentage = 65;
      break;
    case "C-":
      lowerPercentage = 60;
      break;
    case "D+":
      lowerPercentage = 55;
      break;
    case "D":
      lowerPercentage = 50;
      break;
    case "F":
      lowerPercentage = 0;
      break;
    default:
      console.log("WRONG GRADE ENTERED");
  }

  return lowerPercentage;
}

function getCharGPA(numGPA) {
  let charGPA;
  if (numGPA <= 0.99) charGPA = "A+";
  else if (numGPA > 0.99 && numGPA <= 1.29) charGPA = "A";
  else if (numGPA > 1.29 && numGPA <= 1.69) charGPA = "A-";
  else if (numGPA > 1.69 && numGPA <= 1.99) charGPA = "B+";
  else if (numGPA > 1.99 && numGPA <= 2.29) charGPA = "B";
  else if (numGPA > 2.29 && numGPA <= 2.69) charGPA = "B-";
  else if (numGPA > 2.69 && numGPA <= 2.99) charGPA = "C+";
  else if (numGPA > 2.99 && numGPA <= 3.29) charGPA = "C";
  else if (numGPA > 3.29 && numGPA <= 3.69) charGPA = "C-";
  else if (numGPA > 3.69 && numGPA <= 3.99) charGPA = "D+";
  else if (numGPA > 3.99 && numGPA <= 4.99) charGPA = "D";
  else charGPA = "F";
  return charGPA;
}

function getCharPercent(numPerent) {
  let charPercent = "";
  if (numPerent >= 0.94) charPercent = "A+";
  else if (numPerent < 0.94 && numPerent >= 0.9) charPercent = "A";
  else if (numPerent < 0.9 && numPerent >= 0.86) charPercent = "A-";
  else if (numPerent < 0.86 && numPerent >= 0.82) charPercent = "B+";
  else if (numPerent < 0.82 && numPerent >= 0.78) charPercent = "B";
  else if (numPerent < 0.78 && numPerent >= 0.74) charPercent = "B-";
  else if (numPerent < 0.74 && numPerent >= 0.7) charPercent = "C+";
  else if (numPerent < 0.7 && numPerent >= 0.65) charPercent = "C";
  else if (numPerent < 0.65 && numPerent >= 0.6) charPercent = "C-";
  else if (numPerent < 0.6 && numPerent >= 0.55) charPercent = "D+";
  else if (numPerent < 0.55 && numPerent >= 0.5) charPercent = "D";
  else charPercent = "F";
  return charPercent;
}

function calculateCourseGrade(weightsIn, gradesIn) {
  //list of the weights of the course components
  //the teo lists must be of equal lengths
  //let weights = [100, 50];
  //list of the grade on each component
  //let grades = [100, 50];

  let totalWeight = 0;
  for (let i = 0; i < weightsIn.length; i++) {
    totalWeight += weightsIn[i];
  }
  if (totalWeight != 100) return "error, weights not correct";
  if (weightsIn.length != gradesIn.length) return "error, I/O error";
  let courseGradeNumeric = 0;
  for (let i = 0; i < weightsIn.length; i++) {
    log(courseGradeNumeric);
    courseGradeNumeric += (gradesIn[i] / 100) * weightsIn[i];
  }
  return courseGradeNumeric;
}
//////////////////////
// END GLOBAL LOGIC //
//////////////////////
