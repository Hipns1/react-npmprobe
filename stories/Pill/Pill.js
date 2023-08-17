import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineCheck, AiOutlineWarning } from "react-icons/ai"
/* import { MdOutlineCancel } from 'react-dom/md' */
import s from './Pill.module.scss'

export const Pill = ({ status }) => {
    return (
        <span className={s[status]}>
            {status === 'correct' && <AiOutlineCheck />}
            {status === 'warning' && <AiOutlineWarning />}
            {status === 'error' && <AiOutlineWarning />}
        </span>
    )
}

Pill.propTypes = {
    status: PropTypes.string,
}

export default Pill