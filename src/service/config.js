
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCszCdP-UkgGHGvof8pG7V2lkip7yB65gM",
  authDomain: "cynaborgs.firebaseapp.com",
  projectId: "cynaborgs",
  storageBucket: "cynaborgs.firebasestorage.app",
  messagingSenderId: "956835408888",
  appId: "1:956835408888:web:df03706d2fbc2a74fb440d",
  measurementId: "G-YXLSEQ6NXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);






export const db = getFirestore(app)


//////////////////////////////////////////////////////////////////////////


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

import { collection, doc, writeBatch } from "firebase/firestore";

const subirProductos = async () => {
  const batch = writeBatch(db); // 
  const productosRef = collection(db, "productos");

  misProductos.forEach((producto) => {
    const nuevoDoc = doc(productosRef, producto.id); 
    batch.set(nuevoDoc, producto);
  });

  try {
    await batch.commit(); // 
    console.log("Productos subidos exitosamente");
  } catch (error) {
    console.error("Error al subir productos:", error);
  }
};

subirProductos();
