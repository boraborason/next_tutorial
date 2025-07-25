import { error } from "console";
import { NextResponse } from "next/server";

//지연시켜주는 함수 ( ms로 인자받기,지연시키고 응답하기 때문에 Promise로 반환)
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

//throw new Error();   --에러 페이지 실습을 위한 에러

//get 요청 핸들러
export async function GET(request: Request) {

    //0~5초 사이 랜덤한 값을 딜레이
    const randomDelay = Math.floor(Math.random() * 5000)
    console.log("randomDelay", randomDelay);

    // 이 핸들러의 응답시간을 randomDelay만큼 지연
    await delay(randomDelay);

    return NextResponse.json({ data: `${randomDelay}만에 응답완료!`});
}