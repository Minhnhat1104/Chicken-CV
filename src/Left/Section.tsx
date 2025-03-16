import { SvgIconComponent } from "@mui/icons-material";
import { Divider, Stack, Typography, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

interface SectionProps {
  icon: SvgIconComponent;
  title: string;
  children: ReactNode;
}

const Section = (props: SectionProps) => {
  const { icon: Icon, title, children } = props;
  const theme = useTheme();
  return (
    <Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.5}
        color={theme.palette.text.secondary}
      >
        <Icon sx={{ fontSize: 18 }} />
        <Typography variant="h6">{title}</Typography>
      </Stack>
      <Divider sx={{ borderColor: theme.palette.primary.main }} />
      <Stack py={2}>{children}</Stack>
    </Stack>
  );
};

export default Section;
