
async function obtenerDatos() {
    // get data from lista.json
    const datos= await fetch('lista.json');
    const json = await datos.json();
    return json;
}

async function buscar() {
    try {
        
        let datos = await obtenerDatos(); 
        const Proveedor = document.getElementById('Proveedor').value;
        const Categoría = document.getElementById('Categoría').value;

       
        if (Proveedor) {
            datos = datos.filter(item => item.Proveedor.toLowerCase().includes(Proveedor.toLowerCase()));
        }
        if (Categoría) {
            datos = datos.filter(item => item.Categoría.toLowerCase().includes(Categoría.toLowerCase()));
        }

        const table = document.getElementById('table');
        const tbody = table.getElementsByTagName('tbody')[0];
        tbody.innerHTML = ''; 
        datos.forEach((item) => {
            const row = tbody.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(6);
            const cell8 = row.insertCell(7);
            const cell9 = row.insertCell(8);
            const cell10 = row.insertCell(9);
            cell1.innerHTML = item.IdProducto;
            cell2.innerHTML = item.NombreProducto;
            cell3.innerHTML = item.Proveedor;
            cell4.innerHTML = item.Categoría;
            cell5.innerHTML = item.CantidadPorUnidad;
            cell6.innerHTML = item.PrecioUnidad;
            cell7.innerHTML = item.UnidadesEnExistencia;
            cell8.innerHTML = item.UnidadesEnPedido;
            cell9.innerHTML = item.NivelNuevoPedido;
            cell10.innerHTML = item.Suspendido;
        });

    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}
async function mostrarDatos() {
    try {
        // Obtener datos del servidor
        const datos = await obtenerDatos();
        const table = document.getElementById('table');
        const tbody = table.getElementsByTagName('tbody')[0];
        // Mostrar datos en la tabla
        datos.forEach((item) => {
            const row = tbody.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(6);
            const cell8 = row.insertCell(7);
            const cell9 = row.insertCell(8);
            const cell10 = row.insertCell(9);
            cell1.innerHTML = item.IdProducto;
            cell2.innerHTML = item.NombreProducto;
            cell3.innerHTML = item.Proveedor;
            cell4.innerHTML = item.Categoría;
            cell5.innerHTML = item.CantidadPorUnidad;
            cell6.innerHTML = item.PrecioUnidad;
            cell7.innerHTML = item.UnidadesEnExistencia;
            cell8.innerHTML = item.UnidadesEnPedido;
            cell9.innerHTML = item.NivelNuevoPedido;
            cell10.innerHTML = item.Suspendido;
            
        });

    }catch (error) {
        console.error('Error al obtener datos:', error);
    }
}
// Llamar a la función principal para mostrar datos al cargar la página
// onload function 


mostrarDatos();