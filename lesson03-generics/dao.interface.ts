export interface DaoInterface<T>{ //com generics podemos passar qualquer tipo de objeto
    tableName: string;

    insert(Object: T):boolean;
    update(Object: T): boolean;
    delete(id: number): boolean;
    find(id: number):T;
    findAll():[T];
}