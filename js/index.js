document.getElementById('botonInicio').onclick = function() {
    document.getElementById('descripcion').scrollIntoView({ behavior: 'smooth' });
};

document.getElementById('botonDescripcion').onclick = function() {
    document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
};