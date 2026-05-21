import { getAvailableEducationList } from "@/src/actions/actions";
import PageHeader from "@/src/components/page-header/PageHeader";
import SectionTitles from "@/src/components/section-titles/SectionTitles";
import StagesCards from "@/src/components/stages-cards/StagesCards";
import TeamSlider from "@/src/components/team-slider/TeamSlider";
import { Divider, Typography } from "@mui/joy";

import React from "react";

const getStages = async () => {
  try {
    const data = await getAvailableEducationList();
    return data;
  } catch {
    return null;
  }
};

export default async function page() {
  const data = await getStages();
  return (
    <div>
      <PageHeader
        background="/pages-headers/about-us.jpg"
        title="الـمـنـصـة الـتـعـلـيـمـة"
        subtitle="ابـد رحـلـتـك الاكـاديـمـيـه"
      />
      <Divider sx={{ mt: 4 }}>
        <Typography
          level="h2"
          sx={{ textAlign: "center" }}
          textColor="neutral.solidBg"
        >
          اخـتـار مـسـارك الاكـاديـمي
        </Typography>
      </Divider>

      <StagesCards items={JSON.parse(JSON.stringify(data))} />

      <SectionTitles text="فريق العمل" />
      <TeamSlider />
    </div>
  );
}
