"use client";

import React from "react";
import { ToggleButton, useTheme } from "@once-ui-system/core";

export const ThemeToggle: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <ToggleButton
      prefixIcon="light"
      onClick={() => {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
        setTheme("light");
      }}
      aria-label="Light mode is enabled"
    />
  );
};
