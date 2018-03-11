var userEntry= 
{parseInt(document.getElementById(“fieldname”).value);
} 

var new= (userEntry * 1.8) + 32;


document.getElementById("sumbit").onclick=function() {
	new = document.getElementById(".value").innerHTML;


if (new < 32) { 
document.body.style.backgroundColor= "00F";
}


if (new > = 32 && new < = 50) { 
document.body.style.backgroundColor= "FFa500";
}

if (new > 50 && new < = 70) { 
document.body.style.backgroundColor= "FFFF00";
}

if (new > 70) { 
document.body.style.backgroundColor= "FF0000";
}




