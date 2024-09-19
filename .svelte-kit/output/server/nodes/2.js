

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DkrYb0tr.js","_app/immutable/chunks/scheduler.B2F6oQEs.js","_app/immutable/chunks/index.C7l1_WqN.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
