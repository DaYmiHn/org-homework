<?php 
include("link.php");
	    // Переменные с формы
	$id = $_GET['id'];
	$link = mysqli_connect($host, $user, $password, $database);
	$query ="DELETE FROM delete WHERE id =('".$id."')";

	$result = mysqli_query($link, $query); 
 ?>