import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() 
{

  const app = await NestFactory.create(AppModule);
  await app.listen(5050);
  const env =   app.get(ConfigService);
  console.log(env.get('DATABASE_URL'));
  console.log(env.get('cup'));
}
bootstrap();
