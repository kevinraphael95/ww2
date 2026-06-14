const EVENTS = [
  {
    year: 1939,
    date: "1 septembre 1939",
    dateShort: "1 sept.",
    cat: "known",
    icon: "💣",
    title: "Invasion de la Pologne",
    detail: "L'Allemagne nazie déclenche la Blitzkrieg en Pologne. Deux jours plus tard, la France et le Royaume-Uni déclarent la guerre. Le pays est envahi simultanément par l'URSS à l'est le 17 septembre.",
    stat: "1,7 million de soldats allemands mobilisés",
    wiki: "https://fr.wikipedia.org/wiki/Invasion_de_la_Pologne"
  },
  {
    year: 1939,
    date: "28 septembre 1939",
    dateShort: "28 sept.",
    cat: "rare",
    icon: "🗂️",
    title: "La résistance polonaise se reconstruit en exil en 24h",
    detail: "En moins d'une journée après la capitulation de Varsovie, le gouvernement polonais se reconstituait à Paris. L'armée secrète polonaise (ZWZ) allait devenir l'un des réseaux de résistance les plus organisés d'Europe.",
    stat: "400 000 soldats polonais combattirent hors de Pologne",
    wiki: "https://fr.wikipedia.org/wiki/Arm%C3%A9e_de_l%27int%C3%A9rieur_(Pologne)"
  },
  {
    year: 1939,
    date: "Novembre 1939",
    dateShort: "Nov.",
    cat: "anecdote",
    icon: "🎿",
    title: "La Finlande résiste à l'URSS à ski",
    detail: "La Guerre d'Hiver oppose la Finlande à l'URSS. Les soldats finlandais, surnommés « fantômes blancs », harcelaient les colonnes soviétiques à ski dans la forêt enneigée. Le tireur d'élite Simo Häyhä aurait tué plus de 500 soldats soviétiques, devenant la source de la plupart des légendes modernes sur les snipers.",
    stat: "Simo Häyhä : ~500 kills confirmés en moins de 100 jours",
    wiki: "https://fr.wikipedia.org/wiki/Simo_H%C3%A4yh%C3%A4"
  },

  {
    year: 1940,
    date: "10 mai 1940",
    dateShort: "10 mai",
    cat: "known",
    icon: "⚔️",
    title: "Offensive allemande à l'Ouest — la France envahie",
    detail: "La Wehrmacht contourne la ligne Maginot par les Ardennes. En six semaines, la France capitule. C'est l'un des effondrements militaires les plus rapides d'une grande puissance de l'histoire moderne.",
    stat: "46 jours entre l'offensive et l'armistice",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_France"
  },
  {
    year: 1940,
    date: "26 mai – 4 juin 1940",
    dateShort: "Mai–Juin",
    cat: "rare",
    icon: "⛵",
    title: "Dunkerque sauvé par la brume et des bateaux civils",
    detail: "338 000 soldats alliés sont évacués grâce à des milliers de petits bateaux de plaisance civils. Une brume matinale inattendue masquait les troupes à la Luftwaffe plusieurs matins de suite, jouant un rôle décisif que la météo seule ne peut expliquer.",
    stat: "338 226 soldats évacués en 9 jours",
    wiki: "https://fr.wikipedia.org/wiki/%C3%89vacuation_de_Dunkerque"
  },
  {
    year: 1940,
    date: "Été 1940",
    dateShort: "Été",
    cat: "anecdote",
    icon: "🎨",
    title: "Les Allemands visitent Paris… en touristes",
    detail: "Les soldats allemands entrant dans Paris s'attendaient à combattre rue par rue. Ils découvrirent une ville calme et intacte. Certains officiers allèrent au Louvre et à la Tour Eiffel en touristes dès les premiers jours de l'occupation.",
    stat: "Paris déclarée « ville ouverte » le 14 juin 1940",
    wiki: "https://fr.wikipedia.org/wiki/Occupation_de_Paris"
  },
  {
    year: 1940,
    date: "Juillet – Octobre 1940",
    dateShort: "Juil.–Oct.",
    cat: "known",
    icon: "✈️",
    title: "Bataille d'Angleterre",
    detail: "Première grande bataille aérienne de l'histoire. La RAF, malgré l'infériorité numérique, repousse la Luftwaffe. Churchill : « Jamais dans l'histoire des conflits humains autant de gens n'ont dû autant à si peu. »",
    stat: "2 936 pilotes de la RAF contre ~2 500 avions de la Luftwaffe",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_d%27Angleterre"
  },

  {
    year: 1941,
    date: "22 juin 1941",
    dateShort: "22 juin",
    cat: "known",
    icon: "🗺️",
    title: "Opération Barbarossa — l'URSS envahie",
    detail: "3 millions de soldats allemands franchissent la frontière soviétique. Plus grande invasion terrestre de l'histoire. Hitler rompt le pacte germano-soviétique et ouvre un second front gigantesque qui marquera le tournant du conflit.",
    stat: "3 000 chars et 2 500 avions déployés le premier jour",
    wiki: "https://fr.wikipedia.org/wiki/Op%C3%A9ration_Barbarossa"
  },
  {
    year: 1941,
    date: "Été 1941",
    dateShort: "Été",
    cat: "rare",
    icon: "🖼️",
    title: "Les trésors de l'Ermitage évacués en secret vers l'Oural",
    detail: "Alors que les Allemands avançaient vers Léningrad, des trains spéciaux évacuaient les collections du musée de l'Ermitage. 1,2 million d'objets furent déplacés en secret en quelques semaines dans des caisses de bois, sans inventaire complet.",
    stat: "1 200 000 objets déplacés en 2 convois ferroviaires",
    wiki: "https://fr.wikipedia.org/wiki/Mus%C3%A9e_de_l%27Ermitage"
  },
  {
    year: 1941,
    date: "7 décembre 1941",
    dateShort: "7 déc.",
    cat: "known",
    icon: "🌊",
    title: "Attaque de Pearl Harbor",
    detail: "L'aviation japonaise détruit la flotte américaine du Pacifique. Les États-Unis entrent en guerre. Franklin Roosevelt qualifie ce jour de « date qui vivra dans l'infamie ». Le Japon avait misé sur un knock-out ; c'était en réalité le début de sa fin.",
    stat: "2 403 Américains tués, 19 navires coulés ou endommagés",
    wiki: "https://fr.wikipedia.org/wiki/Attaque_de_Pearl_Harbor"
  },
  {
    year: 1941,
    date: "Décembre 1941",
    dateShort: "Déc.",
    cat: "anecdote",
    icon: "🤦",
    title: "Hitler déclare la guerre aux États-Unis… de lui-même",
    detail: "Quatre jours après Pearl Harbor, Hitler déclare la guerre aux États-Unis alors qu'il n'y était nullement obligé par ses traités avec le Japon. La plupart des historiens considèrent cette décision comme l'une de ses erreurs stratégiques les plus inexplicables.",
    stat: "4 jours après Pearl Harbor : déclaration de guerre volontaire",
    wiki: "https://fr.wikipedia.org/wiki/D%C3%A9claration_de_guerre_de_l%27Allemagne_aux_%C3%89tats-Unis"
  },

  {
    year: 1942,
    date: "Janvier 1942",
    dateShort: "Janv.",
    cat: "rare",
    icon: "📋",
    title: "Wannsee : 90 minutes pour décider du génocide",
    detail: "Quinze hauts fonctionnaires nazis se réunirent 90 minutes à Wannsee pour coordonner la « Solution finale ». Le procès-verbal retrouvé en 1947 est l'un des documents les plus glaçants du XXe siècle — un génocide planifié comme une réunion de management.",
    stat: "15 participants, 11 millions de victimes prévues au tableau",
    wiki: "https://fr.wikipedia.org/wiki/Conf%C3%A9rence_de_Wannsee"
  },
  {
    year: 1942,
    date: "Février 1942",
    dateShort: "Fév.",
    cat: "anecdote",
    icon: "🕊️",
    title: "Des pigeons voyageurs décorés de médailles militaires",
    detail: "La marine britannique employait des milliers de pigeons voyageurs. « Cher Ami » sauva l'équipage d'un hydravion abattu en mer en portant leur position. Il reçut la médaille Dickin — l'équivalent animal de la Victoria Cross.",
    stat: "32 pigeons ont reçu la médaille Dickin pendant la guerre",
    wiki: "https://fr.wikipedia.org/wiki/M%C3%A9daille_Dickin"
  },
  {
    year: 1942,
    date: "Août 1942 – Février 1943",
    dateShort: "Août–Fév.",
    cat: "known",
    icon: "🔥",
    title: "Bataille de Stalingrad",
    detail: "Le tournant de la guerre à l'Est. 800 000 morts côté allemand, plus d'un million côté soviétique. La 6e armée de Paulus capitule dans les ruines d'une ville que Hitler refusa d'évacuer par orgueil jusqu'au bout.",
    stat: "~2 millions de morts en 6 mois de combat urbain",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_de_Stalingrad"
  },
  {
    year: 1942,
    date: "Novembre 1942",
    dateShort: "Nov.",
    cat: "rare",
    icon: "🌍",
    title: "Opération Torch : les GIs ignoraient leur destination",
    detail: "Lors du débarquement américain en Afrique du Nord, la plupart des soldats ne savaient pas leur destination jusqu'à 36h avant l'assaut. Les ordres étaient dans des enveloppes scellées. Certains pensaient attaquer Dakar ou la Norvège.",
    stat: "107 000 soldats alliés débarquèrent sans connaître leur objectif",
    wiki: "https://fr.wikipedia.org/wiki/Op%C3%A9ration_Torch"
  },

  {
    year: 1943,
    date: "Juillet 1943",
    dateShort: "Juil.",
    cat: "known",
    icon: "🤌",
    title: "Sicile et chute de Mussolini",
    detail: "Les Alliés ouvrent un second front méditerranéen. Mussolini est arrêté par le Grand Conseil fasciste puis emprisonné. Il sera libéré deux mois plus tard par des parachutistes allemands dans une opération spectaculaire.",
    stat: "38 jours pour conquérir la Sicile",
    wiki: "https://fr.wikipedia.org/wiki/Op%C3%A9ration_Husky"
  },
  {
    year: 1943,
    date: "Été 1943",
    dateShort: "Été",
    cat: "anecdote",
    icon: "🦇",
    title: "Des chauves-souris bombes qui mirent le feu à une base américaine",
    detail: "Les Alliés testèrent sérieusement des chauves-souris portant de petites bombes incendiaires à larguer sur les villes japonaises. Le projet coûta des millions avant d'être abandonné — notamment après qu'une chauve-souris s'échappa et incendia un hangar d'une base américaine.",
    stat: "Projet Adams : 2 millions de dollars dépensés pour des chauves-souris",
    wiki: "https://fr.wikipedia.org/wiki/Bat_bomb"
  },
  {
    year: 1943,
    date: "Novembre 1943",
    dateShort: "Nov.",
    cat: "rare",
    icon: "🤝",
    title: "Téhéran : trois géants, des micros soviétiques et de la paranoïa",
    detail: "Staline, Roosevelt et Churchill se rencontrent pour la première fois tous les trois. Roosevelt, inquiet d'une menace d'attentat, dormait dans l'ambassade soviétique. Les Britanniques soupçonnèrent immédiatement les Soviétiques d'avoir posé des micros dans les chambres.",
    stat: "Première et unique rencontre des Trois Grands en territoire neutre",
    wiki: "https://fr.wikipedia.org/wiki/Conf%C3%A9rence_de_T%C3%A9h%C3%A9ran"
  },

  {
    year: 1944,
    date: "6 juin 1944",
    dateShort: "6 juin",
    cat: "known",
    icon: "🛥️",
    title: "Débarquement en Normandie — Jour J",
    detail: "156 000 soldats alliés prennent d'assaut les plages normandes. La plus grande opération amphibie de l'histoire. La ruse de l'opération Fortitude fit croire à Hitler que le vrai débarquement aurait lieu au Pas-de-Calais, immobilisant des Panzers jusqu'au dernier moment.",
    stat: "156 000 hommes, 11 000 avions, 5 000 navires en une nuit",
    wiki: "https://fr.wikipedia.org/wiki/D%C3%A9barquement_de_Normandie"
  },
  {
    year: 1944,
    date: "Juin 1944",
    dateShort: "Juin",
    cat: "rare",
    icon: "🎭",
    title: "L'armée fantôme de Patton qui n'existait pas",
    detail: "L'opération Fortitude créa une fausse armée entière (FUSAG), avec de faux chars gonflables, des transmissions radio bidon et des agents doubles. Hitler attendit des semaines avant de déplacer ses Panzers, convaincu que le Jour J était une feinte.",
    stat: "Des milliers de faux chars en caoutchouc déployés en Angleterre",
    wiki: "https://fr.wikipedia.org/wiki/Op%C3%A9ration_Fortitude"
  },
  {
    year: 1944,
    date: "20 juillet 1944",
    dateShort: "20 juil.",
    cat: "rare",
    icon: "💣",
    title: "La bombe de von Stauffenberg : 2 cm entre la victoire et l'échec",
    detail: "La bombe était à 2 mètres d'Hitler mais une table en chêne massif dévia le souffle de l'explosion. Des 24 personnes présentes, 4 moururent. Hitler présenta ses blessures à Mussolini quelques heures plus tard avec une fierté morbide.",
    stat: "4 morts, 0 dictateur — la table en chêne changea l'histoire",
    wiki: "https://fr.wikipedia.org/wiki/Attentat_du_20_juillet_1944"
  },
  {
    year: 1944,
    date: "25 août 1944",
    dateShort: "25 août",
    cat: "anecdote",
    icon: "🚗",
    title: "Paris libéré avec des voitures à bois",
    detail: "La libération de Paris fut menée en partie avec des véhicules fonctionnant au gazogène — un gaz produit par la combustion de bois — faute d'essence. Des taxis parisiens rejoignirent la colonne de Leclerc avec leurs propres générateurs à bois.",
    stat: "Faute d'essence, le gazogène alimentait une partie de la 2e DB",
    wiki: "https://fr.wikipedia.org/wiki/Lib%C3%A9ration_de_Paris"
  },
  {
    year: 1944,
    date: "Décembre 1944",
    dateShort: "Déc.",
    cat: "known",
    icon: "❄️",
    title: "Bataille des Ardennes — la dernière grande offensive",
    detail: "Hitler lance sa dernière grande contre-offensive à l'ouest. 30 divisions allemandes percent le front américain dans les Ardennes. La résistance héroïque de Bastogne et la météo dégagée qui permit à l'aviation alliée d'intervenir renversèrent la situation.",
    stat: "19 000 soldats américains tués — la pire perte US de la guerre",
    wiki: "https://fr.wikipedia.org/wiki/Bataille_des_Ardennes"
  },

  {
    year: 1945,
    date: "4 – 11 février 1945",
    dateShort: "Fév.",
    cat: "rare",
    icon: "✍️",
    title: "Yalta : l'Europe redessinée en trois jours",
    detail: "Churchill, Roosevelt et Staline décidèrent du sort de l'Europe d'après-guerre. Roosevelt était gravement malade (il mourut deux mois plus tard). Certains historiens estiment que son état de santé affaiblit la position américaine face à Staline.",
    stat: "Roosevelt mourut 63 jours après Yalta",
    wiki: "https://fr.wikipedia.org/wiki/Conf%C3%A9rence_de_Yalta"
  },
  {
    year: 1945,
    date: "13 – 15 février 1945",
    dateShort: "13–15 fév.",
    cat: "rare",
    icon: "🔥",
    title: "Bombardement de Dresde — le débat qui dure encore",
    detail: "800 bombardiers britanniques et américains rasèrent le centre historique de Dresde. Le nombre de morts (entre 22 000 et 25 000) fut longtemps manipulé par la propagande nazie qui annonça 250 000 victimes. La nécessité militaire de ce raid reste débattue.",
    stat: "25 000 morts estimés — propagande nazie avançait 250 000",
    wiki: "https://fr.wikipedia.org/wiki/Bombardement_de_Dresde"
  },
  {
    year: 1945,
    date: "30 avril 1945",
    dateShort: "30 avr.",
    cat: "known",
    icon: "💀",
    title: "Suicide d'Hitler dans le Führerbunker",
    detail: "Hitler se suicide avec Eva Braun dans son bunker sous Berlin, un jour après leur mariage. Leurs corps furent brûlés dans le jardin de la Chancellerie. Les soldats soviétiques trouvèrent les restes quelques heures plus tard.",
    stat: "Berlin capitule 8 jours après la mort d'Hitler",
    wiki: "https://fr.wikipedia.org/wiki/Mort_d%27Adolf_Hitler"
  },
  {
    year: 1945,
    date: "Avril – Mai 1945",
    dateShort: "Avr.–Mai",
    cat: "anecdote",
    icon: "🌿",
    title: "Hiroo Onoda : 29 ans de guerre sans le savoir",
    detail: "Officier japonais aux Philippines, Hiroo Onoda continua sa guérilla jusqu'en 1974 — 29 ans après la capitulation — car personne ne l'avait informé. Son supérieur hiérarchique dut venir en personne lui ordonner de rendre les armes.",
    stat: "Onoda combattit jusqu'en mars 1974, soit 29 ans après la fin",
    wiki: "https://fr.wikipedia.org/wiki/Hiroo_Onoda"
  },
  {
    year: 1945,
    date: "6 et 9 août 1945",
    dateShort: "6 & 9 août",
    cat: "known",
    icon: "☢️",
    title: "Hiroshima et Nagasaki — les bombes atomiques",
    detail: "« Little Boy » (6 août) et « Fat Man » (9 août) font entre 130 000 et 226 000 morts, principalement civils. C'est à ce jour la seule utilisation militaire d'armes nucléaires de l'histoire humaine.",
    stat: "200 000 morts · seule utilisation militaire du nucléaire à ce jour",
    wiki: "https://fr.wikipedia.org/wiki/Bombardements_atomiques_d%27Hiroshima_et_Nagasaki"
  },
  {
    year: 1945,
    date: "2 septembre 1945",
    dateShort: "2 sept.",
    cat: "known",
    icon: "🕊️",
    title: "Capitulation japonaise — fin officielle",
    detail: "Sur le pont du cuirassé USS Missouri, le Japon signe la reddition. La cérémonie dure 23 minutes. La Seconde Guerre Mondiale est officiellement terminée — 6 ans et 1 jour après l'invasion de la Pologne.",
    stat: "6 ans, 1 jour, ~70 à 85 millions de morts",
    wiki: "https://fr.wikipedia.org/wiki/Capitulation_du_Japon"
  },
  {
    year: 1945,
    date: "Après 1945",
    dateShort: "Après",
    cat: "rare",
    icon: "🐀",
    title: "Les nazis fuient via les « ratlines » — avec complicité vaticane ?",
    detail: "Des milliers de criminels de guerre nazis fuirent vers l'Amérique du Sud via des réseaux clandestins, en passant par l'Italie avec de faux passeports. Des documents déclassifiés suggèrent que des agents du Vatican facilitèrent certains passages.",
    stat: "Adolf Eichmann, Josef Mengele… des centaines de criminels s'échappèrent",
    wiki: "https://fr.wikipedia.org/wiki/Fili%C3%A8res_d%27%C3%A9vasion_nazis"
  }
];

const YEARS = [...new Set(EVENTS.map(e => e.year))].sort((a, b) => a - b);

const STATS = {
  total: "70 – 85 millions",
  duration: "6 ans, 1 jour",
  nations: "30+ nations",
  label: "victimes estimées"
};
