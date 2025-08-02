import React, { useEffect, useState } from 'react';
import styles from './Portfolio.module.css';
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  const [imgSrc, setImgSrc] = useState("");
  const [isLayerVisible, setIsLayerVisible] = useState(false);

  function display(event) {
    const imgElement = event.currentTarget.querySelector("img");
    if (imgElement) {
      setImgSrc(imgElement.src);
      setIsLayerVisible(true);
    }
  }

  function hideLayer() {
    setIsLayerVisible(false);
  }

  const images = [p1, p2, p3, p1, p2, p3];

  return (
    <>
      <div className={`min-h-screen flex flex-col justify-center items-center py-10 text-center ${styles.marginHeading}`}>
        <h2 className={`uppercase text-4xl font-extrabold mb-4 ${styles.tColor}`}>Portfolio Section</h2>
        <div className="flex justify-center items-center mb-4 gap-x-3">
          <div className= {`h-1 w-20 bg-current ${styles.tColor}`}></div>
          <i className={`fa-solid fa-star ${styles.tColor}`}></i>
          <div className= {`h-1 w-20 bg-current ${styles.tColor}`}></div>
        </div>

        <div className="w-9/12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div key={index}>
                <div className={`overflow-hidden rounded-lg relative ${styles.position}`} onClick={display}>
                  <img src={img} alt="portfolio" className="w-full h-auto object-cover rounded-lg" />
                  <div className={`${styles.portfolioOverlay} w-full h-full absolute flex items-center justify-center start-0 top-0`}>
                    <i className={`fa-solid fa-plus text-white text-7xl`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isLayerVisible && (
        <div
          className="fixed top-0 start-0 w-full h-full flex justify-center items-center z-30 bg-black" onClick={hideLayer}>
          <img src={imgSrc} alt="enlarged" className="max-w-[80%] max-h-[80%] rounded-lg shadow-md" />
        </div>
      )}
    </>
  );
}
