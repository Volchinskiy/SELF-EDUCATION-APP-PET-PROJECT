import React from 'react'

interface props {
  title: string;
}

export default function ButtonWithArrow({title}: props) {
  // счетчик сделать от редакса

  const [arrowDown, setArrow] = React.useState<boolean>(false);

  const onChangeArrow = () => {
    setArrow(!arrowDown);
  };

  if(arrowDown){
    return(
    <button onClick={onChangeArrow} className="content__left-side-button-with-arrow">
      <div>
        <svg className="content__left-side-button-with-arrow-first-svg" viewBox="0 0 320 512">
          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/>
        </svg>
      </div>
      <div className="content__left-side-button-with-arrow-title">
        {title} 
        <div className="content__left-side-button-with-arrow-count">2</div>  
      </div>
    </button>
    )
  }

  return (
    <button onClick={onChangeArrow} className="content__left-side-button-with-arrow">
      <div>
        <svg className="content__left-side-button-with-arrow-first-svg" viewBox="0 0 320 512">
          <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/>
        </svg>
      </div>
      <div className="content__left-side-button-with-arrow-title">
        {title} 
        <div className="content__left-side-button-with-arrow-count">2</div>  
      </div>
    </button>
  )
}
