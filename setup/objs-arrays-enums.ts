//const person: {
//    name: string;
//    age: number;
//} = {

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

    const person = {
    name: 'Jonathan',
    age: 30,
    hobbies: ['sports', 'music'],
    role: 'autor'
};

let favoriteActivities: string[];
favoriteActivities = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log(person.role);