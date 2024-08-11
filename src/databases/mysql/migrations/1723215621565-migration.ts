import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1723215621565 implements MigrationInterface {
    name = 'Migration1723215621565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`department\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`description\` varchar(255) NOT NULL, \`status\` int NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_471da4b90e96c1ebe0af221e07\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`type_file\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`description\` varchar(255) NOT NULL, \`status\` int NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_2e1bda3982c0c8c19d46f63390\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_files\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` text NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_user\` int NOT NULL, \`id_type_file\` int NOT NULL, UNIQUE INDEX \`IDX_751e2e974881ca5e10a1284641\` (\`id_user\`, \`id_type_file\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`data\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`value\` varchar(100) NOT NULL, \`status\` int NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_a9f9f453b606e9266a6d46322a\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`concepts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`code\` varchar(10) NOT NULL, \`value\` int NOT NULL, \`status\` int NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_a9039e79ac8b5547a83266668c\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`position\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`description\` varchar(255) NOT NULL, \`salary_base\` int NOT NULL, \`status\` int NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_94b556b24267b2d75d6d05fcd1\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`data_company\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date_entry\` datetime NOT NULL, \`date_exit\` datetime NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_users\` int NOT NULL, \`id_position\` int NOT NULL, \`id_department\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_files\` ADD CONSTRAINT \`FK_f6b276582492e3701d1c09d46e9\` FOREIGN KEY (\`id_user\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_files\` ADD CONSTRAINT \`FK_20a876e99276a79fb2686448fe7\` FOREIGN KEY (\`id_type_file\`) REFERENCES \`type_file\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`data_company\` ADD CONSTRAINT \`FK_d6f6c2dabdff285a38a4034b568\` FOREIGN KEY (\`id_users\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`data_company\` ADD CONSTRAINT \`FK_e49795d9fe517757ba30b97efd1\` FOREIGN KEY (\`id_position\`) REFERENCES \`position\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`data_company\` ADD CONSTRAINT \`FK_2ebb79bf21b1c55e1bfa4e317de\` FOREIGN KEY (\`id_department\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`data_company\` DROP FOREIGN KEY \`FK_2ebb79bf21b1c55e1bfa4e317de\``);
        await queryRunner.query(`ALTER TABLE \`data_company\` DROP FOREIGN KEY \`FK_e49795d9fe517757ba30b97efd1\``);
        await queryRunner.query(`ALTER TABLE \`data_company\` DROP FOREIGN KEY \`FK_d6f6c2dabdff285a38a4034b568\``);
        await queryRunner.query(`ALTER TABLE \`user_files\` DROP FOREIGN KEY \`FK_20a876e99276a79fb2686448fe7\``);
        await queryRunner.query(`ALTER TABLE \`user_files\` DROP FOREIGN KEY \`FK_f6b276582492e3701d1c09d46e9\``);
        await queryRunner.query(`DROP TABLE \`data_company\``);
        await queryRunner.query(`DROP INDEX \`IDX_94b556b24267b2d75d6d05fcd1\` ON \`position\``);
        await queryRunner.query(`DROP TABLE \`position\``);
        await queryRunner.query(`DROP INDEX \`IDX_a9039e79ac8b5547a83266668c\` ON \`concepts\``);
        await queryRunner.query(`DROP TABLE \`concepts\``);
        await queryRunner.query(`DROP INDEX \`IDX_a9f9f453b606e9266a6d46322a\` ON \`data\``);
        await queryRunner.query(`DROP TABLE \`data\``);
        await queryRunner.query(`DROP INDEX \`IDX_751e2e974881ca5e10a1284641\` ON \`user_files\``);
        await queryRunner.query(`DROP TABLE \`user_files\``);
        await queryRunner.query(`DROP INDEX \`IDX_2e1bda3982c0c8c19d46f63390\` ON \`type_file\``);
        await queryRunner.query(`DROP TABLE \`type_file\``);
        await queryRunner.query(`DROP INDEX \`IDX_471da4b90e96c1ebe0af221e07\` ON \`department\``);
        await queryRunner.query(`DROP TABLE \`department\``);
    }

}
