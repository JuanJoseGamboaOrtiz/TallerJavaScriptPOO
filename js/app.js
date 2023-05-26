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

class Circulo extends Figura{
    constructor(color,area,radio){
        super(color,area);
        this.radio=radio;
    }

    calcularArea(){
        return this.radio*2*3.1415;
    }
}



//Seleccionar elementos

const formulario1=document.querySelector('#formulario1');
const area=document.querySelector('.area');



formulario1.addEventListener('submit',e=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let circulo1=new Circulo(data.color,data.area,data.radio);
    area.textContent=`El area del circulo es ${circulo1.calcularArea()} m^2`;
})


