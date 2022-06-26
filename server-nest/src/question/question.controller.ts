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
    return this.questionService.GetAllPreparedData(+id);
  }

  @Post()
  async CreateQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.CreateNewQuestion(createQuestionDto);
  }

  @Patch(':id')
  async UpdateQuestion(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  async DeleteQuestion(@Param('id') id: string) {
    return this.questionService.remove(+id);
  }
}
