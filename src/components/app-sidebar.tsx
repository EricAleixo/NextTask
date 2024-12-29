import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Casa",
        url: "#",
        icon: 0x1F3E0,
        taskCount: 6
    },
    {
        title: "Dieta",
        url: "#",
        icon: 0x1F4AA,
        taskCount: 2
    },
    {
        title: "Lista de livros",
        url: "#",
        icon: 0x1F4DA,
        taskCount: 3
    },
    {
        title: "Viagens",
        url: "#",
        icon: 0x1F697,
        taskCount: 1
    },
]

export const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarContent className="bg-gray-100">
                <SidebarGroup>
                    <SidebarGroupLabel>Privado</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} className="py-0.5">
                                    <SidebarMenuButton asChild className="py-5 hover:bg-gray-300">
                                        <a href={item.url}>
                                            {String.fromCodePoint(item.icon)}
                                            <span className="flex justify-between w-full">
                                                <span className="text-lg">{item.title}</span>
                                                <span className="bg-gray-100 border px-2 rounded-xl text-gray-600 flex items-center justify-center">
                                                    {item.taskCount}
                                                </span>
                                            </span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="bg-gray-100">
                <div className="flex items-center justify-between p-2 pr-1.5 bg-neutral-200 border rounded-2xl cursor-pointer hover:scale-[1.03] transition-transform duration-200">
                    <div className="flex items-center justify-center gap-1">
                        <div className="text-3xl flex items-center relative h-6 w-6">
                            <span className="absolute -top-[38%] right-0">+</span>
                        </div>
                        <span className="flex items-center text-black">Criar nova lista</span>
                    </div>
                    <span className="bg-gray-200 py-1 px-2 rounded-3xl text-gray-600 border border-gray-400">
                        G
                    </span>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
