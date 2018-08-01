import { DaoInterface } from "./dao.interface";
import { PersonDao } from "./person-dao";
import { Person } from "../lesson01-classes/person";


let personDao : DaoInterface = new PersonDao();
let person: Person = new Person('Mike');
personDao.insert(person);