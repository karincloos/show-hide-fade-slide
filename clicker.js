window.addEventListener("load", startSide);

let hits = 0;

let antalLiv = 3;
let myGameTimer;

let random1;
let random2;
let type;

function startSide() {
    //    console.log("funktionen startSide");
    document.querySelector("#baggrund").classList.add("spil_baggrund");
    document.querySelector("#forgrund").classList.add("spil_forgrund");

    document.querySelector("#slut").classList.add("inactive");

    document.querySelector("#start").classList.add("titel_side");
    document.querySelector("#start").classList.add("active");

    document.querySelector("#UI_lag").classList = ("info_mode");
    document.querySelector("#UI_lag").classList.add("start_tistand");

    document.querySelector("#play_knap").classList.add("play");

    document.querySelector("#svamp1 .svampe_sprite").classList = "svampe_sprite hallucinogen hallucinogen_2 delay";
    document.querySelector("#svamp2 .svampe_sprite").classList = "svampe_sprite fluesvamp fluesvamp_1 delay";
    document.querySelector("#svamp3 .svampe_sprite").classList = "svampe_sprite carljohan carljohan_1 delay";
    document.querySelector("#svamp4 .svampe_sprite").classList = "svampe_sprite fluesvamp fluesvamp_2 delay";
    document.querySelector("#svamp5 .svampe_sprite").classList = "svampe_sprite carljohan carljohan_2 delay";
    document.querySelector("#svamp6 .svampe_sprite").classList = "svampe_sprite carljohan carljohan_3 delay";
    document.querySelector("#svamp7 .svampe_sprite").classList = "svampe_sprite carljohan carljohan_4 delay";
    document.querySelector("#svamp8 .svampe_sprite").classList = "svampe_sprite carljohan carljohan_5 delay";
    document.querySelector("#svamp9 .svampe_sprite").classList = "svampe_sprite carljohan carljohan_6 delay";;
    document.querySelector("#svamp10 .svampe_sprite").classList = "svampe_sprite hallucinogen hallucinogen_1 delay";

    document.querySelector("#play_knap").addEventListener("click", startSpillet);
}

function genStart() {
    //    console.log("funktionen genstart");

    document.querySelector("#spil_igen_knap").removeEventListener("click", genStart);
    document.querySelector("#spil_igen_knap").classList.remove("spil_igen");

    document.querySelector("#start").className = "";

    document.querySelector("#slut").classList.remove("active");
    document.querySelector("#slut").classList.add("inactive");

    //    document.querySelector("#liv").classList = "";
    document.querySelector("#UI_lag").classList = "";
    document.querySelector("#tid").classList.remove("empty");
    clearTimeout(myGameTimer);

    hits = 0;
    antalLiv = 3;
    showScore();

    document.querySelector("#svamp1 .svampe_sprite").classList = "svampe_sprite carljohan carljohan_1 delay";
    document.querySelector("#svamp2 .svampe_sprite").classList = "svampe_sprite hallucinogen hallucinogen_1 delay";
    document.querySelector("#svamp3 .svampe_sprite").classList = "svampe_sprite fluesvamp fluesvamp_1 delay";
    document.querySelector("#svamp4 .svampe_sprite").classList = "svampe_sprite carljohan carljohan_2 delay";
    document.querySelector("#svamp5 .svampe_sprite").classList = "svampe_sprite hallucinogen hallucinogen_2 delay";
    document.querySelector("#svamp6 .svampe_sprite").classList = "svampe_sprite carljohan carljohan_3 delay";
    document.querySelector("#svamp7 .svampe_sprite").classList = "svampe_sprite fluesvamp fluesvamp_2 delay";
    document.querySelector("#svamp8 .svampe_sprite").classList = "svampe_sprite carljohan carljohan_4 delay";
    document.querySelector("#svamp9 .svampe_sprite").classList = "svampe_sprite carljohan carljohan_5 delay";
    document.querySelector("#svamp10 .svampe_sprite").classList = "svampe_sprite carljohan carljohan_6 delay";

    startSpillet();
}

function startSpillet() {
    //    console.log("funktionen startSpillet")
    document.querySelector("#play_knap").removeEventListener("click", startSpillet);
    document.querySelector("#play_knap").classList.remove("play");

    document.querySelector("#start").classList.remove("active");
    document.querySelector("#start").classList.add("inactive");
    document.querySelector("#UI_lag").classList.remove("start_tistand");
    document.querySelector("#UI_lag").classList.remove("info_mode");
    document.querySelector("#UI_lag").classList.add("spil_mode");

    document.querySelector("#liv").classList.add("liv");
    document.querySelector("#liv").classList.add("liv3");
    document.querySelector("#point").classList.add("show_point");
    document.querySelector("#tid").classList.add("timeglas");

    // giv svampe gro-animationer:
    document.querySelector("#svamp1 .svampe_sprite").classList.add("grow");
    document.querySelector("#svamp2 .svampe_sprite").classList.add("grow");
    document.querySelector("#svamp3 .svampe_sprite").classList.add("grow");
    document.querySelector("#svamp4 .svampe_sprite").classList.add("grow");
    document.querySelector("#svamp5 .svampe_sprite").classList.add("grow");
    document.querySelector("#svamp6 .svampe_sprite").classList.add("grow");
    document.querySelector("#svamp7 .svampe_sprite").classList.add("grow");
    document.querySelector("#svamp8 .svampe_sprite").classList.add("grow");
    document.querySelector("#svamp9 .svampe_sprite").classList.add("grow");
    document.querySelector("#svamp10 .svampe_sprite").classList.add("grow");

    // Funktionen går videre til vokset når gro-animationerne er afsluttet
    document.querySelector("#svamp1 .svampe_sprite").addEventListener("animationend", vokset);
    document.querySelector("#svamp2 .svampe_sprite").addEventListener("animationend", vokset);
    document.querySelector("#svamp3 .svampe_sprite").addEventListener("animationend", vokset);
    document.querySelector("#svamp4 .svampe_sprite").addEventListener("animationend", vokset);
    document.querySelector("#svamp5 .svampe_sprite").addEventListener("animationend", vokset);
    document.querySelector("#svamp6 .svampe_sprite").addEventListener("animationend", vokset);
    document.querySelector("#svamp7 .svampe_sprite").addEventListener("animationend", vokset);
    document.querySelector("#svamp8 .svampe_sprite").addEventListener("animationend", vokset);
    document.querySelector("#svamp9 .svampe_sprite").addEventListener("animationend", vokset);
    document.querySelector("#svamp10 .svampe_sprite").addEventListener("animationend", vokset);

    document.querySelector("#tid").classList.add("chicken_sprite");

    myGameTimer = setTimeout(function () {
        gameEnded();
    }, 10000);
}

function vokset() {
    //    console.log("funktionen vokset");
    this.removeEventListener("animationend", vokset);

    // fjerner grow classen
    this.classList.remove("grow");
    // fjerner delay på de enkelte svampe-sprites så der ikke er delay 2. gang de vokser
    this.classList.remove("delay");
    // tildeler grown classen
    this.classList.add("grown");

    // Lytter efter klik på svampe
    document.querySelector("#svamp1").addEventListener("click", clickSvamp);
    document.querySelector("#svamp2").addEventListener("click", clickSvamp);
    document.querySelector("#svamp3").addEventListener("click", clickSvamp);
    document.querySelector("#svamp4").addEventListener("click", clickSvamp);
    document.querySelector("#svamp5").addEventListener("click", clickSvamp);
    document.querySelector("#svamp6").addEventListener("click", clickSvamp);
    document.querySelector("#svamp7").addEventListener("click", clickSvamp);
    document.querySelector("#svamp8").addEventListener("click", clickSvamp);
    document.querySelector("#svamp9").addEventListener("click", clickSvamp);
    document.querySelector("#svamp10").addEventListener("click", clickSvamp);
}

function clickSvamp() {
    //    console.log("funktionen clickSvamp");
    if (this.querySelector(".carljohan")) {
        //        console.log("der er klikket på en spiselig svamp");

        this.classList.add("flyv");
        hits++;

    } else if (this.querySelector(".fluesvamp")) {
        //        console.log("der er klikket på en giftig svamp");

        this.querySelector(".svampe_sprite").classList.add("explode");
        antalLiv--;

    } else if (this.querySelector(".hallucinogen")) {
        //        console.log("der er klikket på en hallucinogen");

        this.classList.add("psykedelia");
        hits = 0;
    }

    showScore();

    if (antalLiv == 0) {
        gameOver();
    } else {
        this.addEventListener("animationend", reset);
    }
}

function reset() {
    //    console.log("funktionen reset");
    this.removeEventListener("animationend", reset);

    if (this.querySelector(".carljohan")) {
        this.classList.remove("flyv");
    } else if (this.querySelector(".fluesvamp")) {
        this.querySelector(".svampe_sprite").classList.remove("explode");
    } else if (this.querySelector(".hallucinogen")) {
        this.classList.remove("psykedelia");
    }

    random1 = Math.floor((Math.random() * 10) + 1);
    console.log(random1);

    if (random1 == 1) {
        type = "svampe_sprite carljohan carljohan_1 delay";
    } else if (random1 == 2) {
        type = "svampe_sprite carljohan carljohan_2 delay";
    } else if (random1 == 3) {
        type = "svampe_sprite carljohan carljohan_3 delay";
    } else if (random1 == 4) {
        type = "svampe_sprite carljohan carljohan_4 delay";
    } else if (random1 == 5) {
        type = "svampe_sprite carljohan carljohan_5 delay";
    } else if (random1 == 6) {
        type = "svampe_sprite fluesvamp fluesvamp_1 delay";
    } else if (random1 == 7) {
        type = "svampe_sprite fluesvamp fluesvamp_2 delay";
    } else if (random1 == 8) {
        type = "svampe_sprite hallucinogen hallucinogen_1 delay";
    } else if (random1 == 9) {
        type = "svampe_sprite hallucinogen hallucinogen_2 delay";
    } else if (random1 == 10) {
        type = "svampe_sprite hallucinogen carljohan_6 delay";
    }
    //    console.log(type);

    this.querySelector(".svampe_sprite").classList = type;

    let test;
    test = this.querySelector(".svampe_sprite");

    setTimeout(function () {
        test.classList.add("grow");
    }, 500);

    this.addEventListener("animationend", regrow);
}

function regrow() {
    //    console.log("funktionen regrow");
    this.removeEventListener("animationend", regrow);

    this.querySelector(".svampe_sprite").classList.remove("grow");
    this.querySelector(".svampe_sprite").classList.add("grown");
}

function showScore() {
    //    console.log("funktionen showScore");
    if (antalLiv == 3) {
        console.log("3 liv");
        document.querySelector("#liv").classList = "liv";
        document.querySelector("#liv").classList.add("liv3");
    } else if (antalLiv == 2) {
        console.log("2 liv");
        document.querySelector("#liv").classList = "liv";
        document.querySelector("#liv").classList.add("liv2");
    } else if (antalLiv == 1) {
        console.log("1 liv");
        document.querySelector("#liv").classList = "liv";
        document.querySelector("#liv").classList.add("liv1");
    } else if (antalLiv == 0) {
        console.log("0 liv");
        document.querySelector("#liv").classList = "";
        gameEnded();
    }
    document.querySelector("#hits").textContent = hits;
}

function gameEnded() {
    if (antalLiv <= 0 || hits < 5) { // minimum af svampe man skal have - kan være 0
        console.log("antalLiv: " + antalLiv + ", hits: " + hits);
        gameOver();
    } else {
        levelComplete();
    }

}

function levelComplete() {
    //    console.log("funktionen levelComplete - you win");
    stopAnimationer();

    document.querySelector("#tid").classList.remove("chicken_sprite");
    document.querySelector("#tid").classList.add("empty");

    document.querySelector("#UI_lag").classList.remove("spil_mode");
    document.querySelector("#UI_lag").classList.add("info_mode");
    document.querySelector("#UI_lag").classList.add("winner_tistand");

    document.querySelector("#UI_lag #slut").classList.remove("inactive");
    document.querySelector("#UI_lag #slut").classList.add("active");

    document.querySelector("#spil_igen_knap").classList.add("spil_igen");
    document.querySelector("#spil_igen_knap").addEventListener("click", genStart);
}


function gameOver() {
    //    console.log("funktionen gameOver - you lose");
    stopAnimationer();

    document.querySelector("#tid").classList.remove("chicken_sprite");
    document.querySelector("#tid").classList.add("empty");

    document.querySelector("#UI_lag").classList.remove("spil_mode");
    document.querySelector("#UI_lag").classList.add("info_mode");
    document.querySelector("#UI_lag").classList.add("loser_tistand");

    document.querySelector("#UI_lag #slut").classList.remove("inactive");
    document.querySelector("#UI_lag #slut").classList.add("active");

    document.querySelector("#spil_igen_knap").classList.add("spil_igen");
    document.querySelector("#spil_igen_knap").addEventListener("click", genStart);
}

function stopAnimationer() {
    document.querySelector("#svamp1 .svampe_sprite").classList.add("stop_animationer");
    document.querySelector("#svamp2 .svampe_sprite").classList.add("stop_animationer");
    document.querySelector("#svamp3 .svampe_sprite").classList.add("stop_animationer");
    document.querySelector("#svamp4 .svampe_sprite").classList.add("stop_animationer");
    document.querySelector("#svamp5 .svampe_sprite").classList.add("stop_animationer");
    document.querySelector("#svamp6 .svampe_sprite").classList.add("stop_animationer");
    document.querySelector("#svamp7 .svampe_sprite").classList.add("stop_animationer");
    document.querySelector("#svamp8 .svampe_sprite").classList.add("stop_animationer");
    document.querySelector("#svamp9 .svampe_sprite").classList.add("stop_animationer");
    document.querySelector("#svamp10 .svampe_sprite").classList.add("stop_animationer");

}
