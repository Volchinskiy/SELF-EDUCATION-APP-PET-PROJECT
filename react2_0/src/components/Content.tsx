import React from 'react'
import { useSelector } from 'react-redux';


import {RootState} from "./../redux/store";
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import AddQuesionArea from './AddQuesionArea'

export default function Content() {
  const { UIReducer }: RootState = useSelector((state) => state) as RootState;

  return (
    <main className="main">
      <div className={`content ${UIReducer.ShowLeftSide ? "--left-side-show" : "" } ${UIReducer.ShowAddQuestionArea ? "--short-content" : "" }`}>

        <LeftSide />
        <RightSide />

      </div>

    <AddQuesionArea />

    </main>
  )
}
