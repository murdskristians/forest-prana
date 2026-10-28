export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  volume?: string;
  soldOut?: boolean;
};

export type Category = {
  id: string;
  title: string;
  background: string;
  thumb: string;
  products: Product[];
};

const m = (file: string) => `/media/${file}`;

export const PHONE = '29638565';
export const WHATSAPP_URL = 'https://wa.me/37129886177';
export const INSTAGRAM_URL = 'https://www.instagram.com/forestprana';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61555982821200';

export const images = {
  hero: m('8d6a8b2d15d74d9e6e36e9af7405e198.jpg'),
  logo: m('ab4ba70a5d063fd74509d1c717754858.png'),
  about: m('d299a8280d87f7a607c66d221f730f83.jpg'),
  iconCatalog: m('8c79903d2508eff32e8bbece43e0e327.jpg'),
  iconAbout: m('8afe1f7c761f216fdf37c28c575cf9b6.png'),
  iconPhone: m('d07c912b441899c3c3b3c49eb3b42aa1.jpg'),
  iconDelivery: m('61f9f651583042461a332298653aded4.jpg'),
  iconTerms: m('a132900a8b1b21084691bea66d3bb7db.jpg'),
};

const LIETOSANA_STD =
  'Lietošana: 30 ml uz glāzi silta ūdens (virs 40°C zūd vērtīgās vielas) ½ stundu pirms ēšanas. Bērniem 1-2 tējkarotes kopā ar ūdeni vai sulu. Diabētiķiem ieteicams sākt ar tējkaroti un ne vairāk kā 20g dienā.';

export const oximeli: Product[] = [
  {
    id: 'piladzu-oximels',
    name: 'Pīlādžu oximels',
    price: 7,
    image: m('e0798d9c8fb91aeb75d986346c1957aa.jpg'),
    volume: '200ml',
    description:
      'Pīlādžu oximels ir veselīgs dzēriens, kas palīdz imunitātes stiprināšanai, gremošanas sistēmas uzlabošanai un enerģijas līmeņa paaugstināšanai. To var lietot profilaktiski vai kā dabīgu līdzekli pret saaukstēšanos un vīrusu saslimšanām. Dzērienu var lietot atšķaidītu ar ūdeni, pievienot tējai vai izmantot kulinārijā kā marinādi vai salātu mērci.\n\nPīlādži ir bagātīgs vitamīnu un minerālvielu avots, kas sniedz būtisku atbalstu imūnsistēmai. Tie palīdz stiprināt veselību, uzlabot elpošanas sistēmas darbību, kā arī veicina labāku gremošanu un samazina dažādu bakteriālu infekciju risku. Šis atsvaidzinošais dzēriens ne tikai stiprina veselību, bet arī piešķir enerģiju un vitalitāti.\n\nPīlādžus nedrīkst lietot cilvēki, kuri cieš no hroniska gastrīta, paaugstinātas kuņģa skābes, asins recēšanas traucējumiem, vai tiem, kam ir tendence uz trombu veidošanos. Tāpat pīlādži nav ieteicami pie dažām sirds slimībām, piemēram, išēmiskās sirds slimības gadījumā.\n\nLieto, pievienojot ūdenim pēc garšas.\n\nSastāvs: pīlādži, medus, rabarberu etiķis.',
  },
  {
    id: 'kizila-oximels',
    name: 'Kizila oximels',
    price: 7,
    image: m('cc9023d7946113c59e46b767c1eee201.jpg'),
    volume: '200ml',
    description:
      'Kizilam (Cornus mas) ir vairākas ārstnieciskas īpašības, kas to padara vērtīgu ne tikai uzturā, bet arī medicīnā. Šeit ir dažas no galvenajām kizila ārstnieciskajām īpašībām:\n1. Imunitātes stiprināšana.\n2. Satur antioksidantus.\n3. Palidz gremošanas sistēmai.\n4. Pretiekaisuma iedarbība.\n5. Asinsspiediena un holesterīna līmeņa regulēšana.\n6. Aknu un nieru veselība.\n\n' +
      LIETOSANA_STD +
      '\n\nSastāvs: kizila ogas, medus, rabarberu etiķis.',
  },
  {
    id: 'dzervenu-oximels',
    name: 'Dzērveņu oximels',
    price: 7,
    image: m('28bd4dc12201486a94552c81621cf5a4.jpg'),
    volume: '200ml',
    description:
      'Dzērvenes ir īsts vitamīnu, minerālvielu un antioksidantu spēka avots. Tās palīdz stiprināt imūnsistēmu, cīnīties ar iekaisumiem un veicina sirds un urīnceļu veselību. Izmanto dabas dotās veltes, lai pasargātu sevi un ģimeni no rudens un ziemas vīrusiem. Pievieno dzērvenes ikdienas uzturā – tējās, dzērienos vai pat desertos!\n\nApvienojot dzērveņu vitamīnu bagātību ar medus un ābolu etiķa spēku, oksimels kļūst par neaizvietojamu palīgu saaukstēšanās un gripas sezonā. Lieto to profilaksei vai atveseļošanās laikā – viegli, garšīgi un dabiski! Pasūti dzērveņu oksimelu jau šodien un parūpējies par savu veselību visa gada garumā!\n\nSastāvs: meža dzērvenes, ābolu etiķis, medus.\n\n' +
      LIETOSANA_STD,
  },
  {
    id: 'kanadas-zeltgalvites-oximels',
    name: 'Kanādas zeltgalvītes oximels',
    price: 7,
    soldOut: true,
    image: m('3cebd604bce992ccbdc3114c1dcccb77.jpg'),
    volume: '200ml',
    description:
      'Veselības ieguvumi:\n- Veicina toksīnu izvadīšanu ar urīnu un sviedriem\n- Atbalsta nieru darbību un mazina tūsku\n- Attīra urīnceļus un palīdz novērst akmeņu veidošanos\n- Mazina klepu un iekaisumus\n- Atvieglo reimatisma un artrīta simptomus\n- Uzlabo ādas veselību vielmaiņas traucējumu gadījumā\n\nŠis dzēriens ne tikai veldzē slāpes, bet arī stiprina imunitāti, satur vitamīnus, minerālvielas, uzlabo vielmaiņu un veicina gremošanu. Ideāli piemērots karstai vasaras dienai vai kā piedeva pie jūsu iecienītākajiem kokteiļiem.\n\nGarša – patīkami svaiga un viegli zeltaina ar dabīgu skābumiņu.\n\nLieto – 1 - 2 ēdamkarotes glāzē ūdens.\n\nSastāvs: Kanādas zeltgalvīte, medus, ābolu etiķis, citrons.',
  },
  {
    id: 'kerpju-oximels',
    name: 'Ķērpju oximels',
    price: 7,
    image: m('0b612b6a531f63463ab525562a259b75.jpg'),
    volume: '200ml',
    description:
      'Ķērpju oximels ar plūmju everniju ir vērtīgs dabisks produkts ar plašu medicīnisku pielietojumu un daudzām veselībai labvēlīgām īpašībām. Tas ir dabiska alternatīva antibiotikām, palīdzot cīnīties pret infekcijām, vīrusiem un stiprina vispārējo veselību.\n\nMūsdienās antibiotiku rezistence ir liela globāla problēma, apdraudot spēju efektīvi ārstēt infekcijas slimības. Daudzi no mūsdienu klīniski nozīmīgākajiem antibiotiku veidiem ir iegūti no dabīgiem ķērpju ekstraktiem, kuri darbojas pret baktērijām, sēnītēm un vienšūņu parazītiem.\n\nOximels palīdz:\n- Saaukstēšanās un angīnas gadījumos,\n- Bronhīta ārstēšanai,\n- Pretiekaisuma un antiseptiskās īpašības, lai ātrāk atveseļotos,\n- Atkrēpošanai un elpceļu attīrīšanai.\n- Pretsāpju - mazina sāpes.\n- Antikoagulantu - novērš asins recēšanu.\n- Pretdrudža - samazina drudzi.\n- Pretvēža - novērš ļaundabīgo šūnu izplatīšanos.\n- Antidepresanta - palīdz mazināt trauksmi.\n\nOximeļa lietošana: 30 ml uz glāzi ūdens (silta, karstā virs 40 grādiem zūd vērtīgās vielas). Diabētiķiem 20 g dienā, bet sākt mazās devās ar 2 tējk.\n\nSastāvs: plūmju evernijas un meža aveņu ekstrakts ābolu etiķī, medus.',
  },
  {
    id: 'eglu-oximels',
    name: 'Egļu oximels',
    price: 7,
    soldOut: true,
    image: m('d971b53edaef41318e8069758c6cb3e6.jpg'),
    volume: '200ml',
    description:
      'Egļu oximels - dabiska palīdzība veselībai! Lieto klepus mazināšanai, kakla sāpēm, imunitātes stiprināšanai, ķermeņa temperatūras pazemināšanai, avitaminozes novēršanai, urīnceļu infekcijām, toksīnu izvadīšanai, gremošanas un vielmaiņas uzlabošanai, kā arī novecošanas procesu aizkavēšanai.\n\n' +
      LIETOSANA_STD +
      '\n\nSastāvs: egļu jauno dzinumu ekstrakts ābolu etiķī, medus.',
  },
  {
    id: 'priezu-oximels',
    name: 'Priežu oximels',
    price: 7,
    image: m('2acb66e8a667d4a310138ed347fa3106.jpg'),
    volume: '200 ml',
    description:
      'Palīdz klepus mazināšanai, imunitātes stiprināšanai un ķermeņa temperatūras pazemināšanai. Noderīgs arī žultspūšļa iekaisuma, avitaminozes, urīnceļu infekciju gadījumos un toksīnu izvadīšanai no organisma. Aizkavē novecošanas procesus un veicina gremošanu un vielmaiņu.\n\n' +
      LIETOSANA_STD +
      '\n\nSastāvs: priežu skuju ekstrakts ābolu etiķī, medus.',
  },
  {
    id: 'pluskoka-oximels',
    name: 'Plūškoka oximels',
    price: 7,
    image: m('32b08b8952bdeb434101de2569535995.jpg'),
    volume: '200ml',
    description:
      'Imunitātes stiprināšana – C vitamīna un antioksidantu avots, kas palīdz cīnīties pret saaukstēšanos un vīrusiem.\n\nDabīga gremošanas uzlabošana – ogās esošās šķiedrvielas un fermentētais ābolu etiķis līdzsvaro kuņģa darbību.\n\nLieliska garša un dabīgums – bez pievienotiem konservantiem vai mākslīgām piedevām.\n\nĀdas veselības uzlabošana – plūškoks ievērojami aizkavēs ādas novecošanas procesu, piešķirs ādai mirdzumu un aizkavēs mīmikas krunciņu veidošanos, uzlabojot ādas kopējo veselības stāvokli.\n\nSastāvs: plūškoka ogas, medus, rabarberu etiķis.',
  },
  {
    id: 'oximels-sieviesu-harmonijai',
    name: 'Oximels sieviešu harmonijai',
    price: 7,
    image: m('d9506e212d584833c9a677eaf087bf8c.jpg'),
    volume: '200ml',
    description:
      'Oximels sieviešu harmonijai atvieglo menopauzes simptomus, piedāvājot dabisku atbalstu sievietēm šajā dzīves posmā. Tas satur augu fitoestrogēnus, kuru unikālās īpašības kopā ar oximeli veido spēcīgu sinerģiju ķermeņa līdzsvaram.\n\nSarkanais āboliņš palīdz samazināt karstuma viļņus, svīšanu un nemieru menopauzes laikā. Tas atjauno hormonālo līmeni un ļauj justies kā skaistai sievietei pilnziedā.\n\nSalvija ir bagāta ar fitohormoniem, kas ne tikai efektīvi samazina svīšanu, bet arī stimulē dzimumtieksmi, tāpēc to bieži dēvē par "sieviešu afrodiziaku".\n\nApiņi nomierina nervu sistēmu, līdzsvaro hormonālo sistēmu un piemīt estrogēnas, pretvīrusu un antibakteriālas īpašības.\n\nLietošana: 30 ml uz glāzi silta ūdens (virs 40°C zūd vērtīgās vielas) ½ stundu pirms ēšanas. Diabētiķiem ieteicams sākt ar tējkaroti un ne vairāk kā 20g dienā.\n\nSastāvs: sarkanā āboliņa, salvijas un apiņu ekstrakts ābolu etiķī, medus.',
  },
  {
    id: 'upenu-oximels',
    name: 'Upeņu oximels',
    price: 7,
    image: m('de7071f23c9058b464128506a5e54e30.jpg'),
    volume: '200ml',
    description:
      'Upeņu Oximels - veselīgs, garšīgs un slāpes veldzējošs dzēriens. Dabiska enerģijas deva!\n\nSenajā Persijā to sauca par Sekanjabin. Šis tradicionālais dzēriens no Irānas un arābu pasaules apvieno etiķi un medu, un tā saknes meklējamas vairāk nekā 4000 gadu senā pagātnē. Sekanjabin tika izmantots gan kā zāles, gan kā slāpes veldzējošs dzēriens, un tas tiek uzskatīts par oriģinālo Oximel versiju, kuru vēlāk pārņēma grieķi un romieši.\n\nLieto, pievienojot ūdenim pēc garšas.\n\nSastāvs: Upenes, piparmētras, medus, rabarberu etiķis.',
  },
  {
    id: 'uguns-oximels',
    name: 'Uguns oximels',
    price: 7,
    image: m('ee62462c7365266423e95faaa52745be.png'),
    volume: '200ml',
    description:
      'Uguns oximels ir dabīgs līdzeklis ar spēcīgu antibakteriālu un sildošu iedarbību, kas palīdz pret drudzi, gripu, saaukstēšanos, iesnām un kakla sāpēm. Tas veicina gan asinsriti, gan gremošanu, piešķirot enerģiju un stiprina organisma aizsargspējas!\n\nKā lietot:\n- Pie pirmajiem saslimšanas simptomiem – iedzer 1-2 ēdamkarotes.\n- Bagātini savus dzērienus un ēdienus – pievieno sulām, smūtijiem, salātiem u.c. Iegūsti unikālu pikantās garšas sprādzienu.\n- Rīta rituālam – pievieno 1 tējk. siltam ūdenim.\n- Gremošanas stimulēšanai – 1-2 tējk. pirms ēšanas.\n\nSastāvs: ķiploks, sīpols, čili pipars, cidonija, mārrutka un ingvera sakne, kanēlis, sinepju sēklas, rabarberu etiķis, medus.',
  },
  {
    id: 'meza-oximels',
    name: 'Meža oximels',
    price: 7,
    image: m('9fd7168ee3e46ec9ea248b82b1d72a88.jpg'),
    volume: '200ml',
    description:
      'Meža oximelī apvienoti mūsu trīs mūžzaļo koku spēks un vērtīgās īpašības. Tajā ir daudz vitamīnu un minerālvielu.\n\nMeža oximeli lieto klepum, imunitātes stiprināšanai, ķermeņa temperatūras pazemināšanai, pie žults pūšļa iekaisuma un avitaminozes, urīnceļu infekcijas, toksīnu izvadīšanai, novecošanas procesu aizkavēšanai, gremošanu un vielmaiņu veicinoša, aizkuņģa dziedzera darbības aktivizēšanai, insulīna veidošanai, muskuļu krampjiem.\n\n' +
      LIETOSANA_STD +
      '\n\nSastāvs: priežu, egļu un kadiķu skuju ekstrakts ābolu etiķī, medus.',
  },
  {
    id: 'vilkabelu-oximels',
    name: 'Vilkābeļu oximels',
    price: 7,
    image: m('3c062eac60ec0064475088e470f620c0.jpg'),
    volume: '200ml',
    description:
      'Ārstnieciskās īpašības: Vilkābele ir pazīstama kā dabīgs līdzeklis sirds un asinsvadu stiprināšanai. Palīdz uzlabot asinsriti, normalizēt asinsspiedienu un samazināt sirds ritma traucējumus. Pateicoties nomierinošajām īpašībām, vilkābele palīdz arī trauksmes, stresa un bezmiega gadījumā.\n\nOximelā apvienots vilkābeles ogu spēks ar ābolu etiķa un medus labvēlīgo iedarbību, nodrošinot organismam svarīgus vitamīnus un minerālvielas.\n\nLietošana:\n- Pieaugušajiem: 30 ml oksimela atšķaidīt glāzē ūdens (silta, bet ne karstāka par 40°C).\n- Bērniem: 1-2 tējkarotes oksimela ar ūdeni vai sulu.\n- Diabētiķiem: sākt ar ½ tējkarotes, nepārsniedzot 20 g dienā.\n\nSastāvs: Vilkābeles ogas, medus, ābolu etiķis.',
  },
  {
    id: 'irbenes-oximels',
    name: 'Irbenes oximels',
    price: 7,
    image: m('dfdb0cce024fbd08741b9bf7404a3271.png'),
    volume: '200ml',
    description:
      'Irbenes ogu oximels – sirds un imunitātes spēkam.\n\nIrbenes oximels apvieno senču zināšanas un dabas dāsnumu:\n- bagāts ar vitamīniem un minerālvielām – stiprina imunitāti,\n- palīdz bronhīta, plaušu slimību un saaukstēšanās gadījumos,\n- palīdz izvadīt lieko šķidrumu, samazina tūsku,\n- atbalsta sirds un asinsvadu sistēmu,\n- palīdz samazināt nervu spriedzi, miega traucējumus un stresu,\n- veicina gremošanu un uzlabo zarnu darbību.\n\nSastāvs: irbeņu ogas, medus, ābolu etiķis.\n\nLieto: 1 - 2 ēdamkarotes uz glāzi ūdens.\n\nPiesardzība un kontrindikācijas: Irbeni nevajadzētu lietot:\n- ja ir pastiprināta asins recēšana vai nosliece uz trombu veidošanos,\n- grūtniecības laikā,\n- podagras un nieru slimību gadījumos.',
  },
  {
    id: 'barbeles-oximels',
    name: 'Bārbeles oximels',
    price: 7,
    image: m('ca3c922db54d1be2d56ebf1e2aa7f2b6.png'),
    volume: '200ml',
    description:
      'Atklāj bārbeļu ogu oximeli – spēcīgu, gardu un dabīgu veidu, kā rūpēties par kuņģa, zarnu trakta un aknu veselību.\n\nKāpēc izvēlēties bārbeļu oximeli?\n- Satur berberīnu, kas atbalsta gremošanu un aknu darbību\n- Palīdz mazināt nelabumu, caureju un pēcdzemdību asiņošanu\n- Dabiski stiprina imunitāti un uzlabo organisma tonusu\n- Garšīgs un viegli lietojams – pievieno 1 - 2 ēdamkarotes ūdenim.\n\nSastāvs: bārbeļu ogas, medus, ābolu etiķis.\n\nBrīdinājums: nav ieteicamas aknu cirozes, smagu formu hepatīta vai žultsakmeņu slimības gadījumos, jo berberīns var izraisīt akmeņu pārvietošanu un žultsvadu nosprostojumu.',
  },
];

export const ziedes: Product[] = [
  {
    id: 'kastanu-ziede',
    name: 'Kastaņu ziede',
    price: 5,
    image: m('e4d8e93f97f8ab7a426a315b258e7ccd.jpg'),
    volume: '50ml',
    description:
      'Kastaņu ziede – rūpes par Jūsu kājām! 🌿\n\nZiedei piemīt asinsvadus aizsargājošas, vēnas tonizējošas, pretiekaisuma un antioksidanta īpašības. Tā stiprina asinsvadu sieniņas, palīdz izvadīt lieko šķidrumu un samazina tūsku. Veicina limfas un asinsriti, uzlabojot audu tvirtumu un sniedzot atvieglojumu no niezes, sāpēm un smaguma sajūtas kājās.\n\nSastāvs: zirgkastaņu un vīnogu lapu ekstrakts rīsu kliju eļļā, vasks.',
  },
  {
    id: 'tauksaknes-ziede',
    name: 'Tauksaknes ziede',
    price: 5,
    image: m('803936677cf667eef4c612b7a7d5eb18.jpg'),
    volume: '50ml',
    description:
      'Vai ciešat no sāpēm mugurā vai locītavās? Tauksaknes ziede palīdzēs atvieglot diskomfortu un paātrinās traumu dziedēšanu!\n\nLieto pie:\n- Mugurkaula sāpēm traumu un saslimšanu gadījumos\n- Kaulu, muskuļu, locītavu un saišu traumām (lūzumi, sastiepumi, sasitumi u.c.)\n- Iekaisuma slimībām, piemēram, osteomielīts, miozīts\n- Muskuļu sāpēm pēc sporta vai lielas fiziskās slodzes\n\nSastāvs: tauksaknes ekstrakts saulespuķu eļļā, vasks.',
  },
  {
    id: 'strutenu-ziede',
    name: 'Struteņu ziede',
    price: 5,
    image: m('1d4cfefc8f39614a825332bc23b35734.jpg'),
    volume: '50ml',
    description:
      'Šī ziede tiek izmantota kā palīgs cīņā ar dažādām ādas problēmām, piemēram, kārpām, dzimumzīmēm, pigmenta plankumiem, tulznām, papilomām un lipomām. Tā ir piemērota arī diatēzes, neirodermatīta, ekzēmas, dermatīta, alerģisku izsitumu, niezes un pietūkuma ārstēšanai pēc kukaiņu kodumiem, sēnīšu infekcijām, ādas tuberkulozes, kā arī labdabīgiem un ļaundabīgiem audzējiem.\n\nLietošanas ieteikumi: Ziedi lieto ne biežāk kā reizi dienā. Pirms pirmās lietošanas uzklājiet nelielu daudzumu uz elkoņa locītavas iekšpuses un pārliecinieties, ka nerodas alerģiska reakcija. Tā kā ziede satur indīgu augu, pēc tās lietošanas rūpīgi nomazgājiet rokas ar ziepēm. Nelietot uz atvērtām brūcēm, gļotādām un izvairīties no saskares ar acīm.\n\nSastāvs: strutenes ekstrakts olīveļļā, bišu vasks.',
  },
  {
    id: 'darvas-ziede',
    name: 'Darvas ziede',
    price: 5,
    image: m('3b9d8409021fb59dc335035e7712a5d3.jpg'),
    volume: '50 ml',
    description:
      'Darvas ziede ir efektīvs līdzeklis dažādu ādas problēmu ārstēšanai, piemēram: strutojošas brūces, augoņi, ekzēma, dermatīts, atopiskais dermatīts, psoriāze, seboreja, ādas sēnīšu infekcijas, apsaldējumi, izgulējumi, apdegumi, herpes vīrusa izsitumi, kašķis. Tā novērš niezi un iekaisumu, veicina brūču dzīšanu un audu reģenerāciju. Piemīt pretsāpju efekts.\n\nLietošana: 2 reizes dienā, ne ilgāk par 3 nedēļām. Pēc 2 nedēļu pārtraukuma kursu var atkārtot.\n\nZiedei ir specifiska dūmu smarža, kas atbaida kukaiņus (insekticīds efekts).\n\nSastāvs: bērzu mizas un vērmeles ekstrakts olīveļļā, mežrozītes augļu un priežu jauno dzunumu ekstrakts vīnogu kauliņu eļļā, bērzu darva, egļu sveķi, vasks.',
  },
  {
    id: 'senu-ziede',
    name: 'Sēņu ziede',
    price: 5,
    image: m('b9e0cb8932ec69fd7eafe2c5603c69b3.jpg'),
    volume: '50 ml',
    description:
      'Sēnēm ir sena vēsture izmantošanai medicīnā dažādās kultūrās visā pasaulē. Pēdējos gados pasaulē, sevišķi Āzijā, ir plaši pētītas to vērtīgās medicīniskās īpašības. Ziedē esošās dabas veltes darbojas ļoti plašā spektrā.\n\nSēņu ziedei ir pretsēnīšu, pretiekaisuma, pretsāpju, brūču dziedējoša, antibakteriāla un pretvīrusu (arī herpes) iedarbība. Ziede iedarbojas imūnstimulējoši un spēj nomākt jaunveidojumu attīstību, gan labvēlīgo, gan ļaundabīgo. Paātrina audu reģenerāciju.\n\nSastāvs: sarkanās mušmires, sērpiepes, milzu apaļpūpēža, īstās posapiepes, melnās cietpiepes un parastās apmalpiepes ekstrakts olīveļļā, bišu vasks.',
  },
  {
    id: 'kartupelu-ziede',
    name: 'Kartupeļu ziede',
    price: 5,
    image: m('c4b567fc76f599d52d5e1d87f45836f7.jpg'),
    volume: '50 ml',
    description:
      'Kartupeļu ziedi lieto sausas, raupjas un plaisājošas, iekaisušas ādas kopšanai (pēdām, papēžiem, elkoņiem, rokām), bērnu ādai (autiņu iekaisums), apsārtumam, alerģijai.\n\nSatur: flavonoīdus, ogļhidrātus (ciete, cukurs), minerālvielas (nātrijs, kālijs, mangāns, kalcijs, fosfors, cinks, magnijs, selēns), vitamīnus (beta-karotīns, C, E, K, PP, B1, B2, B6), triptofānu, taukskābes, kofeīnskābi.\n\nSastāvs: kartupeļu un kumelītes ekstrakts olīveļļā, vasks, peru balzāms.',
  },
  {
    id: 'asinszales-ziede',
    name: 'Asinszāles ziede',
    price: 2,
    image: m('87495b6e9f2dd95e49eca80e1445a535.jpg'),
    volume: '30 ml',
    description:
      'Asinszāles ziede efektīva apdegumu un nedzīstošu brūču ārstēšanai, inficētu brūču, abscesu gadijumos.\n\nIedarbība: antibakteriāla, pret iekaisuma, dezinficējoša un bojātas ādas un gļotādas audus mīkstinoša un reģenerāciju sekmējoša.\n\nSastāvs: asinszāles un propolisa ekstrakts vīnogu kauliņu eļļā, vasks.',
  },
];

export type Vinegar = { name: string; price: number; image: string; soldOut?: boolean };

export const etiki: Vinegar[] = [
  { name: 'Bumbieru etiķis', price: 4, image: m('5a639f93f2bcd304b4f5dfaf8c23921b.jpg') },
  { name: 'Ābolu etiķis', price: 4, image: m('bd186feef6d7afa109ca9ba76517e464.jpg') },
  { name: 'Rabarberu etiķis', price: 4, image: m('80da693b51a998802aa22ed2f77f6bd9.jpg'), soldOut: true },
  { name: 'Plūmju etiķis', price: 4, image: m('58d62919196571d140dc7686a7b4b86c.jpg') },
  { name: 'Jāņogu etiķis', price: 4, image: m('8b0b01789259a98f68b300b865161366.jpg') },
  { name: 'Upeņu etiķis', price: 4, image: m('df3f215ca23549d7d6cfe4b5cadac6c5.jpg') },
];

export const etikiBenefits = [
  'Veido organismā sārmainu vidi',
  'Regulē asinsspiedienu',
  'Cīnās pret mikrobiem, vīrusiem, baktērijām, infekcijām',
  'Mazina artrīta sāpes, izvadot no locītavām sāļus un toksīnus',
  'Veicina gremošanu, barības vielu uzsūkšanos un līdzsvaro PH līmeni',
  'Uzlabo vielmaiņu',
  'Palīdz kontrolēt un normalizēt svaru',
  'Šķīdina nierakmeņus un žultsakmeņus',
  'Mazina aizcietējumus',
  'Palīdz pie ādas problēmām, saglabā ādu tvirtu, palēnina novecošanu',
  'Mazina kakla iekaisumu, laringītu',
  'Palīdz varikozām un zirnekļa vēnām, noņem tūsku kājām',
  'Dziedē kukaiņu kodumus un dzēlienus.',
];

export const citi: Product[] = [
  {
    id: 'meza-deguna-pilieni',
    name: 'Meža deguna pilieni',
    price: 5,
    image: m('016703d9dcf8e681c3ca578fe3f2fe75.jpg'),
    volume: '30 ml',
    description:
      'Lieto gļotādas infekcijām, iedarbība antiseptiska, antibakteriāla, antioksidatīva, tūsku un iekaisumu mazinoša, audus apasiņojoša, sildoša, elpceļus atbrīvojoša.\n\nSastāvs: egles, priedes, kadiķu skuju un piparmētru un propolisa ekstrakts olīveļļā, priežu sveķi.',
  },
  {
    id: 'cagas-tinktura',
    name: 'Čagas tinktūra',
    price: 5,
    image: m('0cdd77764b607fade2b576786212d74e.jpg'),
    volume: '30 ml',
    description:
      'Antioksidanta darbība: Čaga satur dažādus antioksidantus, kas var palīdzēt aizsargāt šūnas no brīvajiem radikāļiem un oksidatīvā stresa.\n\nImūnsistēmas atbalsts: Pētījumi liecina, ka čaga var uzlabot imūnsistēmu, palīdzot baltajiem asinsķermenīšiem efektīvāk cīnīties ar infekciju vai slimībām.\n\nPretvīrusu darbība.\n\nSirds veselības atbalsts: Čaga var palīdzēt samazināt holesterīna līmeni, kas var samazināt sirds slimību risku.\n\nAtbalsts aknu veselībai.\n\nLieto: Profilaksei 20 pilieni vienreiz dienā. Pie saslimšanām 20 pilieni trīs reizes dienā.',
  },
  {
    id: 'japanas-dizsurenes-tinktura',
    name: 'Japānas dižsūrenes tinktūra',
    price: 15,
    soldOut: true,
    image: m('5842e223248b47dd84c569e22c99df89.jpg'),
    volume: '100 ml',
    description:
      'Ārstnieciskās īpašības:\n\nPalīgs Laima slimības gadījumā – mazina neiroiekaisumu, aizsargā nervu sistēmu un palīdz atjaunot spēkus.\n\nPretiekaisuma un antioksidatīva – palīdz mazināt hroniskus iekaisumus, stiprina imunitāti, atbalsta ādas un locītavu veselību.\n\nSirds un asinsvadu aizsardzībai – uzlabo asinsriti, samazina holesterīnu, palīdz novērst trombu veidošanos.\n\nNeiroprotektīva – aizsargā smadzeņu šūnas, stimulē asinsriti smadzenēs, uzlabo koncentrēšanos, mazina neiroiekaisumu, palīdz novērst atmiņas traucējumus. Mazina Alcheimera un Parkinsona slimības risku.\n\nPretvēža – kavē audzēju šūnu augšanu, veicina to dabisku pašiznīcināšanos, bloķē metastāzes un palīdz novērst jaunu asinsvadu veidošanos ap audzējiem. Pētījumi liecina par efektu pret vairākām audzēju formām – īpaši krūts, prostatas, aknu un resnās zarnas vēzi.\n\nPretvīrusu un antibakteriāla – palīdz organismam cīnīties ar infekcijām, tostarp gripas un herpes vīrusiem.\n\nAknu aizsargājoša un detoksicējoša – palīdz izvadīt toksīnus, smagos metālus un atvieglo aknu darbību.\n\nLieto pa 20–30 pilieniem 2–3 reizes dienā. Nav piemērots grūtniecēm, zīdītājām un bērniem. Lietojot medikamentus, īpaši asins šķīdinošus, jākonsultējas ar speciālistu.',
  },
  {
    id: 'meza-dipsaka-tinktura',
    name: 'Meža dipsaka tinktūra',
    price: 15,
    image: m('b5c1911e50324b5cd7769029d058431e.jpg'),
    volume: '100 ml',
    description:
      'Laima slimības atbalstterapijā. Tā palīdz mazināt hronisku nogurumu, muskuļu un locītavu sāpes, uzlabot pašsajūtu un stimulēt organisma dabiskās dziedināšanās spējas.\n\nPretiekaisuma un antibakteriāla iedarbība. Sakne satur iridoīdus (loganīnu, dipsakosīdu, dipsakogenīnu), kas nodrošina pretiekaisuma un antibakteriālu efektu, stiprina kapilārus un veicina rētu dzīšanu.\n\nLocītavām, saitēm un muskuļiem. Dipsaka sakne ir tradicionāls līdzeklis reimatisma, artrīta, fibromiālģijas un muguras sāpju ārstēšanā. Tā mazina sāpes, uzlabo asinsriti un veicina audu reģenerāciju pēc sastiepumiem, lūzumiem vai operācijām.\n\nAtbalsts nervu sistēmai un smadzeņu veselībai. Pētījumi rāda, ka meža dipsaks var būt palīglīdzeklis Alcheimera slimības gadījumā — tas mazina iekaisumu smadzenēs un palīdz aizsargāt neironus no oksidatīviem bojājumiem.\n\nAtbalsts onkoloģijas gadījumā. Pētnieciskos darbos minēts, ka dipsaks palīdz onkoloģisku saslimšanu gadījumā, pateicoties antioksidatīvajām un pretiekaisuma īpašībām, kas palīdz organismam cīnīties ar šūnu mutācijām un atjaunoties pēc ārstēšanas.\n\nAttīrīšana un detoksikācija. Dipsakam piemīt diurētiskas un sviedrējošas īpašības, kas palīdz organismam izvadīt toksīnus, mazina tūsku.\n\nLietošana: 10–20 pilieni 2–3 reizes dienā (ūdenī vai tējā).',
  },
  {
    id: 'natru-saknes-tinktura',
    name: 'Nātru saknes tinktūra',
    price: 15,
    image: m('dce7ffac819ea52b4f1d5b6a2e991a19.png'),
    volume: '100 ml',
    description:
      'Prostatas veselības atbalsts: Nātru saknes labvēlīgi ietekmē vīriešu veselību. Tā palīdz mazināt labdabīgas prostatas palielināšanās (BPH) simptomus, uzlabojot urinēšanu.\n\nSpēcīgs pretiekaisuma līdzeklis: palīdz atvieglot alerģisku rinītu (siena drudzi), samazina gļotādas iekaisumu un atvieglo elpošanu.\n\nAsinsrites un sirds veselība: Spēj novērst sirds un asinsvadu slimības.\n\nMatu spēks no saknēm: Lielisks līdzeklis matu stiprināšanai! Tā palīdz mazināt matu izkrišanu un stimulē veselīgu augšanu, kā arī cīnās ar blaugznām.\n\nImunitātes sargs: Pateicoties spēcīgai antibakteriālai, pretvīrusu un pretsēnīšu iedarbībai, nātru sakne palīdz organismam efektīvāk pretoties dažādām infekcijām.\n\nIekšķīgi: Lieto pa 20–30 pilieniem 2 līdz 3 reizes dienā, iemaisot nelielā daudzumā ūdens. Ieteicams lietot kursa veidā (1 mēnesi), pēc tam ievērojot nelielu pārtraukumu.\n\nĀrīgi (matu augšanai un stiprināšanai): Iepilini dažus pilienus tinktūras pirkstu galos un pēc matu mazgāšanas rūpīgi iemasē to galvas ādā. Tas uzlabos asinsriti un nogādās vērtīgās vielas taisnā ceļā pie matu saknītēm. Nav jāizskalo!',
  },
  {
    id: 'pretparazitu-kapsulas',
    name: 'Pretparazītu kapsulas',
    price: 15,
    image: m('ba33193a0d6a1a4fbb80d09f214f9275.png'),
    volume: '60 gab.',
    description:
      '3 spēcīgi augi organisma attīrīšanai no parazītiem.\n\nGaileņu sastāvā esošā hitinmannoze ļoti veiksmīgi tiek galā ar dažādiem zarnu parazītiem un to oliņām.\n\nVērmelei piemīt prettārpu īpašības, kā arī tā iznīcina citus parazītus, kuri nokļūst cilvēku organismā no ūdens, ēdiena un kukaiņu kodumiem.\n\nBiškrēsliņš darbojas pret zarnu parazītiem, patogēnām baktērijām.\n\nLieto 7 dienas 2 kapsulas no rīta pusstundu pirms ēšanas un 2 kapsulas vakarā pirms gulētiešanas. Ietur pauzi 14 dienas un tad atkārto 7 dienu kursu.',
  },
];

export const categories = {
  oximeli: {
    id: 'oximeli',
    title: 'OXIMEĻI',
    background: m('a5ebdb43f6b68197a87cef357bba3d07.jpg'),
    thumb: m('68ef6d69788bf4bd75c0d2a8a05cf3b4.jpg'),
  },
  etiki: {
    id: 'etiki',
    title: 'ETIĶI',
    background: '',
    thumb: m('31a60fee156619d35a263593ad9f0261.jpg'),
  },
  ziedes: {
    id: 'ziedes',
    title: 'Ziedes',
    background: m('7365432af98797c35bba3e63de353d57.jpg'),
    thumb: m('dd6280f37c17349da943750b5e94b508.jpg'),
  },
  citi: {
    id: 'citi',
    title: 'CITI PRODUKTI',
    background: m('709953b32025230b3a3fbee9a8c38978.jpg'),
    thumb: m('55de623134582f1edb21f0eab679db5e.jpg'),
  },
};

/** Every remote media file used by the site – consumed by scripts/fetch-assets.mjs */
export const CANVA_MEDIA_BASE = 'https://forestprana.my.canva.site/_assets/media/';
