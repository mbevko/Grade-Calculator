/*number of questions = how many boxes there are. 0 1 2 3 4 5 6 = etc, each number equals a percentage and the opposing number wrong. 

step one: create a variable that decides how many rows to append. Keep track of those rows

100 - (numberWrong * number of questions / 100)
  for(let quesR = parseFloat(numQuesVal); quesR >= 1;  quesR--){
 
}
});

let numQues = document.querySelector(".num_of_ques");
let calcGrades = document.querySelector(".calc_grades");
let div = document.createElement("div");

function colOne() {
  let gradeBody = document.querySelector(".grade_calc_body");
  let div = document.createElement("div");
  gradeBody.appendChild(div);
  div.append
  div.className = "box";
  counter = 0;
};

let numQuesVal = numQues.value;


calcGrades.addEventListener('click', () => {
  let numQuesVal = numQues.value;
  for(let i = 0; i < numQuesVal; i++){
    i.length = colOne();
    i.length = counter++;
    div.outerHTML = counter;
  }
});


*/

var  gradeCalculator = {};

let numQues = document.querySelector(".num_of_ques");
let calcGrades = document.querySelector(".calc_grades");
let numQuesVal = numQues.value;

function colOne() {
  let gradeBody = document.querySelector(".grade_calc_body");
  let div = document.createElement("div");
  gradeBody.appendChild(div);
  div.append;
  div.className = "box";
};

let counter = 0;
calcGrades.addEventListener('click', () => {
  let numQuesVal = numQues.value;
  for(let i = 0; i < numQuesVal; i++){
    i.length = colOne();
    i.length = counter++;
    
  }
});


var MyApp = {}; // Globally scoped object

function foo(){
    MyApp.color = 'green';
}

function bar(){
    alert(MyApp.color); // Alerts 'green'
} 
