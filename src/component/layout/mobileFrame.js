'use client';

export default function MobileFrame({children}) {

    return (
        <>
            <div className="w-[33%] min-w-[375px] max-w-[420px] h-[85%] p-[52px] 
            rounded-2xl flex justify-center items-center
            relative overflow-hidden 
            " style={{ backgroundColor: '#E9E7DF' }}>
                {children}
            </div>
        </>
    );
}