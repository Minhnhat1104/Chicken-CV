import {
  Circle,
  ExtensionOutlined,
  LocationOnOutlined,
  MailOutline,
  PersonOutline,
  Phone,
  PhoneOutlined,
} from "@mui/icons-material";
import { Stack, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Section from "./Section";
import ava from "./3X4.jpg";

const Left = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ background: "#f6f6f6", height: "100%" }}>
      <Stack
        sx={{
          background: theme.palette.primary.main,
          p: 2,
        }}
      >
        <Box
          component={"img"}
          srcSet={ava}
          src={ava}
          alt={"chicken-avater"}
          sx={{
            borderRadius: 999,
            p: 0.75,
            width: 150,
            height: 150,
            m: "auto",
            background: theme.palette.common.white,
            objectFit: "contain",
          }}
        />
      </Stack>

      <Stack>
        <Typography
          variant="h4"
          color="primary.main"
          mx="auto"
          mt={3}
          textAlign="center"
          justifyContent="center"
        >
          Nguyễn Đình <br /> Hoàng Minh
        </Typography>

        <Typography color={theme.palette.text.secondary} mx="auto" mb={3}>
          Marketing Managet
        </Typography>

        <Stack spacing={2} px={3}>
          <Section icon={Phone} title="Contact">
            <Stack spacing={1}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.5}
                color={theme.palette.text.secondary}
              >
                <PhoneOutlined color="primary" sx={{ fontSize: 13 }} />

                <Typography>(+84) 946 178 461</Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.5}
                color={theme.palette.text.secondary}
              >
                <MailOutline color="primary" sx={{ fontSize: 13 }} />

                <Typography>hoangminh0202702@gmail.com</Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.5}
                color={theme.palette.text.secondary}
              >
                <LocationOnOutlined color="primary" sx={{ fontSize: 13 }} />

                <Typography>123 Anywhere</Typography>
              </Stack>
            </Stack>
          </Section>

          <Section icon={PersonOutline} title="About me">
            <Typography color="text.secondary">
              During my studies, I engaged in projects involving designing a
              robot that distributes goods by color. Furthermore, I am also a
              supporter of social media advertising of Zeromaric and Ideation.
              Besides, as an administrator of a coffee shop, I have had an
              opportunity to develop my communication with customers and
              thoughtfully understand their purchasing behaviors
            </Typography>
          </Section>

          <Section icon={ExtensionOutlined} title="Skills">
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Circle
                  sx={{ fontSize: 5, color: theme.palette.text.secondary }}
                />

                <Typography>
                  Design and Modeling Tools: SolidWorks, MATLAB, AUTOCAD
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Circle
                  sx={{ fontSize: 5, color: theme.palette.text.secondary }}
                />

                <Typography>Programming: #, C++, PLC</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Circle
                  sx={{ fontSize: 5, color: theme.palette.text.secondary }}
                />

                <Typography>Office Information</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Circle
                  sx={{ fontSize: 5, color: theme.palette.text.secondary }}
                />

                <Typography>745/990 TOEIC</Typography>
              </Stack>
            </Stack>
          </Section>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Left;
