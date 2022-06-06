import "./sidebar.css"
import {LineStyle, Timeline} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        Algorithm Speed Comparison
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Other
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
