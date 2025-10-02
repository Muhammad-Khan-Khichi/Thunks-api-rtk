import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function ExpandablePannel({header, children}) {
    const [expanded, setExpanded] = useState(false)
    const handleClick = () => {
        setExpanded(!expanded)
    }
  return (
    <div>
        <div>
            {header}
        </div>
        <div onClick={handleClick} className='cursor-pointer'>
                {expanded ? <FaChevronDown /> : <FaChevronLeft />}
        </div>
        {
            expanded && <div>{children}</div>
        }

    </div>
  )
}

export default ExpandablePannel
