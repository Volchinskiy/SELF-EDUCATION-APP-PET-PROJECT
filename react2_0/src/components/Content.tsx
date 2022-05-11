import React from 'react'
import { useSelector } from 'react-redux';


import {RootState, UIStateI} from "./../redux/store";
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import AddQuesionArea from './AddQuesionArea'

export default function Content() {
  const { ShowLeftSide, ShowAddQuestionArea }: UIStateI = useSelector((state) => state) as RootState;

  return (
    <main className="main">
      <div className={`content ${ShowLeftSide ? "--left-side-show" : "" } ${ShowAddQuestionArea ? "--short-content" : "" }`}>

        <LeftSide />
        <RightSide />

      </div>

    <AddQuesionArea />

    </main>
  )
}
