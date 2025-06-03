"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const imagens = [
  "/certificados/2024-1.jpg",
  "/certificados/2024-2.jpg",
  
];

export default function CarrosselEncontros() {
  const [imagemAmpliada, setImagemAmpliada] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setImagemAmpliada(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={20}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="rounded-lg"
      >
        {imagens.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Imagem ${index + 1}`}
              width={800}
              height={600}
              className="rounded-lg w-full h-auto object-contain cursor-pointer"
              onClick={() => setImagemAmpliada(src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {imagemAmpliada && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setImagemAmpliada(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold z-50 hover:text-red-500"
            onClick={() => setImagemAmpliada(null)}
            aria-label="Fechar"
          >
            &times;
          </button>

          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={imagemAmpliada}
              alt="Imagem ampliada"
              width={1000}
              height={800}
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
