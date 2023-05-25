class Animal{
    nombre
    edad
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    };

    hacerSonido(){
        return `Sonino del anial`;
    };
};

class Perro extends Animal{
    constructor(nombre,edad,raza){
        super(nombre,edad);
        this.raza=raza;
    }

    moverCola(){
        return `Moviendo la cola`;
    }

    hacerSonido(){
        return "GUAU GUAU";
    }
};


//Seleccionar elementos

const formulario1=document.querySelector('#formulario1');
const sonido=document.querySelector('.sonido');
const cola=document.querySelector('.cola');



formulario1.addEventListener('submit',e=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let perro1=new Perro(data.nombre,data.edad,data.sexo,data.carrera);
    sonido.textContent=perro1.hacerSonido();
    cola.textContent=perro1.moverCola();
})


