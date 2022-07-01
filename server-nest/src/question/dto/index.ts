export class CreateQuestionDto {
  readonly person_id: number;
  readonly title: string;
  readonly text: string;
  readonly topic: string;
}

export class UpdateQuestionDto {
  readonly question_id: string;
  readonly title: string;
  readonly text: string;
  readonly topic: string;
}
