// déclaration des variables
let body = document.body
body.style.display ="flex"
body.style.justifyContent ="center"
body.style.alignItems ="center"
// structure générale
let section = document.createElement("section")
document.body.append(section)

// titre
let titre = document.createElement("h1")
titre.innerHTML = "Javascrette"
titre.style.textAlign ="center"
titre.style.color = "#cb7e21"
titre.style.fontSize ="50px"
section.append(titre)

let grandediv = document.createElement("div")
grandediv.setAttribute("class", "grande div")
grandediv.style.border = "2px solid black"
grandediv.style.backgroundColor = " #3a3a87 "
grandediv.style.width = "500px"
grandediv.style.height = "600px"
section.append(grandediv)

// deux grandes idv écran et boutons
let div1 = document.createElement("div")
div1.setAttribute("class", "div1")
div1.style.display ="flex"
div1.style.justifyContent ="center"
div1.style.marginTop ="35px"
let div2 = document.createElement("div")
div2.setAttribute("class", "div2")
grandediv.append(div1,div2)

// div input
let input = document.createElement("input")
input.setAttribute("type", "text")
input.setAttribute("disabled", "")
input.style.backgroundColor ="#86C67D"
input.style.height = "100px"
input.style.width = "450px"
input.style.textAlign ="right"
input.style.fontSize ="45px"
input.style.color = " #e70707"
div1.append(input)


// div des boutons
let diva = document.createElement("div")
diva.setAttribute("class", "diva")
diva.style.display ="flex"
diva.style.justifyContent ="center"
let divb = document.createElement("div")
divb.setAttribute("class", "divb")
divb.style.justifyContent ="center"
divb.style.display ="flex"
let divc = document.createElement("div")
divc.setAttribute("class", "divc")
divc.style.display ="flex"
divc.style.justifyContent ="center"
let divd = document.createElement("div")
divd.setAttribute("class", "divd")
divd.style.display ="flex"
divd.style.justifyContent ="center"
let dive = document.createElement("div")
dive.setAttribute("class", "dive")
dive.style.display ="flex"
dive.style.justifyContent ="center"
div2.append(diva,divb,divc,divd,dive)


// boutons
let bouton1 = document.createElement("button")
bouton1.setAttribute("class","btnchiffre")
bouton1.style.height= "40px"
bouton1.style.width = "50px"
bouton1.style.margin = "25px"
bouton1.style.backgroundColor = "#80A5AB"
bouton1.style.color ="white"
bouton1.innerText = "1"

let bouton2 = document.createElement("button")
bouton2.setAttribute("class","btnchiffre")
bouton2.style.height= "40px"
bouton2.style.width = "50px"
bouton2.style.margin = "25px"
bouton2.style.backgroundColor ="#80A5AB "
bouton2.style.color ="white"
bouton2.innerText = "2"

let bouton3 = document.createElement("button")
bouton3.setAttribute("class","btnchiffre")
bouton3.style.height= "40px"
bouton3.style.width = "50px"
bouton3.style.margin = "25px"
bouton3.style.backgroundColor ="#80A5AB "
bouton3.style.color ="white"
bouton3.innerText = "3"

// btn opérateur
let bouton4 = document.createElement("button")
bouton4.setAttribute("class","btnope")
bouton4.style.height= "40px"
bouton4.style.width = "50px"
bouton4.style.margin = "25px"
bouton4.style.backgroundColor = "#8C4663"
bouton4.innerText = "+"
bouton4.style.color ="white"
bouton4.style.fontWeight ="bold"

diva.append(bouton1, bouton2, bouton3, bouton4)

let bouton5 = document.createElement("button")
bouton5.setAttribute("class","btnchiffre")
bouton5.style.height= "40px"
bouton5.style.width = "50px"
bouton5.style.margin = "25px"
bouton5.style.backgroundColor ="#80A5AB "
bouton5.innerText = "4"
bouton5.style.color ="white"

let bouton6 = document.createElement("button")
bouton6.setAttribute("class","btnchiffre")
bouton6.style.height= "40px"
bouton6.style.width = "50px"
bouton6.style.margin = "25px"
bouton6.style.backgroundColor ="#80A5AB "
bouton6.innerText = "5"
bouton6.style.color ="white"

let bouton7 = document.createElement("button")
bouton7.setAttribute("class","btnchiffre")
bouton7.style.height= "40px"
bouton7.style.width = "50px"
bouton7.style.margin = "25px"
bouton7.style.backgroundColor ="#80A5AB "
bouton7.innerText = "6"
bouton7.style.color ="white"

// btn opérateur
let bouton8 = document.createElement("button")
bouton8.setAttribute("class","btnope")
bouton8.style.height= "40px"
bouton8.style.width = "50px"
bouton8.style.margin = "25px"
bouton8.style.backgroundColor = "#8C4663"
bouton8.innerText = "-"
bouton8.style.fontWeight ="bold"
bouton8.style.color ="white"


divb.append(bouton5,bouton6,bouton7,bouton8)

let bouton9 = document.createElement("button")
bouton9.setAttribute("class","btnchiffre")
bouton9.style.height= "40px"
bouton9.style.width = "50px"
bouton9.style.margin = "25px"
bouton9.style.backgroundColor ="#80A5AB "
bouton9.innerText = "7"
bouton9.style.color ="white"

let bouton10 = document.createElement("button")
bouton10.setAttribute("class","btnchiffre")
bouton10.style.height= "40px"
bouton10.style.width = "50px"
bouton10.style.margin = "25px"
bouton10.style.backgroundColor = "#80A5AB"
bouton10.innerText = "8"
bouton10.style.color ="white"


let bouton11 = document.createElement("button")
bouton11.setAttribute("class","btnchiffre")
bouton11.style.height= "40px"
bouton11.style.width = "50px"
bouton11.style.margin = "25px"
bouton11.style.backgroundColor = "#80A5AB"
bouton11.innerText = "9"
bouton11.style.color ="white"

// btn opérateur
let bouton12 = document.createElement("button")
bouton12.setAttribute("class","btnope")
bouton12.style.height= "40px"
bouton12.style.width = "50px"
bouton12.style.margin = "25px"
bouton12.style.backgroundColor = "#8C4663"
bouton12.innerText = "*"
bouton12.style.fontWeight ="bold"
bouton12.style.color ="white"

divc.append(bouton9,bouton10,bouton11,bouton12)

let bouton13 = document.createElement("button")
bouton13.setAttribute("class","btnchiffre")
bouton13.style.height= "40px"
bouton13.style.width = "50px"
bouton13.style.margin = "25px"
bouton13.style.backgroundColor ="#80A5AB "
bouton13.innerText = "0"
bouton13.style.color ="white"

// btns opérateurs
let bouton14 = document.createElement("button")
bouton14.setAttribute("class","btnce")
bouton14.style.height= "40px"
bouton14.style.width = "50px"
bouton14.style.margin = "25px"
bouton14.style.backgroundColor = "#8C4663"
bouton14.innerText = "CE"
bouton14.style.fontWeight ="bold"
bouton14.style.color ="white"

let bouton15 = document.createElement("button")
bouton15.setAttribute("class","btnchiffre")
bouton15.style.height= "40px"
bouton15.style.width = "50px"
bouton15.style.margin = "25px"
bouton15.style.backgroundColor = "#8C4663"
bouton15.innerText = "."
bouton15.value = "."
bouton15.style.fontWeight ="bold"
bouton15.style.color ="white"

let bouton16 = document.createElement("button")
bouton16.setAttribute("class","btnope")
bouton16.style.height= "40px"
bouton16.style.width = "50px"
bouton16.style.margin = "25px"
bouton16.style.backgroundColor = "#8C4663"
bouton16.innerText = "/"
bouton16.style.fontWeight ="bold"
bouton16.style.color ="white"

divd.append(bouton13,bouton14,bouton15,bouton16)

let bouton17 = document.createElement("button")
bouton17.setAttribute("class", "btnegal")
bouton17.style.width = "450px"
bouton17.style.height = "40px"
bouton17.style.margin = "20px"
bouton17.style.backgroundColor = " #cb7e21 "
bouton17.innerHTML = "="
bouton17.style.fontWeight ="bold"
bouton17.style.color ="white"

dive.append(bouton17)



// //  définir l'opérateur.
let operateurs = document.getElementsByClassName("btnope")
operateurs[0].value = "+"
operateurs[1].value = "-"
operateurs[2].value = "*"
operateurs[3].value = "/"

let ope=""

for (let i = 0; i < operateurs.length; i++) {
    operateurs[i].addEventListener("click",function(){
        ope = this.value
        input.value = ope
        console.log(ope);
    })
}


// définir les valeurs des inputs
let chiffres = document.getElementsByClassName("btnchiffre")
// console.log(chiffres);
// console.log(chiffres[1].innerHTML);
// console.log(input.value);


let value1;
let value2

for (let i = 0; i < chiffres.length; i++) {
    chiffres[i].addEventListener("click", function(){
        if(ope == ""){
            input.value+= chiffres[i].innerHTML
            value1 = Number(input.value)
            console.log(value1);
        }else{
            input.value += chiffres[i].innerHTML
            value2 = Number(input.value.substr(1,input.value.length) )
            console.log(value2);
        }
    })  
}

// égal

let egal = document.querySelector(".btnegal")


egal.addEventListener("click", function(){
    console.log(ope);
    switch (ope) {
        case "+":
            input.value = value1 + value2
            break;

        case "-":
            input.value = value1 - value2
            break;

        case "*":
            input.value = value1 * value2
            break;

        case "/":
            input.value = value1 / value2
            break;

        default:
            break;
    }

})

bouton14.addEventListener("click",function(){
    input.value = ""
    console.log(input.value);
})
