import { Document, Model, model, Schema } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  text: string;
  scope: string;
  date: object;
}

const questionSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: "",
  },
  scope: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Question: Model<IQuestion> = model("Question", questionSchema);
export default Question;