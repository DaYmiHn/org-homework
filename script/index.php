<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="https://code.jquery.com/jquery-1.10.1.min.js"></script>
	
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
</head>

<body>
	<div class="container" >
		<div class="add">
			<div class="title">
				Добавить покупку: 
			</div>
	
	<input type="text" id="eda" class="form-control" placeholder="Введите еду...">
	<div class="row" style="margin-left: 60px; ">
		<button type="button"  id="add" class="col-md-5 btn btn btn-primary">Добавить</button>
		<div class="col-md-1"></div>
	<button type="button"  id="clear" class="col-md-5  btn btn btn-primary">Удалить всё</button>
	</div>
	

	<div id="table">
	<?php include("generate.php")?>
	</div>
	</div>
	</div>
	
	<script src="script.js"></script>
</body>
</html>