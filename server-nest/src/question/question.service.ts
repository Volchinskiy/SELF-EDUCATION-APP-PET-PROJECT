import { Injectable } from '@nestjs/common';
import { CreateQuestionDto, UpdateQuestionDto } from './dto';
import AppDataSource from 'src/database/data-source';

@Injectable()
export class QuestionService {
  public async GetAllPreparedData(id: number) {
    // At This Method We Take All Topics, All Questions Sorted By Topics And All Questions For Repeat.

    // const allTopic = await this.getAllTopicWithoutRepeat(id);
    // console.log(allTopic);
    const allSortedQuestions = await this.getAllQuestionsSortedByTopic(id);
    console.log(allSortedQuestions);

    return `Something Went Wrong.`;
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

  private async getAllTopicWithoutRepeat(id: number): Promise<string[]> {
    const result: string[] = [];

    const allUserTopics = await AppDataSource.query(
      `SELECT topic FROM question WHERE person_id = ${id}`,
    );

    for (const index of allUserTopics) {
      if (result.includes(index.topic)) {
        continue;
      }
      result.push(index.topic);
    }

    return result;
  }

  private async getAllQuestionsSortedByTopic(id: number) {
    const allQuestion = await AppDataSource.query(
      `SELECT id, title, text, topic FROM question WHERE person_id = ${id} ORDER BY topic;`,
    );

    const sortedQuestion = allQuestion.reduce((acc, item) => {
      const accKeys = Object.keys(acc);
      if (accKeys.includes(item.topic)) {
        console.log('add question');
      }
      // НУЖНО ДОРЕШАТЬ ЭТУ ТАСКУ
      acc[item.topic] = item;

      return acc;
    }, {});

    console.log(sortedQuestion);
  }
}
