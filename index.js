alert('Welcome To QuizVille\nTry out the quiz tests in the "Quiz Library"\nEnjoy!!! and have Fun.......')
let questions = [];
let count = 0;
let score = 0;
const test1 = [
{
    question:"1. An attempt to make people believe something that is not true.",
    choiceA:"hoard",
    choiceB:"hoarse",
    choiceC:"hoax",
    correct:"C"
},{
    question:"2. Freedom to do what you want",
    choiceA:"ditch",
    choiceB:"dosage",
    choiceC:"leeway",
    correct:"C"
},{
    question:"3. Someone who is quiet and not willing to argue or ask for anything",
    choiceA:"mean",
    choiceB:"measly",
    choiceC:"meek",
    correct:"C"
},{
    question:"4. To give someone a lot of care and attention",
    choiceA:"flatter",
    choiceB:"pamper",
    choiceC:"pamphlet",
    correct:"B"
},{
    question:"5. To steal or take large amounts of money or things from somewhere",
    choiceA:"plunder",
    choiceB:"plunger",
    choiceC:"poacher",
    correct:"A"
},{
    question:"6. Continuing without getting any less severe or determined.",
    choiceA:"Reckless",
    choiceB:"Relentless",
    choiceC:"Restless",
    correct:"B"
},{
    question:"7. Something that exists in large amounts.",
    choiceA:"boring",
    choiceB:"boundless",
    choiceC:"bountiful",
    correct:"C"
},{
    question:"8. The gradual destruction of metal by water, chemicals, etc",
    choiceA:"chlorine",
    choiceB:"cholesterol",
    choiceC:"corrosion",
    correct:"C"
},{
    question:"9. A noisy fight, especially in a public place",
    choiceA:"braces",
    choiceB:"brawl",
    choiceC:"shawl",
    correct:"B"
},{
    question:"10. A large company made up of many different smaller companies.",
    choiceA:"conglomerate",
    choiceB:"conscript",
    choiceC:"dividend",
    correct:"A"
}
]

const test2 = [
{
    question:"1. A tube on a container that you pour out liquid through",
    choiceA:"seive",
    choiceB:"spouse",
    choiceC:"spout",
    correct:"C"
},{
    question:"2. A deep narrow valley with steep sides",
    choiceA:"goose",
    choiceB:"gorge",
    choiceC:"gossip",
    correct:"B"
},{
    question:"3. Having a lot of green or healthy plants or leaves",
    choiceA:"lung",
    choiceB:"lush",
    choiceC:"luxurious",
    correct:"B"
},{
    question:"4. A short sleep during the day",
    choiceA:"nag",
    choiceB:"naive",
    choiceC:"nap",
    correct:"C"
},{
    question:"5. Not able to feel anything",
    choiceA:"novince",
    choiceB:"nuance",
    choiceC:"numb",
    correct:"C"
},{
    question:"6. Someone who has an extremely high level of intelligence",
    choiceA:"genius",
    choiceB:"germ",
    choiceC:"glance",
    correct:"A"
},{
    question:"7. When you want to have more money, food, power, etc. than you need",
    choiceA:"gravel",
    choiceB:"gravy",
    choiceC:"greed",
    correct:"C"
},{
    question:"8. A small wooden building with only one or two rooms",
    choiceA:"honey",
    choiceB:"hoof",
    choiceC:"hut",
    correct:"C"
},{
    question:"9. A vegetable with long straight green leaves, that tases like onion",
    choiceA:"leaflet",
    choiceB:"leap",
    choiceC:"leek",
    correct:"C"
},{
    question:"10. A bright green fruit with a sour taste",
    choiceA:"limb",
    choiceB:"lime",
    choiceC:"liner",
    correct:"B"
}
]

const test3 = [
{
    question:"1. Students gathered at the side of the football _____ before the start of the game.",
    choiceA:"Lawn  ",
    choiceB:"Field",
    choiceC:"Court",
    correct:"B"
},{
    question:"2. _____ is the scientific study of the stars and planets.",
    choiceA:"Astrology",
    choiceB:"Archaeology",
    choiceC:"Astronomy",
    correct:"C"
},{
    question:"3. She runs a highly _____ business.",
    choiceA:"Profitable",
    choiceB:"Commercial",
    choiceC:"Financial",
    correct:"A"
},{
    question:"4. Unfortunately the store didn't have the dress in my _____ .",
    choiceA:"Size",
    choiceB:"Number",
    choiceC:"Figure",
    correct:"A"
},{
    question:"5. He carried all his camping equipment in his _____.",
    choiceA:"Backpack",
    choiceB:"Sleeping Bag",
    choiceC:"Hand Bag",
    correct:"A"
},{
    question:"6. Steve is a very _____ man who easily gets annoyed.",
    choiceA:"Irritating",
    choiceB:"Irritable",
    choiceC:"Suspicious",
    correct:"B"
},{
    question:"7. Wholemeal bread is more _____ than white bread.",
    choiceA:"Stale",
    choiceB:"Edible",
    choiceC:"Nutritious",
    correct:"C"
},{
    question:"8. I read a _____ of the book yesterday evening.",
    choiceA:"Chapter",
    choiceB:"Capital",
    choiceC:"Sector",
    correct:"A"
},{
    question:"9. Jane works as a _____ for the New York Times newspaper.",
    choiceA:"Playwright",
    choiceB:"Reporter",
    choiceC:"Broadcaster",
    correct:"B"
},{
    question:"10. _____ energy produces no waste or pollution.",
    choiceA:"Sun",
    choiceB:"Sunshine",
    choiceC:"Solar",
    correct:"C"
}
]


const test4 = [
{
    question:"1. I need a _____ to open this bottle of wine.",
    choiceA:"Wrench",
    choiceB:"Can Opener",
    choiceC:"Corkscrew",
    correct:"C"
},{
    question:"2. He was _____ to vice president of the company.",
    choiceA:"Promoted",
    choiceB:"Risen",
    choiceC:"Raised",
    correct:"A"
},{
    question:"3. Frank _____ only a few mistakes in the test.",
    choiceA:"Made",
    choiceB:"Took",
    choiceC:"Did",
    correct:"A"
},{
    question:"4. The _____ of the movie includes Bruce Willis and Melanie Griffith.",
    choiceA:"Players",
    choiceB:"Roles",
    choiceC:"Cast",
    correct:"C"
},{
    question:"5. Let's _____ a game of cards.",
    choiceA:"make",
    choiceB:"have",
    choiceC:"do",
    correct:"B"
},{
    question:"6. Ronaldinho _____ a goal for Brazil.",
    choiceA:"kicked",
    choiceB:"scored",
    choiceC:"marked",
    correct:"B"
},{
    question:"7. Gillian's _____ was delayed by two hours because of fog.",
    choiceA:"flight",
    choiceB:"lift-off",
    choiceC:"fly",
    correct:"A"
},{
    question:"8. He bought a _____ of orange juice.",
    choiceA:"Carton",
    choiceB:"packet",
    choiceC:"Sachet",
    correct:"A"
},{
    question:"9. She decided to _____ some eggs.",
    choiceA:"bake",
    choiceB:"fry",
    choiceC:"roast",
    correct:"B"
},{
    question:"10. Forests are being destroyed by acid _____ .",
    choiceA:"contamination",
    choiceB:"rain",
    choiceC:"pollution",
    correct:"B"
}
]

const test5 = [
{
    question:"1. We waited at least an hour for him. _____, we decided to go without him.",
    choiceA:"In the End",
    choiceB:"At the end",
    choiceC:"In conclusion",
    correct:"A"
},{
    question:"2. I'd _____ tea.",
    choiceA:"Would prefer have",
    choiceB:"Rather have",
    choiceC:"Rather to have",
    correct:"B"
},{
    question:"3. Have you _____ David recently?",
    choiceA:"Heard of ",
    choiceB:"Heard from",
    choiceC:"Heard by",
    correct:"B"
},{
    question:"4. _____ I was at home watching TV, someone knocked at the door.",
    choiceA:"Yet",
    choiceB:"While",
    choiceC:"Doing",
    correct:"B"
},{
    question:"5. She was a bad-tempered woman, and not at all _____ .",
    choiceA:"disagreeable",
    choiceB:"likable",
    choiceC:"acceptable",
    correct:"B"
},{
    question:"6. You look different with _____ hair.",
    choiceA:"little",
    choiceB:"small",
    choiceC:"short",
    correct:"C"
},{
    question:"7. Peter _____ him.",
    choiceA:"Speak me to follow",
    choiceB:"Said me to follow",
    choiceC:"told me to follow",
    correct:"C"
},{
    question:"8. I have been living in New York _____ two years.",
    choiceA:"for",
    choiceB:"during",
    choiceC:"since",
    correct:"A"
},{
    question:"9. _____ the battery and recharge it.",
    choiceA:"Deconnect",
    choiceB:"Disconnect",
    choiceC:"Unconnect",
    correct:"B"
},{
    question:"10. The company has taken _____ five new employees this month.",
    choiceA:"up",
    choiceB:"in",
    choiceC:"on",
    correct:"C"
}
]
const test6 = [
{
    question:"1. I _____ doubt whether he'll pass his driving test.",
    choiceA:"absolutely",
    choiceB:"highly",
    choiceC:"seriously",
    correct:"C"
},{
    question:"2. The _____ are that the team will lose the game.",
    choiceA:"estimates",
    choiceB:"odds",
    choiceC:"probabilities",
    correct:"B"
},{
    question:"3. Jane is _____ complaining about her neighbors.",
    choiceA:"All the time ",
    choiceB:"Again and again",
    choiceC:"forever",
    correct:"C"
},{
    question:"4. The manager wanted to draw everyone's attention _____ the first item on the agenda.",
    choiceA:"on",
    choiceB:"to",
    choiceC:"for",
    correct:"B"
},{
    question:"5. What is the reasoning _____ this proposal?",
    choiceA:"by",
    choiceB:"behind",
    choiceC:"about",
    correct:"B"
},{
    question:"6. He is second to none _____ repairing things.",
    choiceA:"Relative to",
    choiceB:"When it comes to",
    choiceC:"in",
    correct:"B"
},{
    question:"7. There isn't a _____ of evidence that Schneider committed the crime.",
    choiceA:"shred",
    choiceB:"Spot",
    choiceC:"portion",
    correct:"A"
},{
    question:"8. She suffered a serious leg injury when she was fifteen, but since _____ she has been in good health.",
    choiceA:"when",
    choiceB:"which",
    choiceC:"then",
    correct:"C"
},{
    question:"9. We got soaked in a sudden _____ .",
    choiceA:"downfall",
    choiceB:"downpour",
    choiceC:"outburst",
    correct:"B"
},{
    question:"10. The two sides are confident that an agreement can be _____. ",
    choiceA:"reached",
    choiceB:"concluded",
    choiceC:"settled",
    correct:"A"
}
]
const test7 = [
{
    question:"1. A tax on goods that are brought into the country",
    choiceA:"tanned",
    choiceB:"tantrum",
    choiceC:"tariff",
    correct:"C"
},{
    question:"2.  A very thin branch that grows on a large branch of a tree",
    choiceA:"tusk",
    choiceB:"twig",
    choiceC:"twin",
    correct:"B"
},{
    question:"3. A tool or object that you use for doing something, especially for cooking",
    choiceA:"utensil",
    choiceB:"utility",
    choiceC:"utopia",
    correct:"A"
},{
    question:"4. A small object that produces a high sound when you blow into it",
    choiceA:"whisker",
    choiceB:"whistle",
    choiceC:"wizard",
    correct:"B"
},{
    question:"5. A type of strong cloth used to make bags, tents, shoes, etc",
    choiceA:"cloak",
    choiceB:"candle",
    choiceC:"canvas",
    correct:"C"
},{
    question:"6. A flat folded paper cover that you put a letter in before you mail it",
    choiceA:"envelope",
    choiceB:"equipment",
    choiceC:"escalator",
    correct:"A"
},{
    question:"7. A piece of cloth you use to wash your face",
    choiceA:"wall",
    choiceB:"walrus",
    choiceC:"washcloth",
    correct:"C"
},{
    question:"8. When someone deceives people to get money",
    choiceA:"feeble",
    choiceB:"fraud",
    choiceC:"freckle",
    correct:"B"
},{
    question:"9. A group of animals of the same kind that lives and feeds together",
    choiceA:"hemlet",
    choiceB:"herd",
    choiceC:"herb",
    correct:"B"
},{
    question:"10. To copy someone's appearance or behavior ",
    choiceA:"mimic",
    choiceB:"mince",
    choiceC:"miner",
    correct:"A"
}
]
const test8 = [
{
    question:"1. Say that you do not approve or like something",
    choiceA:"oak",
    choiceB:"object",
    choiceC:"obsolete",
    correct:"B"
},{
    question:"2.  Someone who hates their country",
    choiceA:"patriot",
    choiceB:"patrol",
    choiceC:"none",
    correct:"C"
},{
    question:"3. Someone whose job it is to repair water pipes",
    choiceA:"plumber",
    choiceB:"portal",
    choiceC:"python",
    correct:"A"
},{
    question:"4. A sharp instrument for removing hair, especially from a man's head",
    choiceA:"Hair Clipper",
    choiceB:"razor",
    choiceC:"rayon",
    correct:"A"
},{
    question:"5. To tear something or be torn quickly and violently",
    choiceA:"rim",
    choiceB:"rink",
    choiceC:"rip",
    correct:"C"
},{
    question:"6. To make someone feel frightened",
    choiceA:"scalp",
    choiceB:"scare",
    choiceC:"scent",
    correct:"B"
},{
    question:"7. Time you are not working and can do things you enjoy",
    choiceA:"lesiure",
    choiceB:"lens",
    choiceC:"lentil",
    correct:"A"
},{
    question:"8. The ceremony for someone who has just died",
    choiceA:"funeral",
    choiceB:"fur",
    choiceC:"fury",
    correct:"A"
},{
    question:"9. The amount of work, goods, etc. that someone or something produces",
    choiceA:"outlet",
    choiceB:"output",
    choiceC:"outrage",
    correct:"B"
},{
    question:"10. A long written story, usually about characters and events that are not real",
    choiceA:"notification",
    choiceB:"novel",
    choiceC:"novelty",
    correct:"B"
}
]
const test9 = [
{
    question:"1. ( to have something up your sleeve ).... what does this IDIOM mean?",
    choiceA:"To become less strong",
    choiceB:"plan to surprise",
    choiceC:"to take someone away by force",
    correct:"B"
},{
    question:"2.  ( to be in the same boat ).... what does this IDIOM mean?",
    choiceA:"to give someone a punishment",
    choiceB:"to hate someone very much",
    choiceC:"to have the same problems",
    correct:"C"
},{
    question:"3. ( to get the picture ).... what does this IDIOM mean?",
    choiceA:"to make a mistake",
    choiceB:"to put paint on the surface",
    choiceC:"to understand",
    correct:"C"
},{
    question:"4. ( to be up in the air ).... what does this IDIOM mean?",
    choiceA:"to be successful",
    choiceB:"to be in an aeroplane",
    choiceC:"to be undecided",
    correct:"C"
},{
    question:"5. ( to stick your neck out ).... what does this IDIOM mean?",
    choiceA:"to cry or shout loudly",
    choiceB:"to take a risk",
    choiceC:"to work very hard without stopping",
    correct:"B"
},{
    question:"6. ( to bite off more than you can chew ).... what does this IDIOM mean?",
    choiceA:"to cook meat or vegetables",
    choiceB:"to make a low continuous sound",
    choiceC:"to try to do more than you can",
    correct:"C"
},{
    question:"7. ( to have a lump in your throat ).... what does this IDIOM mean? ",
    choiceA:"to feel a strong emotion",
    choiceB:"to make a small mistake",
    choiceC:"to make someone stop feeling angry",
    correct:"A"
},{
    question:"8. ( to pull someone's leg ).... what does this IDIOM mean? ",
    choiceA:"to be of a similar quality or level",
    choiceB:"to fool or trick someone",
    choiceC:"to start a fire",
    correct:"B"
},{
    question:"9. ( in the Blink of an eye ).... what does this IDIOM mean?",
    choiceA:"to happen very quickly",
    choiceB:"to happen in the future",
    choiceC:"to set a world record",
    correct:"A"
},{
    question:"10. ( in two shakes ).... what does this IDIOM mean?",
    choiceA:"very easy",
    choiceB:"very soon",
    choiceC:"in two cocktails",
    correct:"B"
}
]


function testOne(){
    questions.push(...test1);
    document.getElementById('container1').addEventListener('onload',renderQuestion([count,'quiz1','A1','B1','C1']));
    document.getElementById('container2').addEventListener('onload',renderQuestion([count+=1,'quiz2','A2','B2','C2']));
    document.getElementById('container3').addEventListener('onload',renderQuestion([count+=1,'quiz3','A3','B3','C3']));
    document.getElementById('container4').addEventListener('onload',renderQuestion([count+=1,'quiz4','A4','B4','C4']));
    document.getElementById('container5').addEventListener('onload',renderQuestion([count+=1,'quiz5','A5','B5','C5']));
    document.getElementById('container6').addEventListener('onload',renderQuestion([count+=1,'quiz6','A6','B6','C6']));
    document.getElementById('container7').addEventListener('onload',renderQuestion([count+=1,'quiz7','A7','B7','C7']));
    document.getElementById('container8').addEventListener('onload',renderQuestion([count+=1,'quiz8','A8','B8','C8']));
    document.getElementById('container9').addEventListener('onload',renderQuestion([count+=1,'quiz9','A9','B9','C9']));
    document.getElementById('container10').addEventListener('onload',renderQuestion([count+=1,'quiz10','A10','B10','C10']));
    document.getElementById('Two').style = "display:none;"
    document.getElementById('Three').style = "display:none;"
    document.getElementById('Four').style = "display:none;"
    document.getElementById('Five').style = "display:none;"
    document.getElementById('Six').style = "display:none;"
    document.getElementById('Seven').style = "display:none;"
    document.getElementById('Eight').style = "display:none;"
    document.getElementById('Nine').style = "display:none;"

};
function testTwo(){
    questions.push(...test2);
    document.getElementById('container1').addEventListener('onload',renderQuestion([count,'quiz1','A1','B1','C1']));
    document.getElementById('container2').addEventListener('onload',renderQuestion([count+=1,'quiz2','A2','B2','C2']));
    document.getElementById('container3').addEventListener('onload',renderQuestion([count+=1,'quiz3','A3','B3','C3']));
    document.getElementById('container4').addEventListener('onload',renderQuestion([count+=1,'quiz4','A4','B4','C4']));
    document.getElementById('container5').addEventListener('onload',renderQuestion([count+=1,'quiz5','A5','B5','C5']));
    document.getElementById('container6').addEventListener('onload',renderQuestion([count+=1,'quiz6','A6','B6','C6']));
    document.getElementById('container7').addEventListener('onload',renderQuestion([count+=1,'quiz7','A7','B7','C7']));
    document.getElementById('container8').addEventListener('onload',renderQuestion([count+=1,'quiz8','A8','B8','C8']));
    document.getElementById('container9').addEventListener('onload',renderQuestion([count+=1,'quiz9','A9','B9','C9']));
    document.getElementById('container10').addEventListener('onload',renderQuestion([count+=1,'quiz10','A10','B10','C10']));
    document.getElementById('One').style = "display:none;"
    document.getElementById('Three').style = "display:none;"
    document.getElementById('Four').style = "display:none;"
    document.getElementById('Five').style = "display:none;"
    document.getElementById('Six').style = "display:none;"
    document.getElementById('Seven').style = "display:none;"
    document.getElementById('Eight').style = "display:none;"
    document.getElementById('Nine').style = "display:none;"
    
};
function testThree(){
    questions.push(...test3);
    document.getElementById('container1').addEventListener('onload',renderQuestion([count,'quiz1','A1','B1','C1']));
    document.getElementById('container2').addEventListener('onload',renderQuestion([count+=1,'quiz2','A2','B2','C2']));
    document.getElementById('container3').addEventListener('onload',renderQuestion([count+=1,'quiz3','A3','B3','C3']));
    document.getElementById('container4').addEventListener('onload',renderQuestion([count+=1,'quiz4','A4','B4','C4']));
    document.getElementById('container5').addEventListener('onload',renderQuestion([count+=1,'quiz5','A5','B5','C5']));
    document.getElementById('container6').addEventListener('onload',renderQuestion([count+=1,'quiz6','A6','B6','C6']));
    document.getElementById('container7').addEventListener('onload',renderQuestion([count+=1,'quiz7','A7','B7','C7']));
    document.getElementById('container8').addEventListener('onload',renderQuestion([count+=1,'quiz8','A8','B8','C8']));
    document.getElementById('container9').addEventListener('onload',renderQuestion([count+=1,'quiz9','A9','B9','C9']));
    document.getElementById('container10').addEventListener('onload',renderQuestion([count+=1,'quiz10','A10','B10','C10']));
    document.getElementById('Two').style = "display:none;"
    document.getElementById('One').style = "display:none;"
    document.getElementById('Four').style = "display:none;"
    document.getElementById('Five').style = "display:none;"
    document.getElementById('Six').style = "display:none;"
    document.getElementById('Seven').style = "display:none;"
    document.getElementById('Eight').style = "display:none;"
    document.getElementById('Nine').style = "display:none;"

};
function testFour(){
    questions.push(...test4);
    document.getElementById('container1').addEventListener('onload',renderQuestion([count,'quiz1','A1','B1','C1']));
    document.getElementById('container2').addEventListener('onload',renderQuestion([count+=1,'quiz2','A2','B2','C2']));
    document.getElementById('container3').addEventListener('onload',renderQuestion([count+=1,'quiz3','A3','B3','C3']));
    document.getElementById('container4').addEventListener('onload',renderQuestion([count+=1,'quiz4','A4','B4','C4']));
    document.getElementById('container5').addEventListener('onload',renderQuestion([count+=1,'quiz5','A5','B5','C5']));
    document.getElementById('container6').addEventListener('onload',renderQuestion([count+=1,'quiz6','A6','B6','C6']));
    document.getElementById('container7').addEventListener('onload',renderQuestion([count+=1,'quiz7','A7','B7','C7']));
    document.getElementById('container8').addEventListener('onload',renderQuestion([count+=1,'quiz8','A8','B8','C8']));
    document.getElementById('container9').addEventListener('onload',renderQuestion([count+=1,'quiz9','A9','B9','C9']));
    document.getElementById('container10').addEventListener('onload',renderQuestion([count+=1,'quiz10','A10','B10','C10']));
    document.getElementById('Two').style = "display:none;"
    document.getElementById('One').style = "display:none;"
    document.getElementById('Three').style = "display:none;"
    document.getElementById('Five').style = "display:none;"
    document.getElementById('Six').style = "display:none;"
    document.getElementById('Seven').style = "display:none;"
    document.getElementById('Eight').style = "display:none;"
    document.getElementById('Nine').style = "display:none;"

};
function testFive(){
    questions.push(...test5);
    document.getElementById('container1').addEventListener('onload',renderQuestion([count,'quiz1','A1','B1','C1']));
    document.getElementById('container2').addEventListener('onload',renderQuestion([count+=1,'quiz2','A2','B2','C2']));
    document.getElementById('container3').addEventListener('onload',renderQuestion([count+=1,'quiz3','A3','B3','C3']));
    document.getElementById('container4').addEventListener('onload',renderQuestion([count+=1,'quiz4','A4','B4','C4']));
    document.getElementById('container5').addEventListener('onload',renderQuestion([count+=1,'quiz5','A5','B5','C5']));
    document.getElementById('container6').addEventListener('onload',renderQuestion([count+=1,'quiz6','A6','B6','C6']));
    document.getElementById('container7').addEventListener('onload',renderQuestion([count+=1,'quiz7','A7','B7','C7']));
    document.getElementById('container8').addEventListener('onload',renderQuestion([count+=1,'quiz8','A8','B8','C8']));
    document.getElementById('container9').addEventListener('onload',renderQuestion([count+=1,'quiz9','A9','B9','C9']));
    document.getElementById('container10').addEventListener('onload',renderQuestion([count+=1,'quiz10','A10','B10','C10']));
    document.getElementById('Two').style = "display:none;"
    document.getElementById('One').style = "display:none;"
    document.getElementById('Three').style = "display:none;"
    document.getElementById('Four').style = "display:none;"
    document.getElementById('Six').style = "display:none;"
    document.getElementById('Seven').style = "display:none;"
    document.getElementById('Eight').style = "display:none;"
    document.getElementById('Nine').style = "display:none;"

};
function testSix(){
    questions.push(...test6);
    document.getElementById('container1').addEventListener('onload',renderQuestion([count,'quiz1','A1','B1','C1']));
    document.getElementById('container2').addEventListener('onload',renderQuestion([count+=1,'quiz2','A2','B2','C2']));
    document.getElementById('container3').addEventListener('onload',renderQuestion([count+=1,'quiz3','A3','B3','C3']));
    document.getElementById('container4').addEventListener('onload',renderQuestion([count+=1,'quiz4','A4','B4','C4']));
    document.getElementById('container5').addEventListener('onload',renderQuestion([count+=1,'quiz5','A5','B5','C5']));
    document.getElementById('container6').addEventListener('onload',renderQuestion([count+=1,'quiz6','A6','B6','C6']));
    document.getElementById('container7').addEventListener('onload',renderQuestion([count+=1,'quiz7','A7','B7','C7']));
    document.getElementById('container8').addEventListener('onload',renderQuestion([count+=1,'quiz8','A8','B8','C8']));
    document.getElementById('container9').addEventListener('onload',renderQuestion([count+=1,'quiz9','A9','B9','C9']));
    document.getElementById('container10').addEventListener('onload',renderQuestion([count+=1,'quiz10','A10','B10','C10']));
    document.getElementById('Two').style = "display:none;"
    document.getElementById('One').style = "display:none;"
    document.getElementById('Three').style = "display:none;"
    document.getElementById('Four').style = "display:none;"
    document.getElementById('Five').style = "display:none;"
    document.getElementById('Seven').style = "display:none;"
    document.getElementById('Eight').style = "display:none;"
    document.getElementById('Nine').style = "display:none;"

};
function testSeven(){
    questions.push(...test7);
    document.getElementById('container1').addEventListener('onload',renderQuestion([count,'quiz1','A1','B1','C1']));
    document.getElementById('container2').addEventListener('onload',renderQuestion([count+=1,'quiz2','A2','B2','C2']));
    document.getElementById('container3').addEventListener('onload',renderQuestion([count+=1,'quiz3','A3','B3','C3']));
    document.getElementById('container4').addEventListener('onload',renderQuestion([count+=1,'quiz4','A4','B4','C4']));
    document.getElementById('container5').addEventListener('onload',renderQuestion([count+=1,'quiz5','A5','B5','C5']));
    document.getElementById('container6').addEventListener('onload',renderQuestion([count+=1,'quiz6','A6','B6','C6']));
    document.getElementById('container7').addEventListener('onload',renderQuestion([count+=1,'quiz7','A7','B7','C7']));
    document.getElementById('container8').addEventListener('onload',renderQuestion([count+=1,'quiz8','A8','B8','C8']));
    document.getElementById('container9').addEventListener('onload',renderQuestion([count+=1,'quiz9','A9','B9','C9']));
    document.getElementById('container10').addEventListener('onload',renderQuestion([count+=1,'quiz10','A10','B10','C10']));
    document.getElementById('Two').style = "display:none;"
    document.getElementById('One').style = "display:none;"
    document.getElementById('Three').style = "display:none;"
    document.getElementById('Four').style = "display:none;"
    document.getElementById('Five').style = "display:none;"
    document.getElementById('Six').style = "display:none;"
    document.getElementById('Eight').style = "display:none;"
    document.getElementById('Nine').style = "display:none;"

};
function testEight(){
    questions.push(...test8);
    document.getElementById('container1').addEventListener('onload',renderQuestion([count,'quiz1','A1','B1','C1']));
    document.getElementById('container2').addEventListener('onload',renderQuestion([count+=1,'quiz2','A2','B2','C2']));
    document.getElementById('container3').addEventListener('onload',renderQuestion([count+=1,'quiz3','A3','B3','C3']));
    document.getElementById('container4').addEventListener('onload',renderQuestion([count+=1,'quiz4','A4','B4','C4']));
    document.getElementById('container5').addEventListener('onload',renderQuestion([count+=1,'quiz5','A5','B5','C5']));
    document.getElementById('container6').addEventListener('onload',renderQuestion([count+=1,'quiz6','A6','B6','C6']));
    document.getElementById('container7').addEventListener('onload',renderQuestion([count+=1,'quiz7','A7','B7','C7']));
    document.getElementById('container8').addEventListener('onload',renderQuestion([count+=1,'quiz8','A8','B8','C8']));
    document.getElementById('container9').addEventListener('onload',renderQuestion([count+=1,'quiz9','A9','B9','C9']));
    document.getElementById('container10').addEventListener('onload',renderQuestion([count+=1,'quiz10','A10','B10','C10']));
    document.getElementById('Two').style = "display:none;"
    document.getElementById('One').style = "display:none;"
    document.getElementById('Three').style = "display:none;"
    document.getElementById('Four').style = "display:none;"
    document.getElementById('Five').style = "display:none;"
    document.getElementById('Six').style = "display:none;"
    document.getElementById('Seven').style = "display:none;"
    document.getElementById('Nine').style = "display:none;"
    

};
function testNine(){
    questions.push(...test9);
    document.getElementById('container1').addEventListener('onload',renderQuestion([count,'quiz1','A1','B1','C1']));
    document.getElementById('container2').addEventListener('onload',renderQuestion([count+=1,'quiz2','A2','B2','C2']));
    document.getElementById('container3').addEventListener('onload',renderQuestion([count+=1,'quiz3','A3','B3','C3']));
    document.getElementById('container4').addEventListener('onload',renderQuestion([count+=1,'quiz4','A4','B4','C4']));
    document.getElementById('container5').addEventListener('onload',renderQuestion([count+=1,'quiz5','A5','B5','C5']));
    document.getElementById('container6').addEventListener('onload',renderQuestion([count+=1,'quiz6','A6','B6','C6']));
    document.getElementById('container7').addEventListener('onload',renderQuestion([count+=1,'quiz7','A7','B7','C7']));
    document.getElementById('container8').addEventListener('onload',renderQuestion([count+=1,'quiz8','A8','B8','C8']));
    document.getElementById('container9').addEventListener('onload',renderQuestion([count+=1,'quiz9','A9','B9','C9']));
    document.getElementById('container10').addEventListener('onload',renderQuestion([count+=1,'quiz10','A10','B10','C10']));
    document.getElementById('Two').style = "display:none;"
    document.getElementById('One').style = "display:none;"
    document.getElementById('Three').style = "display:none;"
    document.getElementById('Four').style = "display:none;"
    document.getElementById('Five').style = "display:none;"
    document.getElementById('Six').style = "display:none;"
    document.getElementById('Seven').style = "display:none;"
    document.getElementById('Eight').style = "display:none;"

};




function renderQuestion(array){
    let q = questions[array[0]]
    //console.log(q.question);
    document.getElementById(array[1]).innerHTML =  q.question ;
    //console.log("a; "+ q.choiceA);
    document.getElementById(array[2]).innerHTML = "a; "+ q.choiceA ;
    //console.log("b; "+ q.choiceB);
    document.getElementById(array[3]).innerHTML = "b; "+ q.choiceB ;
    //console.log("c; "+ q.choiceC);
    document.getElementById(array[4]).innerHTML = "c; "+ q.choiceC ;
    
}


function checkAnswer(Answer,index,id){
    let q1 = questions[index];
    
    //let q = questions[Math.floor(Math.random()* questions.length)];
    if(Answer === q1.correct){
        score++;
        document.getElementById(id).style = "background-color:green;";
        //console.log(score);
        //document.getElementById("score").innerHTML =  `Score:${Math.floor((score/questions.length)*100)}%` ;
    }else{
        //console.log('wrong Answer');
        document.getElementById(id).style = "background-color:red;";
    }
    document.getElementById('bar').style = `width:${((index+1)/questions.length)*100}%;`
    document.getElementById('quizNum').innerHTML = `${(questions.length) - (index+1)} questions left............`
}

function score1(){
    document.getElementById('score').innerHTML = `You have Scored: ${Math.floor((score/questions.length)*100)}%`;
    document.getElementById('Submitt').innerHTML = 'Quiz Submitted';
    
}

function displayNone(id){
    setInterval(()=>document.getElementById(id).style = "display:none",90,);
    let contain1 = document.getElementById('container1').innerHTML;
    let contain2 = document.getElementById('container2').innerHTML;
    let contain3 = document.getElementById('container3').innerHTML;
    let contain4 = document.getElementById('container4').innerHTML;
    let contain5 = document.getElementById('container5').innerHTML;
    let contain6 = document.getElementById('container6').innerHTML;
    let contain7 = document.getElementById('container7').innerHTML;
    let contain8 = document.getElementById('container8').innerHTML;
    let contain9 = document.getElementById('container9').innerHTML;
    let contain10 = document.getElementById('container10').innerHTML;

    document.getElementById('container1.1').innerHTML = contain1;
    document.getElementById('container1.2').innerHTML = contain2;
    document.getElementById('container1.3').innerHTML = contain3;
    document.getElementById('container1.4').innerHTML = contain4;
    document.getElementById('container1.5').innerHTML = contain5;
    document.getElementById('container1.6').innerHTML = contain6;
    document.getElementById('container1.7').innerHTML = contain7;
    document.getElementById('container1.8').innerHTML = contain8;
    document.getElementById('container1.9').innerHTML = contain9;
    document.getElementById('container1.10').innerHTML = contain10;
}

function message(){
    let scorePercent = Math.floor((score/questions.length)*100);
    if(scorePercent === 100){
    document.getElementById('message').innerHTML = 'Excellent!!!!'
    }else if(scorePercent >= 90){
        document.getElementById('message').innerHTML = 'Great Work!!!!'
    }else if(scorePercent >= 80){
        document.getElementById('message').innerHTML = 'Well done!!!!'
    }else if(scorePercent >= 60){
        document.getElementById('message').innerHTML = 'Try harder!!!!'
    }else{
        document.getElementById('message').innerHTML = 'OMG....Seek Guidance ASAP!!!!'
    }
    
}

function eliminate(){
    document.getElementById('progress').style = "display:none;"
    document.getElementById('quizNum').style = "display:none;"
    
}

function reload(){
    setInterval(() => {
        document.getElementById('tests').innerHTML = 'Scroll down to Review the test';
        document.getElementById('tests').style = "color:yellow; font-size:23px;";
        /*alert('Think you can Do better?\n.....REFRESH THE PAGE.....\n Then..You Can also Proceed to the next TEST');*/
    }, 100); 
}

function reviewQN(){
    document.getElementById('container11').style = "height:3000px; position:relative; width:80%; background: rgb(122, 56, 56); z-index:-1;"
}
function showlib(){
    document.getElementById('library').style = "display:block;"
}


