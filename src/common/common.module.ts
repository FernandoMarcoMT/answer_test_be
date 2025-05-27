import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule
  ],
  providers: [PrismaService],
  exports: [PrismaService, HttpModule],

})
export class CommonModule {}
