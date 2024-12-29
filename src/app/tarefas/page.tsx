import { AddTask } from "@/components/AddTask";
import { Header } from "../components/Header";
import { TarefasContainer } from "../components/TarefasContainer";
import { CalendarContainer } from "@/components/CalendarContainer";

export default function Tarefas() {
    return (
        <div className="max-w-[85%] h-[95%] mx-auto relative overflow-x-hidden">
            <Header />

            <div className="flex flex-col gap-2 my-6">
                <TarefasContainer />
                <TarefasContainer />
            </div>

            <AddTask/>

            <CalendarContainer/>
        </div>
    )
}