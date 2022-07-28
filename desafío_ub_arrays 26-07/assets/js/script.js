
let radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' }];

let traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

let dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//EJERCICIO 1, AGREGA ELEMENTOS AL ARRAY TRAUMATOLOGIA.
traumatologia.push(
    { hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09.30', especialista: 'MARÍA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10.00', especialista: 'RAÚL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10.30', especialista: 'ANTIONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12.00', especialista: 'MATÍAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' });

//EJERCICIO 2, ELIMINA PRIMER Y ULTIMO REGISTRO.
let eliminaPrimerRegistro = radiologia.shift();
let eliminaUltimoRegistro = radiologia.pop();

//EJERCIO 3, MUESTRA ARRAY DENTAL SEPARADO POR "-". 
dental.forEach(function (c) {
    // document.write(`<p class="container">${c.hora} - ${c.especialista} - ${c.paciente} - ${c.rut} - ${c.prevision}</p>`);
    document.getElementById("ejercicio3").innerHTML += (`<p class="container">${c.hora} - ${c.especialista} - ${c.paciente} - ${c.rut} - ${c.prevision}</p>`);
});

//EJERCICIO 4, MUESTRA NOMBRE DE TODOS LOS PACIENTES ATENDIDOS.

let totalConsultas = traumatologia.concat(radiologia, dental);
totalConsultas.forEach(function (c) {
    //document.write(`<p>${c.paciente}</p>`);

    document.getElementById("nombresPacientesLista").innerHTML += (`<p class="container">${c.paciente}</p>`);
});

//EJERCICIO 5, MUESTRA PACIENTES ISAPRE DENTAL
let totalIsapre = dental.filter(function (c) {
    if (c.prevision == 'ISAPRE')
        //document.write(`<p>${c.paciente} - ${c.prevision}</p>`)
        document.getElementById("ejercicio5").innerHTML += (`<p>${c.paciente} - ${c.prevision}</p>`);
});

//EJERCICIO 6, MUESTRA PACIENTES FONASA TRAUMATOLOGIA
let totalFonasa = traumatologia.filter(function (c) {
    if (c.prevision == 'FONASA')
        //document.write(`<p>${c.paciente} - ${c.prevision}</p>`)
        document.getElementById("ejercicio6").innerHTML += (`<p>${c.paciente} - ${c.prevision}</p>`);
});

let acumuladorRadiologia = "";
for (let i = 0; i < radiologia.length; i++) {
    acumuladorRadiologia += `<tr>
              <td>${radiologia[i].hora}</td>
              <td>${radiologia[i].especialista}</td>
              <td>${radiologia[i].paciente}</td>
              <td>${radiologia[i].rut}</td>
              <td>${radiologia[i].prevision}</td>
              </tr>`;
}
let array1 = Object.values(eliminaPrimerRegistro);
let array2 = Object.values(eliminaUltimoRegistro);
document.getElementById("radiologia").innerHTML = acumuladorRadiologia;
document.getElementById("radiologiaPU").innerHTML = `<p>Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</p>
<p> Se han eliminado los siguientes registros ${array1.join(" - ")}|${array2.join(" - ")}`;


let acumuladorTraumatologia = "";
for (let i = 0; i < traumatologia.length; i++) {
    acumuladorTraumatologia += `<tr>
              <td>${traumatologia[i].hora}</td>
              <td>${traumatologia[i].especialista}</td>
              <td>${traumatologia[i].paciente}</td>
              <td>${traumatologia[i].rut}</td>
              <td>${traumatologia[i].prevision}</td>
              </tr>`;
}
document.getElementById("traumatologia").innerHTML = acumuladorTraumatologia;
document.getElementById("traumatologiaPU").innerHTML = `<p>Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</p>`;


let acumuladorDental = "";
for (let i = 0; i < dental.length; i++) {
    acumuladorDental += `<tr>
              <td>${dental[i].hora}</td>
              <td>${dental[i].especialista}</td>
              <td>${dental[i].paciente}</td>
              <td>${dental[i].rut}</td>
              <td>${dental[i].prevision}</td>
              </tr>`;
}
document.getElementById("dental").innerHTML = acumuladorDental;
document.getElementById("dentalPU").innerHTML = `<p class="mb-5">Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`;


