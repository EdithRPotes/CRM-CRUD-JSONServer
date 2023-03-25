//Manda informacion al servidor 
const url = 'http://localhost:4000/clientes';

//Cuando se crea un nuevo Cliente 
export const nuevoCliente = async (cliente) =>{

    // console.log(cliente); // para ver que se comunique correctamente con el archivo de nuevocliente 
    //Siempre para crear un nuevo registro se utiliza metodo POST
    try {
       await fetch(url,{
            method: 'POST', // Enviando Datos al servidor con un nuevo registro (en este caso un nuevo cliente)
            body: JSON.stringify(cliente),  //El body se puede enviar como string o como objeto
            headers:{ //son la información del tipo de dato que se esta enviando
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'; // una vez se cumpla aquí se va a enviar al usuario
    } catch (error) {
        console.log(error);
    }

}

//Obtiene Todos los clientes 
export const obtenerClientes = async () =>{ // () no toma nada porque va a obtener los datos de la api 
    try {
        const resultado = await fetch(url); // fetch  tiene por defecto el metodo GET
        const clientes = await resultado.json();
        return clientes; // retornamos y consumimos los datos en otro archivo 
    } catch (error) {
        console.log(error); // para debuguear
    }
}


// Elimina un Cliente 

export const eliminarCliente = async (id) => {
    try {
        await fetch(`${url}/${id}`,{ // asi se inyecta el id en la url
            method: 'DELETE'
        }) 
    } catch (error) {
        console.log(error);
    }
}

//Obtiene un cliente por su ID para que pueda ser editado 
export const obtenerCliente = async (id) => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        // console.log(cliente);
        return cliente;
    } catch (error) {
        console.log(error);
    }

}

//Actualiza un registro 
export const editarCliente = async (cliente) =>{
//    console.log(cliente);
    try {
       await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //En caso de que se cumpla el try le decimos que nos lleve a un modulo 
        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
}
