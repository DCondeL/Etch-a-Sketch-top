function createSquares(gridSizeValue) {
	let squaresFrag = new DocumentFragment();

	for (let i = 0; i < gridSizeValue; i++) {
		let square = document.createElement("div");
		square.classList.add("square");
		squaresFrag.appendChild(square);
	}

	return squaresFrag;
}

function createRows(gridSizeValue) {
	let rows = new DocumentFragment();
	for (let i = 0; i < gridSizeValue; i++) {
		let rowContainer = document.createElement("div");
		rowContainer.classList.add("row-container");
		rows.appendChild(rowContainer);
	}

	return rows;
}

function addSquaresToRows(rows, gridSizeValue) {
	let rowsArr = Array.from(rows.children);
	let gridFrag = new DocumentFragment();

	rowsArr.forEach((row) => {
		let squares = createSquares(gridSizeValue);
		row.appendChild(squares);
		gridFrag.appendChild(row);
	});

	return gridFrag;
}

function createGrid(gridSizeValue) {
	container.textContent = "";
	let rows = createRows(gridSizeValue);
	let grid = addSquaresToRows(rows, gridSizeValue);

	container.appendChild(grid);
}

function paint(e) {
	let target = e.target;
	if (target.classList.contains("painted")) {
		return;
	}

	target.classList.add("painted");
}

function closeModal(e) {
	modalWindow.style.display = "none";
}

function openModal(e) {
	modalWindow.style.display = "flex";
	resetBtn = document.querySelector("#reset-btn");
	resetBtn.addEventListener("click", getGridSize);
}

function getGridSize(e) {
	inputValue = document.querySelector("#grid-size");
	gridSize = inputValue.value;
	createGrid(gridSize);
	closeModal();
}

let container = document.querySelector(".container");
let openModalBtn = document.querySelector("#open-reset-modal-btn");
let modalWindow = document.querySelector(".modal");
let closeModalBtn = document.querySelector("#close-container button");
let resetBtn;
let inputValue;
const GRIDSIZE = 64;
let gridSize = GRIDSIZE;

createGrid(gridSize);

container.addEventListener("mousemove", paint);

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);
