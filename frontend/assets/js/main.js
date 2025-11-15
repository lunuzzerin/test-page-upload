const url = "http://localhost:8000/";

async function getResponse() {
	const response = await fetch(`${url}greeting`);

	return response;
}

const title = document.getElementById("greeting");

title.textContent = "Esperando...";

function greetingToApi() {
	getResponse().then((value) => {
		value.json().then((response) => {
			title.textContent = response;
		});
	});
}

const buttonToRunFastApi = document.getElementById("greetingApi");

buttonToRunFastApi.addEventListener("click", greetingToApi);

document
	.querySelectorAll("#section-button-change > button")
	.forEach((button) => {
		button.addEventListener("click", (event) => {
			const textChangeColor = document.getElementById("titleToColor");

			textChangeColor.style.color = event.target.textContent;
		});
	});

document
	.querySelectorAll("#section-button-operation > button")
	.forEach((button) => {
		button.addEventListener("click", (event) => {
			const result = document.getElementById("resultToOperation");

			const number = parseInt(event.target.textContent.toString().trim());

			if (result.textContent === "Resultado") {
				result.textContent = number;
				return;
			}

			result.textContent = parseInt(result.textContent) + number;
		});
	});