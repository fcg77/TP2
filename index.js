

const cantidadEntrada = document.getElementById('cantidadEntrada')

const botonCalcular = document.getElementById('botonCalcular')

const categoria = document.getElementById('inputState')

const totalCompra = document.getElementById ('totalCompra')




function resumen(){


if(categoria.value ==="estudiante"){
    totalCompra.innerHTML = "Total $" + cantidadEntrada.value * (200 * 0.2)
    
}
if(categoria.value ==="trainee"){
    totalCompra.innerHTML = "Total $" + cantidadEntrada.value * (200 * 0.5)
    
}
if(categoria.value ==="junior"){
    totalCompra.innerHTML = "Total $" + cantidadEntrada.value * (200 * 0.85)

}
if(categoria.value===""){
    
    totalCompra.innerHTML="Monto a Cobrar"
}


}
