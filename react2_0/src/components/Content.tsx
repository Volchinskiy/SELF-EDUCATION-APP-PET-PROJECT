import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import AddQuesionArea from './AddQuesionArea'

export default function Content() {
  return (
    <main className="main">
      <div className="content --left-side-show">

        <LeftSide />
        <RightSide />

      </div>

    <AddQuesionArea />

    </main>
  )
}
