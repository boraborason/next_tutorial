// 여기 페이지에 정의한 핸들러를 fetch 하기
// fetch사용하기 때문에 async 추가 

import Card from "@/components/Card";
import { Suspense } from "react";

// fetch는 서버나 API에서 데이터를 가져오는 JavaScript 함수
export default async function dashBoardPage() {
  //fetch에 경로 넣어주기 
  const response = await fetch("http://localhost:3000/api/test");
  //응답확인 위해 data 넣어줌
  const data = await response.json();

  console.log("data", data);
  return (
        //메인 대시보드에 카드 컴포넌트 추가 (서스펜스로 감싸서 추가)
        <>
          <Suspense fallback = {<div>card1 로딩중...</div>} >
            <Card cardId={1} />
          </Suspense>
          <Suspense fallback = {<div>card2 로딩중...</div>} >
            <Card cardId={2} />
          </Suspense>
          <Suspense fallback = {<div>card3 로딩중...</div>} >
            <Card cardId={3} />
          </Suspense>
          <Suspense fallback = {<div>card4 로딩중...</div>} >
            <Card cardId={4} />
          </Suspense>
          
        </>
  );
}
