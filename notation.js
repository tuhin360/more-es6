const student = {
    name: 'Bob',
    age: 15,
    class: 'seven',
    marks: {
        math: 80,
        english: 75,
        chemistry: 60
    }
}

const cls = student.class;
const math = student.marks.math;
console.log(cls);
console.log(math);

const eng = student['marks']['english'];
console.log(eng);
