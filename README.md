
## **Next.js 기본 실습**

다이나믹 라우트
- url에 동적인 값을 받아야 하는 페이지들이 있음
- 정확한 세그먼트의 이름을 정의할 수 없음
- 그때 쓰는것이 다이나믹 라우트

라우트 그룹
- 라우트를 그룹화할 수 있는 폴더
- 주로 같은 css를 먹일 때 사용

라우트 핸들러
- Next.js에서 **API 엔드포인트를 처리하는 함수**
- **HTTP 요청**(GET, POST, PUT, DELETE)을 **처리하는 함수**

fetch의 핵심
정의: "다른 곳에서 데이터를 가져와줘!"
용도: API 호출, 파일 다운로드, 서버 통신
특징: 비동기, Promise 기반, 간단한 문법

## **🔍 Dynamic Routes 규칙**

### **1. 대괄호 `[]` 사용 필수**

### **2. 중첩 파라미터 가능**
`[userId]/[postId]/route.ts → /api/users/123/posts/456`
`[대괄호]`는 Next.js의 특별한 문법

⏳ 로딩 처리 (Loading States)

**폴더 구조:**

`app/
├── dashboard/
│   ├── loading.tsx    ← 대시보드 로딩 UI
│   └── page.tsx
└── products/
    ├── loading.tsx    ← 상품 페이지 로딩 UI
    └── page.tsx`

🌊 스트리밍 (Streaming)

### **기본 개념:**

- **전체 페이지를 기다리지 않고**
- **준비된 부분부터 차례로 보여주기**
- **사용자 경험 대폭 향상**

### 스트리밍 + Suspense 방식

Suspense

### **주요 특징:**

- ✅ **자동 로딩 감지** (Promise 기반)
- ✅ **선언적 로딩 처리** (if문 불필요)
- ✅ **중첩 가능** (컴포넌트별 세밀한 제어)
- ✅ **스트리밍 지원** (점진적 로딩)

### **사용하는 이유:**

- 🚀 **더 깔끔한 코드**
- 🎨 **더 나은 UX** (점진적 로딩)
- ⚡ **더 빠른 인지 성능**

### **스트리밍 + Suspense 방식:**

`🚚 배달원: "완성되는 대로 하나씩 가져다드릴게요!"

⏰ 10분: 🍕 치즈피자 도착 
         "나머지는 준비 중..." ← Suspense fallback

⏰ 20분: 🍕 페퍼로니피자 도착
         "불고기피자는 준비 중..." ← Suspense fallback

⏰ 30분: 🍕 불고기피자 도착
         "모든 피자 완성!" ← 전체 완료`

타입스크립트 문법

typescript

`*// 기존 방식*
function delay(ms) {
  return "뭔가";
}

*// 화살표 함수 방식*
const delay = (ms) => {
  return "뭔가";
}

*// 더 짧게 (중괄호 생략)*
const delay = (ms) => "뭔가";`

## **📚 const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)); 함수 단계별로 이해하기**

### **Step 1: 가장 간단한 버전**

typescript

`function delay(ms) {
  *// ms 밀리초 후에 완료되는 Promise 만들기*
}`

### **Step 2: setTimeout 추가**

typescript

`function delay(ms) {
  setTimeout(() => {
    console.log("시간 끝!");
  }, ms);
}

*// 사용: delay(3000); // 3초 후 "시간 끝!" 출력*`

### **Step 3: Promise로 감싸기**

typescript

`function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(); *// "완료됐어!" 신호 보내기*
    }, ms);
  });
}

*// 사용: delay(3000).then(() => console.log("완료!"));*`

### **Step 4: 화살표 함수로 짧게**

typescript

`const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
    *//         ^^^^^^^ () => resolve() 와 같음*
  });
};`

### **Step 5: 더 짧게 (return 생략)**

typescript

`const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
*//                    ^^^^^^^^^^^ //                    중괄호와 return 생략*`

### **Step 6: 타입스크립트 타입 추가**

typescript

`const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
*//                ^^^^^^^ //                ms는 숫자만 받겠다*`

**resolve 의 기능은 완료신호

### **resolve의 역할:**

- 🎯 **"작업 완료" 신호** (가장 중요!)
- 📦 **결과값 전달** (부가 기능)

*// 방법 1: 함수를 직접 전달*

setTimeout(resolve, 1000);

*// 방법 2: 화살표 함수로 감싸서 전달*

setTimeout(() => resolve(), 1000);

## **🔄 실제 실행 과정**

### **delay(2000) 호출 시:**

시간: 0초
└─ setTimeout(resolve, 2000) 실행
└─ "2초 후에 resolve 함수 실행해줘" 예약

시간: 2초
└─ JavaScript 엔진이 resolve() 자동 호출
└─ Promise 완료!

setTimeout(resolve, ms);

*//         ^^^^^^^*

*//         "ms 밀리초 후에 완료 신호 보내기"*
