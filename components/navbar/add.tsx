"use client"

import * as React from "react"
import {PlusIcon} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Film, Clapperboard, MonitorPlay, Play, Plus } from "lucide-react";

export function Add() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-secondary-foreground dark:bg-primary-foreground text-primary-foreground dark:text-secondary-foreground border">
            <Plus className="h-5 w-5 mr-1"/>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div
                    className="flex h-full w-full select-none flex-col items-center justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <PlusIcon className="h-20 w-full mb-10"/>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Select what you want to add into your database.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <div className="flex items-center gap-3">
                <div className="ml-4">
                  <Film className="h-8 w-8" style={{color:"#C0392B"}}/>
                </div>
                <div>
                <ListItem href={process.env.ADD_MOVIES} title="Movie">
                  A movie typically has a duration of under three hours.
                </ListItem>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="ml-4">
                  <Clapperboard className="h-8 w-8" style={{color:"#F1C40F"}}/>
                </div>
                <div>
                <ListItem href={process.env.ADD_SERIES} title="Series">
                A series typically has multiple seasons and episodes.
                </ListItem>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="ml-4">
                  <MonitorPlay className="h-8 w-8" style={{color:"#2ECC71"}}/>
                </div>
                <div>
                <ListItem href={process.env.ADD_ANIME} title="Anime">
                An anime typically has a Japanese language animation.
                </ListItem>
                </div>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
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
  )
})
ListItem.displayName = "ListItem"
