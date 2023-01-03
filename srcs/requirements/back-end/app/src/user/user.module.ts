import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'app/src/prisma/prisma.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
    providers: [UserService],
    exports: [UserService],
    imports: [PrismaModule, HttpModule],
    controllers: [UserController],

})
export class UserModule {}
