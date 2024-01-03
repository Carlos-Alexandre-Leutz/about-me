import { createI18n } from "vue-i18n";
import textsEN from "./i18nTexts/en/texts.js";
import textsPt from "./i18nTexts/pt-br/texts.js";

const messages = {
  en: {
    english: "English",
    portugues: "Portuguese (Brazil)",
    university: "University",
    firstUniversity: "Analysis and systems development",
    secondUniversity: "Product management",
    fullSystemsAnalyst: "Full systems analyst",
    aboutMe: "About Me",
    skills: "Skills",
    myGraduation: "My Graduation",
    myProjects: "My Projects",
    myWorks: "Some of my works",
    socialNetworks: "Social Networks",
    myLastJobs: "My Last Jobs",
    myPortfolio: "My Portfolio",
    today: "Today",
    education: "Education",
    experiences: "Experiences",
    staffingAgency: "staffing agency",
    mySocialNetworks: "My Social Networks",
    mainJobs: "My main jobs are private systems.",
    someWorks: " Here are some websites I've created throughout my career.",
    paragraphOne: textsEN.paragraphOne,
    paragraphTwo: textsEN.paragraphTwo,
    paragraphThree: textsEN.paragraphThree,
    paragraphFour: textsEN.paragraphFour,
  },
  pt: {
    english: "Inglês",
    portugues: "Português (Brasil)",
    university: "Universidade",
    firstUniversity: "Analise e Desenvolvimento de Sistemas",
    secondUniversity: "Gestão de produtos",
    fullSystemsAnalyst: "Analista de Sistemas Pleno",
    aboutMe: "Sobre mim",
    skills: "Habilidades",
    myGraduation: "Minha Formação",
    myProjects: "Meus Projetos",
    myWorks: "Alguns dos meus trabalhos",
    socialNetworks: "Redes Sociais",
    myLastJobs: "Experiências Profissionais",
    myPortfolio: "Meu Portfólio",
    today: "Presente",
    education: "Educação",
    experiences: "Experiências",
    staffingAgency: "empresa de terceirização",
    mySocialNetworks: "Minhas Redes sociais",
    mainJobs: "Meus trabalhos principais são sistemas privados.",
    someWorks: " Aqui tem alguns sites que fiz ao longo da minha careira.",
    paragraphOne: textsPt.paragraphOne,
    paragraphTwo: textsPt.paragraphTwo,
    paragraphThree: textsPt.paragraphThree,
    paragraphFour: textsPt.paragraphFour,
  },
};

const i18n = createI18n({
  locale: "en",
  messages,
});

export default i18n;
