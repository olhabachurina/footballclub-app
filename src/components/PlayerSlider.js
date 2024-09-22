import React, { useState, useEffect, useRef } from "react";
import { players } from "../data/players";

function PlayerSlider() {
    const sliderRef = useRef(null);
    const animationRef = useRef(null);
    const [translateX, setTranslateX] = useState(0);
    const [maxTranslateX, setMaxTranslateX] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
  
    
    useEffect(() => {
      const slider = sliderRef.current;
      if (!slider) return;
  
      const containerWidth = slider.clientWidth;
      const sliderWidth = slider.scrollWidth;
  
      const calculatedMaxTranslateX = sliderWidth - containerWidth;
  
      console.log("Ширина контейнера:", containerWidth);
      console.log("Ширина слайдера:", sliderWidth);
      console.log("Максимальное смещение:", calculatedMaxTranslateX);
  
      setMaxTranslateX(calculatedMaxTranslateX);
      setTranslateX(0); // Начинаем с начальной позиции (0)
      setIsAnimating(true); // Запускаем анимацию автоматически при загрузке
    }, []);
  
   
    useEffect(() => {
      if (!isAnimating) return;
  
      if (translateX <= -maxTranslateX) {
        console.log("Слайдер достиг левой границы. Остановка анимации.");
        setIsAnimating(false);
        cancelAnimationFrame(animationRef.current);
        return;
      }
  
      const step = 1; // пиксель за кадр
      const animate = () => {
        setTranslateX((prevTranslateX) => {
          const newTranslateX = prevTranslateX - step;
          console.log("Текущее translateX:", newTranslateX);
  
          if (newTranslateX <= -maxTranslateX) {
            console.log("translateX достиг -maxTranslateX. Останавливаем анимацию.");
            setIsAnimating(false);
            return -maxTranslateX;
          }
          return newTranslateX;
        });
  
        animationRef.current = requestAnimationFrame(animate);
      };
  
      animationRef.current = requestAnimationFrame(animate);
  
      return () => cancelAnimationFrame(animationRef.current);
    }, [isAnimating, translateX, maxTranslateX]);
  
    return (
      <div className="slider-container">
        {/* Удаляем кнопку, так как анимация запускается автоматически */}
        <div className="slider-wrapper" ref={sliderRef}>
          <div
            className="slider"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: isAnimating ? "transform 0.1s linear" : "none",
            }}
          >
            {players.map((player, index) => (
              <div className="player" key={index}>
                <img src={player.image} alt={player.name} />
                <p>{player.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default PlayerSlider;