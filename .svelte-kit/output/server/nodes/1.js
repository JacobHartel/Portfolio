

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CpNZYg34.js","_app/immutable/chunks/scheduler.B2F6oQEs.js","_app/immutable/chunks/index.C7l1_WqN.js","_app/immutable/chunks/entry.Broph3Lr.js"];
export const stylesheets = [];
export const fonts = [];
