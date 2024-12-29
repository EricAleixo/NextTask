import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function LayoutTarefas({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SidebarProvider>
                <AppSidebar/>
                <main className=" bg-gray-200 w-full">
                    <SidebarTrigger/>
                    {children}
                </main>
            </SidebarProvider>
        </>
    )
}