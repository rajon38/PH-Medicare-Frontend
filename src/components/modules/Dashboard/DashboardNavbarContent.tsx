import { NavSection } from "@/types/dashboard.types";
import { UserInfo } from "@/types/user.types";
import { useState } from "react";

interface DashboardNavbarContentProps {
    userInfo : UserInfo;
    navItems : NavSection[];
    dashboardHome : string;
}

const DashboardNavbarContent = ({ userInfo, navItems, dashboardHome } : DashboardNavbarContentProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/* Mobile Menu Toggle Button And Menu */}
            {/* Search Component */}

            {/* Right Side Actions */}
            <>
            {/* Notification */}
            {/* User Profile Dropdown */}
            </>
        </>
    )
}

export default DashboardNavbarContent;