import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("users").del();

    await knex("users").insert([
        { id: 1, name: "Afonso", cpf: '441.932.158-03', birthdate: new Date(), gender: 'Masculino', mail: 'email@gmail.com', zipcode: 11706200, address: 'Rua antero de quental', number: 236, state: 'SP', city: 'São Paulo', cod_phone: '013', phone: '99637-0474', password: '123'},
        { id: 2, name: "Caio", cpf: '441.932.158-02', birthdate: new Date(), gender: 'Masculino', mail: 'email@gmail.com', zipcode: 11706200, address: 'Rua antero de quental', number: 236, state: 'SP', city: 'São Paulo', cod_phone: '013', phone: '99637-0474', password: '123'},
        { id: 3, name: "Renato", cpf: '441.932.158-01', birthdate: new Date(), gender: 'Masculino', mail: 'email@gmail.com', zipcode: 11706200, address: 'Rua antero de quental', number: 236, state: 'SP', city: 'São Paulo', cod_phone: '013', phone: '99637-0474', password: '123'},
    ]);
};
