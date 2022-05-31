import HttpSerivce from "./Http.Service";
import { QuestionToSend } from "./../../../project-interfaces/projectInterfaces";
 
class QuestionServise extends HttpSerivce {
  serviceUrl: string;
  constructor() {
    super();
    this.serviceUrl = "question"
  }
  async getAllQuestionData() {
    return await this.get(this.serviceUrl);
  }
  async addNewQuestion(data: QuestionToSend) {
    
  }
  async changeQuestion(id: string, data: QuestionToSend) {

  }
  async deleteQuestion(id: string) {}
}

const questionServise = new QuestionServise();
export default questionServise;