import React from 'react'
import PropTypes from "prop-types"
import { options } from "./cosntants"
import classNames from 'classnames'
import s from "./Button.module.scss"

export const Button = ({ text = 'Button', color = 'primary', size = 'sm' }) => {
    return (
        <button className={classNames(s.button, {
            [s[`color-${color}`]]: color,
            [s[`size-${size}`]]: size
        })}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes)
}

export default Button