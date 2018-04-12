var userEntry;
var newtemp;


document.getElementById("submit").onclick=function() {
	userEntry = parseInt(document.getElementById("fieldName").value);
	newtemp = (userEntry * 1.8) + 32;
	console.log(userEntry, newtemp);
	document.getElementById("far").innerHTML=userEntry;
	document.getElementById("cel").innerHTML=newtemp;

	if (newtemp < 32) { 
	document.body.style.backgroundColor= "#00F";
	}


	if (newtemp >= 32 && newtemp <= 50) { 
	document.body.style.backgroundColor= "#FFa500";
	}

	if (newtemp > 50 && newtemp <= 70) { 
	document.body.style.backgroundColor= "#FFFF00";
	}

	if (newtemp > 70) { 
	document.body.style.backgroundColor= "#FF0000";
	}
}




