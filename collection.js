const COLLECTION = [
    {
    name: "Battlefield 2042",
    genre:["Action", "adventure"],
    realeseYear:"2021",
    devloper:"Dice",
    publisher: "Electronic Arts",
    description:"Multiplayers FPS & PVP", 
    },
  
    {
    name: "World of Warcraft",
    genre:"MMORPG",
    realeseYear:"2004",
    devloper:"Blizzard",
    publisher:"Blizzard",
    description:"Multiplayers role player game based on the lore of warcraft series", 
    },

    {
    name: "Path of Exile",
    genre:["Action", "aventure", "free to play", "indy", "MMO", "RPG"],
    realeseYear:"2013",
    devloper:"Grinding Gear Games",
    publisher:"Grinding Gear Games",
    description:"Path of exiles is a free to play hack'n slash ", 
    },

    {
    name: "New World",
    genre:"MMORPG",
    realeseYear:"2021",
    devloper:"Amazon Games",
    publisher:"Amazon Games",
    description:"New World is the first big game of Amazon. It's a MMORPG oriented on PVP & farming", 
    },
    
    {
    name: "Monster Hunter World",
    genre:"Action",
    realeseYear:"2018",
    devloper:"CAPCOM",
    publisher:"CAPCOM",
    description:"Monster Hunter World is a player versus environement solo or coop game. Hunt boss and collect materials to craft gear and be more powerfull", 
    },
        
    {
    name: "ARK",
    genre:["Action","survival", "adventure", "MMO", "RPG", "indie"],
    realeseYear:"2017",
    devloper:["Studio Wildcard", "Instinct Games", "Efecto Studios", "Virtual Basement LLC"],
    publisher:"Studio Wildcard",
    description:"ARK is MMO survival game with dinosaurs. Collect ressources, craft gear, tame dino and beat boss or players", 
    },
    
    {
    name: "Rust",
    genre:["Action", "survival", "adventure", "MMO", "RPG", "indide"],
    realeseYear:"2018",
    devloper:"Facepuch Studio",
    publisher:"Facepunch Studio",
    description:"Rust is a game where you need to collect ressources to be more powerfull and beat other players before they do", 
    },
        
    {
    name: "Payday 2",
    genre:["Action", "RPG"],
    realeseYear:"2013",
    devloper:"OVERKILL - a starbreeze Studio",
    publisher:"Starbreeze Publishing AB",
    description:"Payday 2 is a single player or coop bank heist game. You can do it stealth or kill as much people you want", 
    },
    
    {
    name: "War Z",
    genre:"Survival horror",
    realeseYear:"2012",
    devloper:"Hammerpoint Interactive",
    publisher:"Op Production",
    description:"War Z was a survival pvp game where you need to survive againt zombie and other player", 
    },
    
    {
    name: "Risk of Rain 2",
    genre:["Action", "indie"],
    realeseYear:"2020",
    devloper:"Hopoo Games",
    publisher:"Gearbox Publishing",
    description:"Risk of Rain 2 is a fast action game where you need to beat mobs and boss and progress tough multiple stage to beat the final boss or beat infinit stage till you dies", 
    },

  ];

  for (item of COLLECTION) {
      
  }


  for (const game of COLLECTION) {
    console.log(game); 
    let div = document.createElement("div");
    div.innerHTML = game.name
    document.querySelector("main").append(div)
  
  
  }
  