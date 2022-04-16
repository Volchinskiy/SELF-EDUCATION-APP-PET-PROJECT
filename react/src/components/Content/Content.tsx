import React from 'react'

import AllQuestions from './AllQuestions/AllQuestions'
import SpecificQuestion from './SpecificQuestion/SpecificQuestion'

export default function Content() {
  return (
    <main className="content">
      <AllQuestions />
      <SpecificQuestion />
    </main>
  )
}
