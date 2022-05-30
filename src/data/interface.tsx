export interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    isMember: boolean;
    scores: number[];  //bir numara yazamayiz. arrayin icinde olmali
    acceddGroups: string[];
    status: PersonStatus
}

export enum PersonStatus{
    Customer,
    Employee,
    Unknown
}

