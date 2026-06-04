// ─── CONFIGURAÇÃO DO FIREBASE ────────────────────────────────────────────────
// Substitua os valores abaixo com as credenciais do seu projeto Firebase.
// Veja o README.md para instruções passo a passo.

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCf10CBgJc_rUDGC2jUDP7dgkJgCNhVd38",
  authDomain: "figurinhas-chico-2026.firebaseapp.com",
  projectId: "figurinhas-chico-2026",
  storageBucket: "figurinhas-chico-2026.firebasestorage.app",
  messagingSenderId: "542031773178",
  appId: "1:542031773178:web:27eef922e9f24afeaab843",
  measurementId: "G-C5F3HMZTC6"
};

const app      = initializeApp(firebaseConfig);
export const db       = getFirestore(app);
export const auth     = getAuth(app);
export const provider = new GoogleAuthProvider();
