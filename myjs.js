var getPokedex = document.getElementById("pokedexDisplay"),
    getCorner1 = document.getElementById("corner1"),
    getCorner2 = document.getElementById("corner2"),
    getArrow = document.getElementById("arrow"),
    getBag = document.getElementById("bag");

var BulbasaurMoves = {"1":"Lv 1: Tackle","2":"Lv 3: Growl","3":"Lv 7: Leech Seed","4":"Lv 9: Vine Whip","5":"Lv 13: Sleep Powder","6":"Lv 13: Poison Powder","7":"Lv 19: Razor Leaf","8":"Lv 21: Sweet Scent","9":"Lv 25: Growth","10":"Lv 27: Double-Edge","11":"Lv 31: Worry Seed","12":"Lv 33: Synthesis","13":"Lv 37: Seed Bomb"},
    SquirtleMoves = {"1":"Lv 1: Tackle","2":"Lv 4: Tail Whip","3":"Lv 7: Water Gun","4":"Lv 10:Withdraw","5":"Lv 13: Bubble","6":"Lv 16: Bite","7":"Lv 19: Rapid Spin","8":"Lv 25: Water Pulse","9":"Lv 28: Aqua Tail","10":"Lv 31: Skull Bash","11":"Lv 34: Iron Defense","12":"Lv 37: Rain Dance","13":"Lv 40: Hydro Pump"},
    PikachuMoves = {"1":"Lv 1: Thunder Shock","2":"Lv 7: Play Nice","3":"Lv 10: Quick Attack","4":"Lv 13:Electro Ball","5":"Lv 21: Feint","6":"Lv 23: Double Team","7":"Lv 26: Spark","8":"Lv 29: Nuzzle","9":"Lv 34: Discharge","10":"Lv 37: Slam","11":"Lv 42: Thunderbolt","12":"Lv 50: Wild Charge","13":"Lv 58: Thunder"};

var open_close = "open",
    bubble1 = "notclicked",
    bubble2 = "notclicked",
    option = "",
    run = "notOn",
    Pokemons = "notPressed",
    bubble3 = "notclicked",
    bubble4 = "notclicked",
    bubble5 = "notclicked",
    bubble6 = "notclicked",
    bubble7 = "notclicked",
    bubble8 = "notclicked",
    bubble9 = "notclicked";

function questionMark(){
    document.getElementById("PokemonNumber").innerHTML = "#??";
    document.getElementById("PokemonNumber").style.color = "black";
    document.getElementById("PokemonName").innerHTML = "???";
    document.getElementById("PokemonName").style.color = "black";
    document.getElementById("Type1").style.opacity = "0";
    document.getElementById("Type2").style.opacity = "0";
    document.getElementById("MaleFemale").style.opacity = "0";
    document.getElementById("StatsGraph").style.opacity = "0";
    document.getElementById("PokemonImgs").src = "question2.png"
    document.getElementById("PokemonImgs").style.width = "30%";
    document.getElementById("PokemonImgs").style.height = "40%";
    document.getElementById("PokemonImgs").style.top = "-5%";
    document.getElementById("PokemonImgs").style.right = "34%";
    document.getElementById("Ability3").style.color = "black";
    document.getElementById("DescriptionContent").innerHTML = "???";
    document.getElementById("Ability1").innerHTML = "???";
    document.getElementById("Ability2").innerHTML = "???";
    document.getElementById("Ability3").innerHTML = "???";
    document.getElementById("AreaImg").style.opacity = "0";
    document.getElementById("AreaContent").innerHTML = "???";
    document.getElementById("AreaContent").style.left = "0%";
    for (var i=1;i<=13;i++){
        document.getElementById("Move"+i).innerHTML = "???";
    }
};

function changeSquirtle(){
    document.getElementById("PokemonNumber").innerHTML = "#007";
    document.getElementById("PokemonNumber").style.color = "blue";
    document.getElementById("PokemonName").innerHTML = "Squirtle";
    document.getElementById("PokemonName").style.color = "blue";
    document.getElementById("Type1").src = "water.png";
    document.getElementById("Type2").style.opacity = "0";
    document.getElementById("Type1").style.opacity = "1";
    document.getElementById("MaleFemale").src = "MaleFemale1.png";
    document.getElementById("PokemonImgs").src = "Squirtle.gif";
    document.getElementById("MaleFemale").style.opacity = "1";
    document.getElementById("StatsGraph").style.opacity = "1";
    document.getElementById("Ability2").innerHTML = "None";
    document.getElementById("PokemonImgs").style.opacity = "1";
    document.getElementById("PokemonImgs").style.width = "30%";
    document.getElementById("PokemonImgs").style.height = "40%";
    document.getElementById("PokemonImgs").style.top = "-5%";
    document.getElementById("AreaImg").style.opacity = "1";
    document.getElementById("AreaContent").style.left = "35%";
    document.getElementById("PokemonImgs").style.right = "34%";
    document.getElementById("Ability3").style.color = "blue";
    document.getElementById("StatsGraph").src = "stats3.png";
    document.getElementById("DescriptionContent").innerHTML = "Shoots water at prey while in the water. Withdrawl into its shells when in danger.";
    document.getElementById("Ability1").innerHTML = "Torrent";
    document.getElementById("Ability3").innerHTML = "Rain Dish";
    document.getElementById("AreaImg").src = "SquirtleArea.png";
    document.getElementById("AreaContent").innerHTML = "Vermillion City";
    for (var key in SquirtleMoves){
        document.getElementById("Move"+key).innerHTML = SquirtleMoves[key];
    };
}


function changeBulbasaur(){
    document.getElementById("PokemonNumber").innerHTML = "#001";
    document.getElementById("PokemonNumber").style.color = "green";
    document.getElementById("PokemonName").innerHTML = "Bulbasaur";
    document.getElementById("PokemonName").style.color = "green";
    document.getElementById("Type1").src = "grass.png";
    document.getElementById("Type1").style.opacity = "1";
    document.getElementById("Type2").style.opacity = "1";
    document.getElementById("MaleFemale").style.opacity = "1";
    document.getElementById("StatsGraph").style.opacity = "1";
    document.getElementById("PokemonImgs").style.opacity = "1";
    document.getElementById("Ability2").innerHTML = "None";
    document.getElementById("Type2").src = "poison.png";
    document.getElementById("MaleFemale").src = "MaleFemale1.png";
    document.getElementById("AreaImg").style.opacity = "1";
    document.getElementById("PokemonImgs").src = "Bulbasaur.gif";
    document.getElementById("PokemonImgs").style.width = "45%";
    document.getElementById("AreaContent").style.left = "35%";
    document.getElementById("PokemonImgs").style.height = "90%";
    document.getElementById("PokemonImgs").style.top = "-25%";
    document.getElementById("PokemonImgs").style.right = "27%";
    document.getElementById("Ability3").style.color = "green";
    document.getElementById("StatsGraph").src = "stats.png";
    document.getElementById("DescriptionContent").innerHTML = "For some time after its birth, it grows by gaining nourishment from the seed on its back.";
    document.getElementById("Ability1").innerHTML = "Overgrow";
    document.getElementById("Ability3").innerHTML = "Chlorophyll";
    document.getElementById("AreaImg").src = "BulbasaurArea.png";
    document.getElementById("AreaContent").innerHTML = "Safari Area 2";
    for (var key in BulbasaurMoves){
        document.getElementById("Move"+key).innerHTML = BulbasaurMoves[key];
    };
};

function changePikachu(){
    document.getElementById("PokemonNumber").innerHTML = "#014";
    document.getElementById("PokemonNumber").style.color = "rgba(255,153,0,0.8)"
    document.getElementById("PokemonName").innerHTML = "Pikachu";
    document.getElementById("PokemonName").style.color = "rgba(255,153,0,0.8)"
    document.getElementById("Type1").src = "electric.png";
    document.getElementById("Type1").style.opacity = "1";
    document.getElementById("Ability2").innerHTML = "None";
    document.getElementById("Type2").style.opacity = "0";
    document.getElementById("MaleFemale").style.opacity = "1";
    document.getElementById("AreaImg").style.opacity = "1";
    document.getElementById("StatsGraph").style.opacity = "1";
    document.getElementById("PokemonImgs").style.opacity = "1";
    document.getElementById("AreaContent").style.left = "35%";
    document.getElementById("MaleFemale").src = "MaleFemale2.png";
    document.getElementById("PokemonImgs").src = "Pikachu.gif";
    document.getElementById("PokemonImgs").style.width = "30%";
    document.getElementById("PokemonImgs").style.height = "60%";
    document.getElementById("PokemonImgs").style.top = "-12.5%";
    document.getElementById("PokemonImgs").style.right = "34%";
    document.getElementById("StatsGraph").src = "stats2.png";
    document.getElementById("Ability3").style.color = "rgba(255,153,0,0.8)";
    document.getElementById("DescriptionContent").innerHTML = "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs.";
    document.getElementById("Ability1").innerHTML = "Static";
    document.getElementById("Ability3").innerHTML = "Lightning Rod";
    document.getElementById("AreaImg").src = "PikachuArea1.png";
    document.getElementById("AreaContent").innerHTML = "Viridian Forest";
    for (var key in PikachuMoves){
        document.getElementById("Move"+key).innerHTML = PikachuMoves[key];
    };
};

function openPokedex(){
    getCorner1.style.opacity = "1";
    getCorner2.style.opacity = "1";
    getPokedex.style.opacity = "0.9";
    getPokedex.style.zIndex = "0";
    document.getElementById("bubble1").style.opacity = "0";
    document.getElementById("bubble1").style.zIndex = "-1";
    setTimeout(function(){
        getPokedex.style.width = "50vw";
        getCorner1.style.left = "25%";
        getCorner2.style.right = "25%";
    },1000);
    setTimeout(function(){
        getPokedex.style.height = "80vh";
        getCorner1.style.top = "10.1%";
        getCorner2.style.bottom = "10.1%";
    },2000);
    setTimeout(function(){
        document.getElementById("PokemonStats").style.opacity = "1";
        document.getElementById("PokemonInfo2").style.opacity = "1";
        document.getElementById("PokemonList").style.opacity = "1";
        document.getElementById("PokemonBattle").style.opacity = "1";
        document.getElementById("OptionImg").style.opacity = "1";
        document.getElementById("SearchBar").style.opacity = "1";
    },3000);
    if (bubble3 == "notclicked" && bubble4 == "notclicked" && bubble5 == "notclicked"){
        bubble3 = "clicked";
        bubble4 = "clicked";
        bubble5 = "clicked";
        setTimeout(function(){
            document.getElementById("bubble3").style.opacity = "1";
            document.getElementById("bubble3").style.zIndex = "1";
        },4000);
    };
};

function closePokedex(){
    document.getElementById("PokemonStats").style.opacity = "0";
    document.getElementById("PokemonInfo2").style.opacity = "0";
    document.getElementById("PokemonList").style.opacity = "0";
    document.getElementById("PokemonBattle").style.opacity = "0";
    document.getElementById("OptionImg").style.opacity = "0";
    document.getElementById("SearchBar").style.opacity = "0";
    setTimeout(function(){
        getCorner1.style.top = "45%";
        getCorner2.style.bottom = "45%";
        getPokedex.style.height = "4vh";
    },1000);
    setTimeout(function(){
        getCorner1.style.left = "40%";
        getCorner2.style.right = "40%";
        getPokedex.style.width = "19vw";
    },2000);
    setTimeout(function(){
        getCorner1.style.opacity = "0";
        getCorner2.style.opacity = "0";
        getPokedex.style.opacity = "0";
        getPokedex.style.zIndex = "-1";
    },3000);
};


function arrowKeys(){
    document.body.addEventListener("keydown", function(ev){
        if (ev.keyCode == 37){
            getArrow.style.right = "23.5%";
        }else if (ev.keyCode == 38){
            getArrow.style.bottom = "15%";
        }else if (ev.keyCode == 39){
            getArrow.style.right = "11.5%";
        }else if (ev.keyCode == 40){
            getArrow.style.bottom = "9.5%";
        };
    });
};

document.getElementById("bubble1Footer").addEventListener("click", function(){
    openPokedex();
});

document.getElementById("pokedexIcon").addEventListener("click", function(){
    if (bubble1 == "notclicked"){
        bubble1 = "clicked";
        document.getElementById("bubble1").style.opacity = "1";
        document.getElementById("bubble1").style.zIndex = "1";
        document.getElementById("Begin").style.opacity = "0";
        document.getElementById("Begin").style.zIndex = "-1";
    }else if (bubble1 == "clicked"){
        if (open_close == "open"){
            open_close = "closed";
            closePokedex();
        }else if (open_close == "closed"){
            open_close = "open";
            openPokedex();
        };
    };
});

arrowKeys();

document.body.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        if (getArrow.style.right == "11.5%" && getArrow.style.bottom == "15%"){
            if (bubble6 == "notclicked"){
                bubble6 = "clicked";
                document.getElementById("bubble6").style.opacity = "1";
                document.getElementById("bubble6").style.zIndex = "1";
            }else if (bubble6 == "clicked"){
                getBag.style.opacity = "1";
                getBag.style.display = "block";
            };
        };
    };
});

document.getElementById("bubble6Footer").addEventListener("click", function(){
    getBag.style.opacity = "1";
    getBag.style.display = "block";
    if (bubble9 == "notclicked"){
        bubble9 = "clicked";
        setTimeout(function(){
            document.getElementById("bubble9").style.opacity = "1";
            document.getElementById("bubble9").style.zIndex = "1";
        },500);
    };
});

var FooterList = ["bubble1","bubble2","bubble3","bubble4","bubble5","bubble6","bubble7","bubble8","bubble9",];

function DeleteBubble(bubble){
    document.getElementById(bubble).style.opacity = "0";
    document.getElementById(bubble).style.zIndex = "-1";
    return function(){
        DeleteBubble(bubble);
    };
};

for (var i in FooterList){
    document.getElementById(FooterList[i]+"Footer").addEventListener("click", DeleteBubble(FooterList[i]));
};


document.getElementById("bubble9Footer").addEventListener("click", function(){
    document.getElementById("bubble7").style.opacity = "1";
    document.getElementById("bubble7").style.zIndex = "1";
});

document.getElementById("bubble3Footer").addEventListener("click", function(){
    document.getElementById("bubble4").style.opacity = "1";
    document.getElementById("bubble4").style.zIndex = "1";
});

document.getElementById("bubble4Footer").addEventListener("click", function(){
    document.getElementById("bubble5").style.opacity = "1";
    document.getElementById("bubble5").style.zIndex = "1";
});

document.getElementById("bubble7Footer").addEventListener("click", function(){
    document.getElementById("bubble8").style.opacity = "1";
    document.getElementById("bubble8").style.zIndex = "1";
});


document.getElementById("bagClose").addEventListener("click", function(){
    getBag.style.opacity = "0";
    getBag.style.display = "none";
});

document.body.addEventListener("keyup", function(ev){
    if (Pokemons == "notPressed"){
        if (ev.keyCode == 13){
            Pokemons = "Pressed";
            if (getArrow.style.right == "23.5%" && getArrow.style.bottom == "9.5%"){
                document.getElementById("firstPokemon").style.right = "-30%";
                setTimeout(function(){
                    document.getElementById("secPokemon").style.right = "-45%";
                }, 400);
                setTimeout(function(){
                    document.getElementById("thirdPokemon").style.right = "-30%";
                }, 900);
                if (bubble2 == "notclicked"){
                    bubble2 = "clicked";
                    setTimeout(function(){
                        document.getElementById("bubble2").style.opacity = "1";
                        document.getElementById("bubble2").style.zIndex = "1";
                    }, 1300);
                }
            };
        };
    }else if (Pokemons == "Pressed"){
        if (ev.keyCode == 13){
            Pokemons = "notPressed";
            if (getArrow.style.right == "23.5%" && getArrow.style.bottom == "9.5%"){
                document.getElementById("thirdPokemon").style.right = "-140%";
                document.getElementById("bubble2").style.opacity = "0";
                document.getElementById("bubble2").style.zIndex = "-1";
                setTimeout(function(){
                    document.getElementById("secPokemon").style.right = "-140%";
                }, 400);
                setTimeout(function(){
                    document.getElementById("firstPokemon").style.right = "-140%";
                }, 900);
            };
        };
    }
});


document.body.addEventListener("keydown", function(ev){
    if (ev.keyCode == 13){
        if (getArrow.style.right == "11.5%" && getArrow.style.bottom == "9.5%"){
            if (run == "notOn"){
                document.getElementById("run").style.opacity = "1";
                document.getElementById("run").style.zIndex = "1";
                run = "On";
            }else if (run == "On"){
                document.getElementById("run").style.opacity = "0";
                document.getElementById("run").style.zIndex = "-1";
                run = "notOn";
            };
        };
    };
});

document.getElementById("bubble2Footer").addEventListener("click", function(){
    document.getElementById("thirdPokemon").style.right = "-140%";
    setTimeout(function(){
        document.getElementById("secPokemon").style.right = "-140%";
    }, 400);
    setTimeout(function(){
        document.getElementById("firstPokemon").style.right = "-140%";
    }, 900);
    Pokemons = "notPressed";
});

document.getElementById("SquirtleIcon").addEventListener("click", function(){
    changeSquirtle();
});

document.getElementById("BulbasaurIcon").addEventListener("click", function(){
    changeBulbasaur();
});

document.getElementById("PikachuIcon").addEventListener("click", function(){
    changePikachu();
});

document.getElementById("AreaImg").addEventListener("mouseover", function(){
    document.getElementById("DayLand").style.opacity = "1";
});

document.getElementById("AreaImg").addEventListener("mouseout", function(){
    document.getElementById("DayLand").style.opacity = "0";
});

for (var i=1;i<=11;i++){
    document.getElementById(i).addEventListener("click", function(){
        questionMark();
    });
};

var Pokeballs = ["Pokeball","Ultraball","Greatball","Masterball","Aguav","Apicot","Aspear","Chesto","BlueFlute","WaterStone","EscapeRope","MoonStone"];

document.getElementById("ItemsCover").addEventListener("click", function(){
    document.getElementById("Items").style.zIndex = "3";
    document.getElementById("Pokeballs").style.zIndex = "-99";
    document.getElementById("Medicine").style.zIndex = "-999";
});

document.getElementById("PokeballsCover").addEventListener("click", function(){
    document.getElementById("Items").style.zIndex = "-99";
    document.getElementById("Pokeballs").style.zIndex = "3";
    document.getElementById("Medicine").style.zIndex = "-999";
});

document.getElementById("MedicineCover").addEventListener("click", function(){
    document.getElementById("Items").style.zIndex = "-99";
    document.getElementById("Pokeballs").style.zIndex = "-999";
    document.getElementById("Medicine").style.zIndex = "3";
});

function PokeballsDesAppear(ball){
    document.getElementById(ball+"Des").style.opacity = "1";
    document.getElementById(ball+"Des").style.zIndex = "15";
    return function(){
        PokeballsDesAppear(ball);
    };
};

function PokeballDesGone(ball){
    document.getElementById(ball+"Des").style.opacity = "0";
    document.getElementById(ball+"Des").style.zIndex = "-15";
    return function(){
        PokeballDesGone(ball);
    };
};

for (var i in Pokeballs){
    document.getElementById(Pokeballs[i]).addEventListener("mouseover", PokeballsDesAppear(Pokeballs[i]));
    document.getElementById(Pokeballs[i]).addEventListener("mouseout", PokeballDesGone(Pokeballs[i]));
};

document.getElementById("FightFooter").addEventListener("click", function(){
    document.getElementById("Fight").style.opacity = "0";
    document.getElementById("Fight").style.zIndex = "-1";
});

document.body.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        if (getArrow.style.right == "23.5%" && getArrow.style.bottom == "15%"){
            document.getElementById("Fight").style.opacity = "1";
            document.getElementById("Fight").style.zIndex = "1";
        };
    };
});
