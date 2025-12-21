// functions/src/index.ts
import * as admin from "firebase-admin";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
// googleapis는 동적 import로 변경 (배포 타임아웃 방지)

// --- Firebase Admin 초기화 (중복 방지) ---
try {
  admin.app();
} catch {
  admin.initializeApp();
}

// --- Secrets 선언 ---
// ⚠️ 계정 바뀌면 수정: Firebase Console > Functions > Secrets에서 값 업데이트
const GOOGLE_CREDENTIALS = defineSecret("GOOGLE_CREDENTIALS"); // 서비스계정 JSON 키
const SHEET_ID = defineSecret("SHEET_ID");                     // 스프레드시트 ID
const SHEET_NAME = defineSecret("SHEET_NAME");                 // 시트 탭 이름(기본 Sheet1)

// --- Google Sheets 클라이언트 ---
async function getSheetsClient() {
  // ⚠️ 계정 바뀌면 수정: GOOGLE_CREDENTIALS secret 값 업데이트 필요
  // 동적 import로 googleapis 로드 (초기화 타임아웃 방지)
  const { google } = await import("googleapis");
  const creds = JSON.parse(GOOGLE_CREDENTIALS.value());
  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

// --- Firestore 트리거: consultations/{docId} 문서 생성 시 시트에 append ---
export const onFormCreated = onDocumentCreated(
  {
    document: "consultations/{docId}",  // ✅ 현재 프로젝트 컬렉션명
    region: "asia-northeast3",           // 서울 리전
    database: "new-db",                  // ✅ 사용 중인 데이터베이스 이름
    secrets: [GOOGLE_CREDENTIALS, SHEET_ID, SHEET_NAME],
  },
  async (event) => {
    const data = event.data?.data() ?? {};
    const docId = event.params.docId;

    console.log("[onFormCreated] 트리거 실행됨! docId:", docId);
    console.log("[onFormCreated] 받은 데이터:", data);

    const sheetId = SHEET_ID.value().trim();
    const sheetName = SHEET_NAME.value().trim();

    // ✅ ConsultationSlidePanel.tsx 필드에 맞게 구성
    const row = [
      new Date().toLocaleString('ko-KR', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }),                                  // 등록일시
      docId,                               // 문서ID
      data.companyName ?? "",              // 업체명
      data.businessType ?? "",             // 업종
      data.name ?? "",                     // 담당자명
      data.phone ?? "",                    // 연락처
      data.desiredAmount ?? "",            // 희망 자금 규모
      data.message ?? "",                  // 문의 내용
      data.quickSubmit ? "Y" : "N",        // 빠른접수 여부
      data.status ?? "",                   // 상태
    ];

    console.log("[onFormCreated] 시트에 추가할 row:", row);

    const sheets = await getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${sheetName}!A:J`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    console.log("[onFormCreated] ✅ 시트 추가 완료! docId:", docId);
  }
);