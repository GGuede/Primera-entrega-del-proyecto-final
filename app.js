//--------------------------------------------ACA LOS ARRAYS-----------------------------------------------------//

const Monitores = []
const Mouse = []
const Teclados = []
const carrito =[]

//-------------------------------------------ACA LOS CONSTRUCTORES--------------------------------------------------//
class Monitor {
    constructor(id,marca, pulgadas, definicion, precio) {
      this.id = id
      this.marca = marca
      this.pulgadas = pulgadas
      this.definicion = definicion
      this.precio = precio
    }
  }
  class Mouse1 {
    constructor(id,marca, dpi, conexion, precio) {
      this.id = id
      this.marca = marca
      this.dpi = dpi
      this.conexion = conexion
      this.precio = precio
    }
  }
  class Teclado {
    constructor(id,marca, tipo, conexion, precio) {
      this.id = id
      this.marca = marca
      this.tipo = tipo
      this.conexion = conexion
      this.precio = precio
    }
  }


  const monitor1 = new Monitor(1,"LG", 27, 720, 8000)
  Monitores.push(monitor1)
  
  const monitor2 = new Monitor(2,"SAMSUNG", 27, 1080, 13000)
  Monitores.push(monitor2)

  const monitor3 = new Monitor(3,"ACER", 32, 1444, 15000)
  Monitores.push(monitor3)

  const monitor4 = new Monitor(4,"VIEWSONIC", 27, 1444, 13000)
  Monitores.push(monitor4)

  const monitor5 = new Monitor(5,"SAMSUNG", 24, 720, 5000)
  Monitores.push(monitor5)

  const monitor6 = new Monitor(6,"LG", 27, 1444, 15000)
  Monitores.push(monitor6)

  const mouse1 = new Mouse1(7,"GENIUS", 3000, "inalambrico", 1000)
  Mouse.push(mouse1)
  
  const mouse2 = new Mouse1(8,"HYPERX", 3600, "inalambrico", 3000)
  Mouse.push(mouse2)

  const mouse3 = new Mouse1(9,"LOGITECH", 2000, "con cable", 500)
  Mouse.push(mouse3)

  const mouse4 = new Mouse1(10,"REDRAGON", 2600, "con cable", 800)
  Mouse.push(mouse4)

  const mouse5 = new Mouse1(11,"GENIUS", 2000, "con cable", 700)
  Mouse.push(mouse5)

  const mouse6 = new Mouse1(12,"REDRAGON", 3000, "inalambrico", 2000)
  Mouse.push(mouse6)

  const teclado1 = new Teclado(13,"LOGITECH", "membrana", "inalambrico", 1500)
  Teclados.push(teclado1)
  
  const teclado2 = new Teclado(14,"REDRAGON", "membrana", "con cable", 1200)
  Teclados.push(teclado2)

  const teclado3 = new Teclado(15,"HYPERX", "mecanico", "inalambrico", 3200)
  Teclados.push(teclado3)

  const teclado4 = new Teclado(16,"MSI", "mecanico", "inalambrico", 3600)
  Teclados.push(teclado4)

  const teclado5 = new Teclado(17,"MSI", "membrana", "con cable", 2000)
  Teclados.push(teclado5)

  const teclado6 = new Teclado(18,"GENIUS", "mecanico", "inalambrico", 3000)
  Teclados.push(teclado6)



const agregarAlCarrito = (id,productos) => {
    const producto = productos.find ( (prod) => prod.id === id)
    
    carrito.push(producto)
}

const marcas = (elegirMarca,productos) => {
    const marc = productos.some((el) => el.marca === elegirMarca)
if(marc == true){
}else{
    alert("No ingreso ninguna marca, volviendo al inicio")
    return entradaAlCatalogo()
}}

const IDS = (elegirID,productos) => {
    const marc = productos.some((el) => el.id === elegirID)
if(marc == true){
}else{
    alert("No ingreso un ID correcto, volviendo al inicio")
    return entradaAlCatalogo()
}}
//-----------------------------------------------ACA INICIA EL ECOMERCE---------------------------------------
let usuario = prompt("ingrese su nombre")

while(usuario.length < 3){
    alert("Error: Ingrese un nombre valido")
    usuario = prompt("ingrese su nombre")
}

alert("Quiere conocer el catalogo de producto que tenemos?")
let respuesta1 = prompt("escriba si o no").toLowerCase()

function entradaAlCatalogo(){
if(respuesta1 === "si"){
    alert("¿Que se le ofrece" + " " + usuario + "? tenemos 1-Monitores, 2-Mouse, 3-Teclados, 4-Salir ingrese el numero que le interese")
let respuesta2 = Number(prompt("1-Monitores, 2-Mouse, 3-Teclados, 4-Salir"))
if(respuesta2 === 1){
    for(const monitor of Monitores){
        alert("Esta son las marcas disponibles:" +" "+ monitor.marca)
       
    }
    
    let elegirMarca = prompt("elige la marca que te interese! en caso de no interesarle ninguna presione el boton de aceptar").toUpperCase()
    
    marcas(elegirMarca,Monitores)
    
    const monitorFiltrado = Monitores.filter((monitor) => monitor.marca === elegirMarca)
    
    for(const prod of monitorFiltrado){
        alert("Este es el ID" + " " + prod.id +" "+ "| esta es la definicion:" + " " + prod.definicion + " " + "px |" + " " + "Precio:" + " " + "$" + prod.precio + " " + "| Pulgadas:" + " " + prod.pulgadas + " " + "| de los monitores de esta marca")
       
    }
    if(respuesta1 != "no"){
    let elegirID = Number(prompt("Cual es el ID del Monitor que le interesa"))
    const monitorFiltrado2 = Monitores.filter((monitor) => monitor.id === elegirID)
    IDS(elegirID,Monitores)
    while(elegirID == ""){
        alert("Error: Ingrese un ID valido")
        elegirID = Number(prompt("ingrese el ID del Monitor que le interesa"))
    }

    for(const prod of monitorFiltrado2){
        alert("Este es el Monitor:"  + " " + prod.marca + " " + "| Pulgadas:" + " " + prod.pulgadas + " " + "| Precio:" + " " + "$" + prod.precio + " " + "| Definicion:" + " " + prod.definicion + " " + "px")
    }

    agregarAlCarro(agregarAlCarrito(elegirID,Monitores))
entradaAlCatalogo()
}else{
    alert("Fin del programa")
}
}else if(respuesta2 === 2){
    
    for(const mouse of Mouse){ 
        alert("Esta son las marcas:" +" "+ mouse.marca)
       
    }
    
    let elegirMarca = prompt("elige la marca que te interese! en caso de no interesarle ninguna presione el boton de aceptar").toUpperCase()
    
    marcas(elegirMarca,Mouse)

    const mouseFiltrado = Mouse.filter((mouse) => mouse.marca === elegirMarca)
    
    for(const prod of mouseFiltrado){
        alert("Este es el ID:" + " " + prod.id +" "+ "| este es el dpi:" + " " + prod.dpi + " " + "| Precio:" + " " + "$" + prod.precio + " " + "| tipo de conexion:" + " " + prod.conexion + " " + "| de los mouse de esta marca")
       
    }
    if(respuesta1 != "no"){
    let elegirID = Number(prompt("Cual es el ID del Mouse que le interesa"))
    const mouseFiltrado2 = Mouse.filter((mouse) => mouse.id === elegirID)
    IDS(elegirID,Mouse)
    while(elegirID == ""){
        alert("Error: Ingrese un ID valido")
        elegirID = Number(prompt("ingrese el ID del Mouse que le interesa"))
    }

    for(const prod of mouseFiltrado2){
        alert("Este es el Mouse:"  + " " + prod.marca + " " + "| Tipo de conexion:" + " " + prod.conexion + " " + "| Precio:" + " " + "$" + prod.precio + " " + "| dpi:" + " " + prod.dpi)
    }

    agregarAlCarro(agregarAlCarrito(elegirID,Mouse))

return entradaAlCatalogo()
}else{
    alert("Fin del programa")
}
}else if(respuesta2 === 3){
    for(const teclado of Teclados){
        alert("Esta son las marcas:" +" "+ teclado.marca)
       
    }
    
    let elegirMarca = prompt("elige la marca que te interese! en caso de no interesarle ninguna presione el boton de aceptar").toUpperCase()
    
    marcas(elegirMarca,Teclados)

    const tecladoFiltrado = Teclados.filter((teclado) => teclado.marca === elegirMarca)
    
    for(const prod of tecladoFiltrado){
        alert("Este es el ID:" + " " + prod.id +" "+ "| Tipo de conexion:" + " " + prod.conexion + " " + "| Precio:" + " " + "$" + prod.precio + " " + "| Es de tipo:" + " " + prod.tipo + " " + "| de los teclados de esta marca")
       
    }
    if(respuesta1 != "no"){
    let elegirID = Number(prompt("Cual es el ID del Teclado que le interesa"))
    const monitorFiltrado2 = Teclados.filter((monitor) => monitor.id === elegirID)
    IDS(elegirID,Teclados)
    while(elegirID == ""){
        alert("Error: Ingrese un ID valido")
        elegirID = Number(prompt("ingrese el ID del Teclado que le interesa"))
    }

    for(const prod of monitorFiltrado2){
        alert("Este es el Teclado:"  + " " + prod.marca + " " + "| Es de tipo:" + " " + prod.tipo + " " + "| Precio:" + " " + "$" + prod.precio + " " + "| Tipo de conexion:" + " " + prod.conexion)
    }


    agregarAlCarro(agregarAlCarrito(elegirID,Teclados))
return entradaAlCatalogo()
}else{
    alert("Fin del programa")
}

}else if(respuesta2 === 4){
    alert("Quiere conocer el catalogo de producto que tenemos?")
    respuesta1 = prompt("escriba si o no").toLowerCase()
    return entradaAlCatalogo()
    

}else{ alert("No ingreso un respuesta valida")
alert("Quiere conocer el catalogo de producto que tenemos?")
    respuesta1 = prompt("escriba si o no").toLowerCase()
    return entradaAlCatalogo()

}

}else if(respuesta1 === "no"){
   alert("Gracias por visitarnos")
   
}else{
    alert("No ingreso una respuesta valida")
    respuesta1 = prompt("escriba si o no").toLowerCase()
   return entradaAlCatalogo()
}}

function agregarAlCarro(fn){
    alert("Quieres agregarlo al carrito?")
    let respuesta4 = prompt("Escribe si o no").toLowerCase()
    if(respuesta4 === "si"){
        fn
        alert("Agregado Satisfactoriamente! Volviendo al inicio")
    }else if(respuesta4 === "no"){
        alert("Volviendo al inicio")
    }else {
        alert("No eligio una opcion valida")
        return agregarAlCarroMonitor()
    }}
 
//--------------------------------------------------------ACA ESTA DECLARADO----------------------------------------//

entradaAlCatalogo()
console.log(carrito)








