import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("ongs").del();

    
    // Inserts seed entries
    await knex("ongs").insert([
        {
            id: 1,
            ong_name: 'ONG1',
            ong_manager: '?',
            ong_mail: 'sac@aacd.org.br',
            zipcode: 1111111,
            address: "rua teste",
            number: 11,
            state: "sp",
            city: "sp",
            cod_phone: 11,
            phone: 998999,
            password: 121212,
            category_id: 1
        },
        {
            id: 2,
            ong_name: 'ONG2',
            ong_manager: '?',
            ong_mail: 'sac@aacd.org.br',
            zipcode: 1111111,
            address: "rua teste",
            number: 11,
            state: "sp",
            city: "sp",
            cod_phone: 11,
            phone: 998999,
            password: 121212,
            category_id: 1
        },
        {
            id: 3,
            ong_name: 'ONG3',
            ong_manager: '?',
            ong_mail: 'sac@aacd.org.br',
            zipcode: 1111111,
            address: "rua teste",
            number: 11,
            state: "sp",
            city: "sp",
            cod_phone: 11,
            phone: 998999,
            password: 121212,
            category_id: 1
        }
    ]);
};
