// To greet user depending on time of day and give them main choice
function loadWelcome() {
	let today = new Date();
	let hourNow = today.getHours();
	let message;
	if (hourNow > 18) {
		message = "Good Evening!";
	} else if (hourNow > 12) {
		message = "Good Afternoon!";
	} else if (hourNow > 0) {
		message = "Good Morning!";
	} else {
		message = "Welcome!";
	}

	let hello = document.createElement("h1");
	let greeting = document.getElementById("greeting-question");

	hello.innerHTML = message + "<br><hr></br>" + "Which way shall you wander?";
	greeting.appendChild(hello);
}

// To redirect user to appropriate page once choice is clicked
function sunChosen() {
	let destinationUrl = "destinations.html?weather=sun";
	const sunChosen = document.getElementById("sunCard");

	sunChosen.addEventListener("click", function() {
		if (parent.hostname === "paulvmking.github.io") {
			parent.location.href = destinationUrl;
		} else {
			location.href = destinationUrl;
		}
	});
}

function snowChosen() {
	const destinationUrl = "destinations.html?weather=snow";
	const snowChosen = document.getElementById("snowCard");

	snowChosen.addEventListener("click", function() {
		if (parent.hostname === "paulvmking.github.io") {
			parent.location.href = destinationUrl;
		} else {
			location.href = destinationUrl;
		}
	});
}

// To give user feedback via opacity change with mouseover/mouseout events
function makeOpacity() {
	const sunCard = document.getElementById("sunCard");
	const snowCard = document.getElementById("snowCard");
	const mouseEvent = (card, action) => (card.style.opacity = action === "mouseover" ? 0.7 : 1.0);

	sunCard.addEventListener("mouseover", () => mouseEvent(sunCard, "mouseover"));
	sunCard.addEventListener("mouseout", () => mouseEvent(sunCard, "mouseout"));
	snowCard.addEventListener("mouseover", () => mouseEvent(snowCard, "mouseover"));
	snowCard.addEventListener("mouseout", () => mouseEvent(snowCard, "mouseout"));
}

//To add and removed current class styling when buttons are clicked
$("#myBtnContainer").on("click", ".myBtn", function() {
	$(this).addClass("current").siblings().removeClass("current");
});

// To disable submit button until password fields match
document.getElementById("register-modal").addEventListener("keyup", function() {
	if ($("#enter-password").val() == $("#re-enter-password").val()) {
		$("#register").prop("disabled", false);
	} else {
		$("#register").prop("disabled", true);
	}
});
