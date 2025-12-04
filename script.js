console.log("bonjours a toute et a tous")


const titre = document.querySelector('#bouton27')
if (titre) {
  titre.addEventListener('click', () => {
    window.location.href = "niveau1.html";
  });
}

const titre2 = document.querySelector('#bouton28')
if (titre2) {
  titre2.addEventListener('click', () => {
    window.location.href = "niveau2.html";
  });
}

const titre3 = document.querySelector('#bouton29')
if (titre3) {
  titre3.addEventListener('click', () => {
    window.location.href = "niveau3.html";
  });
}


const titre4 = document.querySelector('#bouton')
if (titre4) {
  titre4.addEventListener('click', () => {
    window.location.href = "1question1.html";
  });
}

const titre5 = document.querySelector('#bouton30')
if (titre5) {
  titre5.addEventListener('click', () => {
    window.location.href = "1question2.html";
  });
}

const titre6 = document.querySelector('#bouton32')
if (titre6) {
  titre6.addEventListener('click', () => {
    window.location.href = "1question3.html";
  });
}


const titre666 = document.querySelector('#bou7')
if (titre666) {
  titre666.addEventListener('click', () => {
    window.location.href = "index.html";
  });
}





const themeButton = document.querySelector('#bouton50');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('mode-claire');
  if (document.body.classList.contains('mode-claire')) {
    themeButton.textContent = "mode-sombre !";
  } else {
    themeButton.textContent = "mode-claire !";
  }
});






const boutons = document.querySelectorAll('.reponse');

boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        if (bouton.dataset.correct === "true") {
            bouton.classList.add("bonne-reponse");
            console.log("Bien jouer")
        } else {
            bouton.classList.add("mauvaise-reponse");
            console.log("HAHA NON T NUL")
        }
        boutons.forEach(b => b.disabled = true);
    });
});









const nextBtn = document.createElement("button");
nextBtn.textContent = "Question suivante";
nextBtn.style.display = "none"; 
document.body.appendChild(nextBtn);
nextBtn.addEventListener("click", () => {
    window.location.href = "2question1.html";  
});
const btn3 = document.getElementById("btn3");
if (btn3) {
    btn3.addEventListener("click", () => {
        nextBtn.style.display = "inline-block";
    });
}



const nextBtn1 = document.createElement("button");
nextBtn1.textContent = "Question Suivante";
nextBtn1.style.display = "none"; 
document.body.appendChild(nextBtn1);
nextBtn1.addEventListener("click", () => {
    window.location.href = "2question1.html";  
});
const btn2 = document.getElementById("btn2");
if (btn2) {
    btn2.addEventListener("click", () => {
        nextBtn1.style.display = "inline-block";
    });
}




const nextBtn2 = document.createElement("button");
nextBtn2.textContent = "Question Suivante";
nextBtn2.style.display = "none"; 
document.body.appendChild(nextBtn2);
nextBtn2.addEventListener("click", () => {
    window.location.href = "2question1.html";  
});
const btn1 = document.getElementById("btn1");
if (btn1) {
    btn1.addEventListener("click", () => {
        nextBtn2.style.display = "inline-block";
    });
}




const nextBtn3 = document.createElement("button");
nextBtn3.textContent = "Question Suivante";
nextBtn3.style.display = "none"; 
document.body.appendChild(nextBtn3);
nextBtn3.addEventListener("click", () => {
    window.location.href = "3question1.html";  
});
const btn10 = document.getElementById("btn10");
if (btn10) {
    btn10.addEventListener("click", () => {
        nextBtn3.style.display = "inline-block";
    });
}




const nextBtn4 = document.createElement("button");
nextBtn4.textContent = "Question Suivante";
nextBtn4.style.display = "none"; 
document.body.appendChild(nextBtn4);
nextBtn4.addEventListener("click", () => {
    window.location.href = "3question1.html";  
});
const btn11 = document.getElementById("btn11");
if (btn11) {
    btn11.addEventListener("click", () => {
        nextBtn4.style.display = "inline-block";
    });
}



const nextBtn5 = document.createElement("button");
nextBtn5.textContent = "Question Suivante";
nextBtn5.style.display = "none"; 
document.body.appendChild(nextBtn5);
nextBtn5.addEventListener("click", () => {
    window.location.href = "3question1.html";  
});
const btn12 = document.getElementById("btn12");
if (btn12) {
    btn12.addEventListener("click", () => {
        nextBtn5.style.display = "inline-block";
    });
}



const nextBtn6 = document.createElement("button");
nextBtn6.textContent = "Voir mon résultat";
nextBtn6.style.display = "none"; 
document.body.appendChild(nextBtn6);
nextBtn6.addEventListener("click", () => {
    window.location.href = "fin.html";  
});
const btn19 = document.getElementById("btn19");
if (btn19) {
    btn19.addEventListener("click", () => {
        nextBtn6.style.display = "inline-block";
    });
}



const nextBtn7 = document.createElement("button");
nextBtn7.textContent = "Voir mon résultat";
nextBtn7.style.display = "none"; 
document.body.appendChild(nextBtn7);
nextBtn7.addEventListener("click", () => {
    window.location.href = "fin.html";  
});
const btn20 = document.getElementById("btn20");
if (btn20) {
    btn20.addEventListener("click", () => {
        nextBtn7.style.display = "inline-block";
    });
}



const nextBtn8 = document.createElement("button");
nextBtn8.textContent = "Voir mon résultat";
nextBtn8.style.display = "none"; 
document.body.appendChild(nextBtn8);
nextBtn8.addEventListener("click", () => {
    window.location.href = "fin.html";  
});
const btn21 = document.getElementById("btn21");
if (btn21) {
    btn21.addEventListener("click", () => {
        nextBtn8.style.display = "inline-block";
    });
}













































const nextBtn9 = document.createElement("button");
nextBtn9.textContent = "Question Suivante";
nextBtn9.style.display = "none"; 
document.body.appendChild(nextBtn9);
nextBtn9.addEventListener("click", () => {
    window.location.href = "2question2.html";  
});
const btn4 = document.getElementById("btn4");
if (btn4) {
    btn4.addEventListener("click", () => {
        nextBtn9.style.display = "inline-block";
    });
}





const nextBtn10 = document.createElement("button");
nextBtn10.textContent = "Question Suivante";
nextBtn10.style.display = "none"; 
document.body.appendChild(nextBtn10);
nextBtn10.addEventListener("click", () => {
    window.location.href = "2question2.html";  
});
const btn5 = document.getElementById("btn5");
if (btn5) {
    btn5.addEventListener("click", () => {
        nextBtn10.style.display = "inline-block";
    });
}



const nextBtn11 = document.createElement("button");
nextBtn11.textContent = "Question Suivante";
nextBtn11.style.display = "none"; 
document.body.appendChild(nextBtn11);
nextBtn11.addEventListener("click", () => {
    window.location.href = "2question2.html";  
});
const btn6 = document.getElementById("btn6");
if (btn6) {
    btn6.addEventListener("click", () => {
        nextBtn11.style.display = "inline-block";
    });
}


const nextBtn15 = document.createElement("button");
nextBtn15.textContent = "Question Suivante";
nextBtn15.style.display = "none"; 
document.body.appendChild(nextBtn15);
nextBtn15.addEventListener("click", () => {
    window.location.href = "3question2.html";  
});
const btn13 = document.getElementById("btn13");
if (btn13) {
    btn13.addEventListener("click", () => {
        nextBtn15.style.display = "inline-block";
    });
}



const nextBtn16 = document.createElement("button");
nextBtn16.textContent = "Question Suivante";
nextBtn16.style.display = "none"; 
document.body.appendChild(nextBtn16);
nextBtn16.addEventListener("click", () => {
    window.location.href = "3question2.html";  
});
const btn14 = document.getElementById("btn14");
if (btn14) {
    btn14.addEventListener("click", () => {
        nextBtn16.style.display = "inline-block";
    });
}



const nextBtn17 = document.createElement("button");
nextBtn17.textContent = "Question Suivante";
nextBtn17.style.display = "none"; 
document.body.appendChild(nextBtn17);
nextBtn17.addEventListener("click", () => {
    window.location.href = "3question2.html";  
});
const btn15 = document.getElementById("btn15");
if (btn15) {
    btn15.addEventListener("click", () => {
        nextBtn17.style.display = "inline-block";
    });
}


const nextBtn20 = document.createElement("button");
nextBtn20.textContent = "Voir mon résultat";
nextBtn20.style.display = "none"; 
document.body.appendChild(nextBtn20);
nextBtn20.addEventListener("click", () => {
    window.location.href = "fin.html";  
});
const btn22 = document.getElementById("btn22");
if (btn22) {
    btn22.addEventListener("click", () => {
        nextBtn20.style.display = "inline-block";
    });
}



const nextBtn21 = document.createElement("button");
nextBtn21.textContent = "Voir mon résultat";
nextBtn21.style.display = "none"; 
document.body.appendChild(nextBtn21);
nextBtn21.addEventListener("click", () => {
    window.location.href = "fin.html";  
});
const btn23 = document.getElementById("btn23");
if (btn23) {
    btn23.addEventListener("click", () => {
        nextBtn21.style.display = "inline-block";
    });
}




const nextBtn22 = document.createElement("button");
nextBtn22.textContent = "Voir mon résultat";
nextBtn22.style.display = "none"; 
document.body.appendChild(nextBtn22);
nextBtn22.addEventListener("click", () => {
    window.location.href = "fin.html";  
});
const btn24 = document.getElementById("btn24");
if (btn24) {
    btn24.addEventListener("click", () => {
        nextBtn22.style.display = "inline-block";
    });
}


















const nextBtn30 = document.createElement("button");
nextBtn30.textContent = "Question Suivante";
nextBtn30.style.display = "none"; 
document.body.appendChild(nextBtn30);
nextBtn30.addEventListener("click", () => {
    window.location.href = "2question3.html";  
});
const btn7 = document.getElementById("btn7");
if (btn7) {
    btn7.addEventListener("click", () => {
        nextBtn30.style.display = "inline-block";
    });
}





const nextBtn31 = document.createElement("button");
nextBtn31.textContent = "Question Suivante";
nextBtn31.style.display = "none"; 
document.body.appendChild(nextBtn31);
nextBtn31.addEventListener("click", () => {
    window.location.href = "2question3.html";  
});
const btn8 = document.getElementById("btn8");
if (btn8) {
    btn8.addEventListener("click", () => {
        nextBtn31.style.display = "inline-block";
    });
}




const nextBtn32 = document.createElement("button");
nextBtn32.textContent = "Question Suivante";
nextBtn32.style.display = "none"; 
document.body.appendChild(nextBtn32);
nextBtn32.addEventListener("click", () => {
    window.location.href = "2question3.html";  
});
const btn9 = document.getElementById("btn9");
if (btn9) {
    btn9.addEventListener("click", () => {
        nextBtn32.style.display = "inline-block";
    });
}



const nextBtn33 = document.createElement("button");
nextBtn33.textContent = "Question Suivante";
nextBtn33.style.display = "none"; 
document.body.appendChild(nextBtn33);
nextBtn33.addEventListener("click", () => {
    window.location.href = "3question3.html";  
});
const btn16 = document.getElementById("btn16");
if (btn16) {
    btn16.addEventListener("click", () => {
        nextBtn33.style.display = "inline-block";
    });
}


const nextBtn34 = document.createElement("button");
nextBtn34.textContent = "Question Suivante";
nextBtn34.style.display = "none"; 
document.body.appendChild(nextBtn34);
nextBtn34.addEventListener("click", () => {
    window.location.href = "3question3.html";  
});
const btn17 = document.getElementById("btn17");
if (btn17) {
    btn17.addEventListener("click", () => {
        nextBtn34.style.display = "inline-block";
    });
}


const nextBtn35 = document.createElement("button");
nextBtn35.textContent = "Question Suivante";
nextBtn35.style.display = "none"; 
document.body.appendChild(nextBtn35);
nextBtn35.addEventListener("click", () => {
    window.location.href = "3question3.html";  
});
const btn18 = document.getElementById("btn18");
if (btn18) {
    btn18.addEventListener("click", () => {
        nextBtn35.style.display = "inline-block";
    });
}





const nextBtn36 = document.createElement("button");
nextBtn36.textContent = "Voir mon résultat";
nextBtn36.style.display = "none"; 
document.body.appendChild(nextBtn36);
nextBtn36.addEventListener("click", () => {
    window.location.href = "fin.html";  
});
const btn25 = document.getElementById("btn25");
if (btn25) {
    btn25.addEventListener("click", () => {
        nextBtn36.style.display = "inline-block";
    });
}



const nextBtn37 = document.createElement("button");
nextBtn37.textContent = "Voir mon résultat";
nextBtn37.style.display = "none"; 
document.body.appendChild(nextBtn37);
nextBtn37.addEventListener("click", () => {
    window.location.href = "fin.html";  
});
const btn26 = document.getElementById("btn26");
if (btn26) {
    btn26.addEventListener("click", () => {
        nextBtn37.style.display = "inline-block";
    });
}




const nextBtn38 = document.createElement("button");
nextBtn38.textContent = "Voir mon résultat";
nextBtn38.style.display = "none"; 
document.body.appendChild(nextBtn38);
nextBtn38.addEventListener("click", () => {
    window.location.href = "fin.html";  
});
const btn27 = document.getElementById("btn27");
if (btn27) {
    btn27.addEventListener("click", () => {
        nextBtn38.style.display = "inline-block";
    });
}

