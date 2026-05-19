const translations = {
  en: {
    navProjects: "Projects",
    navResume: "Resume",
    navContact: "Contact",
    eyebrow: "Game Developer · C# Programmer · Web Builder",
    heroTitle: "I build playable systems, atmospheric levels, and polished interactive experiences.",
    heroDescription: "I am Weilun Zhou, a Computer and Information Science graduate from The Ohio State University. My work focuses on Unity gameplay, UI development, level design, Monogame prototypes, and full-stack web projects.",
    viewProjects: "View Projects",
    downloadResume: "Open Resume",
    location: "Columbus, Ohio / Wuhan, China",
    availability: "Open to game development and software roles",
    aboutEyebrow: "About",
    aboutTitle: "Technical, gameplay-minded, and comfortable across the stack.",
    aboutTextOne: "I specialize in programming and game design, with hands-on experience in UI development, 3D level design, Unity scripting, and Monogame development.",
    aboutTextTwo: "I have also built and maintained web applications with front-end and back-end responsibilities, including Ruby on Rails. My strongest language is C#, and I also work with C++, Python, JavaScript, Java, Ruby, HTML, and CSS.",
    studioEyebrow: "Solo Studio",
    studioTitle: "Chaotic System is my own independent game studio label.",
    studioText: "A home for the games I design, program, and ship as a solo developer, with a focus on psychological horror, systemic interaction, and atmospheric player experience.",
    skillsEyebrow: "Focus",
    skillsTitle: "Core Skills",
    skillGameplayTitle: "Gameplay Programming",
    skillGameplayText: "Unity C# systems, player controllers, game states, interaction logic, and prototype iteration.",
    skillDesignTitle: "Level & Experience Design",
    skillDesignText: "3D spaces, player pacing, environmental storytelling, horror observation loops, and readable layouts.",
    skillWebTitle: "Web Development",
    skillWebText: "Responsive front ends, JavaScript interactions, Ruby on Rails experience, and maintainable UI structure.",
    projectsEyebrow: "Selected Work",
    projectsTitle: "Projects",
    projectsIntro: "Playable builds, prototypes, and game-focused experiments using the assets already hosted in this portfolio.",
    roomDescription: "A psychological observation game inspired by The Exit 8, built around noticing subtle environmental changes.",
    lunarDescription: "A first-person platformer for Windows with a diverse action set and spatial movement challenges.",
    projectXDescription: "A conceptual first-person psychological horror game exploring atmosphere, tension, and spatial unease.",
    spaceDescription: "A browser-playable WebGL project focused on fast access and lightweight interactive presentation.",
    contactEyebrow: "Contact",
    contactTitle: "Let’s talk about games, tools, or software roles.",
    phoneUs: "US: +1 380-213-2640",
    phoneChina: "China: +86 130-1182-1324"
  },
  zh: {
    navProjects: "项目",
    navResume: "简历",
    navContact: "联系",
    eyebrow: "游戏开发者 · C# 程序员 · Web 开发者",
    heroTitle: "我制作可玩的系统、有氛围的关卡，以及打磨完整的交互体验。",
    heroDescription: "我是周伟伦，毕业于俄亥俄州立大学计算机与信息科学专业。我的作品聚焦 Unity 玩法开发、UI 开发、关卡设计、Monogame 原型，以及全栈 Web 项目。",
    viewProjects: "查看项目",
    downloadResume: "打开简历",
    location: "美国俄亥俄哥伦布 / 中国武汉",
    availability: "正在寻找游戏开发与软件开发相关机会",
    aboutEyebrow: "关于",
    aboutTitle: "技术扎实，理解玩法，也能跨栈完成产品。",
    aboutTextOne: "我专注于编程与游戏设计，具备 UI 开发、3D 关卡设计、Unity 脚本开发和 Monogame 开发经验。",
    aboutTextTwo: "我也有前端与后端 Web 开发经验，曾使用 Ruby on Rails 开发和维护 Web 应用。最熟悉的语言是 C#，同时也熟悉 C++、Python、JavaScript、Java、Ruby、HTML 和 CSS。",
    studioEyebrow: "个人工作室",
    studioTitle: "Chaotic System 是我的独立个人游戏工作室标识。",
    studioText: "这是我作为独立开发者设计、编程并发布游戏的归属，专注于心理恐怖、系统交互和富有氛围的玩家体验。",
    skillsEyebrow: "能力",
    skillsTitle: "核心技能",
    skillGameplayTitle: "玩法编程",
    skillGameplayText: "Unity C# 系统、玩家控制器、游戏状态、交互逻辑，以及快速原型迭代。",
    skillDesignTitle: "关卡与体验设计",
    skillDesignText: "3D 空间、玩家节奏、环境叙事、恐怖观察循环，以及清晰可读的布局。",
    skillWebTitle: "Web 开发",
    skillWebText: "响应式前端、JavaScript 交互、Ruby on Rails 经验，以及可维护的 UI 结构。",
    projectsEyebrow: "作品精选",
    projectsTitle: "项目",
    projectsIntro: "这里展示已托管在作品集中的可玩版本、原型，以及偏游戏方向的实验作品。",
    roomDescription: "一款受 The Exit 8 启发的心理观察游戏，核心体验是发现环境中的细微变化。",
    lunarDescription: "一款支持 Windows 的第一人称平台跳跃游戏，包含多种动作组合和空间移动挑战。",
    projectXDescription: "一款概念型第一人称心理恐怖游戏，探索氛围、紧张感和空间不安。",
    spaceDescription: "一个可在浏览器中游玩的 WebGL 项目，强调快速访问和轻量级交互展示。",
    contactEyebrow: "联系",
    contactTitle: "欢迎交流游戏、工具或软件开发机会。",
    phoneUs: "美国电话：+1 380-213-2640",
    phoneChina: "中国电话：+86 130-1182-1324"
  }
};

function setLanguage(lang) {
  const strings = translations[lang] || translations.en;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (typeof strings[key] === "string") {
      element.textContent = strings[key];
    }
  });

  document.querySelectorAll(".lang-switch button").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("portfolio-language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-switch button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  setLanguage(localStorage.getItem("portfolio-language") || "en");
});
