/* NADAH STORE — script partagé (header, i18n FR/AR, rendu catalogue) */
(function () {
  "use strict";

  const STORE = {
    phoneDisplay: "06 49 59 25 21",
    phoneIntl: "+212649592521",
    whatsapp: "212649592521",
    instagram: "https://www.instagram.com/nadahstore.1/",
    maps: "https://maps.app.goo.gl/euEhGBSnT5tnM7UC9",
    mapEmbed: "https://www.google.com/maps?q=Nadah%20store%2C%202X7V%2B88G%2C%20F%C3%A8s&output=embed"
  };

  /* ---------- Icônes (SVG inline, style Lucide) ---------- */
  const svg = (p, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${p}</svg>`;
  const ICONS = {
    arrow: svg('<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'),
    menu: svg('<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>'),
    close: svg('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),
    chat: svg('<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8.5 9.5c.3 2.3 2.7 4.7 5 5l1.2-1.2 2 1-.4 1.7c-4.1.6-8.5-3.8-7.9-7.9l1.7-.4 1 2Z"/>'),
    truck: svg('<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>'),
    cash: svg('<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/>'),
    pin: svg('<path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>'),
    phone: svg('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>'),
    insta: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'),
    clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    ruler: svg('<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2"/>'),
    crown: svg('<path d="m2 7 4.5 4L12 4l5.5 7L22 7l-2 12H4Z"/>'),
    ball: svg('<circle cx="12" cy="12" r="9"/><path d="m12 7 4 3-1.5 4.5h-5L8 10Z"/><path d="M12 3v4M21 10l-5 0M18 19l-3.5-4.5M6 19l3.5-4.5M3 10h5"/>'),
    search: svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    plus: svg('<path d="M12 5v14M5 12h14"/>'),
    check: svg('<path d="M20 6 9 17l-5-5"/>'),
    store: svg('<path d="m2 7 4.4-4.4A2 2 0 0 1 7.8 2h8.4a2 2 0 0 1 1.4.6L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20v3a3 3 0 0 1-5.4 1.8A3 3 0 0 1 12 13a3 3 0 0 1-4.6-1.2A3 3 0 0 1 2 10Z"/>')
  };
  window.NADAH_ICONS = ICONS;

  /* ---------- Traductions ---------- */
  const T = {
    fr: {
      "nav.home": "Accueil", "nav.shop": "Boutique", "nav.football": "Football", "nav.sneakers": "Sneakers",
      "nav.clothing": "Vêtements", "nav.contact": "Contact", "nav.order": "Commander", "nav.menu": "Menu",
      "lang.switch": "عربي", "lang.label": "Afficher le site en arabe",
      "cat.all": "Tout", "cat.crampons": "Crampons", "cat.minifoot": "Mini Foot", "cat.tenues": "Tenues foot",
      "cat.sneakers": "Sneakers", "cat.vetements": "Vêtements",
      "size.all": "Toutes tailles", "search.ph": "Rechercher un modèle…",
      "tag.new": "Nouveau", "tag.mc": "Master Copy",
      "price.ask": "Prix sur demande", "sizes.ask": "Tailles sur demande", "sizes.label": "Tailles",
      "count": "{n} modèles", "count.one": "1 modèle", "empty": "Aucun modèle ne correspond. Essayez un autre filtre — ou demandez-nous sur WhatsApp, on a sûrement votre paire en magasin.",

      "hero.eyebrow": "Nadah Store · 100% homme · Fès",
      "hero.title": "La qualité,<br>à chaque <span class=\"gold-text\">pas.</span>",
      "hero.lead": "Crampons, mini foot, sneakers et ensembles pour homme — les modèles du moment, en qualité Master Copy, livrés partout au Maroc.",
      "hero.cta1": "Voir la boutique", "hero.cta2": "Commander sur WhatsApp",
      "hero.badge.k": "Le magasin", "hero.badge.v": "Plus de 100 modèles en rayon",
      "trust.1": "Livraison gratuite partout au Maroc", "trust.2": "Paiement à la livraison", "trust.3": "Pointures homme 39 → 45", "trust.4": "Magasin à Fès",

      "cats.eyebrow": "Nos gammes", "cats.title": "À chaque match,<br>sa paire.",
      "cats.lead": "Du terrain à la rue : tout ce qu'il faut pour jouer et pour sortir, choisi pièce par pièce dans notre magasin de Fès.",
      "cats.crampons.d": "Phantom, Mercurial… les crampons des pros pour terrain naturel et synthétique.",
      "cats.minifoot.d": "Semelles turf pour le foot à 5 et le city stade. Confort et accroche.",
      "cats.sneakers.d": "Dunk, Samba, TN, AF1, 9060… les sneakers que tout le monde demande.",
      "cats.vetements.d": "Ensembles, vestes, hoodies et jeans pour compléter le look.",
      "cats.link": "Découvrir la gamme",

      "intro.eyebrow": "Nadah Store · Fès",
      "intro.title": "Le magasin des passionnés, <span class=\"gold-text\">près d'Adri Gym.</span>",
      "intro.p": "Nadah Store, c'est un magasin de chaussures et de vêtements de sport pour homme, route Ain Chkef, à Fès. Des murs entiers de crampons et de sneakers, des nouveautés chaque semaine, et une équipe qui conseille la bonne taille avant que vous commandiez.",
      "intro.p1.t": "Essayez en magasin", "intro.p1.d": "Passez voir les modèles et essayer votre taille — on est ouverts tard.",
      "intro.p2.t": "Ou commandez à distance", "intro.p2.d": "Envoyez-nous le modèle sur WhatsApp, on livre partout au Maroc.",
      "intro.p3.t": "Vous payez à la réception", "intro.p3.d": "Aucun paiement en ligne : vous réglez en cash au livreur.",
      "intro.cta": "Itinéraire vers le magasin",

      "new.eyebrow": "Nouveautés", "new.title": "Arrivés cette saison",
      "new.lead": "Les derniers modèles reçus en magasin. Stock limité par taille — demandez la disponibilité sur WhatsApp.",
      "new.all": "Voir toute la boutique",

      "why.eyebrow": "Pourquoi Nadah Store", "why.title": "Ce qui fait<br>la différence.",
      "why.1.k": "Livraison", "why.1.big": "0 DH", "why.1.t": "Livraison gratuite", "why.1.d": "Partout au Maroc, sans minimum d'achat.",
      "why.2.k": "Paiement", "why.2.big": "Cash", "why.2.t": "À la livraison", "why.2.d": "Vous payez uniquement quand le colis est entre vos mains.",
      "why.3.k": "Pointures", "why.3.big": "39→45", "why.3.t": "Spécial homme", "why.3.d": "Les tailles les plus demandées, confirmées avant l'envoi.",
      "why.4.k": "Choix", "why.4.big": "+100", "why.4.t": "Modèles en rayon", "why.4.d": "Football, running, lifestyle et vêtements, renouvelés chaque semaine.",
      "why.5.k": "Horaires", "why.5.big": "00:00", "why.5.t": "Ouvert tard", "why.5.d": "Le magasin reste ouvert jusqu'à minuit.",
      "why.6.k": "Communauté", "why.6.big": "6K+", "why.6.t": "Abonnés Instagram", "why.6.d": "Suivez @nadahstore.1 pour voir les arrivages en premier.",

      "steps.eyebrow": "Comment commander", "steps.title": "Quatre étapes,<br>zéro complication.",
      "steps.lead": "Pas de compte, pas de carte bancaire. Vous choisissez, on confirme, on livre.",
      "steps.1.t": "Choisissez votre modèle", "steps.1.d": "Parcourez la boutique ou notre Instagram et repérez la paire qui vous plaît.",
      "steps.2.t": "Envoyez-le sur WhatsApp", "steps.2.d": "Un clic sur « Commander » et le message part avec le modèle et votre taille.",
      "steps.3.t": "On confirme", "steps.3.d": "Disponibilité, taille et prix confirmés avec vous avant l'envoi.",
      "steps.4.t": "Livraison & paiement", "steps.4.d": "Livraison gratuite partout au Maroc. Vous payez en cash à la réception.",

      "match.eyebrow": "Matchday", "match.title": "Le magasin<br>des supporters.",
      "match.p": "Jaune et noir aux murs, maillots et écharpes en vitrine : chez Nadah Store, le foot se vit aussi en dehors du terrain. Tenues complètes, crampons et maillots pour les jours de match.",
      "match.cta": "Voir les tenues foot",

      "faq.eyebrow": "Questions fréquentes", "faq.title": "On vous répond.",
      "faq.1.q": "Que signifie « Master Copy » ?", "faq.1.a": "Ce sont des répliques de haute qualité des modèles de grandes marques, avec des finitions soignées et un confort proche de l'original, à un prix bien plus accessible. Ce ne sont pas des produits officiels des marques.",
      "faq.2.q": "La livraison est-elle vraiment gratuite ?", "faq.2.a": "Oui, la livraison est gratuite partout au Maroc. Le délai dépend de votre ville — on vous le confirme sur WhatsApp au moment de la commande.",
      "faq.3.q": "Comment payer ?", "faq.3.a": "Paiement en cash à la livraison, ou directement en magasin à Fès. Aucun paiement en ligne n'est demandé.",
      "faq.4.q": "Et si la taille ne va pas ?", "faq.4.a": "Avant l'envoi, on vérifie la pointure avec vous. En cas de souci, contactez-nous sur WhatsApp pour trouver une solution.",
      "faq.5.q": "Je peux passer essayer en magasin ?", "faq.5.a": "Bien sûr. Nadah Store se trouve route Ain Chkef à Fès, près d'Adri Gym, et reste ouvert jusqu'à minuit.",

      "contact.eyebrow": "Contact", "contact.title": "Passez nous voir,<br>ou écrivez-nous.",
      "contact.lead": "Une question sur une taille, un modèle, une livraison ? On répond vite sur WhatsApp.",
      "contact.address": "Adresse", "contact.address.v": "Route Ain Chkef, près d'Adri Gym<br>Fès 30050, Maroc",
      "contact.phone": "Téléphone / WhatsApp", "contact.hours": "Horaires", "contact.hours.v": "Ouvert tous les jours<br>jusqu'à 00:00",
      "contact.social": "Instagram",
      "contact.wa": "Écrire sur WhatsApp", "contact.call": "Appeler",
      "map.load": "Afficher le plan", "map.note": "Google Maps, chargé à la demande", "map.open": "Ouvrir dans Google Maps",

      "footer.tag": "Crampons, sneakers et vêtements pour homme — qualité Master Copy, livraison gratuite partout au Maroc.",
      "footer.shop": "Boutique", "footer.help": "Aide", "footer.store": "Magasin",
      "footer.howto": "Comment commander", "footer.faq": "Questions fréquentes", "footer.delivery": "Livraison & paiement",
      "footer.rights": "© {y} Nadah Store — Fès. Tous droits réservés.",
      "footer.note": "Les noms de marques cités servent uniquement à décrire les modèles.",

      "shop.eyebrow": "Boutique", "shop.title": "Toute la boutique",
      "shop.lead": "Filtrez par gamme ou par pointure, puis commandez en un message sur WhatsApp.",
      "filter.size": "Pointure", "filter.search": "Recherche",

      "pdp.order": "Commander sur WhatsApp", "pdp.call": "Appeler le magasin",
      "pdp.pick": "Choisissez votre taille", "pdp.picked": "Taille sélectionnée : {s}", "pdp.nosize": "Indiquez votre taille dans le message WhatsApp.",
      "pdp.perk1": "Livraison gratuite partout au Maroc", "pdp.perk2": "Paiement en cash à la livraison", "pdp.perk3": "Disponible aussi en magasin à Fès",
      "pdp.mc": "Qualité Master Copy — réplique haut de gamme, non officielle.",
      "pdp.similar": "Vous aimerez aussi", "pdp.back": "Retour à la boutique", "pdp.notfound": "Ce modèle n'est plus en ligne.",
      "wa.msg": "Bonjour Nadah Store 👋 Je suis intéressé par : {p}{s}. Est-ce disponible ?",
      "wa.size": " — Taille {s}", "wa.general": "Bonjour Nadah Store 👋 J'aimerais avoir des informations sur vos modèles."
    },
    ar: {
      "nav.home": "الرئيسية", "nav.shop": "المتجر", "nav.football": "كرة القدم", "nav.sneakers": "سنيكرز",
      "nav.clothing": "ملابس", "nav.contact": "اتصل بنا", "nav.order": "اطلب الآن", "nav.menu": "القائمة",
      "lang.switch": "FR", "lang.label": "Afficher le site en français",
      "cat.all": "الكل", "cat.crampons": "صبابط الكرة", "cat.minifoot": "ميني فوت", "cat.tenues": "أطقم كرة القدم",
      "cat.sneakers": "سنيكرز", "cat.vetements": "ملابس",
      "size.all": "جميع المقاسات", "search.ph": "ابحث عن موديل…",
      "tag.new": "جديد", "tag.mc": "ماستر كوبي",
      "price.ask": "الثمن عند الطلب", "sizes.ask": "المقاسات عند الطلب", "sizes.label": "المقاسات",
      "count": "{n} موديل", "count.one": "موديل واحد", "empty": "ما كاين حتى موديل بهاد الاختيار. جرب فلتر آخر — أو سولنا فالواتساب، غالبا كاينة فالمحل.",

      "hero.eyebrow": "متجر الناده · للرجال · فاس",
      "hero.title": "الجودة<br>فكل <span class=\"gold-text\">خطوة.</span>",
      "hero.lead": "صبابط الكرة، ميني فوت، سنيكرز وأطقم للرجال — آخر الموديلات بجودة ماستر كوبي، والتوصيل لجميع مدن المغرب.",
      "hero.cta1": "شوف المتجر", "hero.cta2": "اطلب عبر واتساب",
      "hero.badge.k": "المحل", "hero.badge.v": "أكثر من 100 موديل فالمحل",
      "trust.1": "توصيل مجاني لجميع مدن المغرب", "trust.2": "الدفع عند الاستلام", "trust.3": "مقاسات الرجال 39 → 45", "trust.4": "محل ففاس",

      "cats.eyebrow": "تشكيلاتنا", "cats.title": "لكل ماتش<br>الصباط ديالو.",
      "cats.lead": "من التيران حتى للزنقة: كلشي باش تلعب وتخرج، مختار واحد بواحد فالمحل ديالنا ففاس.",
      "cats.crampons.d": "فانتوم، ميركوريال… صبابط المحترفين للعشب الطبيعي والاصطناعي.",
      "cats.minifoot.d": "نعايل تورف للميني فوت والملاعب الصغيرة. راحة وثبات.",
      "cats.sneakers.d": "دانك، سامبا، TN، AF1، 9060… السنيكرز اللي الكل كيقلب عليها.",
      "cats.vetements.d": "أطقم، جاكيطات، هوديز وجينز باش يكمل اللوك.",
      "cats.link": "اكتشف التشكيلة",

      "intro.eyebrow": "متجر الناده · فاس",
      "intro.title": "محل الناس اللي كتعشق الكرة، <span class=\"gold-text\">قرب Adri Gym.</span>",
      "intro.p": "متجر الناده محل ديال الصبابط والملابس الرياضية للرجال فطريق عين الشقف بفاس. حيوط عامرة بالصبابط والسنيكرز، جديد كل سيمانة، وفريق كينصحك فالمقاس المناسب قبل ما تطلب.",
      "intro.p1.t": "جرب فالمحل", "intro.p1.d": "دوز شوف الموديلات وجرب المقاس ديالك — كنبقاو محلولين حتى لليل.",
      "intro.p2.t": "ولا اطلب من بعيد", "intro.p2.d": "صيفط لينا الموديل فالواتساب، وكنوصلو لجميع مدن المغرب.",
      "intro.p3.t": "تخلص ملي توصلك", "intro.p3.d": "حتى خلاص أونلاين: كتخلص كاش للموصل.",
      "intro.cta": "الطريق للمحل",

      "new.eyebrow": "الجديد", "new.title": "وصلو هاد الموسم",
      "new.lead": "آخر الموديلات اللي وصلات للمحل. الكمية محدودة فكل مقاس — سول على التوفر فالواتساب.",
      "new.all": "شوف المتجر كامل",

      "why.eyebrow": "علاش متجر الناده", "why.title": "اللي كيدير<br>الفرق.",
      "why.1.k": "التوصيل", "why.1.big": "0 درهم", "why.1.t": "توصيل مجاني", "why.1.d": "لجميع مدن المغرب، بلا حد أدنى للشراء.",
      "why.2.k": "الخلاص", "why.2.big": "كاش", "why.2.t": "عند الاستلام", "why.2.d": "كتخلص غير ملي توصل السلعة ليديك.",
      "why.3.k": "المقاسات", "why.3.big": "39→45", "why.3.t": "خاص بالرجال", "why.3.d": "المقاسات الأكثر طلبا، كنأكدوها معاك قبل الإرسال.",
      "why.4.k": "الاختيار", "why.4.big": "+100", "why.4.t": "موديل فالمحل", "why.4.d": "كرة القدم، الجري، لايف ستايل وملابس، كيتجددو كل سيمانة.",
      "why.5.k": "الأوقات", "why.5.big": "00:00", "why.5.t": "محلولين حتى لليل", "why.5.d": "المحل كيبقى محلول حتى لنص الليل.",
      "why.6.k": "المجتمع", "why.6.big": "+6K", "why.6.t": "متابع فإنستغرام", "why.6.d": "تابع @nadahstore.1 باش تشوف الجديد هو الأول.",

      "steps.eyebrow": "كيفاش تطلب", "steps.title": "أربع خطوات،<br>بلا تعقيد.",
      "steps.lead": "بلا حساب، بلا كارطة بنكية. انت كتختار، حنا كنأكدو، وكنوصلو.",
      "steps.1.t": "ختار الموديل", "steps.1.d": "تصفح المتجر ولا الإنستغرام ديالنا وختار الصباط اللي عجبك.",
      "steps.2.t": "صيفطو فالواتساب", "steps.2.d": "كليكة وحدة على « اطلب » والميساج كيمشي بالموديل والمقاس ديالك.",
      "steps.3.t": "كنأكدو معاك", "steps.3.d": "التوفر، المقاس والثمن كنأكدوهم معاك قبل الإرسال.",
      "steps.4.t": "التوصيل والخلاص", "steps.4.d": "توصيل مجاني لجميع مدن المغرب. كتخلص كاش عند الاستلام.",

      "match.eyebrow": "يوم الماتش", "match.title": "محل<br>المشجعين.",
      "match.p": "الأصفر والأسود فالحيوط، الماياوات والشالات فالفيترينا: عند متجر الناده، الكرة كتعاش حتى برا التيران. أطقم كاملة، صبابط وماياوات لنهار الماتش.",
      "match.cta": "شوف أطقم الكرة",

      "faq.eyebrow": "أسئلة متكررة", "faq.title": "كنجاوبوك.",
      "faq.1.q": "شنو معنى « ماستر كوبي »؟", "faq.1.a": "هي نسخ عالية الجودة من موديلات الماركات الكبيرة، بفينيسيون مزيان وراحة قريبة من الأصلي، وبثمن مناسب بزاف. ماشي منتوجات رسمية ديال الماركات.",
      "faq.2.q": "واش التوصيل فابور بصح؟", "faq.2.a": "إيه، التوصيل مجاني لجميع مدن المغرب. المدة كتختلف حسب المدينة — كنأكدوها معاك فالواتساب ملي تطلب.",
      "faq.3.q": "كيفاش نخلص؟", "faq.3.a": "الخلاص كاش عند الاستلام، ولا مباشرة فالمحل ففاس. ما كاين حتى خلاص أونلاين.",
      "faq.4.q": "وإلا المقاس ما جاش مزيان؟", "faq.4.a": "قبل الإرسال كنتأكدو من المقاس معاك. وإلا كان شي مشكل، تواصل معانا فالواتساب ونلقاو حل.",
      "faq.5.q": "نقدر نجي نجرب فالمحل؟", "faq.5.a": "أكيد. متجر الناده كاين فطريق عين الشقف بفاس، قرب Adri Gym، ومحلول حتى لنص الليل.",

      "contact.eyebrow": "اتصل بنا", "contact.title": "دوز عندنا<br>ولا كتب لينا.",
      "contact.lead": "عندك سؤال على مقاس، موديل ولا توصيل؟ كنجاوبو بالزربة فالواتساب.",
      "contact.address": "العنوان", "contact.address.v": "طريق عين الشقف، قرب Adri Gym<br>فاس 30050، المغرب",
      "contact.phone": "الهاتف / واتساب", "contact.hours": "الأوقات", "contact.hours.v": "محلولين كل يوم<br>حتى 00:00",
      "contact.social": "إنستغرام",
      "contact.wa": "كتب لينا فالواتساب", "contact.call": "عيط لينا",
      "map.load": "عرض الخريطة", "map.note": "خرائط غوغل، كتحمل عند الطلب", "map.open": "فتح فخرائط غوغل",

      "footer.tag": "صبابط الكرة، سنيكرز وملابس للرجال — جودة ماستر كوبي، وتوصيل مجاني لجميع مدن المغرب.",
      "footer.shop": "المتجر", "footer.help": "مساعدة", "footer.store": "المحل",
      "footer.howto": "كيفاش تطلب", "footer.faq": "أسئلة متكررة", "footer.delivery": "التوصيل والخلاص",
      "footer.rights": "© {y} متجر الناده — فاس. جميع الحقوق محفوظة.",
      "footer.note": "أسماء الماركات المذكورة كتستعمل غير لوصف الموديلات.",

      "shop.eyebrow": "المتجر", "shop.title": "المتجر كامل",
      "shop.lead": "فلتر حسب التشكيلة ولا المقاس، ومن بعد اطلب بميساج واحد فالواتساب.",
      "filter.size": "المقاس", "filter.search": "بحث",

      "pdp.order": "اطلب عبر واتساب", "pdp.call": "عيط للمحل",
      "pdp.pick": "ختار المقاس ديالك", "pdp.picked": "المقاس المختار: {s}", "pdp.nosize": "كتب المقاس ديالك فميساج الواتساب.",
      "pdp.perk1": "توصيل مجاني لجميع مدن المغرب", "pdp.perk2": "الخلاص كاش عند الاستلام", "pdp.perk3": "متوفر حتى فالمحل ففاس",
      "pdp.mc": "جودة ماستر كوبي — نسخة عالية الجودة، ماشي رسمية.",
      "pdp.similar": "غادي يعجبوك حتى هادو", "pdp.back": "رجوع للمتجر", "pdp.notfound": "هاد الموديل ما بقاش متوفر أونلاين.",
      "wa.msg": "السلام متجر الناده 👋 بغيت : {p}{s}. واش متوفر؟",
      "wa.size": " — المقاس {s}", "wa.general": "السلام متجر الناده 👋 بغيت نعرف معلومات على الموديلات ديالكم."
    }
  };

  /* ---------- Langue ---------- */
  let lang = "fr";
  try { lang = localStorage.getItem("nadah-lang") === "ar" ? "ar" : "fr"; } catch (e) { /* stockage indisponible */ }
  const t = (key, vars = {}) => {
    let s = (T[lang] && T[lang][key]) || T.fr[key] || key;
    Object.keys(vars).forEach(k => { s = s.replace(`{${k}}`, vars[k]); });
    return s;
  };
  window.NADAH_T = t;

  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n, { y: new Date().getFullYear() }); });
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      el.dataset.i18nAttr.split(";").forEach(pair => {
        const [attr, key] = pair.split(":");
        if (attr && key) el.setAttribute(attr.trim(), t(key.trim()));
      });
    });
    document.querySelectorAll("[data-wa]").forEach(el => { el.href = waLink(t("wa.general")); });
    document.dispatchEvent(new CustomEvent("nadah:lang", { detail: lang }));
  }
  function setLang(next) {
    lang = next;
    try { localStorage.setItem("nadah-lang", lang); } catch (e) { /* ignore */ }
    applyLang();
  }

  const waLink = msg => `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`;
  window.NADAH_WA = waLink;
  window.NADAH_STORE = STORE;

  /* ---------- Header & footer partagés ---------- */
  const page = document.body.dataset.page || "home";
  const navItems = [
    { href: "index.html", key: "nav.home", id: "home" },
    { href: "boutique.html", key: "nav.shop", id: "shop" },
    { href: "boutique.html?cat=crampons", key: "nav.football", id: "football" },
    { href: "boutique.html?cat=sneakers", key: "nav.sneakers", id: "sneakers" },
    { href: "boutique.html?cat=vetements", key: "nav.clothing", id: "clothing" },
    { href: "index.html#contact", key: "nav.contact", id: "contact" }
  ];
  const brandHTML = `
    <a class="brand" href="index.html" aria-label="Nadah Store — accueil">
      <span class="brand-mark"><img src="images/brand/logo-mark.svg" alt="" width="34" height="34"></span>
      <span class="brand-word"><b>NADAH</b><small>STORE</small></span>
    </a>`;

  function renderChrome() {
    const header = document.getElementById("site-header");
    if (header) {
      header.className = "site-header";
      header.innerHTML = `
        <div class="wrap header-inner">
          ${brandHTML}
          <nav class="main-nav" aria-label="Navigation principale">
            <ul>${navItems.map(n => `<li><a href="${n.href}" data-i18n="${n.key}" ${n.id === page ? 'aria-current="page"' : ""}></a></li>`).join("")}</ul>
          </nav>
          <div class="header-actions">
            <button class="lang-switch" type="button" data-i18n="lang.switch" data-i18n-attr="aria-label:lang.label"></button>
            <a class="btn btn--gold" data-wa target="_blank" rel="noopener">${ICONS.chat}<span data-i18n="nav.order"></span></a>
            <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" data-i18n-attr="aria-label:nav.menu">${ICONS.menu}</button>
          </div>
        </div>
        <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-hidden="true">
          <div class="top on-dark">${brandHTML}<button class="icon-btn" type="button" data-close data-i18n-attr="aria-label:nav.menu">${ICONS.close}</button></div>
          <nav aria-label="Navigation mobile">${navItems.map(n => `<a href="${n.href}" data-i18n="${n.key}"></a>`).join("")}</nav>
          <div class="bottom">
            <a class="btn btn--wa" data-wa target="_blank" rel="noopener">${ICONS.chat}<span data-i18n="contact.wa"></span></a>
            <a class="btn btn--ghost" href="tel:${STORE.phoneIntl}" style="color:var(--paper)">${ICONS.phone}<span>${STORE.phoneDisplay}</span></a>
          </div>
        </div>`;

      const toggle = header.querySelector(".menu-toggle");
      const menu = header.querySelector(".mobile-menu");
      // backdrop-filter du header piège les enfants position:fixed — le menu vit dans <body>
      document.body.appendChild(menu);
      const open = v => {
        menu.classList.toggle("is-open", v);
        menu.setAttribute("aria-hidden", String(!v));
        toggle.setAttribute("aria-expanded", String(v));
        document.body.style.overflow = v ? "hidden" : "";
        if (v) menu.querySelector("[data-close]").focus(); else toggle.focus();
      };
      toggle.addEventListener("click", () => open(true));
      menu.querySelector("[data-close]").addEventListener("click", () => open(false));
      menu.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => open(false)));
      document.addEventListener("keydown", e => { if (e.key === "Escape" && menu.classList.contains("is-open")) open(false); });
      header.querySelector(".lang-switch").addEventListener("click", () => setLang(lang === "fr" ? "ar" : "fr"));
      const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
      window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    }

    const footer = document.getElementById("site-footer");
    if (footer) {
      footer.className = "site-footer";
      footer.innerHTML = `
        <div class="wrap">
          <div class="footer-grid">
            <div class="on-dark">${brandHTML}<p style="margin-top:18px;max-width:34ch" data-i18n="footer.tag"></p></div>
            <div><h4 data-i18n="footer.shop"></h4><ul>
              <li><a href="boutique.html?cat=crampons" data-i18n="cat.crampons"></a></li>
              <li><a href="boutique.html?cat=minifoot" data-i18n="cat.minifoot"></a></li>
              <li><a href="boutique.html?cat=tenues" data-i18n="cat.tenues"></a></li>
              <li><a href="boutique.html?cat=sneakers" data-i18n="cat.sneakers"></a></li>
              <li><a href="boutique.html?cat=vetements" data-i18n="cat.vetements"></a></li></ul></div>
            <div><h4 data-i18n="footer.help"></h4><ul>
              <li><a href="index.html#commander" data-i18n="footer.howto"></a></li>
              <li><a href="index.html#faq" data-i18n="footer.faq"></a></li>
              <li><a href="index.html#faq" data-i18n="footer.delivery"></a></li></ul></div>
            <div><h4 data-i18n="footer.store"></h4><ul>
              <li><a href="${STORE.maps}" target="_blank" rel="noopener" data-i18n="contact.address.v"></a></li>
              <li><a href="tel:${STORE.phoneIntl}" dir="ltr">${STORE.phoneDisplay}</a></li>
              <li><a href="${STORE.instagram}" target="_blank" rel="noopener" dir="ltr">@nadahstore.1</a></li></ul></div>
          </div>
          <div class="footer-bottom"><span data-i18n="footer.rights"></span><span data-i18n="footer.note"></span></div>
        </div>`;
    }

    if (!document.querySelector(".wa-float")) {
      const fl = document.createElement("a");
      fl.className = "wa-float"; fl.target = "_blank"; fl.rel = "noopener"; fl.dataset.wa = "";
      fl.setAttribute("aria-label", "WhatsApp");
      fl.innerHTML = ICONS.chat;
      document.body.appendChild(fl);
    }
  }

  /* ---------- Cartes produit ---------- */
  function sizeRange(sizes) {
    if (!sizes || !sizes.length) return t("sizes.ask");
    return sizes.length > 1 ? `${sizes[0]} – ${sizes[sizes.length - 1]}` : String(sizes[0]);
  }
  function priceLabel(p) { return p.price ? `${p.price} DH` : t("price.ask"); }
  function productCard(p) {
    return `
      <a class="product-card" href="produit.html?id=${encodeURIComponent(p.id)}">
        <div class="media">
          <img src="images/products/${p.id}.jpg" alt="${p.brand} ${p.name}" loading="lazy" decoding="async" width="640" height="800">
          <div class="tags">${p.isNew ? `<span class="tag">${t("tag.new")}</span>` : ""}<span class="tag tag--light">${t("tag.mc")}</span></div>
        </div>
        <div class="info">
          <span class="brand-name">${p.brand}</span>
          <h3>${p.name}</h3>
          <div class="meta"><span class="price">${priceLabel(p)}</span><span dir="ltr">${sizeRange(p.sizes)}</span></div>
        </div>
      </a>`;
  }
  window.NADAH_CARD = productCard;
  window.NADAH_SIZES = sizeRange;
  window.NADAH_PRICE = priceLabel;

  /* ---------- Apparition au scroll ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(el => el.classList.add("is-in")); return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(el => io.observe(el));
  }

  /* ---------- Carte Google chargée à la demande ---------- */
  function initMap() {
    const btn = document.querySelector("[data-load-map]");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const card = btn.closest(".map-card");
      card.innerHTML = `<iframe src="${STORE.mapEmbed}" title="Nadah Store — Google Maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;
    });
  }

  /* ---------- Icônes déclaratives ---------- */
  function fillIcons() {
    document.querySelectorAll("[data-icon]").forEach(el => {
      if (!el.dataset.iconDone) { el.insertAdjacentHTML("afterbegin", ICONS[el.dataset.icon] || ""); el.dataset.iconDone = "1"; }
    });
  }

  renderChrome();
  fillIcons();
  applyLang();
  initReveal();
  initMap();
})();
