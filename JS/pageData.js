

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
    img : "woman.png",
    id : "kata",
    subjectName : "Matematika",
    info : `Csörgő Kata vagyok, 2017-ben szereztem matematika-fizika szakos tanári diplomát az ELTE-én. Egyetemi éveim során a magántanításokon kívül több különböző intézményben tanítottam óraadóként, ahol általános iskolásokat, gimnazistákat, egyetemi hallgatókat, valamint külföldi hallgatókat is oktattam. 
    Jelenleg matematika-fizika tanárként dolgozom fél státuszban, emellett gyakorlatot vezetek az ELTE-én, a fennmaradó energiáimat pedig szeretném a matematika és a fizika tantárgyak népszerűsítésére, közérthetőbbé varázslására, illetve az érdeklődő diákok segítésére fordítani. 
    Eddigi tanítási tapasztalataim alapján egyértelműen azt gondolom, hogy „aki tényleg szeretné, annak sikerülni fog”. 😊
    Csörgő Kata vagyok, 2017-ben szereztem matematika-fizika szakos tanári diplomát az ELTE-én. Egyetemi éveim során a magántanításokon kívül több különböző intézményben tanítottam óraadóként, ahol általános iskolásokat, gimnazistákat, egyetemi hallgatókat, valamint külföldi hallgatókat is oktattam. 
    Jelenleg matematika-fizika tanárként dolgozom fél státuszban, emellett gyakorlatot vezetek az ELTE-én, a fennmaradó energiáimat pedig szeretném a matematika és a fizika tantárgyak népszerűsítésére, közérthetőbbé varázslására, illetve az érdeklődő diákok segítésére fordítani. 
    Eddigi tanítási tapasztalataim alapján egyértelműen azt gondolom, hogy „aki tényleg szeretné, annak sikerülni fog”. 😊 `,
  }
  
  
  
}
