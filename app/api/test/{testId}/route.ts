import { Params } from "next/dist/server/request/params";
import { NextResponse } from "next/server";

// 포스트 요청을 하는 핸들러
export async function POST(request: Request, { params }: {params: {testId: string} } 
) 
{
    const userData = await request.json();
    console.log("server user data", userData);
    console.log("server param", params.testId);

    return NextResponse.json({ message: "사용자가 성공적으로 생성 되었습니다.!"});
}