import React from 'react'
import '../componentsCss/RadioButton.css'

export default function RadioButton({ name, id, value, onChange, checked }) {
    return (
        <label htmlFor={id} className="radio_label">
            <input
                className="radio_input"
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <span className="custom_radio" />{name}
        </label>
    )
}