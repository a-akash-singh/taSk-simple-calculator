//taking the values of the input field
let output=document.getElementById("display");

function display(num){
    output.value+=num;
}

//calculating result
function calculate(){
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert('Not a valid Input');
    }
}

//cl used to clear display screen
function cl(){
    document.getElementById("display").value='';
}

//used as backspace
function del(){
    output.value=output.value.slice(0,-1);
}
