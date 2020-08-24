let numQues = document.querySelector(".num_of_ques");
let calcGrades = document.querySelector(".calc_grades");
let numQuesVal = numQues.value;

let letterValue = "";


function colOne() {
  let gradeBody = document.querySelector(".grade_calc_body");
  let div = document.createElement("div");
  gradeBody.appendChild(div);
  div.append;
  div.className = "box";
  let getGrade = (numQues.value - counter ) / numQues.value * 100;
  if(getGrade >= 90){
    letterValue = "A"
  }else if(getGrade >= 80){
    letterValue = "B"
  }else if(getGrade >= 70){
    letterValue = "C"
  }else if(getGrade >= 65){
    letterValue = "D"
  }else if(getGrade < 65){
    letterValue = "F"
  }

  div.innerHTML = counter + " " + Math.round(getGrade) + " " + letterValue; 

};

let counter = 1;
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
