import React, { useRef, useState } from "react";

const TalkBar = () => {
   // const textareaRef = useRef(null);

   // const handleInput = () => {
   //   const textarea = textareaRef.current;
   //   textarea.style.height = "auto"; // Reset height
   //   textarea.style.height = `${textarea.scrollHeight}px`; // Set to scroll height

   // const textareaRef = useRef(null);
   // const [isExpanded, setIsExpanded] = useState(false);
 
   // const handleInput = () => {
   //   const textarea = textareaRef.current;
   //   if (!textarea) return;
 
   //   textarea.style.height = 20;
   //   const newHeight = textarea.scrollHeight;
   //   textarea.style.height = `${newHeight}px`;
 
   //   // Check if we've grown beyond initial height
   //   setIsExpanded(newHeight > 40); // Assume 40px is 1-line height

   const textareaRef = useRef(null);
   const initialHeight = useRef(0);
   const [isExpanded, setIsExpanded] = useState(false);
 
   const handleInput = (e) => {
     const textarea = textareaRef.current;
     if (!textarea) return;
 
     if (!initialHeight.current) {
       initialHeight.current = textarea.clientHeight; // save initial height once
     }
 
     if (e.target.value === "") {
       // If empty, reset to initial height
       textarea.style.height = `${initialHeight.current}px`;
       setIsExpanded(false);
       return;
     }
 
     // Otherwise, auto grow height but never smaller than initialHeight
     textarea.style.height = "auto";
     const newHeight = textarea.scrollHeight;
     textarea.style.height = `${Math.max(newHeight, initialHeight.current)}px`;
 
     setIsExpanded(newHeight > initialHeight.current);


   };

  return (
    <div className='w-full h-15 flex items-center'>
      <div className='w-9/10 h-10/11 relative'>
         <textarea
          type="text"
          ref={textareaRef}
          onInput={handleInput}
          rows={1}    
          className={`py-[.8em] pl-12 pr-14 ring-1 ring-gray-300 w-10/11 h-10/11 rounded-full text-gray-300 flex items-center justify-center overflow-hidden resize-none overflow-y-auto leading-[1.3] max-h-24 break-words absolute bottom-0 right-0 left-0
          ${isExpanded ? 'rounded-md' : 'rounded-full'}`}
          style={{ minHeight: "40px" }}></textarea>
      </div>
      <div className='w-1/21 h-10/11'></div>
    </div>
  )
}

export default TalkBar