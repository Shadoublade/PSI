var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("skrypt");
x.innerHTML = "Wielkość okna szerokość: " + w + ", wysokość: " + h + ".";


function getConfirmation(){
	var retVal = confirm("Czy chcesz przejść na strone uczelni ?");
	if( retVal == true ){
		document.write ("Zatwierdzone");
		window.open("https://pwsbia.edu.pl/","","height=1080, width=1920");
		return true;
	}else{
		document.write ("Anulowane");
		window.location.reload(true);
		return false;
		}
	}
	
function visiblereso(){
	var c = window.open("","","height=400, width=600");
	c.window.open;
	var w = window.outerWidth;
	var h = window.outerHeight;
	var txt = "Rozmiar okna macieżystego: szerokość=" + w + ", wysokość=" + h;
	c.window.document.write(txt);
}