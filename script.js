const canciones = [
  { titulo: "25 FLORES", archivo: "canciones/1 (1).m4a", letra: "Te entrego 25 flores\nUna por cada mal de amores\nUn badboy no es normal que llore\nDel amor malos jugadores", inicio: 54 },
  { titulo: "SOLA", archivo: "canciones/1 (1).mp3", letra: "Señorita usted es una mujer tan bella\nVeo en su mirada bailar las estrellas\nCon su sonrisa, mi razon se estrella", inicio: 110 },
  { titulo: "A MARTE", archivo: "canciones/1 (2).mp3", letra: "De otro planeta, vengo yo a buscarte\nPa llevarte a marte\nArma las maletas que voy a transportarte, no vas a escaparte", inicio: 74 },
  { titulo: "DEL DESESPERO", archivo: "canciones/1 (3).mp3", letra: "Del desespero casi apago mi luz\nMi sueño se deshace con el humo\nPerdonm si ahora brillo mas que tu\nOlvide que es resta ya solo sumo", inicio: 111 },
  { titulo: "OBSESIONADO", archivo: "canciones/1 (4).mp3", letra: "Obsesionado con esa baby, no la dejo de pensar\nDime donde estas shorty que iré\nNo me importa el lugar, no eres lo que imagine\nEres mas", inicio: 107 },
  { titulo: "LINDO", archivo: "canciones/1 (5).mp3", letra: "Es que mi abuela me dijo\nQue siempre fui distinto, la sonrisa en mi cara\nMe hacia ver demasiado lindo", inicio: 53 },
  { titulo: "NIÑO BUENO", archivo: "canciones/1 (6).mp3", letra: "Tu novia ve al knaya y tiene nuevo crush\nYo soy el number one, ni tu ni tu\nNo hago esto siempre porque es aburrido\nSin competencia no hay sentido\nRapeando re gamin, pa achantar resentidos\nMe siento jesucristo todos son hijos mios", inicio: 66 },
  { titulo: "CONDENA", archivo: "canciones/1 (7).mp3", letra: "Me siento solo, solo...Ya no estas\nPara mi eres todo, todo...Pa ti soy na´\nQue obra de arte perfecta que seria la monalisa\nDonde ella, tuviera tu sonrisa", inicio: 57 },
  { titulo: "22", archivo: "canciones/1 (8).mp3", letra: "Knaya pasó el tiempo...Me la chupan\nA ella no le gusta mi cara, le gusta mi song\nLes cocino a mi manera, les meto sazon", inicio: 93 },
  { titulo: "23", archivo: "canciones/1 (9).mp3", letra: "No quiero andar de agrandado, pero se me da bien\nNo quiero tirar de agrandado, pero se me da bien\nEstoy preparando los anillos, estos son los 23\nPapi 100% flow, manejo 0 estres", inicio: 39 },
  { titulo: "EXPLICAME", archivo: "canciones/1 (10).mp3", letra: "Y te prometi que me haria famoso, escribiendote letras a ti\nY aunque me duela, sabes bien que lo voy a cumplir\nQue facil es amar cuando se es correspondido\nvaliente es el que lo hace aunque no lo haya sido", inicio: 73 },
  { titulo: "¿Y SI TE VAS?", archivo: "canciones/1 (11).mp3", letra: "Ya no te quiero, me quiero mas\nNo malgastar otro compáz, si no me aportas, me sobras\nQue es lo que quiero? Quiero paz\nAlguien que me de mi lugar", inicio: 63 },
  { titulo: "BLESSED", archivo: "canciones/1 (12).mp3", letra: "Paseando con cara de menor de edad\nCargando un flow tan gordo, sin miedo lo exporto, hasta soy ilegal\nSiendo un knaya me llaman don Juan", inicio: 39 },
  { titulo: "24 CARA B", archivo: "canciones/1 (13).mp3", letra: "Vive enamorada de como rapea el buen muchacho\nYo le busco el pan y ella te pone los cachos\nQue paso? De one shoot", inicio: 38 },
  { titulo: "STALKER", archivo: "canciones/1 (14).mp3", letra: "Tu voz, tu boca me dañan\nRecuerdos que a mi me engañan\nMe en loqueci en la batalla\n", inicio: 48 },
  { titulo: "RORO", archivo: "canciones/2 (1).mp3", letra: "A mi me apetece, que sea mi plato\nDe almuerzo, de cena, el chorizo me pese\nRoro, que linda te ves\nCara de niña buena que desaparece", inicio: 0 },
  { titulo: "SHHH", archivo: "canciones/2 (2).mp3", letra: "Estaba mal, buscando la key\nUna eternidad pa salir de ahi\nY aunque falte cash, sere MVP\nSabiendo que tan, le hago que tin", inicio: 66 },
  { titulo: "SI TE DESCUIDAS, TE ROBO", archivo: "canciones/2 (3).mp3", letra: "Ya son las 3am y sigo despierto\nDime si te atreves shorty, yo te pego el call\nQue tu novio no se entere, que juegue nintendo", inicio: 94 },
  { titulo: "SI UN DIA NO ESTAMOS MAS", archivo: "canciones/2 (4).mp3", letra: "Tu rostro, tu pelo y esa sonrisa mi cielo\nSabes muy bien que se hicieron solo pa mi, pa mi\nMi voz, el tintero, la galaxia, el mundo entero y mis te quiero\nSe hicieron solo pa ti", inicio: 86 },
  { titulo: "VIVIR SIN TI ME MATA", archivo: "canciones/2 (5).mp3", letra: "Se sabe, que mi patrimonio se expande\nQue soy lo que soñe cuando habia hambre\nAhora se pega facil todo lo que yo cante\nPero ser el amor de tu vida me quedo grande", inicio: 54 },
  { titulo: "YAPERBLUE", archivo: "canciones/2 (6).mp3", letra: "Quiero dinero, dinero, dinero\nDespertar entre las racks, perras aburrieron", inicio: 54 },
  { titulo: "ANGEL", archivo: "canciones/2 (7).mp3", letra: "Sera que mira mi chat?\nAsi como miro el tuyo esperando un mensaje\nSera que me imaginas?\nAsi como te sueño a ti modelando ese traje", inicio: 28 },
  { titulo: "BUEN MUCHACHO", archivo: "canciones/2 (8).mp3", letra: "Su novio se vuelve un diablo, al menos le lucen los cachos\nMentiris no, la toco y la despacho\nGancho\nLe encantan los flacos ojerosos y que vistan ancho\nQue tengan cara de buen muchacho", inicio: 97 },
  { titulo: "CLICHÉ", archivo: "canciones/2 (9).mp3", letra: "Solamente quiero ser feliz\nViendote ser feliz a ti\nTu risa hace rato no la escucho, para mi ya es mucho\nNo verte sonreir", inicio: 36 },
  { titulo: "CUANDO LLEGA LA NOCHE", archivo: "canciones/2 (10).mp3", letra: "Pero cuando llega la noche\nYo me desvelo, mai pensandote\nBebo entre fantasmas y no se que hacer\nQuizas en la vida to´ termine bien", inicio: 107 },
  { titulo: "SI LO QUIERO, LO TOMO", archivo: "canciones/2 (11).mp3", letra: "Pregunta quienes somos, cuantas mujeres como\nSi lo quiero, lo tomo\nYo sueno bien y vos no", inicio: 7 },
  { titulo: "HABLAR DE DINERO", archivo: "canciones/2 (12).mp3", letra: "Quiero hablar de dinero\nSolo el es puro y verdadero\nEn realidad es lo que yo quiero\n", inicio: 80 },
  { titulo: "DONDE ESTA?", archivo: "canciones/2 (13).mp3", letra: "No... fue el que con esto termino\nMientras yo a ti te di amor, tu me  diste dolor\ndonde esta??\nEl dulce de tus labios", inicio: 104 },
  { titulo: "CARIÑOSO", archivo: "canciones/2 (14).mp3", letra: "Y si bailamos? y si corremos?\nY si jugamos y jodemos?\nY si nos escapamos nos encontremos?\nQue el tiempo lo recuperemos", inicio: 61 },
  { titulo: "DARK MOON", archivo: "canciones/2 (15).mp3", letra: "Trabajando, sabes soy mejor\nCreador de juegos, bae no jugador\nAmor vamos a vivir en el espacio", inicio: 48 },
  { titulo: "ENCAJANDO", archivo: "canciones/2 (16).mp3", letra: "Yo quiero mas, darling, darling, quiero mas\nSubar hasta el cielo, entre estrellas me voy a colar\nVerte una vez mas", inicio: 81 },
  { titulo: "ESTOY SOLO", archivo: "canciones/2 (17).mp3", letra: "Es que pobre de la base que me tenga que coger\nPar minutos, par de frases Que el ego te hace arder\nDesde chinga talentoso pa to lo que quiera hacer\n Papi no naci bendecido, es que todo me sale bien", inicio: 79 },
  { titulo: "FOTO", archivo: "canciones/2 (18).mp3", letra: "bailemos, que de igual estar tan vacios\nNa de amor y todo es sex ma mas rapido\nTrae ese trago, tengo sed, ta tan magico", inicio: 98 },
  { titulo: "GANA", archivo: "canciones/2 (19).mp3", letra: "Dame el okey porque vengo alocado\nRepresento el orden dentro del caos\nNo me diga donde,vivo en todos lados\nYo mataria mounstros pero el suicidio es\nPecado", inicio: 183 },
  { titulo: "GLOSSY", archivo: "canciones/2 (20).mp3", letra: "Claro que vi los redflags, Pero es que me pongo frio\nNo puede estar y aun asi no se ve livido\nNo le hace falta estimulo, por dentro ya esta humedo\nVamos a chingar en publico, en un carro, en el living room", inicio: 100 },
  { titulo: "LISA", archivo: "canciones/2 (21).mp3", letra: "Todo lo que quiero yo, es tu mano poder tomar\nBajo la sestrelas de tailandia caminar\nBrillar tanto que el cielo nos quiera alla", inicio: 188},
  { titulo: "LUNA DESPIERTA", archivo: "canciones/2 (22).mp3", letra: "Y cuando no este, mami no llores mas\nTe juro que no quiero pero se siente mal\nYo me quiero acostar y la luna despierta", inicio: 23 },
  { titulo: "MIRADA FRIA", archivo: "canciones/2 (23).mp3", letra: "Es que esa mirada fria, fria, fria\nSe calienta con lamia, mia, mia\nAl oido me decia, en susurro me pedia\nQue no la soltara y que abandonara el trap", inicio: 187 },
  { titulo: "NUMEROS", archivo: "canciones/2 (24).mp3", letra: "Me respetan como a pablo pero sin los kilogramos\nNena si quiere no hablamos\nTengo un par de culos que esperan que lo hagamos\nMi estilo de vida no es sano", inicio: 45 },
  { titulo: "PERDONAME", archivo: "canciones/2 (25).mp3", letra: "Nuestra song en replay\nLo que de nosotros lo dira el tiempo\nBesame bebe, pa poder ponerle un final feliz a este cuento", inicio: 119 },
  { titulo: "PRETTY", archivo: "canciones/2 (26).mp3", letra: "Ayyy si ambos nos juntamos, la luna la observamos\nNo quiero ser el que la baje  rimando\nQuiero ser el que arrulla al acostarnos", inicio: 74 },
  { titulo: "SENCILLA", archivo: "canciones/2 (27).mp3", letra: "Contigo mami te lo pido\nVente aqui conmigo\nVamonos donde nadie nos vea\nVivo por esta contigo, mami te lo pido\nVamonos donde nadie nos vea", inicio: 157 },
  { titulo: "UNA NOCHE MAS", archivo: "canciones/2 (28).mp3", letra: "No lo se, como es que tus labios me enloquecen maa\nSiento que esta noche nunca va a acabar\nPero estoy despertando, amame mientras tanto\nAmame mientras tanto", inicio: 59 },
  { titulo: "XL", archivo: "canciones/2 (29).mp3", letra: "Si la ves, dile que sigo aqui librando batallas\nSiempre fui good kid aunque me haga el...\nKNAYA", inicio: 153 },
  { titulo: "YA NOS VAMOS", archivo: "canciones/2 (30).mp3", letra: "yo se que hoy no soy el porque de tu sonrisa\nsi lo fui una vez pero paso la brisa\nSali detras de ti ma si corri deprisa\nPerdi tus pisada o te perdi a ti?", inicio: 29 },
  { titulo: "YO DIGO QUE LA QUIERO", archivo: "canciones/2 (31).mp3", letra: "Quiero cumplir, esa fantasia\nEn coche con tu novia mientras yo la conocia\nCristales tintados pa despistar la policia", inicio: 82 },
  { titulo: "LA PVT4 ERA YO", archivo: "canciones/2 (32).mp3", letra: "Si para ser artista\nDebo de sacar mis letras pa poderlas regalas\nPrefiero ser nadie y si voy a ser alguien\nSere el que joda la navida", inicio: 56 },
  { titulo: "LE GUSTO, ME GUSTA", archivo: "canciones/2 (33).mp3", letra: "Es criminal, ese cuerpo es criminal\nTu la ves con su faldita, ella vuela al caminar\nSus beso es un viaje espacial, un universo sin final", inicio: 34 },
  { titulo: "MIENTEME", archivo: "canciones/2 (34).mp3", letra: "Reina, si fui todo para ti\nHacerte sonreir, sin lastimarte\nEs justo pa mi please, contigo soy drink king\nPasandolo fifty en el parque", inicio: 127 },
  { titulo: "PASTO Y RON", archivo: "canciones/2 (35).mp3", letra: "Y aunque duela, soñarla en la noche y no verla\nVi que no era igual su forma de mirar y no puedo lograr entenderla\nFue po rmi temor a perderla?\nLa tuve y no supe quererla ", inicio: 94 },
  { titulo: "QUE PASA PVTA, QUERES QUE TE LA PONGA?", archivo: "canciones/2 (36).mp3", letra: "Estoy haciendo un negocio redondo\nMirando el poso, trappers los noto en el fondo\nEn los playoffs ni pasan de ronda...\nQue pasa puta, queres que te la ponga?", inicio: 8 },
  { titulo: "YO LO SE", archivo: "canciones/2 (37).mp3", letra: "Yo me siento enamorado\nDe ese culo, de esas tetas, de ese caminado\nComo ese escote apretado antoja demasiado\nSabes que no es pa querernos, nada complicado", inicio: 70 },
  { titulo: "SI TU QUIERES, YO QUIERO", archivo: "canciones/2 (38).mp3", letra: "Te miento al decir que to sin ti me va mejor\nHaces que tenga sentido mai respirar\nContigo no hay vacio en el espacio sideral\nVen vamonos, los dos nena", inicio: 77 },
  { titulo: "ELLA SOLO SE IRA", archivo: "canciones/2 (39).mp3", letra: "Bae te miento si niego que no soy adicto a tus ojos y tu pelo\nPresiento que me va a dejar con vacio en lugar de tus besos\nCara mojada, como si en un gran aguacero\nSabes que esto se terminaba, pero yo dije te amo primero", inicio: 51 },
  { titulo: "ANNESTESSIA", archivo: "canciones/3 (1).mp3", letra: "123 pastillas de percoset\n Mierda perro me pase\n123 pastillas de percoset\nMierda perro me pase\nDi de mas, me envenene", inicio: 58 },
  { titulo: "BHP", archivo: "canciones/3 (2).mp3", letra: "No es por maldecir pero sabias que pasaba con mi mente\nTe quiero llamar pero pa que si mientes\nLos segundos que encontre contigo, imaginarios en cel", inicio: 35 },
  { titulo: "L.A", archivo: "canciones/3 (3).mp3", letra: "No se que esta pasando, creo que me drogue\nLa noche es larga, culpa del MD\nViendo los colres en full HD, creo que alusiné\nNA, creo que alusine, 1312 foreva pa que los tombos miren\nFvck the police nea", inicio: 55 },
  { titulo: "LIBERE", archivo: "canciones/3 (4).mp3", letra: "Por fin me solte, mi alma libere\nPensaba que no eras tan niña de lucifer\nPerdiste, que pecado hice?", inicio: 52 },
  { titulo: "NO TE MIENTO", archivo: "canciones/3 (5).mp3", letra: "Quiero sentirte mas baby pegate\nla otra no soy na entonces tu alocate\nMirame a los ojos y despacio besame", inicio: 35 },
  { titulo: "QUIENES SOMOS?", archivo: "canciones/4 (1).mp3", letra: "Si no es pa ganar no lo hacemos\nApostamos lo que tenemos, pues para algo somos buenos\nMejores somos cuantos mas crecemos\nNos tendran que dar lo que merecemos", inicio: 79 },
  { titulo: "WOW", archivo: "canciones/4 (2).mp3", letra: "En el mundo exiten 7 maravillas y ella es la octava si se pone en 4\nLas tengo de perras diciendo wow\nTengo a tu perra diciendo wow\nTengo a tu madre diciendo wow", inicio: 10 },
];

const esMovil = window.innerWidth <= 768;

const columnas = esMovil ? 4 : 8;
const filas = Math.ceil(canciones.length / columnas);
const altoCasillaVh = esMovil ? 22 : 40;
const alturaTotalVh = filas * altoCasillaVh;

document.body.style.minHeight = alturaTotalVh + "vh";
document.getElementById("canciones").style.minHeight = alturaTotalVh + "vh";
document.getElementById("fondoEmojis").style.minHeight = alturaTotalVh + "vh";

// ---------- FONDO DE EMOJIS ----------
const contenedorEmojis = document.getElementById("fondoEmojis");
const totalEmojis = esMovil ? 20 : 35;

for (let i = 0; i < totalEmojis; i++) {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.textContent = "🧸💜";

  const top = Math.random() * alturaTotalVh;
  const duracion = 15 + Math.random() * 25;
  const delayNegativo = -(Math.random() * duracion);

  emoji.style.top = top + "vh";
  emoji.style.animationDuration = duracion + "s";
  emoji.style.animationDelay = delayNegativo + "s";

  contenedorEmojis.appendChild(emoji);
}

// ---------- CANCIONES ----------
const contenedorCanciones = document.getElementById("canciones");

function mezclar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

const margenSeguridad = 6; // vw de margen a cada lado
const anchoUtilizable = 100 - (margenSeguridad * 2);
const anchoCasilla = anchoUtilizable / columnas;

const cancionesMezcladas = mezclar(canciones);

cancionesMezcladas.forEach((cancion, index) => {
  const boton = document.createElement("button");
  boton.className = "cancion";
  boton.textContent = cancion.titulo;
  boton.dataset.index = canciones.indexOf(cancion);

  const col = index % columnas;
  const fila = Math.floor(index / columnas);

  const margenX = anchoCasilla * 0.2;
  const margenYVh = altoCasillaVh * 0.2;

  const left = margenSeguridad + (col * anchoCasilla) + margenX + (Math.random() * (anchoCasilla - margenX * 2));
  const top = (fila * altoCasillaVh) + margenYVh + (Math.random() * (altoCasillaVh - margenYVh * 2));

  boton.style.left = left + "vw";
  boton.style.top = top + "vh";

  const rotacion = (Math.random() * 16) - 8;
  boton.style.transform = `translateX(-50%) rotate(${rotacion}deg)`;

  contenedorCanciones.appendChild(boton);
});

// ---------- WIDGET ----------
const vinilo = document.getElementById("vinilo");
const widget = document.getElementById("widget");
const widgetTitulo = document.getElementById("widgetTitulo");
const widgetLetra = document.getElementById("widgetLetra");
const widgetAudio = document.getElementById("widgetAudio");
const cerrarWidget = document.getElementById("cerrarWidget");
const hint = document.getElementById("hint");

contenedorCanciones.addEventListener("click", (event) => {
  if (!event.target.classList.contains("cancion")) return;

  hint.classList.add("oculto");

  const index = event.target.dataset.index;
  const cancion = canciones[index];

  widgetTitulo.textContent = cancion.titulo;
  widgetLetra.textContent = cancion.letra;
  widgetAudio.src = cancion.archivo;

  const inicio = cancion.inicio || 0;
  const limite = inicio + 25;

  widgetAudio.currentTime = inicio;
  widget.classList.add("activo");
  widgetAudio.play();
  vinilo.classList.add("girando");

  widgetAudio.onended = null;
  widgetAudio.ontimeupdate = () => {
    if (widgetAudio.currentTime >= limite) {
      widgetAudio.pause();
      widgetAudio.ontimeupdate = null;
      widget.classList.remove("activo");
      vinilo.classList.remove("girando");
    }
  };
});

cerrarWidget.addEventListener("click", () => {
  widget.classList.remove("activo");
  widgetAudio.pause();
  widgetAudio.currentTime = 0;
  vinilo.classList.remove("girando");
});

function generarBordeQuemado(elemento, puntosPorLado = 25, irregularidad = 3) {
  const puntos = [];

  function agregarLado(fijo, esVertical, invertido) {
    for (let i = 0; i <= puntosPorLado; i++) {
      const t = i / puntosPorLado;
      const jitter = (Math.random() - 0.5) * irregularidad;
      const pos = (t * 100).toFixed(2);
      const borde = (fijo + jitter).toFixed(2);

      if (esVertical) {
        puntos.push(invertido ? `${borde}% ${100 - pos}%` : `${borde}% ${pos}%`);
      } else {
        puntos.push(invertido ? `${100 - pos}% ${borde}%` : `${pos}% ${borde}%`);
      }
    }
  }

  agregarLado(0, false, false);
  agregarLado(100, true, false);
  agregarLado(100, false, true);
  agregarLado(0, true, true);

  elemento.style.clipPath = `polygon(${puntos.join(", ")})`;
}

generarBordeQuemado(widget, 18, 9);

setTimeout(() => {
  hint.classList.add("oculto");
}, 5000);