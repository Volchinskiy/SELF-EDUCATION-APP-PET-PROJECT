import { Module } from '@nestjs/common';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [QuestionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
