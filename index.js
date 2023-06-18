

const cantidadEntradas = document.getElementById('cantidadEntrada')

const botonCalcular = document.getElementById('botonCalcular')

const categoria = document.getElementById('inputState')

const totalCompra = document.getElementById ('totalCompra')



function resumen(){

console.log(categoria.value)

console.log(cantidadEntradas.value)

cantidadEntradas.value

if(categoria.value ==="Estudiante"){
    resultado.innerHTML = "Total $"+ cantidadEntradas * (200 * 0.2)
    
}
if(categoria.value ==="Trainee"){
    resultado.innerHTML = "Total $"+ cantidadEntradas * (200 * 0.5)
    
}
if(categoria.value ==="Junior"){
    resultado.innerHTML = "Total $"+ cantidadEntradas * (200 * 0.85)
    
}





totalCompra.innerHTML = cantidadEntradas.value
}

