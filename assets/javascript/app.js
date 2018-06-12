var options = {
	strings: ["Are you classified as human?", "Negative, I am a Meat popsicle"],
	typeSpeed: 40,
	loop: true
};
var typed = new Typed(".typed", options);

window.onload = function() {
	if (window.innerWidth <= 430) {
		$(".social-links").empty();
		var iconArray = [
			"fab fa-linkedin",
			"fab fa-twitter",
			"fab fa-facebook-f",
			"fab fa-instagram",
			"far fa-envelope"
		];
		var linkArray = [
			"https://www.linkedin.com/in/simon-cain-9159341a/",
			"https://twitter.com/rudenik",
			"https://www.facebook.com/",
			"https://www.instagram.com/rudenik/",
			"mailto:simon.cain@mail.utoronto.ca?subject=What's up with Simon Cain"
		];
		var orderList = $("<ul>");
		var socialName = ["LinkedIn", "Twitter", "Facebook", "Instagram", "Email"];
		for (ele in iconArray) {
			var listItem = $("<li>");
			var aTag = $("<a>");
			aTag.attr("href", linkArray[ele]);
			var iTag = $("<i>");
			iTag.addClass(iconArray[ele]);
			aTag.text(socialName[ele]);
			aTag.prepend(iTag);
			aTag.appendTo(listItem);
			listItem.appendTo(orderList);
		}
		orderList.appendTo($(".social-links"));
	}
};

$("a[href*=\\#]").on("click", function(event) {
	event.preventDefault();
	if (window.innerWidth <= 990) {
		$("html,body").animate({ scrollTop: $(this.hash).offset().top - 280 }, 500);
	} else {
		$("html,body").animate({ scrollTop: $(this.hash).offset().top - 50 }, 500);
	}
});

const nextIns = basicScroll
	.create({
		elem: document.querySelector("#aboutimage"),
		from: "top-bottom",
		to: "bottom-top",
		props: {
			"--translateX": {
				from: "100px",
				to: "0",
				timing: "linear"
			}
		}
	})
	.start();
document.querySelectorAll(".scene").forEach(elem => {
	const modifier = elem.getAttribute("data-modifier");
	var actMod = modifier * 10;
	const startPos = elem.getAttribute("data-start");
	basicScroll
		.create({
			elem: elem,
			from: "top-bottom",
			to: "bottom-top",
			direct: true,
			props: {
				"--translateY": {
					from: startPos + "px",
					to: actMod + "px"
				}
			}
		})
		.start();
});
