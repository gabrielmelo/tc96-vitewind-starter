import logoPath from "../assets/logo.svg";

export const Hello = {
	create: () => {
		document.querySelector("#app").innerHTML = `
			<h1 class="text-2xl">Hello, world!</h1>
			<a href="https://github.com/gabrielmelo/tailwindcss-vitejs-starter" target="_blank">Documentation</a>
			<img src=${logoPath} alt="Logo vite"/>
		`;
	},
};
