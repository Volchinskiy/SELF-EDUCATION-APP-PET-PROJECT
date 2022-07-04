import { useSelector } from 'react-redux';

import ButtonWithArrow from './ButtonWithArrow'
import ButtonItemTopic from "./ButtonItemTopic";
import ButtonItem from './ButtonItem';
import ButtonAddQuestion from './ButtonAddQuestion';

import { RootState } from "./../redux/store";
import {toggleShowRepeatQuestion, toggleShowTheme, toggleShowQuestion} from "./../redux/action";
import { allRepeatQuestion, allSortedQuestion } from './../../../type';

export default function LeftSide() {
  const { uiReducer, topicReducer, questionReducer }: RootState = useSelector((state) => state) as RootState;
  const allSortedQuestion: allSortedQuestion = questionReducer["allSortedQuestion"];
  const allRepeatQuestion: allRepeatQuestion = questionReducer["allRepeatQuestion"];

  return (
    <div className="content__left-side">
      <div className="content__left-side-body">
        <div className="content__left-side-scroll-wrapper">

          <ButtonWithArrow 
            title = "Темы"
            count = {topicReducer.allTopic.length}
            actionForDispatch = {toggleShowTheme}
            flagForRenderArrow = {uiReducer.showTheme}
          />

          {
            uiReducer.showTheme ?
            topicReducer.allTopic.map((item: string, index: number) => {
              return <ButtonItemTopic 
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
            count = {topicReducer.selectedTopic[1] ? 
                                                    allSortedQuestion[topicReducer.selectedTopic[1]] ? allSortedQuestion[topicReducer.selectedTopic[1]].length : 0 
                                                    : 
                                                    0
                    }
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
            (topicReducer.selectedTopic[1] && allSortedQuestion[topicReducer.selectedTopic[1]]) && uiReducer.showQuestion ?
            allSortedQuestion[topicReducer.selectedTopic[1]].map((item, index: number) => {
              return <ButtonItem
                        {...item}
                        index={index}
                        isRepeat = {false}
                        topic={topicReducer.selectedTopic[1]}
                        key={`${item.title}_${index}`} 
                      />
            })
            :
            null
          }

          <ButtonWithArrow 
            title = "Повторить"
            count = {allRepeatQuestion.length}
            actionForDispatch = {toggleShowRepeatQuestion}
            flagForRenderArrow = {uiReducer.showRepeatQuestion}
            isRepeat = {true}
          />

          {
            uiReducer.showRepeatQuestion && allRepeatQuestion.length > 0
            ?
            allRepeatQuestion.map((item , index: number) => {
              return <ButtonItem
                        {...item}
                        index={index}
                        isRepeat = {true}
                        topic={topicReducer.selectedTopic[1]}
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
