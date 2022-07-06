import React from 'react'

type propsT = {
  className?: string
}

export function PlusIcon({className}: propsT) {
  return (
    <svg className={className ? className : ''} viewBox="0 0 24 24">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
    </svg>
  )
}
