'use client';

import MobileFrame from "../layout/mobileFrame";
import Image from 'next/image';
import iconImg from '@/../public/0.start/icon.png'
import bubblesImg from '@/../public/0.start/bubbles.png'

export default function DisplayResultPage({nextStep}) {

    return (
        <>
         <MobileFrame>
            <div className='flex flex-col items-center'>
                <Image 
                    className='absolute top-0 -translate-y-1/2' 
                    src={bubblesImg} 
                    alt='bubblesImg' 
                    style={{ width: '164px' }}
                />
                <div className='flex flex-col items-center'>
                    <Image 
                        src={iconImg} 
                        alt='iconImg' 
                        style={{ width: '100px' }}
                    />
                    <div 
                        className='text-center'
                        style={{
                            color: '#4E4827',
                            fontFamily: '"Noto Sans TC"',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '28px',
                            letterSpacing: '0.8px'
                        }}
                    >
                        計算中……<br />
                        你體內的蠑螈正在甦醒！<br />
                        你是哪種蠑螈呢？
                    </div>
                </div>
                <div 
                    className='text-white font-medium cursor-pointer hover:translate-y-0.5 transition flex justify-center items-center mt-[36px]'
                    style={{
                        width: '138px',
                        height: '48px',
                        flexShrink: 0,
                        borderRadius: '8px',
                        background: '#4E4827'
                    }}
                    onClick={nextStep}
                > 查看結果 </div>
                <Image 
                    className='absolute bottom-0 translate-y-1/2 pointer-events-none' 
                    src={bubblesImg} 
                    alt='bubblesImg' 
                    style={{ width: '164px' }}
                />
            </div>
         </MobileFrame>
        </>
    );
}