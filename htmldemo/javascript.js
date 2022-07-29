
	
 	var a=1;
 	var b=2;
 	var c=a+b;
 	
 

function getdate(){
	var date= new Date();
	var par= document.getElementById("current_date");
		console.log(par);
	par.innerHTML = date;
		par.style.color = "red";
}
function getEmail(){
		var email = document.getElementById("email").value;

		document.getElementById("mail").innerHTML = "enter the email=" +email;
	console.log(email);
		}