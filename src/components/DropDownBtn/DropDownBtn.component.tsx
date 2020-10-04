import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import './DropDownBtn.css'

interface Props {
    name: String,
    width?: any
}   

const DropDownBtn: React.FC<Props> = ({ name, width }) => {

    const [hovered, setHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className='container'
            style={{ width: width && width }}
        >
            <span className='spanText'>{name}</span>
            {hovered ? <IoIosArrowUp color='white' /> : <IoIosArrowDown color='white' />}
        </div>
    )
}

export default DropDownBtn
