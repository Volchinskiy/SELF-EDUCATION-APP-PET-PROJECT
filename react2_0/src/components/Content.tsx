import React from 'react'
import { useSelector } from 'react-redux';


import LeftSide from './LeftSide'
import RightSide from './RightSide'
import AddQuesionArea from './AddQuesionArea'

export default function Content() {
  const state: any = useSelector((state) => state);

  return (
    <main className="main">
      <div className={`content ${state.ShowLeftSide ? "--left-side-show" : "" }`}>

        <LeftSide />
        <RightSide />

      </div>

    <AddQuesionArea />

    </main>
  )
}
