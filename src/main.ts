import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.DATABASE_URL)
  console.log(process.env.cup)
  await app.listen(5050);
}
bootstrap();
