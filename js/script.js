const chart = document.getElementById("chart")
const allTypes = {
    normal: {
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
    fire: {
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
    water: {
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
    electric: {
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
    grass: {
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
    ice: {
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
    fighting: {
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
    poison: {
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
    ground: {
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
    flying: {
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
    psychic: {
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
    bug: {
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
    rock: {
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
    ghost: {
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
    dragon: {
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
    dark: {
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
    steel: {
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
    fairy: {
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
}
// Detect selected type

// Insert info into chart
    // image

    // offense

    // defense

