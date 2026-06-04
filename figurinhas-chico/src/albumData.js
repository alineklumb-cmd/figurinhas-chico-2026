const makeTeam = (code) => Array.from({ length: 20 }, (_, i) => `${code}${i + 1}`);

export const ALBUM_OFICIAL = [
  {
    id: "FWC", label: "Copa 2026 — Especiais", color: "#f59e0b", group: null,
    stickers: ["FWC0","FWC1","FWC2","FWC3","FWC4","FWC5","FWC6","FWC7",
               "FWC8","FWC9","FWC10","FWC11","FWC12","FWC13","FWC14",
               "FWC15","FWC16","FWC17","FWC18","FWC19"],
  },
  // GRUPO A
  { id:"RSA", label:"África do Sul",    color:"#22c55e", group:"A", stickers:makeTeam("RSA") },
  { id:"KOR", label:"Coreia do Sul",    color:"#ef4444", group:"A", stickers:makeTeam("KOR") },
  { id:"MEX", label:"México",           color:"#16a34a", group:"A", stickers:makeTeam("MEX") },
  { id:"CZE", label:"Rep. Tcheca",      color:"#60a5fa", group:"A", stickers:makeTeam("CZE") },
  // GRUPO B
  { id:"BIH", label:"Bósnia e Herz.",   color:"#fbbf24", group:"B", stickers:makeTeam("BIH") },
  { id:"CAN", label:"Canadá",           color:"#ef4444", group:"B", stickers:makeTeam("CAN") },
  { id:"QAT", label:"Catar",            color:"#8b5cf6", group:"B", stickers:makeTeam("QAT") },
  { id:"SUI", label:"Suíça",            color:"#f87171", group:"B", stickers:makeTeam("SUI") },
  // GRUPO C
  { id:"BRA", label:"Brasil",           color:"#fde047", group:"C", stickers:makeTeam("BRA") },
  { id:"SCO", label:"Escócia",          color:"#3b82f6", group:"C", stickers:makeTeam("SCO") },
  { id:"HAI", label:"Haiti",            color:"#1d4ed8", group:"C", stickers:makeTeam("HAI") },
  { id:"MAR", label:"Marrocos",         color:"#16a34a", group:"C", stickers:makeTeam("MAR") },
  // GRUPO D
  { id:"AUS", label:"Austrália",        color:"#fbbf24", group:"D", stickers:makeTeam("AUS") },
  { id:"USA", label:"Estados Unidos",   color:"#dc2626", group:"D", stickers:makeTeam("USA") },
  { id:"PAR", label:"Paraguai",         color:"#f97316", group:"D", stickers:makeTeam("PAR") },
  { id:"TUR", label:"Turquia",          color:"#ef4444", group:"D", stickers:makeTeam("TUR") },
  // GRUPO E
  { id:"GER", label:"Alemanha",         color:"#d4d4d4", group:"E", stickers:makeTeam("GER") },
  { id:"CIV", label:"Costa do Marfim",  color:"#f97316", group:"E", stickers:makeTeam("CIV") },
  { id:"CUW", label:"Curaçao",          color:"#38bdf8", group:"E", stickers:makeTeam("CUW") },
  { id:"ECU", label:"Equador",          color:"#facc15", group:"E", stickers:makeTeam("ECU") },
  // GRUPO F
  { id:"NED", label:"Holanda",          color:"#f97316", group:"F", stickers:makeTeam("NED") },
  { id:"JPN", label:"Japão",            color:"#3b82f6", group:"F", stickers:makeTeam("JPN") },
  { id:"SWE", label:"Suécia",           color:"#facc15", group:"F", stickers:makeTeam("SWE") },
  { id:"TUN", label:"Tunísia",          color:"#dc2626", group:"F", stickers:makeTeam("TUN") },
  // GRUPO G
  { id:"BEL", label:"Bélgica",          color:"#ef4444", group:"G", stickers:makeTeam("BEL") },
  { id:"EGY", label:"Egito",            color:"#dc2626", group:"G", stickers:makeTeam("EGY") },
  { id:"IRN", label:"Irã",              color:"#16a34a", group:"G", stickers:makeTeam("IRN") },
  { id:"NZL", label:"Nova Zelândia",    color:"#1d4ed8", group:"G", stickers:makeTeam("NZL") },
  // GRUPO H
  { id:"KSA", label:"Arábia Saudita",   color:"#16a34a", group:"H", stickers:makeTeam("KSA") },
  { id:"CPV", label:"Cabo Verde",       color:"#38bdf8", group:"H", stickers:makeTeam("CPV") },
  { id:"ESP", label:"Espanha",          color:"#dc2626", group:"H", stickers:makeTeam("ESP") },
  { id:"URU", label:"Uruguai",          color:"#60a5fa", group:"H", stickers:makeTeam("URU") },
  // GRUPO I
  { id:"FRA", label:"França",           color:"#60a5fa", group:"I", stickers:makeTeam("FRA") },
  { id:"IRQ", label:"Iraque",           color:"#16a34a", group:"I", stickers:makeTeam("IRQ") },
  { id:"NOR", label:"Noruega",          color:"#dc2626", group:"I", stickers:makeTeam("NOR") },
  { id:"SEN", label:"Senegal",          color:"#22c55e", group:"I", stickers:makeTeam("SEN") },
  // GRUPO J
  { id:"ALG", label:"Argélia",          color:"#16a34a", group:"J", stickers:makeTeam("ALG") },
  { id:"ARG", label:"Argentina",        color:"#38bdf8", group:"J", stickers:makeTeam("ARG") },
  { id:"SVN", label:"Eslovênia",        color:"#3b82f6", group:"J", stickers:makeTeam("SVN") },
  { id:"NGA", label:"Nigéria",          color:"#16a34a", group:"J", stickers:makeTeam("NGA") },
  // GRUPO K
  { id:"CMR", label:"Camarões",         color:"#22c55e", group:"K", stickers:makeTeam("CMR") },
  { id:"COL", label:"Colômbia",         color:"#facc15", group:"K", stickers:makeTeam("COL") },
  { id:"GRE", label:"Grécia",           color:"#3b82f6", group:"K", stickers:makeTeam("GRE") },
  { id:"POR", label:"Portugal",         color:"#dc2626", group:"K", stickers:makeTeam("POR") },
  // GRUPO L
  { id:"ENG", label:"Inglaterra",       color:"#dc2626", group:"L", stickers:makeTeam("ENG") },
  { id:"PAN", label:"Panamá",           color:"#f97316", group:"L", stickers:makeTeam("PAN") },
  { id:"ROU", label:"Romênia",          color:"#facc15", group:"L", stickers:makeTeam("ROU") },
  { id:"UKR", label:"Ucrânia",          color:"#facc15", group:"L", stickers:makeTeam("UKR") },
];

export const EXTRA_SECTION = {
  id:"EXTRA", label:"Extra Stickers (Legends) — fora do álbum", color:"#a855f7", group:null,
  stickers: Array.from({length:20}, (_,i) =>
    ["R","B","S","G"].map(v => `ES${i+1}${v}`)
  ).flat(),
};

export const ALL_DATA    = [...ALBUM_OFICIAL, EXTRA_SECTION];
export const TOTAL_OFICIAL = ALBUM_OFICIAL.reduce((a,s) => a + s.stickers.length, 0); // 980
