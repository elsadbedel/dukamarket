import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const RecommendBrand: React.FC = () => {
  SwiperCore.use([Autoplay]);

  const brands = [
    {
      classname: "brandItem",
      img: "https://cdn.shopify.com/s/files/1/0606/6867/4281/files/brand_04_540x.png?v=1636340613"
    },
    {
      classname: "brandItem",
      img: "https://cdn.shopify.com/s/files/1/0606/6867/4281/files/brand_06_180x.png?v=1636340684"
    },
    {
      classname: "brandItem",
      img: "https://cdn.shopify.com/s/files/1/0606/6867/4281/files/brand_07_180x.png?v=1636340712"
    },
    {
      classname: "brandItem",
      img: "https://cdn.shopify.com/s/files/1/0606/6867/4281/files/brand_01_763002c1-6b6f-404d-bf32-ace288cd42eb_180x.png?v=1636340831"
    },
    {
      classname: "brandItem",
      img: "https://cdn.shopify.com/s/files/1/0606/6867/4281/files/brand_02_a47b15bc-adfd-49a5-abc0-dd359d807b52_180x.png?v=1636340858"
    },
    {
      classname: "brandItem",
      img: "https://cdn.shopify.com/s/files/1/0606/6867/4281/files/brand_06_71ca5cdd-281c-4b94-a7fd-c7737f931cb8_180x.png?v=1636340883"
    }
  ];

  return (
    <div className="container">
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        // autoplay={{ delay: 2000 }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="RecommendBrand"
      >
        {brands.map((item, index) => (
          <SwiperSlide key={index}>
            <img className={item.classname} src={item.img} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendBrand;
