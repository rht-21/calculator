function insert(num){
  document.querySelector(".textview").value = document.querySelector(".textview").value + num;
}

function answer(){
  var finalExpression = document.querySelector(".textview").value;
  if(finalExpression)
    document.querySelector(".textview").value = eval(finalExpression);
}

function clearall(){
    document.querySelector(".textview").value = "";
}

function back(){
    var exp = document.querySelector(".textview").value;
    document.querySelector(".textview").value = exp.substring(0,exp.length-1);
}


var numberofButtons = document.querySelectorAll(".button").length;

for(var i=0; i<numberofButtons; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", Response);
}

function Response() {
  var buttonpress = this.value;
  check(buttonpress)
}

document.addEventListener("keydown", function(event){
  check(event.key);
});


function check(key) {
  if(key.match(/\d/))
    insert(key);

  else if( key=='/' || key=='%' || key=='*' || key=='-' || key=='+' || key=='.')
    insert(key);

  else if( key == 'Enter' || key == '=')
    answer();

  else if( key == 'Backspace' || key == 'DEL')
    back();

  else if( key == 'Escape' || key == 'AC')
    clearall();
}
