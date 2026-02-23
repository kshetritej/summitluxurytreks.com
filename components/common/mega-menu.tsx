"use client";

import useSWR from "swr";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

interface MenuItem {
  id: string;
  label: string;
  url: string;
  children?: MenuItem[];
}

interface MenuResponse {
  data: MenuItem[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function MegaMenu() {
  const { data, isLoading, error } = useSWR<MenuResponse>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/menu`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  // @ts-expect-error too lazy to fix the type
  const menuData = data?.data?.items || [];

  // Show loading state
  if (isLoading) {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <div className="text-sm text-muted-foreground px-4">Loading...</div>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  // Show error state
  if (error) {
    console.error("[v0] Menu fetch error:", error);
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <div className="text-sm text-destructive px-4">Menu unavailable</div>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuData?.map((item: any) => {
          // Simple links without children
          if (item.children.length === 0) {
            return (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink
                  href={item.url}
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center text-secondary px-4 py-2 text-sm font-medium hover:text-accent-foreground",
                  )}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          // Menu items with children (Luxury)
          return (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-none">
                <div className="w-full md:w-150 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {item.children.map((child: any) => {
                      // Items with sub-children (Everest Region)
                      if (child.children && child.children.length > 0) {
                        return (
                          <div key={child.id} className="space-y-3">
                            <h3 className="font-semibold text-sm leading-none mb-3">
                              {child.label}
                            </h3>
                            <ul className="space-y-2">
                              {child.children.map((subChild: any) => (
                                <li key={subChild.id}>
                                  <NavigationMenuLink
                                    href={subChild.url}
                                    className="text-sm leading-none text-muted-foreground hover:text-foreground transition-colors"
                                  >
                                    {subChild.label}
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }

                      // Simple child items (Annapurna Region)
                      return (
                        <div key={child.id}>
                          <NavigationMenuLink
                            href={child.url}
                            className="font-medium leading-none mb-2 p-2 hover:bg-none hover:text-accent"
                          >
                            {child.label}
                          </NavigationMenuLink>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
