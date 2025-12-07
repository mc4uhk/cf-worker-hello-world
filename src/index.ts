// src/index.ts
var index_default = {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		switch (url.pathname) {
			case '/message':
				return new Response('Hello, World!');
			case '/env':
				return new Response(`env: foo:${env.FOO} bar:${env.BAR}`);
			case '/random':
				return new Response(crypto.randomUUID());
			default:
				return new Response('Not Found', { status: 404 });
		}
	},
};
export { index_default as default };
//# sourceMappingURL=index.js.map
