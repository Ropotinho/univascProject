       const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
        const esc = s => String(s).replace(/[&<>"]/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]));
        const toast = m => {const t = $("#toast"); t.textContent = m; t.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("on"), 2400)};
        const SV = [
            {id: "sites", n: "Desenvolvimento de sites", d: "Site institucional completo para apresentar sua empresa, seus serviços e seus contatos com credibilidade.", l: ["Até 6 páginas personalizadas", "Formulário de contato e botão de WhatsApp", "Otimização básica para o Google", "Domínio e hospedagem no primeiro ano"], p: "15 a 25 dias", f: "Prestadores de serviço, consultórios, escritórios"},
            {id: "catalogos", n: "Catálogos digitais", d: "Vitrine online com seus produtos e preços, onde o cliente escolhe e finaliza o pedido pelo WhatsApp.", l: ["Produtos organizados por categoria", "Pedido enviado direto ao seu WhatsApp", "Atualização simples de preços e fotos", "Link e QR Code para divulgação"], p: "7 a 12 dias", f: "Confeitarias, lojas de roupas, artesanato"},
            {id: "lojas", n: "Lojas virtuais", d: "Loja completa com carrinho, pagamentos online e controle de pedidos para vender 24 horas por dia.", l: ["Carrinho, Pix e cartão de crédito", "Cálculo de frete", "Painel para gerenciar produtos e pedidos", "Treinamento de uso incluso"], p: "25 a 40 dias", f: "Comércio que quer vender para todo o Brasil"},
            {id: "landing", n: "Landing pages", d: "Página única e objetiva, criada para divulgar uma oferta, captar contatos ou lançar um serviço.", l: ["Texto e layout focados em conversão", "Formulário de captação de contatos", "Pronta para anúncios no Instagram e Google", "Entrega rápida"], p: "3 a 7 dias", f: "Promoções, eventos, lançamentos e cursos"}];
        const AB = [
            {id: "missao", n: "Nossa missão", h: "Colocar todo pequeno negócio na internet", t: "Acreditamos que ter um site profissional não deve ser privilégio de grandes empresas. Nossa missão é oferecer soluções digitais claras, acessíveis e bem feitas para MEIs e microempreendedores crescerem com segurança.", l: ["Transparência em preços e prazos", "Linguagem simples, sem termos técnicos", "Suporte humano depois da entrega"]},
            {id: "equipe", n: "Nossa equipe", team: [["Desenvolvimento", "Responsável pela programação e pelo desempenho dos sites."], ["Design", "Cuida da identidade visual e da experiência de uso."], ["Atendimento", "Acompanha você do orçamento à entrega e ao suporte."]]},
            {id: "historia", n: "Nossa história", tl: [["Início", "A Univasc nasce de um grupo de estudantes que percebeu a dificuldade dos pequenos negócios em ter presença online."], ["Primeiros clientes", "Os primeiros sites foram entregues a comerciantes e prestadores de serviço da região."], ["Crescimento", "Ampliamos o catálogo para lojas virtuais, catálogos digitais e landing pages."], ["Hoje", "Atendemos MEIs de diversos segmentos com processo padronizado e suporte contínuo."]]}];
        const PJ = [
            {id: 1, n: "Barbearia Corte Fino", c: "Site institucional", col: "#1f3a5f", d: "Site com agendamento via WhatsApp, galeria de cortes e página de preços.", l: ["Layout adaptado ao celular", "Botão de agendamento", "Mapa e horários de funcionamento"]},
            {id: 2, n: "Doce Maria Confeitaria", c: "Catálogo digital", col: "#8a3b5c", d: "Catálogo de bolos e doces com categorias e pedido direto no WhatsApp.", l: ["Produtos por categoria", "Pedido pronto para envio", "QR Code para a vitrine da loja"]},
            {id: 3, n: "Moda Bella Boutique", c: "Loja virtual", col: "#0e5c52", d: "Loja virtual com carrinho, Pix, cartão e cálculo de frete.", l: ["Painel de pedidos", "Pagamento online", "Controle de estoque"]},
            {id: 4, n: "Clínica Vida Plena", c: "Site institucional", col: "#2d5a87", d: "Site para consultório com equipe, especialidades e solicitação de consulta.", l: ["Página por especialidade", "Formulário de contato", "Seção de dúvidas frequentes"]},
            {id: 5, n: "Curso de Inglês Express", c: "Landing page", col: "#7a4f12", d: "Página de captação de alunos para uma turma nova, com formulário e depoimentos.", l: ["Formulário de matrícula", "Depoimentos de alunos", "Contagem regressiva da oferta"]},
            {id: 6, n: "Oficina Auto Center", c: "Landing page", col: "#3b3f4a", d: "Página de divulgação de serviços de revisão, com orçamento rápido pelo WhatsApp.", l: ["Lista de serviços", "Orçamento em um clique", "Avaliações de clientes"]}];
        const BZ = [
            {n: "Barbearia", c: "#1f3a5f", t: "Barbearia Corte Fino", p: "Cortes, barba e cuidado com estilo. Agende pelo WhatsApp.", b: "Agendar horário", u: "cortefino.com.br"},
            {n: "Confeitaria", c: "#8a3b5c", t: "Doce Maria Confeitaria", p: "Bolos e doces feitos sob encomenda para cada ocasião.", b: "Ver cardápio", u: "docemaria.com.br"},
            {n: "Consultório", c: "#2d5a87", t: "Clínica Vida Plena", p: "Atendimento humanizado com hora marcada e equipe especializada.", b: "Marcar consulta", u: "vidaplena.com.br"},
            {n: "Oficina", c: "#3b3f4a", t: "Oficina Auto Center", p: "Revisão, freios e suspensão com orçamento rápido e garantia.", b: "Pedir orçamento", u: "autocenter.com.br"},
            {n: "Loja de roupas", c: "#0e5c52", t: "Moda Bella Boutique", p: "Coleção nova toda semana. Compre online e receba em casa.", b: "Comprar agora", u: "modabella.com.br"}];
        const EX = ["Logotipo", "Blog", "Integração com redes sociais", "Domínio próprio", "Fotografia profissional"];

        /* Hero interativo */
        const chips = $("#chips");
        function mock(i) {const b = BZ[i]; $("#mkBody").style.background = b.c; $("#mkT").textContent = b.t; $("#mkP").textContent = b.p; $("#mkB").textContent = b.b; $("#mkUrl").textContent = "www." + b.u; $$(".chip", chips).forEach((c, k) => c.setAttribute("aria-pressed", k === i))}
        BZ.forEach((b, i) => {const c = document.createElement("button"); c.className = "chip"; c.textContent = b.n; c.onclick = () => {mock(i); clearInterval(mock.t)}; chips.appendChild(c)});
        mock(0); let mi = 0; mock.t = setInterval(() => {if ($("#p-inicio").classList.contains("on")) {mi = (mi + 1) % BZ.length; mock(mi)} }, 4500);
        function count() {$$("[data-n]").forEach(e => {const m = +e.dataset.n, s = e.dataset.s || "+"; let v = 0; const st = Math.ceil(m / 30); const t = setInterval(() => {v = Math.min(m, v + st); e.textContent = v + (v === m ? s : ""); if (v === m) clearInterval(t)}, 30)})}

        /* Abas genéricas */
        function tabs(box, panel, data, render, start = 0) {
            const bar = $(box); bar.innerHTML = "";
            data.forEach((d, i) => {const b = document.createElement("button"); b.className = "tab"; b.role = "tab"; b.textContent = d.n; b.onclick = () => sel(i); b.onkeydown = e => {if (e.key === "ArrowRight") sel((i + 1) % data.length, 1); if (e.key === "ArrowLeft") sel((i + data.length - 1) % data.length, 1)}; bar.appendChild(b)});
            function sel(i, f) {$$(".tab", bar).forEach((b, k) => {b.setAttribute("aria-selected", k === i); b.tabIndex = k === i ? 0 : -1; if (f && k === i) b.focus()}); $(panel).innerHTML = render(data[i])}
            sel(start); return sel
        }
        const selSv = tabs("#svTabs", "#svPanel", SV, s => `<div class="panel"><div><h3>${s.n}</h3><p class="sub" style="margin:0">${s.d}</p><ul>${s.l.map(x => `<li>${x}</li>`).join("")}</ul><a class="btn" href="#orcamento" data-svc="${s.id}">Solicitar orçamento deste serviço</a></div><dl class="side"><dt>Prazo médio</dt><dd>${s.p}</dd><dt>Ideal para</dt><dd>${s.f}</dd></dl></div>`);
        tabs("#abTabs", "#abPanel", AB, a => a.team ? `<div class="grid">${a.team.map(t => `<div class="card"><h3>${t[0]}</h3><p>${t[1]}</p></div>`).join("")}</div>` : a.tl ? `<ol class="tl">${a.tl.map(t => `<li><b>${t[0]}</b><span style="color:var(--muted)">${t[1]}</span></li>`).join("")}</ol>` : `<div class="panel"><div><h3>${a.h}</h3><p class="sub" style="margin:0">${a.t}</p></div><div class="side"><ul style="list-style:none;padding:0">${a.l.map(x => `<li style="padding:6px 0">${x}</li>`).join("")}</ul></div></div>`);

        /* Portfólio */
        const cats = ["Todos", ...new Set(PJ.map(p => p.c))]; let cat = "Todos";
        function pjRender() {
            $("#pjF").innerHTML = ""; cats.forEach(c => {const b = document.createElement("button"); b.className = "chip"; b.textContent = c; b.setAttribute("aria-pressed", c === cat); b.onclick = () => {cat = c; pjRender()}; $("#pjF").appendChild(b)});
            $("#pjList").innerHTML = PJ.filter(p => cat === "Todos" || p.c === cat).map(p => `<button class="card pj" data-id="${p.id}"><div class="th" style="background:${p.col}">${p.n}</div><span class="tag">${p.c}</span><h3>${p.n}</h3><p>${p.d}</p><span class="link">Ver detalhes</span></button>`).join("")
        }
        pjRender();
        $("#pjList").onclick = e => {const b = e.target.closest(".pj"); if (!b) return; const p = PJ.find(x => x.id == b.dataset.id); $("#dBody").innerHTML = `<div class="th" style="background:${p.col}"></div><span class="tag">${p.c}</span><h3 id="dT" style="font-size:1.5rem">${p.n}</h3><p style="color:var(--muted);margin-top:8px">${p.d}</p><ul>${p.l.map(x => `<li>${x}</li>`).join("")}</ul><div class="row"><a class="btn" href="#orcamento" data-dlg>Quero um site assim</a><button class="btn out" data-close>Fechar</button></div>`; $("#pjDlg").showModal()};
        $("#pjDlg").onclick = e => {if (e.target.id === "pjDlg" || e.target.closest("[data-close]") || e.target.closest("[data-dlg]")) $("#pjDlg").close()};

        /* Contato */
        $("#copy").onclick = async () => {try {await navigator.clipboard.writeText("contato@univasc.com.br"); toast("E-mail copiado")} catch (e) {toast("Selecione e copie o endereço manualmente")} };

        /* Orçamento */
        const sel = $("#f [name=servico]"); sel.innerHTML = '<option value="">Selecione um serviço</option>' + SV.map(s => `<option value="${s.n}" data-id="${s.id}">${s.n}</option>`).join("");
        $("#extras").innerHTML = EX.map(x => `<button type="button" class="chip" aria-pressed="false">${x}</button>`).join("");
        $("#extras").onclick = e => {const b = e.target.closest(".chip"); if (b) b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true")};
        const f = $("#f");
        f.tel.oninput = () => {let v = f.tel.value.replace(/\D/g, "").slice(0, 11); f.tel.value = v.length > 6 ? `(${v.slice(0, 2)}) ${v.slice(2, v.length > 10 ? 7 : 6)}-${v.slice(v.length > 10 ? 7 : 6)}` : v.length > 2 ? `(${v.slice(0, 2)}) ${v.slice(2)}` : v};
        const rules = {nome: v => v.trim().length >= 3 || "Informe seu nome completo.", negocio: v => !!v.trim() || "Informe o nome do seu negócio.", email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || "Informe um e-mail válido, como nome@email.com.", tel: v => v.replace(/\D/g, "").length >= 10 || "Informe o WhatsApp com DDD.", servico: v => !!v || "Selecione um serviço."};
        function chk(n) {const el = f[n], r = rules[n](el.value), er = el.parentElement.querySelector(".err"); el.setAttribute("aria-invalid", r !== true); er.textContent = r === true ? "" : r; return r === true}
        Object.keys(rules).forEach(n => f[n].addEventListener("blur", () => chk(n)));
        f.onsubmit = e => {
            e.preventDefault(); const bad = Object.keys(rules).filter(n => !chk(n)); if (bad.length) {f[bad[0]].focus(); return }
            const ex = $$("#extras .chip[aria-pressed=true]").map(b => b.textContent);
            const d = {ref: "UNV-" + Date.now().toString(36).toUpperCase().slice(-6), nome: f.nome.value.trim(), negocio: f.negocio.value.trim(), email: f.email.value.trim(), tel: f.tel.value, servico: f.servico.value, prazo: f.prazo.value, extras: ex, msg: f.msg.value.trim()};
            try {const a = JSON.parse(localStorage.getItem("univasc-orc") || "[]"); a.push(d); localStorage.setItem("univasc-orc", JSON.stringify(a))} catch (x) { }
            $("#okTxt").textContent = `Obrigado, ${d.nome.split(" ")[0]}. Recebemos seu pedido e entraremos em contato por e-mail ou WhatsApp em até um dia útil.`;
            const rows = [["Protocolo", d.ref], ["Negócio", d.negocio], ["Serviço", d.servico], ["Prazo", d.prazo], ["Extras", ex.join(", ") || "Nenhum"], ["Contato", d.tel + " · " + d.email]];
            $("#sum").innerHTML = rows.map(r => `<div><dt>${r[0]}</dt><dd>${esc(r[1])}</dd></div>`).join("");
            const t = `Olá, sou ${d.nome} (${d.negocio}). Enviei o orçamento ${d.ref} para ${d.servico}. Prazo: ${d.prazo}.`;
            $("#okWa").href = "https://wa.me/5567999990000?text=" + encodeURIComponent(t);
            step(2)
        };
        function step(n) {$("#qForm").hidden = n === 2; $("#qOk").hidden = n !== 2; $("#s1").classList.toggle("on", n === 1); $("#s2").classList.toggle("on", n === 2); scrollTo({top: 0})}
        $("#again").onclick = () => {f.reset(); $$("#extras .chip").forEach(b => b.setAttribute("aria-pressed", "false")); step(1)};
        $("#rst").onclick = () => $$(".err").forEach(x => x.textContent = "");
        document.addEventListener("click", e => {const a = e.target.closest("[data-svc]"); if (a) {const o = $(`#f option[data-id="${a.dataset.svc}"]`); if (o) sel.value = o.value} });

        /* Roteador (hash simples) */
        const pages = ["inicio", "servicos", "sobre", "portfolio", "contato", "orcamento"];
        function route() {
            const h = location.hash.slice(1); const p = pages.includes(h) ? h : "inicio";
            $$(".pg").forEach(s => s.classList.toggle("on", s.id === "p-" + p));
            $$("#nav a").forEach(a => a.classList.toggle("on", a.dataset.p === p));
            $("#nav").classList.remove("open"); $("#menu").setAttribute("aria-expanded", "false");
            document.title = ({inicio: "Univasc | Sites profissionais para MEIs e pequenos negócios", servicos: "Serviços | Univasc", sobre: "Sobre nós | Univasc", portfolio: "Portfólio | Univasc", contato: "Contato | Univasc", orcamento: "Solicitar orçamento | Univasc"})[p];
            if (p === "inicio") count(); scrollTo({top: 0})
        }
        addEventListener("hashchange", route); route();
        $("#menu").onclick = () => {const o = $("#nav").classList.toggle("open"); $("#menu").setAttribute("aria-expanded", o)};

        /* Tema */
        let th = null; $("#theme").onclick = () => {const dark = th ? th === "dark" : matchMedia("(prefers-color-scheme:dark)").matches; th = dark ? "light" : "dark"; document.documentElement.dataset.theme = th};
        $("#yr").textContent = new Date().getFullYear();