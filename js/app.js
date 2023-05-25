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




//Seleccionar elementos

const formulario1=document.querySelector('#formulario1');
const area=document.querySelector('.area');



formulario1.addEventListener('submit',e=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let figura1=new Figura(data.color,data.area);
    area.textContent=figura1.calcularArea();
})


