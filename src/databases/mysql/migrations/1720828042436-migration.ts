import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1720828042436 implements MigrationInterface {
    name = 'Migration1720828042436'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`mozas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`description\` varchar(255) NOT NULL, \`phone\` int NOT NULL, \`status\` int NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_01e2593dcc62c6484b4b1973cb\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_01e2593dcc62c6484b4b1973cb\` ON \`mozas\``);
        await queryRunner.query(`DROP TABLE \`mozas\``);
    }

}
