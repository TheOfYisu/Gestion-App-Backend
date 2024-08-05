import { AppResponse } from 'src/core/interfaces/app.interface';

export class ReturnConfig {
  returnResponse<T>(
    successful: boolean,
    status: number,
    message: string,
    data?: T,
  ): AppResponse<T> {
    return {
      successful,
      status,
      message,
      data,
      timestamp: new Date().toISOString(),
    };
  }
}
