let container = document.querySelector(".container");

/*function createSquares(numSquares) {
	let squareList = new Array(numSquares);

	let square = document.createElement("div");
	square.classList.add("square");

	squareList.fill(square);

	return squareList;
}*/

function createRowContainer(numSquares) {
	let rowContainer = document.createElement("div");
	rowContainer.classList.add("row-container");

	if (Array.isArray(squares)) {
		squares.reduce((acc, value) => {
			acc = value;
			rowContainer.appendChild(acc);
			console.log("RowCont:" + rowContainer.childElementCount);
		});
	}

	return rowContainer;
}

function createGrid() {
	const NUMSQUARES = 16;
	let squares = createSquares(NUMSQUARES);
	let row = createRowContainer(squares);
	container.appendChild(row);
}

createGrid();
