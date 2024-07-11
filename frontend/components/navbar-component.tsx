"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navbarData } from "@/lib/navbar-data";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import { ModeToggle } from "./theme-switch-button";
import AnimateWrapper from "./animate-in-wrapper";
export const Navbar = () => {
  return (
    <nav className="w-full md:max-w-4xl mx-auto p-4 flex justify-end sm:justify-between">
      <AnimateWrapper>
        <Link href={"/"} className="size-10 max-sm:hidden">
          <Image
            src={logo}
            alt="logo-image"
            className="h-10 w-10 rounded-full border"
          />
        </Link>
      </AnimateWrapper>
      <AnimateWrapper dir={-20}>
        <NavigationMenuComp />
      </AnimateWrapper>
    </nav>
  );
};
export default Navbar;
export function NavigationMenuComp() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="max-md:p-2">
            About us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[350px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <Link href={"/"}>
                      <Image
                        src={logo}
                        alt="logo-image"
                        className="size-16 rounded-3xl border"
                      />
                    </Link>
                    <Link href={"/docs"}>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Surplus Serve
                        {/* <p className="text-[0.5rem] text-gray-500 -mt-1 tracking-tighter leading-[0.6rem]">
                        Nourishing Communities, Reducing Waste.
                        </p> */}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Fight hunger, reduce waste. Surplus Serve connects
                        restaurants with NGOs for food donations.
                      </p>
                    </Link>
                  </div>
                </NavigationMenuLink>
              </li>
              <Link href={"/docs/aim"}>
                <ListItem title="Aim">
                  We are on a mission to provide food to the needy ones . Join
                  Us!
                </ListItem>
              </Link>
              <Link href="/docs/usage">
                <ListItem title="Usage">
                  How to Use Surplus Serve ? Read here.
                </ListItem>
              </Link>
              <Link href={"/docs/faq"}>
                <ListItem title="FAQs">Having questions ? Go here !</ListItem>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="max-md:p-2">
            Collaborators
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[350px] md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {navbarData.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/dashboard" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Dashboard
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className="ml-4">
        <ModeToggle />
      </div>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
