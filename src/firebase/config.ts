// Firebase 설정
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase 설정 정보
const firebaseConfig = {
  apiKey: "AIzaSyCMCSnIJyKTJ_dm_uoJl1hPnsOWIDIHyD8",
  authDomain: "project-db-ac3d8.firebaseapp.com",
  projectId: "project-db-ac3d8",
  storageBucket: "project-db-ac3d8.firebasestorage.app",
  messagingSenderId: "914677244388",
  appId: "1:914677244388:web:cef89fdd2a35085b03a7f1",
  measurementId: "G-6DVFSD5BE1"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 (new-db 사용 - Functions와 동일하게 맞춤)
export const db = getFirestore(app, "new-db");

// Analytics (선택적)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
