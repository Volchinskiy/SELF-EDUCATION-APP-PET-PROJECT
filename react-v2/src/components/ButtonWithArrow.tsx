import { useDispatch } from "react-redux";
import { AnyAction } from 'redux'

import { RightArrowIcon, DownArrowIcon } from './svg';

type props = {
  title: string;
  count: number;
  actionForDispatch: AnyAction;
  flagForRenderArrow: boolean;
  isRepeat?: boolean
}

export default function ButtonWithArrow({title, count, actionForDispatch, flagForRenderArrow, isRepeat}: props) {
  const dispatch = useDispatch();

  const onShowTheme = () => {
    dispatch(actionForDispatch);
  }

  const allPossibleClass = [
    "content__left-side-button-with-arrow",
    "content__left-side-button-with-arrow --repeatButtonWithArrow",
    ];

  const finalClass = isRepeat ? allPossibleClass[1] : allPossibleClass[0]

  return (
    <button onClick={onShowTheme} className={finalClass}>
      <div>
        {
          flagForRenderArrow 
          ?
          <RightArrowIcon />
          :
          <DownArrowIcon />
        }
      </div>
      <div className="content__left-side-button-with-arrow-title">
        {title}
        <div className="content__left-side-button-with-arrow-count">{count}</div>  
      </div>
    </button>
  )
}
