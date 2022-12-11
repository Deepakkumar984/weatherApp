var texter = document.querySelector("#texter")
var item = document.querySelector("#item")
texter.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            addtodo(this.value)
            this.value = ""
        }
    }
)
const addtodo = (texter) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${texter}
        <i class="fa-solid fa-circle-xmark" class="item-btn"></i>
        `;
    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    item.appendChild(listItem)
}