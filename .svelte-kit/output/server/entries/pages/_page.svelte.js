export const prerender = true;
import { b as add_attribute, c as create_ssr_component, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let benefits = [
    {
      metric: "10x",
      name: "Student",
      description: "Currently on my last semester and a half at Ozark Tech and will be transfering to MSU, I've learned a lot of practical skills at Ozark Tech and am confident in webdev and .Net development. I have certifications in SQL, JavaScript, Web Development, and working on my .NET certification"
    },
    {
      name: "Always Getting Better",
      description: "Curiosity has led me around most of my life. If I'm not sure how something works, I enjoy digging in. Even if I don't learn every framework, I like to know how they work conceptually. I have been learning about algorithms and data structures lately, and it's broadening my understanding while at the same time broadening my knowledge of how much I don't know, which is both exciting and humbling."
    },
    {
      name: "Communication",
      description: "Focusing on communication and teamwork, nothing gets done alone. Being able to effectively communicate is paramount to any company or organization. This is a focus of mine. Communication saves time and time is money while easing frustrations."
    },
    {
      name: "Jake of All Trades",
      description: "My range of skills and positions are wide ranging. When I was a little younger I moved around a lot trying to find a career I enjoy. I've come to find out that I enjoy a large variety of things and I believe those interests have given me a wide ranging set of skills. These skills have helped give me a unique perspecitve on systems and processes"
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14" data-svelte-h="svelte-m3b713"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! I&#39;m <span class="poppins text-blue-400">Jacob</span> Hartel
                <br> <span class="poppins text-blue-400">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="text-blue-400">favorite stack</span> includes .NET C#, JavaScript
                (vanilla, svelte), Node.js, &amp; SQL</p></div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"> <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-blue-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-blue-700 py-4" data-svelte-h="svelte-1wal8a9"><h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-1q8im4p">I am . . .</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return ` <div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div> <h5${add_attribute("class", " text-2xl sm:text-3xl font-semibold text-center poppins ", 0)} data-svelte-h="svelte-1u3vpws">The <span class="text-blue-400">Complete</span> Package</h5> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full" data-svelte-h="svelte-3hfn4o"><table class="bg-white text-slate-700 rounded text-center"><thead${add_attribute("class", "border-b border-solid border-slate-200  ", 0)}><tr class=""><th></th> <th class="whitespace-nowrap p-2 px-4">Candidate #1</th> <th class="whitespace-nowrap p-2 px-4">Candidate #2</th> <th class="whitespace-nowrap p-2 px-4">Candidate #3</th> <th class="bg-blue-700 text-white whitespace-nowrap p-4 px-8">Me</th></tr></thead> <tbody><tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Dedication</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Critical Thought</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Interpersonal Skills</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-t border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Progamming Ability</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr></tbody></table></div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50" data-svelte-h="svelte-zp0ubu"><p>Scroll to see more →</p></div> <p class="mx-auto" data-svelte-h="svelte-1byo27r">Lets talk, lets build!</p></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
