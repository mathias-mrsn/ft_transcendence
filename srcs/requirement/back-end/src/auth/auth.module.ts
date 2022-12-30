import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { FortyTwoStrategy } from './strategies/intra.strategy';

import { UserModule } from 'src/user/user.module';

@Module({
    imports: [
        JwtModule,
        HttpModule,
        UserModule,
    ],
    controllers: [
        AuthController
    ],
    providers: [
        AuthService,
        FortyTwoStrategy
    ],
})

export class AuthModule {}
