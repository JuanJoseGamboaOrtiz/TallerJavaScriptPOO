class Persona{
    nombre
    edad
    sexo
    constructor(nombre,edad,sexo){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }

    saludar(){
        return `¿Hola como estás?, mi nombre es ${this.nombre}`;
    }
}

//Seleccionar elementos

const formulario1=document.querySelector('#formulario1');
const saludo=document.querySelector('.saludo');


formulario1.addEventListener('submit',e=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let persona1=new Persona(data.nombre,data.edad,data.sexo);
    saludo.textContent=persona1.saludar();
})


