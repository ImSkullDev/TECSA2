$(document).ready(function(){

 
    $("#mensaje").hide();
    //queremos que esta variable sea global
    var fileExtension = "";
    //función que observa los cambios del campo file y obtiene información
    $('#imagen').change(function()
    {
        //obtenemos un array con los datos del archivo
        var file = $("#imagen")[0].files[0];
        //obtenemos el nombre del archivo
        var fileName = file.name;
        //obtenemos la extensión del archivo
        fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
        //obtenemos el tamaño del archivo
        var fileSize = file.size;
        //obtenemos el tipo de archivo image/png ejemplo
        var fileType = file.type;
        //mensaje con la información del archivo
		if(isPDF(fileExtension))
        {
		 $('#botonsubir').attr("disabled", false);
        showMessage("<span class='info'>Archivo para subir: "+fileName+", peso total: "+fileSize+" bytes.</span>");
		
		}else{
			  $('#botonsubir').attr("disabled", true);
			   message = $("<span class='error'>Archivo no permitido elije archivos pdf, rar, zip o xml.</span>");
                showMessage(message);
			
		}
    });
 
    //al enviar el formulario
    $('#botonsubir').click(function(){
				
        //información del formulario
        var formData = new FormData($("#formulario1")[0]);
        var message = ""; 
        //hacemos la petición ajax  
        $.ajax({
            url: '../html/upload.php',  
            type: 'POST',
            // Form data
            //datos del formulario
            data: formData,
            //necesario para subir archivos via ajax
            cache: false,
            contentType: false,
            processData: false,
            //mientras enviamos el archivo
				
            beforeSend: function(){
                message = $("<img src='../images/loading2.gif' width='80px'><br><br><span class='before'>Subiendo el archivo, por favor espere...</span> ");
                showMessage(message)        
            },
            //una vez finalizado correctamente
            success: function(data){
                message = $("<span class='success'>El archivo ha sido subido correctamente.</span>");
                showMessage(message);
                if(isImage(fileExtension))
                {
                    $(".showImage").html("<img src='Facturas/"+data+"' />");
                }
            },
            //si ha ocurrido un error
            error: function(){
                message = $("<span class='error'>Ha ocurrido un error.</span>");
                showMessage(message);
            }

				
		});
		
    });
})
 
//como la utilizamos demasiadas veces, creamos una función para 
//evitar repetición de código
function showMessage(message){
    $("#mensaje").html("").show();
    $("#mensaje").html(message);
}
 
//comprobamos si el archivo a subir es una imagen
//para visualizarla una vez haya subido
function isImage(extension)
{
    switch(extension.toLowerCase()) 
    {
        case 'jpg': case 'gif': case 'png': case 'jpeg':
            return true;
        break;
        default:
            return false;
        break;
    }
}


function isPDF(extension)
{
	switch(extension.toLowerCase()) 
    {
        case 'pdf': case 'zip': case 'rar': case 'xml':
            return true;
        break;
        default:
            return false;
        break;
    }
	
}