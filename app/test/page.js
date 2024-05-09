"use client"
import { useState, useRef, useEffect } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const vRef = useRef(null)
  const iRef = useRef(null)

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if(nextIsPlaying){
      vRef.current.play()
    }else{
      vRef.current.pause()
    }
  }

  useEffect(()=>{
    iRef.current.focus()
  },[])

  return (
    <>
      <input ref={iRef} />
      <button onClick={handleClick}>
        {isPlaying ? '暂停' : '播放'}
      </button>
      <video width="250" ref={vRef}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}

function Input(){
  return (
    <input ref={iRef} />
  )
}



