"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ui/modetoggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    number: "01",
    label: "Home",
    path: "/",
  },
  {
    number: "02",
    label: "About",
    path: "/about",
  },
  {
    number: "03",
    label: "Resume",
    path: "/Resume.pdf",
    target: "_blank"
  },
  {
    number: "04",
    label: "Contact",
    path: "/contact",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="h-20 flex items-center justify-between">
      <Link href="/">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          <span className="scroll-m-20 text-2xl text-slate-400 font-semibold tracking-tight">
            N
          </span>
          N
        </h3>
      </Link>
      <div className="flex justify-center items-center">
        <ModeToggle />
        <Button onClick={toggleDrawer(true)} variant="ghost" size="icon">
          <Menu />
        </Button>
        <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
          <div
            className="h-full bg-black text-white w-[100%] border-b-2 border-slate-200"
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <div className="flex flex-col md:flex-row gap-y-4 my-8">
              {routes.map((route, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <Link
                      href={route.path}
                      className="text-center flex justify-center items-center w-full"
                      target={route?.target}
                    >
                      <span className="scroll-m-20 text-lg text-slate-500 font-normal tracking-tight">
                        ({route.number})
                      </span>
                      &nbsp;
                      <h4
                        className={cn(
                          "scroll-m-20 text-3xl font-normal tracking-tight",
                          route.path === pathname ? "underline" : ""
                        )}
                      >
                        {route.label}
                      </h4>
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};
