const who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
const action = ['se comió', 'hizo pis en', 'aplastó', 'rompió'];
const what = ['mi tarea', 'mi teléfono', 'el coche'];
const when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio'];

window.onload = function() {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];

    const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    document.getElementById('excuse').innerHTML = excuse;
};









