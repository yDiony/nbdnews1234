const menu = document.getElementsByClassName("menuSanduiche");
const menuItems = document.getElementsByClassName("menuItem");
const hamburger = document.getElementsByClassName("hamburger");
const closeIcon = document.getElementsByClassName("fa-x");
const menuIcon = document.getElementsByClassName("fa-bars");
const fundoMenu = document.getElementsByClassName("fundoMenu");

var x = window.matchMedia("(max-width:830px)");
const imgsTimes = document.getElementsByClassName("imgsTimes")

const jogosAmerica = document.getElementsByClassName("JogosAmerica");
const jogosAtletico = document.getElementsByClassName("JogosAtletico");
const jogosAthletico = document.getElementsByClassName("JogosAthletico");
const jogosBahia = document.getElementsByClassName("JogosBahia");
const jogosBotafogo = document.getElementsByClassName("JogosBotafogo");
const jogosBragantino = document.getElementsByClassName("JogosBragantino");
const jogosCoritiba = document.getElementsByClassName("JogosCoritiba");
const jogosCorinthians = document.getElementsByClassName("JogosCorinthians");
const jogosCruzeiro = document.getElementsByClassName("JogosCruzeiro");
const jogosCuiaba = document.getElementsByClassName("JogosCuiaba");
const jogosFlamengo = document.getElementsByClassName("JogosFlamengo");
const jogosFluminense = document.getElementsByClassName("JogosFluminense");
const jogosFortaleza = document.getElementsByClassName("JogosFortaleza");
const jogosGoias = document.getElementsByClassName("JogosGoias");
const jogosGremio = document.getElementsByClassName("JogosGremio");
const jogosInter = document.getElementsByClassName("JogosInter");
const jogosPalmeiras = document.getElementsByClassName("JogosPalmeiras");
const jogosSantos = document.getElementsByClassName("JogosSantos");
const jogosSaoPaulo = document.getElementsByClassName("JogosSaoPaulo");
const jogosVasco = document.getElementsByClassName("JogosVasco");

const jogos = document.getElementsByClassName('jogos')
const imagens = document.getElementsByClassName('imgsTimes')

console.log(hamburger)
console.log(menu)
function toggleMenu() {
  for (var i = 0; i < menu.length; i++){
    if (menu[i].classList.contains("showMenu")) {
      const h1 = document.getElementsByClassName("hamburger");
      console.log(h1)
        menu[i].classList.remove("showMenu");
        closeIcon[i].style.display = "none";
        menuIcon[i].style.display = "flex";
        fundoMenu[i].style.display = "none";
        hamburger[i].style.height = "17vh";
    } else {
      const h1 = document.getElementsByClassName("hamburger");
      console.log(h1)
        menu[i].classList.add("showMenu");
        closeIcon[i].style.display = "flex";
        menuIcon[i].style.display = "none";
        fundoMenu[i].style.display = "block";
        hamburger[i].style.height = "5vh";
    }
  }
}

//Banner//


  let count = 1;
  document.getElementById("radio1").checked = true;

  setInterval( function(){
    nextImage();
  }, 3)

  function nextImage(){
    count++;
    if(count>4){
      count = 1;
    }
    document.getElementById("radio"+count).checked = true;
  }

//calendario
function MostrarAgenda(time){
  for( var i=0; i<20; i++){
    for( var c=0; c<5; c++){
      if(time=='JogosAmerica'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[0].style.display = 'flex'
        jogos[0].children[0].style.justifyContent = 'space-between'
        jogosAmerica[0].children[c].style.display = 'grid'
        jogosAmerica[0].children[c].style.justifyItems = 'center'
      } else if(time=='JogosAtletico'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[1].style.display = 'flex'
        jogos[0].children[1].style.justifyContent = 'space-between'
        jogosAtletico[0].children[c].style.display = 'grid'
        jogosAtletico[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosAthletico'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[2].style.display = 'flex'
        jogos[0].children[2].style.justifyContent = 'space-between'
        jogosAthletico[0].children[c].style.display = 'grid'
        jogosAthletico[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosBahia'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[3].style.display = 'flex'
        jogos[0].children[3].style.justifyContent = 'space-between'
        jogosBahia[0].children[c].style.display = 'grid'
        jogosBahia[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosBotafogo'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[4].style.display = 'flex'
        jogos[0].children[4].style.justifyContent = 'space-between'
        jogosBotafogo[0].children[c].style.display = 'grid'
        jogosBotafogo[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosBragantino'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[5].style.display = 'flex'
        jogos[0].children[5].style.justifyContent = 'space-between'
        jogosBragantino[0].children[c].style.display = 'grid'
        jogosBragantino[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosCorinthians'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[6].style.display = 'flex'
        jogos[0].children[6].style.justifyContent = 'space-between'
        jogosCorinthians[0].children[c].style.display = 'grid'
        jogosCorinthians[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosCoritiba'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[7].style.display = 'flex'
        jogos[0].children[7].style.justifyContent = 'space-between'
        jogosCoritiba[0].children[c].style.display = 'grid'
        jogosCoritiba[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosCruzeiro'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[8].style.display = 'flex'
        jogos[0].children[8].style.justifyContent = 'space-between'
        jogosCruzeiro[0].children[c].style.display = 'grid'
        jogosCruzeiro[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosCuiaba'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[9].style.display = 'flex'
        jogos[0].children[9].style.justifyContent = 'space-between'
        jogosCuiaba[0].children[c].style.display = 'grid'
        jogosCuiaba[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosFlamengo'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[10].style.display = 'flex'
        jogos[0].children[10].style.justifyContent = 'space-between'
        jogosFlamengo[0].children[c].style.display = 'grid'
        jogosFlamengo[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosFluminense'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[11].style.display = 'flex'
        jogos[0].children[11].style.justifyContent = 'space-between'
        jogosFluminense[0].children[c].style.display = 'grid'
        jogosFluminense[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosFortaleza'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[12].style.display = 'flex'
        jogos[0].children[12].style.justifyContent = 'space-between'
        jogosFortaleza[0].children[c].style.display = 'grid'
        jogosFortaleza[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosGoias'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[13].style.display = 'flex'
        jogos[0].children[13].style.justifyContent = 'space-between'
        jogosGoias[0].children[c].style.display = 'grid'
        jogosGoias[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosGremio'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[14].style.display = 'flex'
        jogos[0].children[14].style.justifyContent = 'space-between'
        jogosGremio[0].children[c].style.display = 'grid'
        jogosGremio[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosInter'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[15].style.display = 'flex'
        jogos[0].children[15].style.justifyContent = 'space-between'
        jogosInter[0].children[c].style.display = 'grid'
        jogosInter[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosPalmeiras'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[16].style.display = 'flex'
        jogos[0].children[16].style.justifyContent = 'space-between'
        jogosPalmeiras[0].children[c].style.display = 'grid'
        jogosPalmeiras[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosSantos'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[17].style.display = 'flex'
        jogos[0].children[17].style.justifyContent = 'space-between'
        jogosSantos[0].children[c].style.display = 'grid'
        jogosSantos[0].children[c].style.justifyItems = 'center'
      }else if(time=='JogosSaoPaulo'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[18].style.display = 'flex'
        jogos[0].children[18].style.justifyContent = 'space-between'
        jogosSaoPaulo[0].children[c].style.display = 'grid'
        jogosSaoPaulo[0].children[c].style.justifyItems = 'center'
        console.log(jogosVasco[0].children[c].style)
      }else if(time=='JogosVasco'){
        jogos[0].children[i].style.display = 'none'
        jogos[0].children[19].style.display = 'flex'
        jogos[0].children[19].style.justifyContent = 'space-between'
        jogosVasco[0].children[c].style.display = 'grid'
        jogosVasco[0].children[c].style.justifyItems = 'center'
      }
    }
  }
  for( var i=0; i<20; i++){
    if(x.matches){
      if(time=='JogosAmerica'){
        jogos[0].children[0].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosAtletico'){
        jogos[0].children[1].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosAthletico'){
        jogos[0].children[2].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosBahia'){
        jogos[0].children[3].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosBotafogo'){
        jogos[0].children[4].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosBragantino'){
        jogos[0].children[5].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosCorinthians'){
        jogos[0].children[6].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosCoritiba'){
        jogos[0].children[7].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosCruzeiro'){
        jogos[0].children[8].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosCuiaba'){
        jogos[0].children[9].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosFlamengo'){
        jogos[0].children[10].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosFluminense'){
        jogos[0].children[11].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosFortaleza'){
        jogos[0].children[12].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosGoias'){
        jogos[0].children[13].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosGremio'){
        jogos[0].children[14].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosInter'){
        jogos[0].children[15].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosPalmeiras'){
        jogos[0].children[16].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosSantos'){
        jogos[0].children[17].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosSaoPaulo'){
        jogos[0].children[18].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
      if(time=='JogosVasco'){
        jogos[0].children[19].style.display = 'block'
        imgsTimes[0].style.display = 'flex'
      }
    }
  }
}
