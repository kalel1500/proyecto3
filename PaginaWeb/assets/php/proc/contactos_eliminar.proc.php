<?php
	session_start();

	include "conexion.proc.php";

	$id_contacto = $_REQUEST['id_contacto'];

	$query_1 = "DELETE FROM `tbl_ubicacion` WHERE `tbl_ubicacion`.`id_contacto` = $id_contacto";
	$query_2 = "DELETE FROM `tbl_contacto` WHERE `tbl_contacto`.`id_contacto` = $id_contacto";
	
	mysqli_query($link, $query_1);
	mysqli_query($link, $query_2);


?>