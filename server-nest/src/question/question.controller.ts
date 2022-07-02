import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import {
  createQuestionDtoClass,
  updateQuestionDtoClass,
} from './../../../type';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get(':person_id')
  async getAllQuestionByPersonId(@Param('person_id') person_id: string) {
    return this.questionService.getAllPreparedData(+person_id);
  }

  @Post()
  async createQuestion(@Body() createQuestionDto: createQuestionDtoClass) {
    return await this.questionService.createNewQuestion(createQuestionDto);
  }

  @Patch()
  async updateQuestion(@Body() updateQuestionDto: updateQuestionDtoClass) {
    return this.questionService.updateQuestion(updateQuestionDto);
  }

  @Delete(':person_id/:question_id')
  async deleteQuestionUser(
    @Param('person_id') person_id: string,
    @Param('question_id') question_id: string,
  ) {
    return this.questionService.deleteQuestion(+person_id, +question_id);
  }
}
