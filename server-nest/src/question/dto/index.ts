import { PartialType } from '@nestjs/mapped-types';

export class CreateQuestionDto {
  readonly users_id: number;
  readonly title: string;
  readonly text: string;
  readonly topic: string;
}

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {}
