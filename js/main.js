
const playBtn = document.querySelector(".btn");

const selectEl = document.querySelector("[name='rowCells']");

const gridContainerEl = document.querySelector(".grid-container");

playBtn.addEventListener("click", function () {
    gridContainerEl.innerHTML = ""
    let dimension;
    const option = parseInt(selectEl.value);
    if (option === 10) {
        dimension = 100
    } else if (option === 9) {
        dimension = 81
    } else if (option === 7) {
        dimension = 49
    }

    for (let i = 0; i < dimension; i++) {
        const monoCell = document.createElement("div");
        monoCell.classList.add("cell");
        monoCell.style.width = `calc(100% / ${option})`
        monoCell.innerHTML = `${i + 1}`
        monoCell.addEventListener("click", function () {
            this.classList.toggle("bg-primary");
            console.log(monoCell.textContent);
        })



        gridContainerEl.append(monoCell)
    }

})

