let pxe = 0;
let pye = 400;
let g = true;
let h = true;

let rx = 300;
let ry = 570; // posición Y del rectángulo
let rw = 150; // ancho del rectángulo
let izq = false;
let der = false;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0, 0, 25);
  
  // Dibujar elipse
  fill(0, 0, 255);
  ellipse(pxe, pye, 40, 40);
  
  // Dibujar rectángulo base
  fill(0, 255, 0);
  rect(rx, ry, rw, 20);
  
  // Movimiento del rectángulo base (controlado por teclas A y D)
  if (izq) {
    rx -= 5;
  }
  if (der) {
    rx += 5;
  }
  
  // Asegurarse de que el rectángulo no se salga de la pantalla
  if (rx < 0) {
    rx = 0;
  }
  if (rx + rw > width) {
    rx = width - rw;
  }

  // Movimiento de la elipse
  if (g == true) {
    pxe += 2;
    if (pxe >= 780) {
      g = false;
    }
  }
  
  if (g == false) {
    pxe -= 2;
    if (pxe <= 20) {
      g = true;
    }
  }

  // Rebote de la elipse en el rectángulo base
  if (pye + 20 >= ry && pxe >= rx && pxe <= rx + rw) {
    h = false; // Cambia la dirección vertical de la elipse
  }

  if (h == true) {
    pye += 2;
    if (pye >= 580) {
      h = false;
    }
  }

  if (h == false) {
    pye -= 2;
    if (pye <= 20) {
      h = true;
    }
  }

  // Mostrar coordenadas de la elipse
  textSize(36);
  fill(255);
  text("X: " + pxe, 400, 30);
  text("Y: " + pye, 10, 300);
}

// Detectar teclas presionadas para mover el rectángulo
function keyPressed() {
  if (key == "a" || key == "A") {
    izq = true;
  }

  if (key == "d" || key == "D") {
    der = true;
  }
}

// Detectar teclas liberadas para detener el movimiento del rectángulo
function keyReleased() {
  if (key == "a" || key == "A") {
    izq = false;
  }

  if (key == "d" || key == "D") {
    der = false;
  }
}
