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

document.addEventListener("keydown", function(event){
  check(event.key);
});


function check(key) {
  if(key.match(/\d/))
    insert(key);

  else if( key=='/' || key=='%' || key=='*' || key=='-' || key=='+' || key=='.')
    insert(key);

  else if( key == 'Enter')
    answer();

  else if( key == 'Backspace')
    back();

  else if( key == 'Escape')
    clearall();
}
