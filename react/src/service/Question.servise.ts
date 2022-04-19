import HttpSerivce from "./Http.service";

class QuestionServise extends HttpSerivce {
  questionUrl: string;
  constructor() {
    super();
    this.questionUrl = "question";
  }
  async getAllQuestion() {
    const questions = await this.get(this.questionUrl);
    return questions;
  }
}

const questionServise = new QuestionServise();
export default questionServise;