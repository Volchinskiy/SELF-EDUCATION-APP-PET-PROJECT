import { AxiosResponse } from "C:/Users/TTT/Desktop/Programming-Maxim-Volchinskiy/Web/SELF-EDUCATION-APP-PET-PROJECT/server-nest/node_modules/axios/index";

// DTO
// redux state
// api type

export interface ApiFetchDataType {
  question: {
    getAllQuestionByPersonId: (
      person_id: number
    ) => Promise<AxiosResponse<allQuestionUser>>;
    createQuestion: (
      createQuestionDto: createQuestionDtoClass
    ) => Promise<AxiosResponse<allQuestionUser>>;
    updateQuestion: (
      updateQuestionDto: updateQuestionDtoClass
    ) => Promise<AxiosResponse<allQuestionUser>>;
    deleteQuestionUser: (
      person_id: number,
      question_id: number
    ) => Promise<AxiosResponse<allQuestionUser>>;
  };
}

export interface sortedQuestion {
  id: number;
  title: string;
  text: string;
}

export interface repeatQuestion extends sortedQuestion {
  repeat_status: number;
}

export type allTopic = string[];

export type allSortedQuestions = {
  [key: string]: sortedQuestion[];
};

export type allRepeatQuestion = Array<repeatQuestion> | [];

export type allQuestionUser = {
  allTopic: allTopic;
  allSortedQuestions: allSortedQuestions;
  allRepeatQuestion: allRepeatQuestion;
};

export class createQuestionDtoClass {
  person_id!: number;
  title!: string;
  text!: string;
  topic!: string;
}

export class updateQuestionDtoClass extends createQuestionDtoClass {
  question_id!: number;
}

export interface UIStateI {
  showLeftSide: boolean;
  showAddQuestionArea: boolean;
  showTheme: boolean;
  showQuestion: boolean;
  showRepeatQuestion: boolean;
}

export interface TopicStateI {
  allTheme: Array<string> | [];
  selectedTopic: [number, string];
}

export type SelectedQuestionT =
  | (sortedQuestion & { index: number })
  | (repeatQuestion & { index: number })
  | null;

export interface QuestionStateI {
  allSortedQuestion: allSortedQuestions;
  allRepeatQuestion: allRepeatQuestion;
  selectedQuestion: SelectedQuestionT;
  lastTypeSelectedQuestion: string | null;
}
