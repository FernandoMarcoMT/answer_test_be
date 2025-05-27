import { Module } from '@nestjs/common';
import { CheckOutModule } from './checkout/checkout.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './common/prisma/prisma.service';
import { HttpModule } from '@nestjs/axios';
import { RandomUserModule } from './random-user/random-user.module';


@Module({
  imports: [
    CommonModule,
    CheckOutModule,
    AuthModule,
    RandomUserModule
  ],
  providers: [PrismaService],
})
export class AppModule {}
