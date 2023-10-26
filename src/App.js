import React, { useEffect, useState } from "react";
import "./App.css";
import img1 from "./assets/iPhone 13 Pro (2).png";
import img2 from "./assets/iPhone 13 Pro.png";
import img3 from "./assets/iPhone 13 Pro.png";
import img4 from "./assets/MacBook Pro 16.png";
import img5 from "./assets/Frame 417.png";
import img6 from './assets/Frame 419.png'
import logo from "./assets/logo.png"
import paraSpan from "./assets/span.png"
const phones = [
  img1, // Replace with the actual image file names
  img2,
  img3,
];

const App1 = () =>
{
  const [currentPhones, setCurrentPhones] = useState(phones);
  const [FooterImg, setFooterImg] = useState({ key: "img5", img: img5 })
  const [showSingleImage, setShowSingleImage] = useState(false);

  useEffect(() =>
  {
    const interval = setInterval(() =>
    {
      // Rotate the positions of the phones after 3 seconds
      const rotatedPhones = [
        currentPhones[1], // Right phone becomes the middle phone
        currentPhones[2], // Middle phone becomes the left phone
        currentPhones[0], // Left phone becomes the right phone
      ];
      setCurrentPhones(rotatedPhones);
      if (FooterImg.key == "img5")
      {
        setFooterImg({ key: "img6", img: img6 })
      }
      else if (FooterImg.key == "img6")
      {
        setFooterImg({ key: "img5", img: img5 })

      }
      // setFooterImg(img4)
    }, 3000);

    return () => clearInterval(interval);
  }, [currentPhones]);
  console.log(FooterImg.key)
  useEffect(() =>
  {
    const interval = setInterval(() =>
    {
      if (showSingleImage)
      {
        // After 10 seconds, switch back to displaying phones
        setShowSingleImage(false);
      } else
      {
        // After 10 seconds, switch to displaying the single image
        setShowSingleImage(true);
      }
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [showSingleImage]);

  return (
    <div className="background-image">
      <div className="top-left-box">
        <div className="box1"></div>
        <div className="box2"></div>
      </div>

      <div style={{ position: "absolute", top: "20%", left: "10%" }}>
        <img style={{ marginBottom: "50px" }} src={logo} />
        <h1>360 <img src={paraSpan} style={{ backgroundColor: "#FF6262" }} className="h1Img" /> RENTAL</h1>
        <h1 style={{ color: "#FF6262" }}>SOLUTION</h1>
        <hr />
        <div style={{ display: "flex", justifyContent: 'space-between', gap: "1rem" }}>
          <h3>SWIPE</h3>
          <h3>TAP</h3>
          <h3>RENT</h3>
        </div>
      </div>
      <div className="right-box" >
        <div className="phone-container">
          {showSingleImage ? (
            <img src={img4} alt="Single Image" width="900px" style={{ top: "30%" }} />
          ) : (
            currentPhones.map((phone, index) => (
              <div
                key={index}
                className={`phone ${ index === 1 ? "middle-phone" : "" }`}
              >
                <img src={phone} alt="" />
              </div>
            ))
          )}

        </div>
        {!showSingleImage && <div className="right_footer" style={{ overflow: "hidden" }}>
          <img src={FooterImg.img} style={{ width: '800px', overflow: "hidden" }} className="img5" />
        </div>
        }
      </div>

    </div>
  );
};

export default App1;