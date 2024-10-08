import { URLAPI } from '../util/config';

interface Inventario {
    _id: string;
    nombre: string;
    categoria: string;
    cantidad: number;
    proveedor: string;
    precio: number;
    fechaProxPedido: string;
}

async function getCategoria(id: string): Promise<string> {
    var nombre
    try {
        const response = await fetch(`${URLAPI}/api/v1/inv_categoria/${id}`);
        const data = await response.json();
        nombre = data.data.nombre
    } catch (error) {
        console.log(`Error categorai: ${error}`)
    }
    return nombre; 
}


async function getInventario() {
    const response = await fetch(`${URLAPI}/api/v1/inventario`);
    const dataResponse = await response.json();
    dataResponse.data.forEach(async (elemet: Inventario) => {
        const categoria = await getCategoria(elemet.categoria);
        console.log(`Nombre: ${elemet.nombre} y su Categoria es: ${categoria}`)
})
}

// Llamar a la función
getInventario();
