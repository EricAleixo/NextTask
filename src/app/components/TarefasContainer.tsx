import { CircleCheck, EllipsisVertical } from 'lucide-react';

export const TarefasContainer = () => {
    return (
        <>
            <div className="bg-white flex items-center justify-center p-2 rounded-lg shadow-lg">
                <div className="flex gap-2 items-center h-full w-full">
                    <div className="h-6 w-6 border-2 border-gray-500 rounded-md"></div>
                    <div>
                        Ler um Livro
                    </div>
                    <div className="bg-gray-200 rounded-md">
                        {String.fromCodePoint(0x1F697)}
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='flex bg-gray-100 p-2 rounded-lg gap-1'>
                        <CircleCheck />
                        <time className='whitespace-nowrap'>08:00 - 09:00</time>
                    </div>
                    <div className='bg-gray-100 flex items-center justify-center rounded-lg'>
                        <EllipsisVertical/>
                    </div>
                </div>
            </div>
        </>
    )
}