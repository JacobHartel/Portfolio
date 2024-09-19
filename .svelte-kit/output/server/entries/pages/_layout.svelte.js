import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
let githubUrl = "https://github.com/JacobHartel";
let linkedinUrl = "https://www.linkedin.com/in/jacob-hartel-1917aa242/";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="py-20 sm:py-32 bg-black border-t border-solid border-blue-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"><p class="px-4 py-2 bg-white text-slate-950 font-medium rounded-lg border border-slate-950" data-svelte-h="svelte-1h5c5wu">Connect with me ↓</p> <div class="flex flex-col gap-4 items-center justify-center"> <p data-svelte-h="svelte-5ks7n7"><b class="pr-2">For CV Email</b> jakehartel@gmail.com</p> <p><b class="pr-2" data-svelte-h="svelte-1bz0oor">GitHub</b> <a${add_attribute("href", githubUrl, 0)} target="_blank" class="text-blue-400">Jacob Hartel<sup class="" data-svelte-h="svelte-3r5sk7"><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2" data-svelte-h="svelte-xo9qb2">LinkedIn</b> <a${add_attribute("href", linkedinUrl, 0)} target="_blank" class="text-blue-400">Jacob Hartel<sup class="" data-svelte-h="svelte-3r5sk7"><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p></div></footer>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let { tabs = [
    {
      name: "Github ",
      link: "https://github.com/JacobHartel"
    },
    { name: "About me", link: "#about" },
    {
      name: "Blog",
      link: "https://open.substack.com/pub/jacobhartel/p/books-list?r=4frd4s&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
    }
  ] } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0) $$bindings.y(y);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0) $$bindings.tabs(tabs);
  return `<header${add_attribute(
    "class",
    "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " + (y > 0 ? " py-4 bg-slate-950 border-violet-950" : " py-6 bg-transparent border-transparent"),
    0
  )}><h1 class="font-medium" data-svelte-h="svelte-1w5l923"><b class="font-bold poppins">Jacob</b> <span class="">Hartel</span></h1> <div class="sm:flex items-center gap-4 hidden">${each(tabs, (tab, index) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-violet-400"${add_attribute("target", index === 2 ? "_blank" : "", 0)}><p>${escape(tab.name)}</p> </a>`;
  })}</div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = false;
  let y;
  let innerHeight = 0;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0) $$bindings.prerender(prerender);
  return `<div class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-200 flex p-10 z-[10]  pointer-events-none opacity-0",
    0
  )}><button class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center" data-svelte-h="svelte-i4zgfz"><i class="fa-solid fa-arrow-up"></i></button></div> ${validate_component(Header, "Header").$$render($$result, { y, innerHeight }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
