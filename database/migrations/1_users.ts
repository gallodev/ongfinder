import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('name').notNullable();
        table.string('cpf',14).notNullable();
        table.string('birthdate');
        table.string('gender').notNullable();
        table.string('complement');
        table.string('district').notNullable();
        table.string('mail').notNullable();
        table.string('zipcode',10).notNullable();
        table.string('address').notNullable();
        table.integer('number').notNullable();
        table.string('state').notNullable();
        table.string('city').notNullable();
        table.string('cod_phone',3).notNullable();
        table.string('phone',13).notNullable();
        table.string('password').notNullable(); 
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('users');
}

