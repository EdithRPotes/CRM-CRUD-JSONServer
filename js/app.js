//Importando funciones
import { obtenerClientes, eliminarCliente } from './API.js';


//IIFE para que las variables no se revuelvan con los otros archivos 
(function() {
    const listado = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', mostrarClientes); // una vez que el documento este listo se ejecuta la funcion de abajo

    listado.addEventListener('click', confirmarEliminar);

    async function mostrarClientes() { //Los clientes van a venir desde API.js //async await, sirve para poder ejecutar codigo que aun no este listo, osea cuando las cosas que se deban cumplir antes esten listas se ejecutara mi código
        const clientes = await obtenerClientes();
        // console.log(clientes); // me muestra la lista de clientes ya registrados

        clientes.forEach(cliente => {
          const { nombre, email, telefono, empresa, id } = cliente;  //Extraer valores de las variables con destructuring

          const row = document.createElement('tr');

          row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <p class="text-sm lead-5 font-medium text-gray-700 text-lg font-bold"> ${ nombre } </p>
              <p class="texto-sm líder-10 texto-gris-700"> ${ email } </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
              <p class="text-gray-700"> ${ telefono } </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 lead-5 text-gray-700">    
              <p class="text-gray-600"> ${ empresa } </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm lead-5">
            <a href="editar-cliente.html?id= ${ id } " class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
            <a href="#" data-cliente=" ${ id } " class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
        ` ;

         listado.appendChild(row);
        });
    }

    function confirmarEliminar(e) {
        if(e.target.classList.contains('eliminar')){
            // console.log('Diste click en eliminar');
            const clienteId = parseInt(e.target.dataset.cliente);
            // console.log(clienteId);

            const confirmar = confirm('¿Deseas eliminar este registro?');

            if(confirmar){
               eliminarCliente(clienteId);
            }
        }
    }
})();