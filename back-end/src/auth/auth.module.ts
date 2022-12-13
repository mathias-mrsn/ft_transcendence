import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { FortyTwoStrategy } from './strategy/jwt.strategy';

import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    JwtModule.register({
    secret: "superKey",
    signOptions: { expiresIn: '60s' },
  }),
    HttpModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, FortyTwoStrategy],

  
})
export class AuthModule {}
