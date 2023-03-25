import {obtenerCliente, editarCliente} from './API.js';
import { mostrarAlerta, validar} from './funciones.js';


//IIFE
(function() {
    //Campos del formulario la segunda cosa que debo hacer, primero va el document de DOMContentLoaded
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const telefonoInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        //identificar el registro que estoy seleccionando y hacer la consulta a la api y traer resultados 
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt( parametrosURL.get('id'));

        // console.log(idCliente);
      const cliente = await obtenerCliente(idCliente); // Consulta en la Api y lo envia a la consola 
    //    console.log(cliente); 
      mostrarCliente(cliente);

      //Submit al formulario 
      const formulario = document.querySelector('#formulario');
      formulario.addEventListener('submit', validarCliente);
    });

    function mostrarCliente(cliente) {
        //Muestra el cliente en la parte de editar cliente y llena el formulario automaticamente
        // console.log(cliente);
        const { nombre, empresa, email, telefono, id } = cliente; // extraer información 

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    function validarCliente(e){
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value, 
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value) // se le aplica un parse porque esta como hiden en el html 
        }

        // console.log(cliente);

        if(validar(cliente)){
            //Mostrar mensaje
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        //Reescribe el objeto 
        editarCliente(cliente);
        
    }
})();