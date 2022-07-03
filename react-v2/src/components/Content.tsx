import { useSelector } from 'react-redux';

import {RootState} from "./../redux/store";
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import AddQuesionArea from './AddQuesionArea'

export default function Content() {
  const { uiReducer }: RootState = useSelector((state) => state) as RootState;

  return (
    <main className="main">
      <div className={`content ${uiReducer.showLeftSide ? "--left-side-show" : "" } ${uiReducer.showAddQuestionArea ? "--short-content" : "" }`}>
        <LeftSide />
        <RightSide />
      </div>
    <AddQuesionArea />
    </main>
  )
}
