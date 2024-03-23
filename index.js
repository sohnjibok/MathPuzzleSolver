// grab html elements
const boxesContainer = document.querySelector('.boxesContainer')
const h3 = document.querySelector('h3')
const outputs = document.querySelectorAll('.output')
const inputs = document.querySelectorAll('input')
const parallelInputs = document.querySelectorAll('.parallelInput')
const selectInputs = document.querySelectorAll('select')
const clearButton = document.querySelector('.clearButton')
const solveButton = document.querySelector('.solveButton')

// these listeners set the values of parallelInputs[x] to the value of inputs[x] each time an input is changed
inputs[0].addEventListener(
	'input',
	() => (parallelInputs[3].textContent = inputs[0].value)
)
inputs[1].addEventListener(
	'input',
	() => (parallelInputs[4].textContent = inputs[1].value)
)
inputs[2].addEventListener(
	'input',
	() => (parallelInputs[5].textContent = inputs[2].value)
)
inputs[3].addEventListener(
	'input',
	() => (parallelInputs[0].textContent = inputs[3].value)
)
inputs[4].addEventListener(
	'input',
	() => (parallelInputs[1].textContent = inputs[4].value)
)
inputs[5].addEventListener(
	'input',
	() => (parallelInputs[2].textContent = inputs[5].value)
)

const permuations = [
	[1, 2, 3],
	[1, 2, 4],
	[1, 2, 5],
	[1, 2, 6],
	[1, 2, 7],
	[1, 2, 8],
	[1, 2, 9],
	[1, 3, 2],
	[1, 3, 4],
	[1, 3, 5],
	[1, 3, 6],
	[1, 3, 7],
	[1, 3, 8],
	[1, 3, 9],
	[1, 4, 2],
	[1, 4, 3],
	[1, 4, 5],
	[1, 4, 6],
	[1, 4, 7],
	[1, 4, 8],
	[1, 4, 9],
	[1, 5, 2],
	[1, 5, 3],
	[1, 5, 4],
	[1, 5, 6],
	[1, 5, 7],
	[1, 5, 8],
	[1, 5, 9],
	[1, 6, 2],
	[1, 6, 3],
	[1, 6, 4],
	[1, 6, 5],
	[1, 6, 7],
	[1, 6, 8],
	[1, 6, 9],
	[1, 7, 2],
	[1, 7, 3],
	[1, 7, 4],
	[1, 7, 5],
	[1, 7, 6],
	[1, 7, 8],
	[1, 7, 9],
	[1, 8, 2],
	[1, 8, 3],
	[1, 8, 4],
	[1, 8, 5],
	[1, 8, 6],
	[1, 8, 7],
	[1, 8, 9],
	[1, 9, 2],
	[1, 9, 3],
	[1, 9, 4],
	[1, 9, 5],
	[1, 9, 6],
	[1, 9, 7],
	[1, 9, 8],
	[2, 1, 3],
	[2, 1, 4],
	[2, 1, 5],
	[2, 1, 6],
	[2, 1, 7],
	[2, 1, 8],
	[2, 1, 9],
	[2, 3, 1],
	[2, 3, 4],
	[2, 3, 5],
	[2, 3, 6],
	[2, 3, 7],
	[2, 3, 8],
	[2, 3, 9],
	[2, 4, 1],
	[2, 4, 3],
	[2, 4, 5],
	[2, 4, 6],
	[2, 4, 7],
	[2, 4, 8],
	[2, 4, 9],
	[2, 5, 1],
	[2, 5, 3],
	[2, 5, 4],
	[2, 5, 6],
	[2, 5, 7],
	[2, 5, 8],
	[2, 5, 9],
	[2, 6, 1],
	[2, 6, 3],
	[2, 6, 4],
	[2, 6, 5],
	[2, 6, 7],
	[2, 6, 8],
	[2, 6, 9],
	[2, 7, 1],
	[2, 7, 3],
	[2, 7, 4],
	[2, 7, 5],
	[2, 7, 6],
	[2, 7, 8],
	[2, 7, 9],
	[2, 8, 1],
	[2, 8, 3],
	[2, 8, 4],
	[2, 8, 5],
	[2, 8, 6],
	[2, 8, 7],
	[2, 8, 9],
	[2, 9, 1],
	[2, 9, 3],
	[2, 9, 4],
	[2, 9, 5],
	[2, 9, 6],
	[2, 9, 7],
	[2, 9, 8],
	[3, 1, 2],
	[3, 1, 4],
	[3, 1, 5],
	[3, 1, 6],
	[3, 1, 7],
	[3, 1, 8],
	[3, 1, 9],
	[3, 2, 1],
	[3, 2, 4],
	[3, 2, 5],
	[3, 2, 6],
	[3, 2, 7],
	[3, 2, 8],
	[3, 2, 9],
	[3, 4, 1],
	[3, 4, 2],
	[3, 4, 5],
	[3, 4, 6],
	[3, 4, 7],
	[3, 4, 8],
	[3, 4, 9],
	[3, 5, 1],
	[3, 5, 2],
	[3, 5, 4],
	[3, 5, 6],
	[3, 5, 7],
	[3, 5, 8],
	[3, 5, 9],
	[3, 6, 1],
	[3, 6, 2],
	[3, 6, 4],
	[3, 6, 5],
	[3, 6, 7],
	[3, 6, 8],
	[3, 6, 9],
	[3, 7, 1],
	[3, 7, 2],
	[3, 7, 4],
	[3, 7, 5],
	[3, 7, 6],
	[3, 7, 8],
	[3, 7, 9],
	[3, 8, 1],
	[3, 8, 2],
	[3, 8, 4],
	[3, 8, 5],
	[3, 8, 6],
	[3, 8, 7],
	[3, 8, 9],
	[3, 9, 1],
	[3, 9, 2],
	[3, 9, 4],
	[3, 9, 5],
	[3, 9, 6],
	[3, 9, 7],
	[3, 9, 8],
	[4, 1, 2],
	[4, 1, 3],
	[4, 1, 5],
	[4, 1, 6],
	[4, 1, 7],
	[4, 1, 8],
	[4, 1, 9],
	[4, 2, 1],
	[4, 2, 3],
	[4, 2, 5],
	[4, 2, 6],
	[4, 2, 7],
	[4, 2, 8],
	[4, 2, 9],
	[4, 3, 1],
	[4, 3, 2],
	[4, 3, 5],
	[4, 3, 6],
	[4, 3, 7],
	[4, 3, 8],
	[4, 3, 9],
	[4, 5, 1],
	[4, 5, 2],
	[4, 5, 3],
	[4, 5, 6],
	[4, 5, 7],
	[4, 5, 8],
	[4, 5, 9],
	[4, 6, 1],
	[4, 6, 2],
	[4, 6, 3],
	[4, 6, 5],
	[4, 6, 7],
	[4, 6, 8],
	[4, 6, 9],
	[4, 7, 1],
	[4, 7, 2],
	[4, 7, 3],
	[4, 7, 5],
	[4, 7, 6],
	[4, 7, 8],
	[4, 7, 9],
	[4, 8, 1],
	[4, 8, 2],
	[4, 8, 3],
	[4, 8, 5],
	[4, 8, 6],
	[4, 8, 7],
	[4, 8, 9],
	[4, 9, 1],
	[4, 9, 2],
	[4, 9, 3],
	[4, 9, 5],
	[4, 9, 6],
	[4, 9, 7],
	[4, 9, 8],
	[5, 1, 2],
	[5, 1, 3],
	[5, 1, 4],
	[5, 1, 6],
	[5, 1, 7],
	[5, 1, 8],
	[5, 1, 9],
	[5, 2, 1],
	[5, 2, 3],
	[5, 2, 4],
	[5, 2, 6],
	[5, 2, 7],
	[5, 2, 8],
	[5, 2, 9],
	[5, 3, 1],
	[5, 3, 2],
	[5, 3, 4],
	[5, 3, 6],
	[5, 3, 7],
	[5, 3, 8],
	[5, 3, 9],
	[5, 4, 1],
	[5, 4, 2],
	[5, 4, 3],
	[5, 4, 6],
	[5, 4, 7],
	[5, 4, 8],
	[5, 4, 9],
	[5, 6, 1],
	[5, 6, 2],
	[5, 6, 3],
	[5, 6, 4],
	[5, 6, 7],
	[5, 6, 8],
	[5, 6, 9],
	[5, 7, 1],
	[5, 7, 2],
	[5, 7, 3],
	[5, 7, 4],
	[5, 7, 6],
	[5, 7, 8],
	[5, 7, 9],
	[5, 8, 1],
	[5, 8, 2],
	[5, 8, 3],
	[5, 8, 4],
	[5, 8, 6],
	[5, 8, 7],
	[5, 8, 9],
	[5, 9, 1],
	[5, 9, 2],
	[5, 9, 3],
	[5, 9, 4],
	[5, 9, 6],
	[5, 9, 7],
	[5, 9, 8],
	[6, 1, 2],
	[6, 1, 3],
	[6, 1, 4],
	[6, 1, 5],
	[6, 1, 7],
	[6, 1, 8],
	[6, 1, 9],
	[6, 2, 1],
	[6, 2, 3],
	[6, 2, 4],
	[6, 2, 5],
	[6, 2, 7],
	[6, 2, 8],
	[6, 2, 9],
	[6, 3, 1],
	[6, 3, 2],
	[6, 3, 4],
	[6, 3, 5],
	[6, 3, 7],
	[6, 3, 8],
	[6, 3, 9],
	[6, 4, 1],
	[6, 4, 2],
	[6, 4, 3],
	[6, 4, 5],
	[6, 4, 7],
	[6, 4, 8],
	[6, 4, 9],
	[6, 5, 1],
	[6, 5, 2],
	[6, 5, 3],
	[6, 5, 4],
	[6, 5, 7],
	[6, 5, 8],
	[6, 5, 9],
	[6, 7, 1],
	[6, 7, 2],
	[6, 7, 3],
	[6, 7, 4],
	[6, 7, 5],
	[6, 7, 8],
	[6, 7, 9],
	[6, 8, 1],
	[6, 8, 2],
	[6, 8, 3],
	[6, 8, 4],
	[6, 8, 5],
	[6, 8, 7],
	[6, 8, 9],
	[6, 9, 1],
	[6, 9, 2],
	[6, 9, 3],
	[6, 9, 4],
	[6, 9, 5],
	[6, 9, 7],
	[6, 9, 8],
	[7, 1, 2],
	[7, 1, 3],
	[7, 1, 4],
	[7, 1, 5],
	[7, 1, 6],
	[7, 1, 8],
	[7, 1, 9],
	[7, 2, 1],
	[7, 2, 3],
	[7, 2, 4],
	[7, 2, 5],
	[7, 2, 6],
	[7, 2, 8],
	[7, 2, 9],
	[7, 3, 1],
	[7, 3, 2],
	[7, 3, 4],
	[7, 3, 5],
	[7, 3, 6],
	[7, 3, 8],
	[7, 3, 9],
	[7, 4, 1],
	[7, 4, 2],
	[7, 4, 3],
	[7, 4, 5],
	[7, 4, 6],
	[7, 4, 8],
	[7, 4, 9],
	[7, 5, 1],
	[7, 5, 2],
	[7, 5, 3],
	[7, 5, 4],
	[7, 5, 6],
	[7, 5, 8],
	[7, 5, 9],
	[7, 6, 1],
	[7, 6, 2],
	[7, 6, 3],
	[7, 6, 4],
	[7, 6, 5],
	[7, 6, 8],
	[7, 6, 9],
	[7, 8, 1],
	[7, 8, 2],
	[7, 8, 3],
	[7, 8, 4],
	[7, 8, 5],
	[7, 8, 6],
	[7, 8, 9],
	[7, 9, 1],
	[7, 9, 2],
	[7, 9, 3],
	[7, 9, 4],
	[7, 9, 5],
	[7, 9, 6],
	[7, 9, 8],
	[8, 1, 2],
	[8, 1, 3],
	[8, 1, 4],
	[8, 1, 5],
	[8, 1, 6],
	[8, 1, 7],
	[8, 1, 9],
	[8, 2, 1],
	[8, 2, 3],
	[8, 2, 4],
	[8, 2, 5],
	[8, 2, 6],
	[8, 2, 7],
	[8, 2, 9],
	[8, 3, 1],
	[8, 3, 2],
	[8, 3, 4],
	[8, 3, 5],
	[8, 3, 6],
	[8, 3, 7],
	[8, 3, 9],
	[8, 4, 1],
	[8, 4, 2],
	[8, 4, 3],
	[8, 4, 5],
	[8, 4, 6],
	[8, 4, 7],
	[8, 4, 9],
	[8, 5, 1],
	[8, 5, 2],
	[8, 5, 3],
	[8, 5, 4],
	[8, 5, 6],
	[8, 5, 7],
	[8, 5, 9],
	[8, 6, 1],
	[8, 6, 2],
	[8, 6, 3],
	[8, 6, 4],
	[8, 6, 5],
	[8, 6, 7],
	[8, 6, 9],
	[8, 7, 1],
	[8, 7, 2],
	[8, 7, 3],
	[8, 7, 4],
	[8, 7, 5],
	[8, 7, 6],
	[8, 7, 9],
	[8, 9, 1],
	[8, 9, 2],
	[8, 9, 3],
	[8, 9, 4],
	[8, 9, 5],
	[8, 9, 6],
	[8, 9, 7],
	[9, 1, 2],
	[9, 1, 3],
	[9, 1, 4],
	[9, 1, 5],
	[9, 1, 6],
	[9, 1, 7],
	[9, 1, 8],
	[9, 2, 1],
	[9, 2, 3],
	[9, 2, 4],
	[9, 2, 5],
	[9, 2, 6],
	[9, 2, 7],
	[9, 2, 8],
	[9, 3, 1],
	[9, 3, 2],
	[9, 3, 4],
	[9, 3, 5],
	[9, 3, 6],
	[9, 3, 7],
	[9, 3, 8],
	[9, 4, 1],
	[9, 4, 2],
	[9, 4, 3],
	[9, 4, 5],
	[9, 4, 6],
	[9, 4, 7],
	[9, 4, 8],
	[9, 5, 1],
	[9, 5, 2],
	[9, 5, 3],
	[9, 5, 4],
	[9, 5, 6],
	[9, 5, 7],
	[9, 5, 8],
	[9, 6, 1],
	[9, 6, 2],
	[9, 6, 3],
	[9, 6, 4],
	[9, 6, 5],
	[9, 6, 7],
	[9, 6, 8],
	[9, 7, 1],
	[9, 7, 2],
	[9, 7, 3],
	[9, 7, 4],
	[9, 7, 5],
	[9, 7, 6],
	[9, 7, 8],
	[9, 8, 1],
	[9, 8, 2],
	[9, 8, 3],
	[9, 8, 4],
	[9, 8, 5],
	[9, 8, 6],
	[9, 8, 7],
]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const operaters = ['+', '-', '*']

clearButton.addEventListener('click', () => {
	inputs.forEach((input) => (input.value = ''))
	parallelInputs.forEach((input) => (input.textContent = ''))
    outputs.forEach((output) => {
        output.textContent = ''
        output.style.backgroundColor = 'lightcyan'
    })
    h3.textContent = ''
})

solveButton.addEventListener('click', () => {
	console.log('first')
	getOutput(
		{
			operater1: selectInputs[0].value,
			operater2: selectInputs[1].value,
			result: inputs[3].value,
		},
		{
			operater1: selectInputs[5].value,
			operater2: selectInputs[6].value,
			result: inputs[4].value,
		},
		{
			operater1: selectInputs[10].value,
			operater2: selectInputs[11].value,
			result: inputs[5].value,
		},
		{
			operater1: selectInputs[2].value,
			operater2: selectInputs[7].value,
			result: inputs[0].value,
		},
		{
			operater1: selectInputs[3].value,
			operater2: selectInputs[8].value,
			result: inputs[1].value,
		},
		{
			operater1: selectInputs[4].value,
			operater2: selectInputs[9].value,
			result: inputs[2].value,
		}
	)
	console.log('last')
})

const getOutput = async (a1, a2, a3, b1, b2, b3) => {
	// validation to check if args aren't empty
    if (!a1.result || !a2.result || !a3.result || !b1.result || !b2.result || !b3.result) {
        h3.textContent = 'Please fill in all the fields'
        return
    }

	const aOne = findEquation(a1.operater1, a1.operater2, Number(a1.result))
	const aTwo = findEquation(a2.operater1, a2.operater2, Number(a2.result))
	const aThree = findEquation(a3.operater1, a3.operater2, Number(a3.result))
	const bOne = findEquation(b1.operater1, b1.operater2, Number(b1.result))
	const bTwo = findEquation(b2.operater1, b2.operater2, Number(b2.result))
	const bThree = findEquation(b3.operater1, b3.operater2, Number(b3.result))

	// const aOne = findEquation('*', '+', 21)
	// const aTwo = findEquation('*', '-', -2)
	// const aThree = findEquation('-', '*', -65)
	// const bOne = findEquation('*', '+', 10)
	// const bTwo = findEquation('+', '+', 16)
	// const bThree = findEquation('*', '*', 192)

	const matricesA = createAllPossibleMatrices(aOne, aTwo, aThree)
	const matricesB = createAllPossibleMatrices(bOne, bTwo, bThree)

	const commonMatrices = findCommonMatrices(matricesA, matricesB)
	console.log('commonMatrices', commonMatrices)
	if (commonMatrices.length === 0) {
		console.log('No common matrices found')
		h3.textContent = 'No solution found. Recheck input values.'
		return
	}
	const commonMatricesArray = commonMatrices[0].split('')

	

	console.log(commonMatrices)
	console.log(commonMatricesArray)

	for (let i = 0; i < outputs.length; i++) {
		outputs[i].textContent = commonMatricesArray[i]
		outputs[i].style.backgroundColor = 'lightgreen'
	}
}

function findEquation(operator1, operator2, result) {
	let validEquations = []
	permuations.forEach((permutation) => {
		let equation = `${permutation[0]} ${operator1} ${permutation[1]} ${operator2} ${permutation[2]}`
		let evalEquation = eval(equation)
		if (evalEquation === result) {
			validEquations.push(permutation)
		}
	})
	return validEquations
}

function createAllPossibleMatrices(arr1, arr2, arr3) {
	let matrices = []
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			for (let k = 0; k < arr3.length; k++) {
				let matrix = [arr1[i], arr2[j], arr3[k]]
				matrices.push(matrix)
			}
		}
	}
	return removeSpaces(convertMatricesIntoStrings(matrices))
}

function convertMatricesIntoStrings(matrices) {
	return matrices.map((matrix) =>
		matrix.map((permutation) => permutation.join(' ')).join('')
	)
}

function removeSpaces(matrixStrings) {
	return matrixStrings.map((matrixString) => matrixString.split(' ').join(''))
}

function findCommonMatrices(matricesA, matricesB) {
	let commonMatrices = []
	for (let i = 0; i < matricesA.length; i++) {
		const matrixA = matricesA[i]
		for (let j = 0; j < matricesB.length; j++) {
			const matrixB = matricesB[j]
			if (
				matrixA[0] === matrixB[0] &&
				matrixA[1] === matrixB[3] &&
				matrixA[2] === matrixB[6] &&
				matrixA[3] === matrixB[1] &&
				matrixA[4] === matrixB[4] &&
				matrixA[5] === matrixB[7] &&
				matrixA[6] === matrixB[2] &&
				matrixA[7] === matrixB[5] &&
				matrixA[8] === matrixB[8]
			) {
				commonMatrices.push(matrixA)
			}
		}
	}
	return commonMatrices
}
