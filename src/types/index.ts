export type Ong = {
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

export type Category = {
    readonly category: string;
}

export type User = {
    readonly name: string,
    readonly cpf: string,
    readonly birthdate: string,
    readonly gender: string,
    readonly mail: string,
    readonly zipcode: number,
    readonly address: string,
    readonly number: number,
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