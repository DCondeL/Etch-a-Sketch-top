let container = document.querySelector(".container");

const GRIDSIZE = 3;
createGrid();

function createSquares() {
	let squaresFrag = new DocumentFragment();

	for (let i = 0; i < GRIDSIZE; i++) {
		let square = document.createElement("div");
		square.classList.add("square");
		squaresFrag.appendChild(square);
		console.log(squaresFrag);
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
