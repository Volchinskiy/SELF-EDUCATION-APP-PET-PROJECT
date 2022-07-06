import React from 'react'
import { useDispatch, useSelector} from "react-redux";

import { RootState } from "./../redux/store";
import { addThreeDots } from "./../functions/usefulFunctions";
import { selectQuestion, questionDeleteRequest } from '../redux/action';
import { SelectedQuestionT } from './../../../type';
import { CheckIcon, UnCheckIcon, PencilIcon, BinIcon, SettingsIcon} from './svg';

type propsT = {
  title: string;
  index: number;
  topic: string;
  isRepeat: boolean;
  id: number;
}

export default function ButtonItem({title, index, topic, isRepeat, id}: propsT) {
  const dispatch = useDispatch();
  const { questionReducer }: RootState = useSelector((state) => state) as RootState;
  const [ ShowSettings, setShowSettings ] = React.useState(false);
  const selectedQuestion: SelectedQuestionT = questionReducer["selectedQuestion"];

  const flagForSelectRender = selectedQuestion !== null && selectedQuestion["id"] === id ? true : false;
  const allPossibleClass = [
    "content__left-side-button-item",
    "content__left-side-button-item --buttonSelected",
    "content__left-side-button-item --repeatQuestion",
    "content__left-side-button-item --repeatQuestionSelected",
    "content__left-side-button-item-open",
    "content__left-side-button-item-open --buttonSelected",
    "content__left-side-button-item-open --repeatQuestion",
    "content__left-side-button-item-open --repeatQuestionSelected",
    ];

  const finalClass = ShowSettings ?
                                  flagForSelectRender ?
                                                      isRepeat ? allPossibleClass[7] : allPossibleClass[5]
                                                      :
                                                      isRepeat ? allPossibleClass[6] : allPossibleClass[4]
                                  :
                                  flagForSelectRender ?
                                                      isRepeat ? allPossibleClass[3] : allPossibleClass[1]
                                                      :
                                                      isRepeat ? allPossibleClass[2] : allPossibleClass[0]

  const onShowSettings = () => {
    setShowSettings(!ShowSettings);
  }

  const onSelectQuestion = () => {
    dispatch(selectQuestion(index, isRepeat, topic))
  }

  const onDelete = () => {
    dispatch(questionDeleteRequest(1, id));
  }

  if(ShowSettings){
    return (
      <button onClick={onSelectQuestion} className={finalClass}>
        <div className="content__left-side-button-item-open-top">
          <div>
            {
              flagForSelectRender
              ?
              <CheckIcon />
              :
              <UnCheckIcon />
            }
          </div>
          {addThreeDots(title)}
          <div onClick={onShowSettings}>
            <SettingsIcon />
          </div>
        </div>
        <div className="content__left-side-button-item-open-bottom">
          <div className="content__left-side-button-item-open-bottom-svg-wrapper">
            <PencilIcon />
          </div>
          <div onClick={onDelete} className="content__left-side-button-item-open-bottom-svg-wrapper">
            <BinIcon />
          </div>
        </div>
      </button>
    )
  }

  return (
    <button onClick={onSelectQuestion} className={finalClass}>
      <div>
        {
          flagForSelectRender
          ?
          <CheckIcon />
          :
          <UnCheckIcon />
        }
      </div>
      {addThreeDots(title)}
      <div onClick={onShowSettings}>
        <SettingsIcon />
      </div>
    </button>
  )
}

