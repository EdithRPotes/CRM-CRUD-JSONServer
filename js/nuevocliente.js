//Importando funciones
import { mostrarAlerta, validar} from './funciones.js';
import { nuevoCliente } from './API.js';

//Crear IIFE para proteger las funciones  y que queden locales 
(function(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e){
        e.preventDefault();

        //Permite leer los valores ingresados en el formulario 
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre, // la misma sintaxis llave valor nombre: nombre, pero como son iguales los datos solo se pone uno
            email,
            telefono,
            empresa
        }

        //Validacion formulario
        if(validar(cliente)){
            //Mostrar mensaje 
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        // console.log('Si se paso la validación');
        nuevoCliente(cliente); // se pasa asia el archivo API.js
    }

   
})();