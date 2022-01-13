export type Ong = {
    readonly id: number,
    readonly ong_name: string,
    readonly ong_manager: string,
    readonly ong_mail: string,
    readonly zipcode: string,
    readonly address: string,
    readonly number: number,
    readonly state: string;
    readonly city: string,
    readonly cod_phone: string,
    readonly phone: string,
    readonly category: string,
}

type RES_Status = {
    OK : 200,
    INTERNAL: 500,
    CREATED: 201,
    UNATHORIZED: 401,
} 


export interface IConfig {
    STATUS : RES_Status,
    INTERAL_ERROR_MSG: string;
}

export type Category = {
    readonly id: number;
    readonly category: string;
    readonly textName: string;
    readonly ling: string;
}

export type User = {
    readonly id: number,
    readonly name: string,
    readonly cpf: string,
    readonly birthdate: string,
    readonly gender: string,
    readonly mail: string,
    readonly zipcode: number,
    readonly address: string,
    readonly number: number,
    readonly complement: string;
    readonly district: string;
    readonly state: string,
    readonly city: string,
    readonly codPhone: string,
    readonly phone: string
    readonly isLogged?: boolean
};

export interface queryParams{
    id?: number,
    offset?: number,
    limit?: number,
}