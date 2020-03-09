// Using the class syntax creates a constructor function for Student that assigns a name, mathGrade, scienceGrade, englishGrade, and studentId to each student.

// Include a method that returns the GPA (the sum of the 3 grades divided by 3). (10 minutes)

// Solution
class Student {
  constructor(name, id, scienceGrade, englishGrade, mathGrade) {
    this.name = name;
    this.id = id;
    this.scienceGrade = scienceGrade;
    this.mathGrade = mathGrade;
    this.englishGrade = englishGrade;
  }

  getGPA() {
    return (this.scienceGrade + this.mathGrade + this.englishGrade) / 3;
  }
}

var ralph = new Student('Ralph', 1200, 3.0, 4.0, 3.2);
console.log(ralph.getGPA());
