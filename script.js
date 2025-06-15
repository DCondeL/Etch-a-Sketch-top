let container = document.querySelector(".container");

function createSquares(numSquares) {
	let squareList = new Array(numSquares);

	for (let i = 0; i < numSquares; i++) {
		let square = document.createElement("div");
		square.classList.add("square");
		squareList.push(square);
	}

	return squareList;
}

function createRowContainer(squares) {
	let rowContainer = document.createElement("div");
	rowContainer.classList.add("row-container");
	let docFrag = new DocumentFragment();

	if (Array.isArray(squares)) {
		squares.forEach((element) => docFrag.appendChild(element));
	}

	rowContainer.appendChild(docFrag);

	return rowContainer;
}

function createGrid() {
	const GRIDSIZE = 12;
	let squares = createSquares(GRIDSIZE);
	let row = createRowContainer(squares);
	container.appendChild(row);
}

createGrid();
