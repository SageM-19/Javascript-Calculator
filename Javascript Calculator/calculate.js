
//Linked Elements
var calculation = document.getElementById('CalcState'); 
var solution = document.getElementById('solution');

//function of for calculating the string that was inputted
function solveproblem(calc){
    let solution = eval(calc);
    return solution;
}

//Main solution. Checks to see if there were any letters in the string or if there are any numbers
solution.addEventListener("click", function(Event){
    
    if(!calculation.value){
      alert("Please input your question");  
    }
    else if(!/\d/.test(calculation.value) || /[a-zA-Z]/.test(calculation.value)){
        alert("Please input an equation");
    }
    else {
        document.getElementById('AnswerState').innerHTML = solveproblem(calculation.value);
    }
    event.preventDefault();
});