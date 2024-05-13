let seznam = ["Skoda", "Ferrari", "Nissan", "Subaru"]

for (const znacka of seznam) {
    document.write(znacka + "</br>")
}

for (let index = 0; index < seznam.length; index++) {
    const element = seznam[index];
    document.write(index + 1 + ": " + element + "</br>")
} 