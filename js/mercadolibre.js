
let boxProductos= document.getElementById("boxProductos")

let boxProducto=document.createElement("div")
boxProductos.appendChild(boxProducto);
boxProducto.setAttribute("class","box-producto")




let infoproducto=document.createElement("div")
boxProducto.appendChild(infoproducto)
infoproducto.setAttribute("class","box-info-producto")



let boxImagen=document.createElement("div")
boxProducto.appendChild(boxImagen)
boxImagen.setAttribute("class","box-imagen")
let imagenProducto=document.createElement("img")
boxImagen.appendChild(imagenProducto)
imagenProducto.setAttribute("src", "img/hypermotard.jpg")
imagenProducto.setAttribute("class", "imagen-producto")


let marcaProducto=document.createElement("div")
infoproducto.appendChild(marcaProducto)
let nodoMarcaProducto=document.createTextNode(" Ducaty Hypermotard ")
marcaProducto.appendChild(nodoMarcaProducto)

let marcaProducto2=document.createElement("div")
infoproducto.appendChild(marcaProducto2)
let nodoMarcaProducto2=document.createTextNode(" 2023 ")
marcaProducto2.appendChild(nodoMarcaProducto2)

let marcaProducto3=document.createElement("div")
infoproducto.appendChild(marcaProducto3)
let valorUnitarioProducto= 85000;
let valorUnitarioProductoStr = new Intl.NumberFormat('de-DE').format(valorUnitarioProducto);
    document.getElementById("valorUnitarioProducto").innerText=valorUnitarioProductoStr;

let marcaProducto4=document.createElement("div")
infoproducto.appendChild(marcaProducto4)
let nodoMarcaProducto3=document.createTextNode(" 12.327 km ")
marcaProducto.appendChild(nodoMarcaProducto3)

let marcaProducto5=document.createElement("div")
infoproducto.appendChild(marcaProducto5)
let nodoMarcaProducto4=document.createTextNode(" ciudad bolivar-bogota D.C")
marcaProducto.appendChild(nodoMarcaProducto4)






