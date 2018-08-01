import { Person } from './person';
export class Student extends Person{ //Herda da classe pessoa
    constructor(name: string){
        super(name); //preciso usar o super para passar o nome ao construtor da classe Pai(Person)
    }

    public showAge(age: number): void{ //sobreescrevendo o método showAge que se encontra na classe Pessoa
        console.log('Studyind..');
        super.showAge(25);
    }
}