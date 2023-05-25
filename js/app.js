class Persona{
    nombre
    edad
    sexo
    constructor(nombre,edad,sexo){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    };

    saludar(){
        return `¿Hola como estás?, mi nombre es ${this.nombre}`;
    };
};

class Estudiante extends Persona{
    constructor(nombre,edad,sexo,carrera){
        super(nombre,edad,sexo);
        this.carrera=carrera;
    }

    estudiar(){
        return `Estoy estudiando la carrera de ${this.carrera}`;
    }
};

//Seleccionar elementos

const formulario1=document.querySelector('#formulario1');
const saludo=document.querySelector('.saludo');
const carrera=document.querySelector('.carrera');


formulario1.addEventListener('submit',e=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let estudiante1=new Estudiante(data.nombre,data.edad,data.sexo,data.carrera);
    saludo.textContent=estudiante1.saludar();
    carrera.textContent= estudiante1.estudiar();
})


