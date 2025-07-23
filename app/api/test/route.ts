import { NextResponse } from "next/server";

//get 요청
export async function GET(request: Request) {
    return NextResponse.json({ data: "응답완료!"});
}