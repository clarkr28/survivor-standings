import { Box, Typography } from "@mui/material";
import { ContentWidthBox } from "../contentWidthBox/contentWidthBox";

export const Header: React.FC<{}> = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderLeft: "none",
        borderRight: "none",
        width: "100%",
        padding: "0.5rem 0",
        marginBottom: "1rem",
        position: "sticky",
        top: "0",
        backdropFilter: " blur(4px)",
        background: "rgba(255, 255, 255, 0.7)",
        zIndex: 100,
      }}
    >
      <ContentWidthBox>
        <Typography variant="h1" sx={{ textAlign: "left" }}>
          Survivor Fantasy
        </Typography>
      </ContentWidthBox>
    </Box>
  );
};
