import React from 'react'


import ButtonWithArrow from './ButtonWithArrow'
import ButtonItemTheme from "./ButtonItemTheme";
import ButtonItem from './ButtonItem';
import ButtonAddQuestion from './ButtonAddQuestion';

import { useSelector } from 'react-redux';
import { RootState, QuestionStateQuestionsT, toggleShowRepeatQuestion, toggleShowTheme, toggleShowQuestion, QuestionStateRepeatQuestionsT } from "./../redux/store";

export default function LeftSide() {
  const { UIReducer, ThemeReducer, QuestionReducer }: RootState = useSelector((state) => state) as RootState;
  const Questions: QuestionStateQuestionsT = QuestionReducer["Questions"];
  const RepeatQuestions: QuestionStateRepeatQuestionsT  = QuestionReducer["RepeatQuestions"];

  return (
    <div className="content__left-side">
      <div className="content__left-side-body">
        <div className="content__left-side-scroll-wrapper">

          <ButtonWithArrow 
            title = "Темы"
            count = {ThemeReducer.AllTheme.length}
            actionForDispatch = {toggleShowTheme}
            flagForRenderArrow = {UIReducer.ShowTheme}
          />

          {
            UIReducer.ShowTheme 
            ?
            ThemeReducer.AllTheme.map((item, index) => {
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
            count = {ThemeReducer.SelectedTheme[1] !== null ? Questions[ThemeReducer.SelectedTheme[1]].length : 0}
            actionForDispatch = {toggleShowQuestion}
            flagForRenderArrow = {UIReducer.ShowQuestion}
          />

          {
            UIReducer.ShowQuestion
            ?
            <ButtonAddQuestion />
            :
            null
          }

          {
            ThemeReducer.SelectedTheme[1] !== null && UIReducer.ShowQuestion
            ?
            Questions[ThemeReducer.SelectedTheme[1]].map((item, index: number) => {
              return <ButtonItem
                      {...item}
                      index={index}
                      isRepeat = {false}
                      theme={ThemeReducer.SelectedTheme[1]}
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
            flagForRenderArrow = {UIReducer.ShowRepeatQuestion}
            isRepeat = {true}
          />

          {
            UIReducer.ShowRepeatQuestion && RepeatQuestions.length > 0
            ?
            RepeatQuestions.map((item, index: number) => {
              return <ButtonItem
                      {...item}
                      index={index}
                      isRepeat = {true}
                      theme={ThemeReducer.SelectedTheme[1]}
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
