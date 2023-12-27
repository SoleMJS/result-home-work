export const App = () => {
	const currentYear = new Date().getFullYear();

	const createElement = (tag, attributes, children) => {
		const element = document.createElement(tag);

		for (const key in attributes) {
			if (Object.hasOwnProperty.call(attributes, key)) {
				element.setAttribute(key, attributes[key]);
			}
		}

		if (children) {
			if (Array.isArray(children)) {
				children.forEach((child) => {
					if (typeof child === "string") {
						element.appendChild(document.createTextNode(child));
					} else {
						element.appendChild(child);
					}
				});
			} else if (typeof children === "string") {
				element.appendChild(document.createTextNode(children));
			} else {
				element.appendChild(children);
			}
		}

		return element;
	};

	const appDiv = createElement("div", { class: "App" });

	const header = createElement("header", { class: "App-header" });

	const paragraph = createElement("p", null, [
		"Edit ",
		createElement("code", null, "src/App.js"),
		" and save to reload 2.",
	]);

	const link = createElement(
		"a",
		{
			class: "App-link",
			href: "https://reactjs.org",
			target: "_blank",
			rel: "noopener noreferrer",
		},
		"Learn React"
	);

	const yearParagraph = createElement("p", null, currentYear);

	[paragraph, link, yearParagraph].forEach((child) => {
		header.appendChild(child);
	});

	appDiv.appendChild(header);

	return appDiv;
};
