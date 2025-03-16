import {
  timelineItemClasses,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import React from "react";
import SectionItem, { SectionItemProps } from "./SectionItem";
import { useTheme } from "@mui/material";

interface CustomTimelineProps {
  data: SectionItemProps[];
}

const CustomTimeline = (props: CustomTimelineProps) => {
  const { data } = props;
  const theme = useTheme();
  return (
    <Timeline
      color="primary"
      sx={{
        // ml: -1.75,
        p: 0,
        my: 0,
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {data?.map((_item, i) => (
        <TimelineItem key={i}>
          <TimelineSeparator>
            <TimelineConnector
              color="primary"
              sx={{
                flexGrow: 0,
                height: 6,
                background:
                  i === 0 ? "transparent" : theme.palette.primary.main,
                width: "1px",
              }}
            />
            <TimelineDot color="primary" sx={{ m: 0, p: "3px" }} />
            <TimelineConnector
              color="primary"
              sx={{ background: theme.palette.primary.main, width: "1px" }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ pt: 0, mb: 1 }}>
            <SectionItem {..._item} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default CustomTimeline;
