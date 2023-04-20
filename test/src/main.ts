type subject = {
  students: number;
  teachers: number;
}

type nameOfSubj = {
  mathematics: subject;
  biology: subject;
  geography: subject;
  chemistry: subject;
}

const subjects = {
  mathematics: {
      students: 200,
      teachers: 6
  },
  biology: {
      students: 120,
      teachers: 6
  },
  geography: {
      students: 60,
      teachers: 2
  },
  chemistry: {
      students: 100,
      teachers: 3
  }
}

//task 1
function getSubjectName(subjects: nameOfSubj): string {
  return Object.keys(subjects).join(', ');
}

console.log(getSubjectName(subjects));

//task 2
function getAllStudents(subjects:nameOfSubj):number{
  return Object.values(subjects)
  .reduce((acc, {students}) => acc + students, 0)
}

console.log(getAllStudents(subjects));

function getAllTeachers(subjects:nameOfSubj):number{
  return Object.values(subjects)
  .reduce((acc, {teachers}) => acc + teachers, 0)
}

console.log(getAllTeachers(subjects));

function getAllPeoples (a:number, b:number): number{
  return a + b;
}

console.log(getAllPeoples(getAllStudents(subjects), getAllTeachers(subjects)));

//task 3
function getAverageOfStudents(subjects:nameOfSubj):number{
  return getAllStudents(subjects) / Object.keys(subjects).length;
}

console.log(getAverageOfStudents(subjects));

//task 4
function getArrOfObj (subjects:nameOfSubj):Array<[string, subject]>{
  return Object.entries(subjects);
}

console.log(getArrOfObj(subjects));

//task 5 
function sortArrOfSubject(subjects:nameOfSubj):Array<[string, subject]>{
  return getArrOfObj(subjects).sort((subA, subB) => subA[1].teachers - subB[1].teachers);
}

console.log(sortArrOfSubject(subjects));
