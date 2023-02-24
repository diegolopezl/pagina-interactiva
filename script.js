const playPause = document.querySelector(".play-pause");
const music = document.querySelector(".music");
const playButton = document.querySelector(".play-button");
const cd = document.querySelector(".cd");

const notasArray = Array.from(document.querySelectorAll(".nota-input"));
const gradoArray = Array.from(document.querySelectorAll(".grado"));

const avg = document.querySelector(".promedio");
const avgColor = document.querySelector(".promedio-color");

const reset = document.querySelector(".reset-btn");
const calcNav = document.querySelector(".scroll-to-calc");
const sbNav = document.querySelector(".scroll-to-sb");
const contactBtn = document.querySelector(".contact");

const soundBtnArray = Array.from(document.querySelectorAll(".sound-button"));
const textoArray = Array.from(document.querySelectorAll(".sound-text"));
const imageArray = Array.from(document.querySelectorAll(".sound-img"));
const audioArray = Array.from(document.querySelectorAll(".sound-audio"));

const contactForm = document.querySelector(".contact-form");
const email = document.querySelector(".email");
const nombre = document.querySelector(".name");
const formMessage = document.querySelector(".text-message");
const validEmail = /\S+@\S+\.\S+/;
const contactElement = document.querySelectorAll(".contact-element");

const video = document.querySelector(".space-bg");
const floatingAmongus = document.querySelector(".amongus-float");

calcNav.addEventListener("click", () => {
  scrollPage(750);
});

sbNav.addEventListener("click", () => {
  scrollPage(1500);
});

contactBtn.addEventListener("click", () => {
  scrollPage(2250);
});

playButton.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playPause.classList.add("fa-circle-pause");
    playPause.classList.remove("fa-circle-play");
    cd.classList.add("spin");
    cd.classList.remove("stop-spin");
  } else if (music.play) {
    music.pause();
    playPause.classList.add("fa-circle-play");
    playPause.classList.remove("fa-circle-pause");
    cd.classList.remove("spin");
    cd.classList.add("stop-spin");
  }
});

notasArray.forEach((nota) => {
  nota.addEventListener("input", (e) => {
    if (e.target.classList.contains("nota-input")) {
      color(notasArray.indexOf(e.target));
    }
  });
});

reset.addEventListener("click", () => {
  resetValues();
});

window.addEventListener("load", () => {
  resetValues();
});

function resetValues() {
  let color = "gray";
  notasArray.forEach((e) => {
    e.value = "";
  });

  gradoArray.forEach((e) => {
    e.style.backgroundColor = color;
  });

  avgColor.style.backgroundColor = color;
  avg.innerText = "00";
}

function color(ind) {
  let color = "gray";
  let value = notasArray[ind].value;
  if (value >= 0) {
    if (value >= 80) {
      color = "green";
    } else if (value >= 60 && value <= 79) {
      color = "yellow";
    } else {
      color = "red";
    }
  }
  gradoArray[ind].style.backgroundColor = color;
  calculoTotal();
}

function calculoTotal() {
  const [input1, input2, input3] = notasArray.map((nota) =>
    parseInt(nota.value)
  );
  let color = "gray";
  if (input1 && input2 && input3) {
    const average = Math.round((input1 + input2 + input3) / 3);
    avg.innerText = average;
    if (average >= 80) {
      color = "green";
    } else if (average >= 60 && average <= 79) {
      color = "yellow";
    } else {
      color = "red";
    }
  }
  avgColor.style.backgroundColor = color;
}

function scrollPage(y) {
  window.scrollTo(0, y);
}

soundBtnArray.forEach((button) => {
  button.addEventListener("click", () => {
    const ind = soundBtnArray.indexOf(button);
    const mp3 = audioArray[ind];
    if (mp3.paused) {
      mp3.play();
    } else {
      mp3.currentTime = 0;
      mp3.play();
    }
  });
});

const soundBoard = [
  {
    image: "./media/imagenes/bing-chilling.png",
    text: "bing chilling 🥶",
    audio: "./media/musica/bing-chilling.mp3",
  },
  {
    image: "./media/imagenes/metal-pipe.png",
    text: "metal pipe 🦿",
    audio: "./media/musica/metal-pipe-falling.mp3",
  },
  {
    image: "./media/imagenes/roblox-mad.png",
    text: "angry 😡",
    audio: "./media/musica/angry.mp3",
  },
  {
    image: "./media/imagenes/vine-boom.png",
    text: "🤨",
    audio: "./media/musica/vine-boom.mp3",
  },
  {
    image: "./media/imagenes/goofy.png",
    text: "goofy ahh beat 🤓",
    audio: "./media/musica/goofy-ahh-beat.mp3",
  },
  {
    image: "./media/imagenes/gawd-dayum.png",
    text: "gawd dayum 😧",
    audio: "./media/musica/gah-dayum.mp3",
  },
  {
    image: "./media/imagenes/wth.png",
    text: "ooh what the hell 🤯",
    audio: "./media/musica/oh-what-the-hell.mp3",
  },
  {
    image: "./media/imagenes/whatsapp.png",
    text: "whatsapp 💚",
    audio: "./media/musica/whatsapp.mp3",
  },
  {
    image: "./media/imagenes/baller.png",
    text: "baller 🥵",
    audio: "./media/musica/baller.mp3",
  },
  {
    image: "./media/imagenes/frog-laugh.png",
    text: "laugh 🤣",
    audio: "./media/musica/laugh.mp3",
  },
  {
    image: "./media/imagenes/quandale.png",
    text: "quandale dingle 🥸",
    audio: "./media/musica/quandale-dingle.mp3",
  },
  {
    image: "./media/imagenes/alert.png",
    text: "alert 📢",
    audio: "./media/musica/danger-alarm.mp3",
  },
];

function addSoundBoardData() {
  for (let i = 0; i < 12; i++) {
    imageArray[i].setAttribute("src", soundBoard[i].image);
    textoArray[i].innerText = soundBoard[i].text;
    audioArray[i].setAttribute("src", soundBoard[i].audio);
  }
}

addSoundBoardData();

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    nombre.value == "" ||
    email.value == "" ||
    !email.value.match(validEmail) ||
    formMessage.value == ""
  ) {
    if (nombre.value == "") {
      nombre.classList.add("invalid-input");
      nombre.value = "";
      nombre.placeholder = "Invalid input";
    }
    if (email.value == "") {
      email.classList.add("invalid-input");
      email.value = "";
      email.placeholder = "Invalid input";
    } else if (!email.value.match(validEmail)) {
      email.classList.add("invalid-input");
      email.value = "";
      email.placeholder = "Invalid Email Address!";
    }
    if (formMessage.value == "") {
      formMessage.classList.add("invalid-input");
      formMessage.value = "";
      formMessage.placeholder = "Please Enter a Message!";
    }
  } else {
    nombre.value = "";
    email.value = "";
    formMessage.value = "";
    contactElement.forEach((ce) => {
      ce.classList.add("hide-contact");
    });
    video.style.opacity = 1;
    floatingAmongus.classList.add("ejected");
  }
});

email.addEventListener("input", () => {
  email.classList.remove("invalid-input");
  email.placeholder = "Email";
});

nombre.addEventListener("input", () => {
  nombre.classList.remove("invalid-input");
  nombre.placeholder = "Nombre";
});

formMessage.addEventListener("input", () => {
  formMessage.classList.remove("invalid-input");
  formMessage.placeholder = "Mensaje";
});
