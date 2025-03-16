import { Circle } from "@mui/icons-material";
import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";

export interface SectionItemProps {
  title: string;
  time: string;
  description: string | string[];
}

const SectionItem = (props: SectionItemProps) => {
  const { title, time, description } = props;
  const theme = useTheme();
  return (
    <Stack>
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width={1}
        >
          <Typography variant="h6" fontSize={16}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ whiteSpace: "nowrap" }}
          >
            {time}
          </Typography>
        </Stack>
      </Stack>

      {typeof description === "string" ? (
        <Typography>{description}</Typography>
      ) : (
        <Stack spacing={0.5} mt={1}>
          {description?.map((_item, i) => (
            <Stack key={i} direction="row" spacing={1}>
              <Circle
                sx={{
                  fontSize: 5,
                  color: theme.palette.text.secondary,
                  position: "relative",
                  top: 7,
                }}
              />

              <Typography>{_item}</Typography>
            </Stack>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default SectionItem;
