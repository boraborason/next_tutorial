// 다이나믹 라우트 값은 params를 통해 가져올 수 있는데 params안에  우리가 정의한 다이나믹 라우트 이름(id)로 들어옴
export default async function page({params} : {params: {id: string}}) {
// params는 Promise 객체로 사용하기 전에 await로 처리 필요
   const { id } = await params;
  return (
        <>다이나믹 라우트 페이지: {id}</>
  );
}
