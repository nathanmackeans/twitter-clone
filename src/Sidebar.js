import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import {
    BookmarkBorder,
    Home,
    ListAlt,
    MailOutline,
    MoreHorizOutlined,
    NotificationsNone,
    PermIdentity,
    Search
} from "@mui/icons-material";
import {Button} from "@mui/material";
function Sidebar() {
    return (
      <div className="sidebar">
<TwitterIcon className='sidebar__twitterIcon'/>
          <SidebarOption active Icon={Home} text="Home"/>
          <SidebarOption Icon={Search} text="Search"/>
          <SidebarOption Icon={NotificationsNone} text="Notifications"/>
          <SidebarOption Icon={MailOutline} text="Messages"/>
          <SidebarOption Icon={BookmarkBorder} text="Bookmark"/>
          <SidebarOption Icon={NotificationsNone} text="Notifications" />
          <SidebarOption Icon={ListAlt} text="Lists" />
          <SidebarOption Icon={PermIdentity} text="Profile" />
          <SidebarOption Icon={MoreHorizOutlined} text="More" />
          <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
      </div>
    )
}
export default Sidebar;