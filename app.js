////////////////////
// WEBSITE ENGINE //
////////////////////

////////////////////
// GPA CALCULATOR //
////////////////////

// let course1 = { CName: "a", CHours: 1, CPts: 4 };
// let courseList = [course1, course2, ...];

function calculateGPA(courseList) {
  //////////////////////////////////
  // takes a list of courses and  //
  // returns the corresponding    //
  // GPA and grade                //
  //////////////////////////////////

  let totalHours = 0; //total hours in the list
  let totalPts = 0; //total points in the list
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

function getUpperBoundPercentage(charGrade) {
  ///////////////////////////////////////
  // takes a char of course grade and  //
  // returns the corresponding //////////
  // upper bound percentage    //
  ///////////////////////////////
  let upperPercentage = 0;
  charGrade = charGrade.toLowerCase();
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
  charGrade = charGrade.toLowerCase();
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
  let charPercent;
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

////////////////////////
// END GPA CALCULATOR //
////////////////////////

/////////////////////////////
// COURSE GRADE CALCULATOR //
/////////////////////////////

function calculateCourseGrade(weights, grades) {
  //list of the weights of the course components
  //the teo lists must be of equal lengths
  //let weights = [100, 50];
  //list of the grade on each component
  //let grades = [100, 50];

  let totalWeight = 0;
  for (let i = 0; i < weights.length; i++) {
    totalWeight += weights[i];
  }
  if (totalWeight != 100) return "error, weights not correct";
  if (weights.length != grades.length) return "error, I/O error";
  let courseGradeNumeric = 0;
  for (let i = 0; i < weights.length; i++) {
    courseGradeNumeric += (grades[i] / 100) * weights[i];
  }
  return courseGradeNumeric;
}

/////////////////////////////////
// END COURSE GRADE CALCULATOR //
/////////////////////////////////

//////////////////////////////////
// ASSIGNING INPUTS AND OUTPUTS //
//////////////////////////////////

//////////////////////////////////////
// END ASSIGNING INPUTS AND OUTPUTS //
//////////////////////////////////////

////////////////////////
// END WEBSITE ENGINE //
////////////////////////
