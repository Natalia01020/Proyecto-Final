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
