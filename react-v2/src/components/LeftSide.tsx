import React from 'react'

import ButtonWithArrow from './ButtonWithArrow'
import ButtonItemTheme from "./ButtonItemTheme";
import ButtonItem from './ButtonItem';
import ButtonAddQuestion from './ButtonAddQuestion';

import { useSelector } from 'react-redux';
import { RootState } from "./../redux/store";
import {toggleShowRepeatQuestion, toggleShowTheme, toggleShowQuestion} from "./../redux/action/question";

// import { QuestionStateQuestionsT, QuestionStateRepeatQuestionsT } from ''

export default function LeftSide() {
  const { uiReducer, topicReducer, questionReducer }: RootState = useSelector((state) => state) as RootState;
  const Questions: QuestionStateQuestionsT = questionReducer["questions"];
  const RepeatQuestions: QuestionStateRepeatQuestionsT  = QuestionReducer["RepeatQuestions"];

  return (
    <div className="content__left-side">
      <div className="content__left-side-body">
        <div className="content__left-side-scroll-wrapper">

          <ButtonWithArrow 
            title = "Темы"
            count = {topicReducer.allTheme.length}
            actionForDispatch = {toggleShowTheme}
            flagForRenderArrow = {uiReducer.showTheme}
          />

          {
            uiReducer.showTheme 
            ?
            topicReducer.allTheme.map((item, index) => {
              return <ButtonItemTheme 
                      index = {index} 
                      title = {item} 
                      key = {`${item}_${index}`}
                     />
            })
            :
            null
          }

          <ButtonWithArrow 
            title = "Вопросы"
            count = {topicReducer.selectedTheme[1] !== null ? Questions[topicReducer.selectedTheme[1]].length : 0}
            actionForDispatch = {toggleShowQuestion}
            flagForRenderArrow = {uiReducer.showQuestion}
          />

          {
            uiReducer.showQuestion
            ?
            <ButtonAddQuestion />
            :
            null
          }

          {
            topicReducer.selectedTheme[1] !== null && uiReducer.showQuestion
            ?
            Questions[topicReducer.selectedTheme[1]].map((item, index: number) => {
              return <ButtonItem
                      {...item}
                      index={index}
                      isRepeat = {false}
                      theme={topicReducer.selectedTheme[1]}
                      key={`${item.title}_${index}`} 
                     />
            })
            :
            null
          }

          <ButtonWithArrow 
            title = "Повторить"
            count = {RepeatQuestions.length}
            actionForDispatch = {toggleShowRepeatQuestion}
            flagForRenderArrow = {uiReducer.showRepeatQuestion}
            isRepeat = {true}
          />

          {
            uiReducer.showRepeatQuestion && RepeatQuestions.length > 0
            ?
            RepeatQuestions.map((item, index: number) => {
              return <ButtonItem
                      {...item}
                      index={index}
                      isRepeat = {true}
                      theme={topicReducer.selectedTheme[1]}
                      key={`${item.title}_${index}`} 
                     />
            })
            :
            null
          }

        </div>
      </div>
    </div>
  )
}
