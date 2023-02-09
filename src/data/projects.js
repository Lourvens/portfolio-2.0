import img1 from "../assets/project-01.png"
import img2 from "../assets/project-02.jpg"
import img3 from "../assets/project-03.jpg"
import img4 from "../assets/project-04.jpg"
import img5 from "../assets/project-05.png"

const projects = [
  {
    title: "digital agency",
    content: "Built on React, Digital agency it's a landing page website.",
    img: img1,
    tags: ["React", "NextUI", "Scroll-Reveal"],
    urls: ["https://dagency.vercel.app/", "https://github.com/Lourvens/dtravel"]
  }, 
  {
    title: "the quote",
    content: "thequote built with React JS with Google account's Sign in feature. Styled with tailwidcss to display three randomly quote from an API.",
    img: img2,
    tags: ["React", "Rest API", "tailwindcss", "firebase"],
    urls: ["https://thequote.vercel.app/", "https://github.com/Lourvens/thequote"]
  },
  {
    title: "Streameo - movie website",
    content: "Streameo is movie website made with react, styled with tailwindcss it display a list of best movie from TMDB Api.",
    img: img3,
    tags: ["React", "Movie API", "TypeScript", "Redux"],
    urls: ["https://streameo.vercel.app/", "https://github.com/Lourvens/streameo"]
  },
  {
    title: "Creatific - Landing page",
    content: "This is a static landing page build with Astro, styled with scss.",
    img: img4,
    tags: ["Astro", "Scss", "Html & Css"],
    urls: ["https://creatific.vercel.app/", "https://github.com/Lourvens/creatific"]
  },
  {
    title: "upward - Landing page",
    content: "This is a static landing page build with Next.js adn Tailwidcss.",
    img: img5,
    tags: ["Tailwidcss", "NextJS"],
    urls: ["https://upward-eosin.vercel.app", "https://github.com/Lourvens/upward"]
  },

]

export default projects