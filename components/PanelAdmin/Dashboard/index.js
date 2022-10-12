import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { HomeRounded, DvrRounded } from "@mui/icons-material";
import { NavItem } from "./nav-item";

const items = [
  {
    href: "/panelAdmin/news",
    icon: <HomeRounded fontSize="small" />,
    title: "خبر ها",
  },
  {
    href: "/panelAdmin/alert",
    icon: <DvrRounded fontSize="small" />,
    title: "خبر فوری",
  },
];

export const DashboardSidebar = (props) => {
  const { open, handleOpenMenu } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        handleOpenMenu?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box px={2}>
            <Box
              className="show-admin"
              display="flex"
              alignItems="center"
              px={3}
              py={2}
            >
              <Box>
                <Avatar
                  title="رضا صائبی"
                  alt="رضا صائبی"
                  src={"/img/news/small-1.png"}
                  className="avatar-dashboard"
                />
              </Box>
              <Box pr={2}>
                <Typography color="inherit" variant="subtitle1">
                  رضا صائبی
                </Typography>
                <Typography color="neutral.400" variant="caption">
                  دهیار و مدیر سایت
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            my: 3,
            borderColor: "rgb(143 143 143 / 12%)",
          }}
        />
        <Box>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="right"
        open={true}
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: "25%",
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="right"
      onClose={() => handleOpenMenu()}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
