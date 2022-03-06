import { Button } from "@mantine/core";
import React from "react";

const AppButton = ({ color, hover, children, ...props }: any) => {
  return (
    <Button
      className={` ${color} hover:${hover}`}
      {...props}
      sx={{
        fontFamily: "Tajawal",
      }}
    >
      {children}
    </Button>
  );
};

export default AppButton;
