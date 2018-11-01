document.getElementById("bt-exp").addEventListener("click", function () {

    document.getElementById("exp-pro").style.marginTop = "20vh";
    document.getElementById("exp-pro").style.display = "block";
    document.getElementById("diplome").style.display = "none";
    document.getElementById("competence").style.display = "none";
    document.getElementById("messagerie").style.display = "none";
})

document.getElementById("bt-dip").addEventListener("click", function () {

    document.getElementById("diplome").style.marginTop = "20vh";
    document.getElementById("exp-pro").style.display = "none";
    document.getElementById("diplome").style.display = "block";
    document.getElementById("competence").style.display = "none";
    document.getElementById("messagerie").style.display = "none";
})

document.getElementById("bt-comp").addEventListener("click", function () {

    document.getElementById("competence").style.marginTop = "20vh";
    document.getElementById("exp-pro").style.display = "none";
    document.getElementById("diplome").style.display = "none";
    document.getElementById("competence").style.display = "block";
    document.getElementById("messagerie").style.display = "none";
})

document.getElementById("bt-mess").addEventListener("click", function () {

    document.getElementById("messagerie").style.marginTop = "20vh";
    document.getElementById("exp-pro").style.display = "none";
    document.getElementById("diplome").style.display = "none";
    document.getElementById("competence").style.display = "none";
    document.getElementById("messagerie").style.display = "block";
})




document.getElementById("bt-tt").addEventListener("click", function () {

    document.getElementById("exp-pro").style.marginTop = "0vh";
    document.getElementById("diplome").style.marginTop = "0vh";
    document.getElementById("competence").style.marginTop = "0vh";
    document.getElementById("messagerie").style.marginTop = "0vh";

    document.getElementById("exp-pro").style.display = "block";
    document.getElementById("diplome").style.display = "block";
    document.getElementById("competence").style.display = "block";
    document.getElementById("messagerie").style.display = "block";
})