const getcolor = () => {
    const randomnum = Math.floor(Math.random() * 16777295)
    const randomcod = "#" + randomnum.toString(16);
    document.body.style.background = randomcod;
    // document.body.h1.style.color = randomcod;
    var apple = document.getElementById("heading")
    apple.innerHTML = randomcod;
    apple.innerHTML = getComputedStyle()

}
document.getElementById("btn").addEventListener(
        "click",
        getcolor,
    )
    // getcolor();