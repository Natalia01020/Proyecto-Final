//CALCULADORA #1 DE AHORROS
function CalcularAhorros() {
    // Obtener los valores de los campos de formulario
    let Cantidadinicial = parseFloat(document.getElementById('Cantidadinicial').value);
    let Aportemensual = parseFloat(document.getElementById('Aportemensual').value);
    let Tasadeinteres = parseFloat(document.getElementById('Tasadeinteres').value) / 100;
    let tiempo = parseInt(document.getElementById('tiempo').value);

    // Validar los valores
    if (isNaN(Cantidadinicial) || isNaN(Aportemensual) || isNaN(Tasadeinteres) || isNaN(tiempo)) {
        document.getElementById('resultado1').innerText = "Por favor, ingrese valores válidos en todos los campos.";
        return;
    }

    // Calcular el número total de meses
    let Mesestotal = tiempo * 12;

    // Inicializar el monto total de ahorro
    let Ahorrostotal = Cantidadinicial;

    // Calcular el ahorro total
    for (let i = 1; i <= Mesestotal; i++) {
        Ahorrostotal += Aportemensual;
        let interesMensual = Ahorrostotal * (Tasadeinteres / 12);
        Ahorrostotal += interesMensual;
    }

    // Mostrar el resultado
    document.getElementById('resultado1').innerText = `Monto total ahorrado después de ${tiempo} años: $${Ahorrostotal.toFixed(2)}`;
}

//CALCULADORA #2 DE PRESUPUESTOS
// Función para calcular el presupuesto mensual
function CalcularPresupuesto() {
    let ingresos = parseFloat(document.getElementById('ingresos').value);
    let alquiler = parseFloat(document.getElementById('alquiler').value);
    let comida = parseFloat(document.getElementById('comida').value);
    let transporte = parseFloat(document.getElementById('transporte').value);
    let entretenimiento = parseFloat(document.getElementById('entretenimiento').value);
    let otros = parseFloat(document.getElementById('otros').value);

    let gastosTotales = alquiler + comida + transporte + entretenimiento + otros;
    let saldo = ingresos - gastosTotales;

    document.getElementById('resultadoPresupuesto').innerText = `Saldo neto después de los gastos: $${saldo.toFixed(2)}`;

    if (saldo === 0) {
        alert("Tu saldo es cero. Revisa tus gastos para evitar un déficit.");
    } else if (saldo > 0) {
        alert("¡Tienes un saldo positivo! Considera ahorrar o invertir ese excedente.");
    }if (saldo < 0) {
        alert("Tu saldo es negativo. Considera disminuir el monto en alguno de los egresos presupuestados para evitar deudas")
    }
}

//CALCULADORA #3 DE EVA
function calcularEVA() {
    let nopat = parseFloat(document.getElementById('nopat').value);
    let capitalInvertido = parseFloat(document.getElementById('capitalInvertido').value);
    let costoCapital = parseFloat(document.getElementById('costoCapital').value) / 100;

    if (isNaN(nopat) || isNaN(capitalInvertido) || isNaN(costoCapital)) {
        document.getElementById('resultadoEVA').innerText = "Por favor, ingresa valores válidos en todos los campos.";
        return;
    }

    let eva = nopat - (capitalInvertido * costoCapital);

    if (eva > 0) {
        document.getElementById('resultadoEVA').innerText = `¡Genial! Tu proyecto genera un EVA positivo de $${eva.toFixed(2)}. Considera invertir más en áreas rentables.`;
    } else if (eva < 0) {
        document.getElementById('resultadoEVA').innerText = `Tu proyecto genera un EVA negativo de $${Math.abs(eva).toFixed(2)}. Revisa tus estrategias de inversión.`;
    } else {
        document.getElementById('resultadoEVA').innerText = `Tu proyecto genera un EVA neutro, revisa tu estrategia de costos y beneficios.`;
    }
}

//CALCULADORA #4 DE ROI
function calcularROI() {
    let costoInversion = parseFloat(document.getElementById('costoInversion').value);
    let ganancia = parseFloat(document.getElementById('ganancia').value);

    if (isNaN(costoInversion) || isNaN(ganancia)) {
        document.getElementById('resultadoROI').innerText = "Por favor, ingrese valores válidos en todos los campos.";
        return;
    }

    let roi = (ganancia / costoInversion) * 100;
   
    if (roi > 0) {
        document.getElementById('resultadoROI').innerText = `¡Felicidades! Tu inversión ha sido rentable. ROI: ${roi.toFixed(2)}%`;
    }else if (roi < 0) {
        document.getElementById('resultadoROI').innerText = `Tu inversión no ha sido rentable. Revisa tu estrategia. ROI: ${roi.toFixed(2)}%`;
    }else {
        document.getElementById('resultadoROI').innerText = `Tu inversión no ha generado ni pérdidas ni ganancias. ROI: ${roi.toFixed(2)}%`;
    }
}