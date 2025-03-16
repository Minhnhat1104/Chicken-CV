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
import ava from "./ava.jpg";

const Left = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ background: "#f6f6f6", height: "100%" }}>
      <Stack
        sx={{
          p: 2,
          pt: 0,
          position: "relative",
          height: 300,
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
            width: 175,
            height: 175,
            background: theme.palette.common.white,
            objectFit: "cover",
            objectPosition: "top",
            zIndex: 1,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Box
          sx={{
            borderTopColor: theme.palette.primary.main,
            width: 0,
            height: 0,
            borderLeft: "188px solid transparent",
            borderRight: "188px solid transparent",
            borderTop: `188px solid ${theme.palette.primary.main}`,
            transform: "rotate(135deg) translate(67px, 106px)",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        <Stack
          sx={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            width: 200,
          }}
        >
          <Typography
            variant="h4"
            color="primary.main"
            mx="auto"
            mt={3}
            textAlign="center"
            justifyContent="center"
          >
            Nguyen Dinh <br /> Hoang Minh
          </Typography>

          <Typography color={theme.palette.text.secondary} mx="auto" mb={3}>
            Mechatronics Engineering
          </Typography>
        </Stack>
      </Stack>

      <Stack mt={8}>
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

                <Typography>26/21 Buu Dinh street, district 6</Typography>
              </Stack>
            </Stack>
          </Section>

          <Section icon={PersonOutline} title="About me">
            <Typography color="text.secondary" sx={{ textAlign: "justify" }}>
              During my studies, I engaged in projects involving designing a
              robot that distributes goods by color. Furthermore, I am also a
              supporter of social media advertising of Zeromaric and Ideation.
              Besides, as an administrator of a coffee shop, I have had an
              opportunity to develop my communication with customers and
              thoughtfully understand their purchasing behaviors.
            </Typography>
          </Section>

          <Section icon={ExtensionOutlined} title="Skills">
            <Stack spacing={1.5}>
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

                <Typography>Programming: C#, C++, PLC</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Circle
                  sx={{ fontSize: 5, color: theme.palette.text.secondary }}
                />

                <Typography>
                  Microsoft Office Suite: Word, Excel, PowerPoint
                </Typography>
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
