import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { RolModule } from './rol/rol.module';
import { UserxrolModule } from './userxrol/userxrol.module';

@Module({
  imports: [UserModule, AuthModule, RolModule, UserxrolModule],
})
export class AllModules {}
