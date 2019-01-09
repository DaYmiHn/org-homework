$('#add').on('click', function() {

	var header = document.getElementById('header');
	var content = document.getElementById('content');
  if((header.value == '')||(content.value == '')){
    console.log('Пусто');
    return false;
  }
   	$.ajax({
		type: "GET",
		url: "script/1.php",
		data: "header="+header.value+"&content="+content.value,
    success: function() {
    show();
    header.value = '';
    // console.log("Очитен");
    content.value = '';
  }

		});

   	})

function show() { 

	//str = document.getElementById("eda").value;
    xmlhttp=new XMLHttpRequest();
  	xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("tasks").innerHTML=this.responseText;
    }
  }

  xmlhttp.open("GET","script/generate_tasks.php",true); //?eda="+str
  xmlhttp.send();
  // console.log(evt.item);
  //$("#eda").val(""); 
	};


(function (){
      new Sortable(tasks, {
        group: "words", animation: 200,
        onAdd: function (evt){ $.ajax({ type: "GET", url: "script/add_tasks.php", data:  "content="+evt.item.innerHTML+"&id="+evt.item.id, });  }, 
        onUpdate: function (evt){ console.log('onUpdate.tasks:', evt.item); },
        onRemove: function (evt){ $.ajax({ type: "GET", url: "script/remove_tasks.php", data:"id="+evt.item.id, });}
      });
      new Sortable(delete_task, {
        group: "words", animation: 200,
        onAdd: function (evt){ $.ajax({ type: "GET", url: "script/remove_delete.php", data:  "content="+evt.item.innerHTML+"&id="+evt.item.id, }); document.getElementById(evt.item.id).remove(); }, 
        onUpdate: function (evt){ console.log('onUpdate.tuesday:', evt.item); },
        onRemove: function (evt){ $.ajax({ type: "GET", url: "script/remove_tasks.php", data:"id="+evt.item.id, });}
      });
      new Sortable(monday, {
        group: "words",animation: 200,
        onAdd: function (evt){ $.ajax({ type: "GET", url: "script/add_monday.php", data:  "content="+evt.item.outerHTML+"&id="+evt.item.id, });}, 
        onUpdate: function (evt){ console.log('onUpdate.monday:', evt.item); },
        onRemove: function (evt){ $.ajax({ type: "GET", url: "script/remove_monday.php", data:"id="+evt.item.id, });}
      });

      new Sortable(tuesday, {
        group: "words",animation: 200,
        onAdd: function (evt){ $.ajax({ type: "GET", url: "script/add_tuesday.php", data:  "content="+evt.item.outerHTML+"&id="+evt.item.id, }); }, 
        onUpdate: function (evt){ console.log('onUpdate.tuesday:', evt.item); },
        onRemove: function (evt){ $.ajax({ type: "GET", url: "script/remove_tuesday.php", data:"id="+evt.item.id, });}
      });


      new Sortable(wednesday, {
        group: "words",animation: 200,
        onAdd: function (evt){ $.ajax({ type: "GET", url: "script/add_wednesday.php", data:  "content="+evt.item.outerHTML+"&id="+evt.item.id, });}, 
        onUpdate: function (evt){ console.log('onUpdate.wednesday:', evt.item); },
        onRemove: function (evt){ $.ajax({ type: "GET", url: "script/remove_wednesday.php", data:"id="+evt.item.id, }) }
      });


      new Sortable(thursday, {
        group: "words",animation: 200,
        onAdd: function (evt){ $.ajax({ type: "GET", url: "script/add_thursday.php", data:  "content="+evt.item.outerHTML+"&id="+evt.item.id, });}, 
        onUpdate: function (evt){ console.log('onUpdate.thursday:', evt.item); },
        onRemove: function (evt){ $.ajax({ type: "GET", url: "script/remove_thursday.php", data:"id="+evt.item.id, });}
      });


      new Sortable(friday, {
        group: "words",animation: 200,
        onAdd: function (evt){ $.ajax({ type: "GET", url: "script/add_friday.php", data:  "content="+evt.item.outerHTML+"&id="+evt.item.id, });}, 
        onUpdate: function (evt){ console.log('onUpdate.friday:', evt.item); },
        onRemove: function (evt){ $.ajax({ type: "GET", url: "script/remove_friday.php", data:"id="+evt.item.id, success: function() {console.log("Удалён:", evt.item.id);}  });}
      });


      new Sortable(saturday, {
        group: "words",animation: 200,
        onAdd: function (evt){ $.ajax({ type: "GET", url: "script/add_saturday.php", data:  "content="+evt.item.outerHTML+"&id="+evt.item.id, });}, 
        onUpdate: function (evt){ console.log('onUpdate.saturday:', evt.item); },
        onRemove: function (evt){ $.ajax({ type: "GET", url: "script/remove_saturday.php", data:"id="+evt.item.id, success: function() {console.log("Удалён:", evt.item.id);}  });}
      });

 $(function(){
              $("#delete_task").sortable({
                cancel: '.delete_center'
              });
            });
    })();

   