import { Document, Model, model, Schema } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  text: string;
  scope: string;
  date: number;
  firstRepeat: number;
  secondRepeat: number;
  thirdRepeat: number;
  fourthRepeat: number;
  fifthRepeat: number;
  sixthRepeat: number;
  seventhRepeat: number;
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
    type: Number,
    default: Date.now(),
  },
  firstRepeat: {
    type: Object,
    default: {
      date: Date.now() + 900000,
      done: false,
    }
  },
  secondRepeat: {
    type: Object,
    default: {
      date: Date.now() + 25200000,
      done: false,
    },
  },
  thirdRepeat: {
    type: Object,
    default: {
      date: Date.now() + 86400000,
      done: false,
    },
  },
  fourthRepeat: {
    type: Object,
    default: {
      date: Date.now() + 259200000,
      done: false,
    },
  },
  fifthRepeat: {
    type: Object,
    default: {
      date: Date.now() + 604800000,
      done: false,
    },
  },
  sixthRepeat: {
    type: Object,
    default: {
      date: Date.now() + 1555200000,
      done: false,
    },
  },
  seventhRepeat: {
    type: Object,
    default: {
      date: Date.now() + 6739200000,
      done: false,
    },
  },
})

const Question: Model<IQuestion> = model("Question", questionSchema);
export default Question;