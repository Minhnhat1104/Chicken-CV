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

interface CustomTimelineProps {
  data: SectionItemProps[];
}

const CustomTimeline = (props: CustomTimelineProps) => {
  const { data } = props;
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
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <SectionItem {..._item} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default CustomTimeline;
