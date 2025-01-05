import React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { homeCarouselData } from "../../components/HomeCarousel/HomeCarouselData";
import { sareePage1 } from "../../../data/Saree/page1";
import { mens_kurta } from "../../../data/Men/men_kurta";
// import { mensShoesPage1 } from "../../../data/shoes";
import { lengha_page1 } from "../../../data/Women/LenghaCholi";
import { dressPage1 } from "../../../data/dress/page1";
import { gounsPage1 } from "../../../data/Gouns/gouns";
// import { kurtaPage1 } from "../../../data/Kurta/kurta";
import { lehngacholiPage2 } from "../../../data/Saree/lenghaCholiPage2";
import { men_backpacks } from "../../../data/Men/men_backpacks";
import { men_page1 } from "../../../data/pants/men_page1";

const Homepage = () => {
  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men Kurta"} />
        {/* <HomeSectionCarousel data={mensShoesPage1} sectionName={"Men Shoes"} /> */}
        <HomeSectionCarousel data={men_backpacks} sectionName={"Backpacks"}/>
        <HomeSectionCarousel data={lehngacholiPage2} sectionName={"Lengha Choli"} />
        <HomeSectionCarousel data={sareePage1} sectionName={"Saree"} />
        <HomeSectionCarousel data={dressPage1} sectionName={"Dress"} />
        <HomeSectionCarousel data={gounsPage1} sectionName={"Women Gowns"} />
        {/* <HomeSectionCarousel data={kurtaPage1} sectionName={"Women Kurtas"} /> */}
        <HomeSectionCarousel data={men_page1} sectionName={"Men Jeans"} />
      </div>
    </div>
  );
};

export default Homepage;
