const P = PORTFOLIO, $ = s => document.querySelector(s);
const li = a => a.map(x => `<li>${x}</li>`).join("");
const visuals = {
  about: () => `<img src="${P.profile.photo}" alt="Portrait of ${P.profile.name}" loading="lazy">`,
  projects: () => `<div class="lap"><i></i><b></b></div><div class="ph1"></div><div class="ph2"></div>`,
  social: () => P.social.map(s => `<span>${s.mark}</span>`).join(""),
  skills: () => `<pre>$ git commit\n$ docker run\n$ python manage.py\n> SELECT * FROM\n> flutter run</pre>`,
  experience: () => `<div class="tl"><i></i><i></i><i></i></div><strong>STT NF</strong>`
};
const pages = {
  social: () => P.social.map(s => `<a class="row link" href="${s.url}" target="_blank" rel="noopener noreferrer"><span class="mk">${s.mark}</span><h2>${s.name}</h2><small>${s.handle}</small></a>`).join(""),
  projects: () => P.projects.map(p => `<article class="row"><h2>${p.title}</h2><div><small>${p.type}</small><p class="lead">${p.desc}</p>
    <ul class="chips">${li(p.stack)}</ul><ul class="plain">${li(p.features)}</ul>
    <p>${p.github ? `<a class="btn" href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ""}
    ${p.demo ? `<a class="btn red" href="${p.demo}" target="_blank" rel="noopener noreferrer">Live demo</a>` : ""}</p></div></article>`).join(""),
  about: () => `<div class="two"><img class="pic" src="${P.profile.photo}" alt="Portrait of ${P.profile.name}"><div>
    ${P.profile.bio.map(t => `<p class="lead">${t}</p>`).join("")}
    <h2>Interests</h2><ul class="chips">${li(P.profile.interests)}</ul>
    <h2>Career goal</h2><p>${P.profile.goal}</p></div></div>`,
  skills: () => P.skills.map(g => `<section class="row"><small>${g.group}</small><div class="big">${g.items.map(i => `<span>${i}</span>`).join("")}</div></section>`).join(""),
  experience: () => `<ol class="time">${P.timeline.map(t => `<li class="${t.placeholder ? "ph" : ""}"><small>${t.period}</small><h2>${t.title}</h2><p>${t.place}</p>${t.note ? `<p>${t.note}</p>` : ""}</li>`).join("")}</ol>`
};
const page = document.body.dataset.page;
if (page === "home") {
  $("#deck").innerHTML = P.cards.map((c, i) => `<a class="c c${i + 1}" style="--r:var(--r${i + 1})" href="${c.href}" target="_blank" rel="noopener noreferrer" aria-label="${c.title}">
    <div class="f" style="animation-delay:${-i * 0.9}s">${visuals[c.key]()}<span class="tag">${c.n} ${c.title}</span></div></a>`).join("");
  const deck = $("#deck");
  addEventListener("mousemove", e => {
    const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
    deck.querySelectorAll(".c").forEach((c, i) => { c.style.setProperty("--ry", x * 10 + "deg"); c.style.setProperty("--rx", -y * 8 + "deg"); c.style.setProperty("--px", x * (i + 1) * -6 + "px"); });
    document.documentElement.style.setProperty("--hx", x * -20 + "px");
  });
} else {
  const c = P.cards.find(c => c.key === page);
  $("#app").innerHTML = `<nav class="nav"><a href="index.html">Home</a>${P.cards.map(c => `<a href="${c.href}" ${c.key === page ? 'aria-current="page"' : ""}>${c.title}</a>`).join("")}</nav>
    <header class="ph-head"><small>${c.n} / ${P.profile.name}</small><h1>${c.title}</h1></header><main>${pages[page]()}</main>`;
}
const cur = $(".cur");
if (cur) addEventListener("mousemove", e => { cur.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; cur.classList.toggle("big", !!e.target.closest("a")); });
