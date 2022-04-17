import Question from "../models/question";

export default class QuestionService{
  async getAllQuestions() {
    const questions = await Question.find();
    return questions;
  }
  async addQuestion(data: any) {
    const question = new Question(data);
    await question.save();
    return question;
  }
  async changeQuestion(data: any, id: string) {
    const question = await Question.findByIdAndUpdate(id, data, {new: true});
    return question;
  }
  async deleteQuestion(id: string) {
    await Question.findByIdAndRemove(id);
  }
};