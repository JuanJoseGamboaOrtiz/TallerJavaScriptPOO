class Empleado{
    static variableEstatica=0;
    constructor(nombre,edad,sueldo){
        this.id=Empleado.generarIdEmpleado();
        this.nombre=nombre;
        this.edad=edad;
        this.sueldo=parseInt(sueldo);
    };

    calcularSalarioAnual(){
        return this.sueldo*12;
    };

    static generarIdEmpleado(){
        Empleado.variableEstatica+=1
        return Empleado.variableEstatica;
    }
};

class Gerente extends Empleado{ 
    constructor(nombre,edad,sueldo,departamento){
        super(nombre,edad,sueldo);
        this.departamento=departamento;
    }

    calcularSalarioAnual(){
        return (this.sueldo*1.1)*12;

    }
}






//Seleccionar elementos

const formulario1=document.querySelector('#formulario1');
const id=document.querySelector('.id');



formulario1.addEventListener('submit',e=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let gerente1=new Gerente(data.nombre,data.edad,data.sueldo,data.departamento);
    id.textContent= `El id del Gerente es ${gerente1.id} `;
})


