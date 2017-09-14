
var subjectData = {
		
	matek : {
		imgName : "matek.png",
		color : "#FC5E5E",
		index : 1,
		name : "matek",
		teacher : "A",
		shown :  true,
    width : 30,
	},

	biologia : {
		imgName : "biologia.png",
		color : "#83CB89",
		index : 2,
		name : "biologia",
		teacher : "B",
		shown :  true,
		width : 30,
	},

	kemia : {
		imgName : "kemia.png",
		color : "#C4699E",
		index : 3,
		name : "kemia",
		teacher : "C",
		shown :  true,
		width : 80,
	},
	
	fizika : {
		imgName : "fizika.png",
		color : "#00A8C5",
		index : 4,
		name : "fizika",
		teacher : "D",
		shown :  true,
		width : 140,
	}
}

var subjectList = [
  {
    imgName : "biologia.png",
    color : "#83CB89",
    index : 1,
    name : "biologia",
    teacher : "B",
    shown :  true,
    width : 107,
  },{
    imgName : "kemia.png",
    color : "#00A8C5",
    index : 2,
    name : "kemia",
    teacher : "C",
    shown :  true,
    width : 72,
  }, {
    imgName : "fizika.png",
    color : "#00A8C5",
    index : 3,
    name : "fizika",
    teacher : "D",
    shown :  true,
    width : 80,
  }, {
			imgName : "matek.png",
			color : "#FC5E5E",
			index : 4,
			name : "matek",
			teacher : "A",
			shown :  true,
			width : 72,
	}, {
		imgName : "angol.png",
		color : "#FC5E5E",
    index : 5,
    name : "angol",
    teacher : "A",
    shown :  true,
    width : 82,
  }, {
    imgName : "foldrajz.png",
    color : "#83CB89",
    index : 6,
    name : "foldrajz",
    teacher : "A",
    shown :  true,
    width : 122,
  }]

var menu = {
    
    gallery : {
      color : "green",
      link : "gallery",
      text : "Galéria",
      imgUrl : "gallery3"
    },

    subjects : {
      color : "yel",
      link : "subjects",
      text : "Tantárgyak",
      imgUrl : "books1"
   },

   teachers : {
      color : "blue",
      link : "teachers",
      text : "Tanáraink",
      imgUrl : "userGroup",
    },

    contact : {
      color : "purple",
      text : "Kontakt",
      link : "contact",
      imgUrl : "envelope",
    }
}

var teachers = {
  
  tegla : {
    name : "Teglás Bence",
    img : "tegla.jpg",
    id : "tegla",
    subjectName : "Biológia",
    info : `2008-ban szereztem angol anyanyelvi szintű nyelvvizsgát a Cambridge-i egyetem
            nyelvvizsgarendszerében. Azóta, immáron 9 éve foglalkozom csoportos és egyéni angol
            nyelvoktatással egyaránt. Biológiából 92%-os emeltszintű érettségi eredménnyel jutottam be az ELTE
            TTK biológia szakára kutatói szakirányon, ahol Summa Cum Laude eredménnyel végeztem el a BSc
            képzést. Jelenleg molekuláris genetika sejt és fejlődésbiológia szakirányú mesterképzésben
            folytatom tanulmányaimat az ELTE természettudományi karán. Óráimon kiemelkedően fontosnak
            tartom a barátságos és közvetlen légkört. Gyakori számonkérésekkel, csoportos és egyéni munkákkal
            igyekszem diákjaimból kihozni a lehető legtöbbet. Korábbi diákjaim közül immáron 47-en szereztek
            sikeres nyelvvizsgát, és 28-an jutottak be igen magas pontszámú egyetemekre (Semmelweis
            általános orvosi szak, gyógyszerész szak, fogorvosi szak stb.), ami önmagáért beszél. Amennyiben
            fiatalos, barátságos hangvételű ugyanakkor igen hatékony felkészülést szeretnél
            nyelvvizsgára/érettségire keress meg bátran!`
  },
  
  kata : {
    name : "Csörgő Kata",
    img : "kata.png",
    id : "kata",
    subjectName : "Matematika",
    info : `Csörgő Kata vagyok, 2017-ben szereztem matematika-fizika szakos tanári diplomát az ELTE-én. Egyetemi éveim során a magántanításokon kívül több különböző intézményben tanítottam óraadóként, ahol általános iskolásokat, gimnazistákat, egyetemi hallgatókat, valamint külföldi hallgatókat is oktattam. 
    Jelenleg matematika-fizika tanárként dolgozom fél státuszban, emellett gyakorlatot vezetek az ELTE-én, a fennmaradó energiáimat pedig szeretném a matematika és a fizika tantárgyak népszerűsítésére, közérthetőbbé varázslására, illetve az érdeklődő diákok segítésére fordítani. 
    Eddigi tanítási tapasztalataim alapján egyértelműen azt gondolom, hogy „aki tényleg szeretné, annak sikerülni fog”. 😊
    Csörgő Kata vagyok, 2017-ben szereztem matematika-fizika szakos tanári diplomát az ELTE-én. Egyetemi éveim során a magántanításokon kívül több különböző intézményben tanítottam óraadóként, ahol általános iskolásokat, gimnazistákat, egyetemi hallgatókat, valamint külföldi hallgatókat is oktattam. 
    Jelenleg matematika-fizika tanárként dolgozom fél státuszban, emellett gyakorlatot vezetek az ELTE-én, a fennmaradó energiáimat pedig szeretném a matematika és a fizika tantárgyak népszerűsítésére, közérthetőbbé varázslására, illetve az érdeklődő diákok segítésére fordítani. 
    Eddigi tanítási tapasztalataim alapján egyértelműen azt gondolom, hogy „aki tényleg szeretné, annak sikerülni fog”. 😊 `,
  },
  
  eva : {
    name : "Vörös Éva",
    img : "eva.jpg",
    id : "eva",
    subjectName : "Kémia",
    info :  `Mindig is tanár akartam lenni. 2011. óta foglalkozom korrepetálással és érettségire felkészítéssel. Több volt tanítványom orvosi és gyógyszerészeti szakokra jár. 2016-ban kitűnő alapképzési diplomát szereztem, ezután jelentkeztem tanári mesterképzésre, ahol most végzős hallgató vagyok. Jelenlegi TDK kutatásom témája, hogy miért nem szeretik az emberek a kémiát.Mindig is tanár akartam lenni. 2011. óta foglalkozom korrepetálással és érettségire felkészítéssel. Több volt tanítványom orvosi és gyógyszerészeti szakokra jár. 2016-ban kitűnő alapképzési diplomát szereztem, ezután jelentkeztem tanári mesterképzésre, ahol most végzős hallgató vagyok. Jelenlegi TDK kutatásom témája, hogy miért nem szeretik az emberek a kémiát.`,
  },
  
  daniel : {
    name : "Kovács Dániel",
    img : "daniel.jpg",
    id : "daniel",
    subjectName : "Földrajz",
    info :  `Kovács Dániel vagyok, földrajz-biológia szakos tanár, az utolsó félévemet taposom az ELTE-n. A földrajz már általános iskolás korom óta a szerelmem, azóta több földrajzi versenyen vettem részt és tagja vagyok a Magyar Földrajzi Társaságnak. Jelenleg a Társadalom- és Gazdaságföldrajzi tanszéken szakdolgozom geopolitikai témában, ezen kívül az energiagazdálkodás és a biogeográfia a szakterületem. Ha úgy érzed, hogy van mit frissíteni vagy fejleszteni a földrajz tudásodon érettségi előtt vagy csak hasznos infókkal akarod feltölteni magad a nagy megmérettetés előtt, akkor itt a helyed! A folyamatos számonkérésekkel és ismétlésekkel naprakész és használható tudást kapsz. A kis létszámú csoportokban laza, jófej hangulatban, mégis érthetően, megjegyezhetően beszélünk át mindent, ami földrajz!
             Jöhet bármi, csak földrajz legyen!`,
  },
  
  marton : {
    name : "Szittya Márton",
    img : "marton.jpeg",
    id : "marton",
    subjectName : "Matematika",
    info : `Végzettségemet tekintve, 2007-ben emelt szintű matematika érettségin 99%-ot értem el, miután a Budapesti Corvinus Egyetemen (BCE) folytattam felsőfokú tanulmányaimat, ahol 2012-ben Pénzügy és Számvitel alapszakon, és 2015-ben Vállalkozásfejlesztés mesterszakon szereztem diplomát. 
            Egyetemi tanulmányaim alatt csatlakoztam a BCE hivatalos érettségi előkészítőjéhez, ahol öt éven keresztül oktattam matematikát közép és emelt szinten 10 – 40 fős végzős diákokból álló csoportoknak. Továbbá 2008 óta heti rendszerességgel magán diákokat is vállalok közép, emelt és egyetemi szinten egyaránt, így releváns és számottevő tapasztalattal gazdagodtam mind egyéni és csoportos oktatás terén, amit jelenleg a Yo tudni! érettségi előkészítőben, immáron három éve kamatoztatok tovább.
            Diákjaim visszajelzései alapján az óráim barátságos hangulatban telnek, ami viszont nem megy a minőség rovására. Ezt támasztja alá, hogy diákjaim jelentős része ajánlás útján került hozzám, illetve minden egyes tanítványom elérte azokat a céljait, ami miatt a csoportomba vagy magán órámra járt. 
            Ha egy szakmailag kifogástalan, de mégis fiatalos légkörben szeretnél felkészülni közép vagy emelt szintű matematika érettségidre, akkor keress bátran és várlak a Yo tudni! előkészítő számodra megfelelő csoportjában.`, 
  }
  
}
