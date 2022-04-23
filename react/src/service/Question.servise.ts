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
  async addNewQuestion(data: any) {
    await this.post(this.questionUrl, data);
  }
  async deleteQuestion(id: string){
    await this.detele(`${this.questionUrl}/${id}`);
  }
}

const questionServise = new QuestionServise();
export default questionServise;