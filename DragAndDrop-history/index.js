//draggable OPCION1
const opcion1 = document.querySelector('#op1');
const opcion2 = document.querySelector('#op2');
const opcion3 = document.querySelector('#op3');
//draggable OPCION2
const opcion21 = document.querySelector('#op21');
const opcion22 = document.querySelector('#op22');
const opcion23 = document.querySelector('#op23');
//draggable OPCION3
const opcion31 = document.querySelector('#op31');
const opcion32 = document.querySelector('#op32');
const opcion33 = document.querySelector('#op33');

//Elemento donde se introduce las opciones #contenedor
const container1 = document.querySelector('#contenedor1');
const container2 = document.querySelector('#contenedor2');
const container3 = document.querySelector('#contenedor3');

var dragableID;
var dragableID1;
var dragableID2;




// ----------------------------VALIDATE and CONFIRM DATA--------------------------------------

//condicion si los campos estan vacios.
function regex() {
    console.log("has pulsado");
    if (dragableID == undefined || dragableID1 == undefined || dragableID2 == undefined) {
        window.alert("Revisa que todos los campos estan completos ")
    } else {
        localStorage.setItem("Opcion1", dragableID.innerHTML);
        localStorage.setItem("Opcion2", dragableID1.innerHTML);
        localStorage.setItem("Opcion3", dragableID2.innerHTML);

        document.location.href = "confirmar.html";
    }
    if (dragableID == undefined ) {

        document.getElementById("contenedor1").style.backgroundColor = "red";
    } else {
        document.getElementById("contenedor1").style.backgroundColor = "rgba(155, 109, 197, 0.644)";
    }
    if (dragableID1 == undefined) {
        document.getElementById("contenedor2").style.backgroundColor = "red";
    } else {
        document.getElementById("contenedor2").style.backgroundColor = "rgba(155, 109, 197, 0.644)";
    }
    if (dragableID2 == undefined) {
        document.getElementById("contenedor3").style.backgroundColor = "red";
    } else {
        document.getElementById("contenedor3").style.backgroundColor = "rgba(155, 109, 197, 0.644)";

    }
}



// pasamos los datos a la pantalla de confirmar.html y ademas añadimos fotos dependiendo de la opcion que escojan.
function verValue() {

    x = localStorage.getItem("Opcion1");
    y = localStorage.getItem("Opcion2");
    z = localStorage.getItem("Opcion3");

    document.getElementById("Opcion1").innerHTML = x;
    document.getElementById("Opcion2").innerHTML = y;
    document.getElementById("Opcion3").innerHTML = z;

    var img1 = document.getElementById('idimg1');
    var img2 = document.getElementById('idimg2');
    var img3 = document.getElementById('idimg3');

    if (document.getElementById("Opcion1").innerHTML == "Hacha-Guitarra") {
        img1.src = "../history/img/op1.png ";
    } else if (document.getElementById("Opcion1").innerHTML == "Katana poseida.") {
        img1.src = "../history/img/op2.png";
    } else if (document.getElementById("Opcion1").innerHTML == "Guantelete infernal") {
        img1.src = "../history/img/op3.png";
    }


    if (document.getElementById("Opcion2").innerHTML == "El Reino de hilo") {
        img2.src = "../history/img/op11.png";
    }else if(document.getElementById("Opcion2").innerHTML == "La Ciudad Prohibida."){
        img2.src = "../history/img/op22.png";
    }else if(document.getElementById("Opcion2").innerHTML == "El Reino Apocalíptico"){
        img2.src = "../history/img/op33.png";
    }



    if (document.getElementById("Opcion3").innerHTML == "Microscopio") {
        img3.src = "../history/img/op111.png";
    }else if(document.getElementById("Opcion3").innerHTML == "Pistola."){
        img3.src = "../history/img/op222.png";
    }else if(document.getElementById("Opcion3").innerHTML == "Látigo"){
        img3.src = "../history/img/op333.png";
    }
}



// ----------------------------OPCION1--------------------------------------



//accion para cuando se empieza a mover el elmento draggable
opcion1.addEventListener('dragstart', function (event) {
    console.log("ACABAS DE COGER UN ELEMENTO");
    dragableID = event.target;
});
opcion2.addEventListener('dragstart', function (event) {
    console.log("ACABAS DE COGER UN ELEMENTO");
    dragableID = event.target;
});
opcion3.addEventListener('dragstart', function (event) {
    console.log("ACABAS DE COGER UN ELEMENTO");
    dragableID = event.target;
});




//contenedor1 donde solo permite que arrastren unicamente la Opcion1
container1.addEventListener('drop', function (event) {
    event.target.appendChild(dragableID);
    document.getElementById("op1").draggable = false;
    document.getElementById("op2").draggable = false;
    document.getElementById("op3").draggable = false;
});



container1.addEventListener('dragover', function (event) {
    event.preventDefault();
});



// ----------------------------OPCION2--------------------------------------


//accion para cuando se empieza a mover el elmento draggable
opcion21.addEventListener('dragstart', function (event) {
    console.log("ACABAS DE COGER UN ELEMENTO");
    dragableID1 = event.target;
});
opcion22.addEventListener('dragstart', function (event) {
    console.log("ACABAS DE COGER UN ELEMENTO");
    dragableID1 = event.target;
});
opcion23.addEventListener('dragstart', function (event) {
    console.log("ACABAS DE COGER UN ELEMENTO");
    dragableID1 = event.target;
});


//contenedor2 donde solo permite que arrastren unicamente la Opcion1
container2.addEventListener('drop', function (event) {
    event.target.appendChild(dragableID1);
    document.getElementById("op21").draggable = false;
    document.getElementById("op22").draggable = false;
    document.getElementById("op23").draggable = false;

});

container2.addEventListener('dragover', function (event) {
    event.preventDefault();
});





// ----------------------------OPCION3--------------------------------------


//accion para cuando se empieza a mover el elmento draggable
opcion31.addEventListener('dragstart', function (event) {
    console.log("ACABAS DE COGER UN ELEMENTO");
    dragableID2 = event.target;
});
opcion32.addEventListener('dragstart', function (event) {
    console.log("ACABAS DE COGER UN ELEMENTO");
    dragableID2 = event.target;
});
opcion33.addEventListener('dragstart', function (event) {
    console.log("ACABAS DE COGER UN ELEMENTO");
    dragableID2 = event.target;
});


//contenedor1 donde solo permite que arrastren unicamente la Opcion1
container3.addEventListener('drop', function (event) {
    event.target.appendChild(dragableID2);
    // document.getElementById("op31").draggable = false;
    // document.getElementById("op32").draggable = false;
    // document.getElementById("op33").draggable = false;

});


container3.addEventListener('dragover', function (event) {
    event.preventDefault();
});




// function cambioImg() {
//     
    
// }