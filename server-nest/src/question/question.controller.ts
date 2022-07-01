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
import { CreateQuestionDto, UpdateQuestionDto } from './dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get(':id')
  async GetAllQuestionUser(@Param('id') id: string) {
    return this.questionService.getAllPreparedData(+id);
  }

  @Post()
  async CreateQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.createNewQuestion(createQuestionDto);
  }

  @Patch()
  async UpdateQuestion(@Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.update(updateQuestionDto);
  }

  @Delete(':personId/:id')
  async DeleteQuestion(
    @Param('personId') personId: string,
    @Param('id') id: string,
  ) {
    return this.questionService.deleteQuestion(+personId, +id);
  }
}
