import { Box } from "@mui/material";
import type React from "react";

export const ContentWidthBox: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return <Box sx={{ width: "800px", margin: "0 auto" }}>{props.children}</Box>;
};
