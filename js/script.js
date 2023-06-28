const chart = document.getElementById("chart")
const typeName = document.getElementById("type-name")
const strengths = document.getElementById("strengths")
const innefective = document.getElementById("innefective")
const futilities = document.getElementById("futilities")
const weaknesses = document.getElementById("weaknesses")
const resistances = document.getElementById("resistances")
const immunities = document.getElementById("immunities")

const allTypes = [
    {
        Type: "Normal",
        // Offense
        Strengths: [],
        Inefficiencies: ["Rock", "Steel"],
        Futilities: ["Ghost"],
        // Defense
        Weaknesses: ["Fighting"],
        Resistances: [],
        Immunities: ["Ghost"],
        Icon: "images/normal.png"
    },
    {
        Type: "Fire",
        // Offense
        Strengths: ["Grass", "Ice", "Bug", "Steel"],
        Inefficiencies: ["Fire", "Water", "Rock", "Dragon"],
        Futilities: [],
        // Defense
        Weaknesses: ["Water", "Ground", "Rock"],
        Resistances: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        Immunities: [],
        Icon: "images/fire.png"
    },
    {
        Type: "Water",
        // Offense
        Strengths: ["Fire", "Ground", "Rock"],
        Inefficiencies: ["Water", "Grass", "Dragon"],
        Futilities: [],
        // Defense
        Weaknesses: ["Electric", "Grass"],
        Resistances: ["Fire", "Water", "Ice", "Steel"],
        Immunities: [],
        Icon: "images/water.png"
    },
    {
        Type: "Electric",
        // Offense
        Strengths: ["Water", "Flying"],
        Inefficiencies: ["Electric", "Grass", "Dragon"],
        Futilities: ["Ground"],
        // Defense
        Weaknesses: ["Ground"],
        Resistances: ["Electric", "Flying", "Steel"],
        Immunities: [],
        Icon: "images/electric.png"
    },
    {
        Type: "Grass",
        // Offense
        Strengths: ["Water", "Ground", "Rock"],
        Inefficiencies: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"],
        Futilities: [],
        // Defense
        Weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug"],
        Resistances: ["Water", "Electric", "Grass", "Ground"],
        Immunities: [],
        Icon: "images/grass.png"
    },
    {
        Type: "Ice",
        // Offense
        Strengths: ["Grass", "Ground", "Flying", "Dragon"],
        Inefficiencies: ["Fire", "Water", "Ice", "Steel"],
        Futilities: [],
        // Defense
        Weaknesses: ["Fire", "Fighting", "Rock", "Steel"],
        Resistances: ["Ice"],
        Immunities: [],
        Icon: "images/ice.png"
    },
    {
        Type: "Fighting",
        // Offense
        Strengths: ["Normal", "Ice", "Rock", "Dark", "Steel"],
        Inefficiencies: ["Poison", "Flying", "Psychic", "Bug", "Fairy"],
        Futilities: ["Ghost"],
        // Defense
        Weaknesses: ["Flying", "Psychic", "Fairy"],
        Resistances: ["Bug", "Rock", "Dark"],
        Immunities: [],
        Icon: "images/fighting.png"
    },
    {
        Type: "Poison",
        // Offense
        Strengths: ["Grass", "Fairy"],
        Inefficiencies: ["Poison", "Ground", "Rock", "Ghost"],
        Futilities: ["Steel"],
        // Defense
        Weaknesses: ["Ground", "Psychic"],
        Resistances: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        Immunities: [],
        Icon: "images/poison.png"
    },
    {
        Type: "Ground",
        // Offense
        Strengths: ["Fire", "Electric", "Poison", "Rock", "Steel"],
        Inefficiencies: ["Grass", "Bug"],
        Futilities: ["Flying"],
        // Defense
        Weaknesses: ["Water", "Grass", "Ice"],
        Resistances: ["Poison", "Rock"],
        Immunities: ["Electric"],
        Icon: "images/ground.png"
    },
    {
        Type: "Flying",
        // Offense
        Strengths: ["Grass", "Fighting", "Bug"],
        Inefficiencies: ["Electric", "Rock", "Steel"],
        Futilities: [],
        // Defense
        Weaknesses: ["Electric", "Ice", "Rock"],
        Resistances: ["Grass", "Fighting", "Bug"],
        Immunities: ["Ground"],
        Icon: "images/flying.png"
    },
    {
        Type: "Psychic",
        //Offense
        Strengths: ["Fighting", "Poison"],
        Inefficiencies: ["Psychic", "Steel"],
        Futilities: ["Dark"],
        // Defense
        Weaknesses: ["Bug", "Ghost", "Dark"],
        Resistances: ["Fighting", "Psychic"],
        Immunities: [],
        Icon: "images/psychic.png"
    },
    {
        Type: "Bug",
        //Offense
        Strengths: ["Grass", "Psychic", "Dark"],
        Inefficiencies: ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"],
        Futilities: [],
        // Defense
        Weaknesses: ["Fire", "Flying", "Rock"],
        Resistances: ["Grass", "Fighting", "Ground"],
        Immunities: [],
        Icon: "images/bug.png"
    },
    {
        Type: "Rock",
        //Offense
        Strengths: ["Fire", "Ice", "Flying", "Bug"],
        Inefficiencies: ["Fighting", "Ground", "Steel"],
        Futilities: [],
        // Defense
        Weaknesses: ["Water", "Grass", "Fighting", "Ground", "Steel"],
        Resistances: ["Normal", "Fire", "Poison", "Flying"],
        Immunities: [],
        Icon: "images/rock.png"
    },
    {
        Type: "Ghost",
        //Offense
        Strengths: ["Psychic", "Ghost"],
        Inefficiencies: ["Dark"],
        Futilities: ["Normal"],
        // Defense
        Weaknesses: ["Ghost", "Dark"],
        Resistances: ["Poison", "Bug"],
        Immunities: ["Normal", "Fighting"],
        Icon: "images/ghost.png"
    },
    {
        Type: "Dragon",
        //Offense
        Strengths: ["Dragon"],
        Inefficiencies: ["Steel"],
        Futilities: ["Fairy"],
        // Defense
        Weaknesses: ["Ice", "Dragon", "Fairy"],
        Resistances: ["Fire", "Water", "Electric", "Grass"],
        Immunities: [],
        Icon: "images/dragon.png"
    },
    {
        Type: "Dark",
        //Offense
        Strengths: ["Psychic", "Ghost"],
        Inefficiencies: ["Fighting", "Dark", "Fairy"],
        Futilities: [],
        // Defense
        Weaknesses: ["Fighting", "Bug", "Fairy"],
        Resistances: ["Ghost", "Dark"],
        Immunities: ["Psychic"],
        Icon: "images/dark.png"
    },
    {
        Type: "Steel",
        //Offense
        Strengths: ["Ice", "Rock", "Fairy"],
        Inefficiencies: ["Fire", "Water", "Electric", "Steel"],
        Futilities: [],
        // Defense
        Weaknesses: ["Fire", "Fighting", "Ground"],
        Resistances: ["Normal", "Grass", "Ice", "Flying", "Psychic", "Bug", "Rock", "Dragon", "Steel", "Fairy"],
        Immunities: ["Poison"],
        Icon: "images/steel.png"
    },
    {
        Type: "Fairy",
        //Offense
        Strengths: ["Fighting", "Dragon", "Dark"],
        Inefficiencies: ["Fire", "Poison", "Steel"],
        Futilities: [],
        // Defense
        Weaknesses: ["Poison", "Steel"],
        Resistances: ["Fighting", "Bug", "Dark"],
        Immunities: ["Dragon"],
        Icon: "images/fairy.png"
    }
]
// Detect selected type
function getType(){
    let type = document.getElementById("types");
    return type
}

// clear the current type chart
function clear() {
    typeName.innerHTML = "";
    strengths.innerHTML = "";
    innefective.innerHTML = "";
    futilities.innerHTML = "";
    weaknesses.innerHTML = "";
    resistances.innerHTML = "";
    immunities.innerHTML = "";
}

// fill the type chart with the info
function fillStrengths(tn) {
    // fill in type strengths
    let colString = "<ul>";
    let tempArray = allTypes.find(t => {return t.Type === `${tn}`});
    let colStr = tempArray.Strengths.map(function (step) {
        return `<li>${step}</li>`;
    });
    
    colString += colStr.join("");
    colString += "</ul>"; 
    strengths.innerHTML = colString;
}

function fillIneffective(tn) {
    // fill in type strengths
    let colString = "<ul>";
    let tempArray = allTypes.find(t => {return t.Type === `${tn}`});
    let colStr = tempArray.Inefficiencies.map(function (step) {
        return `<li>${step}</li>`;
    });
    
    colString += colStr.join("");
    colString += "</ul>"; 
    innefective.innerHTML = colString;
}

function fillFutilities(tn) {
    // fill in type strengths
    let colString = "<ul>";
    let tempArray = allTypes.find(t => {return t.Type === `${tn}`});
    let colStr = tempArray.Futilities.map(function (step) {
        return `<li>${step}</li>`;
    });
    colString += colStr.join("");
    colString += "</ul>"; 
    futilities.innerHTML = colString;
}

function fillWeaknesses(tn) {
    // fill in type strengths
    let colString = "<ul>";
    let tempArray = allTypes.find(t => {return t.Type === `${tn}`});
    let colStr = tempArray.Weaknesses.map(function (step) {
        return `<li>${step}</li>`;
    });
    colString += colStr.join("");
    colString += "</ul>"; 
    weaknesses.innerHTML = colString;
}

function fillResistances(tn) {
    // fill in type strengths
    let colString = "<ul>";
    let tempArray = allTypes.find(t => {return t.Type === `${tn}`});
    let colStr = tempArray.Resistances.map(function (step) {
        return `<li>${step}</li>`;
    });
    colString += colStr.join("");
    colString += "</ul>"; 
    resistances.innerHTML = colString;
}

function fillImmunities(tn) {
    // fill in type strengths
    let colString = "<ul>";
    let tempArray = allTypes.find(t => {return t.Type === `${tn}`});
    let colStr = tempArray.Immunities.map(function (step) {
        return `<li>${step}</li>`;
    });
    colString += colStr.join("");
    colString += "</ul>"; 
    immunities.innerHTML = colString;
}


function generate() {
    clear();
    let type = types.value;
    typeName.innerHTML = `${type}`;
    fillStrengths(type);
    fillIneffective(type);
    fillFutilities(type);
    fillWeaknesses(type);
    fillResistances(type);
    fillImmunities(type);
}

document.getElementById("submit").addEventListener("click", generate);