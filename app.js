const iconoMenu = document.querySelector("#icono-menu"),
  menu = document.querySelector("#menu");

iconoMenu.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  document.body.classList.toggle("opacity");
});

/*COLORES EN PRENDAS
faltan: 
    
Competicion GRIS PLOMO - VIOLETA - AZUL MARINO 

Greta AZUL MARINO 

Marilyn AZUL FRANCIA

Scarlet AZUL MARINO

Cleo TODOS MENOS DURAZNO - PETROLEO - MOSTAZA

Taylor TODOS MENOS NEGRO - BLANCO - ROJO - ROSA VIEJO - AZUL FRANCIA - 
VERDE MILITAR - VERDE BENETTON - VERDE INGLES - FUCSIA - CHICLE - VIOLETA

Kim muchos
*/

//COLORES TOPS

const image = document.querySelector("#basico");
const image2 = document.querySelector("#competicion");
const image3 = document.querySelector("#greta");
const image4 = document.querySelector("#marilyn");
const image5 = document.querySelector("#scarlet");
const image6 = document.querySelector("#cleo");
const image7 = document.querySelector("#taylor");
const image8 = document.querySelector("#kim");

function changeImage(color) {
  switch (color) {
    case 1:
      image.src = "Lemur/Tops/Tipos/tipoBasico.jpg";
      image2.src = "Lemur/Tops/Tipos/tipoCompeticion.jpg";
      image3.src = "Lemur/Tops/Tipos/tipoGreta.jpg";
      image4.src = "Lemur/Tops/Tipos/tipoMarilyn.jpg";
      image5.src = "Lemur/Tops/Tipos/tipoScarlet.jpg";
      image7.src = "Lemur/Tops/Tipos/tipoTaylor.jpg";
      image8.src = "Lemur/Tops/Tipos/tipoKim.jpg";
      break;
    case 2:
      image.src = "Lemur/Tops/basicoGrisMelange.jpg";
      image2.src = "Lemur/Tops/competicionGrisMelange.jpg";
      image3.src = "Lemur/Tops/gretaGrisMelange.jpg";
      image4.src = "Lemur/Tops/marilynGrisMelange.jpg";
      image5.src = "Lemur/Tops/scarletGrisMelange.jpg";

      break;
    case 3:
      image.src = "Lemur/Tops/basicoBlanco.jpg";
      image2.src = "Lemur/Tops/competicionBlanco.jpg";
      image3.src = "Lemur/Tops/gretaBlanco.jpg";
      image4.src = "Lemur/Tops/marilynBlanco.jpg";
      image5.src = "Lemur/Tops/scarletBlanco.jpg";
      image7.src = "Lemur/Tops/taylorBlanco.jpg";
      image8.src = "Lemur/Tops/kimBlanco.jpg";
      break;
    case 4:
      image.src = "Lemur/Tops/basicoTerra.jpg";
      image2.src = "Lemur/Tops/competicionTerra.jpg";
      image3.src = "Lemur/Tops/gretaTerra.jpg";
      image4.src = "Lemur/Tops/marilynTerra.jpg";
      image5.src = "Lemur/Tops/scarletTerra.jpg";
      break;
    case 5:
      image.src = "Lemur/Tops/basicoRojo.jpg";
      image2.src = "Lemur/Tops/competicionRojo.jpg";
      image3.src = "Lemur/Tops/gretaRojo.jpg";
      image4.src = "Lemur/Tops/marilynRojo.jpg";
      image5.src = "Lemur/Tops/scarletRojo.jpg";
      image7.src = "Lemur/Tops/taylorRojo.jpg";
      image8.src = "Lemur/Tops/kimRojo.jpg";
      break;
    case 6:
      image.src = "Lemur/Tops/basicoBlueMelange.jpg";
      image2.src = "Lemur/Tops/competicionBlueMelange.jpg";
      image3.src = "Lemur/Tops/gretaBlueMelange.jpg";
      image4.src = "Lemur/Tops/marilynBlueMelange.jpg";
      image5.src = "Lemur/Tops/scarletBlueMelange.jpg";
      break;
    case 7:
      image.src = "Lemur/Tops/basicoMagentaMelange.jpg";
      image2.src = "Lemur/Tops/competicionMagentaMelange.jpg";
      image3.src = "Lemur/Tops/gretaMagentaMelange.jpg";
      image4.src = "Lemur/Tops/marilynMagentaMelange.jpg";
      image5.src = "Lemur/Tops/scarletMagentaMelange.jpg";
      break;
    case 8:
      image.src = "Lemur/Tops/basicoAquaMelange.jpg";
      image2.src = "Lemur/Tops/competicionAquaMelange.jpg";
      image3.src = "Lemur/Tops/gretaAquaMelange.jpg";
      image4.src = "Lemur/Tops/marilynAquaMelange.jpg";
      image5.src = "Lemur/Tops/scarletAquaMelange.jpg";
      break;
    case 9:
      image.src = "Lemur/Tops/basicoLavandaMelange.jpg";
      image2.src = "Lemur/Tops/competicionLavandaMelange.jpg";
      image3.src = "Lemur/Tops/gretaLavandaMelange.jpg";
      image4.src = "Lemur/Tops/marilynLavandaMelange.jpg";
      image5.src = "Lemur/Tops/scarletLavandaMelange.jpg";
      break;
    case 10:
      image.src = "Lemur/Tops/basicoRosaMelange.jpg";
      image2.src = "Lemur/Tops/competicionRosaMelange.jpg";
      image3.src = "Lemur/Tops/gretaRosaMelange.jpg";
      image4.src = "Lemur/Tops/marilynRosaMelange.jpg";
      image5.src = "Lemur/Tops/scarletRosaMelange.jpg";
      break;
    case 11:
      image.src = "Lemur/Tops/basicoVerdeMilitar.jpg";
      image2.src = "Lemur/Tops/competicionVerdeMilitar.jpg";
      image3.src = "Lemur/Tops/gretaVerdeMilitar.jpg";
      image4.src = "Lemur/Tops/marilynVerdeMilitar.jpg";
      image5.src = "Lemur/Tops/scarletVerdeMilitar.jpg";
      image7.src = "Lemur/Tops/taylorVerdeMilitar.jpg";
      image8.src = "Lemur/Tops/kimVerdeMilitar.jpg";
      break;
    case 12:
      image.src = "Lemur/Tops/basicoPetroleo.jpg";
      image2.src = "Lemur/Tops/competicionPetroleo.jpg";
      image3.src = "Lemur/Tops/gretaPetroleo.jpg";
      image4.src = "Lemur/Tops/marilynPetroleo.jpg";
      image5.src = "Lemur/Tops/scarletPetroleo.jpg";
      image6.src = "Lemur/Tops/Tipos/cleoPetroleo.jpg";

      break;
    case 13:
      image.src = "Lemur/Tops/basicoRosaViejo.jpg";
      image2.src = "Lemur/Tops/competicionRosaViejo.jpg";
      image3.src = "Lemur/Tops/gretaRosaViejo.jpg";
      image4.src = "Lemur/Tops/marilynRosaViejo.jpg";
      image5.src = "Lemur/Tops/scarletRosaViejo.jpg";
      image7.src = "Lemur/Tops/taylorRosaViejo.jpg";
      image8.src = "Lemur/Tops/kimRosaViejo.jpg";
      break;
    case 14:
      image.src = "Lemur/Tops/basicoBordoMelange.jpg";
      image2.src = "Lemur/Tops/competicionBordoMelange.jpg";
      image3.src = "Lemur/Tops/gretaBordoMelange.jpg";
      image4.src = "Lemur/Tops/marilynBordoMelange.jpg";
      image5.src = "Lemur/Tops/scarletBordoMelange.jpg";

      break;
    case 15:
      image.src = "Lemur/Tops/basicoTurquesa.jpg";
      image2.src = "Lemur/Tops/competicionTurquesa.jpg";
      image3.src = "Lemur/Tops/gretaTurquesa.jpg";
      image4.src = "Lemur/Tops/marilynTurquesa.jpg";
      image5.src = "Lemur/Tops/scarletTurquesa.jpg";
      break;
    case 16:
      image.src = "Lemur/Tops/basicoDurazno.jpg";
      image2.src = "Lemur/Tops/competicionDurazno.jpg";
      image3.src = "Lemur/Tops/gretaDurazno.jpg";
      image4.src = "Lemur/Tops/marilynDurazno.jpg";
      image5.src = "Lemur/Tops/scarletDurazno.jpg";
      image6.src = "Lemur/Tops/cleoDurazno.jpg";
      break;
    case 17:
      image.src = "Lemur/Tops/basicoZanahoria.jpg";
      image2.src = "Lemur/Tops/competicionZanahoria.jpg";
      image3.src = "Lemur/Tops/gretaZanahoria.jpg";
      image4.src = "Lemur/Tops/marilynZanahoria.jpg";
      image5.src = "Lemur/Tops/scarletZanahoria.jpg";
      image7.src = "Lemur/Tops/taylorZanahoria.jpg";
      image8.src = "Lemur/Tops/kimZanahoria.jpg";
      break;
    case 18:
      image.src = "Lemur/Tops/basicoVerdeBenetton.jpg";
      image2.src = "Lemur/Tops/competicionVerdeBenetton.jpg";
      image3.src = "Lemur/Tops/gretaVerdeBenetton.jpg";
      image4.src = "Lemur/Tops/marilynVerdeBenetton.jpg";
      image5.src = "Lemur/Tops/scarletVerdeBenetton.jpg";
      image7.src = "Lemur/Tops/taylorVerdeBenetton.jpg";
      image8.src = "Lemur/Tops/kimVerdeBenetton.jpg";
      break;
    case 19:
      image.src = "Lemur/Tops/basicoVerdeIngles.jpg";
      image2.src = "Lemur/Tops/competicionVerdeIngles.jpg";
      image3.src = "Lemur/Tops/gretaVerdeIngles.jpg";
      image4.src = "Lemur/Tops/marilynVerdeIngles.jpg";
      image5.src = "Lemur/Tops/scarletVerdeIngles.jpg";
      image7.src = "Lemur/Tops/taylorVerdeIngles.jpg";
      image8.src = "Lemur/Tops/kimVerdeIngles.jpg";
      break;
    case 20:
      image.src = "Lemur/Tops/basicoMorado.jpg";
      image2.src = "Lemur/Tops/competicionMorado.jpg";
      image3.src = "Lemur/Tops/gretaMorado.jpg";
      image4.src = "Lemur/Tops/marilynMorado.jpg";
      image5.src = "Lemur/Tops/scarletMorado.jpg";
      image8.src = "Lemur/Tops/kimMorado.jpg";
      break;
    case 21:
      image.src = "Lemur/Tops/basicoPetroleoMelange.jpg";
      image2.src = "Lemur/Tops/competicionPetroleoMelange.jpg";
      image3.src = "Lemur/Tops/gretaPetroleoMelange.jpg";
      image4.src = "Lemur/Tops/marilynPetroleoMelange.jpg";
      image5.src = "Lemur/Tops/scarletPetroleoMelange.jpg";

      break;
    case 22:
      image.src = "Lemur/Tops/basicoFucsia.jpg";
      image2.src = "Lemur/Tops/competicionFucsia.jpg";
      image3.src = "Lemur/Tops/gretaFucsia.jpg";
      image4.src = "Lemur/Tops/marilynFucsia.jpg";
      image5.src = "Lemur/Tops/scarletFucsia.jpg";
      image7.src = "Lemur/Tops/taylorFucsia.jpg";
      image8.src = "Lemur/Tops/kimFucsia.jpg";
      break;
    case 23:
      image.src = "Lemur/Tops/basicoPlomoMelange.jpg";
      image2.src = "Lemur/Tops/competicionPlomoMelange.jpg";
      image3.src = "Lemur/Tops/gretaPlomoMelange.jpg";
      image4.src = "Lemur/Tops/marilynPlomoMelange.jpg";
      image5.src = "Lemur/Tops/scarletPlomoMelange.jpg";
      image8.src = "Lemur/Tops/kimPlomoMelange.jpg";
      break;
    case 24:
      image.src = "Lemur/Tops/basicoMostaza.jpg";
      image2.src = "Lemur/Tops/competicionMostaza.jpg";
      image3.src = "Lemur/Tops/gretaMostaza.jpg";
      image4.src = "Lemur/Tops/marilynMostaza.jpg";
      image5.src = "Lemur/Tops/scarletMostaza.jpg";
      image6.src = "Lemur/Tops/cleoMostaza.jpg";
      image8.src = "Lemur/Tops/kimMostaza.jpg";
      break;
    case 25:
      image.src = "Lemur/Tops/basicoChicle.jpg";
      image2.src = "Lemur/Tops/competicionChicle.jpg";
      image3.src = "Lemur/Tops/gretaChicle.jpg";
      image4.src = "Lemur/Tops/marilynChicle.jpg";
      image5.src = "Lemur/Tops/scarletChicle.jpg";
      image7.src = "Lemur/Tops/taylorChicle.jpg";
      image8.src = "Lemur/Tops/kimChicle.jpg";
      break;
    case 26:
      image.src = "Lemur/Tops/basicoVerdeEsmeralda.jpg";
      image2.src = "Lemur/Tops/competicionVerdeEsmeralda.jpg";
      image3.src = "Lemur/Tops/gretaVerdeEsmeralda.jpg";
      image4.src = "Lemur/Tops/marilynVerdeEsmeralda.jpg";
      image5.src = "Lemur/Tops/scarletVerdeEsmeralda.jpg";

      break;
    case 27:
      image.src = "Lemur/Tops/basicoAzulMarino.jpg";
      image4.src = "Lemur/Tops/marilynAzulMarino.jpg";
      break;
    case 28:
      image.src = "Lemur/Tops/basicoCelestePastel.jpg";
      image2.src = "Lemur/Tops/competicionCelestePastel.jpg";
      image3.src = "Lemur/Tops/gretaCelestePastel.jpg";
      image4.src = "Lemur/Tops/marilynCelestePastel.jpg";
      image5.src = "Lemur/Tops/scarletCelestePastel.jpg";

      break;
    case 29:
      image.src = "Lemur/Tops/basicoLilaPastel.jpg";
      image2.src = "Lemur/Tops/competicionLilaPastel.jpg";
      image3.src = "Lemur/Tops/gretaLilaPastel.jpg";
      image4.src = "Lemur/Tops/marilynLilaPastel.jpg";
      image5.src = "Lemur/Tops/scarletLilaPastel.jpg";

      break;
    case 30:
      image.src = "Lemur/Tops/basicoAzulFrancia.jpg";
      image2.src = "Lemur/Tops/competicionAzulFrancia.jpg";
      image3.src = "Lemur/Tops/gretaAzulFrancia.jpg";
      image5.src = "Lemur/Tops/scarletAzulFrancia.jpg";
      image7.src = "Lemur/Tops/taylorAzulFrancia.jpg";

      break;
    case 31:
      image.src = "Lemur/Tops/basicoVioleta.jpg";
      image3.src = "Lemur/Tops/gretaVioleta.jpg";
      image4.src = "Lemur/Tops/marilynVioleta.jpg";
      image5.src = "Lemur/Tops/scarletVioleta.jpg";
      image7.src = "Lemur/Tops/taylorVioleta.jpg";
      image8.src = "Lemur/Tops/kimVioleta.jpg";
      break;
    case 32:
      image.src = "Lemur/Tops/basicoGrisPlomo.jpg";
      image3.src = "Lemur/Tops/gretaGrisPlomo.jpg";
      image4.src = "Lemur/Tops/marilynGrisPlomo.jpg";
      image5.src = "Lemur/Tops/scarletGrisPlomo.jpg";
      break;
  }
}

const button1 = document.querySelector("#button-negro");
const button2 = document.querySelector("#button-grismelange");
const button3 = document.querySelector("#button-blanco");
const button4 = document.querySelector("#button-terra");
const button5 = document.querySelector("#button-rojo");
const button6 = document.querySelector("#button-bluemelange");
const button7 = document.querySelector("#button-magentamelange");
const button8 = document.querySelector("#button-aquamelange");
const button9 = document.querySelector("#button-lavandamelange");
const button10 = document.querySelector("#button-rosamelange");
const button11 = document.querySelector("#button-verdemilitar");
const button12 = document.querySelector("#button-petroleo");
const button13 = document.querySelector("#button-rosaviejo");
const button14 = document.querySelector("#button-bordomelange");
const button15 = document.querySelector("#button-turquesa");
const button16 = document.querySelector("#button-durazno");
const button17 = document.querySelector("#button-zanahoria");
const button18 = document.querySelector("#button-verdebenetton");
const button19 = document.querySelector("#button-verdeingles");
const button20 = document.querySelector("#button-morado");
const button21 = document.querySelector("#button-petroleomelange");
const button22 = document.querySelector("#button-fucsia");
const button23 = document.querySelector("#button-plomomelange");
const button24 = document.querySelector("#button-mostaza");
const button25 = document.querySelector("#button-chicle");
const button26 = document.querySelector("#button-verdeesmeralda");
const button27 = document.querySelector("#button-azulmarino");
const button28 = document.querySelector("#button-celestepastel");
const button29 = document.querySelector("#button-lilapastel");
const button30 = document.querySelector("#button-azulfrancia");
const button31 = document.querySelector("#button-violeta");
const button32 = document.querySelector("#button-grisplomo");

button1.onclick = function () {
  changeImage(1);
};

button2.onclick = function () {
  changeImage(2);
};

button3.onclick = function () {
  changeImage(3);
};

button4.onclick = function () {
  changeImage(4);
};

button5.onclick = function () {
  changeImage(5);
};

button6.onclick = function () {
  changeImage(6);
};

button7.onclick = function () {
  changeImage(7);
};

button8.onclick = function () {
  changeImage(8);
};

button9.onclick = function () {
  changeImage(9);
};

button10.onclick = function () {
  changeImage(10);
};

button11.onclick = function () {
  changeImage(11);
};

button12.onclick = function () {
  changeImage(12);
};

button13.onclick = function () {
  changeImage(13);
};

button14.onclick = function () {
  changeImage(14);
};
button15.onclick = function () {
  changeImage(15);
};
button16.onclick = function () {
  changeImage(16);
};
button17.onclick = function () {
  changeImage(17);
};
button18.onclick = function () {
  changeImage(18);
};
button19.onclick = function () {
  changeImage(19);
};
button20.onclick = function () {
  changeImage(20);
};
button21.onclick = function () {
  changeImage(21);
};

button22.onclick = function () {
  changeImage(22);
};
button23.onclick = function () {
  changeImage(23);
};
button24.onclick = function () {
  changeImage(24);
};
button25.onclick = function () {
  changeImage(25);
};
button26.onclick = function () {
  changeImage(26);
};
button27.onclick = function () {
  changeImage(27);
};

button28.onclick = function () {
  changeImage(28);
};
button29.onclick = function () {
  changeImage(29);
};
button30.onclick = function () {
  changeImage(30);
};
button31.onclick = function () {
  changeImage(31);
};
button32.onclick = function () {
  changeImage(32);
};

// TOPS MANGA CORTA

const image10 = document.querySelector("#top-manga-corta-estampa");

function changeImageEstampa(estampa) {
  switch (estampa) {
    case 33:
      image10.src = "Lemur/TopManga/topMangaAlba.jpg";
      break;
    case 34:
      image10.src = "Lemur/TopManga/topMangaBloom.jpg";

      break;
    case 35:
      image10.src = "Lemur/TopManga/topMangaEira.jpg";
      break;
    case 36:
      image10.src = "Lemur/TopManga/topMangaEuphoria.jpg";
      break;
    case 37:
      image10.src = "Lemur/TopManga/topMangaGolden.jpg";
      break;
    case 38:
      image10.src = "Lemur/TopManga/topMangaHanna.jpg";
      break;
    case 39:
      image10.src = "Lemur/TopManga/topMangaHiedra.jpg";
      break;
    case 40:
      image10.src = "Lemur/TopManga/topMangaKahlo.jpg";
      break;
    case 41:
      image10.src = "Lemur/TopManga/topMangaKitty.jpg";
      break;
    case 42:
      image10.src = "Lemur/TopManga/topMangaLove.jpg";
      break;
    case 43:
      image10.src = "Lemur/TopManga/topMangaMei.jpg";
      break;
    case 44:
      image10.src = "Lemur/TopManga/topMangaMirage.png";
      break;
    case 45:
      image10.src = "Lemur/TopManga/topMangaSplash.jpg";
      break;
    case 46:
      image10.src = "Lemur/TopManga/topMangaVader.jpg";
      break;
  }
}

const button33 = document.querySelector("#button-alba");
const button34 = document.querySelector("#button-bloom");
const button35 = document.querySelector("#button-eira");
const button36 = document.querySelector("#button-euphoria");
const button37 = document.querySelector("#button-golden");
const button38 = document.querySelector("#button-hanna");
const button39 = document.querySelector("#button-hiedra");
const button40 = document.querySelector("#button-kahlo");
const button41 = document.querySelector("#button-kitty");
const button42 = document.querySelector("#button-love");
const button43 = document.querySelector("#button-mei");
const button44 = document.querySelector("#button-mirage");
const button45 = document.querySelector("#button-splash");
const button46 = document.querySelector("#button-vader");

button33.onclick = function () {
  changeImageEstampa(33);
};
button34.onclick = function () {
  changeImageEstampa(34);
};
button35.onclick = function () {
  changeImageEstampa(35);
};
button36.onclick = function () {
  changeImageEstampa(36);
};
button37.onclick = function () {
  changeImageEstampa(37);
};
button38.onclick = function () {
  changeImageEstampa(38);
};
button39.onclick = function () {
  changeImageEstampa(39);
};
button40.onclick = function () {
  changeImageEstampa(40);
};
button41.onclick = function () {
  changeImageEstampa(41);
};
button42.onclick = function () {
  changeImageEstampa(42);
};
button43.onclick = function () {
  changeImageEstampa(43);
};
button44.onclick = function () {
  changeImageEstampa(44);
};
button45.onclick = function () {
  changeImageEstampa(45);
};
button46.onclick = function () {
  changeImageEstampa(46);
};

const image9 = document.querySelector("#top-manga-corta-color");

function changeImageTM(image) {
  $(image9).attr("src", image);
}

const button47 = document.querySelector("#button-topmanga-negro");
const button48 = document.querySelector("#button-topmanga-magentamelange");
const button49 = document.querySelector("#button-topmanga-petroleo");
const button50 = document.querySelector("#button-topmanga-bordomelange");
const button51 = document.querySelector("#button-topmanga-turquesa");
const button52 = document.querySelector("#button-topmanga-verdebenetton");
const button53 = document.querySelector("#button-topmanga-verdeingles");
const button54 = document.querySelector("#button-topmanga-morado");
const button55 = document.querySelector("#button-topmanga-petroleomelange");
const button56 = document.querySelector("#button-topmanga-plomomelange");
const button57 = document.querySelector("#button-topmanga-azulmarino");
const button58 = document.querySelector("#button-topmanga-violeta");

button47.onclick = function () {
  changeImageTM("Lemur/TopManga/topMangaBlack.jpg");
};
button48.onclick = function () {
  changeImageTM("Lemur/TopManga/topMangaMagentaMelange.jpg");
};
button49.onclick = function () {
  changeImageTM("Lemur/TopManga/topMangaPetroleo.jpg");
};
button50.onclick = function () {
  changeImageTM("Lemur/TopManga/topMangaBordoMelange.jpg");
};
button51.onclick = function () {
  changeImageTM("Lemur/TopManga/topMangaTurquesa.jpg");
};
button52.onclick = function () {
  changeImageTM("Lemur/TopManga/topMangaVerdeBenetton.jpg");
};
button53.onclick = function () {
  changeImageTM("Lemur/TopManga/topMangaVerdeIngles.jpg");
};
button54.onclick = function () {
  changeImageTM("Lemur/TopManga/TopMangaMorado.png");
};
button55.onclick = function () {
  changeImageTM("Lemur/TopManga/topMangaPetroleoMelange.jpg");
};
button56.onclick = function () {
  changeImageTM("Lemur/TopManga/topMangaPlomoMelange.jpg");
};
button57.onclick = function () {
  changeImageTM("Lemur/TopManga/topMangaAzulMarino.jpg");
};
button58.onclick = function () {
  changeImageTM("Lemur/TopManga/topMangaVioleta.jpg");
};

//BIKERS

const image11 = document.querySelector("#biker-color");
const image12 = document.querySelector("#biker-estampa");

function changeImageBC(image) {
  $(image11).attr("src", image);
}

function changeImageBE(image) {
  $(image12).attr("src", image);
}

const button59 = document.querySelector("#button-biker-grismelange");
const button60 = document.querySelector("#button-biker-terra");
const button61 = document.querySelector("#button-biker-rojo");
const button62 = document.querySelector("#button-biker-bluemelange");
const button63 = document.querySelector("#button-biker-magentamelange");
const button64 = document.querySelector("#button-biker-aquamelange");
const button65 = document.querySelector("#button-biker-lavandamelange");
const button66 = document.querySelector("#button-biker-rosamelange");
const button67 = document.querySelector("#button-biker-verdemilitar");
const button68 = document.querySelector("#button-biker-petroleo");
const button69 = document.querySelector("#button-biker-rosaviejo");
const button70 = document.querySelector("#button-biker-bordomelange");
const button71 = document.querySelector("#button-biker-turquesa");
const button72 = document.querySelector("#button-biker-durazno");
const button73 = document.querySelector("#button-biker-zanahoria");
const button74 = document.querySelector("#button-biker-verdebenetton");
const button75 = document.querySelector("#button-biker-verdeingles");
const button76 = document.querySelector("#button-biker-morado");
const button77 = document.querySelector("#button-biker-petroleomelange");
const button78 = document.querySelector("#button-biker-fucsia");
const button79 = document.querySelector("#button-biker-plomomelange");
const button80 = document.querySelector("#button-biker-mostaza");
const button81 = document.querySelector("#button-biker-verdeesmeralda");
const button82 = document.querySelector("#button-biker-azulmarino");
const button83 = document.querySelector("#button-biker-celestepastel");
const button84 = document.querySelector("#button-biker-lilapastel");
const button85 = document.querySelector("#button-biker-azulfrancia");
const button86 = document.querySelector("#button-biker-violeta");
const button87 = document.querySelector("#button-biker-grisplomo");

const button88 = document.querySelector("#button-biker-alba");
const button89 = document.querySelector("#button-biker-cayena");
const button90 = document.querySelector("#button-biker-eira");
const button91 = document.querySelector("#button-biker-euphoria");
const button92 = document.querySelector("#button-biker-forestprint");
const button93 = document.querySelector("#button-biker-golden");
const button94 = document.querySelector("#button-biker-hanna");
const button95 = document.querySelector("#button-biker-hiedra");
const button96 = document.querySelector("#button-biker-iceprint");
const button97 = document.querySelector("#button-biker-indiana");
const button98 = document.querySelector("#button-biker-jane");
const button99 = document.querySelector("#button-biker-kalesi");
const button100 = document.querySelector("#button-biker-kahlo");
const button101 = document.querySelector("#button-biker-kitty");
const button102 = document.querySelector("#button-biker-limaprint");
const button103 = document.querySelector("#button-biker-love");
const button104 = document.querySelector("#button-biker-mei");
const button105 = document.querySelector("#button-biker-mirage");
const button106 = document.querySelector("#button-biker-paradise");
const button107 = document.querySelector("#button-biker-phoenix");
const button108 = document.querySelector("#button-biker-roseprint");
const button109 = document.querySelector("#button-biker-snow");
const button110 = document.querySelector("#button-biker-splash");
const button111 = document.querySelector("#button-biker-thai");
const button112 = document.querySelector("#button-biker-tiffany");
const button113 = document.querySelector("#button-biker-vader");
const button114 = document.querySelector("#button-biker-wild");

button59.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerGrisMelange.jpg");
};
button60.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerTerra.jpg");
};
button61.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerRojo.jpg");
};
button62.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerBlueMelange.jpg");
};
button63.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerMagentaMelange.jpg");
};
button64.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerAquaMelange.jpg");
};
button65.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerLavandaMelange.jpg");
};
button66.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerRosaMelange.jpg");
};
button67.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerVerdeMilitar.jpg");
};
button68.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerPetroleo.jpg");
};
button69.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerRosaViejo.jpg");
};
button70.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerBordoMelange.jpg");
};
button71.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerTurquesa.jpg");
};
button72.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerDurazno.jpg");
};
button73.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerZanahoria.jpg");
};
button74.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerVerdeBenetton.jpg");
};
button75.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerVerdeIngles.jpg");
};
button76.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerMorado.jpg");
};
button77.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerPetroleoMelange.jpg");
};
button78.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerFucsia.jpg");
};
button79.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerPlomoMelange.jpg");
};
button80.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerMostaza.jpg");
};
button81.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerVerdeEsmeralda.jpg");
};
button82.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerAzulMarino.jpg");
};
button83.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerCelestePastel.jpg");
};
button84.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerLilaPastel.jpg");
};
button85.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerAzulFrancia.jpg");
};
button86.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerVioleta.jpg");
};
button87.onclick = function () {
  changeImageBC("Lemur/Bikers/bikerGrisPlomo.jpg");
};



button88.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerAlba.jpg");
}
button89.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerCayena.jpg");
}
button90.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerEira.jpg");
}
button91.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerEuphoria.jpg");
}
button92.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerForestPrint.jpg");
}
button93.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerGolden.jpg");
}
button94.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerHanna.jpg");
}
button95.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerHiedra.jpg");
}
button96.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerIcePrint.jpg");
}
button97.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerIndiana.jpg");
}
button98.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerJane.jpg");
}
button99.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerKalesi.jpg");
}
button100.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerKahlo.jpg");
}
button101.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerKitty.jpg");
}
button102.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerLimaPrint.jpg");
}
button103.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerLove.jpg");
}
button104.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerMei.jpg");
}
button105.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerMirage.jpg");
}
button106.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerParadise.jpg");
}
button107.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerPhoenix.jpg");
}
button108.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerRosePrint.jpg");
}
button109.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerSnow.jpg");
}
button110.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerSplash.jpg");
}
button111.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerThai.jpg");
}
button112.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerTiffany.jpg");
}
button113.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerVader.jpg");
}
button114.onclick = function () {
    changeImageBE("Lemur/Bikers/bikerWild.jpg");
}


const image13 = document.querySelector("#short-color");
const image14 = document.querySelector("#short-estampa");

function changeImageSC(image) {
  $(image13).attr("src", image);
}

function changeImageSE(image) {
  $(image14).attr("src", image);
}

const button115 = document.querySelector("#button-short-negro");
const button116 = document.querySelector("#button-short-grismelange");
const button117 = document.querySelector("#button-short-terra");
const button118 = document.querySelector("#button-short-rojo");
const button119 = document.querySelector("#button-short-magentamelange");
const button120 = document.querySelector("#button-short-aquamelange");
const button121 = document.querySelector("#button-short-lavandamelange");
const button122 = document.querySelector("#button-short-rosamelange");
const button123 = document.querySelector("#button-short-verdemilitar");
const button124 = document.querySelector("#button-short-petroleo");
const button125 = document.querySelector("#button-short-rosaviejo");
const button126 = document.querySelector("#button-short-bordomelange");
const button127 = document.querySelector("#button-short-turquesa");
const button128 = document.querySelector("#button-short-durazno");
const button129 = document.querySelector("#button-short-zanahoria");
const button130 = document.querySelector("#button-short-verdebenetton");
const button131 = document.querySelector("#button-short-verdeingles");
const button132 = document.querySelector("#button-short-morado");
const button133 = document.querySelector("#button-short-petroleomelange");
const button134 = document.querySelector("#button-short-fucsia");
const button135 = document.querySelector("#button-short-plomomelange");
const button136 = document.querySelector("#button-short-mostaza");
const button137 = document.querySelector("#button-short-chicle");
const button138 = document.querySelector("#button-short-verdeesmeralda");
const button139 = document.querySelector("#button-short-azulmarino");
const button140 = document.querySelector("#button-short-celestepastel");
const button141 = document.querySelector("#button-short-lilapastel");
const button142 = document.querySelector("#button-short-azulfrancia");
const button143 = document.querySelector("#button-short-violeta");


const button144 = document.querySelector("#button-short-alba");
const button145 = document.querySelector("#button-short-aurora");
const button146 = document.querySelector("#button-short-cayena");
const button147 = document.querySelector("#button-short-eira");
const button148 = document.querySelector("#button-short-euphoria");
const button149 = document.querySelector("#button-short-forestprint");
const button150 = document.querySelector("#button-short-hanna");
const button151 = document.querySelector("#button-short-hiedra");
const button152 = document.querySelector("#button-short-iceprint");
const button153 = document.querySelector("#button-short-indiana");
const button154 = document.querySelector("#button-short-jane");
const button155 = document.querySelector("#button-short-kalesi");
const button156 = document.querySelector("#button-short-kahlo");
const button157 = document.querySelector("#button-short-kitty");
const button158 = document.querySelector("#button-short-limaprint");
const button159 = document.querySelector("#button-short-love");
const button160 = document.querySelector("#button-short-mei");
const button161 = document.querySelector("#button-short-mirage");
const button162 = document.querySelector("#button-short-paradise");
const button163 = document.querySelector("#button-short-phoenix");
const button164 = document.querySelector("#button-short-roseprint");
const button165 = document.querySelector("#button-short-snow");
const button166 = document.querySelector("#button-short-splash");
const button167 = document.querySelector("#button-short-thai");
const button168 = document.querySelector("#button-short-tiffany");
const button169 = document.querySelector("#button-short-vader");
const button170 = document.querySelector("#button-short-wild");


button115.onclick = function () {
  changeImageSC("Lemur/Shorts/shortNegro.jpg");
};
button116.onclick = function () {
  changeImageSC("Lemur/Shorts/shortGrisMelange.jpg");
};
button117.onclick = function () {
  changeImageSC("Lemur/Shorts/shortTerra.jpg");
};
button118.onclick = function () {
  changeImageSC("Lemur/Shorts/shortRojo.jpg");
};
button119.onclick = function () {
  changeImageSC("Lemur/Shorts/shortMagentaMelange.jpg");
};
button120.onclick = function () {
  changeImageSC("Lemur/Shorts/shortAquaMelange.jpg");
};
button121.onclick = function () {
  changeImageSC("Lemur/Shorts/shortLavandaMelange.jpg");
};
button122.onclick = function () {
  changeImageSC("Lemur/Shorts/shortRosaMelange.jpg");
};
button123.onclick = function () {
  changeImageSC("Lemur/Shorts/shortVerdeMilitar.jpg");
};
button124.onclick = function () {
  changeImageSC("Lemur/Shorts/shortPetroleo.jpg");
};
button125.onclick = function () {
  changeImageSC("Lemur/Shorts/shortRosaViejo.jpg");
};
button126.onclick = function () {
  changeImageSC("Lemur/Shorts/shortBordoMelange.jpg");
};
button127.onclick = function () {
  changeImageSC("Lemur/Shorts/shortTurquesa.jpg");
};
button128.onclick = function () {
  changeImageSC("Lemur/Shorts/shortDurazno.jpg");
};
button129.onclick = function () {
  changeImageSC("Lemur/Shorts/shortZanahoria.jpg");
};
button130.onclick = function () {
  changeImageSC("Lemur/Shorts/shortVerdeBenetton.jpg");
};
button131.onclick = function () {
  changeImageSC("Lemur/Shorts/shortVerdeIngles.jpg");
};
button132.onclick = function () {
  changeImageSC("Lemur/Shorts/shortMorado.jpg");
};
button133.onclick = function () {
  changeImageSC("Lemur/Shorts/shortPetroleoMelange.jpg");
};
button134.onclick = function () {
  changeImageSC("Lemur/Shorts/shortFucsia.jpg");
};
button135.onclick = function () {
  changeImageSC("Lemur/Shorts/shortPlomoMelange.jpg");
};
button136.onclick = function () {
  changeImageSC("Lemur/Shorts/shortMostaza.jpg");
};
button137.onclick = function () {
  changeImageSC("Lemur/Shorts/shortChicle.jpg");
};
button138.onclick = function () {
  changeImageSC("Lemur/Shorts/shortVerdeEsmeralda.jpg");
};
button139.onclick = function () {
  changeImageSC("Lemur/Shorts/shortAzulMarino.jpg");
};
button140.onclick = function () {
  changeImageSC("Lemur/Shorts/shortCelestePastel.jpg");
};
button141.onclick = function () {
  changeImageSC("Lemur/Shorts/shortLilaPastel.jpg");
};
button142.onclick = function () {
  changeImageSC("Lemur/Shorts/shortAzulFrancia.jpg");
};
button143.onclick = function () {
  changeImageSC("Lemur/Shorts/shortVioleta.jpg");
};


button144.onclick = function () {
    changeImageSE("Lemur/Shorts/shortAlba.jpg");
}
button145.onclick = function () {
    changeImageSE("Lemur/Shorts/shortAurora.jpg");
}
button146.onclick = function () {
    changeImageSE("Lemur/Shorts/shortCayena.jpg");
}
button147.onclick = function () {
    changeImageSE("Lemur/Shorts/shortEira.jpg");
}
button148.onclick = function () {
    changeImageSE("Lemur/Shorts/shortEuphoria.jpg");
}
button149.onclick = function () {
    changeImageSE("Lemur/Shorts/shortForestPrint.jpg");
}
button150.onclick = function () {
    changeImageSE("Lemur/Shorts/shortHanna.jpg");
}
button151.onclick = function () {
    changeImageSE("Lemur/Shorts/shortHiedra.jpg");
}
button152.onclick = function () {
    changeImageSE("Lemur/Shorts/shortIcePrint.jpg");
}
button153.onclick = function () {
    changeImageSE("Lemur/Shorts/shortIndiana.jpg");
}
button154.onclick = function () {
    changeImageSE("Lemur/Shorts/shortJane.jpg");
}
button155.onclick = function () {
    changeImageSE("Lemur/Shorts/shortKalesi.jpg");
}
button156.onclick = function () {
    changeImageSE("Lemur/Shorts/shortKahlo.jpg");
}
button157.onclick = function () {
    changeImageSE("Lemur/Shorts/shortKitty.jpg");
}
button158.onclick = function () {
    changeImageSE("Lemur/Shorts/shortLimaPrint.jpg");
}
button159.onclick = function () {
    changeImageSE("Lemur/Shorts/shortLove.jpg");
}
button160.onclick = function () {
    changeImageSE("Lemur/Shorts/shortMei.jpg");
}
button161.onclick = function () {
    changeImageSE("Lemur/Shorts/shortMirage.jpg");
}
button162.onclick = function () {
    changeImageSE("Lemur/Shorts/shortParadise.jpg");
}
button163.onclick = function () {
    changeImageSE("Lemur/Shorts/shortPhoenix.jpg");
}
button164.onclick = function () {
    changeImageSE("Lemur/Shorts/shortRosePrint.jpg");
}
button165.onclick = function () {
    changeImageSE("Lemur/Shorts/shortSnow.jpg");
}
button166.onclick = function () {
    changeImageSE("Lemur/Shorts/shortSplash.jpg");
}
button167.onclick = function () {
    changeImageSE("Lemur/Shorts/shortThai.jpg");
}
button168.onclick = function () {
    changeImageSE("Lemur/Shorts/shortTiffany.jpg");
}
button169.onclick = function () {
    changeImageSE("Lemur/Shorts/shortVader.jpg");
}
button170.onclick = function () {
    changeImageSE("Lemur/Shorts/shortWild.jpg");
}


