let student={
    name:"Asneh",
    roll:10,
    city:"Jamtara",
    age:19,
    marks:[90,85,74,68]
};
console.log(student);

//add value

student.cgpa=8.6;
console.log(student.cgpa);
console.log(student);


//update value
student.name="Asneh Raj";
student.city="Jamshedpur";
console.log(student.name);
console.log(student.city);
console.log(student);

//delete value
delete student.age;
console.log(student);
