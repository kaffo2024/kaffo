import { Box, Typography } from "@mui/joy";
import React from "react";
import TextSlideAnimation from "../text-slide-animation/TextSlideAnimation";
import Image from "next/image";

function SectionTitles({ text, id }: { text: string; id?: string }) {
  return (
    <div id={id ?? undefined}>
      <Box
        sx={{
          position: "relative",
          my: 5,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <Divider> */}
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            width={100}
            height={2}
            src="/divider-right.png"
            alt="divider"
            quality={100}
            loading="lazy"
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Typography
          level="h1"
          fontWeight="900"
          sx={{
            width: "100%",
            color: "primary.solidBg",
            fontSize: { xs: "8vw", md: "4vw" },
          }}
        >
          <TextSlideAnimation text={text} />
        </Typography>
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            width={100}
            height={100}
            loading="lazy"
            quality={100}
            sizes="100vw"
            src="/divider-left.png"
            alt="divider"
          />
        </Box>
        {/* </Divider> */}
      </Box>
    </div>
  );
}

export default SectionTitles;
