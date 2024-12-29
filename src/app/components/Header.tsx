import { DropMenuButton } from "@/components/DropMenuButton";
import { Menu } from 'lucide-react';

export const Header = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-4xl">
                    Boa noite, Eric! {String.fromCodePoint(0x1F44B)}
                </h1>
                <h2 className="font-thin text-xl">
                    Hoje, quarta-feita, dia 25, dezembro 2024
                </h2>
            </div>

            <div className="flex gap-5">
                <div className="flex items-center gap-2 bg-white h-fit p-2 pr-10 rounded-md">
                    <DropMenuButton />
                    <h3>Hoje</h3>
                </div>
                <div className="p-2 bg-white h-fit rounded-md">
                    <Menu />
                </div>
            </div>
        </div>
    )
}