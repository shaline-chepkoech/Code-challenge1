function returngrade(){
     let marks = prompt("Input students marks");
if (marks < 0 || marks > 100 || isNaN(marks))
    {return 'Type a number between 0 and 100';
    }
        let grade;
        if (marks > 79) {
            grade = 'A';
        }else if (marks >= 60 && marks <= 79){

            grade = 'B';
        }else if (marks >= 49 && marks <= 59){

            grade = 'C';
        }else if (marks >= 40 && marks <= 49){

        grade = 'D';
    }else {

        grade = 'E';

    }
    return `The grade is: ${grade}`;
}
   
   console.log(returngrade());
