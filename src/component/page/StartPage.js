'use client';

import MobileFrame from "../layout/mobileFrame";
import Image from 'next/image';
import bubblesImg from '@/../public/0.start/bubbles.png'
import iconImg from '@/../public/0.start/icon.png'

export default function StartPage({ nextStep }) {

    return (
        <>
            <MobileFrame>
                <div className='flex justify-center items-center flex-col gap-[60px]'>
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
                        <h1 
                            className='text-center'
                            style={{
                                color: '#4E4827',
                                fontFamily: '"Noto Sans TC"',
                                fontSize: '30px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '42px',
                                letterSpacing: '1.2px'
                            }}
                        >
                            潛進內心的濕地：<br />
                            找出你體內的蠑螈
                        </h1>
                    </div>
                    <div className='text-[#895F0F] font-[500] text-[14px] leading-loose text-center tracking-wide'>
                        在陰影與水光交錯的森林裡，<br />
                        有各種蠑螈靜靜潛伏。<br />
                        牠們象徵著不同的個性、<br />
                        人生策略與內在力量。<br />
                        完成 3 道題目，找出你的內心蠑螈原型。
                    </div>
                    <button 
                        onClick={nextStep} 
                        className='cursor-pointer hover:translate-y-0.5 transition text-white font-medium'
                        style={{
                            width: '138px',
                            height: '48px',
                            fontFamily: '"Noto Sans TC"',
                            flexShrink: 0,
                            borderRadius: '8px',
                            background: '#4E4827'
                        }}
                    >
                        開始測驗
                    </button>
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