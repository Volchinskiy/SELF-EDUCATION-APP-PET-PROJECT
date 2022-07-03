import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { selectTopic } from '../redux/action';

interface props {
  title: string;
  index: number;
}

export default function ButtonItemTheme({title, index}: props) { 
  const dispatch = useDispatch();
  const { topicReducer }: RootState = useSelector((state) => state) as RootState;

  const onSelectTheme = () => {
    dispatch(selectTopic(index, title));
  }

  return (
    <button onClick={onSelectTheme}  className={`content__left-side-button-item ${topicReducer.selectedTopic[0] === index ? "--buttonSelected" : null}`}>
      <div>
        {
          topicReducer.selectedTopic[0] === index 
          ?
          <svg className="content__left-side-button-with-arrow-first-svg" viewBox="0 0 16 16">
            <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 10c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path>
          </svg>
          :
          <svg className="content__left-side-button-with-arrow-first-svg" viewBox="0 0 16 16">
            <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"></path>
          </svg>
        }
      </div>
      {title}
    </button>
  )
}
