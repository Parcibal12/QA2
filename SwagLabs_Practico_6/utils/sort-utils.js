
/**
 * 
 * @param {string} order 
 * @returns {boolean} (True if the parameter is considered ascending and false otherwise)
 */
export function getSortOrder(order) {
    const ascending = ['a-z', 'low-high']; 

    return ascending.includes(order);
}

/**
 * 
 * @param {any[]} array 
 * @param {*} comparatorFunction 
 * @param {boolean} ascending 
 * 
 * @returns {any[]} 
 */
export async function getSortedList(array, comparatorFunction, ascending = true) {
    array = [...array];
    array = array.sort(comparatorFunction);

    if(ascending) {
        return [...array];
    }

    return [...array].reverse();
}


export const comparatorFunctions = {
    name: undefined,

    /**
     * 
     * @param {string} a 
     * @param {string} b 
     * @returns 
     */
    price: (a, b) => {
        a = parseFloat(a.slice(1));
        b = parseFloat(b.slice(1));

        return a - b;
    }
}