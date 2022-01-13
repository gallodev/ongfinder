import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("ong_category").del();

    // Inserts seed entries
    await knex("ong_category").insert([
        {
          "id": 1,
          "category": "Assistência social",
          "textName": "Assistência social",
          "link": "/categoria/assistencia-social"
        },
        {
          "id": 2,
          "category": "Cultura",
          "textName": "Cultura",
          "link": "/categoria/cultura"
        },
        {
          "id": 3,
          "category": "Saúde",
          "textName": "Saúde",
          "link": "/categoria/saude"
        },
        {
          "id": 4,
          "category": "Animais",
          "textName": "Animais",
          "link": "/categoria/animais"
        },
        {
          "id": 5,
          "category": "Cursos",
          "textName": "Cursos",
          "link": "/categoria/cursos"
        },
        {
          "id": 6,
          "category": "Doações em geral",
          "textName": "Doações em geral",
          "link": "/categoria/doacoes"
        },
        {
          "id": 7,
          "category": "Entretenimentos",
          "textName": "Entretenimentos",
          "link": "/categoria/entretenimentos"
        },
        {
          "id": 8,
          "category": "Parques",
          "textName": "Parques",
          "link": "/categoria/parques"
        },
        {
          "id": 9,
          "category": "Reciclagem",
          "textName": "Reciclagem",
          "link": "/categoria/reciclagem"
        },
        {
          "id": 10,
          "category": "Voluntariado",
          "textName": "Voluntariado",
          "link": "/categoria/voluntariado"
        },
        {
          "id": 11,
          "category": "Outros",
          "textName": "Outros",
          "link": "/categoria/outros"
        }
      ]);
};
