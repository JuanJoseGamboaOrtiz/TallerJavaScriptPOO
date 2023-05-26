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



//Seleccionar elementos

const formulario1=document.querySelector('#formulario1');
const area=document.querySelector('.area');



formulario1.addEventListener('submit',e=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let vehiculo1=new Vehiculo(data.marca,data.modelo,data.velocidad);
    area.textContent=`La velocidad del vehiculo es ${vehiculo1.acelerar()} km/h`;
})


