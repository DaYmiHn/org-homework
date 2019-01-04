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
				include("script/generate.php")
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
			<div class="monday">1</div>
			<div class="tuesday">2</div>
			<div class="wednesday">3</div>
			<div class="thursday">4</div>
			<div class="friday">5</div>
			<div class="saturday">6</div>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="script/script.js"></script>
</body>
</html>