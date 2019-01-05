<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>ДЗ</title>
	<link rel="stylesheet" href="css/style.css">
	
</head>
<body>
	<div class="cont">
		<div class="side">
			<div class="tasks" id="tasks">
			<?php 
				include("script/generate_tasks.php")
			 ?>
			</div>
			<div class="form">
				<p><input type="text" name="text-header" id="header" placeholder="По какому предмету?"> </p>
			    <p><div class="textarea">
			    	<textarea placeholder="Чё задано?" rows="4" id="content" name="text-content"></textarea>
			    </div></p>
			    <p><button type="button"  id="add">Добавить</button></p>
			</div>
			
		</div>
		<div class="content">
			<div><p>Понедельник: </p><div id="monday"> <?php include("script/generate_monday.php") ?> </div></div>
			<div><p>Вторник:</p><div id="tuesday"><?php include("script/generate_tuesday.php") ?></div></div>
			<div><p>Среда: </p><div id="wednesday"><?php include("script/generate_wednesday.php") ?></div></div>
			<div><p>Четверг: </p><div id="thursday"><?php include("script/generate_thursday.php") ?></div></div>
			<div><p>Пятница: </p><div id="friday"><?php include("script/generate_friday.php") ?></div></div>
			<div><p>Суббота: </p><div id="saturday"><?php include("script/generate_saturday.php") ?></div></div>
		</div>
	</div>
	<script src="src/Sortable.js"></script>
	<script src="https://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="script/script.js"></script>
</body>
</html>