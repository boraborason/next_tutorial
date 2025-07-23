// 여기 페이지에 정의한 핸들러를 fetch 하기
// fetch사용하기 때문에 async 추가 
// fetch는 서버나 API에서 데이터를 가져오는 JavaScript 함수
export default async function dashBoardPage() {
  //fetch에 경로 넣어주기 
  const response = await fetch("http://localhost:3001/api/test");
  //응답확인 위해 data 넣어줌
  const data = await response.json();

  console.log("data", data);
  return (
        <>대시보드 메인페이지</>
  );
}
