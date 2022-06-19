let x = "karim";
let y = "Nina";
let hayaty =
  "Cpnstant misery and pain inside, please end it, please end me and end wogoody 2bl manheeh b nafsy.";
let alby =
  "ninz's life and existence makes it not rotten and void, please stay cus you are literally, literally, fucking literally the only one keeping me sane <3 ";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let course1 = { CName: "a", CHours: 1, CPts: 4 };
// let courseList = [course1, course2, ...];

function calculateGPA(courseList) {
  //////////////////////////////////
  // takes a list of courses and  //
  // returns the corresponding    //
  // GPA and grade                //
  //////////////////////////////////

  let totalHours = 0;
  let totalPts = 0;
  for (let i = 0; i < courseList.length; i++) {
    totalHours += courseList[i].CHours;
    totalPts += courseList[i].CPts * courseList[i].CHours;
  }
  return totalPts / totalHours;
}
