import React from "react"

export default function ActionButton(props) {
  return (
    <button
      {...props}
      className={`button action-button is-rounded is-background-gradient-dark has-text-white is-button-styled {props.className}`}
    >
      {props.label}
    </button>
  )
}
