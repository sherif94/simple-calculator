
const input = document.getElementById('tx');
const form = document.querySelector('.calc');

// variable 

let x , y = 0, sign;
//clear evry thing
document.getElementById('sa').onclick = function clear(){
   input.value = '';
}

form.onclick = function(e) {
  if(e.target.value != undefined) {
    if(e.target.value == '/' || e.target.value == '+' ||e.target.value == '*' || e.target.value == '-') {
      x = +input.value.substr(0, input.value.indexOf(e.target.value));
      console.log(x);
      sign = e.target.value;
      console.log(sign);
      input.value = '';
    }

    else if(e.target.value == '=') {
      y = +input.value.replace(/[^0-9]/g ,'');
      switch(sign) {
        case '+' :
         input.value = sum(x,y);
          break;
        case '-' :
          input.value = sub(x,y);
          break;
        case '*' :
          input.value = mul(x,y);
          break;
        case '/' :
          input.value = div(x,y);
          break;
      }
    }
  }

    
}


function sum(x,y) {
  return x+y;
}

function sub(x,y) {
  return x-y;
}
function mul(x,y) {
  return x*y;
}

function div(x,y) {
    return x/y;
}


