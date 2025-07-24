import { Params } from "next/dist/server/request/params";
import { NextResponse } from "next/server";

// 포스트 요청을 하는 핸들러
//라우터 핸들러의 경우 첫번째 파라미터는 Request들어온다. body값
//다이나믹 라우트 값의 경우 두번째 파라미터 params에 들어옴, params는 Promise 객체이므로 Promise꼭 사용(15)
export async function POST(request: Request, { params }: { params: Promise<{ testId: string }> }
) 
{
    const userData = await request.json();
    console.log("server user data", userData); 

    const { testId } = await params;  //사용하기 전에 await로 처리 필요
    console.log("server param", testId); //url로 들어온 동적 값

    return NextResponse.json({ message: "사용자가 성공적으로 생성 되었습니다.!"});
}