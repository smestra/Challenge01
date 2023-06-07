// botones
const btnA1 = document.getElementById("btnA1");
const btnB2 = document.getElementById("btnB2");
const btnC3 = document.getElementById("btnC3");
const btnD4 = document.getElementById("btnD4");
const btnE5 = document.getElementById("btnE5");
const btnF6 = document.getElementById("btnF6");
const btnG7 = document.getElementById("btnG7");
const btnH8 = document.getElementById("btnH8");
const btnI9 = document.getElementById("btnI9");
const btnJ0 = document.getElementById("btnJ0");
const btnClear = document.getElementById("clear");
const btnOk = document.getElementById("enter");

// variables numeros y letras
let letters = "";
let numbers = "";

// funciones

const fnA1 = () => {
  if (letters == "") {
    letters = "A";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    alert("Accion Invalida");
  }
};

const fnB2 = () => {
  if (letters == "A") {
    letters += "B";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    alert("Accion Invalida");
  }
};

const fnC3 = () => {
  if (letters == "AB") {
    letters += "C";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    alert("Accion Invalida");
  }
};

const fnD4 = () => {
  if (letters == "ABC") {
    letters += "D";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    alert("Accion Invalida");
  }
};

const fnE5 = () => {
  if (letters == "ABCD") {
    letters += "E";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    alert("Accion Invalida");
  }
};

const fnF6 = () => {
  if (letters == "ABCDE") {
    letters += "F";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    alert("Accion Invalida");
  }
};

const fnG7 = () => {
  if (letters == "ABCDEF") {
    letters += "G";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    alert("Accion Invalida");
  }
};

const fnH8 = () => {
  if (letters == "ABCDEFG") {
    letters += "H";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    alert("Accion Invalida");
  }
};

const fnI9 = () => {
  if (letters == "ABCDEFGH") {
    letters += "I";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    alert("Accion Invalida");
  }
};

const fnJ0 = () => {
  if (letters == "ABCDEFGHI") {
    letters += "J";
    document.getElementById("letrasId").innerHTML = letters;
  } else {
    alert("Accion Invalida");
  }
};

const loadNumbers = () => {
  numbers = "";
  if (letters == "ABCDEFGHIJ") {
    for (let i = 1; i <= 10; i++) {
      numbers += i.toString();
      document.getElementById("numerosId").innerHTML = numbers;
    }
  }
};

const fnEnter = () => {
  if (letters == "ABCDEFGHIJ") {
    loadNumbers();
  } else {
    alert("Accion Invalida");
  }
};

const fnClear = () => {
  if (letters == "ABCDEFGHIJ" && numbers == "12345678910") {
    letters = "";
    numbers = "";
    document.getElementById("letrasId").innerHTML = "";
    document.getElementById("numerosId").innerHTML = "";
  } else {
    alert("Accion Invalida");
  }
};

// eventos
btnA1.onclick = function () {
  // funcion que se activa con el boton  A-1
  fnA1();
};

btnB2.onclick = function () {
  // funcion que se activa con el boton  B-2
  fnB2();
};

btnC3.onclick = function () {
  // funcion que se activa con el boton  C-3
  fnC3();
};

btnD4.onclick = function () {
  // funcion que se activa con el boton  D-4
  fnD4();
};

btnE5.onclick = function () {
  // funcion que se activa con el boton  E-5
  fnE5();
};
btnF6.onclick = function () {
  // funcion que se activa con el boton  F-6
  fnF6();
};
btnG7.onclick = function () {
  // funcion que se activa con el boton  G-7
  fnG7();
};
btnH8.onclick = function () {
  // funcion que se activa con el boton  H-8
  fnH8();
};
btnI9.onclick = function () {
  // funcion que se activa con el boton  I-9
  fnI9();
};
btnJ0.onclick = function () {
  // funcion que se activa con el boton  J-0
  fnJ0();
};
btnClear.onclick = function () {
  // funcion que se activa con el boton  clear
  fnClear();
};
btnOk.onclick = function () {
  fnEnter();
};
