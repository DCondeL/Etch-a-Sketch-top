function createSquares() {
	let squaresFrag = new DocumentFragment();

	for (let i = 0; i < GRIDSIZE; i++) {
		let square = document.createElement("div");
		square.classList.add("square");
		squaresFrag.appendChild(square);
	}

	return squaresFrag;
}

function createRows() {
	let rows = new DocumentFragment();
	for (let i = 0; i < GRIDSIZE; i++) {
		let rowContainer = document.createElement("div");
		rowContainer.classList.add("row-container");
		rows.appendChild(rowContainer);
	}

	return rows;
}

function addSquaresToRows(rows) {
	let rowsArr = Array.from(rows.children);
	let gridFrag = new DocumentFragment();

	rowsArr.forEach((row) => {
		let squares = createSquares();
		row.appendChild(squares);
		gridFrag.appendChild(row);
	});

	return gridFrag;
}

function createGrid() {
	let rows = createRows();
	let grid = addSquaresToRows(rows);

	container.appendChild(grid);
}

function paint(e) {
	let target = e.target;
	if (target.classList.contains("painted")) {
		return;
	}

	target.classList.add("painted");
}

let container = document.querySelector(".container");
let openModalBtn = document.querySelector("#open-reset-modal-btn");
let modalWindow = document.querySelector(".modal");
let closeModalBtn = document.querySelector("#close-container button");

const GRIDSIZE = 120;
createGrid();
container.addEventListener("mousemove", paint);
openModalBtn.addEventListener(
	"click",
	(ev) => (modalWindow.style.display = "flex")
);

closeModalBtn.addEventListener(
	"click",
	(ev) => (modalWindow.style.display = "none")
);
