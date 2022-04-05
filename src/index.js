import "./style.css"; 

const numbers = [2, 3, 5];
const doubledNumbers = numbers.map(number => number * 2); // Стрелочная функция. Не запнётся ли на ней Internet Explorer

console.log(doubledNumbers); // 4, 6, 10