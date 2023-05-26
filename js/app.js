class Empleado{
    constructor(nombre,edad,sueldo){
        this.nombre=nombre;
        this.edad=edad;
        this.sueldo=parseInt(sueldo);
    };

    calcularSalarioAnual(){
        return this.sueldo*12;
    };
};






//Seleccionar elementos

const formulario1=document.querySelector('#formulario1');
const salario=document.querySelector('.salario');



formulario1.addEventListener('submit',e=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let empleado1=new Empleado(data.nombre,data.edad,data.sueldo);
    salario.textContent= `El salario anual es  ${empleado1.calcularSalarioAnual()}$`;
})


