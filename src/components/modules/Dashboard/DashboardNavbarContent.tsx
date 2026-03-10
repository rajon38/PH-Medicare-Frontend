'use client'
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavSection } from "@/types/dashboard.types";
import { UserInfo } from "@/types/user.types";
import { Menu, Search } from "lucide-react";
import { useState } from "react";
import DashboardMobileSidebar from "./DashboardMobileSidebar";
import { Input } from "@/components/ui/input";
import NotificationDropdown from "./NotificationDropdown";

interface DashboardNavbarContentProps {
    userInfo : UserInfo;
    navItems : NavSection[];
    dashboardHome : string;
}

const DashboardNavbarContent = ({ dashboardHome, navItems, userInfo } : DashboardNavbarContentProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/* Mobile Menu Toggle Button And Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                    <Button variant={"outline"} size={"icon"}>
                        <Menu className="h-5 w-5"/>
                    </Button>
                </SheetTrigger>

                <SheetContent side="left" className="w-64 p-0">
                    <DashboardMobileSidebar dashboardHome={dashboardHome} navItems={navItems} userInfo={userInfo}/>
                </SheetContent>
            </Sheet>
            {/* Search Component */}
            <div className="flex-1 flex items-center">
                <div className="relative w-full hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                    <Input type="text" placeholder="Search..." className="pl-9 pr-4"/>
                </div>
            </div>
            {/* Right Side Actions */}
            <>
            {/* Notification */}
            <NotificationDropdown/>
            {/* User Profile Dropdown */}
            </>
        </>
    )
}

export default DashboardNavbarContent;