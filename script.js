const COLLECTION = [
    {
    image: '<img src="images/battlefield.jpg" alt="" class="gameimg">',
    name: "Battlefield 2042",
    genre:["Genre : " + "Action"+ " adventure"],
    releaseYear:"Release year :" + " 2021",
    developer:"developer :" + " Dice",
    publisher: "Publisher : Electronic Arts",
    },
  
    {
    image: '<img src="images/wow.jpg" alt="" class="gameimg">',
    name: "World of Warcraft",
    genre:"Genre : MMORPG",
    releaseYear:"Release year : 2004",
    developer:"developer : Blizzard",
    publisher:"Publisher : Blizzard",
    },

    {
    image: '<img src="images/poe.jpg" alt="" class="gameimg">',
    name: "Path of Exile",
    genre:["Genre : Hack'n slash"],
    releaseYear:"Release year : 2013",
    developer:"developer : Grinding Gear Games",
    publisher:"Publisher : Grinding Gear Games",
    },

    {
    image: '<img src="images/newworld.jpg" alt="" class="gameimg">',
    name: "New World",
    genre:"Genre : MMORPG",
    releaseYear:"Release year : 2021",
    developer:"developer : Amazon Games",
    publisher:"Publisher : Amazon Games",
    },
    
    {
    image: '<img src="images/mhw.jpg" alt="" class="gameimg">',
    name: "Monster Hunter World",
    genre:"Genre : Action",
    releaseYear:"Release year : 2018",
    developer:"developer : CAPCOM",
    publisher:"Publisher : CAPCOM",
    },
        
    {
    image: '<img src="images/ark.jpg" alt="" class="gameimg">',
    name: "ARK",
    genre:["Genre : Action"," survival", " adventure"],
    releaseYear:"Release year : 2017",
    developer:["developer : Studio Wildcard"],
    publisher:"Publisher : Studio Wildcard",
    },
    
    {
    image: '<img src="images/rust.jpg" alt="" class="gameimg">',
    name: "Rust",
    genre:["Genre : Action", " survival", " adventure"],
    releaseYear:"Release year : 2018",
    developer:"developer : Facepuch Studio",
    publisher:"Publisher : Facepunch Studio",
    },
        
    {
    image: '<img src="images/payday.jpg" alt="" class="gameimg">',
    name: "Payday 2",
    genre:["Genre : Action", " RPG"],
    releaseYear:"Release year : 2013",
    developer:"developer : OVERKILL - a starbreeze Studio",
    publisher:"Publisher : Starbreeze Publishing AB",
    },
    
    {
    image: '<img src="images/warz.jpg" alt="" class="gameimg">',
    name: "War Z",
    genre:"Genre : Survival horror",
    releaseYear:"Release year : 2012",
    developer:"developer : Hammerpoint Interactive",
    publisher:"Publisher : Op Production",
    },
    
    {
    image: '<img src="images/ror2.jpg" alt="" class="gameimg">',
    name: "Risk of Rain 2",
    genre:["Genre : Action", " indie"],
    releaseYear:"Release year : 2020",
    developer:"developer : Hopoo Games",
    publisher:"Publisher : Gearbox Publishing",
    },

  ];
let body = document.body;

let moi = document.createElement("img")
moi.setAttribute('src', 'images/moi.png');
moi.setAttribute('class', 'moi')
document.querySelector("header").append(moi)

let hh1 = document.createElement("h1")
hh1.innerHTML = "Dylan\'s Collection";
document.querySelector("header").append(hh1);

let hp = document.createElement("p")
hp.setAttribute("class", "header")
hp.innerHTML = "There is my Collection of the game I played the most."
document.querySelector("header").append(hp);

let section = document.createElement("section");
section.setAttribute("class", "cont")
document.querySelector("main").append(section);

for (const game of COLLECTION) { 
    let article = document.createElement("article");
    article.innerHTML = 
    game.image +
    "<h3>" + game.name + "</h3>"+
    "<h4>" + game.genre +"</h4>"+
    "<h4>" + game.developer +"</h4>"+
    "<h4>" + game.publisher +"</h4>"+
    "<h4>" + game.releaseYear +"</h4>";
    document.getElementsByTagName("section")[0].appendChild(article);
  }