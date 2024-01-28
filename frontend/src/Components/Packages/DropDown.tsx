import React, { useState } from 'react';



const ExpandableSection = ({ buttonLabel, expandedContent }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div>
    <div className="pt-2 rounded-lg pb-2 ">
    
   
      <button
        className=" text-xl font-bold text-black "
        onClick={handleExpandClick}
      >
        {buttonLabel}
      </button>

      {isExpanded && (
        <div className=" ">
         
          {expandedContent}
        </div>
      )}
       
    </div>
    <hr className=" border-black p-px2" />
    </div>
  );
};

export default ExpandableSection;


