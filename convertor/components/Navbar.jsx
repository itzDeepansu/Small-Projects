"use client";
import React, { useState } from "react";
import { SiConvertio } from "react-icons/si";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const Navbar = () => {
  
  return (
    <div className="w-full flex justify-around items-center">
      <SiConvertio />
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/">Home</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/about">About</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/contact">Contact Me</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <Button
        variant="outline"
        className="h-7 hover:bg-sky-400 hover:text-white"
      >
        Github Repo
      </Button>
      
    </div>
  );
};

export default Navbar;
