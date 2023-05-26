class Vehiculo{
    constructor(marca,modelo,velocidad){
        this.marca=marca;
        this.modelo=modelo;
        this.velocidad=parseInt(velocidad);
    };

    acelerar(){
        return this.velocidad+=10;
    };
};


class Coche extends Vehiculo{
    constructor(marca,modelo,velocidad,combustible){
        super(marca,modelo,velocidad,combustible)
        this.combustible=combustible;
    }

    acelerar(){
        return this.velocidad+=20;
    };
}



//Seleccionar elementos

const formulario1=document.querySelector('#formulario1');
const area=document.querySelector('.area');



formulario1.addEventListener('submit',e=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let coche1=new Coche(data.marca,data.modelo,data.velocidad,data.combustible);
    area.textContent=`La velocidad del Coche es ${coche1.acelerar()} km/h`;
})


