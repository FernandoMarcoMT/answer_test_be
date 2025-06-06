import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformResponseInterceptor } from './common/interceptors/transform-response.interceptor';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',         // izinkan semua origin
      methods: '*',        // izinkan semua method
    },
  });

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  const reflector = app.get(Reflector);
  app.useGlobalInterceptors(
    new TransformResponseInterceptor(reflector),
  );

  app.use(cookieParser());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
