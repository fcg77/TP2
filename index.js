

const cantidadEntradas = document.getElementById('cantidadEntrada')

const botonCalcular = document.getElementById('botonCalcular')

const categoria = document.getElementById('inputState')

const totalCompra = document.getElementById ('totalCompra')



function resumen(){

if(categoria.value ==="Estudiante"){
    resultado.innerHTML = "Total $"+ cantidadEntradas * (200 * 0.2)
    
}
if(categoria.value ==="Trainee"){
    resultado.innerHTML = "Total $"+ cantidadEntradas * (200 * 0.5)
    
}
if(categoria.value ==="Junior"){
    resultado.innerHTML = "Total $"+ cantidadEntradas * (200 * 0.85)
    
}
if(categoria.value===""){
    
    resultado.innerHTML="Monto a Cobrar"
}
}

function reset(){
    document.getElementById("cantidadEntrada").value = 0;
    document.getElementById("totalCompra").innerHTML="";
    document.getElementById("inputState").selectedIndex=0;
}
