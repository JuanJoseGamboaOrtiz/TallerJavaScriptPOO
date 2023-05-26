class Figura{
    color
    area
    constructor(color,area){
        this.color=color;
        this.area=area;
    };

    calcularArea(){
        return `El area es ${this.area}m^2`;
    };
};

class Rectangulo extends Figura{
    constructor(color,area,largo,ancho){
        super(color,area);
        this.largo=largo;
        this.ancho=ancho;
    }

    calcularArea(){
        return this.largo*this.ancho;
    }
}



//Seleccionar elementos

const formulario1=document.querySelector('#formulario1');
const area=document.querySelector('.area');



formulario1.addEventListener('submit',e=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let rectangulo1=new Rectangulo(data.color,data.area,data.largo,data.ancho);
    area.textContent=`El area del rectangulo es ${rectangulo1.calcularArea()} m^2`;
})


