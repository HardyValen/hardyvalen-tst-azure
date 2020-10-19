import React, { useEffect, useState } from "react";
import Lottie from 'react-lottie';
import Lottie_LOADING from "../assets/Lottiefiles/loading.json";

const ErrorLoading = () => {
  const [timer, setTimer] = useState(0);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Lottie_LOADING,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  useEffect(() => {
    const timerControl = setTimeout(() => {
      setTimer(timer + 1)
      console.log(timer)
    }, 1000)

    return () => { clearTimeout(timerControl) }
  }, [timer])

  const dotControl = () => {
    let temp = [];
    for (var i = 0; i < (timer % 3) + 1; i++) {
      temp.push('.');
    }
    return temp.join('');
  }

  return (
    <div className="errorBodyContent">
      <div className="img-container">
        <Lottie options={defaultOptions}/>
      </div>
      <p className="error-text">Loading posts {dotControl()}</p>
    </div>
  )
}

export default ErrorLoading;