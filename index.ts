interface IPerson {
    readonly id: number,
    name: string,
    age: number,
    email?: string
};

const personOne: IPerson = {
    id: 1,
    name: "joão lacerda",
    age: 26,
    email: "joaolacerda@gmail.com"
};

const personTwo: IPerson = {
    id: 2,
    name: "zezinho silva",
    age: 26
};

console.log(returnPerson(personOne));
console.log(returnPerson(personTwo));

function returnPerson(person: IPerson): string{
    
    if(person.email){
        return `Id: ${person.id} Nome: ${person.name}, Idade: ${person.age} Email: ${person.email}`
    }
    else{
        return `Id: ${person.id} Nome: ${person.name}, Idade: ${person.age}`
    }  
}