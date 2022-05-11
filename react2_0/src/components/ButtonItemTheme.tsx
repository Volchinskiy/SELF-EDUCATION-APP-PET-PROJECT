import React from 'react'

interface props {
  title: string;
}

export default function ButtonItemTheme({title}: props) { 
  return (
    <button className="content__left-side-button-item --buttonSelected">
    <div>
      <svg className="content__left-side-button-with-arrow-first-svg" viewBox="0 0 16 16">
        <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 10c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path>
      </svg>
    </div>
    {title}
  </button>
  )
}
