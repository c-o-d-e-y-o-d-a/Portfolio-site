"use client";



import React from "react";
import ProjectCard from "./ProjectCard";
const prop_example = {
  src:'/LXWBga.png',
  title:'My project',
  description:"randomfadojfodjsoifjsdoijf dfgsgf"
}
export default function ProjectSection() {
  return (
   <section id="project-section" className="mt-12 text-center ">
   <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-6xl"> Projects</h1>
   
   <div className="project-section">
    <ProjectCard src={prop_example.src} title={prop_example.title} description={prop_example.description}/>
    

   </div>
   </section>

  );
}

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper";
// import ProjectCard from "./ProjectCard";
// import { projectData } from "@/public/constants";

// const ProjectSection = () => {
//   return (
//     <section id="projectSection" className="mb-32">
//       <h2>My Projects</h2>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: ".swiper-pagination", clickable: true }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         {projectData.map((object) => (
//           <SwiperSlide key={object.title}>
//             <ProjectCard
//               title={object.title}
//               description={object.description}
//               imgUrl={object.imgUrl}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default ProjectSection;
