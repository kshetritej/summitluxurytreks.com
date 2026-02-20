"use client";

import { LucideMenu, LucideX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    getCities,
    getRegions,
    getTripTypes,
} from "@/app/actions";

import { TAttractionTypes, TCity, TRegions } from "@/app/types/navItems";
import Link from "next/link";
import LogoComponent from "../atoms/logo";
import { ScrollArea } from "../ui/scroll-area";

export default function MobileNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [attractionTypes, setAttractionTypes] = useState<TAttractionTypes[]>();
    const [regions, setRegions] = useState<TRegions[]>();
    const [cities, setCities] = useState<TCity[]>();

    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        async function fetchOptions() {
            const [attractionTypesRes, regionsRes, citiesRes] = await Promise.all([
                getTripTypes(),
                getRegions(),
                getCities(),
            ]);

            setAttractionTypes(attractionTypesRes?.data?.tripTypes || []);
            setCities(citiesRes?.data?.cities || []);
            setRegions(regionsRes?.data?.regions || []);
        }
        fetchOptions();
    }, []);

    return (
        <div className="">
            <button
                onClick={() => setMenuOpen(true)}
                className="text-6xl px-1"
            >
                <LucideMenu />
            </button>

            <div
                className={cn(
                    menuOpen ? "block" : "hidden",
                    "absolute top-0 left-0 h-svh bg-background w-svw p-4"
                )}
            >
                <div className="flex justify-between items-center">
                    <LogoComponent />
                    <Button variant="secondary" size="lg" onClick={closeMenu}>
                        <LucideX />
                    </Button>
                </div>

                <Accordion type="single" collapsible className="w-full bg-white z-999">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Top Destinations</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <ScrollArea className="h-[50vh]">Coming soon...</ScrollArea>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Attraction Types</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4">
                            <ScrollArea className="h-[50vh]">
                                <ul className="grid gap-2">
                                    {attractionTypes?.map((type) => (
                                        <li key={type.id}>
                                            <Link
                                                href={`/explore?attractionType=${type.tripTypeHandle}`}
                                                onClick={closeMenu}
                                                className="flex gap-4 items-center hover:bg-accent p-2 rounded-md"
                                            >
                                                <img
                                                    alt={type.tripTypeName}
                                                    className="size-8 rounded-md"
                                                    src={type.tripTypeImage}
                                                />
                                                <span>{type.tripTypeName}</span>
                                            </Link>
                                        </li>
                                    ))}
                                    {attractionTypes?.length === 0 && (
                                        <li>No attraction types found.</li>
                                    )}
                                </ul>
                            </ScrollArea>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Regions</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4">
                            <ScrollArea className="h-[50vh]">
                                <ul className="grid gap-2">
                                    {regions?.map((region) => (
                                        <li key={region.id}>
                                            <Link
                                                href={`/explore?region=${region.regionHandle}`}
                                                onClick={closeMenu}
                                                className="flex gap-4 items-center hover:bg-accent p-2 rounded-md"
                                            >
                                                <img
                                                    alt={region.regionName}
                                                    className="size-8 rounded-md"
                                                    src={region.regionImage}
                                                />
                                                <span>{region.regionName}</span>
                                            </Link>
                                        </li>
                                    ))}
                                    {regions?.length === 0 && <li>No regions found.</li>}
                                </ul>
                            </ScrollArea>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>Destinations</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4">
                            <ScrollArea className="h-[50vh]">
                                <ul className="grid gap-2">
                                    {cities?.map((city) => (
                                        <li key={city.id}>
                                            <Link
                                                href={`/explore?city=${city.cityHandle}`}
                                                onClick={closeMenu}
                                                className="flex gap-4 items-center hover:bg-accent p-2 rounded-md"
                                            >
                                                <img
                                                    alt={city.cityName}
                                                    className="size-8 rounded-md"
                                                    src={city.cityImage}
                                                />
                                                <span>{city.cityName}</span>
                                            </Link>
                                        </li>
                                    ))}
                                    {cities?.length === 0 && <li>No destinations found.</li>}
                                </ul>
                            </ScrollArea>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
