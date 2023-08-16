import React from 'react'
import PropTypes from "prop-types"
import { options } from "./cosntants"

export const Button = ({ children, color = 'primary', size = 'sm' }) => {
    return (
        <div>
            {children}
        </div>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes)
}

export default Button