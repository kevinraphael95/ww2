// ============================================================
// data.js
// Sources : Wikipedia FR, Herodote.net, France24, Cairn.info,
// Sciences Po MVRC, IWM, Theatrum Belli, Radio-Canada,
// Le Monde, Cols Bleus (Marine Nationale), World History Org
// ============================================================

const EVENTS = [

  /* ══════════════════════════════════════════
     1937
  ══════════════════════════════════════════ */
  {
    year: 1937, dateShort: "7 juil.", cat: "known", icon: "🌏",
    title: "Incident du pont Marco Polo — début de la guerre sino-japonaise",
    detail: "Un incident nocturne entre troupes japonaises en manœuvre et soldats chinois près de Pékin (à 15 km) sert de prétexte à une invasion à grande échelle. Le soldat japonais soi-disant disparu s'était attardé dans une maison close. C'est le début réel de la Seconde Guerre mondiale en Asie, deux ans avant l'Europe.",
    stat: "Guerre sino-japonaise : 35 à 50 millions de victimes au total sur 8 ans (estimations historiques)",
    wiki: "https://fr.wikipedia.org/wiki/Incident_du_pont_Marco-Polo"
  },
  {
    year: 1937, dateShort: "13 août", cat: "known", icon: "🏙️",
    title: "Bataille de Shanghai — la guerre devient totale en Chine",
    detail: "L'une des premières grandes batailles de la guerre sino-japonaise. Shanghai devient un champ de ruines après trois mois de combats urbains d'une intensité rare. La résistance chinoise est acharnée, forçant le Japon à engager 200 000 hommes dans la région.",
    stat: "Combats d'août à novembre 1937 ; dizaines de milliers de civils tués, pertes militaires de chaque côté estimées à plusieurs dizaines de milliers",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_Shanghai_(1937)"
  },
  {
    year: 1937, dateShort: "Oct.", cat: "rare", icon: "🧭",
    title: "L'exode massif des civils chinois devant l'avance japonaise",
    detail: "Après la chute de Shanghai et la progression japonaise vers Nankin, des millions de civils fuient vers l'intérieur du pays. Les infrastructures chinoises s'effondrent sous la pression militaire. C'est l'un des plus grands mouvements de population de l'histoire moderne.",
    stat: "Plusieurs millions de déplacés internes en Chine, capitale déplacée de Nankin à Wuhan puis Chongqing",
    wiki: "https://fr.wikipedia.org/wiki/Seconde_guerre_sino-japonaise"
  },
  {
    year: 1937, dateShort: "13 déc.", cat: "known", icon: "🩸",
    title: "Massacre de Nankin par l'armée impériale japonaise",
    detail: "Après la chute de Nankin le 13 décembre, les troupes japonaises se livrent pendant six semaines à un massacre systématique de civils et de soldats désarmés. Le tribunal militaire international pour l'Extrême-Orient établit le bilan à 200 000 morts ; les estimations académiques varient entre 100 000 et 300 000 selon la zone géographique et la durée retenues. Les documents ont été délibérément détruits par le Japon en 1945.",
    stat: "Fourchette académique : 100 000 à 300 000 morts ; 200 000 établis par le tribunal de Tokyo (1946) ; 20 000 femmes violées selon le tribunal",
    wiki: "https://fr.wikipedia.org/wiki/Massacre_de_Nankin"
  },
  {
    year: 1937, dateShort: "1937", cat: "anecdote", icon: "📄",
    title: "Le protocole Hossbach — Hitler expose ses plans d'expansion",
    detail: "Lors d'une réunion secrète le 5 novembre 1937, Hitler présente à ses chefs militaires ses intentions d'expansion territoriale en Europe par la guerre si nécessaire. Le document est rédigé de mémoire par le colonel Hossbach. Il devient une preuve majeure à Nuremberg.",
    stat: "Document interne du 5 novembre 1937, preuve clé au procès de Nuremberg en 1945",
    wiki: "https://fr.wikipedia.org/wiki/Protocole_Hossbach"
  },

  /* ══════════════════════════════════════════
     1938
  ══════════════════════════════════════════ */
  {
    year: 1938, dateShort: "mars", cat: "rare", icon: "🚆",
    title: "Kindertransport — près de 10 000 enfants juifs évacués vers le Royaume-Uni",
    detail: "Après la Nuit de Cristal, des milliers d'enfants juifs sont envoyés en Grande-Bretagne pour échapper aux persécutions nazies. Les enfants voyageaient seuls, avec une étiquette portant leur nom accrochée au manteau. Beaucoup ne reverront jamais leurs parents.",
    stat: "Environ 10 000 enfants sauvés entre décembre 1938 et septembre 1939",
    wiki: "https://fr.wikipedia.org/wiki/Kindertransport"
  },
  {
    year: 1938, dateShort: "12 mars", cat: "known", icon: "🇦🇹",
    title: "Anschluss — l'annexion de l'Autriche sans combat",
    detail: "Les troupes allemandes entrent en Autriche le 12 mars 1938. Hitler réalise son rêve d'unir les peuples germaniques. La population autrichienne, largement acquise à la cause, accueille la Wehrmacht avec enthousiasme dans de nombreuses villes.",
    stat: "Annexion sans combat le 12 mars 1938, légitimée par un plébiscite contrôlé donnant 99 % de 'oui'",
    wiki: "https://fr.wikipedia.org/wiki/Anschluss"
  },
  {
    year: 1938, dateShort: "sept.", cat: "known", icon: "🧨",
    title: "Crise des Sudètes — la Tchécoslovaquie sous pression totale",
    detail: "L'Allemagne revendique les Sudètes, région frontalière tchécoslovaque à majorité germanophone. La crise pousse l'Europe au bord de la guerre avant les accords de Munich. La Tchécoslovaquie, non invitée à la conférence, est sacrifiée.",
    stat: "Plus de 3 millions d'Allemands des Sudètes dans la région revendiquée",
    wiki: "https://fr.wikipedia.org/wiki/Crise_des_Sudètes"
  },
  {
    year: 1938, dateShort: "30 sept.", cat: "known", icon: "✍️",
    title: "Accords de Munich — le pari perdu de la paix",
    detail: "Hitler, Mussolini, Chamberlain et Daladier signent un accord cédant les Sudètes à l'Allemagne. La Tchécoslovaquie n'est pas conviée. Chamberlain rentre à Londres en brandissant le papier : 'La paix pour notre temps.' Churchill, lucide, déclare devant la Chambre des communes : 'Vous avez choisi entre le déshonneur et la guerre. Vous avez choisi le déshonneur et vous aurez la guerre.'",
    stat: "30 septembre 1938 : Tchécoslovaquie sacrifiée sans être consultée ; Hitler envahira le reste du pays dès mars 1939",
    wiki: "https://fr.wikipedia.org/wiki/Accords_de_Munich"
  },
  {
    year: 1938, dateShort: "6–15 juil.", cat: "rare", icon: "⚖️",
    title: "Conférence d'Évian — l'échec de l'accueil des réfugiés juifs",
    detail: "32 pays occidentaux se réunissent à Évian pour discuter de l'accueil des réfugiés juifs fuyant l'Allemagne nazie. Presque aucun n'accepte d'augmenter ses quotas d'immigration. La conférence est un échec cuisant qui laisse les Juifs sans issue.",
    stat: "32 pays réunis ; quasi-aucun n'augmente ses quotas. Le Japon, non invité, se moque publiquement de la 'générosité' occidentale.",
    wiki: "https://fr.wikipedia.org/wiki/Conférence_d%27Évian_(1938)"
  },
  {
    year: 1938, dateShort: "9 nov.", cat: "known", icon: "🔥",
    title: "La Nuit de Cristal — le basculement vers la violence d'État",
    detail: "Un pogrom national organisé par les nazis contre les Juifs en Allemagne et en Autriche. Des synagogues sont brûlées, des magasins pillés. La persécution passe d'une exclusion légale à une violence physique directe et assumée par l'État.",
    stat: "Au moins 91 morts officiels (chiffre nazi minimisé ; historiens estiment plusieurs centaines), 30 000 hommes arrêtés et déportés en camp de concentration",
    wiki: "https://fr.wikipedia.org/wiki/Nuit_de_Cristal"
  },
  {
    year: 1938, dateShort: "nov.", cat: "rare", icon: "🏚️",
    title: "Aryanisation accélérée de l'économie allemande",
    detail: "Après la Nuit de Cristal, les entreprises et biens juifs sont massivement confisqués et transférés à des propriétaires allemands dans un processus systématique d'exclusion économique totale.",
    stat: "Des dizaines de milliers de commerces et entreprises saisis en quelques mois ; les Juifs contraints de payer une 'amende' collective d'un milliard de Reichsmarks",
    wiki: "https://fr.wikipedia.org/wiki/Aryanisation"
  },
  {
    year: 1938, dateShort: "oct.", cat: "known", icon: "🇨🇿",
    title: "Occupation des Sudètes par l'Allemagne",
    detail: "Après les accords de Munich, les troupes allemandes entrent dans les Sudètes sans combat. La Tchécoslovaquie perd ses principales fortifications frontalières — ses défenses les plus solides — rendant le pays militairement intenable.",
    stat: "Occupation sans combat des Sudètes en octobre 1938 ; dès mars 1939, l'Allemagne occupe toute la Bohême-Moravie",
    wiki: "https://fr.wikipedia.org/wiki/Accords_de_Munich"
  },

  /* ══════════════════════════════════════════
     1939
  ══════════════════════════════════════════ */
  {
    year: 1939, dateShort: "23 août", cat: "known", icon: "🤝",
    title: "Pacte Molotov-Ribbentrop : l'alliance qui choqua le monde",
    detail: "L'Allemagne nazie et l'URSS signent un pacte de non-agression assorti d'un protocole secret divisant l'Europe de l'Est en zones d'influence. Le monde entier est stupéfait de voir deux idéologies ennemies s'allier. Signé à Moscou, il est annoncé au monde à 2h du matin.",
    stat: "Signé le 23 août 1939, seulement 8 jours avant l'invasion de la Pologne",
    wiki: "https://fr.wikipedia.org/wiki/Pacte_germano-soviétique"
  },
  {
    year: 1939, dateShort: "1 sept.", cat: "known", icon: "💣",
    title: "Invasion de la Pologne — la Blitzkrieg s'abat sur l'Europe",
    detail: "À l'aube du 1er septembre, les forces allemandes franchissent la frontière polonaise sur trois axes. La Blitzkrieg combine blindés, aviation et infanterie motorisée dans une doctrine nouvelle. Varsovie capitulera le 27 septembre après 20 jours de siège.",
    stat: "1,5 million de soldats allemands au total engagés ; Varsovie capitule le 27 septembre après 25 000 civils tués dans le siège",
    wiki: "https://fr.wikipedia.org/wiki/Invasion_de_la_Pologne"
  },
  {
    year: 1939, dateShort: "1 sept.", cat: "anecdote", icon: "📻",
    title: "La BBC annonce la guerre… entre deux émissions de danse",
    detail: "Le soir du 1er septembre, la BBC interrompt ses programmes réguliers pour annoncer l'invasion de la Pologne. La chaîne deviendra le média de guerre numéro un en Europe, écouté clandestinement dans toute l'Europe occupée.",
    stat: "La BBC diffuse en 45 langues pendant la guerre ; ses émissions en français depuis Londres sont essentielles à la Résistance",
    wiki: "https://fr.wikipedia.org/wiki/BBC"
  },
  {
    year: 1939, dateShort: "3 sept.", cat: "known", icon: "📜",
    title: "France et Royaume-Uni déclarent la guerre à l'Allemagne",
    detail: "Respectant leurs engagements envers la Pologne, Paris et Londres déclarent la guerre le 3 septembre 1939. La 'drôle de guerre' commence : huit mois de front immobile à l'Ouest où les deux camps s'observent sans s'affronter.",
    stat: "Début officiel du conflit européen ; la 'drôle de guerre' dure jusqu'au 10 mai 1940",
    wiki: "https://fr.wikipedia.org/wiki/Drôle_de_guerre"
  },
  {
    year: 1939, dateShort: "17 sept.", cat: "known", icon: "☭",
    title: "L'URSS envahit la Pologne par l'est",
    detail: "En vertu du protocole secret du pacte Molotov-Ribbentrop, l'Armée rouge entre en Pologne par l'est le 17 septembre. La Pologne est partagée entre les deux puissances totalitaires. Le gouvernement polonais s'exile à Paris puis à Londres.",
    stat: "Environ 450 000 soldats soviétiques engagés ; le gouvernement polonais en exil se reconstitue en moins de 24 heures",
    wiki: "https://fr.wikipedia.org/wiki/Invasion_soviétique_de_la_Pologne_(1939)"
  },
  {
    year: 1939, dateShort: "28 sept.", cat: "rare", icon: "🗂️",
    title: "Le gouvernement polonais en exil reconstitué en 24h",
    detail: "En moins d'une journée après la capitulation de Varsovie, le gouvernement polonais se reconstitue, d'abord à Paris puis à Londres. L'armée secrète polonaise deviendra l'un des réseaux de résistance les plus organisés d'Europe.",
    stat: "Plus de 400 000 soldats polonais combattirent hors de Pologne jusqu'en 1945, sur tous les fronts",
    wiki: "https://fr.wikipedia.org/wiki/Armée_de_l%27intérieur_(Pologne)"
  },
  {
    year: 1939, dateShort: "Sept.", cat: "rare", icon: "🧒",
    title: "L'évacuation des enfants de Londres : l'opération Pied Piper",
    detail: "Dès le 1er septembre, l'opération Pied Piper évacue des enfants londoniens vers la campagne. Des étiquettes accrochées à leurs manteaux portaient leur nom et leur destination. Beaucoup ne reverront pas leurs parents avant des années. L'opération se déroule en plusieurs vagues.",
    stat: "1,5 million d'enfants évacués de Londres lors de la première vague (1–3 septembre 1939)",
    wiki: "https://fr.wikipedia.org/wiki/Évacuation_des_enfants_pendant_la_Seconde_Guerre_mondiale"
  },
  {
    year: 1939, dateShort: "30 nov.", cat: "known", icon: "🎿",
    title: "Guerre d'Hiver : l'URSS attaque la Finlande",
    detail: "Staline lance une offensive massive contre la Finlande le 30 novembre 1939. Contre toute attente, les Finlandais résistent pendant 105 jours, infligeant des pertes colossales à l'Armée rouge et révélant ses faiblesses au monde entier.",
    stat: "Environ 125 000 soldats soviétiques tués contre 25 000 Finlandais ; l'URSS est exclue de la Société des Nations",
    wiki: "https://fr.wikipedia.org/wiki/Guerre_d%27Hiver"
  },
  {
    year: 1939, dateShort: "Nov.–mars", cat: "anecdote", icon: "🎯",
    title: "Simo Häyhä : la 'Mort Blanche' — 505 kills confirmés en moins de 100 jours",
    detail: "Le tireur d'élite finlandais Simo Häyhä opérait dans la forêt enneigée à −40 °C, souvent sans lunette de visée pour éviter tout reflet. Il restait immobile des heures, se camouflant sous la neige. Les archives militaires finlandaises lui attribuent 505 kills confirmés au fusil, auxquels s'ajoutent environ 200 au pistolet-mitrailleur.",
    stat: "505 kills confirmés au fusil (archives militaires finlandaises) + ~200 au pistolet-mitrailleur ; record absolu non égalé dans l'histoire militaire",
    wiki: "https://fr.wikipedia.org/wiki/Simo_H%C3%A4yh%C3%A4"
  },
  {
    year: 1939, dateShort: "13 déc.", cat: "rare", icon: "⚓",
    title: "Bataille du Rio de la Plata — le premier grand engagement naval",
    detail: "Trois croiseurs britanniques affrontent le cuirassé de poche allemand Graf Spee au large de l'Uruguay. Endommagé et piégé dans le port de Montevideo sous la pression diplomatique, le capitaine Langsdorff ordonne le sabordage plutôt que la reddition. Il se suicide trois jours plus tard.",
    stat: "Premier engagement naval majeur de la guerre ; le Graf Spee sabordé le 17 décembre 1939",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_du_Rio_de_la_Plata"
  },

  /* ══════════════════════════════════════════
     1940
  ══════════════════════════════════════════ */
  {
    year: 1940, dateShort: "9 avr.", cat: "known", icon: "🇩🇰",
    title: "Invasion du Danemark et de la Norvège",
    detail: "L'opération Weserübung est lancée simultanément contre le Danemark et la Norvège pour sécuriser les importations de minerai de fer suédois via les ports norvégiens. Le Danemark capitule en 6 heures. La Norvège résiste 62 jours avec l'aide alliée avant de tomber.",
    stat: "Danemark : capitulation en 6 heures. Norvège : résistance de 62 jours (9 avril–10 juin 1940)",
    wiki: "https://fr.wikipedia.org/wiki/Opération_Weserübung"
  },
  {
    year: 1940, dateShort: "10 mai", cat: "known", icon: "⚔️",
    title: "Offensive à l'Ouest — la France envahie par les Ardennes",
    detail: "La Wehrmacht contourne la ligne Maginot par les Ardennes, terrain supposé infranchissable par les blindés. La percée de Sedan en 48 heures coupe les armées alliées en deux. En six semaines, la France capitule. L'armistice est signé le 22 juin 1940.",
    stat: "46 jours entre le début de l'offensive (10 mai) et l'armistice (22 juin 1940) ; France perd 90 000 hommes",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_France"
  },
  {
    year: 1940, dateShort: "10 mai", cat: "anecdote", icon: "🍺",
    title: "Churchill nommé Premier Ministre le jour même de l'offensive",
    detail: "Le 10 mai 1940 — jour exact de l'offensive allemande — Winston Churchill remplace Chamberlain au 10 Downing Street. Il apprend l'invasion alors qu'il prend ses fonctions. Son premier discours en tant que Premier Ministre, quelques jours plus tard, restera dans l'histoire : 'Je n'ai rien à offrir que du sang, du labeur, des larmes et de la sueur.'",
    stat: "Churchill nommé Premier Ministre le 10 mai 1940, exactement le jour du déclenchement de l'offensive à l'Ouest",
    wiki: "https://fr.wikipedia.org/wiki/Winston_Churchill"
  },
  {
    year: 1940, dateShort: "26 mai", cat: "known", icon: "⛵",
    title: "Dunkerque : 338 226 soldats évacués en 9 jours",
    detail: "L'opération Dynamo évacue 338 226 soldats alliés (198 229 Britanniques, 139 997 Franco-belges) grâce à une flottille d'environ 850 navires, dont des centaines de petits bateaux civils. Hitler avait ordonné l'arrêt des Panzers le 24 mai — raison encore débattue, qui donna ces neuf jours crucieux.",
    stat: "338 226 soldats évacués du 26 mai au 4 juin 1940 ; 40 000 soldats français laissés sur place et capturés",
    wiki: "https://fr.wikipedia.org/wiki/Évacuation_de_Dunkerque"
  },
  {
    year: 1940, dateShort: "10 juin", cat: "known", icon: "🤌",
    title: "L'Italie entre en guerre aux côtés de l'Allemagne",
    detail: "Mussolini, convaincu que la guerre est déjà gagnée, déclare la guerre à la France et au Royaume-Uni. Les premiers assauts italiens contre la France alpine sont facilement repoussés par les six divisions françaises de l'armée des Alpes, présageant les déboires militaires futurs.",
    stat: "Italie déclare la guerre le 10 juin 1940 avec 10 divisions ; repoussée par 6 divisions françaises sur les Alpes",
    wiki: "https://fr.wikipedia.org/wiki/Entrée_en_guerre_de_l%27Italie_(1940)"
  },
  {
    year: 1940, dateShort: "14 juin", cat: "anecdote", icon: "🗼",
    title: "Paris déclarée ville ouverte — les Allemands font du tourisme",
    detail: "Les soldats allemands entrant dans Paris s'attendaient à combattre rue par rue. Ils trouvèrent une ville silencieuse, les cafés à moitié vides. Certains officiers se rendirent immédiatement au Louvre et à la Tour Eiffel, appareil photo en main. Paris avait été déclarée 'ville ouverte' le 13 juin pour éviter sa destruction.",
    stat: "Paris déclarée 'ville ouverte' le 13 juin 1940, occupée sans combat le 14 juin",
    wiki: "https://fr.wikipedia.org/wiki/Occupation_de_Paris"
  },
  {
    year: 1940, dateShort: "18 juin", cat: "known", icon: "📻",
    title: "L'appel du 18 juin de de Gaulle — le mythe fondateur",
    detail: "Le 18 juin 1940, le général de Gaulle lance son célèbre appel depuis les studios de la BBC à Londres. La plupart des Français ne l'entendirent pas en direct — les sources estiment quelques milliers d'auditeurs. Mais le texte, diffusé à nouveau le 22 juin, et amplement commenté, devient le symbole de la résistance française.",
    stat: "Seuls quelques milliers de Français entendirent l'appel en direct le 18 juin ; son rayonnement est entièrement posthume",
    wiki: "https://fr.wikipedia.org/wiki/Appel_du_18_Juin"
  },
  {
    year: 1940, dateShort: "22 juin", cat: "rare", icon: "🏔️",
    title: "L'armistice signé dans le même wagon qu'en 1918",
    detail: "Par un geste symbolique délibéré, Hitler fait signer l'armistice dans la forêt de Compiègne et dans le même wagon ferroviaire où l'Allemagne avait capitulé en 1918. Il tape du pied droit en quittant le wagon — son geste de triomphe. Le wagon sera ensuite transporté en Allemagne et détruit en 1945.",
    stat: "Armistice signé le 22 juin 1940 dans le wagon de l'armistice de 1918, à Rethondes, forêt de Compiègne",
    wiki: "https://fr.wikipedia.org/wiki/Armistice_du_22_juin_1940"
  },
  {
    year: 1940, dateShort: "3 juil.", cat: "rare", icon: "🚢",
    title: "Mers-el-Kébir : la Royal Navy détruit la flotte française",
    detail: "Pour empêcher la flotte française de tomber aux mains des Allemands, Churchill ordonne l'attaque des navires français à Mers-el-Kébir (Algérie). 1 297 marins français sont tués par leurs anciens alliés. L'événement laisse des cicatrices durables dans les relations franco-britanniques.",
    stat: "1 297 marins français tués le 3 juillet 1940 par la Royal Navy ; traumatisme durable dans les relations franco-britanniques",
    wiki: "https://fr.wikipedia.org/wiki/Attaque_de_Mers-el-Kébir"
  },
  {
    year: 1940, dateShort: "10 juil.", cat: "known", icon: "✈️",
    title: "Bataille d'Angleterre — le ciel britannique comme dernière ligne",
    detail: "La Luftwaffe tente de détruire la RAF pour préparer l'invasion. Pendant 4 mois, les combats aériens au-dessus de l'Angleterre captivent le monde. La RAF résiste grâce au radar, aux Spitfire et Hurricane, et au courage de 2 936 pilotes de 15 nationalités.",
    stat: "2 936 pilotes de la RAF ('The Few') contre une Luftwaffe numériquement supérieure ; 544 pilotes de la RAF tués",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_d%27Angleterre"
  },
  {
    year: 1940, dateShort: "13 août", cat: "rare", icon: "📡",
    title: "Le radar Chain Home sauve la Grande-Bretagne",
    detail: "Le système Chain Home de détection radar, mis en place dès 1937, permit à la RAF de concentrer ses forces au bon endroit. Sans lui, l'Angleterre aurait été incapable de résister à la Luftwaffe. La Luftwaffe ne crut jamais à son efficacité, attribuant l'omniprésence de la RAF à la chance.",
    stat: "21 stations radar sur 3 000 km de côtes britanniques ; technologie décisive méconnue du commandement allemand",
    wiki: "https://fr.wikipedia.org/wiki/Chain_Home"
  },
  {
    year: 1940, dateShort: "7 sept.", cat: "known", icon: "🔥",
    title: "Le Blitz sur Londres — 57 nuits de bombardements consécutifs",
    detail: "La Luftwaffe bombarde Londres 57 nuits de suite à partir du 7 septembre 1940, puis s'étend aux grandes villes britanniques. Mais loin de briser le moral, les bombardements renforcèrent la détermination britannique — effet inverse à celui escompté.",
    stat: "43 000 civils britanniques tués pendant le Blitz (sept. 1940 – mai 1941) ; 1 million de logements détruits ou endommagés",
    wiki: "https://fr.wikipedia.org/wiki/Blitz"
  },
  {
    year: 1940, dateShort: "28 oct.", cat: "known", icon: "🇬🇷",
    title: "L'Italie attaque la Grèce — et se fait repousser",
    detail: "Mussolini lance une invasion de la Grèce depuis l'Albanie italienne sans prévenir Hitler. Contre toute attente, l'armée grecque repousse les Italiens de 50 km en territoire albanais. Hitler devra intervenir en avril 1941 pour sauver son allié.",
    stat: "Les Grecs repoussent les Italiens de 50 km en territoire albanais ; l'Italie perd 13 700 hommes en Grèce",
    wiki: "https://fr.wikipedia.org/wiki/Guerre_gréco-italienne"
  },
  {
    year: 1940, dateShort: "Déc.", cat: "rare", icon: "🔬",
    title: "Le projet Manhattan en gestation — l'arme absolue",
    detail: "Des physiciens réfugiés d'Europe (dont Einstein et Szilard avaient alerté Roosevelt dès 1939) poussent le gouvernement américain à financer la recherche nucléaire. La lettre Einstein-Szilard, rédigée en 1939, craignait une bombe atomique nazie.",
    stat: "Budget initial approuvé : 6 000 dollars (1939). Budget final du projet Manhattan : environ 2 milliards de dollars",
    wiki: "https://fr.wikipedia.org/wiki/Projet_Manhattan"
  },
  {
    year: 1940, dateShort: "Nov.", cat: "anecdote", icon: "🎭",
    title: "L'opération Seelöwe : une invasion qui n'a probablement jamais été sérieuse",
    detail: "L'opération 'Lion de Mer', le plan d'invasion de l'Angleterre, n'a probablement jamais été préparée sérieusement. La Wehrmacht n'avait pas de flotte de débarquement ; les péniches envisagées étaient inappropriées. Selon plusieurs historiens, Hitler espérait que Churchill négocierait avant même d'envahir.",
    stat: "Aucune capacité de débarquement réelle constituée ; l'opération est suspendue sine die le 17 septembre 1940",
    wiki: "https://fr.wikipedia.org/wiki/Opération_Seelöwe"
  },

  /* ══════════════════════════════════════════
     1941
  ══════════════════════════════════════════ */
  {
    year: 1941, dateShort: "6 avr.", cat: "known", icon: "⚔️",
    title: "Invasion de la Yougoslavie et de la Grèce",
    detail: "L'Allemagne envahit simultanément la Yougoslavie et la Grèce pour renflouer son allié italien. La Grèce capitule en 24 jours, la Yougoslavie en 11. Cette campagne des Balkans retardera de plusieurs semaines le déclenchement de l'opération Barbarossa — un retard aux conséquences potentiellement décisives.",
    stat: "Yougoslavie : 11 jours de résistance. Grèce : 24 jours. Retard de Barbarossa estimé à 4–6 semaines.",
    wiki: "https://fr.wikipedia.org/wiki/Invasion_de_la_Grèce_par_l%27Axe"
  },
  {
    year: 1941, dateShort: "20 mai", cat: "rare", icon: "🪂",
    title: "Crète : la plus grande bataille aéroportée de l'histoire",
    detail: "L'Allemagne lance l'opération Merkur : 22 000 parachutistes sautent sur la Crète. Malgré la victoire finale après 12 jours, les pertes sont si lourdes (plus de 4 000 tués) que Hitler décidera de ne plus employer les parachutistes en opération aéroportée massive.",
    stat: "Plus de 4 000 parachutistes allemands tués en 12 jours ; Churchill : 'L'étudiant a trop payé sa leçon'",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_Crète"
  },
  {
    year: 1941, dateShort: "22 juin", cat: "known", icon: "🗺️",
    title: "Opération Barbarossa — l'URSS envahie sur 2 900 km de front",
    detail: "3,8 millions de soldats allemands et alliés franchissent la frontière soviétique à 3h15 du matin sur un front de 2 900 km — le plus grand de l'histoire militaire. Staline, paralysé par la surprise, ne parle pas à son peuple pendant 11 jours.",
    stat: "3,8 millions d'hommes, 3 350 chars, 2 770 avions ; 3 millions de soldats soviétiques capturés en 6 mois",
    wiki: "https://fr.wikipedia.org/wiki/Opération_Barbarossa"
  },
  {
    year: 1941, dateShort: "Été", cat: "anecdote", icon: "🧊",
    title: "Staline absent 11 jours après le début de Barbarossa",
    detail: "Des dizaines d'agents soviétiques avaient averti Staline d'une invasion imminente, y compris Richard Sorge depuis Tokyo. Il refusa de les croire. Après le début de Barbarossa, il disparut de la scène publique pendant 11 jours, vraisemblablement en état de choc, avant de s'adresser au peuple le 3 juillet.",
    stat: "Staline absent des médias du 22 juin au 3 juillet 1941 ; Joukov lui-même dut le persuader de reprendre les rênes",
    wiki: "https://fr.wikipedia.org/wiki/Opération_Barbarossa"
  },
  {
    year: 1941, dateShort: "Été", cat: "rare", icon: "🖼️",
    title: "1,2 million d'objets de l'Ermitage évacués vers l'Oural",
    detail: "Dès le début de l'invasion, des trains spéciaux évacuaient les collections de l'Ermitage vers Sverdlovsk (Iekaterinbourg). Les caisses furent chargées en 6 jours. Les salles vides restèrent ouvertes aux Léningradois pendant le siège, les guides décrivant les œuvres absentes.",
    stat: "1 200 000 objets déplacés en 2 convois ferroviaires en août-septembre 1941",
    wiki: "https://fr.wikipedia.org/wiki/Musée_de_l%27Ermitage"
  },
  {
    year: 1941, dateShort: "8 sept.", cat: "known", icon: "🏙️",
    title: "Siège de Leningrad commence — 872 jours de résistance",
    detail: "Les forces allemandes encerclent Leningrad (Saint-Pétersbourg) le 8 septembre 1941. Le siège durera 872 jours jusqu'au 27 janvier 1944 — le plus long de l'histoire moderne. La ville survit grâce à la 'Route de la Vie' sur le lac Ladoga gelé.",
    stat: "872 jours de siège ; près d'un million de civils morts (famine, froid, bombardements) selon les historiens ; 632 000 morts de faim selon les chiffres soviétiques officiels à Nuremberg",
    wiki: "https://fr.wikipedia.org/wiki/Siège_de_Leningrad"
  },
  {
    year: 1941, dateShort: "Hiver", cat: "rare", icon: "🌡️",
    title: "L'hiver russe arrête la Wehrmacht devant Moscou",
    detail: "En décembre 1941, l'armée allemande est à 30 km de Moscou. Le 'Général Hiver' s'abat sur des soldats équipés pour une guerre courte. Les moteurs gelaient, les armes refusaient de tirer. La température descendit à -42°C dans certains secteurs, causant 130 000 cas de gelures côté allemand.",
    stat: "Température jusqu'à -42 °C ; 130 000 cas de gelures chez les soldats allemands ; 14 000 amputations",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_Moscou"
  },
  {
    year: 1941, dateShort: "5–6 déc.", cat: "known", icon: "❄️",
    title: "Contre-offensive soviétique devant Moscou",
    detail: "Joukov lance une contre-offensive massive le 5 décembre qui repousse les Allemands de 100 à 200 km de Moscou. C'est la première grande victoire terrestre des Alliés sur l'Allemagne. Le mythe de l'invincibilité allemande s'effondre pour la première fois.",
    stat: "Première défaite terrestre majeure de l'Allemagne nazie ; Allemands repoussés de 100 à 200 km de Moscou",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_Moscou"
  },
  {
    year: 1941, dateShort: "7 déc.", cat: "known", icon: "🌊",
    title: "Pearl Harbor — 'une date qui vivra dans l'infamie'",
    detail: "353 avions japonais (en deux vagues depuis 6 porte-avions) attaquent la flotte américaine du Pacifique à 7h48. En moins de deux heures, la base est dévastée. Les États-Unis entrent en guerre. Le Japon avait misé sur un knock-out décisif — ce fut le début de sa fin. Les porte-avions américains, absents ce jour-là, seront la clé de la revanche.",
    stat: "2 403 Américains tués, 1 178 blessés ; 19 navires coulés ou endommagés ; 353 avions japonais engagés",
    wiki: "https://fr.wikipedia.org/wiki/Attaque_de_Pearl_Harbor"
  },
  {
    year: 1941, dateShort: "11 déc.", cat: "anecdote", icon: "🤦",
    title: "Hitler déclare la guerre aux États-Unis… de son propre chef",
    detail: "Quatre jours après Pearl Harbor, Hitler déclare la guerre aux États-Unis alors qu'il n'y était nullement obligé par ses traités avec le Japon. La plupart des historiens considèrent cette décision comme son erreur stratégique la plus inexplicable — elle permit à Roosevelt d'engager massivement les États-Unis en Europe.",
    stat: "Sans cette décision du 11 décembre 1941, Roosevelt aurait eu du mal à convaincre le Congrès d'entrer en guerre en Europe",
    wiki: "https://fr.wikipedia.org/wiki/Déclaration_de_guerre_de_l%27Allemagne_aux_États-Unis"
  },
  {
    year: 1941, dateShort: "Déc.", cat: "rare", icon: "🔑",
    title: "Enigma décryptée : les Alliés lisent les messages allemands",
    detail: "Les équipes de Bletchley Park, menées par Alan Turing, percent le code Enigma de la marine allemande. Cette percée resta secrète pendant 30 ans après la guerre. Churchill estimait qu'elle raccourcit le conflit de deux ans. 10 000 personnes y travaillaient — aucune ne parla.",
    stat: "Bletchley Park : 10 000 personnes au pic ; secret absolu tenu 30 ans (révélé au public en 1974)",
    wiki: "https://fr.wikipedia.org/wiki/Enigma_(machine)"
  },
  {
    year: 1941, dateShort: "Déc.", cat: "anecdote", icon: "🏯",
    title: "Les Philippines envahies — MacArthur promet 'I shall return'",
    detail: "Après Pearl Harbor, le Japon envahit les Philippines. MacArthur, qui résiste à Corregidor, est contraint de fuir par sous-marin et avion vers l'Australie. Sa promesse 'I shall return' devient l'une des phrases les plus célèbres de la guerre. Il tiendra parole en octobre 1944.",
    stat: "MacArthur débarque aux Philippines le 20 octobre 1944 — 3 ans et 7 mois après sa promesse",
    wiki: "https://fr.wikipedia.org/wiki/Chute_des_Philippines_(1941-1942)"
  },

  /* ══════════════════════════════════════════
     1942
  ══════════════════════════════════════════ */
  {
    year: 1942, dateShort: "20 janv.", cat: "rare", icon: "📋",
    title: "Wannsee : 90 minutes pour coordonner le génocide de 11 millions de personnes",
    detail: "Quinze hauts fonctionnaires nazis se réunirent 90 minutes à Wannsee pour coordonner la 'Solution finale'. Le tableau récapitulatif inscrit 11 millions de Juifs à 'traiter'. Les procès-verbaux retrouvés en 1947 montrent des hommes discutant de logistique d'extermination comme d'un projet industriel.",
    stat: "15 participants, 11 millions de victimes listées dans les procès-verbaux ; conférence de 90 minutes le 20 janvier 1942",
    wiki: "https://fr.wikipedia.org/wiki/Conférence_de_Wannsee"
  },
  {
    year: 1942, dateShort: "15 fév.", cat: "known", icon: "🇸🇬",
    title: "Singapour tombe — la plus grande capitulation britannique",
    detail: "85 000 soldats britanniques, australiens et indiens se rendent à environ 30 000 Japonais à Singapour. Churchill qualifie cela du 'pire désastre' et de la 'capitulation la plus grande' de l'histoire militaire britannique. Les Japonais avaient avancé depuis la Malaisie principalement en bicyclette.",
    stat: "85 000 soldats alliés prisonniers le 15 février 1942 ; Churchill : 'la plus grave catastrophe de toute l'histoire de la Grande-Bretagne'",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_Singapour"
  },
  {
    year: 1942, dateShort: "Fév.", cat: "anecdote", icon: "🕊️",
    title: "Des pigeons militaires reçoivent la médaille Dickin",
    detail: "La marine britannique employait des milliers de pigeons voyageurs certifiés pour les communications en mer. La médaille Dickin, créée en 1943, récompensait les animaux ayant fait preuve de bravoure. Elle fut attribuée à 32 pigeons pendant la guerre.",
    stat: "32 pigeons ont reçu la médaille Dickin pendant la Seconde Guerre mondiale sur 54 total (toutes guerres confondues)",
    wiki: "https://fr.wikipedia.org/wiki/Médaille_Dickin"
  },
  {
    year: 1942, dateShort: "Mars", cat: "rare", icon: "🌏",
    title: "La Birmanie tombe : le Japon contrôle l'Asie du Sud-Est",
    detail: "En quelques mois, le Japon s'empare de la Birmanie, de la Malaisie, des Indes néerlandaises (Indonésie actuelle) et des Philippines. L'empire japonais contrôle une zone d'une superficie comparable à celle des États-Unis continentaux.",
    stat: "Zone conquise de décembre 1941 à mai 1942, équivalente en superficie aux États-Unis continentaux",
    wiki: "https://fr.wikipedia.org/wiki/Théâtre_d%27opérations_du_Pacifique"
  },
  {
    year: 1942, dateShort: "4–6 juin", cat: "known", icon: "🌊",
    title: "Midway — le tournant du Pacifique en 5 minutes",
    detail: "En environ 5 minutes décisives entre 10h22 et 10h27, des SBD Dauntless américains coulent 3 porte-avions japonais (Kaga, Akagi, Sōryū). Un quatrième (Hiryū) suivra dans l'après-midi. Le Japon perd ses meilleurs pilotes et mécaniciens — une perte irremplaçable. Le rapport de force dans le Pacifique s'inverse définitivement.",
    stat: "4 porte-avions japonais coulés en 2 jours, 3 500 marins et aviateurs japonais tués, dont l'élite de l'aviation navale",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_Midway"
  },
  {
    year: 1942, dateShort: "Été", cat: "anecdote", icon: "🦇",
    title: "Le projet Bat Bomb : des chauves-souris bombes incendiaires",
    detail: "L'US Army testa sérieusement un projet de chauves-souris portant de minuscules bombes incendiaires à larguer sur les villes japonaises (dont les maisons étaient souvent en bois). Le projet fut abandonné après qu'une chauve-souris en fuite mit le feu à des installations militaires au Nouveau-Mexique.",
    stat: "Environ 2 millions de dollars dépensés ; projet abandonné en 1944 au profit du projet Manhattan",
    wiki: "https://fr.wikipedia.org/wiki/Bat_bomb"
  },
  {
    year: 1942, dateShort: "Juil.", cat: "rare", icon: "🌵",
    title: "El-Alamein I — Rommel stoppé à 100 km d'Alexandrie",
    detail: "Rommel et son Afrika Korps avancent jusqu'à El-Alamein, à seulement 100 km d'Alexandrie et du canal de Suez. En Égypte, des fonctionnaires brûlent déjà leurs archives. Montgomery parvient à stopper l'avance en juillet avec des réserves fraîches.",
    stat: "Rommel stoppé à 100 km d'Alexandrie et du canal de Suez en juillet 1942",
    wiki: "https://fr.wikipedia.org/wiki/Première_bataille_d%27El-Alamein"
  },
  {
    year: 1942, dateShort: "19 août", cat: "known", icon: "🏖️",
    title: "Raid de Dieppe — un désastre qui apprend la leçon du D-Day",
    detail: "6 086 soldats, principalement canadiens, attaquent le port de Dieppe. Le raid est un désastre : 3 623 hommes tués, blessés ou capturés en 6 heures. Mais les leçons tirées — pas d'assaut frontal de port, nécessité de soutien blindé et aérien massif — seront cruciales pour la planification de Normandie.",
    stat: "3 623 pertes alliées (dont 1 946 Canadiens capturés) en 6 heures ; raid du 19 août 1942",
    wiki: "https://fr.wikipedia.org/wiki/Raid_de_Dieppe"
  },
  {
    year: 1942, dateShort: "23 août", cat: "known", icon: "🔥",
    title: "Bataille de Stalingrad — début de l'enfer urbain",
    detail: "La 6e armée allemande entre dans Stalingrad le 23 août 1942. Ce qui devait être une victoire rapide devient une bataille de rats dans des ruines. Pendant 6 mois, les soldats se battent rue par rue, immeuble par immeuble, pièce par pièce. La ville ne sera jamais rendue.",
    stat: "Environ 2 millions de pertes totales (morts, blessés, prisonniers) entre juillet 1942 et février 1943",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_Stalingrad"
  },
  {
    year: 1942, dateShort: "4 nov.", cat: "known", icon: "🌟",
    title: "El-Alamein II — victoire décisive de Montgomery",
    detail: "Montgomery contre-attaque et écrase Rommel en 10 jours. C'est le tournant en Afrique du Nord. Churchill dira : 'Ce n'est pas la fin. Ce n'est pas même le commencement de la fin. Mais c'est, peut-être, la fin du commencement.'",
    stat: "30 000 soldats de l'Axe capturés lors d'El-Alamein II (23 oct.–4 nov. 1942) ; Rommel contraint de battre en retraite sur 2 000 km",
    wiki: "https://fr.wikipedia.org/wiki/Deuxième_bataille_d%27El-Alamein"
  },
  {
    year: 1942, dateShort: "8 nov.", cat: "rare", icon: "🌍",
    title: "Opération Torch : les soldats américains ne savaient pas où ils allaient",
    detail: "Lors du débarquement américain en Afrique du Nord, les ordres de destination étaient dans des enveloppes scellées ouvertes 36h avant l'assaut. Certains soldats pensaient attaquer Dakar, d'autres la Norvège. L'opération fut une semi-surprise pour les alliés eux-mêmes.",
    stat: "107 000 soldats alliés débarqués au Maroc et en Algérie sans connaître leur destination précise",
    wiki: "https://fr.wikipedia.org/wiki/Opération_Torch"
  },
  {
    year: 1942, dateShort: "Hiver", cat: "anecdote", icon: "🗡️",
    title: "Le couteau Fairbairn-Sykes : l'arme des forces spéciales",
    detail: "Le couteau FS, conçu par deux ex-policiers de Shanghai, devient l'arme standard des commandos britanniques. Sa forme caractéristique inspire des décennies de films et romans d'espionnage. Il est encore fabriqué et utilisé par les forces spéciales britanniques aujourd'hui.",
    stat: "Conçu en 1941, le couteau FS reste en service dans les forces spéciales britanniques plus de 80 ans après",
    wiki: "https://fr.wikipedia.org/wiki/Couteau_Fairbairn-Sykes"
  },

  /* ══════════════════════════════════════════
     1943
  ══════════════════════════════════════════ */
  {
    year: 1943, dateShort: "2 fév.", cat: "known", icon: "🏳️",
    title: "Stalingrad : la 6e armée capitule — tournant de la guerre",
    detail: "Le Feldmarschall Paulus se rend le 31 janvier avec les restes de sa 6e armée. 91 000 soldats survivants sont capturés, dont 24 généraux et 1 feldmarschall — première reddition d'un maréchal allemand. Hitler décrète 3 jours de deuil national. Sur les 91 000 prisonniers, moins de 6 000 rentreront en Allemagne.",
    stat: "91 000 prisonniers dont 24 généraux et 1 feldmarschall ; moins de 6 000 rentreront en Allemagne après la guerre",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_Stalingrad"
  },
  {
    year: 1943, dateShort: "Janv.", cat: "rare", icon: "🎩",
    title: "Casablanca : Roosevelt improvise la 'capitulation sans conditions'",
    detail: "Roosevelt et Churchill se rencontrent à Casablanca. Roosevelt déclare spontanément lors d'une conférence de presse que les Alliés n'accepteront qu'une 'capitulation sans conditions'. Churchill est pris par surprise. Cette formule, non préparée, renforcera la détermination allemande à se battre jusqu'au bout.",
    stat: "Formule prononcée lors d'une conférence de presse le 24 janvier 1943 ; Churchill a confirmé l'avoir apprise à ce moment-là",
    wiki: "https://fr.wikipedia.org/wiki/Conférence_de_Casablanca"
  },
  {
    year: 1943, dateShort: "Mars", cat: "rare", icon: "⚓",
    title: "Bataille de l'Atlantique : les U-Boot dominent les mers",
    detail: "En mars 1943, les U-Boot coulèrent 108 navires alliés en un seul mois. Churchill dira plus tard que c'est la seule chose qui l'ait vraiment fait peur pendant toute la guerre. La contre-attaque viendra des avions à très long rayon d'action et du déchiffrement d'Enigma.",
    stat: "108 navires alliés coulés en mars 1943 uniquement ; point culminant de la menace sous-marine allemande",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_l%27Atlantique_(1939-1945)"
  },
  {
    year: 1943, dateShort: "5 juil.", cat: "known", icon: "🛡️",
    title: "Koursk — la plus grande bataille de chars de l'histoire",
    detail: "Sur un front de 500 km, des milliers de chars soviétiques affrontent l'offensive allemande 'Citadelle'. L'offensive allemande est brisée en 8 jours. À partir de Koursk, l'Allemagne ne lance plus aucune offensive stratégique à l'Est. L'initiative passe définitivement à l'URSS.",
    stat: "Plus de 6 000 chars engagés des deux côtés sur 500 km de front (5–23 juillet 1943) ; dernière grande offensive allemande à l'Est",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_Koursk"
  },
  {
    year: 1943, dateShort: "10 juil.", cat: "known", icon: "🤌",
    title: "Sicile envahie — l'Italie vacille",
    detail: "Les Alliés débarquent en Sicile avec 160 000 hommes lors de l'opération Husky — la plus grande opération amphibie avant Normandie. En 38 jours, l'île est conquise. Mussolini sera renversé par son propre Grand Conseil 13 jours après le débarquement.",
    stat: "160 000 hommes débarqués le 10 juillet 1943 ; île conquise en 38 jours ; 100 000 prisonniers italiens et 37 000 soldats de l'Axe tués",
    wiki: "https://fr.wikipedia.org/wiki/Opération_Husky"
  },
  {
    year: 1943, dateShort: "25 juil.", cat: "known", icon: "🤌",
    title: "Mussolini arrêté par le Grand Conseil fasciste",
    detail: "Le Grand Conseil fasciste vote la destitution de Mussolini à 19 voix contre 7 après minuit. Il est arrêté à sa sortie d'audience royale et emmené dans une ambulance militaire. Son régime de 21 ans s'effondre en une nuit.",
    stat: "21 ans de régime fasciste terminés dans la nuit du 24 au 25 juillet 1943 ; vote 19 contre 7",
    wiki: "https://fr.wikipedia.org/wiki/Chute_de_Mussolini"
  },
  {
    year: 1943, dateShort: "Été", cat: "rare", icon: "💡",
    title: "Le DUKW amphibie révolutionne la logistique alliée",
    detail: "Le 'Duck' (DUKW), véhicule amphibie américain, révolutionne la logistique alliée. Il peut passer de l'eau à la terre sans s'arrêter, ravitaillant les troupes directement des navires aux fronts. Utilisé dès la Sicile, il sera omniprésent en Normandie.",
    stat: "21 147 DUKW produits au total ; utilisés de la Sicile à Normandie jusqu'au Rhin",
    wiki: "https://fr.wikipedia.org/wiki/DUKW"
  },
  {
    year: 1943, dateShort: "8 sept.", cat: "known", icon: "🇮🇹",
    title: "Armistice italien — l'Italie change de camp dans le chaos",
    detail: "L'Italie signe secrètement l'armistice avec les Alliés le 3 septembre, annoncé le 8. L'annonce crée un chaos total : les soldats italiens ne savent plus pour qui combattre. L'Allemagne occupe immédiatement l'Italie du Nord et capture des centaines de milliers de soldats italiens.",
    stat: "Plus de 600 000 soldats italiens capturés par les Allemands dans les jours suivant l'armistice",
    wiki: "https://fr.wikipedia.org/wiki/Armistice_de_Cassibile"
  },
  {
    year: 1943, dateShort: "12 sept.", cat: "anecdote", icon: "🦅",
    title: "Mussolini libéré par 12 commandos SS dans les montagnes",
    detail: "Un commando SS d'élite dirigé par Otto Skorzeny atterrit en planeurs sur un refuge de montagne à 2 100 m d'altitude et libère Mussolini sans tirer un seul coup de feu. L'opération, partiellement filmée, devient une légende de la guerre.",
    stat: "12 commandos SS libèrent Mussolini sans combat le 12 septembre 1943, Campo Imperatore (Gran Sasso, 2 100 m)",
    wiki: "https://fr.wikipedia.org/wiki/Opération_Quercia"
  },
  {
    year: 1943, dateShort: "Nov.", cat: "rare", icon: "🤝",
    title: "Conférence de Téhéran : trois géants sous écoute soviétique",
    detail: "Première rencontre des Trois Grands à Téhéran. Roosevelt loge dans l'ambassade soviétique — probablement sur écoute. Les décisions prises ici (débarquement en Normandie fixé à 1944, frontières futures de la Pologne) façonneront l'Europe d'après-guerre.",
    stat: "28 novembre–1er décembre 1943 ; Roosevelt dans l'ambassade soviétique, probablement sur écoute selon les services secrets américains eux-mêmes",
    wiki: "https://fr.wikipedia.org/wiki/Conférence_de_Téhéran"
  },
  {
    year: 1943, dateShort: "Hiver", cat: "anecdote", icon: "🎄",
    title: "L'économie des camps de prisonniers : les cigarettes comme monnaie",
    detail: "Dans les stalag d'Europe, une économie parallèle basée sur les cigarettes américaines se développa spontanément. Une cartouche de Camel valait plusieurs fois le salaire d'un soldat allemand. L'économiste Richard Radford, prisonnier de guerre lui-même, en fera une étude académique publiée en 1945.",
    stat: "Article de R.A. Radford 'The Economic Organisation of a P.O.W. Camp' (1945) — encore cité dans les cours d'université",
    wiki: "https://fr.wikipedia.org/wiki/Économie_des_camps_de_prisonniers"
  },

  /* ══════════════════════════════════════════
     1944
  ══════════════════════════════════════════ */
  {
    year: 1944, dateShort: "Janv.", cat: "rare", icon: "🏔️",
    title: "Monte Cassino — 4 batailles pour un monastère du Ve siècle",
    detail: "La forteresse naturelle de Monte Cassino bloque l'avance alliée vers Rome pendant 5 mois. Les Alliés lancent 4 batailles successives. Le bombardement du monastère bénédictin du VIe siècle (non utilisé par les Allemands au moment du bombardement) reste l'une des controverses militaires de la guerre.",
    stat: "4 batailles de janvier à mai 1944 ; plus de 55 000 pertes alliées pour franchir la ligne Gustav",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_Monte_Cassino"
  },
  {
    year: 1944, dateShort: "27 janv.", cat: "known", icon: "🏙️",
    title: "Le siège de Leningrad levé après 872 jours",
    detail: "L'Armée rouge brise enfin l'encerclement de Leningrad le 27 janvier 1944. La ville a survécu à 872 jours de siège (8 septembre 1941 – 27 janvier 1944), au prix de centaines de milliers de morts de faim, de froid et de bombardements. Elle ne s'est jamais rendue.",
    stat: "872 jours de siège ; ville jamais rendue ; près d'un million de civils morts selon le consensus historique",
    wiki: "https://fr.wikipedia.org/wiki/Siège_de_Leningrad"
  },
  {
    year: 1944, dateShort: "Fév.", cat: "rare", icon: "🎭",
    title: "Opération Fortitude : des milliers de faux chars en caoutchouc trompent Hitler",
    detail: "L'opération Fortitude créa une fausse armée entière (FUSAG), avec des milliers de faux chars et véhicules gonflables en caoutchouc, de fausses transmissions radio, et des agents doubles transmettant de fausses informations. Hitler attendit des semaines après le D-Day pour déplacer ses Panzers, convaincu que le vrai débarquement était encore à venir au Pas-de-Calais.",
    stat: "Des milliers de faux véhicules déployés ; Hitler maintient ses réserves de blindés au Pas-de-Calais pendant plusieurs semaines après le 6 juin",
    wiki: "https://fr.wikipedia.org/wiki/Opération_Fortitude"
  },
  {
    year: 1944, dateShort: "6 juin", cat: "known", icon: "🛥️",
    title: "Jour J — 156 000 hommes, environ 850 navires, 11 000 avions",
    detail: "L'opération Overlord est lancée sur 5 plages normandes dans la nuit du 5 au 6 juin 1944. 156 000 soldats débarquent le premier jour. C'est la plus grande opération amphibie de l'histoire. La ruse Fortitude a parfaitement fonctionné.",
    stat: "156 000 soldats débarqués le 6 juin 1944 ; 4 414 morts alliés confirmés ce seul jour ; 11 000 avions engagés",
    wiki: "https://fr.wikipedia.org/wiki/Débarquement_de_Normandie"
  },
  {
    year: 1944, dateShort: "6 juin", cat: "anecdote", icon: "🪖",
    title: "Les mannequins 'Rupert' — parachutistes de paille qui sauvèrent des vies",
    detail: "Les Alliés larguèrent des centaines de mannequins de paille équipés de parachutes ('Ruperts') sur des zones leurres pour tromper les Allemands la nuit du Débarquement. Certains étaient accompagnés de simulations sonores de combat. Ils créèrent la confusion et attirèrent des troupes allemandes loin des vraies zones d'atterrissage.",
    stat: "Centaines de mannequins 'Rupert' largués dans la nuit du 5 au 6 juin 1944 dans le cadre de l'opération Titanic",
    wiki: "https://fr.wikipedia.org/wiki/Débarquement_de_Normandie"
  },
  {
    year: 1944, dateShort: "13 juin", cat: "known", icon: "🚀",
    title: "V-1 : Londres sous les bombes volantes",
    detail: "La première bombe volante V-1 tombe sur Londres le 13 juin 1944. Ces missiles de croisière avant l'heure, surnommés 'buzz bombs' à cause de leur bruit, terrorisent la population. Leur suppression nécessite d'importants moyens aériens et l'élimination des sites de lancement.",
    stat: "10 500 V-1 lancés sur l'Angleterre ; environ 6 200 civils britanniques tués ; 4 000 V-1 atteignirent leur cible",
    wiki: "https://fr.wikipedia.org/wiki/V1_(arme)"
  },
  {
    year: 1944, dateShort: "20 juil.", cat: "rare", icon: "💣",
    title: "Attentat du 20 juillet : une table en chêne sauve Hitler",
    detail: "La bombe de von Stauffenberg était à 2 mètres d'Hitler, mais quelqu'un avait déplacé la mallette derrière un pied épais de la table en chêne massif, déviant le souffle. 4 personnes moururent sur 24 présentes. Hitler, légèrement blessé, présenta ses blessures à Mussolini quelques heures plus tard.",
    stat: "4 morts sur 24 présents ; la table massive dévia le souffle ; 4 980 personnes exécutées dans la répression qui suivit",
    wiki: "https://fr.wikipedia.org/wiki/Attentat_du_20_juillet_1944"
  },
  {
    year: 1944, dateShort: "1 août", cat: "rare", icon: "🏴",
    title: "Insurrection de Varsovie — 63 jours de combat héroïque et trahi",
    detail: "La résistance polonaise (AK) se soulève contre l'occupant allemand alors que l'Armée rouge est à quelques kilomètres. Staline ordonne l'arrêt de son avance et refuse de laisser les Alliés ravitailler Varsovie par avion. Hitler ordonne la destruction systématique de la ville après la capitulation.",
    stat: "63 jours de combat (1 août–2 octobre 1944) ; 200 000 civils tués ; Varsovie détruite à 85 % sur ordre d'Hitler",
    wiki: "https://fr.wikipedia.org/wiki/Insurrection_de_Varsovie"
  },
  {
    year: 1944, dateShort: "25 août", cat: "anecdote", icon: "🚗",
    title: "Paris libéré avec des véhicules à gazogène et des taxis",
    detail: "La libération de Paris fut menée en partie avec des véhicules fonctionnant au gazogène — gaz produit par combustion de bois — faute d'essence. La 2e Division Blindée de Leclerc comptait des centaines de véhicules ainsi équipés.",
    stat: "La 2e DB de Leclerc entre dans Paris le 24–25 août 1944 ; des centaines de véhicules au gazogène dans la colonne",
    wiki: "https://fr.wikipedia.org/wiki/Libération_de_Paris"
  },
  {
    year: 1944, dateShort: "8 sept.", cat: "rare", icon: "🔬",
    title: "Les V-2 : premières fusées à atteindre l'espace (et Londres)",
    detail: "La première V-2 tombe sur Paris le 8 septembre et sur Londres le même jour. Ces missiles balistiques, ancêtres des fusées modernes, volaient à 5 000 km/h et à 80 km d'altitude — techniquement en dehors de l'atmosphère — et étaient indetectables et impossibles à intercepter.",
    stat: "V-2 : première fusée à atteindre l'espace (80 km d'altitude) ; 3 172 V-2 lancées sur les Alliés ; 2 754 civils britanniques tués",
    wiki: "https://fr.wikipedia.org/wiki/V2_(fusée)"
  },
  {
    year: 1944, dateShort: "17 sept.", cat: "rare", icon: "🪂",
    title: "Opération Market Garden — un pont de trop",
    detail: "La plus grande opération aéroportée de l'histoire : environ 35 000 parachutistes sautent pour s'emparer de ponts néerlandais. À Arnhem, les Britanniques tiennent 9 jours contre deux divisions SS. L'opération échoue à Arnhem, 'un pont de trop', repoussant la fin de la guerre de plusieurs mois.",
    stat: "35 000 parachutistes ; environ 17 000 pertes alliées dont 6 450 Britanniques faits prisonniers à Arnhem",
    wiki: "https://fr.wikipedia.org/wiki/Opération_Market_Garden"
  },
  {
    year: 1944, dateShort: "Déc.", cat: "known", icon: "❄️",
    title: "Bataille des Ardennes — la dernière grande offensive allemande",
    detail: "Hitler lance 30 divisions allemandes à travers les Ardennes le 16 décembre 1944. Les Américains sont surpris et repoussés sur 80 km. La résistance de Bastogne encerclée ('Nuts !' de McAuliffe à l'ultimatum allemand) et le dégagement du ciel permettent à Patton de renverser la situation.",
    stat: "19 000 soldats américains tués — la perte américaine la plus lourde en un seul engagement de la guerre",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_des_Ardennes"
  },
  {
    year: 1944, dateShort: "Oct.", cat: "anecdote", icon: "📊",
    title: "L'accord des pourcentages : Churchill divise l'Europe sur une feuille",
    detail: "Churchill et Staline se retrouvent à Moscou en octobre 1944. Churchill écrit sur une feuille les pourcentages d'influence : Roumanie 90 % soviétique, Grèce 90 % britannique... Staline coche la liste. En quelques minutes, le destin de millions de personnes est réglé à la main.",
    stat: "Accord signé le 9 octobre 1944 à Moscou ; l'Europe de l'Est divisée en sphères d'influence sur une feuille de papier",
    wiki: "https://fr.wikipedia.org/wiki/Accord_des_pourcentages"
  },
  {
    year: 1944, dateShort: "Été", cat: "rare", icon: "💻",
    title: "Colossus : le premier ordinateur électronique programmable",
    detail: "À Bletchley Park, les ingénieurs britanniques construisent Colossus pour décrypter les messages Lorenz (Tunny) de la Wehrmacht. C'est le premier ordinateur électronique programmable de l'histoire. Son existence resta classifiée jusqu'en 1975. 10 Colossus furent construits.",
    stat: "10 Colossus construits à Bletchley Park ; existence révélée au public seulement en 1975 — 30 ans de secret absolu",
    wiki: "https://fr.wikipedia.org/wiki/Colossus_(ordinateur)"
  },
  {
    year: 1944, dateShort: "Juin", cat: "known", icon: "🌏",
    title: "Bataille de la mer des Philippines — 'La Grande Chasse aux Dindons'",
    detail: "La bataille de la mer des Philippines engage deux immenses flottes. La 'Grande Chasse aux Dindons des Mariannes' voit 476 avions japonais détruits en deux jours par les chasseurs et la DCA américains. La domination aérienne japonaise dans le Pacifique est définitivement terminée.",
    stat: "476 avions japonais détruits en 2 jours (19–20 juin 1944) ; 3 porte-avions japonais coulés ; perte de l'élite de l'aviation navale japonaise",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_la_mer_des_Philippines"
  },

  /* ══════════════════════════════════════════
     1945
  ══════════════════════════════════════════ */
  {
    year: 1945, dateShort: "4–11 fév.", cat: "rare", icon: "✍️",
    title: "Yalta : l'Europe redessinée en 8 jours par des hommes épuisés",
    detail: "Churchill, Roosevelt et Staline décident du sort de l'Europe à Yalta. Roosevelt, visiblement amaigri et épuisé, mourra 63 jours plus tard. Les décisions prises ici (frontières de la Pologne, zones d'occupation, ONU) façonnent l'Europe jusqu'à la chute du Mur.",
    stat: "Conférence du 4 au 11 février 1945 ; Roosevelt meurt le 12 avril 1945, exactement 63 jours après Yalta",
    wiki: "https://fr.wikipedia.org/wiki/Conférence_de_Yalta"
  },
  {
    year: 1945, dateShort: "13–15 fév.", cat: "rare", icon: "🔥",
    title: "Bombardement de Dresde — le débat historique qui dure encore",
    detail: "800 bombardiers britanniques et 300 américains détruisent le centre de Dresde en deux nuits. La propagande nazie annonça 200 000 morts pour provoquer l'indignation mondiale. Une commission d'historiens allemands a établi en 2010 le chiffre définitif à environ 25 000 victimes.",
    stat: "Environ 25 000 morts (commission historique allemande de 2010) ; la propagande nazie avait annoncé 200 000 à 500 000",
    wiki: "https://fr.wikipedia.org/wiki/Bombardement_de_Dresde"
  },
  {
    year: 1945, dateShort: "19 fév.", cat: "known", icon: "🚩",
    title: "Iwo Jima — 36 jours pour 21 km² de cendres volcaniques",
    detail: "Les marines américains s'emparent de l'île volcanique d'Iwo Jima après 36 jours de combats acharnés dans des tunnels et des fortifications souterraines construits par 21 000 Japonais. La photo de soldats plantant le drapeau américain sur le mont Suribachi devient l'icône du Pacifique.",
    stat: "6 821 marines tués, 19 189 blessés pour conquérir 21 km² ; 18 844 des 21 000 défenseurs japonais morts",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_d%27Iwo_Jima"
  },
  {
    year: 1945, dateShort: "7 mars", cat: "rare", icon: "🌉",
    title: "Le pont de Remagen — capturé intact par chance",
    detail: "Des soldats américains découvrent que le pont de Ludendorff sur le Rhin n'a pas été détruit. En quelques minutes, ils s'en emparent avant que les Allemands ne déclenchent les charges. C'est la première traversée du Rhin depuis Napoléon en 1805.",
    stat: "Première traversée du Rhin en 140 ans (depuis Napoléon en 1805) ; le pont s'effondre le 17 mars mais la tête de pont est établie",
    wiki: "https://fr.wikipedia.org/wiki/Pont_de_Remagen"
  },
  {
    year: 1945, dateShort: "1 avr.", cat: "known", icon: "🌏",
    title: "Okinawa — la bataille la plus meurtrière du Pacifique",
    detail: "82 jours de combat pour prendre Okinawa, dernière grande île avant le Japon continental. Les pertes civiles — entre 100 000 et 150 000 habitants d'Okinawa tués, soit 1/3 de la population — et la résistance fanatique japonaise poussèrent Truman vers la bombe atomique.",
    stat: "12 000 Américains tués, 38 000 blessés ; 110 000 Japonais tués ; entre 100 000 et 150 000 civils d'Okinawa morts",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_d%27Okinawa"
  },
  {
    year: 1945, dateShort: "12 avr.", cat: "known", icon: "💀",
    title: "Mort de Roosevelt — Truman découvre la bombe atomique",
    detail: "Roosevelt meurt d'une hémorragie cérébrale à Warm Springs, Géorgie. Harry Truman, vice-président depuis 83 jours seulement, apprend le soir même l'existence du projet Manhattan — il n'en savait rien jusqu'alors. Il devra décider dans les semaines suivantes de l'utilisation de la bombe atomique.",
    stat: "Truman ignorait totalement l'existence de la bombe atomique jusqu'au 12 avril 1945 ; vice-président depuis seulement 83 jours",
    wiki: "https://fr.wikipedia.org/wiki/Franklin_Delano_Roosevelt"
  },
  {
    year: 1945, dateShort: "16 avr.", cat: "known", icon: "🏙️",
    title: "Bataille de Berlin — 2,5 millions de soldats soviétiques convergent",
    detail: "Joukov et Koniev lancent 2,5 millions de soldats sur Berlin le 16 avril. La ville est défendue par des adolescents de la Hitlerjugend et des vieillards du Volkssturm. Les combats urbains sont d'une violence extrême.",
    stat: "2,5 millions de soldats soviétiques ; 81 116 tués côté soviétique pour prendre Berlin ; 125 000 civils berlinois morts pendant la bataille",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_Berlin"
  },
  {
    year: 1945, dateShort: "28 avr.", cat: "known", icon: "🤌",
    title: "Mussolini fusillé et pendu tête en bas à Milan",
    detail: "Mussolini tente de fuir en Suisse déguisé dans un manteau de soldat allemand. Il est reconnu par des partisans communistes à Dongo, fusillé avec sa maîtresse Clara Petacci le 28 avril, et leurs corps sont exposés tête en bas à l'Esso de Piazzale Loreto à Milan devant une foule en colère.",
    stat: "Exécuté le 28 avril 1945 à Giulino di Mezzegra ; pendu tête en bas à la station-service Esso de Piazzale Loreto, Milan",
    wiki: "https://fr.wikipedia.org/wiki/Mort_de_Benito_Mussolini"
  },
  {
    year: 1945, dateShort: "30 avr.", cat: "known", icon: "💀",
    title: "Suicide d'Hitler dans le Führerbunker à 15h30",
    detail: "Hitler se suicide avec Eva Braun dans son bunker sous la Chancellerie, un jour après leur mariage. Il prend du cyanure et se tire simultanément une balle dans la tempe. Les corps sont brûlés dans le jardin selon ses dernières instructions. Berlin capitule 8 jours plus tard.",
    stat: "Suicide le 30 avril 1945 à 15h30 environ ; corps brûlés dans le jardin de la Chancellerie ; Berlin capitule le 2 mai",
    wiki: "https://fr.wikipedia.org/wiki/Mort_d%27Adolf_Hitler"
  },
  {
    year: 1945, dateShort: "8 mai", cat: "known", icon: "🎊",
    title: "Capitulation allemande — VE Day, la paix en Europe",
    detail: "L'Allemagne signe sa capitulation inconditionnelle dans la nuit du 8 au 9 mai (signature officielle le 7 mai à Reims, ratifiée le 8 mai à Berlin). L'Europe fête la victoire dans des scènes de liesse inégalées. Mais en Asie, la guerre continue. Et 6 millions de Juifs ne sont pas là pour célébrer.",
    stat: "Fin officielle de la guerre en Europe ; 6 ans de conflit ; 6 millions de Juifs assassinés dans la Shoah",
    wiki: "https://fr.wikipedia.org/wiki/Capitulation_de_l%27Allemagne"
  },
  {
    year: 1945, dateShort: "16 juil.", cat: "known", icon: "☢️",
    title: "Trinity — premier essai nucléaire dans le désert du Nouveau-Mexique",
    detail: "À 5h29 et 45 secondes du matin, dans le désert de Jornada del Muerto (Nouveau-Mexique), la première bombe atomique de l'histoire est détonée. Oppenheimer murmure une phrase de la Bhagavad Gita : 'Je suis devenu la Mort, le destructeur des mondes.' Le monde a changé.",
    stat: "Puissance équivalente à 21 kilotonnes de TNT ; cratère de 75 m de diamètre ; la tour de détonation de 30 m vaporisée",
    wiki: "https://fr.wikipedia.org/wiki/Trinity_(essai_nucléaire)"
  },
  {
    year: 1945, dateShort: "6 août", cat: "known", icon: "☢️",
    title: "Hiroshima — 'Little Boy' anéantit une ville en quelques secondes",
    detail: "Le bombardier Enola Gay largue 'Little Boy' sur Hiroshima à 8h15. L'explosion à 580 m d'altitude anéantit le centre-ville. Le nombre exact de victimes ne sera jamais connu (destruction des archives civiles). Les estimations vont de 70 000 morts immédiats à 140 000 d'ici fin 1945.",
    stat: "70 000 à 80 000 morts immédiats ; estimations de 90 000 à 140 000 morts fin 1945 (séquelles de radiations incluses) — Wikipedia FR / Herodote.net",
    wiki: "https://fr.wikipedia.org/wiki/Bombardement_atomique_d%27Hiroshima"
  },
  {
    year: 1945, dateShort: "8 août", cat: "rare", icon: "☭",
    title: "L'URSS déclare la guerre au Japon — comme promis à Yalta",
    detail: "À exactement minuit le 8 août 1945, l'URSS déclare la guerre au Japon, exactement 3 mois après la capitulation allemande comme promis à Yalta. 1,6 million de soldats soviétiques envahissent la Mandchourie et l'anéantissent en 11 jours.",
    stat: "1,6 million de soldats soviétiques ; armée japonaise du Guandong (700 000 hommes) détruite en 11 jours",
    wiki: "https://fr.wikipedia.org/wiki/Guerre_soviéto-japonaise"
  },
  {
    year: 1945, dateShort: "9 août", cat: "known", icon: "☢️",
    title: "Nagasaki — 'Fat Man' frappe une ville qui n'était pas la cible",
    detail: "La cible principale était Kokura, mais des nuages épais couvrent la ville. Le bombardier Bockscar se déroute vers Nagasaki. 'Fat Man', plus puissante que Little Boy (21 kt), tue entre 40 000 et 80 000 personnes. La géographie vallonnée de Nagasaki limite les dégâts par rapport à ce qui était redouté.",
    stat: "40 000 à 80 000 morts ; Nagasaki n'était pas la cible principale (Kokura était prévue) ; Fat Man = 21 kt vs Little Boy = 13–16 kt",
    wiki: "https://fr.wikipedia.org/wiki/Bombardement_atomique_de_Nagasaki"
  },
  {
    year: 1945, dateShort: "15 août", cat: "known", icon: "📻",
    title: "Hirohito parle à la radio pour la première fois — l'armée tente un coup d'État",
    detail: "L'Empereur Hirohito annonce la capitulation dans un discours radiodiffusé en japonais classique que la majorité des Japonais ne comprennent pas. Dans la nuit précédant la diffusion, un groupe d'officiers tente un coup d'État pour voler les enregistrements et continuer la guerre.",
    stat: "Première fois que les Japonais entendaient la voix de leur Empereur ; tentative de coup d'État dans la nuit du 14 au 15 août par des officiers",
    wiki: "https://fr.wikipedia.org/wiki/Capitulation_du_Japon"
  },
  {
    year: 1945, dateShort: "2 sept.", cat: "known", icon: "✍️",
    title: "Capitulation japonaise sur l'USS Missouri — 23 minutes pour finir la guerre",
    detail: "Sur le pont du cuirassé USS Missouri dans la baie de Tokyo, le Japon signe la capitulation le 2 septembre 1945. La cérémonie dure 23 minutes. La Seconde Guerre mondiale est officiellement terminée — 6 ans et 1 jour après l'invasion de la Pologne.",
    stat: "2 septembre 1945, 9h02 heure locale ; durée : 23 minutes ; 6 ans et 1 jour après le 1er septembre 1939 ; ~70 à 85 millions de morts au total",
    wiki: "https://fr.wikipedia.org/wiki/Capitulation_du_Japon"
  },
  {
    year: 1945, dateShort: "Avr.–mai", cat: "anecdote", icon: "🌿",
    title: "Hiroo Onoda : 29 ans de guerre sans le savoir",
    detail: "Officier japonais aux Philippines, Hiroo Onoda continua sa guérilla jusqu'en mars 1974 car personne ne l'avait informé de la capitulation. Il refusait de croire les tracts larguant. Son ancien supérieur, Yoshimi Taniguchi, dut venir en personne depuis le Japon pour lui donner l'ordre officiel de rendre les armes.",
    stat: "Onoda combattit de 1945 à mars 1974 — 29 ans après la fin de la guerre ; son supérieur dut venir en personne aux Philippines",
    wiki: "https://fr.wikipedia.org/wiki/Hiroo_Onoda"
  },
  {
    year: 1945, dateShort: "Après", cat: "rare", icon: "🐀",
    title: "Les 'ratlines' : des milliers de nazis fuient vers l'Amérique du Sud",
    detail: "Des milliers de criminels de guerre nazis fuient via des réseaux clandestins, souvent par l'Italie, avec des passeports du CICR ou du Vatican. Adolf Eichmann fut capturé à Buenos Aires en 1960 par le Mossad. Josef Mengele mourut au Brésil en 1979 sans jamais être jugé.",
    stat: "Eichmann capturé à Buenos Aires en 1960, jugé et exécuté en Israël en 1962 ; Mengele mort au Brésil en 1979",
    wiki: "https://fr.wikipedia.org/wiki/Filières_d%27évasion_nazis"
  },
  {
    year: 1945, dateShort: "Nov.", cat: "known", icon: "⚖️",
    title: "Procès de Nuremberg — juger des crimes sans précédent",
    detail: "21 dirigeants nazis comparaissent pour crimes contre l'humanité, crimes de guerre et crimes contre la paix. Le procès crée le concept juridique de 'crime contre l'humanité' et les bases du droit international moderne. 12 accusés sont condamnés à mort.",
    stat: "12 condamnations à mort, 3 acquittements, 7 condamnations à prison ; fondation du droit international pénal moderne",
    wiki: "https://fr.wikipedia.org/wiki/Procès_de_Nuremberg"
  },

  /* ══════════════════════════════════════════
     THÈMES TRANSVERSAUX / COULISSES
  ══════════════════════════════════════════ */
  {
    year: 1940, dateShort: "Continu", cat: "rare", icon: "🔐",
    title: "Bletchley Park : 10 000 personnes gardent le secret le mieux gardé de la guerre",
    detail: "Plus de 10 000 personnes travaillaient à Bletchley Park. Tous signaient un acte de secret absolu et n'en parlèrent à personne — y compris leurs conjoints — pendant 30 ans après la guerre. Pas une seule fuite ne compromit l'opération pendant tout le conflit.",
    stat: "0 fuite en 30 ans parmi 10 000 personnes ; secret révélé au public seulement en 1974 par les historiens Frederick Winterbotham",
    wiki: "https://fr.wikipedia.org/wiki/Bletchley_Park"
  },
  {
    year: 1942, dateShort: "Continu", cat: "anecdote", icon: "🎨",
    title: "Hollywood en guerre — Disney dessine Donald Duck pour les impôts",
    detail: "Disney, Warner, MGM — tous les studios produisirent des films de propagande commandés par le gouvernement américain. Walt Disney réalisa 'The New Spirit' en 1942 pour inciter les Américains à payer leurs impôts de guerre — commandé par le Trésor américain.",
    stat: "Disney réalisa 'The New Spirit' (1942) sur commande du Trésor américain ; 68 % de la production Disney pendant la guerre = productions de guerre",
    wiki: "https://fr.wikipedia.org/wiki/Propagande_américaine_pendant_la_Seconde_Guerre_mondiale"
  },
  {
    year: 1941, dateShort: "Continu", cat: "rare", icon: "🏭",
    title: "Rosie the Riveter — les femmes envahissent les usines d'armement",
    detail: "Avec 12 millions d'hommes partis au front, les femmes américaines prirent massivement les postes dans les usines d'armement. 'Rosie the Riveter' (créée par J. Howard Miller en 1942) devint le symbole de cette révolution silencieuse qui transforma durablement la société américaine.",
    stat: "6 millions de femmes intègrent le marché du travail industriel aux USA pendant la guerre ; le taux de travail féminin passe de 27 % à 37 %",
    wiki: "https://fr.wikipedia.org/wiki/Rosie_the_Riveter"
  },
  {
    year: 1942, dateShort: "Continu", cat: "rare", icon: "📬",
    title: "Les 'Code Talkers' Navajo : un code que les Japonais ne cassèrent jamais",
    detail: "L'armée américaine recruta 420 soldats Navajo pour transmettre les communications en utilisant leur langue — inconnue en dehors de leur territoire et impossible à mémoriser pour un étranger. Les Japonais ne cassèrent jamais le code. Ils ne furent officiellement reconnus qu'en 2001.",
    stat: "420 Code Talkers Navajo formés ; code jamais brisé ; médaille d'or du Congrès attribuée en 2001",
    wiki: "https://fr.wikipedia.org/wiki/Chiffreurs_navajos"
  },
  {
    year: 1943, dateShort: "Continu", cat: "anecdote", icon: "🍫",
    title: "Le chocolat militaire américain : conçu pour être 'à peine meilleur que rien'",
    detail: "La barre D-ration conçue pour les GIs devait être 'légèrement meilleure qu'une barre de paraffine' selon les spécifications de l'armée — trop bonne, les soldats l'auraient mangée avant une urgence.",
    stat: "Barre D-ration : 600 calories, spécifiée pour être 'peu appétissante' ; produite à 100 millions d'unités par mois en 1943",
    wiki: "https://fr.wikipedia.org/wiki/Ration_militaire"
  },
  {
    year: 1944, dateShort: "Continu", cat: "rare", icon: "✊",
    title: "La résistance française — bien plus qu'une légende",
    detail: "La résistance française regroupait environ 400 000 membres actifs à son apogée en 1944, toutes tendances politiques confondues. Leurs actions de sabotage (voies ferrées, ponts, communications) ralentirent de plusieurs semaines le déplacement des réserves allemandes vers la Normandie après le D-Day.",
    stat: "Environ 400 000 résistants actifs en 1944 ; sabotages : 486 actions sur les chemins de fer dans la seule semaine du 6 au 12 juin 1944",
    wiki: "https://fr.wikipedia.org/wiki/Résistance_intérieure_française"
  },
  {
    year: 1939, dateShort: "Continu", cat: "known", icon: "✡️",
    title: "La Shoah — l'industrialisation du meurtre de masse",
    detail: "Six millions de Juifs européens furent systématiquement assassinés par les Einsatzgruppen mobiles, les camps d'extermination (Auschwitz, Treblinka, Sobibor, Bełżec, Chełmno, Majdanek), et par des conditions de déportation inhumaines. C'est les deux tiers de la population juive européenne.",
    stat: "6 millions de Juifs assassinés = les 2/3 de la population juive européenne d'avant-guerre ; consensus historique établi à Nuremberg et confirmé depuis",
    wiki: "https://fr.wikipedia.org/wiki/Shoah"
  },
  {
    year: 1944, dateShort: "Continu", cat: "rare", icon: "👩",
    title: "Les 'Night Witches' : des pilotes soviétiques qui terrorisaient les Allemands",
    detail: "Le 588e régiment aérien soviétique, composé uniquement de femmes, effectua plus de 30 000 missions de bombardement nocturnes avec de vieux biplans Po-2. Les Allemands les surnommèrent 'Nachtexen' (sorcières de la nuit). Pour être décoré, chaque pilote devait compléter 1 000 missions.",
    stat: "23 pilotes du 588e régiment décorées du titre de 'Héros de l'Union soviétique' ; plus de 30 000 missions nocturnes",
    wiki: "https://fr.wikipedia.org/wiki/Régiment_d%27aviation_de_nuit_soviétique_588e"
  },
  {
    year: 1944, dateShort: "15 déc.", cat: "anecdote", icon: "🎺",
    title: "Glenn Miller disparu au-dessus de la Manche en jouant pour les soldats",
    detail: "Le chef d'orchestre Glenn Miller avait renoncé à sa célébrité pour diriger l'orchestre de l'USAAF en Europe. Il disparut le 15 décembre 1944 lors d'un vol entre la Grande-Bretagne et Paris. Son avion ne fut jamais retrouvé. Cause probable : givre sur les carburateurs ou bombes larguées par accident d'un bombardier allié.",
    stat: "Glenn Miller : 35 millions de disques vendus avant-guerre ; disparu à 40 ans le 15 décembre 1944 au-dessus de la Manche",
    wiki: "https://fr.wikipedia.org/wiki/Glenn_Miller"
  },
  {
    year: 1948, dateShort: "Continu", cat: "rare", icon: "🏗️",
    title: "Le plan Marshall — reconstruire l'Europe pour éviter un nouvel Hitler",
    detail: "En 1948, les États-Unis proposent 13 milliards de dollars sur 4 ans pour reconstruire l'Europe occidentale. La leçon du Traité de Versailles (1919) avait été retenue : une Europe humiliée et appauvrie avait engendré Hitler. Cette fois, on reconstruirait.",
    stat: "13 milliards de dollars (1948–1952) soit environ 150 milliards actuels ; 17 pays bénéficiaires ; plan proposé le 5 juin 1947 par le secrétaire d'État George Marshall",
    wiki: "https://fr.wikipedia.org/wiki/Plan_Marshall"
  }
];

const YEARS = [...new Set(EVENTS.map(e => e.year))].sort((a, b) => a - b);

const STATS = {
  total: "70 – 85 millions",
  duration: "6 ans, 1 jour",
  nations: "30+ nations",
  label: "victimes estimées"
};
