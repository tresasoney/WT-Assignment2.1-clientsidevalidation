

let email=document.getElementById("email");
let error=document.getElementById("error");
var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Not matching';
    }
  }

 
  var validate = function() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(document.getElementById("email").value)){
      document.getElementById("error").innerText="Valid mail-id"
      document.getElementById("error").style.color="green";
          
        }
        else{
          error.innerHTML="Invalid mail-id";
          error.style.color="red";}
  }
  var  phone=function()
{

    var mobile = document.getElementById('mobile');
   
    
    var mess = document.getElementById('mess');

   
  
    if(mobile.value.length!=10){
       
        mess.innerHTML = "Should be 10 digit number!!";
        mess.style.color = "red";
       
    }
    else{
      mess.innerText="Valid contact number "
      mess.style.color="green"
    }
  }
  var name1= function(){
    let regexp = /^[A-Za-z]+$/;
    if(regexp.test(document.getElementById('name').value)){
      document.getElementById('error1').innerText="valid";
      document.getElementById('error1').style.color="green";
    }
    else{
      document.getElementById('error1').innerText="Use Charcter Only!!";
      document.getElementById('error1').style.color="red";
    }
  }
