import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("ong_category").del();

    // Inserts seed entries
    await knex("ong_category").insert([
        { id: 1, category: "Assistência social" },
        { id: 2, category: "Cultura" },
        { id: 3, category: "Saúde" },
    ]);
};
