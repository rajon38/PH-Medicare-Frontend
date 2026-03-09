import { getDefaultDashboardRoute } from "@/lib/authUtils";
import { getNavItemsByRole } from "@/lib/navitems";
import { getUserInfo } from "@/services/auth.services";
import { NavSection } from "@/types/dashboard.types";

const DashboardNavbar = async () => {
    const userInfo = await getUserInfo();
        const navItems : NavSection[] = getNavItemsByRole(userInfo.role);
        const dashboardHome = getDefaultDashboardRoute(userInfo.role);
    return (
        <div>
            Dashboard Navbar
        </div>
    )
}

export default DashboardNavbar;