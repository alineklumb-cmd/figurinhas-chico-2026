import { useState, useMemo, useRef } from "react";

const CHICO_PHOTO = "data:image/jpeg;base64,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";

const makeTeam = (code) => Array.from({ length: 20 }, (_, i) => `${code}${i + 1}`);

// ─── 48 SELEÇÕES OFICIAIS FIFA COPA 2026 ─────────────────────────────────────
// Europa (16): GER AUT BEL BIH CZE CRO SCO ESP FRA ENG NOR NED POR SWE SUI TUR
// África (10): ALG CPV CIV EGY GHA MAR SEN RSA TUN CGO
// Ásia (9):    AUS IRN JPN JOR KOR QAT KSA UZB IRQ
// América Sul(6): ARG BRA COL ECU PAR URU
// CONCACAF (6): CAN MEX USA CUW HAI PAN
// Oceania (1): NZL
const ALBUM_OFICIAL = [
  // ── ESPECIAIS ──
  { id:"FWC", label:"Copa 2026 — Especiais", color:"#f59e0b", group:null,
    stickers:["FWC0","FWC1","FWC2","FWC3","FWC4","FWC5","FWC6","FWC7","FWC8","FWC9","FWC10","FWC11","FWC12","FWC13","FWC14","FWC15","FWC16","FWC17","FWC18","FWC19"] },
  // ── GRUPO A ──
  { id:"RSA", label:"África do Sul",    color:"#22c55e", group:"A", stickers:makeTeam("RSA") },
  { id:"MEX", label:"México",           color:"#16a34a", group:"A", stickers:makeTeam("MEX") },
  { id:"KOR", label:"Coreia do Sul",    color:"#ef4444", group:"A", stickers:makeTeam("KOR") },
  { id:"CZE", label:"Rep. Tcheca",      color:"#60a5fa", group:"A", stickers:makeTeam("CZE") },
  // ── GRUPO B ──
  { id:"USA", label:"Estados Unidos",   color:"#dc2626", group:"B", stickers:makeTeam("USA") },
  { id:"JPN", label:"Japão",            color:"#3b82f6", group:"B", stickers:makeTeam("JPN") },
  { id:"CPV", label:"Cabo Verde",       color:"#38bdf8", group:"B", stickers:makeTeam("CPV") },
  { id:"URU", label:"Uruguai",          color:"#60a5fa", group:"B", stickers:makeTeam("URU") },
  // ── GRUPO C ──
  { id:"GER", label:"Alemanha",         color:"#d4d4d4", group:"C", stickers:makeTeam("GER") },
  { id:"ECU", label:"Equador",          color:"#facc15", group:"C", stickers:makeTeam("ECU") },
  { id:"KSA", label:"Arábia Saudita",   color:"#16a34a", group:"C", stickers:makeTeam("KSA") },
  { id:"CRO", label:"Croácia",          color:"#ef4444", group:"C", stickers:makeTeam("CRO") },
  // ── GRUPO D ──
  { id:"BRA", label:"Brasil",           color:"#fde047", group:"D", stickers:makeTeam("BRA") },
  { id:"SCO", label:"Escócia",          color:"#3b82f6", group:"D", stickers:makeTeam("SCO") },
  { id:"HAI", label:"Haiti",            color:"#1d4ed8", group:"D", stickers:makeTeam("HAI") },
  { id:"MAR", label:"Marrocos",         color:"#16a34a", group:"D", stickers:makeTeam("MAR") },
  // ── GRUPO E ──
  { id:"ESP", label:"Espanha",          color:"#dc2626", group:"E", stickers:makeTeam("ESP") },
  { id:"AUS", label:"Austrália",        color:"#fbbf24", group:"E", stickers:makeTeam("AUS") },
  { id:"CGO", label:"Congo DR",         color:"#facc15", group:"E", stickers:makeTeam("CGO") },
  { id:"BEL", label:"Bélgica",          color:"#ef4444", group:"E", stickers:makeTeam("BEL") },
  // ── GRUPO F ──
  { id:"POR", label:"Portugal",         color:"#dc2626", group:"F", stickers:makeTeam("POR") },
  { id:"ARG", label:"Argentina",        color:"#38bdf8", group:"F", stickers:makeTeam("ARG") },
  { id:"NZL", label:"Nova Zelândia",    color:"#1d4ed8", group:"F", stickers:makeTeam("NZL") },
  { id:"IRN", label:"Irã",              color:"#16a34a", group:"F", stickers:makeTeam("IRN") },
  // ── GRUPO G ──
  { id:"FRA", label:"França",           color:"#60a5fa", group:"G", stickers:makeTeam("FRA") },
  { id:"IRQ", label:"Iraque",           color:"#16a34a", group:"G", stickers:makeTeam("IRQ") },
  { id:"NOR", label:"Noruega",          color:"#dc2626", group:"G", stickers:makeTeam("NOR") },
  { id:"SEN", label:"Senegal",          color:"#22c55e", group:"G", stickers:makeTeam("SEN") },
  // ── GRUPO H ──
  { id:"NED", label:"Holanda",          color:"#f97316", group:"H", stickers:makeTeam("NED") },
  { id:"QAT", label:"Catar",            color:"#8b5cf6", group:"H", stickers:makeTeam("QAT") },
  { id:"COL", label:"Colômbia",         color:"#facc15", group:"H", stickers:makeTeam("COL") },
  { id:"GRE", label:"Grécia",           color:"#3b82f6", group:"H", stickers:makeTeam("GRE") },
  // ── GRUPO I ──
  { id:"ENG", label:"Inglaterra",       color:"#dc2626", group:"I", stickers:makeTeam("ENG") },
  { id:"PAR", label:"Paraguai",         color:"#f97316", group:"I", stickers:makeTeam("PAR") },
  { id:"TUN", label:"Tunísia",          color:"#dc2626", group:"I", stickers:makeTeam("TUN") },
  { id:"JOR", label:"Jordânia",         color:"#16a34a", group:"I", stickers:makeTeam("JOR") },
  // ── GRUPO J ──
  { id:"ALG", label:"Argélia",          color:"#16a34a", group:"J", stickers:makeTeam("ALG") },
  { id:"SUI", label:"Suíça",            color:"#f87171", group:"J", stickers:makeTeam("SUI") },
  { id:"GHA", label:"Gana",             color:"#d4d4d4", group:"J", stickers:makeTeam("GHA") },
  { id:"CUW", label:"Curaçao",          color:"#38bdf8", group:"J", stickers:makeTeam("CUW") },
  // ── GRUPO K ──
  { id:"AUT", label:"Áustria",          color:"#ef4444", group:"K", stickers:makeTeam("AUT") },
  { id:"EGY", label:"Egito",            color:"#dc2626", group:"K", stickers:makeTeam("EGY") },
  { id:"CAN", label:"Canadá",           color:"#ef4444", group:"K", stickers:makeTeam("CAN") },
  { id:"UZB", label:"Uzbequistão",      color:"#38bdf8", group:"K", stickers:makeTeam("UZB") },
  // ── GRUPO L ──
  { id:"BIH", label:"Bósnia e Herz.",   color:"#fbbf24", group:"L", stickers:makeTeam("BIH") },
  { id:"SWE", label:"Suécia",           color:"#facc15", group:"L", stickers:makeTeam("SWE") },
  { id:"TUR", label:"Turquia",          color:"#ef4444", group:"L", stickers:makeTeam("TUR") },
  { id:"PAN", label:"Panamá",           color:"#f97316", group:"L", stickers:makeTeam("PAN") },
];

const EXTRA_SECTION = {
  id:"EXTRA", label:"Extra Stickers (Legends) — fora do álbum", color:"#a855f7", group:null,
  stickers: Array.from({length:20}, (_,i) => ["R","B","S","G"].map(v => `ES${i+1}${v}`)).flat(),
};

const ALL_DATA      = [...ALBUM_OFICIAL, EXTRA_SECTION];
const TOTAL_OFICIAL = ALBUM_OFICIAL.reduce((a,s) => a + s.stickers.length, 0);

function loadState() {
  try { const r = localStorage.getItem("copa26_v4"); return r ? JSON.parse(r) : {}; } catch { return {}; }
}
function saveState(s) {
  try { localStorage.setItem("copa26_v4", JSON.stringify(s)); } catch {}
}

// ─── CHIP ─────────────────────────────────────────────────────────────────────
function StickerChip({ code, count, onAction, locked }) {
  const pressRef = useRef(null);
  const status = count <= 0 ? "m" : count === 1 ? "h" : "r";
  const C = {
    m: { bg:"#1e293b", bd:"#334155", tx:"#64748b" },
    h: { bg:"#14532d", bd:"#22c55e", tx:"#86efac" },
    r: { bg:"#78350f", bd:"#f59e0b", tx:"#fde68a" },
  }[status];

  const start = () => {
    if (locked) return;
    pressRef.current = setTimeout(() => { pressRef.current = null; onAction("long"); }, 500);
  };
  const end = (e) => {
    e.preventDefault();
    if (locked) return;
    if (pressRef.current) { clearTimeout(pressRef.current); pressRef.current = null; onAction("tap"); }
  };

  return (
    <div onTouchStart={start} onTouchEnd={end}
      style={{ background:C.bg, border:"2px solid "+C.bd, borderRadius:8,
        padding:"5px 1px", display:"flex", alignItems:"center", justifyContent:"center",
        cursor: locked ? "default" : "pointer",
        userSelect:"none", position:"relative", minHeight:40,
        opacity: locked && status === "m" ? 0.5 : 1,
        boxShadow: status==="h" ? "0 0 6px "+C.bd+"44" : "none" }}>
      {count > 1 && (
        <span style={{ position:"absolute", top:-6, right:-5, background:"#f59e0b", color:"#000",
          borderRadius:"50%", width:15, height:15, fontSize:8, fontWeight:700,
          display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"monospace" }}>×{count}</span>
      )}
      <span style={{ fontSize:9, fontWeight:700, color:C.tx, fontFamily:"'Courier New',monospace", textAlign:"center" }}>{code}</span>
    </div>
  );
}

// ─── SEÇÃO ────────────────────────────────────────────────────────────────────
function Section({ section, stickers, onUpdate, search, filter, locked }) {
  const [open, setOpen] = useState(false);
  const visible = useMemo(() => section.stickers.filter(c => {
    if (search && !c.toUpperCase().includes(search.toUpperCase())) return false;
    const n = stickers[c] || 0;
    if (filter === "tenho"  && n === 0) return false;
    if (filter === "faltam" && n > 0)   return false;
    if (filter === "repet"  && n < 2)   return false;
    return true;
  }), [section.stickers, stickers, search, filter]);

  if (!visible.length && (search || filter !== "todas")) return null;
  const have     = section.stickers.filter(c => (stickers[c]||0) > 0).length;
  const total    = section.stickers.length;
  const complete = have === total;

  return (
    <div style={{ marginBottom:9 }}>
      <div onClick={() => setOpen(p=>!p)}
        style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
          padding:"8px 12px", background:"#0f172a",
          borderLeft:"4px solid "+section.color, borderRadius:10, cursor:"pointer" }}>
        <div style={{ display:"flex", alignItems:"center", gap:6, minWidth:0 }}>
          <span style={{ fontSize:11, color:"#94a3b8", flexShrink:0, display:"inline-block",
            transition:"transform 0.2s", transform:open?"rotate(0deg)":"rotate(-90deg)" }}>▼</span>
          {section.group && <span style={{ fontSize:9, background:"#1e293b", color:"#64748b",
            borderRadius:4, padding:"1px 4px", fontWeight:700, flexShrink:0 }}>G{section.group}</span>}
          <span style={{ fontSize:11, fontWeight:800, color:section.color,
            fontFamily:"'Courier New',monospace", flexShrink:0 }}>{section.id}</span>
          <span style={{ fontSize:10, color:"#94a3b8", overflow:"hidden",
            textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{section.label}</span>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:5, flexShrink:0 }}>
          {complete && <span style={{ fontSize:11 }}>✅</span>}
          <span style={{ fontSize:11, fontWeight:700, color:complete?"#22c55e":"#64748b" }}>{have}/{total}</span>
          <div style={{ width:30, height:4, background:"#1e293b", borderRadius:2, overflow:"hidden" }}>
            <div style={{ width:(have/total*100)+"%", height:"100%", background:section.color, borderRadius:2 }}/>
          </div>
        </div>
      </div>
      {open && (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:5, padding:"7px 2px 2px" }}>
          {(search || filter !== "todas" ? visible : section.stickers).map(c => (
            <StickerChip key={c} code={c} count={stickers[c]||0}
              onAction={type => onUpdate(c, type)} locked={locked} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [stickers, setStickers] = useState(loadState);
  const [search,   setSearch]   = useState("");
  const [filter,   setFilter]   = useState("todas");
  const [tab,      setTab]      = useState("album");
  const [toast,    setToast]    = useState(null);
  const [locked,   setLocked]   = useState(true); // começa bloqueado

  const stats = useMemo(() => {
    const all  = ALBUM_OFICIAL.flatMap(s => s.stickers);
    const have = all.filter(c => (stickers[c]||0) > 0).length;
    const rep  = all.filter(c => (stickers[c]||0) > 1).reduce((a,c) => a+(stickers[c]-1), 0);
    return { have, missing: TOTAL_OFICIAL-have, repeat:rep, pct: Math.round(have/TOTAL_OFICIAL*100) };
  }, [stickers]);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 1400); };

  const handleUpdate = (code, type) => {
    if (locked) return;
    setStickers(prev => {
      const n    = prev[code] || 0;
      const next = type === "tap" ? n + 1 : 0;
      const upd  = { ...prev, [code]: next };
      saveState(upd);
      if (type === "long")  showToast(code + " removida");
      else if (next === 1)  showToast("✓ " + code + " colada!");
      else                  showToast(code + " repetida ×" + next);
      return upd;
    });
  };

  const toggleLock = () => {
    setLocked(p => {
      showToast(!p ? "🔒 Álbum bloqueado" : "✏️ Modo edição ativado");
      return !p;
    });
  };

  const teamStats = useMemo(() =>
    ALBUM_OFICIAL.filter(s => s.group).map(s => {
      const have = s.stickers.filter(c => (stickers[c]||0) > 0).length;
      return { ...s, have, pct: Math.round(have/s.stickers.length*100) };
    }).sort((a,b) => b.pct - a.pct),
  [stickers]);

  const FILTERS = [{id:"todas",l:"Todas"},{id:"tenho",l:"Tenho"},{id:"faltam",l:"Faltam"},{id:"repet",l:"Repet."}];

  return (
    <div style={{ minHeight:"100vh", background:"#020617", fontFamily:"'Segoe UI',system-ui,sans-serif",
      color:"#e2e8f0", paddingBottom:72 }}>

      {/* HEADER */}
      <div style={{ background:"linear-gradient(180deg,#0c1a3a 0%,#020617 100%)",
        borderBottom:"1px solid #1e3a5f", padding:"12px 12px 0", position:"sticky", top:0, zIndex:10 }}>

        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <img src={CHICO_PHOTO} alt="Chico"
              style={{ width:44, height:44, borderRadius:"50%", objectFit:"cover", objectPosition:"top",
                border:"2px solid #fde047", flexShrink:0 }}/>
            <div>
              <div style={{ fontSize:14, fontWeight:800, color:"#fde047" }}>Figurinhas do Chico 2026</div>
              <div style={{ fontSize:9, color:"#475569" }}>🏆 48 seleções · {TOTAL_OFICIAL} figurinhas oficiais</div>
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:4 }}>
            <div style={{ fontSize:20, fontWeight:900, color:"#6366f1", fontFamily:"monospace" }}>{stats.pct}%</div>
            {/* BOTÃO DE BLOQUEIO */}
            <button onClick={toggleLock}
              style={{ display:"flex", alignItems:"center", gap:4,
                background: locked ? "#1e293b" : "#14532d",
                border: locked ? "1px solid #334155" : "1px solid #22c55e",
                borderRadius:8, padding:"4px 10px", cursor:"pointer",
                color: locked ? "#64748b" : "#86efac",
                fontSize:11, fontWeight:700, transition:"all 0.2s" }}>
              {locked ? "🔒 Bloqueado" : "✏️ Editando"}
            </button>
          </div>
        </div>

        {/* AVISO MODO EDIÇÃO */}
        {!locked && (
          <div style={{ background:"#14532d", border:"1px solid #22c55e", borderRadius:8,
            padding:"5px 10px", marginBottom:8, fontSize:10, color:"#86efac",
            display:"flex", alignItems:"center", gap:6 }}>
            ✏️ <span>Modo edição ativo — toque para colar · segure para remover</span>
          </div>
        )}

        <div style={{ height:5, background:"#1e293b", borderRadius:3, marginBottom:8, overflow:"hidden" }}>
          <div style={{ width:stats.pct+"%", height:"100%",
            background:"linear-gradient(90deg,#6366f1,#22c55e)", borderRadius:3, transition:"width 0.4s" }}/>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:5, marginBottom:8 }}>
          {[{v:stats.have,l:"Tenho",c:"#22c55e"},{v:stats.missing,l:"Faltam",c:"#ef4444"},{v:stats.repeat,l:"Repetidas",c:"#f59e0b"}].map(s=>(
            <div key={s.l} style={{ background:"#0f172a", borderRadius:8, padding:"5px 0", textAlign:"center" }}>
              <div style={{ fontSize:16, fontWeight:800, color:s.c, fontFamily:"monospace" }}>{s.v}</div>
              <div style={{ fontSize:8, color:"#64748b", textTransform:"uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{ display:"flex", gap:0, marginBottom:8, background:"#0f172a", borderRadius:9, padding:3 }}>
          {[["album","📋 Álbum"],["stats","📊 Seleções"]].map(([id,lbl]) => (
            <button key={id} onClick={() => setTab(id)} style={{ flex:1, padding:"6px 0", border:"none",
              cursor:"pointer", borderRadius:7, fontWeight:700, fontSize:11,
              background:tab===id?"#6366f1":"transparent", color:tab===id?"#fff":"#64748b" }}>{lbl}</button>
          ))}
        </div>

        {tab === "album" && <>
          <div style={{ position:"relative", marginBottom:7 }}>
            <span style={{ position:"absolute", left:9, top:"50%", transform:"translateY(-50%)", color:"#475569", fontSize:12 }}>🔍</span>
            <input value={search} onChange={e=>setSearch(e.target.value)}
              placeholder="ex: BRA1, FRA5, FWC3..."
              style={{ width:"100%", boxSizing:"border-box", background:"#0f172a", border:"1px solid #334155",
                borderRadius:9, padding:"8px 28px 8px 28px", color:"#e2e8f0", fontSize:12,
                outline:"none", fontFamily:"'Courier New',monospace" }}/>
            {search && <span onClick={()=>setSearch("")}
              style={{ position:"absolute", right:9, top:"50%", transform:"translateY(-50%)",
                color:"#64748b", cursor:"pointer", fontSize:15 }}>×</span>}
          </div>
          <div style={{ display:"flex", gap:5, paddingBottom:9 }}>
            {FILTERS.map(f => (
              <button key={f.id} onClick={()=>setFilter(f.id)} style={{ flex:1, padding:"6px 0",
                borderRadius:8, border:"none", cursor:"pointer", fontWeight:700, fontSize:10,
                background:filter===f.id?"#6366f1":"#1e293b", color:filter===f.id?"#fff":"#64748b" }}>{f.l}</button>
            ))}
          </div>
        </>}
      </div>

      {/* BODY */}
      <div style={{ padding:"9px 9px 0" }}>
        {tab === "album" && ALL_DATA.map(s => (
          <Section key={s.id} section={s} stickers={stickers}
            onUpdate={handleUpdate} search={search} filter={filter} locked={locked}/>
        ))}
        {tab === "stats" && (
          <div>
            <div style={{ fontSize:11, fontWeight:700, color:"#475569", marginBottom:8,
              textTransform:"uppercase", letterSpacing:0.5 }}>
              {teamStats.filter(t=>t.pct===100).length}/48 seleções completas
            </div>
            {teamStats.map(s => (
              <div key={s.id} style={{ display:"flex", alignItems:"center", gap:7, marginBottom:6,
                background:"#0f172a", borderRadius:9, padding:"7px 10px" }}>
                <span style={{ fontSize:9, background:"#1e293b", color:"#64748b", borderRadius:3,
                  padding:"1px 4px", fontWeight:700, minWidth:22, textAlign:"center", flexShrink:0 }}>G{s.group}</span>
                <span style={{ fontSize:11, fontWeight:800, color:s.color,
                  fontFamily:"'Courier New',monospace", minWidth:36, flexShrink:0 }}>{s.id}</span>
                <span style={{ fontSize:10, color:"#94a3b8", flex:1, overflow:"hidden",
                  textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{s.label}</span>
                <div style={{ width:50, height:5, background:"#1e293b", borderRadius:2, overflow:"hidden", flexShrink:0 }}>
                  <div style={{ width:s.pct+"%", height:"100%", background:s.color, borderRadius:2 }}/>
                </div>
                <span style={{ fontSize:10, color:s.pct===100?"#22c55e":"#64748b", fontWeight:700,
                  minWidth:30, textAlign:"right", flexShrink:0 }}>
                  {s.pct===100?"✅":s.have+"/20"}
                </span>
              </div>
            ))}
            <div style={{ marginTop:12, padding:"10px 12px", background:"#0f172a", borderRadius:9 }}>
              <div style={{ fontSize:10, color:"#475569", marginBottom:4, fontWeight:700, textTransform:"uppercase" }}>Extra Stickers (Legends)</div>
              {(() => { const es = EXTRA_SECTION.stickers; const h = es.filter(c=>(stickers[c]||0)>0).length;
                return <div style={{ fontSize:12, color:"#a855f7" }}>{h}/{es.length} coletadas (não contam para o álbum)</div>; })()}
            </div>
          </div>
        )}
      </div>

      {/* RODAPÉ */}
      <div style={{ position:"fixed", bottom:0, left:0, right:0, background:"#0c1422",
        borderTop:"1px solid #1e293b", padding:"7px 14px",
        display:"flex", justifyContent:"center", gap:14, alignItems:"center" }}>
        {locked
          ? <span style={{ fontSize:10, color:"#475569" }}>🔒 Bloqueado — toque em <b style={{color:"#64748b"}}>Bloqueado</b> para editar</span>
          : [
              {bg:"#1e293b",bd:"#334155",l:"Falta"},
              {bg:"#14532d",bd:"#22c55e",l:"Tenho"},
              {bg:"#78350f",bd:"#f59e0b",l:"Repetida"}
            ].map(x=>(
              <div key={x.l} style={{ display:"flex", alignItems:"center", gap:4 }}>
                <div style={{ width:11, height:11, background:x.bg, border:"2px solid "+x.bd, borderRadius:3 }}/>
                <span style={{ fontSize:9, color:"#64748b" }}>{x.l}</span>
              </div>
            ))
        }
      </div>

      {toast && (
        <div style={{ position:"fixed", bottom:48, left:"50%", transform:"translateX(-50%)",
          background:"#1e293b", border:"1px solid #334155", borderRadius:20,
          padding:"6px 16px", fontSize:11, color:"#e2e8f0",
          boxShadow:"0 4px 20px #00000088", whiteSpace:"nowrap", zIndex:100,
          animation:"fadeIn 0.2s ease" }}>{toast}</div>
      )}

      <style>{`
        @keyframes fadeIn{from{opacity:0;transform:translateX(-50%) translateY(8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
        *{-webkit-tap-highlight-color:transparent}
        input::placeholder{color:#475569}
        ::-webkit-scrollbar{display:none}
      `}</style>
    </div>
  );
}
