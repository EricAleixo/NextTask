import { Calendar } from "./ui/calendar"

export const CalendarContainer = () =>{
    return(
        <div className="bg-white p-2 rounded-xl flex flex-col gap-2">

            <div className="flex gap-2 bg-gray-200 p-2 rounded-md items-center">
                <div className="h-6 w-8 border-2 border-gray-400 rounded-lg"></div>
                <input className="w-full bg-transparent outline-none" type="text" placeholder="Criar nova tarefa" />
                <p className="whitespace-nowrap bg-gray-100 text-gray-500 p-1 rounded-2xl text-sm">6 Julhio</p>
            </div>
            
            <div className="flex gap-2 bg-gray-200 p-2 rounded-md items-center">
                <div className="h-6 w-8 border-2 border-gray-400 rounded-lg"></div>
                <input className="w-full bg-transparent outline-none" type="text" placeholder="Criar nova tarefa" />
                <p className="whitespace-nowrap bg-gray-100 text-gray-500 p-1 rounded-2xl text-sm">6 Julhio</p>
            </div>

            <Calendar className="w-full h-full flex items-center justify-center"/>

            <button className="bg-blue-50 text-blue-600 py-1.5 rounded-2xl">
                Defina o tempo
            </button>
            <button className="bg-blue-600 text-white py-1.5 rounded-2xl">
                Salve as mudanças
            </button>
        </div>
    )
}