import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { QuestionModule } from './question/question.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [QuestionModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
