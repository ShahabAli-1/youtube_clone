import React from "react";
import "./SideBar.css";
import SideBarRow from "./SideBarRow/SideBarRow.js";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

import HistoryIcon from "@material-ui/icons/History";

import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* You even pass components as props
      but When You Pass a comp as prop
      captalize the first letter
      since a capitol letter is used for
      components always*/}
      <SideBarRow selected title={"Home"} Icon={HomeIcon} />
      <SideBarRow title={"Trending"} Icon={WhatshotIcon} />
      <SideBarRow title={"Subscription"} Icon={SubscriptionsIcon} />
      <hr />
      <SideBarRow title={"Library"} Icon={VideoLibraryIcon} />
      <SideBarRow title={"History"} Icon={HistoryIcon} />
      <SideBarRow title={"Your videos"} Icon={OndemandVideoIcon} />
      <SideBarRow title={"Watch Later"} Icon={WatchLaterIcon} />
      <SideBarRow title={"Liked Videos"} Icon={ThumbUpAltOutlinedIcon} />
      <SideBarRow title={"Show more"} Icon={ExpandMoreOutlinedIcon} />
      <hr />
    </div>
  );
};

export default Sidebar;
