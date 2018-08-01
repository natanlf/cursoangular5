export class Person{ //com export podemos usar essa classe fora desse arquivo

    private name: string;

     constructor(name: string){
        this.name = name;
     }

     public showAge(age: number): void{
        console.log(`${this.name} has ${age} years old`);
     }

     public toString(): string{
        return `Class Person, name ${this.name}`;
     }
}