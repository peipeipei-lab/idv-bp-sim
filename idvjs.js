


/*=====================
   CHARACTER DATA 
=====================*/
const survivors = [
  { id: "doctor", name: "Doctor"},
  { id: "lawyer", name: "Lawyer"},
  { id: "thief", name: "Thief"},
  { id: "gardener", name: "Gardener",},
  { id: "magician", name: "Magician"},
  { id: "explorer", name: "Explorer"},
  { id: "mercenary", name: "Mercenary",},
  { id: "coordinator", name: "Coordinator",},
  { id: "priestess", name: "Priestess",},
  { id: "mechanic", name: "Mechanic",},
  { id: "forward", name: "Forward"},
  { id: "tme", name: "The Mind's Eye"},
  { id: "perfumer", name: "Perfumer"},
  { id: "cowboy", name: "Cowboy"},
  { id: "female_dancer", name: "Female Dancer",},
  { id: "seer", name: "Seer",},
  { id: "embalmer", name: "Embalmer",},
  { id: "prospector", name: "Prospector",},
  { id: "enchantress", name: "Enchantress",},
  { id: "wildling", name: "Wildling",},
  { id: "acrobat", name: "Acrobat",},
  { id: "first_officer", name: "First Officer",},
  { id: "barmaid", name: "Barmaid",},
  { id: "postman", name: "Postman",},
  { id: "gravekeeper", name: "Gravekeeper",},
  { id: "prisoner", name: "Prisoner",},
  { id: "entomologist", name: "Entomologist",},
  { id: "painter", name: "Painter",},
  { id: "batter", name: "Batter",},
  { id: "toy_merchant", name: "Toy Merchant",},
  { id: "patient", name: "Patient",},
  { id: "psychologist", name: "Psychologist",},
  { id: "novelist", name: "Novelist",},
  { id: "little_girl", name: "Little Girl",},
  { id: "weepy", name: "Weeping Clown",},
  { id: "professor", name: "Professor",},
  { id: "antiquarian", name: "Antiquarian",},
  { id: "composer", name: "Composer",},
  { id: "journalist", name: "Journalist",},
  { id: "aeroplanist", name: "Aeroplanist",},
  { id: "cheerleader", name: "Cheerleader",},
  { id: "puppeteer", name: "Puppeteer",},
  { id: "fire_investigator", name: "Fire Investigator",},
  { id: "faro_lady", name: "Faro Lady",},
  { id: "knight", name: "Knight",},
  { id: "meteor", name: "Meteorologist",},
  { id: "archer", name: "Archer",},
  { id: "escapologist", name: "Escapologist",},
  { id: "lanternist", name: "Lanternist",},
  { id: "matador", name: "Matador",},
  { id: "lucky_guy", name: "Lucky Guy",},
];
const hunters = [
  { id: "hell_ember", name: "Hell Ember"},
  { id: "smiley", name: "Smiley Face"},
  { id: "gamekeeper", name: "Gamekeeper"},
  { id: "ripper", name: "The Ripper"},
  { id: "soul_weaver", name: "Soul Weaver"},
  { id: "geisha", name: "Geisha"},
  { id: "wu_chang", name: "Wu Chang"},
  { id: "photographer", name: "Photographer"},
  { id: "mad_eyes", name: "Mad Eyes"},
  { id: "feaster", name: "The Feaster"},
  { id: "dream_witch", name: "Dream Witch"},
  { id: "axe_boy", name: "Axe Boy"},
  { id: "reptilian", name: "Evil Reptilian"},
  { id: "bloody_queen", name: "Bloody Queen" },
  { id: "guard_26", name: "Guard 26"},
  { id: "disciple", name: "Disciple"},
  { id: "violinist", name: "Violinist"},
  { id: "sculptor", name: "Sculptor"},
  { id: "undead", name: "Undead"},
  { id: "wheel", name: "Wheel"},
  { id: "naiad", name: "Naiad"},
  { id: "wax", name: "Wax Artist"},
  { id: "nightmare", name: "Nightmare"},
  { id: "clerk", name: "Clerk"},
  { id: "hermit", name: "Hermit"},
  { id: "nightwatch", name: "Night Watch"},
  { id: "opera", name: "Opera Singer"},
  { id: "fools_gold", name: "Fool's Gold"},
  { id: "the_shadow", name: "The Shadow"},
  { id: "goatman", name: "Goatman"},
  { id: "hullabaloo", name: "Hullabaloo"},
  { id: "peddler", name: "Peddler"},
  { id: "cueist", name: "Cueist"},
  { id: "queen_bee", name: "Queen Bee"},
];

const characters = [...survivors, ...hunters];

/*=====================
   FORMAT DEFINITIONS
=====================*/

const FORMATS = {
  rank: {
    name: "Rank Format",
    steps: [
      { side: "survivor", action: "ban", count: 3 },
      { side: "hunter", action: "ban", count: 3 },
      { side: "survivor", action: "pick", count: 4 },
      { side: "hunter", action: "pick", count: 1 }
    ]
  },

  round1: {
    name: "Round 1",
    steps: [
      { side: "survivor", action: "ban", count: 2 },
      { side: "survivor", action: "pick", count: 2 },
      { side: "survivor", action: "ban", count: 1 },
      { side: "survivor", action: "pick", count: 1 },
      { side: "survivor", action: "ban", count: 1 },
      { side: "survivor", action: "pick", count: 1 },
      { side: "hunter", action: "pick", count: 1 }
    ]
  },

  round2: {
    name: "Round 2",
    steps: [
      { side: "hunter", action: "ban", count: 1 },
      { side: "survivor", action: "ban", count: 2 },
      { side: "survivor", action: "pick", count: 2 },
      { side: "survivor", action: "ban", count: 1 },
      { side: "survivor", action: "pick", count: 1 },
      { side: "survivor", action: "ban", count: 1 },
      { side: "survivor", action: "pick", count: 1 },
      { side: "hunter", action: "pick", count: 1 }
    ]
  },


  round3: {
    name: "Round 3",
    steps: [
      { side: "hunter", action: "ban", count: 2 },
      { side: "survivor", action: "ban", count: 2 },
      { side: "survivor", action: "pick", count: 2 },
      { side: "survivor", action: "ban", count: 1 },
      { side: "survivor", action: "pick", count: 1 },
      { side: "survivor", action: "ban", count: 1 },
      { side: "survivor", action: "pick", count: 1 },
      { side: "hunter", action: "pick", count: 1 }
    ]
  },
};

/*=====================
   LOGIC
=====================*/

const backgrounds = ["bg-0", "bg-1", "bg-2", "bg-3", "bg-4", "bg-5", "bg-6"];
let currentBg = 0;

document.body.classList.add(backgrounds[currentBg]);

document.getElementById("bgCycleBtn").onclick = () => {
  document.body.classList.remove(backgrounds[currentBg]);

  currentBg = (currentBg + 1) % backgrounds.length;

  document.body.classList.add(backgrounds[currentBg]);
};

let currentFormat = FORMATS.rank;
let stepIndex = 0;
let stepProgress = 0;

let survivorBans = [];
let hunterBans = [];
let survivorPicks = [];
let hunterPick = [];

function currentPhase() {
  return currentFormat.steps[stepIndex] ?? null;
}

function isTaken(char) {
  return (
    survivorBans.includes(char.name) ||
    hunterBans.includes(char.name) ||
    survivorPicks.includes(char.name) ||
    hunterPick.includes(char.name)
  );
}

const bpformat = document.getElementById("bpformat");
const formatOptions = document.getElementById("bpformatdrop");
const selectedFormat = document.getElementById("selectedFormat");

bpformat.onclick = () => {
  formatOptions.classList.toggle("hidden");
};

document.querySelectorAll(".dropdown-item").forEach(item => {
  item.onclick = () => {

    const key = item.dataset.format;

    currentFormat = FORMATS[key];

    selectedFormat.textContent = "Selected Format: " + currentFormat.name;

    stepIndex = 0;
    stepProgress = 0;

    survivorBans = [];
    hunterBans = [];
    survivorPicks = [];
    hunterPick = [];

    formatOptions.classList.add("hidden");

    render();
  };
});

function advancePhase() {
  stepProgress++;

  const step = currentFormat.steps[stepIndex];

  if (stepProgress >= step.count) {
    stepIndex++;
    stepProgress = 0;
  }

  render();
}

const resetButton = document.getElementById("resetButton");


resetButton.onclick = () => {
  stepIndex = 0;
  stepProgress = 0;

  survivorBans = [];
  hunterBans = [];
  survivorPicks = [];
  hunterPick = [];

  render();
};

function selectCharacter(char) {
  if (isTaken(char)) return;

  const isSurvivor = survivors.includes(char);
  const isHunter = hunters.includes(char);

  const phase = currentPhase();

  if (phase.side === "survivor" && phase.action === "ban" && isSurvivor) {
    survivorBans.push(char.name);
    advancePhase();
  }

  else if (phase.side === "hunter" && phase.action === "ban" && isHunter) {
    hunterBans.push(char.name);
    advancePhase();
  }

  else if (phase.side === "survivor" && phase.action === "pick" && isSurvivor) {
    survivorPicks.push(char.name);
    advancePhase();
  }

  else if (phase.side === "hunter" && phase.action === "pick" && isHunter) {
    hunterPick.push(char.name);
    advancePhase();
  }

  render();
}
/*=====================
   RENDERING
=====================*/

function renderCharacterButtons(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  list.forEach(char => {
    const taken =
      survivorBans.includes(char.name) ||
      hunterBans.includes(char.name) ||
      survivorPicks.includes(char.name) ||
      hunterPick.includes(char.name);

    const btn = document.createElement("button");

    if (survivorBans.includes(char.name) || hunterBans.includes(char.name)) {
      btn.classList.add("disabled"); 
}

else if (survivorPicks.includes(char.name) || hunterPick.includes(char.name)) {
  btn.classList.add("picked");
}

    const img = document.createElement("img");

    if (list === survivors) {
      img.src = "icons/survivor/" + char.id + ".png";
    } else {
      img.src = "icons/hunter/" + char.id + ".png";

      
}

img.alt = char.name;

btn.appendChild(img);

    btn.onclick = () => selectCharacter(char);
    container.appendChild(btn);
  });
}

function render() {
  const phase = currentPhase();

  if (!phase) {
    document.getElementById("phase").textContent = "Draft Finished";
  } else {
    document.getElementById("phase").textContent =
      phase.side.toUpperCase() + " " + phase.action.toUpperCase();
  }

  renderCharacterButtons(survivors, "survivorss");
  renderCharacterButtons(hunters, "hunterss");

  updateList("survivorBans", survivorBans);
  updateList("hunterBans", hunterBans);
  updateList("survivorPicks", survivorPicks);
  updateList("hunterPick", hunterPick);
}

function updateList(id, arr) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  arr.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

}


render();


