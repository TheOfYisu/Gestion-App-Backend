import { Injectable } from '@nestjs/common';
import { noFoundPage } from './core/pages/noFound.page';
import { welcomePage } from './core/pages/welcome.page';
import { unauthorizedPage } from './core/pages/unauthorized.page';

@Injectable()
export class AppService {
  getHello(): string {
    return welcomePage.html;
  }

  getNoFound(): string {
    return noFoundPage.html;
  }

  getUnauthorized(): string {
    return unauthorizedPage.html;
  }
}
