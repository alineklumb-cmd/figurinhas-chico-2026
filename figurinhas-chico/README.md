# 🏆 Figurinhas do Chico 2026

App de controle do álbum Panini Copa 2026, com sincronização em nuvem via Firebase + deploy gratuito na Vercel.

---

## 🚀 Passo a Passo de Deploy (30 minutos, tudo gratuito)

### PARTE 1 — Criar o projeto no Firebase (10 min)

1. Acesse **https://console.firebase.google.com**
2. Clique em **"Adicionar projeto"**
   - Nome: `figurinhas-chico-2026`
   - Desative o Google Analytics (não precisa)
   - Clique em **Criar projeto**

3. Na tela do projeto, clique no ícone **`</>`** (Web) para registrar um app web
   - Nome: `figurinhas-chico`
   - Clique em **Registrar app**
   - **Copie o objeto `firebaseConfig`** que aparecer (você vai precisar no próximo passo)

4. No menu lateral, vá em **Authentication → Primeiros passos**
   - Clique em **Google** → ative → salve

5. No menu lateral, vá em **Firestore Database → Criar banco de dados**
   - Escolha **Modo de produção**
   - Selecione a região `southamerica-east1 (São Paulo)`
   - Clique em **Ativar**

6. Ainda no Firestore, vá em **Regras** e cole isso (permite só usuários logados):
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /albuns/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```
   Clique em **Publicar**

---

### PARTE 2 — Configurar o código (5 min)

Abra o arquivo **`src/firebase.js`** e substitua os valores com o que você copiou no passo 3:

```js
const firebaseConfig = {
  apiKey:            "AIzaSy...",       // ← cole aqui
  authDomain:        "figurinhas-chico-2026.firebaseapp.com",
  projectId:         "figurinhas-chico-2026",
  storageBucket:     "figurinhas-chico-2026.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123",
};
```

---

### PARTE 3 — Fazer deploy na Vercel (15 min)

#### Opção A — Via GitHub (recomendado)

1. Crie uma conta em **https://github.com** (se não tiver)
2. Crie um repositório novo chamado `figurinhas-chico-2026`
3. Faça upload de todos os arquivos desta pasta para o repositório
4. Acesse **https://vercel.com** → faça login com sua conta Google
5. Clique em **"New Project"** → importe o repositório do GitHub
6. Nas configurações:
   - Framework Preset: **Create React App**
   - Clique em **Deploy**
7. Aguarde ~2 minutos e seu app estará no ar em um link tipo:
   **`https://figurinhas-chico-2026.vercel.app`**

#### Opção B — Via Vercel CLI (terminal)

```bash
# Instale o Node.js em https://nodejs.org se não tiver
npm install -g vercel
vercel login
cd figurinhas-chico
vercel --prod
```

---

### PARTE 4 — Autorizar o domínio no Firebase (2 min)

Após o deploy, volte ao Firebase Console:

1. Vá em **Authentication → Settings → Domínios autorizados**
2. Clique em **Adicionar domínio**
3. Cole o domínio gerado pela Vercel (ex: `figurinhas-chico-2026.vercel.app`)
4. Salve

---

## ✅ Pronto!

Agora qualquer pessoa com o link pode:
- Fazer login com a conta Google
- Marcar figurinhas (toque = colar, toque longo = remover)
- Ver o progresso sincronizado em tempo real em qualquer dispositivo

## 📱 Instalar como app no celular/tablet

**Android (Chrome):**
1. Abra o link no Chrome
2. Menu (⋮) → "Adicionar à tela inicial"

**iPhone/iPad (Safari):**
1. Abra o link no Safari
2. Botão compartilhar → "Adicionar à tela de início"

---

## 🗂 Estrutura dos arquivos

```
figurinhas-chico/
├── public/
│   ├── index.html
│   └── manifest.json       ← configuração PWA (instalar como app)
├── src/
│   ├── index.js            ← ponto de entrada React
│   ├── App.js              ← app completo com Firebase
│   ├── albumData.js        ← dados das 980 figurinhas
│   └── firebase.js         ← ⚠️ PREENCHER com suas credenciais
├── package.json
└── README.md
```
