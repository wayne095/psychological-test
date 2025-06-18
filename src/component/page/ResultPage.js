'use client';

import MobileFrame from "../layout/mobileFrame";
import { usePsyStore } from '@/app/store/store'
import Image from 'next/image';
import result1 from '@/../public/3.result/result-1.png';
import result2 from '@/../public/3.result/result-2.png';
import result3 from '@/../public/3.result/result-3.png';

export default function ResultPage() {

    const psyState = usePsyStore( (state) => state );
  
    const playAgain = function(){
      // todo: 重新整理畫面
      window.location.reload();
    }
  
    return (
        <>
            <MobileFrame>
                <div className='flex flex-col items-center'>
                {
                    psyState.score < 6 &&
                    <Image src={result1} alt='result1' />
                }
        
                {
                    psyState.score >= 6 && psyState.score < 8 &&
                    <Image src={result2} alt='result2' />
                }
        
                {
                    psyState.score >= 8 &&
                    <Image src={result3} alt='result3' />
                }
        
                <div
                    className='text-white font-medium cursor-pointer hover:translate-y-0.5 transition flex justify-center items-center mt-[12px]'
                    style={{
                        width: '138px',
                        height: '48px',
                        flexShrink: 0,
                        borderRadius: '8px',
                        background: '#4E4827'
                    }}
                    onClick={playAgain}
                >
                    再玩一次
                </div>
                </div>
            </MobileFrame>
        </>
    );
}
  