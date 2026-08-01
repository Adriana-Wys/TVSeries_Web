const series = [
    {
        title: "Rick and Morty",
        genre: ["Animacja dla dorosłych", " Komedia"],
        platform: {
            name: "HBOMAX",
            class: "hbomax"
        },
        image: "img/Rick and Morty.jpg",
        description: "Ekscentryczny naukowiec Rick udaje się ze swoim wnukiem Mortym do najdziwniejszych miejsc w galaktyce i alternatywnych rzeczywistości.",
        link: "https://play.hbomax.com/show/ab553cdc-e15d-4597-b65f-bec9201fd2dd?season=1"
    },
    {
        title: "The Last Airbender",
        genre: ["Fantazyjny", " Przygodowy"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Avatar.jpg",
        description: "Chłopiec zwany Awatarem musi okiełznać moce czterech żywiołów, aby uratować pogrążony w wojnie świat i pokonać okrutnych przeciwników.",
        link: "https://www.netflix.com/watch/80238401?trackId=284616272&tctx=0%2C0%2C5c7e57d9-e939-485b-8189-28264633fe57%2C5c7e57d9-e939-485b-8189-28264633fe57%7C%3DeyJwYWdlSWQiOiJhZDA1YTQ5My1mZWFiLTQwMzctODRiOS1hM2FlZDRjOTY2MTEvMS8vYXZhLzAvMCIsImxvY2FsU2VjdGlvbklkIjoiMiJ9%2C%2C%2C%2C%2C80237957%2CVideo%3A80238401%2CdetailsPageEpisodePlayButton"
    },
    {
        title: "Euphoria",
        genre: ["Dramat"],
        platform: {
            name: "HBOMAX",
            class: "hbomax"
        },
        image: "img/Euphoria.jpg",
        description: "Życie uzależnionej od narkotyków nastolatki zmienia się, gdy poznaje transpłciową dziewczynę, która przybyła do miasta.",
        link: "https://play.hbomax.com/show/4ffd33c9-e0d6-4cd6-bd13-34c266c79be0"
    },
    {
        title: "American Horror Story",
        genre: ["Horror"],
        platform: {
            name: "Disney+",
            class: "disney"
        },
        image: "img/American Horror Story.jpg",
        description: "Harmonowie postanawiają przeprowadzić się, nie mając pojęcia o tym, co miało miejsce w nowym domu. Po czasie odkrywają krwawą i mroczną historię rezydencji.",
        link: "https://www.disneyplus.com/pl-pl/browse/entity-a67a233c-fcfe-4e8e-b000-052603ddd616"
    },
    {
        title: "Modern Family",
        genre: ["Komedia"],
        platform: {
            name: "Disney+",
            class: "disney"
        },
        image: "img/Modern Family.jpg",
        description: "Trzy różne, ale spokrewnione rodziny mierzą się z problemami i utrapieniami w swój własny, komiczny sposób.",
        link: "https://www.disneyplus.com/pl-pl/browse/entity-943f5577-caad-4e34-a8d3-4a9a816d078a"
    },
    {
        title: "It: Welcome to Derry",
        genre: ["Dramat", " Horror"],
        platform: {
            name: "HBOMAX",
            class: "hbomax"
        },
        image: "img/It.jpg",
        description: "W miasteczku Derry zło nigdy nie znika - tylko czeka. Jest rok 1962. Społeczność żyje w cieniu dziwnych zaginięć, o których mówi się szeptem.",
        link: "https://play.hbomax.com/show/6c39354a-c52d-46d7-982c-b5d196988189"
    },
    {
        title: "Griselda",
        genre: ["Dramat", " Kryminał"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Griselda.jpg",
        description: "Inspirowany prawdziwymi zdarzeniami fabularyzowany serial o Griseldzie Blanco, która po ucieczce z Medellín została 'matką chrzestną' narkotykowego imperium Miami.",
        link: "https://www.netflix.com/watch/81229674?trackId=284616272"
    },
    {
        title: "Brooklyn Nine-Nine",
        genre: ["Komedia Kryminalna"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Brooklyn 9-9.jpg",
        description: "Nowy kapitan wprowadza dyscyplinę na 99. posterunku policji w Nowym Jorku.",
        link: "https://www.netflix.com/watch/80004161?trackId=284616272&tctx=NaN%2C0%2C8ec977bc-3235-428c-92e1-0369c59b70d8%2C8ec977bc-3235-428c-92e1-0369c59b70d8%7C%3DeyJwYWdlSWQiOiJhZDA1YTQ5My1mZWFiLTQwMzctODRiOS1hM2FlZDRjOTY2MTEvMS8vYnJvby8wLzAiLCJsb2NhbFNlY3Rpb25JZCI6IjIifQ%3D%3D%2C%2C%2C%2C%2C70281562%2CVideo%3A80004161%2CdetailsPageEpisodePlayButton"
    },
    {
        title: "Cursed",
        genre: ["Fantasy", " Przygodowy"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Cursed.jpg",
        description: "Współczesna wersja legendy arturiańskiej. Nastolatka Nimue pomaga najemnikowi imieniem Artur znaleźć Merlina i dostarczyć mu starożytny miecz.",
        link: "https://www.netflix.com/watch/80226444?trackId=284616272"
    },
    {
        title: "Who Killed Sara?",
        genre: ["Kryminał", " Dramat"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Who Killed Sara.jpg",
        description: "Skoncentrowany na zemście i dowiedzeniu, że został wrobiony w morderstwo siostry Álex ma zamiar ujawnić nie tylko sprawcę zbrodni, ale o wiele więcej.",
        link: "https://www.netflix.com/watch/81217432?trackId=284616272&tctx=NaN%2C1%2Cee725083-e291-4859-be9f-b357b90e1339%2Cee725083-e291-4859-be9f-b357b90e1339%7C%3DeyJwYWdlSWQiOiJhZDA1YTQ5My1mZWFiLTQwMzctODRiOS1hM2FlZDRjOTY2MTEvMS8vd2hvIGsvMC8wIiwibG9jYWxTZWN0aW9uSWQiOiIyIn0%3D%2C%2C%2C%2C%2C81166747%2CVideo%3A81217432%2CdetailsPageEpisodePlayButton"
    },
    {
        title: "The Office",
        genre: ["Komedia"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/The Office.jpg",
        description: "Kamery towarzyszą pracownikom oddziału firmy sprzedającej artykuły papierowe w czasie ich codziennych obowiązków.",
        link: "https://www.netflix.com/watch/70105212?trackId=284616272&tctx=NaN%2C1%2C6ccd79fb-4349-4e9d-a1a9-8d46dde24b88%2C6ccd79fb-4349-4e9d-a1a9-8d46dde24b88%7C%3DeyJwYWdlSWQiOiJhZDA1YTQ5My1mZWFiLTQwMzctODRiOS1hM2FlZDRjOTY2MTEvMS8vdGhlIG8vMC8wIiwibG9jYWxTZWN0aW9uSWQiOiIyIn0%3D%2C%2C%2C%2C%2C70136120%2CVideo%3A70105212%2CdetailsPageEpisodePlayButton"
    },
    {
        title: "Mindhunter",
        genre: ["Kryminał", " Thriller"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Mindhunter.jpg",
        description: "Jest rok 1979. Dwóch agentów FBI zostaje wyznaczonych, aby przesłuchać osadzonych w więzieniu seryjnych morderców i wykorzystać pozyskaną wiedzę do zamknięcia nierozwiązanych spraw.",
        link: "https://www.netflix.com/watch/80114856?trackId=284616272&tctx=NaN%2C0%2C6333a31f-bf22-4a7c-9242-0561c18a4c64%2C6333a31f-bf22-4a7c-9242-0561c18a4c64%7C%3DeyJwYWdlSWQiOiJhZDA1YTQ5My1mZWFiLTQwMzctODRiOS1hM2FlZDRjOTY2MTEvMS8vbWluZC8wLzAiLCJsb2NhbFNlY3Rpb25JZCI6IjIifQ%3D%3D%2C%2C%2C%2C%2C80114855%2CVideo%3A80114856%2CdetailsPageEpisodePlayButton"
    },
     {
        title: "Breaking Bad",
        genre: ["Dramat", " Kryminał"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Breaking Bad.jpg",
        description: "Gdy nauczyciel chemii dowiaduje się, że ma raka, postanawia rozpocząć produkcję metamfetaminy, by finansowo zabezpieczyć swoją rodzinę.",
        link: "https://www.netflix.com/watch/70196252?trackId=284616272&tctx=NaN%2C1%2Cb39144b9-b4df-4239-ba61-770938b35152%2Cb39144b9-b4df-4239-ba61-770938b35152%7C%3DeyJwYWdlSWQiOiJhZDA1YTQ5My1mZWFiLTQwMzctODRiOS1hM2FlZDRjOTY2MTEvMS8vYnJlYS8wLzAiLCJsb2NhbFNlY3Rpb25JZCI6IjIifQ%3D%3D%2C%2C%2C%2C%2C70143836%2CVideo%3A70196252%2CdetailsPageEpisodePlayButton"
    },
    {
        title: "From",
        genre: ["Dramat", " Horror"],
        platform: {
            name: "HBOMAX",
            class: "hbomax"
        },
        image: "img/From.jpg",
        description: "Serial odsłania tajemnicę koszmarnego miasta, w którym uwięzieni zostają wszyscy, którzy przekraczają jego progi.",
        link: "https://play.hbomax.com/show/6d6ffafc-d703-4813-ae1d-b253559c60b4?season=1"
    },
     {
        title: "Haunted Hotel",
        genre: ["Czarna komedia", " Animacja dla dorosłych"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Haunted Hotel.jpg",
        description: "Samotna matka wprowadza się do odziedziczonego po bracie hotelu i spotyka poczciwego ducha oraz uciążliwych gości, którzy nie mają zamiaru się wymeldować.",
        link: "https://www.netflix.com/watch/81758478?trackId=284616272&tctx=0%2C1%2C09637980-c4b0-4131-9917-e61ee96ade83%2C09637980-c4b0-4131-9917-e61ee96ade83%7C%3DeyJwYWdlSWQiOiJhZDA1YTQ5My1mZWFiLTQwMzctODRiOS1hM2FlZDRjOTY2MTEvMS8vaGF1LzAvMCIsImxvY2FsU2VjdGlvbklkIjoiMiJ9%2C%2C%2C%2C%2C81674500%2CVideo%3A81758478%2CdetailsPageEpisodePlayButton"
    },
     {
        title: "1670",
        genre: ["Komedia", " Historyczny"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/1670.jpg",
        description: "Satyryczna komedia, w której zdziwaczały szlachcic, pragnący zostać najsławniejszą osobą w Polsce, musi stawić czoło kłótniom w rodzinie i konfliktom z chłopami.",
        link: "https://www.netflix.com/watch/81617069?trackId=284616272&tctx=NaN%2C0%2C1ad60c2e-ee7a-44a7-beb9-7d0f7cc466a0%2C1ad60c2e-ee7a-44a7-beb9-7d0f7cc466a0%7C%3DeyJwYWdlSWQiOiI4MjhjOTc3NC05M2QzLTRkMWQtYmY4YS0wMzU1NTdkMDhjYzgvMS8vMTYvMC8wIiwibG9jYWxTZWN0aW9uSWQiOiIyIn0%3D%2C%2C%2C%2C%2C81553471%2CVideo%3A81617069%2CdetailsPageEpisodePlayButton"
    },
     {
        title: "Wednesday",
        genre: ["Czarna komedia", " Fantasy"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Wednesday.jpg",
        description: "Makabrycznie bystra i sarkastyczna Wednesday Addams prowadzi śledztwo w sprawie serii zabójstw, przysparzając sobie nowych przyjaciół i wrogów w Akademii Nevermore.",
        link: "https://www.netflix.com/watch/81257204?trackId=284616272&tctx=0%2C0%2C3b9683c8-64de-4997-b207-ff49d74979f3%2C3b9683c8-64de-4997-b207-ff49d74979f3%7C%3DeyJwYWdlSWQiOiJhZDA1YTQ5My1mZWFiLTQwMzctODRiOS1hM2FlZDRjOTY2MTEvMS8vd2VkLzAvMCIsImxvY2FsU2VjdGlvbklkIjoiMiJ9%2C%2C%2C%2C%2C81231974%2CVideo%3A81257204%2CdetailsPageEpisodePlayButton"
    },
    {
        title: "Love Death and Robots",
        genre: ["Animacja dla dorosłych", " Horror", " Sci-Fi"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Love Death Robots.jpg",
        description: "Zbiór animowanych historii o miłości, śmierci i robotach utrzymanych w różnych gatunkach filmowych.",
        link: "https://www.netflix.com/watch/80223967?trackId=284616272&tctx=0%2C0%2C920d2d92-eaca-439a-aea1-2562034c4025%2C920d2d92-eaca-439a-aea1-2562034c4025%7C%3DeyJwYWdlSWQiOiJhZDA1YTQ5My1mZWFiLTQwMzctODRiOS1hM2FlZDRjOTY2MTEvMS8vbG92ZSBkZWEvMC8wIiwibG9jYWxTZWN0aW9uSWQiOiIyIn0%3D%2C%2C%2C%2C%2C80174608%2CVideo%3A80223967%2CdetailsPageEpisodePlayButton"
    },
    {
        title: "The Last of Us",
        genre: ["Dramat", " Horror"],
        platform: {
            name: "HBOMAX",
            class: "hbomax"
        },
        image: "img/The Last of Us.jpg",
        description: "Gdy globalna pandemia niszczy cywilizację, zahartowany w bojach ocalały przejmuje opiekę nad 14-letnią dziewczyną, która może być ostatnią nadzieją ludzkości.",
        link: "https://play.hbomax.com/show/93ba22b1-833e-47ba-ae94-8ee7b9eefa9a?season=1"
    },
    {
        title: "Ginny and Georgia",
        genre: ["Familijny", " Dramat", " Dla młodzieży"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Ginny Georgia.jpg",
        description: "Georgia i jej dzieci, Ginny i Austin, przeprowadzają się do innego miasta, żeby zacząć wszystko od nowa. Przekonują się jednak, że początki bywają trudne.",
        link: "https://www.netflix.com/watch/81071196?trackId=284616272&tctx=NaN%2C0%2C39654be6-8f74-40e4-82b3-eaf3da39e34e%2C39654be6-8f74-40e4-82b3-eaf3da39e34e%7C%3DeyJwYWdlSWQiOiJhZDA1YTQ5My1mZWFiLTQwMzctODRiOS1hM2FlZDRjOTY2MTEvMS8vZ2lubi8wLzAiLCJsb2NhbFNlY3Rpb25JZCI6IjIifQ%3D%3D%2C%2C%2C%2C%2C81025696%2CVideo%3A81071196%2CdetailsPageEpisodePlayButton"
    },
    {
        title: "Black Mirror",
        genre: ["Dramat", " Sci-Fi", " Thriller"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Black Mirror.jpg",
        description: "Niesamowita antologia pokręconych historii, która ujawnia najgorsze cechy ludzkości, najwspanialsze innowacje i wiele więcej.",
        link: "https://www.netflix.com/watch/70264857?trackId=284616272&tctx=NaN%2C0%2Ca08838fb-8af3-4c68-bdff-047b32a74a77%2Ca08838fb-8af3-4c68-bdff-047b32a74a77%7C%3DeyJwYWdlSWQiOiI4MjhjOTc3NC05M2QzLTRkMWQtYmY4YS0wMzU1NTdkMDhjYzgvMS8vYmxhLzAvMCIsImxvY2FsU2VjdGlvbklkIjoiMiJ9%2C%2C%2C%2C%2C70264888%2CVideo%3A70264857%2CdetailsPageEpisodePlayButton"
    },
    {
        title: "Idź Przodem, Bracie",
        genre: ["Akcja", " Thriller"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Go Ahead Bro.jpg",
        description: "Zwolniony z pracy policjant z oddziału specjalnego usiłuje odnaleźć się w roli sklepowego ochroniarza. Pewnego dnia odkrywa sposób na swoje problemy finansowe.",
        link: "https://www.netflix.com/watch/81613252?trackId=284616272&tctx=0%2C0%2C597303f3-56e7-4823-9b14-d7ca12934cc6%2C597303f3-56e7-4823-9b14-d7ca12934cc6%7C%3DeyJwYWdlSWQiOiJhZDA1YTQ5My1mZWFiLTQwMzctODRiOS1hM2FlZDRjOTY2MTEvMS8vaWTFuiBwLzAvMCIsImxvY2FsU2VjdGlvbklkIjoiMiJ9%2C%2C%2C%2C%2C81613239%2CVideo%3A81613252%2CdetailsPageEpisodePlayButton"
    },
    {
        title: "Lupin",
        genre: ["Kryminał"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/Lupin.jpg",
        description: "Zainspirowany przygodami Arsène’a Lupina złodziej gentleman Assane Diop obmyśla zemstę na zamożnej rodzinie, która wyrządziła niesprawiedliwość jego ojcu.",
        link: "https://www.netflix.com/watch/81011359?trackId=284616272&tctx=NaN%2C0%2C9b1871a2-2490-4126-b0b5-9f99c65badf8%2C9b1871a2-2490-4126-b0b5-9f99c65badf8%7C%3DeyJwYWdlSWQiOiJhZDA1YTQ5My1mZWFiLTQwMzctODRiOS1hM2FlZDRjOTY2MTEvMS8vbHVwLzAvMCIsImxvY2FsU2VjdGlvbklkIjoiMiJ9%2C%2C%2C%2C%2C80994082%2CVideo%3A81011359%2CdetailsPageEpisodePlayButton"
    },
    {
        title: "3 Body Problem",
        genre: ["Sci-Fi"],
        platform: {
            name: "Netflix",
            class: "netflix"
        },
        image: "img/3 body Problem.jpg",
        description: "Piątka genialnych przyjaciół dokonuje przełomowych odkryć na przestrzeni lat. Rozwikływanie praw nauki prowadzi w końcu do wykrycia śmiertelnego zagrożenia.",
        link: "https://www.netflix.com/watch/81340183?trackId=284616272&tctx=NaN%2C0%2Cc97dfd28-f800-4a03-aeef-18cbbb74d8a7%2Cc97dfd28-f800-4a03-aeef-18cbbb74d8a7%7C%3DeyJwYWdlSWQiOiJhZDA1YTQ5My1mZWFiLTQwMzctODRiOS1hM2FlZDRjOTY2MTEvMS8vMyBiby8wLzAiLCJsb2NhbFNlY3Rpb25JZCI6IjIifQ%3D%3D%2C%2C%2C%2C%2C81024821%2CVideo%3A81340183%2CdetailsPageEpisodePlayButton"
    },
    {
        title: "Skradzione Dziecko",
        genre: ["Psychologiczny", " Thriller", " Dramat"],
        platform: {
            name: "Disney+",
            class: "disney"
        },
        image: "img/Skradzione Dziecko.jpg",
        description: "Elisa pozwala córce Lucii na nocowanie u nowej przyjaciółki. Nazajutrz dziewczynka znika.",
        link: "https://www.disneyplus.com/pl-pl/browse/entity-20042afb-5f1b-4f40-b992-94def1b2e488"
    },
    {
        title: "Gra o Tron",
        genre: ["Dramat", " Fantasy", " Przygodowy"],
        platform: {
            name: "HBOMAX",
            class: "hbomax"
        },
        image: "img/Gra o Tron.jpg",
        description: "Adaptacja sagi George'a R.R. Martina. W królestwie Westeros walka o władzę, spiski oraz zbrodnie są na porządku dziennym.",
        link: "https://play.hbomax.com/show/4f6b4985-2dc9-4ab6-ac79-d60f0860b0ac?season=1"
    },
    {
        title: "Legion",
        genre: ["Dramat", " Akcja", " Sci-Fi"],
        platform: {
            name: "Disney+",
            class: "disney"
        },
        image: "img/Legion.jpg",
        description: "Młody pacjent szpitala psychiatrycznego, u którego zdiagnozowano schizofrenię, odkrywa w sobie nadprzyrodzone zdolności.",
        link: "https://www.disneyplus.com/pl-pl/browse/entity-ae87e56c-5b3b-44f6-9154-b07c8e60fe6c"
    },
]