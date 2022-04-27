import { Document, Model, model, Schema } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  text: string;
  scope: string;
  dateСreation: number;
  // firstRepeat: number;
  // secondRepeat: number;
  // thirdRepeat: number;
  // fourthRepeat: number;
  // fifthRepeat: number;
  // sixthRepeat: number;
  // seventhRepeat: number;
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
  sphere: {
    type: [String],     // Список строк.
    default: ["General"],
  },
  dateСreation: {
    type: Object,
    default: new Date(Date.now() + 10_800_000),
  },
  repeats: {
    type: Object,
    default: {
      firstRepeat: {
        date: new Date(Date.now() + 11_700_000),
        done: false,
      },
      secondRepeat: {
        date: new Date(Date.now() + 36_000_000),
        done: false,
      },
      thirdRepeat: {
        date: new Date(Date.now() + 97_200_000),
        done: false,
      },
      fourthRepeat: {
        date: new Date(Date.now() + 270_000_000),
        done: false,
      },
      fifthRepeat: {
        date: new Date(Date.now() + 615_600_000),
        done: false,
      },
      sixthRepeat: {
        date: new Date(Date.now() + 1_566_000_000),
        done: false,
      },
      seventhRepeat: {
        date: new Date(Date.now() + 6_750_000_000),
        done: false,
      },
    },
  },
})



const Question: Model<IQuestion> = model("Question", questionSchema);
export default Question;