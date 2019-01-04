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
			<div id="monday">Понедельник: </div>
			<div id="tuesday">Вторник: </div>
			<div id="wednesday">Среда: </div>
			<div id="thursday">Четверг: </div>
			<div id="friday">Пятница: </div>
			<div id="saturday">Суббота: </div>
		</div>
	</div>
	<script src="src/Sortable.js"></script>
	<script src="https://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="script/script.js"></script>
</body>
</html>