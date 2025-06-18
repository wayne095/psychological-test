'use client';

import MobileFrame from "../layout/mobileFrame";
import Image from 'next/image';
import singleBubble from '@/../public/1.question/singlebubble.png';
import { usePsyStore, useQuestionStore } from '@/app/store/store';

export default function QuestionPage({questionIndex, nextStep}) {

  const questionData = useQuestionStore( (state => state) );
  const psyData = usePsyStore( (state)=> state );

  const clickAnswer = function(option){
    nextStep();

    psyData.updateScore(psyData.score + option.value);

    console.log(option.title, option.value);
  }

  const getMainColor = function(){

    let colorString = "";

    if(questionIndex == 0){
      colorString = "#5E7C53";
    }else if(questionIndex == 1){
      colorString = "#6567A3";
    }else{
      colorString = "#B27900";
    }

    return colorString;

  }


  return (
    <>
      <MobileFrame>

        <Image 
          className='absolute top-0 -translate-y-1/2' 
          src={singleBubble} 
          alt='singleBubble' 
          style={{ width: '200px' }}
        />

        <div className='flex flex-col items-center gap-[26px]'>

          <div 
            className='text-[#FFFFFF] rounded-lg w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl'
            style={{ backgroundColor: getMainColor() }}
          >
            Q{questionIndex+1}
          </div>
          
          <div 
            className='text-center font-bold text-3xl mb-[60px]'
            style={{ color: getMainColor() }}
          > {questionData.questions[questionIndex+1].title} </div>

          {
            
            questionData.questions[questionIndex+1].options.map( (option, index) => {

              return (
                <div key={option.title + questionIndex} className='w-full'>
                  {
                    questionIndex == 0 &&
                    <div 
                      className={` bg-[#5E7C53] w-full rounded-lg text-white 
                        py-[16px] text-sm flex justify-center items-center font-medium 
                        cursor-pointer hover:translate-y-0.5 transition`}
                      
                      onClick={() => clickAnswer(option)}
                    > {option.title} </div>
                  }

                  {
                    questionIndex == 1 &&
                    <div 
                      className={` bg-[#6567A3] w-full rounded-lg text-white 
                        py-[16px] text-sm flex justify-center items-center font-medium 
                        cursor-pointer hover:translate-y-0.5 transition`}
                      
                      onClick={() => clickAnswer(option)}
                    > {option.title} </div>
                  }

                  {
                    questionIndex == 2 &&
                    <div 
                      className={` bg-[#B27900] w-full rounded-lg text-white 
                        py-[16px] text-sm flex justify-center items-center font-medium 
                        cursor-pointer hover:translate-y-0.5 transition`}
                      
                      onClick={() => clickAnswer(option)}
                    > {option.title} </div>
                  }
                </div>
              )

            })

          }

        </div>

        <Image 
          className='absolute bottom-0 translate-y-1/2 pointer-events-none' 
          src={singleBubble} 
          alt='singleBubble' 
          style={{ width: '200px' }}
        />
        
      </MobileFrame>
    </>
  );
}