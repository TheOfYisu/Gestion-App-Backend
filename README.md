<!-- <p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p> -->

# Proyecto de Control y Gestión de Horarios Laborales - Backend

Este proyecto utiliza NestJS como framework para el desarrollo del backend de una aplicación web destinada al control y gestión de horarios laborales en un centro de atención telefónica. El objetivo principal es proporcionar una solución eficiente para el registro de asistencias y la gestión de permisos, incluyendo la integración de un sistema biométrico para un registro preciso.

## Estructura del Proyecto

El proyecto sigue una estructura de carpetas y módulos en NestJS:

- **src/controllers**: Contiene controladores para cada entidad (trabajador, horario, permiso, informe).
- **src/services**: Lógica de negocio y operaciones específicas para cada entidad.
- **src/models**: Modelos de datos para las entidades (trabajador, horario, permiso).
- **test**: Contiene pruebas unitarias e de integración.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
