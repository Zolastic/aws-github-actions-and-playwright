"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

const PlayWrightDemo = () => {
  const [showText, setShowText] = useState(false);

  const handleButtonOnClick = () => {
    setShowText(true);
  };

  return (
    <>
      <Button onClick={handleButtonOnClick} data-testid="click-me-button">
        Click me
      </Button>
      {showText && <p className="text-slate-900">Button Clicked!</p>}
    </>
  );
};

export default PlayWrightDemo;
