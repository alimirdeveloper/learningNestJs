import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  )
  /**
   * swagger configuration
  */
 const config = new DocumentBuilder()
 .setTitle('NestJs Masterclass- test app API')
 .setDescription('Use The base API URL as http://localhost:3000')
 .setTermsOfService('http://localhost:3000/terms-of-service')
 .setLicense('MIT License' , 'https://github.com/alimirdeveloper/learningNestJs')
 .addServer('http://localhost:3000')
 .setVersion('1.0').build();
  // Instantiate Document

 const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api', app, document);

 await app.listen(3000);
}
bootstrap();

