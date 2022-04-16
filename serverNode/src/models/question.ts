import { Document, Model, model, Schema } from "mongoose";

interface IQuestion extends Document {
  title: string;
  text: string;
  refersTo: string;
  date: object;
}

const questionSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  refersTo: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Question: Model<IQuestion> = model("Question", questionSchema);

export default Question;