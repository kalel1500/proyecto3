var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_datosContactoUnico;


function inicializaXhr_datosContactoUnico() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function cargaContenido_datosContactoUnico(url, metodo, funcion, id) {
	peticion_datosContactoUnico = inicializaXhr_datosContactoUnico();
	if(peticion_datosContactoUnico) {
		peticion_datosContactoUnico.onreadystatechange = funcion;
		peticion_datosContactoUnico.open(metodo, url, true);

		peticion_datosContactoUnico.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		peticion_datosContactoUnico.send("id_contacto="+id);
		
	}
}

function consultarDatos_datosContactoUnico(){
	div_tituloFoto = document.getElementById('div-tituloFoto-contactoUnico');
	div_datosContactoUnico = document.getElementById('div-datos-contactoUnico');
	
	var fotoRuta_datosContactoUnico;
	var foto_datosContactoUnico;
	var fotoExt_datosContactoUnico;
	var nombreMostrar_datosContactoUnico;
	var nombre1_datosContactoUnico;
	var nombre2_datosContactoUnico;
	var apellido1_datosContactoUnico;
	var apellido2_datosContactoUnico;
	var telefono_datosContactoUnico;
	var correo_datosContactoUnico;
	var informacion_datosContactoUnico;
	var destacado_datosContactoUnico;
	
	if(peticion_datosContactoUnico.readyState == READY_STATE_COMPLETE) {
		if(peticion_datosContactoUnico.status == 200) {

			try {
				respuesta_datosContactoUnico = eval("("+peticion_datosContactoUnico.responseText+")");
				/*respuesta_datosContactoUnico = JSON.encode(peticion_datosContactoUnico.responseText);*/
				
			}
			catch(err) {
				respuesta_datosContactoUnico = "vacio";
			}
		
			var tabla = "";
			var titulo = "";

			if (respuesta_datosContactoUnico != "vacio") {

				fotoRuta_datosContactoUnico = respuesta_datosContactoUnico[0].rutaArchivo_contacto;
				foto_datosContactoUnico = respuesta_datosContactoUnico[0].nombreArchivo_contacto;
				fotoExt_datosContactoUnico = respuesta_datosContactoUnico[0].extensionArchivos_contacto;
				nombreMostrar_datosContactoUnico = respuesta_datosContactoUnico[0].nombreMostrar_contacto;
				nombre1_datosContactoUnico = respuesta_datosContactoUnico[0].nombre1_contacto;
				nombre2_datosContactoUnico = respuesta_datosContactoUnico[0].nombre2_contacto;
				apellido1_datosContactoUnico = respuesta_datosContactoUnico[0].apellido1_contacto;
				apellido2_datosContactoUnico = respuesta_datosContactoUnico[0].apellido2_contacto;
				telefono_datosContactoUnico = respuesta_datosContactoUnico[0].telefono_contacto;
				correo_datosContactoUnico = respuesta_datosContactoUnico[0].email_contacto;
				informacion_datosContactoUnico = respuesta_datosContactoUnico[0].comentario_contacto;
				destacado_datosContactoUnico = respuesta_datosContactoUnico[0].destacado_contacto;

				((fotoRuta_datosContactoUnico == null)? (fotoRuta_datosContactoUnico = ""): (fotoRuta_datosContactoUnico=fotoRuta_datosContactoUnico));
				((foto_datosContactoUnico == null)? (foto_datosContactoUnico = ""): (foto_datosContactoUnico=foto_datosContactoUnico));
				((fotoExt_datosContactoUnico == null)? (fotoExt_datosContactoUnico = ""): (fotoExt_datosContactoUnico=fotoExt_datosContactoUnico));
				((nombreMostrar_datosContactoUnico == null)? (nombreMostrar_datosContactoUnico = ""): (nombreMostrar_datosContactoUnico=nombreMostrar_datosContactoUnico));
				((nombre1_datosContactoUnico == null)? (nombre1_datosContactoUnico = ""): (nombre1_datosContactoUnico=nombre1_datosContactoUnico));
				((nombre2_datosContactoUnico == null)? (nombre2_datosContactoUnico = ""): (nombre2_datosContactoUnico=nombre2_datosContactoUnico));
				((apellido1_datosContactoUnico == null)? (apellido1_datosContactoUnico = ""): (apellido1_datosContactoUnico=apellido1_datosContactoUnico));
				((apellido2_datosContactoUnico == null)? (apellido2_datosContactoUnico = ""): (apellido2_datosContactoUnico=apellido2_datosContactoUnico));
				((telefono_datosContactoUnico == null)? (telefono_datosContactoUnico = ""): (telefono_datosContactoUnico=telefono_datosContactoUnico));
				((correo_datosContactoUnico == null)? (correo_datosContactoUnico = ""): (correo_datosContactoUnico=correo_datosContactoUnico));
				((informacion_datosContactoUnico == null)? (informacion_datosContactoUnico = ""): (informacion_datosContactoUnico=informacion_datosContactoUnico));
				((destacado_datosContactoUnico == null)? (destacado_datosContactoUnico = ""): (destacado_datosContactoUnico=destacado_datosContactoUnico));

							

				tabla += '' +
				
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Nombre a mostrar:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + nombreMostrar_datosContactoUnico + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Nombre 1:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + nombre1_datosContactoUnico + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Nombre 2:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + nombre2_datosContactoUnico + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Apellido 1:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + apellido1_datosContactoUnico + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Apellido 2:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + apellido2_datosContactoUnico + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Telefono:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + telefono_datosContactoUnico + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Correo:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + correo_datosContactoUnico + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Mas informacion:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + informacion_datosContactoUnico + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Sexo:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + destacado_datosContactoUnico + '</div>' +
				'</div>';

				titulo += '' +
				'<img class="img-thumbnail img-foto-contactos" src="' + 
				fotoRuta_datosContactoUnico + foto_datosContactoUnico + fotoExt_datosContactoUnico + '" alt="foto contacto"><h2>' + nombreMostrar_datosContactoUnico + '</h2>';

			} else {
				tabla += 'Aun no hay registros';
				titulo += 'Aun no hay registros';
			}
			div_datosContactoUnico.innerHTML = tabla;
			div_tituloFoto.innerHTML = titulo;
			
			/*nombreMostrar_datosContactoUnico;*/
		} else {
			div_datosContactoUnico.innerHTML = "El usuario no existe";
		}
	}
}

function iniciar_datosContactoUnico(id) {
	var url = "assets/php/proc/contactos_datos_independiente_1.proc.php";

	cargaContenido_datosContactoUnico(url, "POST", consultarDatos_datosContactoUnico, id);
}



function escuchar_datosContactoUnico(id) {
	iniciar_datosContactoUnico(id);
}
