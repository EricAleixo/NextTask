import { Calendar } from "./ui/calendar"
import { ChevronDown, Calendar as CalendarIcon, BookOpenText } from "lucide-react"

export const CalendarContainer = () => {
    return (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 min-w-[50%] bg-white p-2 rounded-xl flex flex-col gap-2">

            <div className="flex gap-2 bg-gray-200 p-2 rounded-md items-center">
                <div className="h-6 w-8 border-2 border-gray-400 rounded-lg"></div>
                <input className="w-full bg-transparent outline-none" type="text" placeholder="Criar nova tarefa" />
                <p className="whitespace-nowrap bg-gray-100 text-gray-500 p-1 rounded-2xl text-sm">6 Julhio</p>
            </div>

            <div className="flex items-center justify-between gap-1">
                <div className="p-2 border-2 rounded-lg flex justify-between w-full">
                    <div className="flex gap-1">
                        <div className="h-6 w-6 border-2 border-gray-900 rounded-lg"></div>
                        <p className="text-gray-600">Nenhuma lista</p>
                    </div>

                    <div>
                        <ChevronDown />
                    </div>
                </div>

                <div className="flex gap-1">
                    <div className="p-1 border-2 border-gray-400 rounded-lg">
                        <CalendarIcon className="w-8 h-8" />
                    </div>
                    <div className="p-1 border-2 border-gray-400 rounded-lg">
                        <BookOpenText className="w-8 h-8" />
                    </div>
                </div>
            </div>

            <Calendar className="flex items-center justify-center" />

            <button className="bg-blue-50 text-blue-600 py-1.5 rounded-2xl">
                Defina o tempo
            </button>
            <button className="bg-blue-600 text-white py-1.5 rounded-2xl">
                Salve as mudanças
            </button>
        </div>
    )
}