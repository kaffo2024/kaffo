import AspectRatio from "@mui/joy/AspectRatio";

import Image from "next/image";
import { Card, CardActions, CardContent, Typography } from "@mui/joy";
import Link from "next/link";
import OutlineButton from "../outline-btn/OutlineButton";

export default function CategoryCard({
  item,
}: {
  item: {
    name: string;
    description: string;
    image: string;
    ref: string;
    url: string;
  };
}) {
  return (
    <Card
      sx={{
        transition: "all 0.3s ease-in-out",
        ":hover": {
          transform: "translateY(-5px)",
          boxShadow: "md",
          img: {
            transform: "scale(1.04)",
          },
        },
      }}
      color="primary"
      variant="plain"
    >
      <AspectRatio
        minHeight="300px"
        maxHeight="200px"
        color="primary"
        variant="plain"
      >
        <Image
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
            maxHeight: "600px",
            transition: "all 0.3s ease-in-out",
          }}
          src={item.image}
          width={200}
          height={200}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent>
        <Typography
          sx={{ color: "neutral.solidBg" }}
          fontSize="xl"
          fontWeight="700"
        >
          {item.name}
        </Typography>
        <Typography
          level="body-md"
          sx={{
            color: "text.secondary",
            fontWeight: "600",
          }}
        >
          {item.description?.slice(0, 250)}..
        </Typography>
      </CardContent>
      <CardActions
        buttonFlex={1}
        sx={{
          // width: "clamp(min(100%, 160px), 50%, min(100%, 200px))",
          margin: "0 auto",
        }}
      >
        <Link href={item.url}>
          <OutlineButton backgroundColor="var(--joy-palette-primary-solidBg)">
            الـمـزيـد
          </OutlineButton>
        </Link>
      </CardActions>
    </Card>
  );
}
