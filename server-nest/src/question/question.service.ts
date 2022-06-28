import { Injectable } from '@nestjs/common';
import { CreateQuestionDto, UpdateQuestionDto } from './dto';
import AppDataSource from 'src/database/data-source';

@Injectable()
export class QuestionService {
  public async GetAllPreparedData(person_id: number) {
    // At This Method We Take All Topics, All Questions Sorted By Topics And All Questions For Repeat.

    const allTopic = await this.getAllTopicWithoutRepeat(person_id);
    const allSortedQuestions = await this.getAllQuestionSortedByTopic(
      person_id,
    );

    const allRepeatQuestion = await this.getAllQuestionForRepeat(person_id);

    return { allTopic, allSortedQuestions, allRepeatQuestion };
  }

  public async CreateNewQuestion(createQuestionDto: CreateQuestionDto) {
    const { users_id, title, text, topic } = createQuestionDto;

    await AppDataSource.query(
      `INSERT INTO question (person_id, title, text, topic) VALUES (${users_id}, '${title}', '${text}', '${topic}');`,
    );

    return 'Question Created Successfully!';
  }

  public async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} question`;
  }

  private async getAllTopicWithoutRepeat(person_id: number): Promise<string[]> {
    const result: string[] = [];

    const allUserTopics = await AppDataSource.query(
      `SELECT topic FROM question WHERE person_id = ${person_id}`,
    );

    for (const index of allUserTopics) {
      if (result.includes(index.topic)) {
        continue;
      }
      result.push(index.topic);
    }

    return result;
  }

  private async getAllQuestionSortedByTopic(person_id: number) {
    const allQuestion = await AppDataSource.query(
      `SELECT id, title, text, topic FROM question WHERE person_id = ${person_id};`,
    );

    return allQuestion.reduce((acc, item) => {
      const keys = Object.keys(acc);
      const { id, title, text } = item;

      if (keys.includes(item.topic)) {
        return {
          ...acc,
          [item.topic]: [...acc[item.topic], { id, title, text }],
        };
      }
      return { ...acc, [item.topic]: [{ id, title, text }] };
    }, {});
  }

  private async getAllQuestionForRepeat(person_id: number) {
    const result = [];
    const dateNow = new Date(Date.now() + 10_800_000);

    const allQuestion = await AppDataSource.query(
      `SELECT id, title, text, repeat_1, repeat_2, repeat_3, repeat_4, repeat_5, repeat_6, repeat_7, repeat_8, repeat_status FROM question WHERE person_id = ${person_id} AND repeat_status < 8 ;`,
    );

    for (const index of allQuestion) {
      const { id, title, text, repeat_status } = index;

      if (this.isNeedRepeat(dateNow, 'repeat_1', index, 1)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_2', index, 2)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_3', index, 3)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_4', index, 4)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_5', index, 5)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_6', index, 6)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_7', index, 7)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_8', index, 8)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
    }

    return result;
  }

  private isNeedRepeat(
    dateNow: Date,
    whichRepeat: string,
    question,
    repeat_status: number,
  ) {
    if (dateNow > question[whichRepeat]) {
      if (repeat_status > question.repeat_status) return true;
    }
    return false;
  }
}
