let numQues = document.querySelector(".num_of_ques");
let calcGrades = document.querySelector(".calc_grades");
let gradeBody = document.querySelector(".grade_calc_body");
let numQuesVal = numQues.value;
let letterValue = "";

function colOne() {
  let gradeBody = document.querySelector(".grade_calc_body");
  let div = document.createElement("div");
  gradeBody.appendChild(div);
  div.append;
  div.className = "box";
  div.innerHTML = counter; 
};

function colTwo() {
  let gradeBody = document.querySelector(".grade_calc_body");
  let div = document.createElement("div");
  gradeBody.appendChild(div);
  div.append;
  div.className = "box";
  let getGrade = (numQues.value - counter ) / numQues.value * 100;
  div.innerHTML = Math.round(getGrade) + "%";  

};

function colThree() {
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

  div.innerHTML = letterValue;  

};

let cT = numQues.value;
let counterTwo = numQues.value;
let counter = 0;
calcGrades.addEventListener('click', () => {
  if (numQues.hasAttribute("disabled", ""))
    {
      numQues.removeAttribute("disabled", "")
      numQues.value = "";
      calcGrades.innerText = "Calculate Grades";
      let div = document.querySelectorAll(".grade_calc_body div");
      for(i = 0; i < div.length; i++){
      div[i].remove();
      }
    }else{
      numQues.setAttribute("disabled", "");
      calcGrades.innerText = "Clear Grades";
      counter = 0;
      let numQuesVal = numQues.value;
      for(let i = 0; i <= numQuesVal; i++){
        i.length = colOne();
        i.length = colTwo();
        i.length = colThree();
        i.length = counter++;
      };
    }
});

numQues.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  event.preventDefault();  
calcGrades.click();
}
});

  numQues.addEventListener('input', () => {
if(numQues.value <= 0 || NaN){
  calcGrades.setAttribute("disabled", "")
}else{
  calcGrades.removeAttribute("disabled", "")
}
  });

  if(numQues.value <= 0 || NaN){
    calcGrades.setAttribute("disabled", "")
  }else{
    calcGrades.removeAttribute("disabled", "")
  };