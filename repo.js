let seznam = ["Skoda", "Ferrari", "Nissan", "Subaru"]

for (const znacka of seznam) {
    document.write(znacka + "</br>")
}

for (let index = 0; index < seznam.length; index++) {
    const element = seznam[index];
    document.write(index + 1 + ": " + element + "</br>")
} 

let trojuhelnik = {
    rameno : 5,
    zakladna : 10
}

document.write("Rameno trojuhelniku" + ":" + trojuhelnik.rameno + "<br>")
document.write("Zakladna trojuhelniku" + ":" + trojuhelnik.zakladna + "<br>")

function obsahtrojuhelniku(rameno, zakladna) {
    return (vyska * podstava) / 2
}

function obvodtrojuhelniku(rameno, zakladna) {
    return rameno * 2 + zakladna
}

document.write("Obsah trojuhelniku" + ":" + obsahtrojuhelniku())
document.write("Obvod trojuhelniku" + ":" + obvodtrojuhelniku)