import { Request, Response } from "express";
import QuestionService from "../services/question.service";
import { getRepeatQuestions } from "../middlewares/functions";
import Question from "../models/question";
import { access } from "fs";

export class QuestionController{
  constructor(private questionService: QuestionService) {}
  async getAllQuestionData(_: Request, res: Response) {
    const questions = await this.questionService.getAllQuestions();

    function getAllTheme(questionsArr: any){
      return questionsArr.reduce((acc: any, item: any) => {
        if(acc.includes(...item.theme)){
          return acc;
        };
        return [...acc, ...item.theme];
       }, []);
    }

    function getSortedQuestionByTheme(questionsArr: any){

      return questionsArr.reduce((acc: any, item: any) => {
        console.log(acc);
        // if(acc.includes(...item.theme)){
        //   acc[item.theme].push(item);
        //   return acc;
        // }

        return {...acc, [item.theme]: [item]};
      }, {})
    }

    const result = {
      AllTheme: getAllTheme(questions),
      Questions: getSortedQuestionByTheme(questions),
      RepeatQuestions: []
    }

    // questions.reverse();
    res.status(200).send(result);
  }
  // async addQuestion(req: Request, res: Response) {
  //   const data = req.body
  //   const question = await this.questionService.addQuestion(data);
  //   res.status(200).send(question);
  // }
  // async changeQuestion(req: Request, res: Response) {
  //   const data = req.body;
  //   const id = req.params.id;
  //   const question = await this.questionService.changeQuestion(data, id);
  //   res.status(200).send(question);
  // }
  // async deleteQuestion(req: Request, res: Response) {
  //   const id = req.params.id
  //   await this.questionService.deleteQuestion(id);
  //   res.status(200).send("Question Deleted")
  // }

}

const questionController = new QuestionController(new QuestionService());
export default questionController