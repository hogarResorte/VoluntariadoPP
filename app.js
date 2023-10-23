/*var webEnMantenimiento;

const freyaMantenimiento = document.querySelector("#freya");

freyaMantenimiento.onclick = function () {
  webEnMantenimiento = window.open("mantenimiento.html");
};
*/

/* FREYA SPORT */

/*const mujerBtn = document.querySelector('#mujer-btn');
mujer.addEventListener('click', () => {
  cargarCategoria('mujer');
});

const hombreBtn = document.querySelector('hombre-btn');
hombreBtn.addEventListener('click', () => {
  cargarCategoria('hombre');
});

*/


// VENTANA DE MANTENIMIENTO FREYA

function openPopup() {
  document.getElementById("popup").style.display = "block";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// LEMUR FIT
const iconoMenu = document.querySelector("#icono-menu"),
  menu = document.querySelector("#menu");

iconoMenu.addEventListener('click', (e) => {
  menu.classList.toggle("active");
  document.body.classList.toggle("opacity");
});


//COLORES TOPS

const image = document.querySelector("#basico");
const image2 = document.querySelector("#competicion");
const image3 = document.querySelector("#greta");
const image4 = document.querySelector("#marilyn");
const image5 = document.querySelector("#scarlet");
const image6 = document.querySelector("#cleo");
const image7 = document.querySelector("#taylor");
const image8 = document.querySelector("#kim");
const imageBl = document.querySelector("#blake");

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
      imageBl.src = "Lemur/Tops/Tipos/tipoBlake.jpg";
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
      imageBl.src = "Lemur/Tops/blakeRojo.jpg";
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
      image6.src = "Lemur/Tops/cleoPetroleo.jpg";

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


// SHORTS

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
const button155 = document.querySelector("#button-short-kahlo");
const button156 = document.querySelector("#button-short-kitty");
const button157 = document.querySelector("#button-short-limaprint");
const button158 = document.querySelector("#button-short-love");
const button159 = document.querySelector("#button-short-mei");
const button160 = document.querySelector("#button-short-mirage");
const button161 = document.querySelector("#button-short-paradise");
const button162 = document.querySelector("#button-short-phoenix");
const button163 = document.querySelector("#button-short-roseprint");
const button164 = document.querySelector("#button-short-snow");
const button165 = document.querySelector("#button-short-splash");
const button166 = document.querySelector("#button-short-thai");
const button167 = document.querySelector("#button-short-tiffany");
const button168 = document.querySelector("#button-short-vader");
const button169 = document.querySelector("#button-short-wild");


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
    changeImageSE("Lemur/Shorts/shortKahlo.jpg");
}
button156.onclick = function () {
    changeImageSE("Lemur/Shorts/shortKitty.jpg");
}
button157.onclick = function () {
    changeImageSE("Lemur/Shorts/shortLimaPrint.jpg");
}
button158.onclick = function () {
    changeImageSE("Lemur/Shorts/shortLove.jpg");
}
button159.onclick = function () {
    changeImageSE("Lemur/Shorts/shortMei.jpg");
}
button160.onclick = function () {
    changeImageSE("Lemur/Shorts/shortMirage.jpg");
}
button161.onclick = function () {
    changeImageSE("Lemur/Shorts/shortParadise.jpg");
}
button162.onclick = function () {
    changeImageSE("Lemur/Shorts/shortPhoenix.jpg");
}
button163.onclick = function () {
    changeImageSE("Lemur/Shorts/shortRosePrint.jpg");
}
button164.onclick = function () {
    changeImageSE("Lemur/Shorts/shortSnow.jpg");
}
button165.onclick = function () {
    changeImageSE("Lemur/Shorts/shortSplash.jpg");
}
button166.onclick = function () {
    changeImageSE("Lemur/Shorts/shortThai.jpg");
}
button167.onclick = function () {
    changeImageSE("Lemur/Shorts/shortTiffany.jpg");
}
button168.onclick = function () {
    changeImageSE("Lemur/Shorts/shortVader.jpg");
}
button169.onclick = function () {
    changeImageSE("Lemur/Shorts/shortWild.jpg");
}


//CALZAS

const image15 = document.querySelector("#calza-color");
const image16 = document.querySelector("#calza-estampa");
const image17 = document.querySelector('#calza-combinada');

function changeImageCC(image) {
  $(image15).attr("src", image);
}

function changeImageCE(image) {
  $(image16).attr("src", image);
}

function changeImageCCom(image) {
  $(image17).attr("src", image);
}

const button170 = document.querySelector("#button-calza-negro");
const button171 = document.querySelector("#button-calza-grismelange");
const button172 = document.querySelector("#button-calza-terra");
const button173 = document.querySelector("#button-calza-rojo");
const button174 = document.querySelector("#button-calza-magentamelange");
const button175 = document.querySelector("#button-calza-aquamelange");
const button176 = document.querySelector("#button-calza-lavandamelange");
const button177 = document.querySelector("#button-calza-rosamelange");
const button178 = document.querySelector("#button-calza-verdemilitar");
const button179 = document.querySelector("#button-calza-petroleo");
const button180 = document.querySelector("#button-calza-rosaviejo");
const button181 = document.querySelector("#button-calza-bordomelange");
const button182 = document.querySelector("#button-calza-turquesa");
const button183 = document.querySelector("#button-calza-durazno");
const button184 = document.querySelector("#button-calza-zanahoria");
const button185 = document.querySelector("#button-calza-verdebenetton");
const button186 = document.querySelector("#button-calza-verdeingles");
const button187 = document.querySelector("#button-calza-morado");
const button188 = document.querySelector("#button-calza-petroleomelange");
const button189 = document.querySelector("#button-calza-fucsia");
const button190 = document.querySelector("#button-calza-plomomelange");
const button191 = document.querySelector("#button-calza-mostaza");
const button192 = document.querySelector("#button-calza-argentina");
const button193 = document.querySelector("#button-calza-verdeesmeralda");
const button194 = document.querySelector("#button-calza-azulmarino");
const button195 = document.querySelector("#button-calza-celestepastel");
const button196 = document.querySelector("#button-calza-lilapastel");
const button197 = document.querySelector("#button-calza-azulfrancia");
const button198 = document.querySelector("#button-calza-violeta");
const button224 = document.querySelector("#button-calza-grisplomo");

const button199 = document.querySelector("#button-calza-alba");
const button200 = document.querySelector("#button-calza-aurora");
const button201 = document.querySelector("#button-calza-cayena");
const button202 = document.querySelector("#button-calza-eira");
const button203 = document.querySelector("#button-calza-euphoria");
const button204 = document.querySelector("#button-calza-forestprint");
const button205 = document.querySelector("#button-calza-hanna");
const button206 = document.querySelector("#button-calza-hiedra");
const button207 = document.querySelector("#button-calza-iceprint");
const button208 = document.querySelector("#button-calza-indiana");
const button209 = document.querySelector("#button-calza-jane");
const button210 = document.querySelector("#button-calza-kahlo");
const button211 = document.querySelector("#button-calza-kitty");
const button212 = document.querySelector("#button-calza-limaprint");
const button213 = document.querySelector("#button-calza-love");
const button214 = document.querySelector("#button-calza-mei");
const button215 = document.querySelector("#button-calza-mirage");
const button216 = document.querySelector("#button-calza-paradise");
const button217 = document.querySelector("#button-calza-phoenix");
const button218 = document.querySelector("#button-calza-roseprint");
const button219 = document.querySelector("#button-calza-snow");
const button220 = document.querySelector("#button-calza-splash");
const button221= document.querySelector("#button-calza-thai");
const button222 = document.querySelector("#button-calza-tiffany");
const button223 = document.querySelector("#button-calza-vader");
//EN TOTAL SON 224 (ESTA EN COLORES EL ULTIMO)

const button225 = document.querySelector("#button-calza-combinada-aurora");
const button226 = document.querySelector("#button-calza-combinada-durazno");
const button227 = document.querySelector("#button-calza-combinada-golden");
const button228 = document.querySelector("#button-calza-combinada-iceprint");
const button229 = document.querySelector("#button-calza-combinada-leia");
const button230 = document.querySelector("#button-calza-combinada-limaprint");
const button231 = document.querySelector("#button-calza-combinada-mostaza");
const button232 = document.querySelector("#button-calza-combinada-roseprint");
const button233 = document.querySelector("#button-calza-combinada-storm");
const button234 = document.querySelector("#button-calza-combinada-trixie");

button170.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaNegro.webp");
};
button171.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaGrisMelange.webp");
};
button172.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaTerra.jpg");
};
button173.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaRojo.webp");
};
button174.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaMagentaMelange.webp");
};
button175.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaAquaMelange.webp");
};
button176.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaLavandaMelange.webp");
};
button177.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaRosaMelange.webp");
};
button178.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaVerdeMilitar.webp");
};
button179.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaPetroleo.webp");
};
button180.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaRosaViejo.webp");
};
button181.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaBordoMelange.webp");
};
button182.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaTurquesa.webp");
};
button183.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaDurazno.webp");
};
button184.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaZanahoria.webp");
};
button185.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaVerdeBenetton.webp");
};
button186.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaVerdeIngles.webp");
};
button187.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaMorado.webp");
};
button188.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaPetroleoMelange.webp");
};
button189.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaFucsia.jpg");
};
button190.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaPlomoMelange.webp");
};
button191.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaMostaza.webp");
};
button192.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaArgentina.webp");
};
button193.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaVerdeEsmeralda.webp");
};
button194.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaAzulMarino.webp");
};
button195.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaCelestePastel.webp");
};
button196.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaLilaPastel.webp");
};
button197.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaAzulFrancia.webp");
};
button198.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaVioleta.webp");
}
button224.onclick = function () {
  changeImageCC("Lemur/Calzas/calzaGrisPlomo.webp");
}


button199.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaAlba.jpg");
}
button200.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaAurora.jpg");
}
button201.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaCayena.jpg");
}
button202.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaEira.jpg");
}
button203.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaEuphoria.jpg");
}
button204.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaForestPrint.jpg");
}
button205.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaHanna.jpg");
}
button206.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaHiedra.jpg");
}
button207.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaIcePrint.jpg");
}
button208.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaIndiana.jpg");
}
button209.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaJane.jpg");
}
button210.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaKahlo.jpg");
}
button211.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaKitty.jpg");
}
button212.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaLimaPrint.jpg");
}
button213.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaLove.jpg");
}
button214.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaMei.jpg");
}
button215.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaMirage.jpg");
}
button216.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaParadise.jpg");
}
button217.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaPhoenix.jpg");
}
button218.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaRosePrint.webp");
}
button219.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaSnow.jpg");
}
button220.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaSplash.jpg");
}
button221.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaThai.jpg");
}
button222.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaTiffany.jpg");
}
button223.onclick = function () {
    changeImageCE("Lemur/Calzas/calzaVader.jpg");
}

button225.onclick = function () {
  changeImageCCom("Lemur/Calzas/combinadaAurora.webp");
};
button226.onclick = function () {
  changeImageCCom("Lemur/Calzas/combinadaDurazno.webp");
};
button227.onclick = function () {
  changeImageCCom("Lemur/Calzas/combinadaGolden.webp");
};
button228.onclick = function () {
  changeImageCCom("Lemur/Calzas/combinadaIcePrint.jpg");
};
button229.onclick = function () {
  changeImageCCom("Lemur/Calzas/combinadaLeia.webp");
};
button230.onclick = function () {
  changeImageCCom("Lemur/Calzas/combinadaLimaPrint.webp");
};
button231.onclick = function () {
  changeImageCCom("Lemur/Calzas/combinadaMostaza.webp");
};
button232.onclick = function () {
  changeImageCCom("Lemur/Calzas/combinadaRosePrint.webp");
};
button233.onclick = function () {
  changeImageCCom("Lemur/Calzas/combinadaStorm.webp");
};
button234.onclick = function () {
  changeImageCCom("Lemur/Calzas/combinadaTrixie.webp");
};

//CAPRIS

const image18 = document.querySelector("#capri-estampa");
const image19 = document.querySelector("#capri-color");

function changeImageCapE(image) {
  $(image18).attr("src", image);
}

function changeImageCapC(image) {
  $(image19).attr("src", image);
}

const button235 = document.querySelector("#button-capri-alba");
const button236 = document.querySelector("#button-capri-aurora");
const button237 = document.querySelector("#button-capri-cayena");
const button238 = document.querySelector("#button-capri-eira");
const button239 = document.querySelector("#button-capri-euphoria");
const button240 = document.querySelector("#button-capri-forestprint");
const button241 = document.querySelector("#button-capri-golden");
const button242 = document.querySelector("#button-capri-hanna");
const button243 = document.querySelector("#button-capri-hiedra");
const button244 = document.querySelector("#button-capri-iceprint");
const button245 = document.querySelector("#button-capri-indiana");
const button246 = document.querySelector("#button-capri-jane");
const button247 = document.querySelector("#button-capri-kahlo");
const button248 = document.querySelector("#button-capri-kalesi");
const button249 = document.querySelector("#button-capri-kitty");
const button250 = document.querySelector("#button-capri-limaprint");
const button251 = document.querySelector("#button-capri-love");
const button252 = document.querySelector("#button-capri-mei");
const button253 = document.querySelector("#button-capri-mirage");
const button254 = document.querySelector("#button-capri-paradise");
const button255 = document.querySelector("#button-capri-phoenix");
const button256 = document.querySelector("#button-capri-roseprint");
const button257 = document.querySelector("#button-capri-savage");
const button258 = document.querySelector("#button-capri-snow");
const button259 = document.querySelector("#button-capri-soft");
const button260 = document.querySelector("#button-capri-splash");
const button261 = document.querySelector("#button-capri-storm");
const button262 = document.querySelector("#button-capri-thai");
const button263 = document.querySelector("#button-capri-tiffany");
const button264 = document.querySelector("#button-capri-vader");
const button265 = document.querySelector("#button-capri-wild");

const button266 = document.querySelector("#button-capri-negro");
const button267 = document.querySelector("#button-capri-grismelange");
const button268 = document.querySelector("#button-capri-terra");
const button269 = document.querySelector("#button-capri-rojo");
const button270 = document.querySelector("#button-capri-magentamelange");
const button271 = document.querySelector("#button-capri-aquamelange");
const button272 = document.querySelector("#button-capri-lavandamelange");
const button273 = document.querySelector("#button-capri-rosamelange");
const button274 = document.querySelector("#button-capri-verdemilitar");
const button275 = document.querySelector("#button-capri-petroleo");
const button276 = document.querySelector("#button-capri-rosaviejo");
const button277 = document.querySelector("#button-capri-bordomelange");
const button278 = document.querySelector("#button-capri-turquesa");
const button279 = document.querySelector("#button-capri-durazno");
const button280 = document.querySelector("#button-capri-zanahoria");
const button281 = document.querySelector("#button-capri-verdebenetton");
const button282 = document.querySelector("#button-capri-verdeingles");
const button283 = document.querySelector("#button-capri-morado");
const button284 = document.querySelector("#button-capri-petroleomelange");
const button285 = document.querySelector("#button-capri-fucsia");
const button286 = document.querySelector("#button-capri-plomomelange");
const button287 = document.querySelector("#button-capri-mostaza");
const button288 = document.querySelector("#button-capri-verdeesmeralda");
const button289 = document.querySelector("#button-capri-azulmarino");
const button290 = document.querySelector("#button-capri-celestepastel");
const button291 = document.querySelector("#button-capri-lilapastel");
const button292 = document.querySelector("#button-capri-azulfrancia");
const button293 = document.querySelector("#button-capri-violeta");
const button294 = document.querySelector("#button-capri-grisplomo");

button235.onclick = function () {
  changeImageCapE("Lemur/Capris/capriAlba.webp");
}
button236.onclick = function () {
  changeImageCapE("Lemur/Capris/capriAurora.webp");
}
button237.onclick = function () {
  changeImageCapE("Lemur/Capris/capriCayena.webp");
}
button238.onclick = function () {
  changeImageCapE("Lemur/Capris/capriEira.webp");
}
button239.onclick = function () {
  changeImageCapE("Lemur/Capris/capriEuphoria.webp");
}
button240.onclick = function () {
  changeImageCapE("Lemur/Capris/capriForestPrint.webp");
}
button241.onclick = function () {
  changeImageCapE("Lemur/Capris/capriGolden.webp");
}
button242.onclick = function () {
  changeImageCapE("Lemur/Capris/capriHanna.webp");
}
button243.onclick = function () {
  changeImageCapE("Lemur/Capris/capriHiedra.webp");
}
button244.onclick = function () {
  changeImageCapE("Lemur/Capris/capriIcePrint.webp");
}
button245.onclick = function () {
  changeImageCapE("Lemur/Capris/capriIndiana.webp");
}
button246.onclick = function () {
  changeImageCapE("Lemur/Capris/capriJane.webp");
}
button247.onclick = function () {
  changeImageCapE("Lemur/Capris/capriKahlo.webp");
}
button248.onclick = function () {
  changeImageCapE("Lemur/Capris/capriKalesi.webp");
}
button249.onclick = function () {
  changeImageCapE("Lemur/Capris/capriKitty.webp");
}
button250.onclick = function () {
  changeImageCapE("Lemur/Capris/capriLimaPrint.webp");
}
button251.onclick = function () {
  changeImageCapE("Lemur/Capris/capriLove.webp");
}
button252.onclick = function () {
  changeImageCapE("Lemur/Capris/capriMei.webp");
}
button253.onclick = function () {
  changeImageCapE("Lemur/Capris/capriMirage.webp");
}
button254.onclick = function () {
  changeImageCapE("Lemur/Capris/capriParadise.webp");
}
button255.onclick = function () {
  changeImageCapE("Lemur/Capris/capriPhoenix.jpg");
}
button256.onclick = function () {
  changeImageCapE("Lemur/Capris/capriRosePrint.jpg");
}
button257.onclick = function () {
  changeImageCapE("Lemur/Capris/capriSavage.webp");
}
button258.onclick = function () {
  changeImageCapE("Lemur/Capris/capriSnow.webp");
}
button259.onclick = function () {
  changeImageCapE("Lemur/Capris/capriSoft.webp");
}
button260.onclick = function () {
  changeImageCapE("Lemur/Capris/capriSplash.webp");
}
button261.onclick = function () {
  changeImageCapE("Lemur/Capris/capriStorm.jpg");
}
button262.onclick = function () {
  changeImageCapE("Lemur/Capris/capriThai.webp");
}
button263.onclick = function () {
  changeImageCapE("Lemur/Capris/capriTiffany.webp");
}
button264.onclick = function () {
  changeImageCapE("Lemur/Capris/capriVader.webp");
}
button265.onclick = function () {
  changeImageCapE("Lemur/Capris/capriWild.jpg");
}

button266.onclick = function () {
  changeImageCapC("Lemur/Capris/capriNegro.webp");
}
button267.onclick = function () {
  changeImageCapC("Lemur/Capris/capriGrisMelange.webp");
}
button268.onclick = function () {
  changeImageCapC("Lemur/Capris/capriTerra.webp");
}
button269.onclick = function () {
  changeImageCapC("Lemur/Capris/capriRojo.webp");
}
button270.onclick = function () {
  changeImageCapC("Lemur/Capris/capriMagentaMelange.webp");
}
button271.onclick = function () {
  changeImageCapC("Lemur/Capris/capriAquaMelange.webp");
}
button272.onclick = function () {
  changeImageCapC("Lemur/Capris/capriLavandaMelange.webp");
}
button273.onclick = function () {
  changeImageCapC("Lemur/Capris/capriRosaMelange.webp");
}
button274.onclick = function () {
  changeImageCapC("Lemur/Capris/capriVerdeMilitar.webp");
}
button275.onclick = function () {
  changeImageCapC("Lemur/Capris/capriPetroleo.jpg");
}
button276.onclick = function () {
  changeImageCapC("Lemur/Capris/capriRosaViejo.webp");
}
button277.onclick = function () {
  changeImageCapC("Lemur/Capris/capriBordoMelange.webp");
}
button278.onclick = function () {
  changeImageCapC("Lemur/Capris/capriTurquesa.webp");
}
button279.onclick = function () {
  changeImageCapC("Lemur/Capris/capriDurazno.webp");
}
button280.onclick = function () {
  changeImageCapC("Lemur/Capris/capriZanahoria.webp");
}
button281.onclick = function () {
  changeImageCapC("Lemur/Capris/capriVerdeBenetton.webp");
}
button282.onclick = function () {
  changeImageCapC("Lemur/Capris/capriVerdeIngles.webp");
}
button283.onclick = function () {
  changeImageCapC("Lemur/Capris/capriMorado.webp");
}
button284.onclick = function () {
  changeImageCapC("Lemur/Capris/capriPetroleoMelange.webp");
}
button285.onclick = function () {
  changeImageCapC("Lemur/Capris/capriFucsia.jpg");
}
button286.onclick = function () {
  changeImageCapC("Lemur/Capris/capriPlomoMelange.webp");
}
button287.onclick = function () {
  changeImageCapC("Lemur/Capris/capriMostaza.webp");
}
button288.onclick = function () {
  changeImageCapC("Lemur/Capris/capriVerdeEsmeralda.webp");
}
button289.onclick = function () {
  changeImageCapC("Lemur/Capris/capriAzulMarino.webp");
}
button290.onclick = function () {
  changeImageCapC("Lemur/Capris/capriCelestePastel.webp");
}
button291.onclick = function () {
  changeImageCapC("Lemur/Capris/capriLilaPastel.webp");
}
button292.onclick = function () {
  changeImageCapC("Lemur/Capris/capriAzulFrancia.webp");
}
button293.onclick = function () {
  changeImageCapC("Lemur/Capris/capriVioleta.webp");
}
button294.onclick = function () {
  changeImageCapC("Lemur/Capris/capriGrisPlomo.webp");
}
