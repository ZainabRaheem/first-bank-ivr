import React from 'react'
import SearchInput from './SearchInput'
import ActionButton from './ActionButton'

export default function index(props) {
  return (
    <div className="container-fluid search-date-download">
        <SearchInput />
        <ActionButton label={props.submitbutton.label} style={props.submitbutton.style} />
        <ActionButton label={props.datebutton.label} style={props.datebutton.style} iconImagePath={props.datebutton.iconImagePath} id={props.datebutton.id} modalId={props.datebutton.modalId} />
        <ActionButton label={props.downloadbutton.label} style={props.downloadbutton.style} iconImagePath={props.downloadbutton.iconImagePath} />
    </div>
  )
}
