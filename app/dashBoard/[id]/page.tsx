'use client'; //클릭 이벤트 사용 

// 다이나믹 라우트 값은 params를 통해 가져올 수 있는데 params안에  우리가 정의한 다이나믹 라우트 이름(id)로 들어옴
// {params}: URL에서 동적 파라미터 받기
// 타입: {id: string} - id는 문자열 타입
export default async function page({params} : {params: {id: string}}) {
// async: API 호출을 위한 비동기 함수
// e: React.FormEvent: 폼 이벤트 객체 (타입스크립트)
  const handleSubmit = async (e: React.FormEvent) => {

    const { id } = await params;  // 현재 페이지 ID 사용

    //API 요청 설정
    const response = await fetch(`/api/test/${id}`, {   //첫번째 옵션: 경로 (이 경로에 데이터를 보낼거)
      method: "POST",                                   //두번째 옵션: 메소드 설정, 콘텐츠 타입설정, 바디 설정
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "test name", email: "test email" }),//바디: 텍스트 형태로 데이터 전달을 위해 보낼 테이터를 string으로 설정
    });
    
    const data = await response.json(); //해당응답으로 json으로 변환 해서 콘솔찍기

    console.log("response data", data);

  };


  // params는 Promise 객체로 사용하기 전에 await로 처리 필요
   const { id } = await params;
  return (
        <>다이나믹 라우트 페이지: {id}
          <button type="submit" onClick={handleSubmit}>
            전송
          </button>
        </>
  );
}
