import React from "react"
import MainHeader from "../components/MainHeader"

export default function Screen({ title, children, faIcon, helpText }) {
  return (
    <div>
      <div className="has-text-right">
        <span
          key={Math.random()}
          className={
            "icon has-text-success has-tooltip-left has-tooltip-multiline" +
            (helpText ? "" : " is-invisible")
          }
          data-tooltip={helpText}
        >
          <i className="fa fa-info-circle" />
        </span>
      </div>
      <MainHeader faIcon={faIcon} text={title} />
      {children}
    </div>
  )
}
