import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Button,
  MenuItem,
  Collapse,
  Divider,
  Link as Links,
} from "@mui/material";
import Link from "next/link";
import { Menu as MenuIcon } from "@mui/icons-material";

const pages = [
  { name: "جدیدترین خبرها", href: "#news" },
  { name: "مشاهده همه خبرها", href: "/allnews?page=1" },
  { name: "ارتباط با ما", href: "#Contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpenNavMenu = () => {
    setOpen(!open);
  };

  return (
    <AppBar className="bg-navbar" position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar>
          {/* navbar Down sm */}
          <Box
            display={{ xs: "flex", sm: "none" }}
            alignItems="center"
            justifyContent="space-between"
            width={"100%"}
          >
            <Links href="/">
              <Box
                component="img"
                src={"/img/logo.png"}
                alt="لوگو"
                title="لوگو"
                className="cursor-pointer"
              />
            </Links>
            <Box>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => handleOpenNavMenu()}
                className="borderMenu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>

          {/* navbar Down sm */}

          {/* navbar Up sm */}
          <Box display={{ xs: "none", sm: "flex" }} alignItems="center">
            <Links href="/">
              <Box
                component="img"
                title="لوگو"
                alt="لوگو"
                src="/img/logo.png"
                pl={2}
                className="cursor-pointer"
              />
            </Links>
            {pages.map((page, index) => (
              <MenuItem className="hover-MenuItem" key={index}>
                <Link href={page.href}>
                  <a className="fontsize-link">{page.name}</a>
                </Link>
              </MenuItem>
            ))}
          </Box>
          {/* navbar Up sm */}
        </Toolbar>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Divider className="divider-navbar" />
          {pages.map((page, index) => (
            <MenuItem key={index}>
              <Button
                href={page.href}
                color="dark"
                size="small"
                className="fontsize-btn"
                sx={{
                  my: 1.5,
                  mx: 1.4,
                  color: "gray",
                  display: "block",
                  width: "100%",
                }}
              >
                {page.name}
              </Button>
            </MenuItem>
          ))}
        </Collapse>
      </Container>
    </AppBar>
  );
};
export default NavBar;
