import React from 'react'

function NomadLogoColor({ title, ...props }) {
  return (
    <div className="g-svg">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAwCAYAAACbtwEpAAAANklEQVR4Ae3BAQ0AAADCIPunfg43YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCtAHywAAGoU7/pAAAAAElFTkSuQmCC"
        className="svg-sizer"
        alt=""
        role="presentation"
      />
      <svg
        width={166}
        height={48}
        viewBox="0 0 166 48"
        fill="none"
        role="img"
        {...props}
      >
        {title ? <title>{title}</title> : null}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M159.444 21.965c-1.204-.264-2.745-.49-4.062-.49-1.655 0-2.294.791-2.294 2.447v6.475c0 1.505.564 2.334 2.256 2.334 1.504 0 3.122-.754 4.1-1.657v-9.11zm-10.945 2.07c0-4.065 1.806-6.474 6.055-6.474 1.618 0 3.46.226 4.89.527v-7.641l4.588-.64v26.462h-3.648l-.451-1.544c-1.617 1.167-3.498 1.92-5.792 1.92-3.686 0-5.642-2.183-5.642-6.361v-6.248zm-7.407 5.307h-3.385c-1.505 0-1.918.415-1.918 1.807 0 1.28.413 1.844 1.843 1.844 1.354 0 2.595-.45 3.46-.94v-2.71zm4.588 6.927h-3.76l-.339-1.243c-1.655 1.092-3.611 1.62-5.454 1.62-3.348 0-4.776-2.297-4.776-5.459 0-3.726 1.617-5.157 5.341-5.157h4.4v-1.92c0-2.032-.565-2.747-3.498-2.747-1.655 0-3.46.225-5.077.564l-.564-3.5c1.73-.527 4.249-.866 6.28-.866 5.755 0 7.447 2.033 7.447 6.625V36.27zm-32.756 0V23.47c0-.979-.414-1.468-1.466-1.468-1.129 0-3.122.677-4.778 1.543v12.723h-4.588V17.938h3.498l.451 1.543c2.295-1.13 5.19-1.92 7.334-1.92 1.768 0 2.858.715 3.46 1.957 2.219-1.129 5.153-1.957 7.373-1.957 3.046 0 4.136 2.145 4.136 5.42v13.288h-4.588V23.47c0-.979-.414-1.468-1.467-1.468-1.129 0-3.347.714-4.776 1.543v12.723h-4.589zM90.999 21.476c-2.444 0-3.384 1.09-3.384 3.161v4.931c0 2.07.94 3.162 3.384 3.162 2.445 0 3.386-1.092 3.386-3.162v-4.93c0-2.071-.941-3.162-3.386-3.162zm0 15.17c-6.28 0-7.973-3.464-7.973-7.228v-4.63c0-3.765 1.692-7.227 7.973-7.227s7.974 3.462 7.974 7.227v4.63c0 3.764-1.693 7.227-7.974 7.227zM63.885 17.26v19.009h-4.627v-25.07h6.32l9.515 19.047V11.199h4.626v25.07H73.4L63.885 17.26z"
          fill={props.color || '#000'}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.239 18.348v7.918l-5.494 3.184-3.842-2.385v20.67l.108.002L42.72 35.802V11.963l-.387-.002-11.093 6.387z"
          fill="#1F9967"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.73 0L1.086 11.968l13.928 8.206 2.818-1.72 6.846 3.83v-7.958l6.56-3.955v7.977l11.48-6.385v-.029L21.73 0z"
          fill="#00BC7F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.128 25.474v7.951L12.883 37.4V21.493l2.368-1.463-14.042-8.065-.122.004v23.833l20.816 11.932v-20.67l-2.775-1.59z"
          fill="#00BC7F"
        />
      </svg>
    </div>
  )
}

export default NomadLogoColor