import PageHeader from "@/src/components/page-header/PageHeader";
import React from "react";
import { AboutSection } from "@/src/components/about/AboutSection";
import OurValues from "@/src/components/about/OurValues";
import Ending from "@/src/components/about/Ending";
import VisionMissionGoals from "@/src/components/about/VisionMissionGoals";
import ServicesCategories from "@/src/components/about/ServicesCategories";

function page() {
  return (
    <div>
      <PageHeader
        background="/pages-headers/about-us.jpg"
        title="مــن نــحــن"
        subtitle="رؤيــتــنـا، هـدفـنا، رسـالـتنا"
      />

      <AboutSection img="/about/about3.jpg" />

      <VisionMissionGoals />

      <ServicesCategories />

      <OurValues />

      <Ending />
    </div>
  );
}

export default page;
