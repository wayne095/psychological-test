'use client';
import { DatePicker } from 'antd';
import CalenderPage from '@/component/others/CalenderPage'

export default function TestUI() {

    const onChange = (date, dateString) => {
        console.log(date, dateString);
        alert("你選的是：" + dateString);
    };

    return (
        <div className="w-screen h-screen bg-gray-100 flex justify-center items-center gap-5 flex-wrap overflow-auto">
            {/* <DatePicker onChange={onChange} needConfirm /> */}

            <CalenderPage year="2025" month="五月" date="01" day="星期四"></CalenderPage>
            
        </div>
    );
}