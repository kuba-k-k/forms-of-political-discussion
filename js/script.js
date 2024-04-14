$(document).ready(function() {
  // data
  const data = [
    {id: "debate", name: "Debata", formality: 100, accessibility: 30, participation: 40, moderator: 100, radius: 97, type: "single"},
    {id: "panel", name: "Panel dyskusyjny", formality: 60, accessibility: 50, participation: 50, moderator: 50, radius: 87, type: "single"},
    {id: "town_hall", name: "Town hall / wiec", formality: 50, accessibility: 60, participation: 80, moderator: 30, radius: 85, type: "single"},
    {id: "talk_show", name: "Talk show", formality: 70, accessibility: 40, participation: 30, moderator: 80, radius: 91, type: "single"},
    {id: "protest", name: "Demonstracja", formality: 20, accessibility: 90, participation: 90, moderator: 10, radius: 97, type: "single"},
    {id: "press_conference", name: "Konferencja prasowa", formality: 90, accessibility: 30, participation: 20, moderator: 20, radius: 86, type: "single"},
    {id: "interview", name: "Wywiad", formality: 80, accessibility: 10, participation: 10, moderator: 90, radius: 92, type: "single"},
    {id: "social_media", name: "Social media / blog / vlog", formality: 10, accessibility: 100, participation: 100, moderator: 0, radius: 96, type: "single"},
  ]

  const descriptions = {
    "interview": {
      name: "Wywiad",
      media: ["bi-tv", "bi-newspaper", "bi-broadcast", "bi-globe"],
      description: "Wywiad polityczny to rodzaj rozmowy, która ma na celu uzyskanie informacji, opinii lub komentarzy od polityków lub innych osób związanych z życiem politycznym na temat określonych kwestii politycznych, społecznych lub gospodarczych. Jest to istotne narzędzie dziennikarskie, które pozwala na przybliżenie opinii publicznej stanowisk polityków oraz na lepsze zrozumienie działań podejmowanych w życiu politycznym.",
      bullets: [
        {bullet: "Tematyka", text: "Wywiady polityczne mogą dotyczyć różnorodnych tematów związanych z życiem politycznym, takich jak aktualne wydarzenia, projekty ustaw, decyzje rządowe, sprawy międzynarodowe, polityka społeczna, gospodarcza czy kwestie dotyczące bezpieczeństwa narodowego."},
        {bullet: "Uczestnicy", text: "Uczestnikami wywiadów politycznych mogą być politycy na różnych szczeblach, od lokalnych działaczy po przywódców państw. Mogą to być także eksperci, analitycy polityczni, liderzy opinii publicznej lub przedstawiciele innych grup zainteresowanych określonymi tematami."},
        {bullet: "Forma", text: "Wywiady polityczne mogą mieć różne formy, od krótkich wywiadów udzielanych przez polityków w trakcie konferencji prasowych, po długie i szczegółowe rozmowy przeprowadzane przez dziennikarzy w studiu telewizyjnym czy radiowym. Mogą być też udzielane na łamach gazet, portalach internetowych lub w formie podcastów."},
        {bullet: "Cel", text: "Celem wywiadów politycznych jest uzyskanie rzetelnej informacji, wyjaśnienie stanowiska rozmówcy, zadanie kluczowych pytań, konfrontacja go z faktycznymi danymi czy sprzecznością w jego wypowiedziach oraz przekazanie tej wiedzy odbiorcom."},
        {bullet: "Kontekst", text: "Ważne jest również umieszczenie wywiadu w kontekście aktualnych wydarzeń politycznych i społecznych, aby odbiorcy mogli lepiej zrozumieć, dlaczego dana kwestia jest ważna i jakie są jej konsekwencje."},
      ],
      youtubes: ["https://www.youtube.com/watch?v=rmgtOX1Gkfs", "https://www.youtube.com/watch?v=58t-vuIJN7M", "https://www.youtube.com/watch?v=QmGBaEWk_9k"],
    },
    "debate": {
      name: "Debata",
      media: ["bi-tv", "bi-broadcast", "bi-globe"],
      description: "Debata jest jedną z najbardziej formalnych i ustrukturyzowanych form dyskusji, która pozwala na bezpośrednie porównanie i prezentację różnych poglądów na dany temat.",
      bullets: [
        {bullet: "Uczestnicy", text: "Debata zazwyczaj ma dwóch lub więcej uczestników, którzy reprezentują różne stanowiska w dyskusji. Mogą to być politycy, eksperci, aktywiści lub przedstawiciele różnych grup interesów."},
        {bullet: "Moderator", text: "Moderator pełni kluczową rolę w debacie, nadzorując przebieg dyskusji, zadając pytania uczestnikom, utrzymując porządek oraz zapewniając równy czas dla wszystkich stron."},
        {bullet: "Zasady", text: "Debata opiera się na określonych zasadach, które mogą obejmować czasowe ograniczenia na wypowiedzi, kolejność wystąpień, sposób zadawania pytań i inne elementy regulujące przebieg dyskusji."},
        {bullet: "Tematyka", text: "Debata koncentruje się na określonym temacie lub kwestii, która jest przedmiotem kontrowersji lub ważna dla społeczeństwa. Uczestnicy prezentują swoje argumenty i próbują przekonać publiczność do swojego punktu widzenia."},
        {bullet: "Publiczność", text: "Choć publiczność rzadko jest bezpośrednio zaangażowana w dyskusję, jej reakcje mogą mieć wpływ na atmosferę debaty i ocenę przez widzów."},
        {bullet: "Ocena i wynik", text: "Po zakończeniu debaty często następuje ocena przez ekspertów lub publiczność, która może decydować, która strona bardziej przekonała do swojego stanowiska."},
      ],
      youtubes: ["https://www.youtube.com/watch?v=AYP8-oxq8ig", "https://www.youtube.com/watch?v=8hs7okQY_lE", "https://www.youtube.com/watch?v=IOfuXkqkmik"],
    },
    "press_conference": {
      name: "Konferencja prasowa",
      media: ["bi-tv", "bi-broadcast", "bi-globe"],
      description: "Konferencja prasowa to wydarzenie, podczas którego przedstawiciele mediów mają okazję zadawać pytania osobom publicznym, takim jak politycy, urzędnicy rządowi, przedstawiciele korporacji czy organizacji pozarządowych. Celem konferencji prasowej jest przekazanie informacji prasie oraz udzielenie odpowiedzi na pytania dziennikarzy na żywo.",
      bullets: [
        {bullet: "Prelegenci", text: "Głównymi uczestnikami konferencji prasowych są osoby publiczne lub ekspert, którzy mają przekazać ważne informacje lub komunikaty prasowe. Mogą to być politycy, przedstawiciele rządu, liderzy biznesu, eksperci czy celebryci."},
        {bullet: "Dziennikarze", text: "Konferencja prasowa gromadzi przedstawicieli mediów, którzy mają możliwość zadawania pytań prelegentom. Dziennikarze reprezentują różne media, w tym gazety, telewizję, radio, portale internetowe i agencje prasowe."},
        {bullet: "Tematyka", text: "Konferencje prasowe mogą dotyczyć różnorodnych tematów, w tym aktualnych wydarzeń, polityki, ekonomii, spraw społecznych, kwestii międzynarodowych, kultury, sportu czy nauki."},
        {bullet: "Forma", text: "Konferencje prasowe mogą mieć różne formy, od formalnych spotkań w salach konferencyjnych, po krótsze briefingu prasowe przed kamerami lub telekonferencje. Mogą być transmitowane na żywo przez media lub udostępniane w formie nagrań."},
        {bullet: "Odpowiedzi na pytania", text: "Istotnym elementem konferencji prasowych jest udzielenie odpowiedzi na pytania zadawane przez dziennikarzy. Prelegenci starają się rozwiać wątpliwości, wyjaśnić kwestie i przedstawić swoje stanowisko na dany temat."},
      ],
      youtubes: ["https://www.youtube.com/watch?v=PdZYGjmyPqA", "https://www.youtube.com/watch?v=au3Zzf33vXw", "https://www.youtube.com/watch?v=WVFzS6UpLLw"],
    },
    "panel": {
      name: "Panel dyskusyjny",
      media: ["bi-tv", "bi-broadcast", "bi-globe"],
      description: "Panel dyskusyjny to forma debaty, w której grupa ekspertów lub osób zainteresowanych danym tematem dzieli się swoimi poglądami i wiedzą przed publicznością.",
      bullets: [
        {bullet: "Uczestnicy", text: "Panel dyskusyjny zazwyczaj składa się z kilku osób, które posiadają wiedzę i doświadczenie w obszarze omawianego tematu. Mogą to być eksperci, akademicy, praktycy zawodowi, przedstawiciele społeczności czy innych grup interesów."},
        {bullet: "Moderator", text: "Moderator pełni rolę prowadzącego dyskusję, nadzorując przebieg debaty, zadając pytania uczestnikom oraz utrzymując porządek. Jego zadaniem jest zapewnienie równowagi między różnymi perspektywami oraz zachowanie płynności i dynamizmu dyskusji."},
        {bullet: "Tematyka", text: "Panel dyskusyjny koncentruje się na określonym temacie lub kwestii, która jest przedmiotem zainteresowania publiczności. Może to być problem społeczny, polityczny, naukowy, ekonomiczny czy kulturowy."},
        {bullet: "Prezentacje", text: "Uczestnicy panelu mogą mieć okazję do krótkich prezentacji lub wstępnych wystąpień, w których przedstawiają swoje perspektywy na temat dyskutowanej kwestii. Mogą też prezentować dane, fakty lub przykłady wspierające ich argumenty."},
        {bullet: "Dyskusja", text: "Po prezentacjach uczestnicy mogą uczestniczyć w otwartej dyskusji, w trakcie której wymieniają się poglądami, argumentują swoje stanowiska i reagują na opinie innych panelistów."},
        {bullet: "Publiczność", text: "Często publiczność ma możliwość zadawania pytań panelistom, co pozwala na uwzględnienie różnych perspektyw i interesów w dyskusji."},
        {bullet: "Podsumowanie", text: "Na zakończenie panel dyskusyjny moderator może podsumować główne wnioski i konkluzje dyskusji, podkreślając najważniejsze punkty i perspektywy."},
      ],
      youtubes: ["https://www.youtube.com/watch?v=-VRMV-_ql-0", "https://www.youtube.com/watch?v=zDfQ4ur--PQ", "https://www.youtube.com/watch?v=eag77II9gZw"],
    },
    "town_hall": {
      name: "Town hall / wiec",
      media: ["bi-people-fill", "bi-tv", "bi-globe"],
      description: 'Spotkanie typu "town hall" to forma bezpośredniego dialogu między wyborcami a politykami, która umożliwia mieszkańcom określonego obszaru bezpośrednią interakcję z ich przedstawicielami oraz dyskusję na temat kwestii ważnych dla lokalnej społeczności.',
      bullets: [
        {bullet: "Otwartość", text: "Spotkania town hall są zazwyczaj otwarte dla wszystkich mieszkańców danego obszaru, którzy chcą wziąć udział. Mogą to być spotkania publiczne w salach konferencyjnych, szkołach, czy innych miejscach dostępnych dla społeczności."},
        {bullet: "Interakcja", text: "Główną cechą spotkań town hall jest bezpośrednia interakcja między uczestnikami a politykami. Uczestnicy mają okazję zadawać pytania, wyrażać swoje opinie i podnosić kwestie, które są dla nich istotne."},
        {bullet: "Tematyka", text: "Spotkania town hall mogą dotyczyć różnorodnych tematów, od lokalnych problemów społecznych i gospodarczych po kwestie polityki krajowej czy międzynarodowej. To uczestnicy decydują, jakie tematy są najbardziej istotne i wymagają dyskusji."},
        {bullet: "Moderacja", text: "Spotkania tego typu mogą być prowadzone przez moderatora, który nadzoruje przebieg dyskusji, zapewnia równy dostęp do głosu dla wszystkich uczestników oraz utrzymuje porządek."},
        {bullet: "Dyskusja", text: 'W spotkaniach typu "town hall" nie ma z góry ustalonego scenariusza ani określonych wystąpień. To swobodna dyskusja, w której wszyscy uczestnicy mogą aktywnie uczestniczyć i wnosić swoje perspektywy.'},
      ],
      youtubes: ["https://www.youtube.com/watch?v=F16JpS4qizo", "https://www.youtube.com/watch?v=wwZ7bBFJBDA", "https://www.youtube.com/watch?v=6PysYA5TD4w"],
    },
    "talk_show": {
      name: "Talk show",
      media: ["bi-tv", "bi-globe"],
      description: 'Talk show to popularny format programu telewizyjnego i chociaż to nie jest tradycyjna forma debaty publicznej, to jest platformą do szerokiej gamy dyskusji, od polityki i kwestii społecznych po rozrywkę i kulturę. Format ten może różnić się w zależności od konkretnego programu i jego tematyki, ale zazwyczaj obejmuje interakcję z gośćmi oraz czasami udział publiczności',
      bullets: [
        {bullet: "Gospodarz", text: "Gospodarz prowadzi program, kieruje dyskusją, zadaje pytania gościom i moderuje przebieg programu. Może to być znany prezenter telewizyjny, komik, aktor lub inna osobowość medialna."},
        {bullet: "Goście", text: "Goście to osoby zaproszone do udziału w programie, które mogą być ekspertami w danej dziedzinie, celebrytami, politykami lub zwykłymi ludźmi z interesującymi historiami. Ich rola polega na udziale w rozmowach, udzieleniu odpowiedzi na pytania gospodarza i dzieleniu się swoimi doświadczeniami lub poglądami."},
        {bullet: "Tematyka", text: "Tematyka programu może być różnorodna, od polityki i kwestii społecznych po rozrywkę, lifestyle, kulturę, sport czy tematykę gwiazd. Każdy program może skupić się na innych aspektach życia społecznego i kulturalnego."},
        {bullet: "Interakcja", text: "Talk show często obejmuje interakcję z publicznością, która może zadawać pytania gościom lub wyrażać swoje opinie na żywo. Ta interakcja może być elementem kluczowym programu, tworząc atmosferę otwartej dyskusji."},
      ],
      youtubes: ["https://www.youtube.com/watch?v=XqVgt-jlVJQ", "https://www.youtube.com/watch?v=5jwczEC5iPc", "https://www.youtube.com/watch?v=q2wCwosQMaQ"],
    },
    "protest": {
      name: "Demonstracja / protest publiczny",
      media: ["bi-people-fill", "bi-tv", "bi-broadcast", "bi-globe"],
      description: 'Protesty publiczne są formą wyrażania niezadowolenia, sprzeciwu lub żądania zmian wobec określonych kwestii społecznych, politycznych, ekonomicznych lub kulturowych. Mogą one przybierać różne formy, od pokojowych demonstracji i marszów po strajki, sit-ins (forma protestu pokojowego), bojkoty, akcje obywatelskie, petycje i inne działania zbiorowe.',
      bullets: [
        {bullet: "Uczestnicy", text: "Protesty publiczne zazwyczaj gromadzą dużą liczbę osób, które wspólnie wyrażają swoje przekonania i żądania. Mogą to być obywatele, aktywiści społeczni, organizacje pozarządowe, związki zawodowe, grupy mniejszościowe czy studenci."},
        {bullet: "Cel", text: "Protesty mają na celu zwrócenie uwagi społeczeństwa, mediów oraz decydentów na konkretne problemy, nierówności lub niesprawiedliwości społeczne. Mogą też dążyć do zmiany polityki rządowej, prawa, regulacji lub postaw społecznych."},
        {bullet: "Forma", text: "Protesty mogą przybierać różne formy w zależności od kontekstu społecznego, kulturowego i politycznego. Mogą to być pokojowe demonstracje, strajki, pikiety, marsze, akcje obywatelskie, blokady drogowe, okupacje budynków czy inne działania społeczne."},
        {bullet: "Organizacja", text: "Czasami protesty są organizowane przez grupy społeczne, organizacje pozarządowe, związki zawodowe lub inne instytucje, które mają określone cele i strategie działania. Mogą one być także spontanicznymi reakcjami społecznymi na nagłe wydarzenia lub kontrowersje."},
        {bullet: "Media społecznościowe", text: "Media społecznościowe odgrywają znaczącą rolę w procesie organizacji protestów publicznych, umożliwiając szybką komunikację, mobilizację i szerzenie informacji wśród uczestników."},
      ],
      youtubes: ["https://www.youtube.com/watch?v=6_RdnVtfZPY", "https://www.youtube.com/watch?v=ojxCBZT-o1I", "https://www.youtube.com/watch?v=DxZVfwudvC8"],
    },
    "social_media": {
      name: "Social media / blog / vlog",
      media: ["bi-globe"],
      description: 'Media społecznościowe, blogi i vlogi to istotne platformy dyskursu politycznego, za pomocą których obywatele mogą angażować się w dyskusje bezpośrednio. Platformy cyfrowe ułatwiają umożliwiają wyrażanie opinii, sprawny przepływ informacji i mobilizację wsparcia dla spraw politycznych. Służą nie tylko jako fora dialogu, ale także jako potężne narzędzia wpływania na opinię publiczną i kształtowania narracji politycznych.',
      bullets: [
        {bullet: "Zasięg", text: "Mają zasięg globalny, umożliwiając natychmiastowe rozprzestrzenianie się wiadomości poprzez granice. Politycy, aktywiści i obywatele mogą łączyć się z odbiorcami na całym świecie, znacznie zwiększając swój wpływ na kwestie lokalne."},
        {bullet: "Wpływ na opinię publiczną", text: "Treści udostępniane na tych platformach mogą znacząco wpłynąć na opinię publiczną, na zachowania wyborcze i postrzeganie społeczne. Wirusowy niekiedy charakter, zarówno pozytywnych, jak i negatywnych treści, pozwala rozpowszechniać je szybko i szeroko."},
        {bullet: "Interakcja", text: "Ta forma dyskursu pozwala na wysoki poziom interakcji pomiędzy użytkownikami, politykami, grupami aktywistów i społeczeństwem. Interakcja sprzyja zaangażowaniu i może zwiększyć polityczną partycypację i zaangażowanie obywatelskie."},
        {bullet: "Wolność opinii", text: "Blogi ale również większość platform mediów społecznościowych to stosunkowo otwarta przestrzeń, w której ludzie mogą swobodnie wyrażać swoje poglądy. Istnieją jednak ograniczenia w postaci polityki platform lub regulacji rządowych."},
        {bullet: "Monitorowanie opinii publicznej", text: "Ta forma umożliwia łatwiejszy pomiar i monitorowanie nastrojów społecznych niż inne wymienione tu formy. Partie polityczne, kandydaci i rządy często analizują dane z platform, aby kształtować dalszą komunikację."},
      ],
      youtubes: ["https://www.youtube.com/shorts/UNR5qLmeKu8", "https://www.youtube.com/shorts/UKtohjwlL4g", "https://www.youtube.com/shorts/pCZNz1h7ixM"],
    },
  }

  // svg setup
  const width = $("#chart").width();
  const height = $("#chart").height();
  const margin = 40;
  const margin_top = 10;
  const svg = d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height);

  // axes
  const borderLines = [
    {x1: margin, y1: margin_top, x2: width - margin, y2: margin_top},
    {x1: width - margin, y1: margin_top, x2: width - margin, y2: height - margin},
    {x1: margin, y1: height - margin, x2: width - margin, y2: height - margin},
    {x1: margin, y1: margin_top, x2: margin, y2: height - margin}
  ];

  borderLines.forEach(line => {
    svg.append('line')
      .attr('x1', line.x1)
      .attr('y1', line.y1)
      .attr('x2', line.x2)
      .attr('y2', line.y2)
      .style('stroke', 'grey')
      .style('stroke-width', 0.5);
  });

  svg.append('text')
    .attr("class", "x-axis main-label")
    .attr('x', width / 2)
    .attr('y', height - margin + 20)
    .attr('text-anchor', 'middle')
    .text('Dostępność publiczna')
    .style('font-size', '16px');
  svg.append('text')
    .attr("class", "x-axis bottom-label")
    .attr('x', 40)
    .attr('y', height - margin + 20)
    .attr('text-anchor', 'start')
    .text('Niska')
    .style('font-size', '12px');
  svg.append('text')
    .attr("class", "x-axis top-label")
    .attr('x', width - margin)
    .attr('y', height - margin + 20)
    .attr('text-anchor', 'end')
    .text('Wysoka')
    .style('font-size', '12px');

  svg.append('text')
    .attr("class", "y-axis main-label")
    .attr('transform', `translate(30, ${height / 2}) rotate(-90)`)
    .attr('text-anchor', 'middle')
    .text('Partycypacja publiczności')
    .style('font-size', '16px');
  svg.append('text')
    .attr("class", "y-axis bottom-label")
    .attr('transform', `translate(30, ${height - margin}) rotate(-90)`)
    .attr('text-anchor', 'start')
    .text('Niska')
    .style('font-size', '12px');
  svg.append('text')
    .attr("class", "y-axis top-label")
    .attr('transform', `translate(30, ${margin_top}) rotate(-90)`)
    .attr('text-anchor', 'end')
    .text('Wysoka')
    .style('font-size', '12px');

  // scales
  const xScale = d3.scaleLinear()
    .domain([0, 110])
    .range([50, width - 50]);
  const yScale = d3.scaleLinear()
    .domain([-50, 150])
    .range([height - 50, 50]);

  const uniqueNames = Array.from(new Set(data.map(d => d.name)));
  const nameToIndex = new Map(uniqueNames.map((name, index) => [name, index / (uniqueNames.length - 1)]));
  const color = d3.scaleSequential(d3.interpolateWarm)
    .domain([0, 1]);

  // simulation
  const simulation = d3.forceSimulation(data)
    .force('x', d3.forceX(d => xScale(d.accessibility)).strength(0.2))
    .force('y', d3.forceY(d => yScale(d.participation)).strength(0.2))
    .force('collide', d3.forceCollide(d => d.radius + 2))
    .on('tick', ticked);

  // ticked
  function ticked() {
      const u = svg.selectAll('.node')
          .data(data, d => d.name);

      const entered = u.enter().append('g')
          .attr('class', 'node');

      entered.append('circle')
          .attr("id", d => d.id)
          .attr('class', 'bubble')
          .attr('r', d => d.radius)
          .attr('fill', d => color(nameToIndex.get(d.name)))
          .attr('stroke', 'grey')
          .attr('stroke-width', 1);

      entered.append('text')
          .attr('text-anchor', 'middle')
          .attr('dy', "0.35em")
          .text(d => d.name)
          .style('fill', '#333');

      u.merge(entered)
          .attr('transform', d => `translate(${d.x}, ${d.y})`);
  }

  // start simulation
  simulation.alpha(1).restart();

  // update simulation
  function updateSimulation() {
      var axesValues = $('#axesValues').val();
      let xAxisAttribute = axesValues.split("_")[2];
      let yAxisAttribute = axesValues.split("_")[0];

      var labels = ["main", "top", "bottom"];
      const axesDict = {
        formality: {main: "Stopień formalności", bottom: "Niski", top: "Wysoki"},
        accessibility: {main: "Dostępność publiczna", bottom: "Niska", top: "Wysoka"},
        participation: {main: "Partycypacja publiczności", bottom: "Niska", top: "Wysoka"},
        moderator: {main: "Rola moderatora", bottom: "Brak", top: "Krytyczna"},
      }

      d3.select('#chart svg').selectAll(".y-axis, .x-axis")
        .transition().duration(250)
        .style("opacity", 0)
      labels.forEach(label => {
        d3.select('#chart svg').selectAll(`.x-axis.${label}-label`)
          .transition().duration(250).delay(250).text(axesDict[xAxisAttribute][label]).style("opacity", 1)
        d3.select('#chart svg').selectAll(`.y-axis.${label}-label`)
          .transition().duration(250).delay(250).text(axesDict[yAxisAttribute][label]).style("opacity", 1)
      })

      simulation
          .force('x', d3.forceX(d => xScale(d[xAxisAttribute])).strength(0.2))
          .force('y', d3.forceY(d => yScale(d[yAxisAttribute])).strength(0.2))
          .alpha(1)
          .restart();
  }


  // on select change
  $('#axesValues').change(function() {
      updateSimulation();
  });

  // on bubble click
  $('#chart').on('click', '.bubble', function() {
      var data = d3.select(this).data()[0];
      var id = data.id;

      $('#menu-title').text(descriptions[id].name);

      $('#menu-icons').empty();
      descriptions[id].media.forEach(function(iconClass) {
          $('#menu-icons').append(`<span class="px-2 text-primary"><i class="bi ${iconClass}"></i></span>`);
      });

      $('#menu-description').text(descriptions[id].description);

      $('#menu-bullets').empty();
      descriptions[id].bullets.forEach(function(bullet) {
          $(`#menu-bullets`).append($(`<li class="small">`).html(`<strong class="text-primary">${bullet.bullet}</strong> / ${bullet.text}`));
      });

      $('#video-placeholder').empty();
      var row;
      descriptions[id].youtubes.forEach(function(url, index) {
          var videoId;
          var embedUrl;

          if (url.includes('/shorts/')) {
              videoId = url.split('/shorts/')[1];
              embedUrl = "https://www.youtube.com/embed/" + videoId;
          } else {
              videoId = url.split('v=')[1];
              embedUrl = "https://www.youtube.com/embed/" + videoId;
          }

          if (index % 3 === 0) {
              row = $('<div>').addClass('row');
              $('#video-placeholder').append(row);
          }

          var col = $('<div>').addClass('col-md-4');
          var iframe = $('<iframe>').attr({
              src: embedUrl,
              width: "100%",
              height: "315",
              frameborder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowfullscreen: true
          });
          col.append(iframe);
          row.append(col);
      });
      $('#infoMenu').css('right', '0');
  });

  $('#infoMenu .close').on('click', function() {
      $('#infoMenu').css('right', '-100%');
  });

});
