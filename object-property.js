
const students = [
    { id: 21, name: 'Omar Sunny' },
    { id: 31, name: 'Manna' },
    { id: 41, name: 'Moyuri' },
    { id: 51, name: 'Dipjol' }
];

const names = students.map(s => s.name);
const id = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);

console.log(names);
console.log(id);
console.log(bigger);
console.log(biggerOne);


