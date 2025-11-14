import React from "react";
import "../css/CustomAvatarMenu.css";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { color } from "motion";

const CustomAvatar = styled(Avatar)(() => ({
  width: 40,
  height: 40,
  backgroundColor: "transparent", // koyu arka plan
  color: "ivory",
  cursor: "pointer",
  border: "none",
  borderRadius: "0.75rem",
  transition: "0.3s",
  fontWeight: "700",
  "&:hover": {
    color: "#34dfa5",
    boxShadow: "0 0 5px rgba(52,223,165,0.6)",
    transition: "0.3s",
  },
}));

const CustomMenu = styled(Menu)(() => ({
  "& .MuiPaper-root": {
    background: "#161a20",
    color: "#d7dedf",
    fontWeight: "700",
    borderRadius: "0.75rem",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow:
      "0 8px 24px rgba(0, 0, 0, 0.4), 0 0 12px rgba(147, 185, 225, 0.2)",
    minWidth: 200,
    padding: "0.5rem 0",
  },
}));

const CustomMenuItem = styled(MenuItem)(() => ({
  fontWeight: "700",
  "&:hover": {
    backgroundColor: "rgba(147,185,225,0.15)",
    color: "#58f0b5",
  },
}));

const CustomAvatarMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200..700;1,200..700&display=swap');
      </style>
      <CustomAvatar className="avatar-container" onClick={handleClick}>
        <Person2RoundedIcon></Person2RoundedIcon>
      </CustomAvatar>
      <CustomMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <a className="avatar-menu-links" href="/signin">
          <CustomMenuItem onClick={handleClose}>
            <LoginRoundedIcon
              fontSize="medium"
              style={{ marginRight: "8px" }}
            ></LoginRoundedIcon>
            <Typography sx={{ fontFamily: "Cascadia Code", fontWeight: "700"}} variant="body2">Sign In</Typography>
          </CustomMenuItem>
        </a>
        <a className="avatar-menu-links" href="/profilepage">
          <CustomMenuItem onClick={handleClose}>
            <AccountCircle fontSize="medium" style={{ marginRight: "8px" }} />
            <Typography sx={{ fontFamily: "Cascadia Code", fontWeight: "700"}} variant="body2">Profile</Typography>
          </CustomMenuItem>
        </a>

        <a className="avatar-menu-links" href="/settings">
          <CustomMenuItem onClick={handleClose}>
            <Settings fontSize="medium" style={{ marginRight: "8px" }} />
            <Typography sx={{ fontFamily: "Cascadia Code", fontWeight: "700"}} variant="body2">Settings</Typography>
          </CustomMenuItem>
        </a>
        <Divider style={{ background: "rgba(255,255,255,0.1)" }} />
        <a className="avatar-menu-links" href="/logout">
          <CustomMenuItem onClick={handleClose}>
            <Logout fontSize="medium" style={{ marginRight: "8px" }} />
            <Typography sx={{ fontFamily: "Cascadia Code", fontWeight: "700"}}variant="body2">Logout</Typography>
          </CustomMenuItem>
        </a>
      </CustomMenu>
    </>
  );
};

export default CustomAvatarMenu;
