import{n as e}from"./chunk-DnJy8xQt.js";function t(e){return e.toString().padStart(2,`0`)}function n({rank:e,icon:n,name:r,score:i,stage:a,time:o},s=!1){let c=s?` arc-table-row-gold`:``,l=r===`???`?` arc-table-row-muted`:``,u=n?`<span class="arc-table-rank-icon" aria-hidden="true">${n}</span>`:``;return`
    <tr class="arc-table-row${c}${l}">
      <td class="arc-table-td arc-table-td-rank">
        <span class="arc-table-rank-num">${t(e)}</span>${u}
      </td>
      <td class="arc-table-td">${r}</td>
      <td class="arc-table-td arc-table-td-num">${i}</td>
      <td class="arc-table-td arc-table-td-num">${a}</td>
      <td class="arc-table-td arc-table-td-num">${o}</td>
    </tr>`}function r({variant:e=`cyan`,caption:t=`HIGH SCORES`,compact:r=!1}={}){return`
<div class="arc-table-wrapper arc-table-${e}" style="max-width:720px">
  <table class="arc-table arc-table-leaderboard${r?` arc-table-compact`:``}">
    <caption>${t}</caption>
    <thead>
      <tr>
        <th class="arc-table-th arc-table-th-rank">#</th>
        <th class="arc-table-th">PLAYER</th>
        <th class="arc-table-th arc-table-th-num">SCORE</th>
        <th class="arc-table-th arc-table-th-num">STAGE</th>
        <th class="arc-table-th arc-table-th-num">TIME</th>
      </tr>
    </thead>
    <tbody>${a.map((e,t)=>n(e,t===0)).join(``)}
    </tbody>
  </table>
</div>`}var i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{i={title:`Components/Table`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Tabella arcade ottimizzata per leaderboard e statistiche di gioco. Header con sfondo neon invertito, righe alternate con scanlines, prima riga gold pulsante e hover con bordo neon sinistro. CSS-only — nessun JS richiesto.`}}}},a=[{rank:1,icon:`🏆`,name:`ACE`,score:`999,999`,stage:`8-4`,time:`14:22`},{rank:2,icon:`🥈`,name:`SHADOW`,score:`842,500`,stage:`7-3`,time:`15:01`},{rank:3,icon:`🥉`,name:`BLAZE`,score:`731,200`,stage:`7-1`,time:`16:48`},{rank:4,icon:``,name:`NEO`,score:`620,000`,stage:`6-4`,time:`18:33`},{rank:5,icon:``,name:`VIPER`,score:`514,750`,stage:`6-2`,time:`19:12`},{rank:6,icon:``,name:`GHOST`,score:`408,100`,stage:`5-3`,time:`20:55`},{rank:7,icon:``,name:`PIXEL`,score:`312,450`,stage:`4-4`,time:`22:08`},{rank:8,icon:``,name:`ROGUE`,score:`208,300`,stage:`3-3`,time:`24:17`},{rank:9,icon:``,name:`NOVA`,score:`104,700`,stage:`2-4`,time:`26:42`},{rank:10,icon:``,name:`???`,score:`---,---`,stage:`-`,time:`--:--`}],o={name:`Leaderboard (default)`,render:()=>r({caption:`HIGH SCORES — ARCADE MODE`})},s={name:`Variant: green`,render:()=>r({variant:`green`,caption:`MISSION RANKINGS`})},c={name:`Variant: yellow`,render:()=>r({variant:`yellow`,caption:`COIN LEADERBOARD`})},l={name:`Variant: red`,render:()=>r({variant:`red`,caption:`ELIMINATION TABLE`})},u={name:`Variant: purple`,render:()=>r({variant:`purple`,caption:`WIZARD RANKINGS`})},d={name:`Modifier: compact`,render:()=>r({compact:!0,caption:`SPEED RUN RECORDS`})},f={name:`Stats table (no leaderboard modifier)`,render:()=>`
<div class="arc-table-wrapper arc-table-cyan" style="max-width:560px">
  <table class="arc-table">
    <caption>PLAYER STATISTICS</caption>
    <thead>
      <tr>
        <th class="arc-table-th">STAT</th>
        <th class="arc-table-th arc-table-th-num">VALUE</th>
        <th class="arc-table-th arc-table-th-num">BEST</th>
      </tr>
    </thead>
    <tbody>
      <tr class="arc-table-row">
        <td class="arc-table-td">Kills</td>
        <td class="arc-table-td arc-table-td-num">1,482</td>
        <td class="arc-table-td arc-table-td-num">2,048</td>
      </tr>
      <tr class="arc-table-row">
        <td class="arc-table-td">Deaths</td>
        <td class="arc-table-td arc-table-td-num">312</td>
        <td class="arc-table-td arc-table-td-num">—</td>
      </tr>
      <tr class="arc-table-row arc-table-row-active">
        <td class="arc-table-td">K/D Ratio</td>
        <td class="arc-table-td arc-table-td-num">4.75</td>
        <td class="arc-table-td arc-table-td-num">6.10</td>
      </tr>
      <tr class="arc-table-row">
        <td class="arc-table-td">Accuracy</td>
        <td class="arc-table-td arc-table-td-num">72.3%</td>
        <td class="arc-table-td arc-table-td-num">88.1%</td>
      </tr>
      <tr class="arc-table-row">
        <td class="arc-table-td">Avg. Score</td>
        <td class="arc-table-td arc-table-td-num">42,180</td>
        <td class="arc-table-td arc-table-td-num">99,500</td>
      </tr>
      <tr class="arc-table-row">
        <td class="arc-table-td">Play Time</td>
        <td class="arc-table-td arc-table-td-num">48h 22m</td>
        <td class="arc-table-td arc-table-td-num">—</td>
      </tr>
      <tr class="arc-table-row arc-table-row-muted">
        <td class="arc-table-td">Achievements</td>
        <td class="arc-table-td arc-table-td-num">12 / 50</td>
        <td class="arc-table-td arc-table-td-num">—</td>
      </tr>
    </tbody>
  </table>
</div>`},p={name:`All colour variants`,render:()=>`<div style="display:flex;flex-wrap:wrap;gap:24px;padding:16px">${[`cyan`,`green`,`yellow`,`red`,`purple`].map(e=>`
<div class="arc-table-wrapper arc-table-${e}" style="max-width:300px">
  <table class="arc-table arc-table-leaderboard">
    <caption>${e.toUpperCase()}</caption>
    <thead>
      <tr>
        <th class="arc-table-th arc-table-th-rank">#</th>
        <th class="arc-table-th">PLAYER</th>
        <th class="arc-table-th arc-table-th-num">SCORE</th>
      </tr>
    </thead>
    <tbody>
      ${a.slice(0,3).map((e,n)=>`
      <tr class="arc-table-row${n===0?` arc-table-row-gold`:``}">
        <td class="arc-table-td arc-table-td-rank">
          <span class="arc-table-rank-num">${t(e.rank)}</span>
          ${e.icon?`<span class="arc-table-rank-icon" aria-hidden="true">${e.icon}</span>`:``}
        </td>
        <td class="arc-table-td">${e.name}</td>
        <td class="arc-table-td arc-table-td-num">${e.score}</td>
      </tr>`).join(``)}
    </tbody>
  </table>
</div>`).join(``)}</div>`},m={name:`Current player highlighted`,render:()=>`
<div class="arc-table-wrapper arc-table-cyan" style="max-width:600px">
  <table class="arc-table arc-table-leaderboard">
    <caption>TOP PLAYERS — YOUR RANK: #5</caption>
    <thead>
      <tr>
        <th class="arc-table-th arc-table-th-rank">#</th>
        <th class="arc-table-th">PLAYER</th>
        <th class="arc-table-th arc-table-th-num">SCORE</th>
        <th class="arc-table-th arc-table-th-num">STAGE</th>
      </tr>
    </thead>
    <tbody>${a.slice(0,7).map((e,n)=>{let r=n===0,i=e.name===`VIPER`,a=r?` arc-table-row-gold`:``,o=i?` arc-table-row-active`:``,s=e.icon?`<span class="arc-table-rank-icon" aria-hidden="true">${e.icon}</span>`:``;return`
      <tr class="arc-table-row${a}${o}">
        <td class="arc-table-td arc-table-td-rank">
          <span class="arc-table-rank-num">${t(e.rank)}</span>${s}
        </td>
        <td class="arc-table-td">${e.name}${i?` ◀ YOU`:``}</td>
        <td class="arc-table-td arc-table-td-num">${e.score}</td>
        <td class="arc-table-td arc-table-td-num">${e.stage}</td>
      </tr>`}).join(``)}
    </tbody>
  </table>
</div>`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Leaderboard (default)',
  render: () => makeLeaderboard({
    caption: 'HIGH SCORES — ARCADE MODE'
  })
}`,...o.parameters?.docs?.source},description:{story:`Leaderboard completa con 10 entry, variante cyan (default).`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Variant: green',
  render: () => makeLeaderboard({
    variant: 'green',
    caption: 'MISSION RANKINGS'
  })
}`,...s.parameters?.docs?.source},description:{story:`Variante green — stile MISSION COMPLETE / progress screen.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Variant: yellow',
  render: () => makeLeaderboard({
    variant: 'yellow',
    caption: 'COIN LEADERBOARD'
  })
}`,...c.parameters?.docs?.source},description:{story:`Variante yellow — stile COINS / economy screen.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Variant: red',
  render: () => makeLeaderboard({
    variant: 'red',
    caption: 'ELIMINATION TABLE'
  })
}`,...l.parameters?.docs?.source},description:{story:`Variante red — stile DANGER / elimination screen.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Variant: purple',
  render: () => makeLeaderboard({
    variant: 'purple',
    caption: 'WIZARD RANKINGS'
  })
}`,...u.parameters?.docs?.source},description:{story:`Variante purple — stile MAGIC / special screen.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Modifier: compact',
  render: () => makeLeaderboard({
    compact: true,
    caption: 'SPEED RUN RECORDS'
  })
}`,...d.parameters?.docs?.source},description:{story:`Modificatore compact — densità alta, righe più sottili.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Stats table (no leaderboard modifier)',
  render: () => \`
<div class="arc-table-wrapper arc-table-cyan" style="max-width:560px">
  <table class="arc-table">
    <caption>PLAYER STATISTICS</caption>
    <thead>
      <tr>
        <th class="arc-table-th">STAT</th>
        <th class="arc-table-th arc-table-th-num">VALUE</th>
        <th class="arc-table-th arc-table-th-num">BEST</th>
      </tr>
    </thead>
    <tbody>
      <tr class="arc-table-row">
        <td class="arc-table-td">Kills</td>
        <td class="arc-table-td arc-table-td-num">1,482</td>
        <td class="arc-table-td arc-table-td-num">2,048</td>
      </tr>
      <tr class="arc-table-row">
        <td class="arc-table-td">Deaths</td>
        <td class="arc-table-td arc-table-td-num">312</td>
        <td class="arc-table-td arc-table-td-num">—</td>
      </tr>
      <tr class="arc-table-row arc-table-row-active">
        <td class="arc-table-td">K/D Ratio</td>
        <td class="arc-table-td arc-table-td-num">4.75</td>
        <td class="arc-table-td arc-table-td-num">6.10</td>
      </tr>
      <tr class="arc-table-row">
        <td class="arc-table-td">Accuracy</td>
        <td class="arc-table-td arc-table-td-num">72.3%</td>
        <td class="arc-table-td arc-table-td-num">88.1%</td>
      </tr>
      <tr class="arc-table-row">
        <td class="arc-table-td">Avg. Score</td>
        <td class="arc-table-td arc-table-td-num">42,180</td>
        <td class="arc-table-td arc-table-td-num">99,500</td>
      </tr>
      <tr class="arc-table-row">
        <td class="arc-table-td">Play Time</td>
        <td class="arc-table-td arc-table-td-num">48h 22m</td>
        <td class="arc-table-td arc-table-td-num">—</td>
      </tr>
      <tr class="arc-table-row arc-table-row-muted">
        <td class="arc-table-td">Achievements</td>
        <td class="arc-table-td arc-table-td-num">12 / 50</td>
        <td class="arc-table-td arc-table-td-num">—</td>
      </tr>
    </tbody>
  </table>
</div>\`
}`,...f.parameters?.docs?.source},description:{story:`Tabella statistiche generiche — senza modificatore leaderboard.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'All colour variants',
  render: () => {
    const variants = ['cyan', 'green', 'yellow', 'red', 'purple'];
    const mini = variants.map(v => \`
<div class="arc-table-wrapper arc-table-\${v}" style="max-width:300px">
  <table class="arc-table arc-table-leaderboard">
    <caption>\${v.toUpperCase()}</caption>
    <thead>
      <tr>
        <th class="arc-table-th arc-table-th-rank">#</th>
        <th class="arc-table-th">PLAYER</th>
        <th class="arc-table-th arc-table-th-num">SCORE</th>
      </tr>
    </thead>
    <tbody>
      \${LEADERBOARD.slice(0, 3).map((e, i) => \`
      <tr class="arc-table-row\${i === 0 ? ' arc-table-row-gold' : ''}">
        <td class="arc-table-td arc-table-td-rank">
          <span class="arc-table-rank-num">\${padRank(e.rank)}</span>
          \${e.icon ? \`<span class="arc-table-rank-icon" aria-hidden="true">\${e.icon}</span>\` : ''}
        </td>
        <td class="arc-table-td">\${e.name}</td>
        <td class="arc-table-td arc-table-td-num">\${e.score}</td>
      </tr>\`).join('')}
    </tbody>
  </table>
</div>\`).join('');
    return \`<div style="display:flex;flex-wrap:wrap;gap:24px;padding:16px">\${mini}</div>\`;
  }
}`,...p.parameters?.docs?.source},description:{story:`Tutte le varianti colore affiancate — overview rapida.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Current player highlighted',
  render: () => {
    const rows = LEADERBOARD.slice(0, 7).map((entry, i) => {
      const isGold = i === 0;
      const isCurrent = entry.name === 'VIPER';
      const goldClass = isGold ? ' arc-table-row-gold' : '';
      const activeClass = isCurrent ? ' arc-table-row-active' : '';
      const icon = entry.icon ? \`<span class="arc-table-rank-icon" aria-hidden="true">\${entry.icon}</span>\` : '';
      return \`
      <tr class="arc-table-row\${goldClass}\${activeClass}">
        <td class="arc-table-td arc-table-td-rank">
          <span class="arc-table-rank-num">\${padRank(entry.rank)}</span>\${icon}
        </td>
        <td class="arc-table-td">\${entry.name}\${isCurrent ? ' ◀ YOU' : ''}</td>
        <td class="arc-table-td arc-table-td-num">\${entry.score}</td>
        <td class="arc-table-td arc-table-td-num">\${entry.stage}</td>
      </tr>\`;
    }).join('');
    return \`
<div class="arc-table-wrapper arc-table-cyan" style="max-width:600px">
  <table class="arc-table arc-table-leaderboard">
    <caption>TOP PLAYERS — YOUR RANK: #5</caption>
    <thead>
      <tr>
        <th class="arc-table-th arc-table-th-rank">#</th>
        <th class="arc-table-th">PLAYER</th>
        <th class="arc-table-th arc-table-th-num">SCORE</th>
        <th class="arc-table-th arc-table-th-num">STAGE</th>
      </tr>
    </thead>
    <tbody>\${rows}
    </tbody>
  </table>
</div>\`;
  }
}`,...m.parameters?.docs?.source},description:{story:`Tabella con un giocatore corrente evidenziato (arc-table-row-active).`,...m.parameters?.docs?.description}}},h=[`Leaderboard`,`LeaderboardGreen`,`LeaderboardYellow`,`LeaderboardRed`,`LeaderboardPurple`,`Compact`,`Stats`,`AllVariants`,`WithCurrentPlayer`]}))();export{p as AllVariants,d as Compact,o as Leaderboard,s as LeaderboardGreen,u as LeaderboardPurple,l as LeaderboardRed,c as LeaderboardYellow,f as Stats,m as WithCurrentPlayer,h as __namedExportsOrder,i as default};