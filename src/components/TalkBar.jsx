import React, { useEffect, useRef, useState } from "react";
import { Smile, Image as ImageIcon } from "lucide-react";
import EmojiPicker, { Theme } from "emoji-picker-react";

const TalkBar = () => {
  //  const textareaRef = useRef(null);
  //  const initialHeight = useRef(0);
  //  const [isExpanded, setIsExpanded] = useState(false);
 
  //  const handleInput = (e) => {
  //    const textarea = textareaRef.current;
  //    if (!textarea) return;
 
  //    if (!initialHeight.current) {
  //      initialHeight.current = textarea.clientHeight; // save initial height once
  //    }
 
  //    if (e.target.value === "") {
  //      // If empty, reset to initial height
  //      textarea.style.height = `${initialHeight.current}px`;
  //      setIsExpanded(false);
  //      return;
  //    }
 
  //    // Otherwise, auto grow height but never smaller than initialHeight
  //    textarea.style.height = "auto";
  //    const newHeight = textarea.scrollHeight;
  //    textarea.style.height = `${Math.max(newHeight, initialHeight.current)}px`;
 
  //    setIsExpanded(newHeight > initialHeight.current);

     
  //   };
  // //  This is the Emoji Picker
  // const [showPicker, setShowPicker] = useState(false);
  // const [message, setMessage] = useState("");
  // const textareaRef = useRef(null);

  // const handleEmojiClick = (emojiData) => {
  //   const emoji = emojiData.emoji;
  //   setMessage((prev) => prev + emoji);
  //   textareaRef.current.focus();
  // };


  const textareaRef = useRef(null);
  const initialHeight = useRef(0);
  const pickerRef = useRef(null)

  const [isExpanded, setIsExpanded] = useState(false);
  const [showPicker, setShowPicker] = useState(false); // ✅ moved to top
  const [message, setMessage] = useState(""); // ✅ moved to top

  const handleInput = (e) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    setMessage(e.target.value); // Update message state

    if (!initialHeight.current) {
      initialHeight.current = textarea.clientHeight;
    }

    if (e.target.value === "") {
      textarea.style.height = `${initialHeight.current}px`;
      setIsExpanded(false);
      return;
    }

    textarea.style.height = "auto";
    const newHeight = textarea.scrollHeight;
    textarea.style.height = `${Math.max(newHeight, initialHeight.current)}px`;
    setIsExpanded(newHeight > initialHeight.current);
  };

  const handleEmojiClick = (emojiData) => {
    const emoji = emojiData.emoji;
    setMessage((prev) => prev + emoji);

    setTimeout(() => {
      textareaRef.current?.focus();
    }, 0);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(
        pickerRef.current &&
        !pickerRef.current.contains(e.target) &&
        !textareaRef.current.contains(e.target)
      ) {
        setShowPicker(false)
      };
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };

  }, [])
  
  
  return (
    <div className='w-full h-15 flex items-center'>
      <div className='w-9/10 h-10/11 relative'>
        <Smile
        onClick={() => setShowPicker((prev) => !prev)}
        className="relative z-10 top-4.5 left-3 text-gray-500 hover:text-orange-500"
        title="Emoji" 
        />
        {showPicker && (
          <div
          ref={pickerRef} 
          className="absolute bottom-13 left-4 rounded-lg z-10 bg-gray-800">
            <EmojiPicker 
            onEmojiClick={handleEmojiClick}
            theme={Theme.DARK}
            className="bg-gray-800"/>
          </div>
        )}
         <textarea
          type="text"
          ref={textareaRef}
          onInput={handleInput}
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`py-[.8em] pl-12 pr-14 ring-1 ring-gray-300 w-10/11 h-10/11 rounded-full text-gray-300 flex items-center justify-center overflow-hidden resize-none overflow-y-auto leading-[1.3] max-h-24 break-words absolute bottom-0 right-0 left-0
          ${isExpanded ? 'rounded-md' : 'rounded-full'}`}
          style={{ minHeight: "40px", fontFamily: "system-ui, Apple Color Emoji, Segoe UI Emoji, sans-serif" }}></textarea>
      </div>
      <div className='w-1/21 h-10/11'></div>
    </div>
  )
}

export default TalkBar