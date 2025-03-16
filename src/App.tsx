"use client";
import {
  Box,
  Button,
  CssBaseline,
  Grid2,
  Stack,
  useTheme,
} from "@mui/material";
import Left from "./Left";
import Right from "./Right";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Home() {
  const theme = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        background: theme.palette.grey[300],
        py: 2,
      }}
    >
      <CssBaseline />
      <Button
        onClick={() => reactToPrintFn()}
        variant="contained"
        sx={{ width: "fit-content", mx: "auto", my: 1 }}
      >
        Download PDF
      </Button>

      <Box
        ref={contentRef}
        sx={{
          width: "210mm",
          height: "297mm",
          m: "auto",
          background: "#fff",
        }}
      >
        <Grid2 container sx={{ height: "100%" }}>
          <Grid2 size={4}>
            <Left />
          </Grid2>
          <Grid2 size={8}>
            <Right />
          </Grid2>
        </Grid2>
      </Box>
    </Stack>
  );
}
