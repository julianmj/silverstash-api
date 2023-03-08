import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigType } from '@nestjs/config'
import { Request } from 'express'; 

import config from './../../config'

@Injectable()
export class ApiKeyGuard implements CanActivate {
 constructor(@Inject(config.KEY) private configService: ConfigType<typeof config>){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('Auth');
    const isAuth = authHeader === this.configService.apiKey;
    if(!isAuth){
      throw new UnauthorizedException();
    }
    return isAuth;
  }
}
