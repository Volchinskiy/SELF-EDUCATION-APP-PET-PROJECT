import { Injectable } from '@nestjs/common';
import AppDataSource from 'src/database/data-source';
import {
  allSortedQuestion,
  allRepeatQuestion,
  createQuestionDtoClass,
  updateQuestionDtoClass,
  updateRepeatStatusDtoC,
  allQuestionUser,
} from './../../../type';

@Injectable()
export class QuestionService {
  public async getAllPreparedData(person_id: number): Promise<allQuestionUser> {
    const allTopic = await this.getAllTopicWithoutRepeat(person_id);
    const allSortedQuestion = await this.getAllQuestionSortedByTopic(person_id);
    const allRepeatQuestion = await this.getAllQuestionForRepeat(person_id);
    return { allTopic, allSortedQuestion, allRepeatQuestion };
  }

  public async createNewQuestion(createQuestionDto: createQuestionDtoClass): Promise<void> {
    const { person_id, title, text, topic } = createQuestionDto;
    await AppDataSource.query(`INSERT INTO question (person_id, title, text, topic) VALUES (${person_id}, '${title}', '${text}', '${topic}');`);
  }

  public async updateQuestion(updateQuestionDto: updateQuestionDtoClass): Promise<void> {
    const { title, text, topic, question_id } = updateQuestionDto;
    await AppDataSource.query(`UPDATE question SET title = '${title}', text = '${text}', topic = '${topic}' WHERE id = ${question_id};`);
  }

  public async updateRepeatStatus(updateRepeatStatus: updateRepeatStatusDtoC): Promise<void> {
    const { person_id, question_id, repeat_status } = updateRepeatStatus;
    await AppDataSource.query(`UPDATE question SET repeat_status = ${repeat_status + 1} WHERE id = ${question_id} AND person_id = ${person_id};`);
  }

  public async deleteQuestion(person_id: number, question_id: number): Promise<void> {
    await AppDataSource.query(`DELETE FROM question WHERE id = ${question_id} AND person_id = ${person_id};`);
  }

  private async getAllTopicWithoutRepeat(person_id: number): Promise<string[]> {
    const result: string[] = ['Все Вопросы'];
    const allPersonTopic = await AppDataSource.query(`SELECT topic FROM question WHERE person_id = ${person_id};`);
    for (const topicObj of allPersonTopic) {
      if (result.includes(topicObj.topic)) {
        continue;
      }
      result.push(topicObj.topic);
    }
    return [...result];
  }

  private async getAllQuestionSortedByTopic(person_id: number): Promise<allSortedQuestion> {
    const allQuestion = await AppDataSource.query(`SELECT id::INTEGER, title, text, topic FROM question WHERE person_id = ${person_id};`);
    const sortedQuestion = allQuestion.reduce((resultObj, question) => {
      const keys = Object.keys(resultObj);
      const { id, title, text } = question;
      if (keys.includes(question.topic)) {
        return {
          ...resultObj,
          [question.topic]: [...resultObj[question.topic], { id, title, text }],
        };
      }
      return { ...resultObj, [question.topic]: [{ id, title, text }] };
    }, {});
    return { ...sortedQuestion, ['Все Вопросы']: allQuestion };
  }

  private async getAllQuestionForRepeat(person_id: number): Promise<allRepeatQuestion> {
    const result = [];
    const allQuestion = await AppDataSource.query(
      `SELECT id::INTEGER, title, text, repeat_1, repeat_2, repeat_3, repeat_4, repeat_5, repeat_6, repeat_7, repeat_8, repeat_status FROM question WHERE person_id = ${person_id} AND repeat_status < 8 ;`,
    );
    for (const question of allQuestion) {
      const dateNow = new Date(Date.now() + 10_800_000);
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

  private isNeedRepeat(dateNow: Date, whichRepeat: string, question, expectedRepeat: number): boolean {
    if (dateNow > question[whichRepeat]) {
      if (expectedRepeat > question.repeat_status) return true;
    }
    return false;
  }
}
