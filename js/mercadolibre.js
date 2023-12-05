
let inputBusqueda = document.getElementById("inputBusqueda");
class Automovil {
    constructor(marca, modelo, precio, anyo, kilometros, ciudad, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometros = kilometros;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let auto1 = new Automovil("Mazda", " CX-5 2.5 Touring", 113800000, "2019 · ", 44138 , " Usaquén - Bogotá", "img/carritoMazda.PNG");
let auto2 = new Automovil("Mazda", "CX-9 2.5 Grand Touring Signature", 160000000, "2022 ·", 44007, " Fontibón - Bogotá DC", "img/carrito2.PNG");
let auto3 = new Automovil("Mazda", "CX-9 2.5 Grand Touring Signature", 185000000, "2015 ·", 23900, " Teusaquillo - Bogotá", "img/carrito3.PNG");
let auto4 = new Automovil("Mazda", "CX-30 2.5 Grand Touring Lx 4x4", 119000000, "2022 ·", 51700, " Suba - Bogot'a DC", "img/carrito4.PNG");


// Función  para cargar el vehículo
cargarVehiculo(auto1);
cargarVehiculo(auto2);
cargarVehiculo(auto3);
cargarVehiculo(auto4);


window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("inputBusqueda").value;
    if (event.key == "Enter") {
        boxProductos.innerHTML = "";
        let inputUser = busqueda.toLowerCase();
        if (inputUser == "Mazda") {
            cargarVehiculo(auto1);
            cargarVehiculo(auto2);
        }  
        else if (inputUser == "rx") {
            cargarVehiculo(auto3);
        } 
        else if (inputUser == "dt") {
          cargarVehiculo(auto4);
      } 
    }     
});
// Función  con parámetro
function cargarVehiculo(auto) {
    let boxProductos = document.getElementById("boxProductos");

    // Caja para el producto 
    let boxProducto = document.createElement("div");
    boxProductos.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");

    // Caja para la imagen */
    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");
    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-auto");

    // Caja para la información 
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");
    let marca = document.createElement("label");
    boxInfo.appendChild(marca);
    let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
    marca.appendChild(txtNodeMarca);
    marca.setAttribute("class", "marca");

    // Precio 
    let precio = document.createElement("label");
    boxInfo.appendChild(precio);
    let txtNodePrecio = document.createTextNode("$" + Intl.NumberFormat("de-DE").format(auto.precio));
    precio.appendChild(txtNodePrecio);
    precio.setAttribute("class", "precio");

    // año 
    let anyo = document.createElement("label");
    boxInfo.appendChild(anyo);
    let txtNodeAnyo = document.createTextNode(auto.anyo);
    anyo.appendChild(txtNodeAnyo);
    anyo.setAttribute("class", "info-anyo");

    // Kilometros 

    let kilometros = document.createElement("label");
    boxInfo.appendChild(kilometros);
    let txtNodeKilometros = document.createTextNode( Intl.NumberFormat("de-DE").format(auto.kilometros) + " km" + " · ");
    kilometros.appendChild(txtNodeKilometros);
    kilometros.setAttribute("class", "info-kilometros");
    

    // Ciudad  
    let ciudad = document.createElement("label");
    boxInfo.appendChild(ciudad);
    let txtNodeCiudad = document.createTextNode(auto.ciudad);
    ciudad.appendChild(txtNodeCiudad);
    ciudad.setAttribute("class", "info-ciudad");

    // ícono corazón 
    let boxCorazon = document.createElement("div");
    boxImg.appendChild(boxCorazon);
    let iconoCorazon = document.createElement("i");
    boxCorazon.appendChild(iconoCorazon);
    boxCorazon.setAttribute("class", "box-corazon");
    iconoCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart");

    //linea
    let lineaDiv = document.createElement("div");
    boxProducto.appendChild(lineaDiv);
    lineaDiv.setAttribute("class", "linea-div");
}


cargarFiltro();

function cargarFiltro() {
    
    mainContent.appendChild(boxFiltro);
    boxFiltro.setAttribute("class", "box-filtro");
}


let boxToggle = document.getElementById("boxToggle");
let buttonToggle = document.getElementById("buttonToggle");

boxToggle.addEventListener("click", () =>{
    if (boxToggle.classList.contains("box-toggle-off")) {
    boxToggle.classList.add("box-toggle-on");
    boxToggle.classList.remove("box-toggle-off");
    buttonToggle.classList.add("button-toggle-on");
    buttonToggle.classList.remove("button-toggle-off");
    }
    else{
        boxToggle.classList.remove("box-toggle-on");
        boxToggle.classList.add("box-toggle-off");
        buttonToggle.classList.remove("button-toggle-on");
        buttonToggle.classList.add("button-toggle-off");
    }
});



