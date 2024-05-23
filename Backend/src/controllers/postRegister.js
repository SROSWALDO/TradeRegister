const { Registro } = require("../db");

const postRegister = async (registerData) => {
    try {
        const { origen, destino, cp_origen, cp_destino, direccion_origen, direccion_destino, estado_origen, estado_destino, unidad, peso, dimensiones, cantidad_skids } = registerData;

        // Extraer las primeras letras de origen y destino
        const origenAbreviado = origen.slice(0, 1).toUpperCase();
        const destinoAbreviado = destino.slice(0, 1).toUpperCase();
        const cp_OrigenAbreviado = cp_origen.slice(0, 1);
        const cp_DestinoAbreviado = cp_destino.slice(0, 2);
        const cantidadAbreviada = cantidad_skids.slice(0,2)

        // Función para limpiar la dirección de caracteres no deseados
        const cleanAddress = (address) => {
            return address.replace(/[^a-zA-Z0-9\s]/g, '')  // Elimina caracteres no alfanuméricos
                          .split(" ")
                          .map(word => word.charAt(0).toUpperCase())
                          .join("");
        };

        // Limpiar y abreviar las direcciones
        const direccionOrigen = cleanAddress(direccion_origen);
        const direccionDestino = cleanAddress(direccion_destino);

        // Combinar todos los elementos para formar el nuevo ID
        const combinedId = `${origenAbreviado}${cp_OrigenAbreviado}${direccionOrigen}${destinoAbreviado}${cp_DestinoAbreviado}${direccionDestino}${cantidadAbreviada}`;

        // Verificar la longitud del ID combinado (opcional)
        if (combinedId.length > 255) {
            throw new Error('El ID combinado es demasiado largo.');
        }

        // Crear el registro con el ID combinado y los demás datos
        const newRegister = await Registro.create({
            id: combinedId,
            origen,
            cp_origen,
            direccion_origen,
            estado_origen,
            destino,
            cp_destino,
            direccion_destino,
            estado_destino,
            unidad,
            peso,
            dimensiones,
            cantidad_skids,
        });

        return newRegister;
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            console.error('Validation Error:', error.errors);
        } else {
            console.error('Error:', error.message);
        }
        throw error; // Vuelve a lanzar el error para manejarlo en otro lugar si es necesario
    }
}

module.exports = postRegister;
