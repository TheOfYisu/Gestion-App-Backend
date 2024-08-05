import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1719190318548 implements MigrationInterface {
  name = 'Migration1719190318548';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`modules\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`description\` varchar(255) NOT NULL, \`status\` tinyint NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_8cd1abde4b70e59644c98668c0\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`name2\` varchar(50) NULL, \`lastname\` varchar(50) NOT NULL, \`lastname2\` varchar(50) NULL, \`dni\` varchar(15) NOT NULL, \`dob\` date NOT NULL, \`phone\` varchar(20) NOT NULL, \`email\` varchar(100) NOT NULL, \`address\` varchar(100) NOT NULL, \`password\` varchar(255) NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_5fe9cfa518b76c96518a206b35\` (\`dni\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`rol\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`description\` varchar(255) NOT NULL, \`status\` tinyint NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_642b883443b82d52f4ba99589c\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`userxrol\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` tinyint NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_users\` int NOT NULL, \`id_rol\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`userxrolxmod\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` tinyint NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`id_usersxrol\` int NOT NULL, \`id_module\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`userxrol\` ADD CONSTRAINT \`FK_c719823494b842fa11cfafb40c8\` FOREIGN KEY (\`id_users\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`userxrol\` ADD CONSTRAINT \`FK_29d9ae84911b17026df321a3d95\` FOREIGN KEY (\`id_rol\`) REFERENCES \`rol\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`userxrolxmod\` ADD CONSTRAINT \`FK_7bd34dd14f3355df2d98975ab16\` FOREIGN KEY (\`id_usersxrol\`) REFERENCES \`userxrol\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`userxrolxmod\` ADD CONSTRAINT \`FK_f00cb695c3ba9fc03ea83fd0150\` FOREIGN KEY (\`id_module\`) REFERENCES \`modules\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`userxrolxmod\` DROP FOREIGN KEY \`FK_f00cb695c3ba9fc03ea83fd0150\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`userxrolxmod\` DROP FOREIGN KEY \`FK_7bd34dd14f3355df2d98975ab16\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`userxrol\` DROP FOREIGN KEY \`FK_29d9ae84911b17026df321a3d95\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`userxrol\` DROP FOREIGN KEY \`FK_c719823494b842fa11cfafb40c8\``,
    );
    await queryRunner.query(`DROP TABLE \`userxrolxmod\``);
    await queryRunner.query(`DROP TABLE \`userxrol\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_642b883443b82d52f4ba99589c\` ON \`rol\``,
    );
    await queryRunner.query(`DROP TABLE \`rol\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_5fe9cfa518b76c96518a206b35\` ON \`users\``,
    );
    await queryRunner.query(`DROP TABLE \`users\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_8cd1abde4b70e59644c98668c0\` ON \`modules\``,
    );
    await queryRunner.query(`DROP TABLE \`modules\``);
  }
}
