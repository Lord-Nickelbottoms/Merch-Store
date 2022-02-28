if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
}
else {
	ready()
}


function ready()
{ }

let soldier =
{
	Primary: "MP18",
	Secondary: "Luger P08",
	Equipment1: "Anti-Tank Grenades",
	Equipment2: "Dynamite",
	getSoldierDetails: function ()
	{
		return `Primary Weapon: ${this.Primary}\nSecondary Weapon: ${this.Secondary}\nEquipment Slot 1: ${this.Equipment1}\nEquipment Slot 2: ${this.Equipment2}`
	}
}
function AssaultClassDisplay() 
{
	document.getElementsByClassName("classDiv")[0].style.display = 'block'
	// document.getElementsByClassName("something")[0].innerHTML = soldier.getSoldierDetails()

	const arrayItems = Object.keys(soldier)
	const itemValues = Object.values(soldier)
	const elements = document.getElementsByClassName("something")[0]
	for (let items in soldier) {
		console.log(`${arrayItems[items]}: ${itemValues[items]}`)
		elements.innerHTML = `"${arrayItems[items]}: ${itemValues[items]}"`
	}
}










class Calculator
{
	constructor (previousOperandTextElement, currentOperandTextElement)
	{
		this.previousOperandTextElement = previousOperandTextElement
		this.currentOperandTextElement = currentOperandTextElement
		this.clear()
	}

	clear()
	{
		this.currentOperand = ""
		this.previousOperand = ""
		this.operation = undefined
	}

	delete()
	{

	}

	appendNumber(number)
	{
		this.currentOperand = number
	}

	chooseOperation(operation)
	{

	}

	compute()
	{

	}

	updateDisplay()
	{
		this.currentOperandTextElement.innerText = this.currentOperand
	}
}

const numberButtons = document.querySelectorAll("[data-number]") //must be in square brackets for "data-xxxx" attributes
const operationButtons = document.querySelectorAll("[data-operation]")
const equalButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => button.addEventListener('click', () =>
{
	calculator.appendNumber(button.innerText)
	calculator.updateDisplay()
}))