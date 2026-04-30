import React, { useState } from "react";
import { useNavigate } from "react-router";

const YesOrYes = () => {
  const navigate = useNavigate()
  const [width, setWith] = useState(160);
  const [height, setHeight] = useState(60);
  const [step, setStep]=useState(0)
  const [imageC, setImageC]=useState(false)
  const clickedNo = () => {
    setWith((prev) => prev + 100);
    setHeight((prev) => prev + 50);
    setStep(prev=> Math.min(prev+1, messages.length - 1))
    setImageC(prev=> true)
  };

  const messages = [
    "Hayır",
    "Emin misin?",
    "Bir daha düşün...",
    "Kalbimi kırıyorsun ",
    "Gerçekten mi?",
    "Son kararın mı?",
    "Bak üzülüyorum ",
    "Lütfen Evet de ",
    "Artık kaçışın yok ",
  ];

  const fontSize = Math.min(width / 8, 80);
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full h-screen flex items-center p-5  flex-col">
        <h2 className="text-3xl font-bold text-black drop-shadow-lg shadow-black">
          Beni Seviyormusun?
        </h2>

        <div className="my-5">
          <img className="md:size-80 size-50" src={imageC ? '/angrykedy.png':'/waiting.png'} alt="" />
        </div>

        <div
          className={`w-full justify-center items-center flex gap-6 ${width >= 400 ? "flex-col" : "flex-row"}`}
        >
          <button
          onClick={()=>{
            navigate('/end')
          }}
            style={{
              width: `${width >= 700 ? 700 : width}px`,
              height: `${height}px`,
              fontSize: `${fontSize}px`,
            }}
            className="border rounded-lg bg-green-500 font-bold text-white"
          >
            Evet
          </button>

          <button
            onClick={clickedNo}
            className={`border min-w-40 min-h-15 p-2 text-sm rounded-lg  bg-red-500 font-bold text-xl text-white`}
          >
            {messages[step]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default YesOrYes;
