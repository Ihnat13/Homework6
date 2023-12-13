/*Створити масив чисел, елементи якого задає користувач. Вивести суму цих чисел.

За основу взяти задачку з урока, де користувач вводить всі елементи одним рядком.

cancel має припиняти виконання програми, а порожній рядок не повинен сприйматися як 0 */
debugger
const userInput = prompt(`Enter numbers in list separating by ','`);

if (userInput === null) {
    alert(`Okay good bye`);
} else if (!userInput.trim()) {
    alert(`Nothing entered`);
} else {
    const userArray = userInput.split(`,`);
    let sumUserArray = 0;

    if (checkSpacesInArr(userArray)) {
        for (let i = 0; i < userArray.length; i++) {
            const currentNum = parseFloat(userArray[i], 10);
            if (!isNaN(currentNum)) {
                sumUserArray += currentNum;
            }
        }
        alert(sumUserArray);
    }

}

function checkSpacesInArr(userArray) {
    for (let i = 0; i < userArray.length; i++) {
        const checkCurrentNum = userArray[i].trim();
        if (checkCurrentNum === '') {
            alert('You entered an empty section');
            return false;
        }
        if (isNaN(checkCurrentNum)) {
            alert(`U enter letters ) You're a smart cookie!`)
            return false
        }
    }
    return true;
}
