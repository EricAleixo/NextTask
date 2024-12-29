"use client"
import { useState } from "react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ChevronDown } from 'lucide-react';

export const DropMenuButton = () => {

    const [animation, setAnimation] = useState(false);

    return (
        <DropdownMenu onOpenChange={() => setAnimation(!animation)}>
            <DropdownMenuTrigger
                className={`bg-neutral-200 h-6 w-6 rounded-lg flex justify-center items-center`}>
                <ChevronDown className={`transition-transform ${animation && "-rotate-180"}`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}