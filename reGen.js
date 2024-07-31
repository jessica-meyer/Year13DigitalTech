function generateResourceLink() {
  var x = "https://www.nzqa.govt.nz/nqfdocs/ncea-resource/";
  var y = "/";
  var z = "-";
  var eORa = "";

  var answerOrExam = document.getElementById("answerOrExam").value;
  var year = document.getElementById("year").value;
  var theNumber = document.getElementById("theNumber").value;

  let date = new Date();
  let n = date.getYear();
  var currentYear = n + 1900;

  // If past paper is from more than 3 years ago get it from the archived NZQA, this will need updating next year in 2025
  if (currentYear - year > 3) {
    x =
      "https://web.archive.org/web/20221119022917/https://www.nzqa.govt.nz/nqfdocs/ncea-resource/";
  }
  if (answerOrExam === "exam") {
    answerOrExam = "exams";
    eORa = "exm";
  } else if (answerOrExam === "answer") {
    answerOrExam = "schedules";
    eORa = "ass";
  } else if (answerOrExam === "formula") {
    answerOrExam = "exams";
    eORa = "res";
  }

  var result =
    x + answerOrExam + y + year + y + theNumber + z + eORa + z + year + ".pdf";
  window.open(result, "_blank");
}

const achievementStandards = {
  90005:
    "90005 Demonstrate knowledge of a dance genre or style Arts and Crafts / Dance / Dance Perspectives Level 1",
  90011:
    "90011 Demonstrate understanding of the use of drama aspects within live performance Arts and Crafts / Drama / Drama Studies Level 1",
  90814:
    "90814 Demonstrate understanding of aspects of sustainability in different contexts Sciences / Science / Environmental Sustainability Level 2",
  90831:
    "90831 Analyse the impact that policies have on a sustainable future Sciences / Science / Environmental Sustainability Level 3",
  90837:
    "90837 Demonstrate an understanding of internal features of a small business Business / Business Operations and Development / Business Studies Level 1",
  90838:
    "90838 Demonstrate an understanding of external factors influencing a small business Business / Business Operations and Development / Business Studies Level 1",
  90839:
    "90839 Apply business knowledge to an operational problem(s) in a given small business context Business / Business Operations and Development / Business Studies Level 1",
  90843:
    "90843 Demonstrate understanding of the internal operations of a large business Business / Business Operations and Development / Business Studies Level 2",
  90844:
    "90844 Demonstrate understanding of how a large business responds to external factors Business / Business Operations and Development / Business Studies Level 2",
  90845:
    "90845 Apply business knowledge to a critical problem(s) in a given large business context Business / Business Operations and Development / Business Studies Level 2",
  90849:
    "90849 Show understanding of specified aspect(s) of studied written text(s) using supporting evidence Humanities / English / English Written Language Level 1",
  90850:
    "90850 Show understanding of specified aspect(s) of studied visual or oral text(s) using supporting evidence Humanities / English / English Visual Language Level 1",
  90851:
    "90851 Show understanding of significant aspects of unfamiliar written text(s) through close reading using supporting evidence Humanities / English / English Written Language Level 1",
  90861:
    "90861 Demonstrate understanding of a dance performance Arts and Crafts / Dance / Dance Perspectives Level 1",
  90862:
    "90862 Translate adapted Latin text into English demonstrating understanding Humanities / Languages / Latin Level 1",
  90863:
    "90863 Demonstrate understanding of adapted Latin text Humanities / Languages / Latin Level 1",
  90868:
    "90868 Demonstrate understanding of a variety of spoken Chinese texts on areas of most immediate relevance Humanities / Languages / Chinese Level 1",
  90871:
    "90871 Demonstrate understanding of a variety of Chinese texts on areas of most immediate relevance Humanities / Languages / Chinese Level 1",
  90873:
    "90873 Demonstrate understanding of a variety of spoken Cook Islands Māori texts on areas of most immediate relevance Humanities / Languages / Cook Islands Māori Level 1",
  90876:
    "90876 Demonstrate understanding of a variety of Cook Islands Māori texts on areas of most immediate relevance Humanities / Languages / Cook Islands Māori Level 1",
  90878:
    "90878 Demonstrate understanding of a variety of spoken French texts on areas of most immediate relevance Humanities / Languages / French Level 1",
  90881:
    "90881 Demonstrate understanding of a variety of French texts on areas of most immediate relevance Humanities / Languages / French Level 1",
  90883:
    "90883 Demonstrate understanding of a variety of spoken German texts on areas of most immediate relevance Humanities / Languages / German Level 1",
  90886:
    "90886 Demonstrate understanding of a variety of German texts on areas of most immediate relevance Humanities / Languages / German Level 1",
  90888:
    "90888 Demonstrate understanding of a variety of spoken Indonesian texts on areas of most immediate relevance Humanities / Languages / Indonesian Level 1",
  90891:
    "90891 Demonstrate understanding of a variety of Indonesian texts on areas of most immediate relevance Humanities / Languages / Indonesian Level 1",
  90893:
    "90893 Demonstrate understanding of a variety of spoken Japanese texts on areas of most immediate relevance Humanities / Languages / Japanese Level 1",
  90896:
    "90896 Demonstrate understanding of a variety of Japanese texts on areas of most immediate relevance Humanities / Languages / Japanese Level 1",
  90898:
    "90898 Demonstrate understanding of a variety of spoken Korean texts on areas of most immediate relevance Humanities / Languages / Korean Level 1",
  90901:
    "90901 Demonstrate understanding of a variety of Korean texts on areas of most immediate relevance Humanities / Languages / Korean Level 1",
  90903:
    "90903 Demonstrate understanding of a variety of spoken Samoan texts on areas of most immediate relevance Humanities / Languages / Samoan Level 1",
  90906:
    "90906 Demonstrate understanding of a variety of Samoan texts on areas of most immediate relevance Humanities / Languages / Samoan Level 1",
  90908:
    "90908 Demonstrate understanding of a variety of spoken Spanish texts on areas of most immediate relevance Humanities / Languages / Spanish Level 1",
  90911:
    "90911 Demonstrate understanding of a variety of Spanish texts on areas of most immediate relevance Humanities / Languages / Spanish Level 1",
  90916:
    "90916 Produce a body of work informed by established practice which develops ideas using a range of media Arts and Crafts / Visual Arts / Practical Art Level 1",
  90919:
    "90919 Demonstrate knowledge of soil management practices Sciences / Science / Agricultural and Horticultural Science Level 1",
  90921:
    "90921 Demonstrate knowledge of livestock management practices Sciences / Science / Agricultural and Horticultural Science Level 1",
  90924:
    "90924 Demonstrate knowledge of horticultural plant management practices and related plant physiology Sciences / Science / Agricultural and Horticultural Science Level 1",
  90927:
    "90927 Demonstrate understanding of biological ideas relating to microorganisms Sciences / Science / Biology Level 1",
  90928:
    "90928 Demonstrate understanding of biological ideas relating to the life cycle of flowering plants Sciences / Science / Biology Level 1",
  90929:
    "90929 Demonstrate understanding of biological ideas relating to a mammal(s) as a consumer(s) Sciences / Science / Biology Level 1",
  90933:
    "90933 Demonstrate understanding of aspects of selected elements Sciences / Science / Chemistry Level 1",
  90934:
    "90934 Demonstrate understanding of aspects of chemical reactions Sciences / Science / Chemistry Level 1",
  90937:
    "90937 Demonstrate understanding of aspects of electricity and magnetism Sciences / Science / Physics Level 1",
  90938:
    "90938 Demonstrate understanding of aspects of wave behaviour Sciences / Science / Physics Level 1",
  90939:
    "90939 Demonstrate understanding of aspects of heat Sciences / Science / Physics Level 1",
  90940:
    "90940 Demonstrate understanding of aspects of mechanics Sciences / Science / Science Core Level 1",
  90944:
    "90944 Demonstrate understanding of aspects of acids and bases Sciences / Science / Science Core Level 1",
  90948:
    "90948 Demonstrate understanding of biological ideas relating to genetic variation Sciences / Science / Science Core Level 1",
  90960:
    "90960 Demonstrate understanding of how an individual, the family, and society enhance each other's well-being Humanities / Health and Physical Education / Home Economics Level 1",
  90961:
    "90961 Demonstrate understanding of how packaging information influences an individual's food choices and well-being Humanities / Health and Physical Education / Home Economics Level 1",
  90972:
    "90972 Demonstrate understanding of influences on adolescent eating patterns to make health-enhancing recommendations Humanities / Health and Physical Education / Health Education Level 1",
  90975:
    "90975 Demonstrate understanding of issues to make health-enhancing decisions in drug-related situations Humanities / Health and Physical Education / Health Education Level 1",
  90976:
    "90976 Demonstrate understanding of accounting concepts for small entities Business / Accounting / Accounting Generic Level 1",
  90978:
    "90978 Prepare financial statements for sole proprietors Business / Accounting / Accounting Generic Level 1",
  90980:
    "90980 Interpret accounting information for sole proprietors Business / Accounting / Accounting Generic Level 1",
  90983:
    "90983 Demonstrate understanding of consumer choices using scarcity and/or demand Social Sciences / Economic Theory and Practice / Economics Level 1",
  90985:
    "90985 Demonstrate understanding of producer choices using supply Social Sciences / Economic Theory and Practice / Economics Level 1",
  90986:
    "90986 Demonstrate understanding of how consumer, producer, and/or government choices affect society using market equilibrium Social Sciences / Economic Theory and Practice / Economics Level 1",
  90991:
    "90991 Demonstrate understanding of the media coverage of a current issue or event Social Sciences / Social Science Studies / Media Studies Level 1",
  90992:
    "90992 Demonstrate understanding of characteristics of a media genre Social Sciences / Social Science Studies / Media Studies Level 1",
  90998:
    "90998 Demonstrate understanding of features of a drama/theatre form Arts and Crafts / Drama / Drama Studies Level 1",
  91003:
    "91003 Interpret sources of a historical event of significance to New Zealanders Social Sciences / Social Science Studies / History Level 1",
  91005:
    "91005 Describe the causes and consequences of a historical event Social Sciences / Social Science Studies / History Level 1",
  91006:
    "91006 Describe how a significant historical event affected New Zealand society Social Sciences / Social Science Studies / History Level 1",
  91007:
    "91007 Demonstrate geographic understanding of environments that have been shaped by extreme natural event(s) Social Sciences / Social Science Studies / Geography Level 1",
  91008:
    "91008 Demonstrate geographic understanding of population concepts Social Sciences / Social Science Studies / Geography Level 1",
  91010:
    "91010 Apply concepts and basic geographic skills to demonstrate understanding of a given environment Social Sciences / Social Science Studies / Geography Level 1",
  91015:
    "91015 Demonstrate understanding of formal elements of art works using art terminology Arts and Crafts / Visual Arts / Art History Level 1",
  91021:
    "91021 Demonstrate understanding of ideas and values of the classical world Social Sciences / Social Science Studies / Classical Studies Level 1",
  91022:
    "91022 Demonstrate understanding of the significance of features of work(s) of art in the classical world Social Sciences / Social Science Studies / Classical Studies Level 1",
  91023:
    "91023 Demonstrate understanding of an important historical figure in the classical world Social Sciences / Social Science Studies / Classical Studies Level 1",
  91027:
    "91027 Apply algebraic procedures in solving problems Sciences / Mathematics / Algebra Level 1",
  91028:
    "91028 Investigate relationships between tables equations and graphs Sciences / Mathematics / Algebra Level 1",
  91031:
    "91031 Apply geometric reasoning in solving problems Sciences / Mathematics / Geometry Level 1",
  91037:
    "91037 Demonstrate understanding of chance and data Sciences / Statistics and Probability / Statistics Level 1",
  91039:
    "91039 Describe how cultures change Social Sciences / Social Science Studies / Social Studies Level 1",
  91048:
    "91048 Demonstrate understanding of how technological modelling supports decision making Engineering and Technology / Technology / Generic Technology Level 1",
  91049:
    "91049 Demonstrate understanding of how materials enable technological products to function Engineering and Technology / Technology / Generic Technology Level 1",
  91050:
    "91050 Demonstrate understanding of the role of subsystems in technological systems Engineering and Technology / Technology / Generic Technology Level 1",
  91053:
    "91053 Demonstrate understanding of design elements Engineering and Technology / Technology / Generic Technology Level 1",
  91063:
    "91063 Produce freehand sketches that communicate design ideas Engineering and Technology / Technology / Design and Visual Communication Level 1",
  91064:
    "91064 Produce instrumental multi view orthographic drawings that communicate technical features of design ideas Engineering and Technology / Technology / Design and Visual Communication Level 1",
  91065:
    "91065 Produce instrumental paraline drawings to communicate design ideas Engineering and Technology / Technology / Design and Visual Communication Level 1",
  91087:
    "91087 Pānui kia mōhio ki te reo o tōna ao Māori / Reo Māori / Pānui Level 1",
  91088: "91088 Tuhi i te reo o tōna ao Māori / Reo Māori / Tuhituhi Level 1",
  91093:
    "91093 Demonstrate aural and theoretical skills through transcription Arts and Crafts / Music / Making Music Level 1",
  91094:
    "91094 Demonstrate knowledge of conventions used in music scores Arts and Crafts / Music / Music Studies Level 1",
  91098:
    "91098 Analyse specified aspect(s) of studied written text(s) supported by evidence Humanities / English / English Written Language Level 2",
  91099:
    "91099 Analyse specified aspect(s) of studied visual or oral text(s) supported by evidence Humanities / English / English Oral Language Level 2",
  91100:
    "91100 Analyse significant aspects of unfamiliar written text(s) through close reading supported by evidence Humanities / English / English Written Language Level 2",
  91108:
    "91108 Demonstrate understanding of a variety of spoken Chinese texts on familiar matters Humanities / Languages / Chinese Level 2",
  91111:
    "91111 Demonstrate understanding of a variety of written and/or visual Chinese text(s) on familiar matters Humanities / Languages / Chinese Level 2",
  91113:
    "91113 Demonstrate understanding of a variety of spoken Cook Islands Māori texts on familiar matters Humanities / Languages / Cook Islands Māori Level 2",
  91116:
    "91116 Demonstrate understanding of a variety of written and/or visual Cook Islands Māori text(s) on familiar matters Humanities / Languages / Cook Islands Māori Level 2",
  91118:
    "91118 Demonstrate understanding of a variety of spoken French texts on familiar matters Humanities / Languages / French Level 2",
  91121:
    "91121 Demonstrate understanding of a variety of written and/or visual French text(s) on familiar matters Humanities / Languages / French Level 2",
  91123:
    "91123 Demonstrate understanding of a variety of spoken German texts on familiar matters Humanities / Languages / German Level 2",
  91126:
    "91126 Demonstrate understanding of a variety of written and/or visual German text(s) on familiar matters Humanities / Languages / German Level 2",
  91128:
    "91128 Demonstrate understanding of a variety of spoken Indonesian texts on familiar matters Humanities / Languages / Indonesian Level 2",
  91131:
    "91131 Demonstrate understanding of a variety of written and/or visual Indonesian text(s) on familiar matters Humanities / Languages / Indonesian Level 2",
  91133:
    "91133 Demonstrate understanding of a variety of spoken Japanese texts on familiar matters Humanities / Languages / Japanese Level 2",
  91136:
    "91136 Demonstrate understanding of a variety of written and/or visual Japanese text(s) on familiar matters Humanities / Languages / Japanese Level 2",
  91138:
    "91138 Demonstrate understanding of a variety of spoken Korean texts on familiar matters Humanities / Languages / Korean Level 2",
  91141:
    "91141 Demonstrate understanding of a variety of written and/or visual Korean text(s) on familiar matters Humanities / Languages / Korean Level 2",
  91143:
    "91143 Demonstrate understanding of a variety of spoken Samoan texts on familiar matters Humanities / Languages / Samoan Level 2",
  91146:
    "91146 Demonstrate understanding of a variety of written and/or visual Samoan text(s) on familiar matters Humanities / Languages / Samoan Level 2",
  91148:
    "91148 Demonstrate understanding of a variety of spoken Spanish texts on familiar matters Humanities / Languages / Spanish Level 2",
  91151:
    "91151 Demonstrate understanding of a variety of written and/or visual Spanish text(s) on familiar matters Humanities / Languages / Spanish Level 2",
  91156:
    "91156 Demonstrate understanding of life processes at the cellular level Sciences / Science / Biology Level 2",
  91157:
    "91157 Demonstrate understanding of genetic variation and change Sciences / Science / Biology Level 2",
  91164:
    "91164 Demonstrate understanding of bonding structure properties and energy changes Sciences / Science / Chemistry Level 2",
  91165:
    "91165 Demonstrate understanding of the properties of selected organic compounds Sciences / Science / Chemistry Level 2",
  91166:
    "91166 Demonstrate understanding of chemical reactivity Sciences / Science / Chemistry Level 2",
  91170:
    "91170 Demonstrate understanding of waves Sciences / Science / Physics Level 2",
  91171:
    "91171 Demonstrate understanding of mechanics Sciences / Science / Physics Level 2",
  91173:
    "91173 Demonstrate understanding of electricity and electromagnetism Sciences / Science / Physics Level 2",
  91174:
    "91174 Demonstrate understanding of accounting concepts for an entity that operates accounting subsystems Business / Accounting / Accounting Generic Level 2",
  91176:
    "91176 Prepare financial information for an entity that operates accounting subsystems Business / Accounting / Accounting Generic Level 2",
  91177:
    "91177 Interpret accounting information for entities that operate accounting subsystems Business / Accounting / Accounting Generic Level 2",
  91180:
    "91180 Examine the effects of formal elements of art works Arts and Crafts / Visual Arts / Art History Level 2",
  91181:
    "91181 Examine the meanings conveyed by art works Arts and Crafts / Visual Arts / Art History Level 2",
  91182:
    "91182 Examine the influence of context(s) on art works Arts and Crafts / Visual Arts / Art History Level 2",
  91191:
    "91191 Demonstrate understanding of the causes of extreme Earth events in New Zealand Sciences / Science / Earth and Space Science Level 2",
  91192:
    "91192 Demonstrate understanding of stars and planetary systems Sciences / Science / Earth and Space Science Level 2",
  91193:
    "91193 Demonstrate understanding of physical principles related to the Earth System Sciences / Science / Earth and Space Science Level 2",
  91194:
    "91194 Translate adapted Latin text of medium complexity into English demonstrating understanding Humanities / Languages / Latin Level 2",
  91195:
    "91195 Interpret adapted Latin text of medium complexity demonstrating understanding Humanities / Languages / Latin Level 2",
  91200:
    "91200 Examine ideas and values of the classical world Social Sciences / Social Science Studies / Classical Studies Level 2",
  91201:
    "91201 Examine the significance of features of work(s) of art in the classical world Social Sciences / Social Science Studies / Classical Studies Level 2",
  91203:
    "91203 Examine socio-political life in the classical world Social Sciences / Social Science Studies / Classical Studies Level 2",
  91211:
    "91211 Provide an interpretation of a dance performance with supporting evidence Arts and Crafts / Dance / Dance Perspectives Level 2",
  91212:
    "91212 Demonstrate understanding of a dance genre or style in context Arts and Crafts / Dance / Dance Perspectives Level 2",
  91215:
    "91215 Discuss a drama or theatre form or period with reference to a text Arts and Crafts / Drama / Drama Studies Level 2",
  91219:
    "91219 Discuss drama elements techniques conventions and technologies within live performance Arts and Crafts / Drama / Drama Studies Level 2",
  91222:
    "91222 Analyse inflation using economic concepts and models Social Sciences / Economic Theory and Practice / Economics Level 2",
  91223:
    "91223 Analyse international trade using economic concepts and models Social Sciences / Economic Theory and Practice / Economics Level 2",
  91224:
    "91224 Analyse economic growth using economic concepts and models Social Sciences / Economic Theory and Practice / Economics Level 2",
  91231:
    "91231 Examine sources of a historical event that is of significance to New Zealanders Social Sciences / Social Science Studies / History Level 2",
  91233:
    "91233 Examine causes and consequences of a significant historical event Social Sciences / Social Science Studies / History Level 2",
  91234:
    "91234 Examine how a significant historical event affected New Zealand society Social Sciences / Social Science Studies / History Level 2",
  91238:
    "91238 Analyse an interpersonal issue(s) that places personal safety at risk Humanities / Health and Physical Education / Health Education Level 2",
  91240:
    "91240 Demonstrate geographic understanding of a large natural environment Social Sciences / Social Science Studies / Geography Level 2",
  91242:
    "91242 Demonstrate geographic understanding of differences in development Social Sciences / Social Science Studies / Geography Level 2",
  91243:
    "91243 Apply geography concepts and skills to demonstrate understanding of a given environment Social Sciences / Social Science Studies / Geography Level 2",
  91248:
    "91248 Demonstrate understanding of the relationship between a media product and its audience Social Sciences / Social Science Studies / Media Studies Level 2",
  91251:
    "91251 Demonstrate understanding of an aspect of a media genre Social Sciences / Social Science Studies / Media Studies Level 2",
  91261:
    "91261 Apply algebraic methods in solving problems Sciences / Mathematics / Algebra Level 2",
  91262:
    "91262 Apply calculus methods in solving problems Sciences / Mathematics / Calculus Level 2",
  91267:
    "91267 Apply probability methods in solving problems Sciences / Statistics and Probability / Probability Level 2",
  91275:
    "91275 Demonstrate aural understanding through written representation Arts and Crafts / Music / Making Music Level 2",
  91276:
    "91276 Demonstrate knowledge of conventions in a range of music scores Arts and Crafts / Music / Music Studies Level 2",
  91277:
    "91277 Demonstrate understanding of two substantial and contrasting music works Arts and Crafts / Music / Music Studies Level 2",
  91279:
    "91279 Demonstrate understanding of conflict(s) arising from different cultural beliefs and ideas Social Sciences / Social Science Studies / Social Studies Level 2",
  91281:
    "91281 Describe how cultural conflict(s) can be addressed Social Sciences / Social Science Studies / Social Studies Level 2",
  91286:
    "91286 Pānui kia mōhio ki te reo o te ao torotoro Māori / Reo Māori / Pānui Level 2",
  91287:
    "91287 Tuhi i te reo o te ao torotoro Māori / Reo Māori / Tuhituhi Level 2",
  91290:
    "91290 Demonstrate understanding of techniques used to modify physical factors of the environment for NZ plant production Sciences / Science / Agricultural and Horticultural Science Level 2",
  91294:
    "91294 Demonstrate understanding of how NZ commercial management practices influence livestock growth and development Sciences / Science / Agricultural and Horticultural Science Level 2",
  91297:
    "91297 Demonstrate understanding of land use for primary production in New Zealand Sciences / Science / Agricultural and Horticultural Science Level 2",
  91300:
    "91300 Analyse the relationship between well being food choices and determinants of health Humanities / Health and Physical Education / Home Economics Level 2",
  91304:
    "91304 Evaluate health promoting strategies designed to address a nutritional need Humanities / Health and Physical Education / Home Economics Level 2",
  91320:
    "91320 Produce a systematic body of work that shows understanding of art making conventions and ideas within design Arts and Crafts / Visual Arts / Practical Art Level 2",
  91321:
    "91321 Produce a systematic body of work that shows understanding of art making conventions and ideas within painting Arts and Crafts / Visual Arts / Practical Art Level 2",
  91322:
    "91322 Produce a systematic body of work that shows understanding of art making conventions and ideas within photography Arts and Crafts / Visual Arts / Practical Art Level 2",
  91323:
    "91323 Produce a systematic body of work that shows understanding of art making conventions and ideas within printmaking Arts and Crafts / Visual Arts / Practical Art Level 2",
  91324:
    "91324 Produce a systematic body of work that shows understanding of art making conventions and ideas within sculpture Arts and Crafts / Visual Arts / Practical Art Level 2",
  91337:
    "91337 Use visual communication techniques to generate design ideas Engineering and Technology / Technology / Design and Visual Communication Level 2",
  91338:
    "91338 Produce working drawings to communicate technical details of a design Engineering and Technology / Technology / Design and Visual Communication Level 2",
  91339:
    "91339 Produce instrumental perspective projection drawings to communicate design ideas Engineering and Technology / Technology / Design and Visual Communication Level 2",
  91358:
    "91358 Demonstrate understanding of how technological modelling supports risk management Engineering and Technology / Technology / Generic Technology Level 2",
  91359:
    "91359 Demonstrate understanding of the role of material evaluation in product development Engineering and Technology / Technology / Generic Technology Level 2",
  91360:
    "91360 Demonstrate understanding of redundancy and reliability in technological systems Engineering and Technology / Technology / Generic Technology Level 2",
  91363:
    "91363 Demonstrate understanding of sustainability in design Engineering and Technology / Technology / Generic Technology Level 2",
  91379:
    "91379 Demonstrate understanding of how internal factors interact within a business that operates in a global context Business / Business Operations and Development / Business Studies Level 3",
  91380:
    "91380 Demonstrate understanding of strategic response to external factors by a business that operates in a global context Business / Business Operations and Development / Business Studies Level 3",
  91381:
    "91381 Apply business knowledge to address a complex problem(s) in a given global business context Business / Business Operations and Development / Business Studies Level 3",
  91390:
    "91390 Demonstrate understanding of thermochemical principles and the properties of particles and substances Sciences / Science / Chemistry Level 3",
  91391:
    "91391 Demonstrate understanding of the properties of organic compounds Sciences / Science / Chemistry Level 3",
  91392:
    "91392 Demonstrate understanding of equilibrium principles in aqueous systems Sciences / Science / Chemistry Level 3",
  91394:
    "91394 Analyse ideas and values of the classical world Social Sciences / Social Science Studies / Classical Studies Level 3",
  91395:
    "91395 Analyse the significance of a work(s) of art in the classical world Social Sciences / Social Science Studies / Classical Studies Level 3",
  91396:
    "91396 Analyse the impact of a significant historical figure on the classical world Social Sciences / Social Science Studies / Classical Studies Level 3",
  91399:
    "91399 Demonstrate understanding of the efficiency of market equilibrium Social Sciences / Economic Theory and Practice / Economics Level 3",
  91400:
    "91400 Demonstrate understanding of the efficiency of different market structures using marginal analysis Social Sciences / Economic Theory and Practice / Economics Level 3",
  91403:
    "91403 Demonstrate understanding of macro economic influences on the New Zealand economy Social Sciences / Economic Theory and Practice / Economics Level 3",
  91404:
    "91404 Demonstrate understanding of accounting concepts for a New Zealand reporting entity Business / Accounting / Accounting Generic Level 3",
  91406:
    "91406 Demonstrate understanding of company financial statement preparation Business / Accounting / Accounting Generic Level 3",
  91408:
    "91408 Demonstrate understanding of management accounting to inform decision making Business / Accounting / Accounting Generic Level 3",
  91413:
    "91413 Demonstrate understanding of processes in the ocean system Sciences / Science / Earth and Space Science Level 3",
  91414:
    "91414 Demonstrate understanding of processes in the atmosphere system Sciences / Science / Earth and Space Science Level 3",
  91420:
    "91420 Integrate aural skills into written representation Arts and Crafts / Music / Making Music Level 3",
  91421:
    "91421 Demonstrate understanding of harmonic and tonal conventions in a range of music scores Arts and Crafts / Music / Music Studies Level 3",
  91423:
    "91423 Examine the influence of context on a substantial music work Arts and Crafts / Music / Music Studies Level 3",
  91426:
    "91426 Demonstrate understanding of how interacting natural processes shape a New Zealand geographic environment Social Sciences / Social Science Studies / Geography Level 3",
  91427:
    "91427 Demonstrate understanding of how a cultural process shapes geographic environment(s) Social Sciences / Social Science Studies / Geography Level 3",
  91429:
    "91429 Demonstrate understanding of a given environment(s) through selection and application of geographic concepts and skills Social Sciences / Social Science Studies / Geography Level 3",
  91436:
    "91436 Analyse evidence relating to a historical event of significance to New Zealanders Social Sciences / Social Science Studies / History Level 3",
  91438:
    "91438 Analyse the causes and consequences of a significant historical event Social Sciences / Social Science Studies / History Level 3",
  91439:
    "91439 Analyse a significant historical trend and the force(s) that influenced it Social Sciences / Social Science Studies / History Level 3",
  91455:
    "91455 Produce a systematic body of work that integrates conventions and regenerates ideas within design practice Arts and Crafts / Visual Arts / Practical Art Level 3",
  91456:
    "91456 Produce a systematic body of work that integrates conventions and regenerates ideas within painting practice Arts and Crafts / Visual Arts / Practical Art Level 3",
  91457:
    "91457 Produce a systematic body of work that integrates conventions and regenerates ideas within photography practice Arts and Crafts / Visual Arts / Practical Art Level 3",
  91458:
    "91458 Produce a systematic body of work that integrates conventions and regenerates ideas within printmaking practice Arts and Crafts / Visual Arts / Practical Art Level 3",
  91459:
    "91459 Produce a systematic body of work that integrates conventions and regenerates ideas within sculpture practice Arts and Crafts / Visual Arts / Practical Art Level 3",
  91462:
    "91462 Analyse an international health issue Humanities / Health and Physical Education / Health Education Level 3",
  91465:
    "91465 Evaluate models for health promotion Humanities / Health and Physical Education / Health Education Level 3",
  91470:
    "91470 Evaluate conflicting nutritional information relevant to well-being in New Zealand society Humanities / Health and Physical Education / Home Economics Level 3",
  91471:
    "91471 Analyse the influences of food advertising on well-being Humanities / Health and Physical Education / Home Economics Level 3",
  91472:
    "91472 Respond critically to specified aspect(s) of studied written text(s) supported by evidence Humanities / English / English Written Language Level 3",
  91473:
    "91473 Respond critically to specified aspect(s) of studied visual or oral text(s) supported by evidence Humanities / English / English Oral Language Level 3",
  91474:
    "91474 Respond critically to significant aspects of unfamiliar written texts through close reading supported by evidence Humanities / English / English Written Language Level 3",
  91482:
    "91482 Demonstrate understanding of style in art works Arts and Crafts / Visual Arts / Art History Level 3",
  91483:
    "91483 Examine how meanings are communicated through art works Arts and Crafts / Visual Arts / Art History Level 3",
  91484:
    "91484 Examine the relationship(s) between art and context Arts and Crafts / Visual Arts / Art History Level 3",
  91490:
    "91490 Demonstrate understanding of an aspect of a media industry Social Sciences / Social Science Studies / Media Studies Level 3",
  91493:
    "91493 Demonstrate understanding of a relationship between a media genre and society Social Sciences / Social Science Studies / Media Studies Level 3",
  91506:
    "91506 Translate authentic Latin text into English demonstrating understanding Humanities / Languages / Latin Level 3",
  91507:
    "91507 Analyse authentic Latin text demonstrating understanding Humanities / Languages / Latin Level 3",
  91514:
    "91514 Interpret a text from a prescribed playwright to demonstrate knowledge of a theatre form or period Arts and Crafts / Drama / Drama Studies Level 3",
  91518:
    "91518 Demonstrate understanding of live drama performance Arts and Crafts / Drama / Drama Studies Level 3",
  91523:
    "91523 Demonstrate understanding of wave systems Sciences / Science / Physics Level 3",
  91524:
    "91524 Demonstrate understanding of mechanical systems Sciences / Science / Physics Level 3",
  91526:
    "91526 Demonstrate understanding of electrical systems Sciences / Science / Physics Level 3",
  91530:
    "91530 Demonstrate understanding of how market forces affect the supply of and demand for New Zealand primary products Sciences / Science / Agricultural and Horticultural Science Level 3",
  91531:
    "91531 Demonstrate understanding of how the production process meets market requirements for a New Zealand primary product(s) Sciences / Science / Agricultural and Horticultural Science Level 3",
  91532:
    "91532 Analyse a New Zealand primary production environmental issue Sciences / Science / Agricultural and Horticultural Science Level 3",
  91533:
    "91533 Demonstrate understanding of a variety of extended spoken Chinese texts Humanities / Languages / Chinese Level 3",
  91536:
    "91536 Demonstrate understanding of a variety of extended written and/or visual Chinese texts Humanities / Languages / Chinese Level 3",
  91538:
    "91538 Demonstrate understanding of a variety of extended spoken Cook Islands Māori texts Humanities / Languages / Cook Islands Māori Level 3",
  91541:
    "91541 Demonstrate understanding of a variety of extended written and/or visual Cook Islands Māori texts Humanities / Languages / Cook Islands Māori Level 3",
  91543:
    "91543 Demonstrate understanding of a variety of extended spoken French texts Humanities / Languages / French Level 3",
  91546:
    "91546 Demonstrate understanding of a variety of extended written and/or visual French texts Humanities / Languages / French Level 3",
  91548:
    "91548 Demonstrate understanding of a variety of extended spoken German texts Humanities / Languages / German Level 3",
  91551:
    "91551 Demonstrate understanding of a variety of extended written and/or visual German texts Humanities / Languages / German Level 3",
  91553:
    "91553 Demonstrate understanding of a variety of extended spoken Japanese texts Humanities / Languages / Japanese Level 3",
  91556:
    "91556 Demonstrate understanding of a variety of extended written and/or visual Japanese texts Humanities / Languages / Japanese Level 3",
  91558:
    "91558 Demonstrate understanding of a variety of extended spoken Korean texts Humanities / Languages / Korean Level 3",
  91561:
    "91561 Demonstrate understanding of a variety of extended written and/or visual Korean texts Humanities / Languages / Korean Level 3",
  91563:
    "91563 Demonstrate understanding of a variety of extended spoken Samoan texts Humanities / Languages / Samoan Level 3",
  91566:
    "91566 Demonstrate understanding of a variety of extended written and/or visual Samoan texts Humanities / Languages / Samoan Level 3",
  91568:
    "91568 Demonstrate understanding of a variety of extended spoken Spanish texts Humanities / Languages / Spanish Level 3",
  91571:
    "91571 Demonstrate understanding of a variety of extended written and/or visual Spanish texts Humanities / Languages / Spanish Level 3",
  91577:
    "91577 Apply the algebra of complex numbers in solving problems Sciences / Mathematics / Algebra Level 3",
  91578:
    "91578 Apply differentiation methods in solving problems Sciences / Mathematics / Calculus Level 3",
  91579:
    "91579 Apply integration methods in solving problems Sciences / Mathematics / Calculus Level 3",
  91584:
    "91584 Evaluate statistically based reports Sciences / Statistics and Probability / Statistics Level 3",
  91585:
    "91585 Apply probability concepts in solving problems Sciences / Statistics and Probability / Probability Level 3",
  91586:
    "91586 Apply probability distributions in solving problems Sciences / Statistics and Probability / Probability Level 3",
  91594:
    "91594 Analyse a dance performance Arts and Crafts / Dance / Dance Perspectives Level 3",
  91595:
    "91595 Demonstrate understanding of the development of dance in Aotearoa/New Zealand Arts and Crafts / Dance / Dance Perspectives Level 3",
  91596:
    "91596 Demonstrate understanding of ideological responses to an issue Social Sciences / Social Science Studies / Social Studies Level 3",
  91598:
    "91598 Demonstrate understanding of how ideologies shape society Social Sciences / Social Science Studies / Social Studies Level 3",
  91603:
    "91603 Demonstrate understanding of the responses of plants and animals to their external environment Sciences / Science / Biology Level 3",
  91605:
    "91605 Demonstrate understanding of evolutionary processes leading to speciation Sciences / Science / Biology Level 3",
  91606:
    "91606 Demonstrate understanding of trends in human evolution Sciences / Science / Biology Level 3",
  91612:
    "91612 Demonstrate understanding of how technological modelling supports technological development and implementation Engineering and Technology / Technology / Generic Technology Level 3",
  91613:
    "91613 Demonstrate understanding of material development Engineering and Technology / Technology / Generic Technology Level 3",
  91614:
    "91614 Demonstrate understanding of operational parameters in complex and highly complex technological systems Engineering and Technology / Technology / Generic Technology Level 3",
  91617:
    "91617 Undertake a critique of a technological outcome's design Engineering and Technology / Technology / Generic Technology Level 3",
  91627:
    "91627 Initiate design ideas through exploration Engineering and Technology / Technology / Design and Visual Communication Level 3",
  91631:
    "91631 Produce working drawings to communicate production details for a complex design Engineering and Technology / Technology / Design and Visual Communication Level 3",
  91645:
    "91645 Demonstrate understanding of a variety of extended spoken Indonesian texts Humanities / Languages / Indonesian Level 3",
  91648:
    "91648 Demonstrate understanding of a variety of extended written and/or visual Indonesian texts Humanities / Languages / Indonesian Level 3",
  91652:
    "91652 Pānui kia mōhio ki te reo Māori o te ao whānui Māori / Reo Māori / Pānui Level 3",
  91653:
    "91653 Tuhi i te reo Māori o te ao whānui Māori / Reo Māori / Tuhituhi Level 3",
  91659:
    "91659 Te whakapuaki whakaaro hei tuhinga whakamōhio Māori / Te Marautanga o Aotearoa / Te Reo Rangatira Level 1",
  91662:
    "91662 Te whakatau kaupapa hei tuhinga Māori / Te Marautanga o Aotearoa / Te Reo Rangatira Level 1",
  91664:
    "91664 Te tātari i te reo tuhituhi hou Māori / Te Marautanga o Aotearoa / Te Reo Rangatira Level 1",
  91669:
    "91669 Demonstrate understanding of a variety of spoken Lea Faka Tonga texts on areas of most immediate relevance Humanities / Languages / Lea Faka Tonga Level 1",
  91672:
    "91672 Demonstrate understanding of a variety of Lea Faka Tonga texts on areas of most immediate relevance Humanities / Languages / Lea Faka Tonga Level 1",
  91674:
    "91674 Demonstrate understanding of a variety of spoken Lea Faka Tonga texts on familiar matters Humanities / Languages / Lea Faka Tonga Level 2",
  91677:
    "91677 Demonstrate understanding of a variety of written and/or visual Lea Faka Tonga text(s) on familiar matters Humanities / Languages / Lea Faka Tonga Level 2",
  91679:
    "91679 Demonstrate understanding of a variety of extended spoken Lea Faka Tonga texts Humanities / Languages / Lea Faka Tonga Level 3",
  91682:
    "91682 Demonstrate understanding of a variety of extended written and/or visual Lea Faka Tonga texts Humanities / Languages / Lea Faka Tonga Level 3",
  91733:
    "91733 Demonstrate understanding of initiatives that contribute to a sustainable future Sciences / Science / Environmental Sustainability Level 2",
  91736:
    "91736 Analyse how different worldviews and the values and practices associated with them impact on sustainability Sciences / Science / Environmental Sustainability Level 3",
  91777:
    "91777 Te whakarongo ki ngā tohunga reo Māori / Te Marautanga o Aotearoa / Te Reo Rangatira Level 2",
  91780:
    "91780 Te tuhi kōrero whakaae rānei whakahē rānei Māori / Te Marautanga o Aotearoa / Te Reo Rangatira Level 2",
  91804:
    "91804 Te tātari i te ahunga o te reo Māori / Te Marautanga o Aotearoa / Te Reo Rangatira Level 3",
  91808:
    "91808 Te whakaoti tuhinga Māori / Te Marautanga o Aotearoa / Te Reo Rangatira Level 3",
  91876:
    "91876 Analyse a significant issue in psychological practice Social Sciences / Social Science Studies / Psychology Level 3",
  91886:
    "91886 Demonstrate understanding of human-computer interaction Engineering and Technology / Technology / Digital Technologies Level 1",
  91887:
    "91887 Demonstrate understanding of compression coding for a chosen media type Engineering and Technology / Technology / Digital Technologies Level 1",
  91898:
    "91898 Demonstrate understanding of a computer science concept Engineering and Technology / Technology / Digital Technologies Level 2",
  91899:
    "91899 Present a summary of developing a digital outcome Engineering and Technology / Technology / Digital Technologies Level 2",
  91908:
    "91908 Analyse an area of computer science Engineering and Technology / Technology / Digital Technologies Level 3",
  91909:
    "91909 Present a reflective analysis of developing a digital outcome Engineering and Technology / Technology / Digital Technologies Level 3",
  91914:
    "91914 Explore Visual Arts processes and conventions to inform own art making Arts and Crafts / Visual Arts / Art History Level 1",
  91915:
    "91915 Create a sustained body of related artworks in response to an art making proposition Arts and Crafts / Visual Arts / Art History Level 1",
  91918:
    "91918 Demonstrate understanding of a characteristic of religious or spiritual traditions Humanities / Religious Studies / Understanding Religion Level 1",
  91919:
    "91919 Demonstrate understanding of a religious or spiritual community's perspective on an issue Humanities / Religious Studies / Understanding Religion Level 1",
  91922:
    "91922 Describe features of science that have contributed to the development of a science idea in a local context Sciences / Science / Science Core Level 1",
  91923:
    "91923 Demonstrate understanding of science-related claims in communicated information Sciences / Science / Science Core Level 1",
  91926:
    "91926 Develop ideas in writing using stylistic and written conventions Humanities / English / English Written Language Level 1",
  91927:
    "91927 Demonstrate understanding of significant aspects of unfamiliar texts Humanities / English / English Written Language Level 1",
  91930:
    "91930 Demonstrate understanding of how soil properties are managed in a primary production system Sciences / Science / Agricultural and Horticultural Science Level 1",
  91931:
    "91931 Demonstrate understanding of sustainability considerations that influence primary production management practices Sciences / Science / Agricultural and Horticultural Science Level 1",
  91934:
    "91934 Describe understanding of how natural processes operate within te taiao Social Sciences / Social Science Studies / Geography Level 1",
  91935:
    "91935 Demonstrate understanding of geographic decision making in Aotearoa New Zealand or the Pacific Social Sciences / Social Science Studies / Geography Level 1",
  91938:
    "91938 Demonstrate understanding of the relationship between key features and cultural context of a dance genre or style Arts and Crafts / Dance / Dance Performance Level 1",
  91939:
    "91939 Demonstrate understanding of the application of the elements of dance in a performance Arts and Crafts / Dance / Dance Performance Level 1",
  91942:
    "91942 Use drama techniques to perform a scripted role for an audience Arts and Crafts / Drama / Drama Studies Level 1",
  91943:
    "91943 Respond to a drama performance Arts and Crafts / Drama / Drama Studies Level 1",
  91946:
    "91946 Interpret and apply mathematical and statistical information in context Sciences / Mathematics / Mathematical Studies Level 1",
  91947:
    "91947 Demonstrate mathematical reasoning Sciences / Mathematics / Mathematical Studies Level 1",
  91950:
    "91950 Demonstrate understanding of music in relation to contexts Arts and Crafts / Music / Music Studies Level 1",
  91951:
    "91951 Shape music ideas to create an original composition Arts and Crafts / Music / Music Studies Level 1",
  91954:
    "91954 Demonstrate understanding of written Chinese related to everyday contexts Humanities / Languages / Chinese Level 1",
  91955:
    "91955 Demonstrate understanding of spoken Chinese (Mandarin) related to everyday contexts Humanities / Languages / Chinese Level 1",
  91958:
    "91958 Demonstrate understanding of written Japanese related to everyday contexts Humanities / Languages / Japanese Level 1",
  91959:
    "91959 Demonstrate understanding of spoken Japanese related to everyday contexts Humanities / Languages / Japanese Level 1",
  91962:
    "91962 Demonstrate understanding of written Korean related to everyday contexts Humanities / Languages / Korean Level 1",
  91963:
    "91963 Demonstrate understanding of spoken Korean related to everyday contexts Humanities / Languages / Korean Level 1",
  91966:
    "91966 Demonstrate understanding of written French related to everyday contexts Humanities / Languages / French Level 1",
  91967:
    "91967 Demonstrate understanding of spoken French related to everyday contexts Humanities / Languages / French Level 1",
  91970:
    "91970 Demonstrate understanding of written German related to everyday contexts Humanities / Languages / German Level 1",
  91971:
    "91971 Demonstrate understanding of spoken German related to everyday contexts Humanities / Languages / German Level 1",
  91974:
    "91974 Demonstrate understanding of written Spanish related to everyday contexts Humanities / Languages / Spanish Level 1",
  91975:
    "91975 Demonstrate understanding of spoken Spanish related to everyday contexts Humanities / Languages / Spanish Level 1",
  91978:
    "91978 Demonstrate understanding of categories within Te Ao Haka Māori / Māori Performing Arts / Te Ao Haka Level 1",
  91979:
    "91979 Demonstrate understanding of elements within a Te Ao Haka performance Māori / Māori Performing Arts / Te Ao Haka Level 1",
  91982:
    "91982 Compare a Te Ao Haka performance and one other performance Māori / Māori Performing Arts / Te Ao Haka Level 2",
  91983:
    "91983 Respond to a Te Ao Haka performance Māori / Māori Performing Arts / Te Ao Haka Level 2",
  91986:
    "91986 Perform two Te Ao Haka disciplines Māori / Māori Performing Arts / Te Ao Haka Level 3",
  91987:
    "91987 Demonstrate understanding of a key role within Te Ao Haka Māori / Māori Performing Arts / Te Ao Haka Level 3",
  92002:
    "92002 Develop product or spatial design ideas informed by the consideration of people Engineering and Technology / Technology / Design and Visual Communication Level 1",
  92003:
    "92003 Use instrumental drawing techniques to communicate own product or spatial design outcome Engineering and Technology / Technology / Design and Visual Communication Level 1",
  92006:
    "92006 Demonstrate understanding of usability in human computer interfaces Engineering and Technology / Technology / Digital Technologies Level 1",
  92007:
    "92007 Design a digital technologies outcome Engineering and Technology / Technology / Digital Technologies Level 1",
  92010:
    "92010 Demonstrate understanding of personal interpersonal and societal factors that influence hauora Humanities / Health and Physical Education / Health Education Level 1",
  92011:
    "92011 Demonstrate understanding of strategies that enhance hauora Humanities / Health and Physical Education / Health Education Level 1",
  92014:
    "92014 Demonstrate understanding of sustainable practices in the development of a Materials and Processing Technology design Engineering and Technology / Technology / Construction and Mechanical Technologies Level 1",
  92015:
    "92015 Demonstrate understanding of materials and techniques for a feasible Materials and Processing Technology outcome Engineering and Technology / Technology / Construction and Mechanical Technologies Level 1",
  92018:
    "92018 Demonstrate understanding of the influence of a personal movement experience on hauora Humanities / Health and Physical Education / Physical Education Level 1",
  92019:
    "92019 Demonstrate understanding of influences on movement in Aotearoa New Zealand or the Pacific Humanities / Health and Physical Education / Physical Education Level 1",
  92022:
    "92022 Demonstrate understanding of genetic variation in relation to an identified characteristic Sciences / Science / Science Core Level 1",
  92023:
    "92023 Demonstrate understanding of how the properties of chemicals inform their use in a specific context Sciences / Science / Science Core Level 1",
  92026:
    "92026 Demonstrate understanding of historical concepts in contexts of significance to Aotearoa New Zealand Social Sciences / Social Science Studies / History Level 1",
  92027:
    "92027 Demonstrate understanding of perspectives on a historical context Social Sciences / Social Science Studies / History Level 1",
  92030:
    "92030 Demonstrate understanding of how interdependent financial relationships are affected by an event Business / Business Operations and Development / Business Studies Level 1",
  92031:
    "92031 Demonstrate understanding of how an organisation's financial viability is affected by an event Business / Business Operations and Development / Business Studies Level 1",
  92034:
    "92034 Demonstrate understanding of written Gagana Sāmoa related to everyday contexts Humanities / Languages / Gagana Sāmoa Level 1",
  92035:
    "92035 Demonstrate understanding of spoken Gagana Sāmoa related to everyday contexts Humanities / Languages / Gagana Sāmoa Level 1",
  92038:
    "92038 Show understanding of written Lea Faka Tonga related to everyday contexts Humanities / Languages / Lea Faka Tonga Level 1",
  92039:
    "92039 Demonstrate understanding of spoken Lea Faka Tonga related to everyday contexts Humanities / Languages / Lea Faka Tonga Level 1",
  92042:
    "92042 Demosntrate understanding of written Te Reo Māori Kūki irani related to everyday contexts Humanities / Languages / Te Reo Māori Kūki irani Level 1",
  92043:
    "92043 Demonstrate understanding of spoken te reo Māori Kūki irani related to everyday contexts Humanities / Languages / Te Reo Māori Kūki irani Level 1",
  92046:
    "92046 Demonstrate understanding of the effect on the Earth of interactions between the Sun and the Earth Moon system Sciences / Science / Science Core Level 1",
  92047:
    "92047 Demonstrate understanding of energy in a physical system Sciences / Science / Science Core Level 1",
  92050:
    "92050 Demonstrate understanding of decisions made in relation to a contemporary social issue Social Sciences / Social Science Studies / Social Studies Level 1",
  92051:
    "92051 Describe a social action undertaken to support or challenge a system Social Sciences / Social Science Studies / Social Studies Level 1",
  92054:
    "92054 Te whakamārama i te rawa hangarau Māori / Te Marautanga o Aotearoa / Hangarau Level 1",
  92055:
    "92055 Te whakaputa hanga hangarau Māori / Te Marautanga o Aotearoa / Hangarau Level 1",
  92058:
    "92058 Te whakaatu māramatanga mō te kaitiakitanga Māori / Te Marautanga o Aotearoa / Hauora Wāhanga Ako Level 1",
  92059:
    "92059 Te whakaatu māramatanga mō te whanaungatanga Māori / Te Marautanga o Aotearoa / Hauora Wāhanga Ako Level 1",
  92063:
    "92063 Te whakaatu māramatanga ki ngā huānga toi rēhia Māori / Te Marautanga o Aotearoa / Ngā Mahi a te Rēhia Level 1",
  92064:
    "92064 Te whakamahi i ngā āhuatanga toi rēhia kia puta ai he mahinga toi Māori / Te Marautanga o Aotearoa / Ngā Mahi a te Rēhia Level 1",
  92067:
    "92067 Te whakamahi tikanga taurangi hei whakaoti rapanga Māori / Te Marautanga o Aotearoa / Pāngarau Level 1",
  92068:
    "92068 Te whakamahi whakaaro āhuahanga me te ine hei whakaoti rapanga Māori / Te Marautanga o Aotearoa / Pāngarau Level 1",
  92071:
    "92071 Te tūhura i ngā kōrero tuku iho e pā ana ki tētahi kaupapa taiao ā iwi Māori / Te Marautanga o Aotearoa / Pūtaiao Level 1",
  92072:
    "92072 Te whakahāngai i te mātauranga e pā ana ki ngā atua ki tētahi kaupapa taiao Māori / Te Marautanga o Aotearoa / Pūtaiao Level 1",
  92075:
    "92075 Te whakamahi i tētahi rautaki reo Māori / Reo Māori / Rautaki Reo Level 1",
  92076:
    "92076 Te whakamārama i ngā āhuatanga motuhake o tētahi momo reo kua ākona Māori / Reo Māori / Puna Reo Level 1",
  92080:
    "92080 Te whakaatu māramatanga ki ngā tikanga Māori e pā ana ki te pupuri me te tuku mātauranga Māori / Te Marautanga o Aotearoa / Tikanga ā Iwi Level 1",
  92081:
    "92081 Te whakaatu māramatanga ki ngā tirohanga kē e pā ana ki tētahi take o te wā Māori / Te Marautanga o Aotearoa / Tikanga ā Iwi Level 1",
  92085:
    "92085 Te whakaatu māramatanga ki ngā huānga toi ataata Māori / Te Marautanga o Aotearoa / Toi Ataata Level 1",
  92086:
    "92086 Te whakamahi i ngā āhuatanga toi ataata kia puta ai he mahinga toi Māori / Te Marautanga o Aotearoa / Toi Ataata Level 1",
  92090:
    "92090 Te whakaatu māramatanga ki ngā huānga toi puoro Māori / Te Marautanga o Aotearoa / Toi Puoro Level 1",
  92091:
    "92091 Te whakamahi i ngā āhuatanga toi puoro kia puta ai he mahinga toi Māori / Te Marautanga o Aotearoa / Toi Puoro Level 1",
  92094:
    "92094 Te tautohu i ētahi mātāpono Māori kei roto i te reo Māori / Reo Māori / Te Reo Māori Level 1",
  92095:
    "92095 Te whakaatu i te māramatanga ki te tika o te reo Māori / Reo Māori / Te Reo Māori Level 1",
  92349:
    "92349 Demonstrate understanding of written Gagana Tokelau related to everyday contexts Humanities / Languages / Gagana Tokelau Level 1",
  92350:
    "92350 Demonstrate understanding of spoken Gagana Tokelau related to everyday contexts Humanities / Languages / Gagana Tokelau Level 1",
  92353:
    "92353 Demonstrate understanding of written Vagahau Niue related to everyday contexts Humanities / Languages / Vagahau Niue Level 1",
  92354:
    "92354 Demonstrate understanding of spoken Vagahau Niue related to everyday contexts Humanities / Languages / Vagahau Niue Level 1",
  92357:
    "92357 Demonstrate understanding of New Zealand Sign Language related to everyday contexts Humanities / Languages / New Zealand Sign Language Level 1",
  92358:
    "92358 Respond in New Zealand Sign Language related to everyday contexts Humanities / Languages / New Zealand Sign Language Level 1",
  92361:
    "92361 Te whakamārama i ngā rawa hangarau hei whakaea i tētahi take ā takiwā Māori / Te Marautanga o Aotearoa / Hangarau Level 2",
  92362:
    "92362 Te whakaputa hanga hei whakaea i tētahi take ā takiwā Māori / Te Marautanga o Aotearoa / Hangarau Level 2",
  92367:
    "92367 Te kōtuitui i ngā āhuatanga toi rēhia kia puta ai he mahinga toi motuhake Māori / Te Marautanga o Aotearoa / Ngā Mahi a te Rēhia Level 2",
  92370:
    "92370 Te tūhono i ngā ariā o te mātauranga pūtaiao o te iwi taketake e pā ana ki te ao tūroa Māori / Te Marautanga o Aotearoa / Pūtaiao Level 2",
  92371:
    "92371 Te matapaki i te mātauranga pūtaiao o te iwi taketake me ngā pānga ki ngā whakaaro mō te anamata o te ao tūroa Māori / Te Marautanga o Aotearoa / Pūtaiao Level 2",
  92375:
    "92375 Te whakamāori i ngā huānga toi ataata Māori / Te Marautanga o Aotearoa / Toi Ataata Level 2",
  92376:
    "92376 Te kōtuitui i ngā āhuatanga toi ataata kia puta ai he mahinga toi motuhake Māori / Te Marautanga o Aotearoa / Toi Ataata Level 2",
  92379:
    "92379 Te whakatewhatewha i tētahi take i tutū ai te puehu i Aotearoa Māori / Te Marautanga o Aotearoa / Tikanga ā Iwi Level 2",
  92380:
    "92380 Te whakatewhatewha i ngā pāpātanga o tētahi tūāhuatanga o mua ki te iwi taketake Māori / Te Marautanga o Aotearoa / Tikanga ā Iwi Level 2",
  92384:
    "92384 Te whakamāori i ngā huānga toi puoro Māori / Te Marautanga o Aotearoa / Toi Puoro Level 2",
  92385:
    "92385 Te kōtuitui i ngā āhuatanga toi puoro kia puta ai he mahinga toi motuhake Māori / Te Marautanga o Aotearoa / Toi Puoro Level 2",
  92386:
    "92386 Te tātari i ngā tūhononga o ngā āhuatanga motuhake i tētahi momo reo kua ākona Māori / Reo Māori / Puna Reo Level 2",
  92388:
    "92388 Te tātari i te tūhononga o ētahi rautaki reo Māori / Reo Māori / Rautaki Reo Level 2",
  92390:
    "92390 Te whakapuaki whakaaro i runga i te pakari haere o te tika o te reo Māori / Reo Māori / Te Reo Māori Level 2",
  92393:
    "92393 Te kōrero mō te ora o te reo i muri i te tau 1970 Māori / Reo Māori / Te Reo Māori Level 2",
  92395:
    "92395 Te tūhura i te kaupapa hauora Māori me te pānga ki te oranga Māori / Te Marautanga o Aotearoa / Hauora Wāhanga Ako Level 2",
  92400:
    "92400 Te whakamahi kīanga me te tuhi kauwhata o ngā pānga hei whakaoti rapanga Māori / Te Marautanga o Aotearoa / Pāngarau Level 2",
  92401:
    "92401 Te whakamahi tikanga kauwhata pānga hei whakaoti rapanga whārite tukutahi Māori / Te Marautanga o Aotearoa / Pāngarau Level 2",
  92404:
    "92404 Te whakaatu mōhiotanga ki ngā tikanga whakamahere tūhuratanga tauanga Māori / Te Marautanga o Aotearoa / Pāngarau Level 2",
  92405:
    "92405 Te whakamahi i ngā tikanga tūponotanga hei whakaoti rapanga mā te whakatauira me te tuari Māori / Te Marautanga o Aotearoa / Pāngarau Level 2",
};

var searchBox = document.getElementById("theNumber");
const resultsContainer = document.getElementById("results");
console.log(searchBox);
searchBox.addEventListener("input", handleInput);

function handleInput() {
  const searchTerm = searchBox.value.toLowerCase();
  const matchingStandards = Object.entries(achievementStandards).filter(
    ([number, description]) => description.toLowerCase().includes(searchTerm)
  );

  displayResults(matchingStandards);
}

function displayResults(results) {
  resultsContainer.innerHTML = "";

  if (results.length > 0) {
    results.forEach(([number, description]) => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
      resultItem.textContent = `${description}`;
      resultItem.addEventListener("click", () => {
        searchBox.value = number; // Set the search box value to the selected number
        resultsContainer.style.display = "none"; // Hide the results container
      });
      resultsContainer.appendChild(resultItem);
    });

    resultsContainer.style.display = "block";
  } else {
    resultsContainer.style.display = "none";
  }
}