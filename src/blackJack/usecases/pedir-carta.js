
/**
 * Esta funcion saca una carta del deck y la devuelve
 * @param {Array<String>} deck Ej: 10A
 * @returns {String} retorna una carta
 */

export const pedirCarta = ( deck ) => {

    if( !deck ) 
        throw new Error('El deck debe ser enviado');
    
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}



