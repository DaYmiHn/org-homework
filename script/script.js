$('#add').on('click', function() {
	var header = document.getElementById('header');
	var content = document.getElementById('content');
   	$.ajax({
		type: "GET",
		url: "script/1.php",
		data: "header="+header.value+"&content="+content.value,
		});

		setInterval(function(){show()}, 100);
   	})

function show() { 
	//str = document.getElementById("eda").value;
    xmlhttp=new XMLHttpRequest();
  	xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("tasks").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","script/generate.php",true); //?eda="+str
  xmlhttp.send();
  //$("#eda").val(""); 
	};

