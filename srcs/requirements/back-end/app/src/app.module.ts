import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './auth/controllers/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [PrismaService],
  controllers: [AuthController],  
})

export class AppModule {}
