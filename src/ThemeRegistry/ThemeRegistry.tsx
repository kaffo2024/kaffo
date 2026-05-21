"use client";
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import theme from "./theme";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { ReactLenis } from "lenis/react";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider
      options={{ key: "joy", stylisPlugins: [prefixer, rtlPlugin] }}
    >
      <CssVarsProvider
        theme={theme}
        defaultMode="light"
        disableTransitionOnChange
      >
        <CssBaseline />
        <ReactLenis
          root
          options={{
            duration: 0.8,

            // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          }}
        >
          {children}
        </ReactLenis>
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
