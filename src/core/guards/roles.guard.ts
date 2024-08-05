// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { RolService } from 'src/modules/rol/rol.service';
// import { ROLES_KEY } from '../decorators/roles.decorator';

// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(
//     private reflector: Reflector,
//     private rolesService: RolService, // Inyecta el servicio de roles
//   ) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     // Obtén los roles requeridos desde la metadata de la ruta
//     const requiredRoles = this.reflector.getAllAndOverride<string[]>(
//       ROLES_KEY,
//       [context.getHandler(), context.getClass()],
//     );
//     if (!requiredRoles) {
//       return true;
//     }

//     // Obtén el usuario desde la solicitud HTTP
//     const { user } = context.switchToHttp().getRequest();
//     if (!user) {
//       return false;
//     }

//     // Obtén los roles del usuario desde la base de datos
//     const userRoles = await this.rolesService.findAll(); // Ajusta esto según tu lógica de negocio

//     // Compara los roles del usuario con los roles requeridos
//     return requiredRoles.some((role) => userRoles.includes(role));
//   }
// }
