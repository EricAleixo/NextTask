import { Plus } from 'lucide-react';

export const AddTask = () => {
    return (
        <div className='w-fit'>
            <button className="sm:w-auto w-64 h-10 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black shadow-2xl text-white p-6 rounded-3xl overflow-x-hidden">
                <div className="flex items-center gap-52 w-full h-full text-base">
                    <div className="flex items-center gap-2">
                        <div>
                            <Plus />
                        </div>
                        <p className="whitespace-nowrap">Criar nova tarefa</p>
                    </div>
                    <div>
                        <div className="whitespace-nowrap">
                            CTRL + C
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}