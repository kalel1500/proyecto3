<?php
	session_start();

	include "conexion.proc.php";

	$idUsu = $_SESSION['user_id'];

	$foto_b = "'".$_REQUEST['nombreArchivo_contacto']."'";
	$usuario_b = "'".$_REQUEST['nombreMostrar_contacto']."'";
	$nombre1_b = "'".$_REQUEST['nombre1_contacto']."'";
	$nombre2_b = "'".$_REQUEST['nombre2_contacto']."'";
	$apellido1_b = "'".$_REQUEST['apellido1_contacto']."'";
	$apellido2_b = "'".$_REQUEST['apellido2_contacto']."'";
	$telefono_b = "'".$_REQUEST['telefono_contacto']."'";
	$correo_b = "'".$_REQUEST['email_contacto']."'";
	$informacion_b = "'".$_REQUEST['comentario_contacto']."'";

	/*$latitud_b = $_REQUEST['latitud'];
	$longitud_b = $_REQUEST['longitud'];*/


	$foto = ($foto_b=="''") ? ('NULL') : ($foto_b);
	$usuario = ($usuario_b=="''") ? 'NULL' : $usuario_b;
	$nombre1 = ($nombre1_b=="''") ? 'NULL' : $nombre1_b;
	$nombre2 = ($nombre2_b=="''") ? 'NULL' : $nombre2_b;
	$apellido1 = ($apellido1_b=="''") ? 'NULL' : $apellido1_b;
	$apellido2 = ($apellido2_b=="''") ? 'NULL' : $apellido2_b;
	$telefono = ($telefono_b=="''") ? 'NULL' : $telefono_b;
	$correo = ($correo_b=="''") ? 'NULL' : $correo_b;
	$informacion = ($informacion_b=="''") ? 'NULL' : $informacion_b;

	/*$latitud = ($latitud_b=="''") ? ('NULL') : ($latitud_b);
	$longitud = ($longitud_b=="''") ? ('NULL') : ($longitud_b);*/
	
	$query_1 = "INSERT INTO `tbl_contacto` (`nombreArchivo_contacto`, `nombreMostrar_contacto`, `nombre1_contacto`, `nombre2_contacto`, `apellido1_contacto`, `apellido2_contacto`, `telefono_contacto`, `email_contacto`, `comentario_contacto`,`id_usuario`) VALUES ($foto, $usuario, $nombre1, $nombre2, $apellido1, $apellido2, $telefono, $correo, $informacion, $idUsu)";
	mysqli_query($link, $query_1) or die('{"resultado":"nok"}');

	/*$query_2 = "SELECT id_contacto FROM tbl_contacto ORDER BY `tbl_contacto`.`id_contacto` DESC LIMIT 1";
	mysqli_query($link, $query_2) or die('{"resultado":"nok"}');

	$query = "INSERT INTO `tbl_ubicacion` (`latitud_ubicacion`, `longitud_ubicacion`, `id_contacto`) VALUES ($latitud, $longitud, $nombre1, $nombre2, $apellido1, $apellido2, $telefono, $correo, $informacion, $idUsu)";
	
	mysqli_query($link, $query) or die('{"resultado":"nok"}');

	echo '{"resultado":"ok"}';*/
?>