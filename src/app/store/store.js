import { create } from 'zustand'



// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 3,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}));


const useQuestionStore = create((set) => ({
  questions: {
    "1":{
      title: "如果你是一顆靜靜躺在溪邊的石頭，會怎麼做？",
      options: [
        {title: "讓時間與青苔慢慢爬滿我", value: 2},
        {title: "輕輕滑進水裡，跟著水流走", value: 3},
        {title: "一動也不動，靜靜觀察水的倒影", value: 1}
      ]
    },
    "2":{
      title: "當煩惱悄悄來臨時，你的第一反應是？",
      options: [
        {title: "找個值得信任的人說說話", value: 2},
        {title: "不管三七二十一，先動起來再說", value: 3},
        {title: "躲進心裡的小洞穴，讓它自己散去", value: 1}
      ]
    },
    "3":{
      title: "你最嚮往哪種日子？",
      options: [
        {title: "有人一起看雲，也能一起沉默", value: 2},
        {title: "每天都有新的風景與挑戰", value: 3},
        {title: "沒有風浪，陽光正好", value: 1}
      ]
    }
  },
}))



export { usePsyStore, useQuestionStore }