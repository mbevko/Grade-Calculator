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
  div.innerHTML = counter; 
};

function colFour() {
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


let counterTwo = numQues.value;
let counter = 0;
calcGrades.addEventListener('click', () => {
  if (numQues.hasAttribute("disabled", ""))
    {
      numQues.removeAttribute("disabled", "")
      numQues.value = "";
      location.reload();
      calcGrades.innerText = "Calculate Grades";
    }else{
      numQues.setAttribute("disabled", "");
      calcGrades.innerText = "Clear Grades";
      counter = 0;
      let numQuesVal = numQues.value;
      for(let i = 0; i <= numQuesVal; i++){
        i.length = colOne();
        i.length = colTwo();
        i.length = colThree();
        i.length = colFour();
        i.length = counter++;
      };
    }
});






/*
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


  //remove text after submit. Add third row. Style.

*/