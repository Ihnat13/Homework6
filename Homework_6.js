// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// Наступний код має працювати:


// // Результат: [1, '2', 3, '5', 4, 6, '7']
const array = [1, '2', 5, 3, '5', 4, 5, 6, '7'];
function removeElement(array, item){
    const arrayItem = item
    for(let i = 0; i < array.length; i++ ) {
        if (array[i] !== arrayItem) {
            continue
        }
        const index = array.indexOf(arrayItem);
        // array.splice(index, 1)
        for(let j = i; j < array.length;j++) {
            array[j] = array[j+1]
        }
        array.length--;
        i--;
    }
}
removeElement(array, 5);
console.log(array);


