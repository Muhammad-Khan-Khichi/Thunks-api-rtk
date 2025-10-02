import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function ExpandablePannel({header, children}) {
    const [expanded, setExpanded] = useState(false)
    const handleClick = () => {
        setExpanded(!expanded)
    }
  return (
<div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300">
  <div
    className="flex items-center justify-between px-4 py-3 cursor-pointer select-none rounded-t-xl hover:bg-gray-50 transition-colors duration-200"
    onClick={handleClick}
  >
    <div className="text-base font-semibold text-gray-800">{header}</div>
    <div className="text-gray-500 hover:text-gray-700">
      {expanded ? (
        <FaChevronDown className="w-5 h-5" />
      ) : (
        <FaChevronLeft className="w-5 h-5" />
      )}
    </div>
  </div>


  {expanded && (
    <div className="px-4 pb-4 pt-3 text-gray-700 border-t border-gray-100 bg-gray-50 rounded-b-xl">
      {children}
    </div>
  )}
</div>


  )
}

export default ExpandablePannel
