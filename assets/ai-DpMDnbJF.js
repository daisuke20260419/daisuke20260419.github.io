import{y as e}from"./page-video-CNTo0f9Z.js";import{t}from"./deep-mOkU-bvI.js";var n=e((()=>{(()=>{let e=e=>document.getElementById(e),t=e(`aiops`);if(!t)return;let n=matchMedia(`(prefers-reduced-motion: reduce)`).matches,r=e(`aiops-gpus`);for(let e=0;e<8;e++){let t=document.createElement(`div`);t.className=`aip__gpu`,t.innerHTML=`GPU ${e}<b>9${e%2?1:4}%</b>`,r.appendChild(t)}let i=[...r.children],a=[`回答 ── EP.QUIZ ── 0.8s ── 正解`,`予測 ── YES に 300pt`,`コメント ── 「この作画はやばい」`,`回答 ── MANGA ── 1.4s ── 正解`,`視聴 ── 広告クイズ 完走`,`回答 ── VOICE ── 2.1s ── 不正解`,`コレクション ── カード公開`,`参加 ── 週次リーグ ── 昇格戦`],o=[[`QUIZ`,`『必殺技の初出』系 ── 120 問 生成`],[`演出`,`タグ「引きの構図」人気度 +0.4%`],[`ANIME`,`カット生成 ── 24fps × 3.2s`],[`較正`,`EP.QUIZ 難易度帯 62 → 64`],[`ODDS`,`劇場版・初週 50 億 ── YES 64% に更新`],[`AD`,`対象抽出 ── 20 代・少年漫画ファン 3.1 万人`],[`QUIZ`,`広告クイズ ── 新規 40 問 生成`],[`演出`,`「静→動の緩急」相関 0.62 を検出`]],s=()=>new Date().toLocaleTimeString(`ja-JP`,{hour12:!1,timeZone:`Asia/Tokyo`}),c=localStorage.getItem(`verion-bp-lang`)===`en`,l=2412086,u=128431,d=0,f=0,p=[],m=[],h=(e,t)=>{e.setAttribute(`points`,t.map((e,t)=>`${t/27*220},${42-e*38}`).join(` `))};for(let e=0;e<28;e++)p.push(.1+e/28*.7+Math.sin(e*1.7)*.04),m.push(.15+e/28*.65+Math.sin(e*2.3)*.03);let g=[],_=()=>{if(g.length||n)return;let t=Date.now();g=[setInterval(()=>{e(`aiops-clock`).textContent=s()+` JST`;let n=11603553+Math.floor((Date.now()-t)/1e3),r=Math.floor(n/86400),i=String(Math.floor(n%86400/3600)).padStart(2,`0`),a=String(Math.floor(n%3600/60)).padStart(2,`0`),o=String(n%60).padStart(2,`0`);e(`aiops-up`).textContent=`${r}${c?`d`:`日`} ${i}:${a}:${o}`},1e3),setInterval(()=>{let t=document.createElement(`p`);t.innerHTML=`<b>${s()}</b>${a[d++%a.length]}`;let n=e(`aiops-feed`);for(n.prepend(t);n.children.length>8;)n.removeChild(n.lastChild);e(`aiops-epm`).textContent=(1420+Math.floor(Math.random()*160)).toLocaleString()+(c?` evts/min`:` 件/分`)},700),setInterval(()=>{l+=2+Math.floor(Math.random()*5),e(`aiops-rec`).innerHTML=l.toLocaleString()+`<small>RECORDS</small>`},500),setInterval(()=>{let t=i[Math.floor(Math.random()*8)],n=84+Math.floor(Math.random()*15);t.querySelector(`b`).textContent=n+`%`,t.classList.toggle(`is-hot`,n>93),e(`aiops-util`).textContent=`UTIL `+(88+Math.floor(Math.random()*8))+`%`;let r=240+Math.floor(Math.random()*160);e(`aiops-queuen`).textContent=r,e(`aiops-queue`).style.width=Math.min(96,r/4.4)+`%`},900),setInterval(()=>{let[t,n]=o[f++%o.length],r=document.createElement(`p`);r.innerHTML=`<em>${s()}</em><b>${t}</b>${n}`;let i=e(`aiops-log`);for(i.prepend(r);i.children.length>9;)i.removeChild(i.lastChild);t===`QUIZ`&&(u+=40+Math.floor(Math.random()*90),e(`aiops-sq`).textContent=u.toLocaleString()),e(`aiops-sr`).textContent=(l/1e6).toFixed(2)+`M`},1200),setInterval(()=>{p.shift(),p.push(Math.min(.92,p[p.length-1]+.004+Math.random()*.02)),m.shift(),m.push(Math.min(.92,m[m.length-1]+.003+Math.random()*.015)),h(e(`aiops-sp1`),p),h(e(`aiops-sp2`),m)},800)]},v=()=>{g.forEach(clearInterval),g=[]};h(e(`aiops-sp1`),p),h(e(`aiops-sp2`),m),e(`aiops-clock`).textContent=s()+` JST`,new IntersectionObserver(e=>e.forEach(e=>e.isIntersecting?_():v()),{threshold:.15}).observe(t)})()})),r=e((()=>{var e=document.getElementById(`ai-svg`),t=document.getElementById(`ai-chip`),n=document.getElementById(`ai-caption`),r=document.getElementById(`ai-sub`),i=document.getElementById(`aistory`),a=1200,o=640,s=512,c=(e,t,n)=>Math.min(1,Math.max(0,(e-t)/(n-t))),l=e=>e*e*(3-2*e),u=e=>Math.min(1,Math.max(0,e));e.innerHTML=`
    <rect width="${a}" height="${o}" fill="#0b0b10"/>
    <g class="ai-stars">${Array.from({length:24},(e,t)=>`<circle cx="${t*181%a}" cy="${34+t*89%300}" r="${1+t%3*.5}" fill="#e6c98a" opacity="${.12+t%4*.06}"/>`).join(``)}</g>
    <line x1="0" y1="${s}" x2="${a}" y2="${s}" stroke="#2c2c35" stroke-width="2.5"/>

    <!-- 幕1: GPU ラック -->
    <g class="ai-b1" opacity="0">
      ${[0,1,2].map(e=>`
      <g transform="translate(${420+e*130} ${s})">
        <rect x="-50" y="-230" width="100" height="230" rx="6" fill="#101016" stroke="#2c2c35" stroke-width="2.4"/>
        ${[0,1,2,3,4,5].map(t=>`
        <g class="ai-gpu ai-gpu-${e}-${t}" opacity="0">
          <rect x="-40" y="${-214+t*36}" width="80" height="26" rx="3" fill="#15151b" stroke="#3a3a44" stroke-width="1.4"/>
          <circle cx="28" cy="${-201+t*36}" r="3.4" fill="#7fd6a4"/>
          <line x1="-30" y1="${-201+t*36}" x2="8" y2="${-201+t*36}" stroke="#26262e" stroke-width="3"/>
        </g>`).join(``)}
      </g>`).join(``)}
      <text x="600" y="${s-262}" text-anchor="middle" font-size="15" fill="#e6c98a">GPU ── 数千万〜億円単位の投資</text>
    </g>

    <!-- 幕2: 独自 AI コア -->
    <g class="ai-b2" opacity="0">
      <g class="ai-core" transform="translate(600 300)">
        <circle r="74" fill="none" stroke="#c9a35c" stroke-width="3"/>
        <circle class="ai-ring" r="96" fill="none" stroke="rgba(201,163,92,0.4)" stroke-width="1.6" stroke-dasharray="10 12"/>
        <text y="-6" text-anchor="middle" font-size="17" font-weight="800" fill="#e6c98a">VERION AI</text>
        <text y="18" text-anchor="middle" font-size="10.5" fill="#9a9aa3">自由な独自モデル</text>
      </g>
      <g class="ai-out1" opacity="0" transform="translate(260 300)">
        <rect x="-130" y="-40" width="260" height="80" rx="9" fill="#101016" stroke="#2c2c35" stroke-width="2"/>
        <text y="-8" text-anchor="middle" font-size="14.5" font-weight="700" fill="#f2f2f4">クイズ自動生成</text>
        <text y="16" text-anchor="middle" font-size="10" fill="#9a9aa3">24 時間・全 IP・多言語</text>
      </g>
      <g class="ai-out2" opacity="0" transform="translate(940 300)">
        <rect x="-130" y="-40" width="260" height="80" rx="9" fill="#101016" stroke="#2c2c35" stroke-width="2"/>
        <text y="-8" text-anchor="middle" font-size="14.5" font-weight="700" fill="#f2f2f4">アニメ生成</text>
        <text y="16" text-anchor="middle" font-size="10" fill="#9a9aa3">漫画原作 → 映像へ</text>
      </g>
      <path class="ai-l1" d="M 522 300 L 396 300" stroke="#c9a35c" stroke-width="2.4" opacity="0"/>
      <path class="ai-l2" d="M 678 300 L 804 300" stroke="#c9a35c" stroke-width="2.4" opacity="0"/>
    </g>

    <!-- 幕3: 遊び → 演出人気 DB -->
    <g class="ai-b3" opacity="0">
      ${[0,1,2,3,4,5,6,7].map(e=>`
      <g class="ai-user ai-user-${e}" opacity="0" transform="translate(${150+e%4*90} ${170+(e/4|0)*110})">
        <circle cy="-11" r="9" fill="#c9d1e0"/>
        <path d="M-11 14 C-11 -4 11 -4 11 14 Z" fill="#8b94a7"/>
      </g>`).join(``)}
      <text x="285" y="420" text-anchor="middle" font-size="12.5" fill="#9a9aa3">クイズの熱量・予測・カードの人気</text>
      ${[0,1,2].map(e=>`<circle class="ai-data ai-data-${e}" r="4.5" fill="#7fd6a4" opacity="0"/>`).join(``)}
      <g transform="translate(800 300)">
        <path d="M-110 -80 A 110 26 0 0 0 110 -80 L 110 80 A 110 26 0 0 1 -110 80 Z" fill="#101016" stroke="#c9a35c" stroke-width="2.6"/>
        <ellipse cx="0" cy="-80" rx="110" ry="26" fill="#14120c" stroke="#c9a35c" stroke-width="2.6"/>
        <rect class="ai-dbfill" x="-108" y="78" width="216" height="0" fill="rgba(127,214,164,0.18)"/>
        <text y="-4" text-anchor="middle" font-size="15.5" font-weight="800" fill="#e6c98a">演出の人気 DB</text>
        <text y="20" text-anchor="middle" font-size="10.5" fill="#9a9aa3">どのシーン・どの演出がウケるか</text>
        <text class="ai-dbpct" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#7fd6a4"></text>
      </g>
    </g>

    <!-- 幕4: 漫画 → 理論設計 → アニメ -->
    <g class="ai-b4" opacity="0">
      ${[0,1,2].map(e=>`
      <g class="ai-manga ai-manga-${e}" opacity="0" transform="translate(${170+e*34} ${292-e*10}) rotate(${-6+e*5})">
        <rect x="-52" y="-70" width="104" height="140" rx="4" fill="#f4ecd8"/>
        <line x1="-34" y1="-42" x2="34" y2="-42" stroke="#b9ad92" stroke-width="4"/>
        <rect x="-34" y="-26" width="68" height="44" fill="none" stroke="#b9ad92" stroke-width="2.5"/>
        <line x1="-34" y1="34" x2="20" y2="34" stroke="#cfc4a9" stroke-width="4"/>
      </g>`).join(``)}
      <text x="222" y="420" text-anchor="middle" font-size="12.5" fill="#9a9aa3">インディーズ・旧作漫画 ── 常に生まれる原作</text>
      <path class="ai-flow1" d="M 320 300 C 400 300 430 300 470 300" stroke="#c9a35c" stroke-width="2.4" opacity="0"/>
      <g class="ai-brain" opacity="0" transform="translate(590 300)">
        <circle r="60" fill="none" stroke="#c9a35c" stroke-width="2.8"/>
        <text y="-4" text-anchor="middle" font-size="13.5" font-weight="800" fill="#e6c98a">VERION AI</text>
        <text y="16" text-anchor="middle" font-size="9.5" fill="#7fd6a4">× 演出 DB</text>
      </g>
      <path class="ai-flow2" d="M 655 300 C 720 300 750 300 790 300" stroke="#c9a35c" stroke-width="2.4" opacity="0"/>
      <g class="ai-film" opacity="0" transform="translate(950 300)">
        <rect x="-120" y="-84" width="240" height="168" rx="7" fill="#0d0d12" stroke="#e6c98a" stroke-width="3"/>
        <rect x="-120" y="-84" width="240" height="18" fill="#14120c"/>
        <rect x="-120" y="66" width="240" height="18" fill="#14120c"/>
        ${[0,1,2,3,4].map(e=>`<rect x="${-104+e*46}" y="-80" width="16" height="10" rx="2" fill="#2c2c35"/><rect x="${-104+e*46}" y="70" width="16" height="10" rx="2" fill="#2c2c35"/>`).join(``)}
        <image href="/assets/cel/cel07.jpg" x="-108" y="-58" width="216" height="116" preserveAspectRatio="xMidYMid slice"/>
        <text y="108" text-anchor="middle" font-size="12.5" fill="#e6c98a">理論で設計されたアニメ</text>
      </g>
    </g>

    <!-- 幕5: ループ完成 -->
    <g class="ai-b5" opacity="0">
      ${[[600,130,`AI がアニメを生成`],[980,320,`クイズ・カード・予測の題材に`],[600,500,`ユーザーが遊ぶ`],[220,320,`演出 DB が濃くなる`]].map((e,t)=>`
      <g class="ai-loop ai-loop-${t}" opacity="0" transform="translate(${e[0]} ${e[1]})">
        <rect x="-150" y="-32" width="300" height="64" rx="32" fill="#101016" stroke="#c9a35c" stroke-width="2.2"/>
        <text y="6" text-anchor="middle" font-size="14" font-weight="700" fill="#f2f2f4">${e[2]}</text>
      </g>`).join(``)}
      ${[`M 760 160 A 320 200 0 0 1 950 270`,`M 950 370 A 320 200 0 0 1 760 470`,`M 440 470 A 320 200 0 0 1 250 370`,`M 250 270 A 320 200 0 0 1 440 160`].map((e,t)=>`<path class="ai-arc ai-arc-${t}" d="${e}" fill="none" stroke="#c9a35c" stroke-width="2.4" opacity="0" marker-end="url(#aiArw)"/>`).join(``)}
      <defs><marker id="aiArw" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#c9a35c"/></marker></defs>
      <g class="ai-stamp" opacity="0" transform="translate(600 320) rotate(-3)">
        <rect x="-235" y="-40" width="470" height="80" rx="6" fill="#f4ecd8"/>
        <text y="-2" text-anchor="middle" font-size="20" font-weight="800" fill="#b3564a">何がウケるかの DB を持って作れるのは、</text>
        <text y="26" text-anchor="middle" font-size="20" font-weight="800" fill="#b3564a">私たちだけ。</text>
      </g>
    </g>`;var d=t=>e.querySelector(t),f=[[`幕 1 ── GPU 投資`,`まず、計算資源に投資します。数千万〜億円単位——人を増やす代わりに、生産設備を持ちます。`,`01 / 05`],[`幕 2 ── 自由な独自 AI`,`外部 API に縛られない VERION 専用 AI。まずクイズを 24 時間・全 IP・多言語で自動生成します。`,`02 / 05`],[`幕 3 ── 遊びが DB になる`,`ユーザーが遊ぶほど「どのシーン・どの演出がウケるか」が蓄積。遊び場の運営者だけが持てる DB です。`,`03 / 05`],[`幕 4 ── 理論で作る`,`常に生まれ続ける日本の漫画を、演出 DB を参照した AI がアニメ化。勘ではなく、データでつくる面白さ。`,`04 / 05`],[`幕 5 ── ループ完成`,`生成したアニメがクイズ・カード・予測の題材になり、また遊ばれて DB が濃くなる——止まらない循環です。`,`05 / 05`]],p=-1;function m(e){p!==e&&(p=e,t.textContent=f[e][0],n.textContent=f[e][1],r.textContent=f[e][2])}function h(t){let n=(e,n)=>t<e?0:u(t<n?c(t,e,e+.02):1-c(t,n,n+.02)),r=c(t,.01,.18),i=c(t,.2,.38),a=c(t,.4,.58),o=c(t,.6,.78),s=c(t,.8,1);d(`.ai-b1`).setAttribute(`opacity`,n(.01,.19)),d(`.ai-b2`).setAttribute(`opacity`,n(.19,.39)),d(`.ai-b3`).setAttribute(`opacity`,n(.39,.59)),d(`.ai-b4`).setAttribute(`opacity`,n(.59,.79)),d(`.ai-b5`).setAttribute(`opacity`,t<.79?0:u(c(t,.79,.82)));for(let e=0;e<3;e++)for(let t=0;t<6;t++)d(`.ai-gpu-${e}-${t}`).setAttribute(`opacity`,String(l(c(r,(e*6+t)*.04,(e*6+t)*.04+.16))));d(`.ai-ring`).setAttribute(`transform`,`rotate(${(t*720).toFixed(1)})`),d(`.ai-core`).setAttribute(`opacity`,String(l(c(i,.05,.3)))),d(`.ai-l1`).setAttribute(`opacity`,String(c(i,.35,.5))),d(`.ai-out1`).setAttribute(`opacity`,String(l(c(i,.45,.65)))),d(`.ai-l2`).setAttribute(`opacity`,String(c(i,.6,.75))),d(`.ai-out2`).setAttribute(`opacity`,String(l(c(i,.7,.9))));for(let e=0;e<8;e++)d(`.ai-user-${e}`).setAttribute(`opacity`,String(l(c(a,e*.05,e*.05+.2))));for(let e=0;e<3;e++){let t=c(a,.3+e*.16,.55+e*.16),n=340+348*l(t),r=250+Math.sin(l(t)*Math.PI)*-60+50*l(t),i=d(`.ai-data-${e}`);i.setAttribute(`transform`,`translate(${n.toFixed(1)} ${r.toFixed(1)})`),i.setAttribute(`opacity`,String(t<=.02||t>=.95?0:1))}let f=150*l(c(a,.35,.95));d(`.ai-dbfill`).setAttribute(`y`,String(78-f)),d(`.ai-dbfill`).setAttribute(`height`,String(f)),d(`.ai-dbpct`).textContent=a>.3?`蓄積 ${Math.round(l(c(a,.35,.95))*100)}%`:``;for(let e=0;e<3;e++)d(`.ai-manga-${e}`).setAttribute(`opacity`,String(l(c(o,e*.07,e*.07+.2))));d(`.ai-flow1`).setAttribute(`opacity`,String(c(o,.22,.34))),d(`.ai-brain`).setAttribute(`opacity`,String(l(c(o,.3,.48)))),d(`.ai-flow2`).setAttribute(`opacity`,String(c(o,.48,.6)));let p=l(c(o,.55,.78)),h=d(`.ai-film`);h.setAttribute(`opacity`,String(p)),h.setAttribute(`transform`,`translate(950 300) scale(${(.85+.15*p).toFixed(3)})`);for(let e=0;e<4;e++)d(`.ai-loop-${e}`).setAttribute(`opacity`,String(l(c(s,e*.1,e*.1+.16)))),d(`.ai-arc-${e}`).setAttribute(`opacity`,String(c(s,.08+e*.1,.2+e*.1)*.85));let g=l(c(s,.55,.75)),_=d(`.ai-stamp`);_.setAttribute(`opacity`,String(g)),_.setAttribute(`transform`,`translate(600 320) rotate(-3) scale(${(1.5-.5*g).toFixed(3)})`);for(let t of e.querySelectorAll(`.ai-loop, .ai-arc`))g>.3&&t.setAttribute(`opacity`,String(Math.min(parseFloat(t.getAttribute(`opacity`)||`0`),.25)));m(t<.19?0:t<.39?1:t<.59?2:t<.79?3:4)}function g(){let e=i.offsetHeight-innerHeight;if(e<=0)return;let t=-i.getBoundingClientRect().top;h(Math.min(1,Math.max(0,t/e)))}addEventListener(`scroll`,g,{passive:!0}),h(0),g()}));t(),n(),r();