import {
    integer,
    pgTable,
    varchar
} from "drizzle-orm/pg-core";

export const lotteriesTable = pgTable("lotteries", {
    id: integer().notNull().unique(),
    name: varchar().notNull().unique(),
    number_of_drawn: integer().notNull(),
    date_of_draw: varchar().notNull(),
    winning_numbers_draw: varchar().notNull()
})