(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/routes/index.svelte":
/*!*********************************!*\
  !*** ./src/routes/index.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/routes/index.svelte generated by Svelte v3.8.1 */


const file = "src/routes/index.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-16f3ndo-style';
	style.textContent = "h1.svelte-16f3ndo,figure.svelte-16f3ndo,p.svelte-16f3ndo{text-align:center;margin:0 auto}h1.svelte-16f3ndo{font-size:5.8em;text-transform:uppercase;font-weight:700;margin:0 0 0.5em 0}figure.svelte-16f3ndo{margin:0 0 1em 0}img.svelte-16f3ndo{width:100%;max-width:400px;margin:0 0 1em 0}p.svelte-16f3ndo{margin:1em auto}@media(min-width: 480px){h1.svelte-16f3ndo{font-size:5em}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxuXHRoMSwgZmlndXJlLCBwIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxuXHRoMSB7XG5cdFx0Zm9udC1zaXplOiA1LjhlbTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcblx0fVxuXG5cdGZpZ3VyZSB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRpbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRwIHtcblx0XHRtYXJnaW46IDFlbSBhdXRvO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiA1ZW07XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5TYXBwZXIgcHJvamVjdCB0ZW1wbGF0ZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+SEkgRFVERTwvaDE+XG5cbjxmaWd1cmU+XG5cdDxpbWcgYWx0PSdCb3JhdCcgc3JjPSdncmVhdC1zdWNjZXNzLnBuZyc+XG5cdDxmaWdjYXB0aW9uPkhJR0ggU0lYITwvZmlnY2FwdGlvbj5cbjwvZmlndXJlPlxuXG48cD48c3Ryb25nPlRyeSBlZGl0aW5nIHRoaXMgZmlsZSAoc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUpIHRvIHRlc3QgbGl2ZSByZWxvYWRpbmcuPC9zdHJvbmc+PC9wPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDLGlCQUFFLENBQUUscUJBQU0sQ0FBRSxDQUFDLGVBQUMsQ0FBQyxBQUNkLFVBQVUsQ0FBRSxNQUFNLENBQ2xCLE1BQU0sQ0FBRSxDQUFDLENBQUMsSUFBSSxBQUNmLENBQUMsQUFFRCxFQUFFLGVBQUMsQ0FBQyxBQUNILFNBQVMsQ0FBRSxLQUFLLENBQ2hCLGNBQWMsQ0FBRSxTQUFTLENBQ3pCLFdBQVcsQ0FBRSxHQUFHLENBQ2hCLE1BQU0sQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEFBQ3BCLENBQUMsQUFFRCxNQUFNLGVBQUMsQ0FBQyxBQUNQLE1BQU0sQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEFBQ2xCLENBQUMsQUFFRCxHQUFHLGVBQUMsQ0FBQyxBQUNKLEtBQUssQ0FBRSxJQUFJLENBQ1gsU0FBUyxDQUFFLEtBQUssQ0FDaEIsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQUFDbEIsQ0FBQyxBQUVELENBQUMsZUFBQyxDQUFDLEFBQ0YsTUFBTSxDQUFFLEdBQUcsQ0FBQyxJQUFJLEFBQ2pCLENBQUMsQUFFRCxNQUFNLEFBQUMsWUFBWSxLQUFLLENBQUMsQUFBQyxDQUFDLEFBQzFCLEVBQUUsZUFBQyxDQUFDLEFBQ0gsU0FBUyxDQUFFLEdBQUcsQUFDZixDQUFDLEFBQ0YsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function create_fragment(ctx) {
	var t0, h1, t1, t2, figure, img, t3, figcaption, t4, t5, p, strong, t6;

	return {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("HI DUDE");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			figure = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("figure");
			img = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			figcaption = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("figcaption");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("HIGH SIX!");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			strong = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("strong");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Try editing this file (src/routes/index.svelte) to test live reloading.");
			this.h()
		},

		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\n");

			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", { class: true }, false);
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "HI DUDE");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\n");

			figure = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "FIGURE", { class: true }, false);
			var figure_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(figure);

			img = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(figure_nodes, "IMG", { alt: true, src: true, class: true }, false);
			var img_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img);

			img_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(figure_nodes, "\n\t");

			figcaption = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(figure_nodes, "FIGCAPTION", {}, false);
			var figcaption_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(figcaption);

			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(figcaption_nodes, "HIGH SIX!");
			figcaption_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			figure_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\n");

			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true }, false);
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);

			strong = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(p_nodes, "STRONG", {}, false);
			var strong_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(strong);

			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(strong_nodes, "Try editing this file (src/routes/index.svelte) to test live reloading.");
			strong_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			document.title = "Sapper project template";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(h1, "class", "svelte-16f3ndo");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 38, 0, 444);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "alt", "Borat");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "src", "great-success.png");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "class", "svelte-16f3ndo");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img, file, 41, 1, 472);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(figcaption, file, 42, 1, 515);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(figure, "class", "svelte-16f3ndo");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(figure, file, 40, 0, 462);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(strong, file, 45, 3, 564);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p, "class", "svelte-16f3ndo");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 45, 0, 561);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, figure, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(figure, img);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(figure, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(figure, figcaption);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(figcaption, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t5, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, strong);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(strong, t6);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t2);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(figure);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t5);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p);
			}
		}
	};
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-16f3ndo-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI2NThiODhmMzRjZjdlNmU5ZDZkYi9pbmRleC5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9