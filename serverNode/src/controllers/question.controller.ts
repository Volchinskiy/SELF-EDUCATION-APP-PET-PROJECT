import { Request, Response } from "express";
import QuestionService from "../services/question.service";

export class QuestionController{
  constructor(private questionService: QuestionService) {}
  async getAllQuestions(_: Request, res: Response) {
    const questions = await this.questionService.getAllQuestions();
    res.status(200).send(questions);
  }
  async addQuestion(req: Request, res: Response) {
    const data = req.body
    const question = await this.questionService.addQuestion(data);
    res.status(200).send(question);
  }
  async changeQuestion(req: Request, res: Response) {
    const data = req.body;
    const id = req.params.id;
    const question = await this.questionService.changeQuestion(data, id);
    res.status(200).send(question);
  }
  async deleteQuestion(req: Request, res: Response) {
    const id = req.params.id
    await this.questionService.deleteQuestion(id);
    res.status(200).send("Question Deleted")
  }
}

const questionController = new QuestionController(new QuestionService());
export default questionController