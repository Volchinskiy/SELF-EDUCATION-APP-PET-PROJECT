import { Injectable } from '@nestjs/common';
import { CreateQuestionDto, UpdateQuestionDto } from './dto';
import AppDataSource from 'src/database/data-source';

@Injectable()
export class QuestionService {
  public async getAllPreparedData(person_id: number) {
    const allTopic = await this.getAllTopicWithoutRepeat(person_id);
    const allSortedQuestions = await this.getAllQuestionSortedByTopic(
      person_id,
    );
    const allRepeatQuestion = await this.getAllQuestionForRepeat(person_id);

    return { allTopic, allSortedQuestions, allRepeatQuestion };
  }

  public async createNewQuestion(createQuestionDto: CreateQuestionDto) {
    const { person_id, title, text, topic } = createQuestionDto;

    await AppDataSource.query(
      `INSERT INTO question (person_id, title, text, topic) VALUES (${person_id}, '${title}', '${text}', '${topic}');`,
    );

    return 'Question Created Successfully!';
  }

  public async update(updateQuestionDto: UpdateQuestionDto) {
    const { question_id, title, text, topic } = updateQuestionDto;
    await AppDataSource.query(
      `UPDATE question SET title = '${title}', text = '${text}', topic = '${topic}' WHERE id = ${question_id}`,
    );
    return `Question Updated Successfully!`;
  }

  public async deleteQuestion(personId: number, id: number) {
    await AppDataSource.query(
      `DELETE FROM question WHERE id = ${id} AND person_id = ${personId};`,
    );

    return 'Question Deleted Successfully!';
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

    for (const question of allQuestion) {
      const { id, title, text, repeat_status } = question;

      if (this.isNeedRepeat(dateNow, 'repeat_1', question, 1)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_2', question, 2)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_3', question, 3)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_4', question, 4)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_5', question, 5)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_6', question, 6)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_7', question, 7)) {
        result.push({ id, title, text, repeat_status });
        continue;
      }
      if (this.isNeedRepeat(dateNow, 'repeat_8', question, 8)) {
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
    expectedRepeat: number,
  ) {
    if (dateNow > question[whichRepeat]) {
      if (expectedRepeat > question.repeat_status) return true;
    }
    return false;
  }
}
