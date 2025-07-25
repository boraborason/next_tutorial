// interface: TypeScript에서 객체의 구조를 정의하는 키워드
// CardProps: 이 컴포넌트가 받을 props의 타입 이름 (보통 컴포넌트명 + Props)
// React 컴포넌트는 객체로 전달하기 때문에 객체로 받아야함(props 객체)
interface CardProps {
  cardId: number;
}

// 라우터 호출하기 위해 async로.. await를 써야하니까  
// 순서대로 기다려야 함 → await 필요 → async 필수 / async 함수 사용할 때 반드시 await 또는 .then()
// 1. 순차 데이터로딩 2.데이터 베이스작업 3. 외부 api호출 할 때 await씀
//async = Promise를 쉽게 다루게 해주는 문법
export default async function Card({ cardId }: CardProps) { //{ cardId }: 구조분해할당 - props 객체에서 cardId만 추출 

  const response = await fetch(`http://localhost:3000/api/test?cardId=${cardId}`);
  const data = await response.json();

  console.log("data", data);
    return (
        <div
            style={{
                width : 200,
                height : 200,
                background: "yellow",
                border: "1px solid #222",
            }}
        ></div>
    );
}