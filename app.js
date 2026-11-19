const products = [
  {id:1,name:"Ingurube y'amezi 4",category:"amatungo",emoji:"🐖",price:"Igiciro: tuvugane",seller:"Urugero rw'umucuruzi",location:"Rubavu"},
  {id:2,name:"Inkoko z'inyama",category:"amatungo",emoji:"🐓",price:"Igiciro: tuvugane",seller:"Urugero rw'umucuruzi",location:"Rwanda"},
  {id:3,name:"Ibiryo by'ingurube",category:"ibiryo",emoji:"🌽",price:"Igiciro: tuvugane",seller:"Urugero rw'umucuruzi",location:"Rwanda"},
  {id:4,name:"Imboga zo mu murima",category:"umusaruro",emoji:"🥬",price:"Igiciro: tuvugane",seller:"Urugero rw'umucuruzi",location:"Rwanda"},
  {id:5,name:"Ibikoresho by'ubuhinzi",category:"ibikoresho",emoji:"🧰",price:"Igiciro: tuvugane",seller:"Urugero rw'umucuruzi",location:"Rwanda"},
  {id:6,name:"Serivisi z'ubuvuzi bw'amatungo",category:"imiti",emoji:"🩺",price:"Baza amakuru",seller:"Urugero rwa serivisi",location:"Rwanda"}
];
window.products = products;
const translations = {
 rw:{navHome:"Ahabanza",navMarket:"Isoko",navAdvisors:"Abajyanama",navDashboard:"Konti y'umucuruzi",heroEyebrow:"Isoko rihuza abahinzi n'aborozi",heroTitle:"Ubuhinzi n'ubworozi, <em>intambwe ijya imbere.</em>",heroText:"Shaka amatungo, ibiryo byayo n'ibikomoka ku buhinzi. Menyana n'abacuruzi n'abajyanama mu buryo bworoshye.",browseMarket:"Reba isoko",sellHere:"Shyira igicuruzwa ku isoko",marketEyebrow:"HONESME MARKET",marketTitle:"Shakira mu byiciro",marketIntro:"Hitamo icyiciro ushaka kureba.",all:"Byose",animals:"Amatungo",feed:"Ibiryo by'amatungo",vet:"Imiti n'ubuvuzi",produce:"Umusaruro",equipment:"Ibikoresho n'ifumbire",featured:"Ibicuruzwa by'icyitegererezo",demoNote:"Urugero rwo kwerekana uko urubuga ruzakora",advisorEyebrow:"UBUMENYI N'UBUFASHA",advisorTitle:"Kugira ngo ubworozi n'ubuhinzi bitere imbere",advisorText:"HONESME FARM izafasha abakoresha kubona abajyanama n'inzobere mu buhinzi n'ubworozi.",advisorCardTitle:"Abajyanama mu buhinzi n'ubworozi",advisorCardText:"Iki gice kizashyirwamo amakuru y'abajyanama bemejwe.",rights:"Uburenganzira bwose burarinzwe.",footerNote:"Uru ni urubuga rw'igerageza; ibicuruzwa bigaragara ni ingero."},
 en:{navHome:"Home",navMarket:"Marketplace",navAdvisors:"Advisors",navDashboard:"Seller account",heroEyebrow:"A marketplace connecting farmers and livestock keepers",heroTitle:"Agriculture and livestock, <em>moving forward.</em>",heroText:"Find livestock, animal feed and farm produce. Connect with sellers and agricultural advisors.",browseMarket:"Browse marketplace",sellHere:"List a product",marketEyebrow:"HONESME MARKET",marketTitle:"Browse categories",marketIntro:"Choose a category to explore.",all:"All",animals:"Livestock",feed:"Animal feed",vet:"Veterinary",produce:"Farm produce",equipment:"Equipment & fertilizer",featured:"Sample listings",demoNote:"Examples showing how the website will work",advisorEyebrow:"KNOWLEDGE & SUPPORT",advisorTitle:"Helping agriculture and livestock grow",advisorText:"HONESME FARM aims to connect users with agricultural and livestock advisors.",advisorCardTitle:"Agriculture and livestock advisors",advisorCardText:"Verified advisor information will appear here.",rights:"All rights reserved.",footerNote:"This is a demonstration website; displayed listings are examples."},
 sw:{navHome:"Mwanzo",navMarket:"Soko",navAdvisors:"Washauri",navDashboard:"Akaunti ya muuzaji",heroEyebrow:"Soko linalowaunganisha wakulima na wafugaji",heroTitle:"Kilimo na ufugaji, <em>hatua ya maendeleo.</em>",heroText:"Pata mifugo, chakula cha mifugo na mazao ya shambani. Wasiliana na wauzaji na washauri.",browseMarket:"Tazama soko",sellHere:"Weka bidhaa sokoni",marketEyebrow:"HONESME MARKET",marketTitle:"Tafuta kwa makundi",marketIntro:"Chagua kundi unalotaka kuona.",all:"Vyote",animals:"Mifugo",feed:"Chakula cha mifugo",vet:"Dawa na huduma za mifugo",produce:"Mazao",equipment:"Vifaa na mbolea",featured:"Bidhaa za mfano",demoNote:"Mifano ya kuonyesha jinsi tovuti itakavyofanya kazi",advisorEyebrow:"ELIMU NA MSAADA",advisorTitle:"Kukuza kilimo na ufugaji",advisorText:"HONESME FARM inalenga kuwaunganisha watumiaji na washauri wa kilimo na mifugo.",advisorCardTitle:"Washauri wa kilimo na mifugo",advisorCardText:"Taarifa za washauri waliothibitishwa zitawekwa hapa.",rights:"Haki zote zimehifadhiwa.",footerNote:"Hii ni tovuti ya majaribio; bidhaa zinazoonekana ni mifano."}
};
function renderProducts(category="all"){
 const container=document.getElementById("productsContainer"); if(!container)return;
 const list=category==="all"?products:products.filter(p=>p.category===category);
 container.replaceChildren();
 list.forEach(p=>{
  const card=document.createElement("article");card.className="product-card";
  const visual=document.createElement("div");visual.className="product-visual";visual.textContent=p.emoji;
  const info=document.createElement("div");info.className="product-info";
  const tag=document.createElement("span");tag.className="product-tag";tag.textContent=p.category.toUpperCase();
  const title=document.createElement("h3");title.textContent=p.name;
  const meta=document.createElement("div");meta.className="product-meta";meta.textContent=`${p.seller} • ${p.location}`;
  const price=document.createElement("div");price.className="price";price.textContent=p.price;
  const actions=document.createElement("div");actions.className="product-actions";
  const contact=document.createElement("a");contact.className="small-btn";contact.href=`chat-momo.html?id=${p.id}`;contact.textContent="Tumanaho";
  const details=document.createElement("span");details.className="small-btn secondary";details.textContent="Urugero";
  actions.append(contact,details);info.append(tag,title,meta,price,actions);card.append(visual,info);container.append(card);
 });
}
function changeLanguage(lang){
 const dict=translations[lang]||translations.rw;document.documentElement.lang=lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(dict[key])el.innerHTML=dict[key];});
}
document.addEventListener("DOMContentLoaded",()=>{
 renderProducts();const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
 document.querySelectorAll(".category").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".category").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderProducts(btn.dataset.category);}));
 const lang=document.getElementById("languageSelect");if(lang)lang.addEventListener("change",()=>changeLanguage(lang.value));
 const menu=document.getElementById("menuToggle"),nav=document.getElementById("mainNav");if(menu&&nav)menu.addEventListener("click",()=>nav.classList.toggle("open"));
});
