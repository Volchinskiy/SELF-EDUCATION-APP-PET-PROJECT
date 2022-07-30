import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionService } from './question.service';
import { createQuestionDtoClass, updateQuestionDtoClass, updateRepeatStatusDtoC } from './../../../type';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get(':person_id')
  getAllQuestionByPersonId(@Param('person_id') person_id: string) {
    return this.questionService.getAllPreparedData(+person_id);
  }

  @Post()
  createQuestion(@Body() createQuestionDto: createQuestionDtoClass) {
    this.questionService.createNewQuestion(createQuestionDto);
    return this.questionService.getAllPreparedData(createQuestionDto.person_id);
  }

  @Patch()
  updateQuestion(@Body() updateQuestionDto: updateQuestionDtoClass) {
    this.questionService.updateQuestion(updateQuestionDto);
    return this.questionService.getAllPreparedData(updateQuestionDto.person_id);
  }

  @Patch('repeat_status')
  updateRepeatStatus(@Body() updateRepeatStatus: updateRepeatStatusDtoC) {
    this.questionService.updateRepeatStatus(updateRepeatStatus);
    return this.questionService.getAllPreparedData(updateRepeatStatus.person_id);
  }

  @Delete(':person_id/:question_id')
  async deleteQuestionUser(@Param('person_id') person_id: string, @Param('question_id') question_id: string) {
    this.questionService.deleteQuestion(+person_id, +question_id);
    return this.questionService.getAllPreparedData(+person_id);
  }
}
