$('#add').on('click', function() {

	var header = document.getElementById('header');
	var content = document.getElementById('content');
  if((header.value=" ")&&(header.content=" ")){
    console.log('Пусто')
    return;
  }
   	$.ajax({
		type: "GET",
		url: "script/1.php",
		data: "header="+header.value+"&content="+content.value,
    success: function() {
    show()
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
  console.log('dfd');
  //$("#eda").val(""); 

	};


(function (){
      new Sortable(tasks, {
        group: "words",
        onAdd: function (evt){ console.log('onAdd.monday:', evt.item); }, 
        // onAdd: function (evt){ console.log('onAdd.monday:', evt.item.outerHTML  ); alert( evt.item.getAttribute('value') ); },    //innerHTML  outerHTML
        onUpdate: function (evt){ console.log('onUpdate.monday:', evt.item); },
        onRemove: function (evt){ console.log('onRemove.monday:', evt.item); }
      });

      new Sortable(monday, {
        group: "words",
        onAdd: function (evt){ console.log('onAdd.bar:', evt.item); },
        onUpdate: function (evt){ console.log('onUpdate.bar:', evt.item); },
        onRemove: function (evt){ console.log('onRemove.bar:', evt.item); }
      });

      new Sortable(tuesday, {
        group: "words",
        onAdd: function (evt){ console.log('onAdd.bar:', evt.item); },
        onUpdate: function (evt){ console.log('onUpdate.bar:', evt.item); },
        onRemove: function (evt){ console.log('onRemove.bar:', evt.item); }
      });


      new Sortable(wednesday, {
        group: "words",
        onAdd: function (evt){ console.log('onAdd.bar:', evt.item); },
        onUpdate: function (evt){ console.log('onUpdate.bar:', evt.item); },
        onRemove: function (evt){ console.log('onRemove.bar:', evt.item); }
      });


      new Sortable(thursday, {
        group: "words",
        onAdd: function (evt){ console.log('onAdd.bar:', evt.item); },
        onUpdate: function (evt){ console.log('onUpdate.bar:', evt.item); },
        onRemove: function (evt){ console.log('onRemove.bar:', evt.item); }
      });


      new Sortable(friday, {
        group: "words",
        onAdd: function (evt){ console.log('onAdd.bar:', evt.item); },
        onUpdate: function (evt){ console.log('onUpdate.bar:', evt.item); },
        onRemove: function (evt){ console.log('onRemove.bar:', evt.item); }
      });


      new Sortable(saturday, {
        group: "words",
        onAdd: function (evt){ console.log('onAdd.bar:', evt.item); },
        onUpdate: function (evt){ console.log('onUpdate.bar:', evt.item); },
        onRemove: function (evt){ console.log('onRemove.bar:', evt.item); }
      });


    })();