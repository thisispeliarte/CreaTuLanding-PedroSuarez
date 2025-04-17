const misProductos = [
    {id:"Helmet1", nombre:"Helmet RazN5",stock:10, precio: 2450, img: "/HELMET 2-10.png", idCat:"Helmet",},
    {id:"Helmet2", nombre:"Helmet Raz24",stock:10, precio: 2450, img: "/HELMET 2-09.png", idCat:"Helmet",},
    {id:"Helmet3", nombre:"Helmet RazN65",stock:10, precio: 2450, img: "/HELMET 2-11.png", idCat:"Helmet",},
    {id:"Helmet4", nombre:"Helmet RazN23",stock:10, precio: 2450, img: "/HELMET.png",idCat:"Helmet",},

    {id:"Helmet5", nombre:"Helmet RazN5",stock:10, precio: 2450, img: "/armas-25.png", idCat:"Weapons",},
    {id:"Helmet6", nombre:"Helmet Raz24",stock:10, precio: 2450, img: "/armas-26.png", idCat:"Weapons",},
    {id:"Helmet7", nombre:"Helmet RazN65",stock:10, precio: 2450, img: "/armas-27.png", idCat:"Weapons",},
    {id:"Helmet8", nombre:"Helmet RazN65",stock:10, precio: 2450, img: "/armas-28.png", idCat:"Weapons",},

    {id:"Helmet9", nombre:"Helmet RazN5",stock:10, precio: 2450, img: "/Pets-25.png", idCat:"Pets",},
    {id:"Helmet10", nombre:"Helmet Raz24",stock:10, precio: 2450, img: "/Pets-26.png", idCat:"Pets",},
    {id:"Helmet11", nombre:"Helmet RazN65",stock:10, precio: 2450, img: "/Pets-27.png", idCat:"Pets",},
    {id:"Helmet12", nombre:"Helmet RazN65",stock:10, precio: 2450, img: "/Pets-28.png", idCat:"Pets",}

]

export const getProductos = () =>{

    return new Promise((resolve)=>{

        setTimeout(()=> {
            resolve(misProductos)
        },2000)
    })
}

export const getUnProducto = (id) => {

    return new Promise (resolve => {
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 200)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(()=> {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100)

    })
}