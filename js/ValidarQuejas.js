window.addEventListener("load",iniciar, false);

function iniciar()
{
Nombre=document.getElementById("name");
Correo=document.getElementById("email");
Lugar=document.getElementById("place");
Fecha=document.getElementById("date");
NumeroEco=document.getElementById("numberope");
Descripcion=document.getElementById("infonews");
EnviarQueja=document.getElementById("EnviarQueja");
}

function validarFormularioQuejas(){
	
	EnviarQueja.disabled=true;
	

	if(Nombre.value==''){
		document.getElementById("ErrorGeneralQuejas").style.display = "block";
		document.getElementById("ErrorNombreQuejas").style.display = "block";
		Nombre.focus();
		EnviarQueja.disabled=false;
		return false;
	}
	
	if(Correo.value==''){
		document.getElementById("ErrorGeneralQuejas").style.display = "block";
		document.getElementById("ErrorNombreQuejas").style.display = "none";
		document.getElementById("ErrorCorreoQuejas").style.display = "block";
		Correo.focus();
		EnviarQueja.disabled=false;
		return false;
	}
	
	if(Lugar.value==''){
		document.getElementById("ErrorGeneralQuejas").style.display = "block";
		document.getElementById("ErrorNombreQuejas").style.display = "none";
		document.getElementById("ErrorCorreoQuejas").style.display = "none";
		document.getElementById("ErrorLugarQuejas").style.display = "block";
		Lugar.focus();
		EnviarQueja.disabled=false;
		return false;
	}
	
	
	if(Fecha.value==''){
		document.getElementById("ErrorGeneralQuejas").style.display = "block";
		document.getElementById("ErrorNombreQuejas").style.display = "none";
		document.getElementById("ErrorCorreoQuejas").style.display = "none";
		document.getElementById("ErrorLugarQuejas").style.display = "none";
		document.getElementById("ErrorFechaQuejas").style.display = "block";
		Fecha.focus();
		EnviarQueja.disabled=false;
		return false;
	}
	
	if(NumeroEco.value==''){
		document.getElementById("ErrorGeneralQuejas").style.display = "block";
		document.getElementById("ErrorNombreQuejas").style.display = "none";
		document.getElementById("ErrorCorreoQuejas").style.display = "none";
		document.getElementById("ErrorLugarQuejas").style.display = "none";
		document.getElementById("ErrorFechaQuejas").style.display = "none";
		document.getElementById("ErrorNumEcoQuejas").style.display = "block";
		NumeroEco.focus();
		EnviarQueja.disabled=false;
		return false;
	}
	
	if(Descripcion.value==''){
		document.getElementById("ErrorGeneralQuejas").style.display = "block";
		document.getElementById("ErrorNombreQuejas").style.display = "none";
		document.getElementById("ErrorCorreoQuejas").style.display = "none";
		document.getElementById("ErrorLugarQuejas").style.display = "none";
		document.getElementById("ErrorFechaQuejas").style.display = "none";
		document.getElementById("ErrorNumEcoQuejas").style.display = "none";
		document.getElementById("ErrorDescripcionQuejas").style.display = "block";
		Descripcion.focus();
		EnviarQueja.disabled=false;
		return false;
	}
	
	

}






