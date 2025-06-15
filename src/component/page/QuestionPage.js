'use client';

import MobileFrame from "../layout/mobileFrame";

export default function QuestionPage({questionIndex}) {

    return (
        <>
         <MobileFrame>
            QuestionPage: Q{questionIndex+1}
         </MobileFrame>
        </>
    );
}