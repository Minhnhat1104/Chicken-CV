"use client";

import {
  BusinessCenter,
  Circle,
  PersonOutline,
  School,
} from "@mui/icons-material";

import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import CustomTimeline from "./CustomTimeline";
import { activityData, educationData, experienceData } from "./rightData";
import Section from "../Left/Section";

const Right = () => {
  const theme = useTheme();
  return (
    <Stack p={3}>
      <Section icon={School} title="Education">
        <CustomTimeline data={educationData} />
      </Section>
      <Section icon={BusinessCenter} title="Experience">
        <CustomTimeline data={experienceData} />
      </Section>

      <Section icon={PersonOutline} title="Extracurricular activities">
        {activityData?.map((_item, i) => (
          <Stack key={i} direction="row" alignItems="center" spacing={1}>
            <Circle sx={{ fontSize: 5, color: theme.palette.text.secondary }} />

            <Typography>{_item}</Typography>
          </Stack>
        ))}
      </Section>
    </Stack>
  );
};

export default Right;
