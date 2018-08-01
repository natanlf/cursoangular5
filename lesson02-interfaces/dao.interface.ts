export interface DaoInterface{
    tableName: string;

    insert(Object: any):boolean;
    update(Object: any): boolean;
    delete(id: number): boolean;
    find(id: number):any;
    findAll():[any];
}