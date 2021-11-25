import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('ongs', (table) => {
        table.increments('id');
        table.string('ong_name').notNullable();
        table.string('ong_manager').notNullable();
        table.string('ong_mail').notNullable();
        table.string('zipcode',10).notNullable();
        table.string('address').notNullable();
        table.integer('number').notNullable();
        table.string('state').notNullable();
        table.string('city').notNullable();
        table.string('cod_phone',3).notNullable();
        table.string('phone',13).notNullable();
        table.string('password').notNullable();
        table.integer('category_id').unsigned();
        table.foreign('category_id').references('id').inTable('ong_category');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('ongs');
}

