import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1719283989017 implements MigrationInterface {
    name = 'Migration1719283989017'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rol\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`rol\` ADD \`status\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`userxrol\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`userxrol\` ADD \`status\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`modules\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`modules\` ADD \`status\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`userxrolxmod\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`userxrolxmod\` ADD \`status\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userxrolxmod\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`userxrolxmod\` ADD \`status\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`modules\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`modules\` ADD \`status\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`userxrol\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`userxrol\` ADD \`status\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rol\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`rol\` ADD \`status\` tinyint NOT NULL`);
    }

}
