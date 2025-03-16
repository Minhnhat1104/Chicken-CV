"use client";

import {
  BusinessCenter,
  Circle,
  EmojiEventsOutlined,
  PersonOutline,
  School,
} from "@mui/icons-material";

import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import CustomTimeline from "./CustomTimeline";
import {
  activityData,
  awardData,
  educationData,
  experienceData,
} from "./rightData";
import Section from "../Left/Section";
import SectionItem from "./CustomTimeline/SectionItem";

const Right = () => {
  const theme = useTheme();
  return (
    <Stack p={3}>
      {/* Edutcation */}
      <Section icon={School} title="Education">
        <SectionItem {...educationData[0]} />
      </Section>
      {/* Experience */}
      <Section icon={BusinessCenter} title="Experience">
        <CustomTimeline data={experienceData} />
      </Section>

      {/* Awards */}
      <Section icon={EmojiEventsOutlined} title="Honors and awards">
        <Stack spacing={0.5}>
          {awardData?.map((_item, i) => (
            <Stack key={i} direction="row" alignItems="center" spacing={1}>
              <Circle
                sx={{ fontSize: 5, color: theme.palette.text.secondary }}
              />

              <Typography>{_item}</Typography>
            </Stack>
          ))}
        </Stack>
      </Section>

      {/* Extracurricular activities */}
      <Section icon={PersonOutline} title="Extracurricular activities">
        <Stack spacing={0.5}>
          {activityData?.map((_item, i) => (
            <Stack key={i} direction="row" alignItems="center" spacing={1}>
              <Circle
                sx={{ fontSize: 5, color: theme.palette.text.secondary }}
              />

              <Typography>{_item}</Typography>
            </Stack>
          ))}
        </Stack>
      </Section>
    </Stack>
  );
};

export default Right;
