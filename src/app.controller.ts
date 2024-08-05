import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/no-found')
  getNoFound(): string {
    return this.appService.getNoFound();
  }

  @Get('/unauthorized')
  getUnauthorized(): string {
    return this.appService.getUnauthorized();
  }
}
