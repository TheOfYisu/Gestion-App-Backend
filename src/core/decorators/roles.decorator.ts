import { SetMetadata, Injectable, Inject } from '@nestjs/common';
import { RolService } from 'src/modules/rol/rol.service';

export const ROLES_KEY = 'roles';

@Injectable()
export class RolesDecorator {
  constructor(private readonly rolService: RolService) {}

  async Roles() {
    const roles = await this.rolService.getRols();
    return SetMetadata(ROLES_KEY, roles);
  }
}
