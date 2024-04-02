
"use client";
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { SkillData } from '@/public/constants'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules'

const Skills = () => {
  return (
    <section id="Skills">
        <div
    style={{backgroundImage: "url(/bg-2.jpg)"}}
     className='min-h-screen w-full flex items-center justify-center bg-cover bg-center '>
      <div className='flex flex-col gap-20 max-w-[80%] text-center items-center'>
        <h1 className='font-semibold text-white text-[50px]'>
            My{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                {" "}
                TECH{" "}
            </span>
            Stack
        </h1>
        <p className='text-gray-400 text-[25px]'>
            Using the latest tech this world has to offer
        </p>
        <Swiper 
        slidesPerView={5}
        loop={true}
        autoplay={{
            delay:0,
            disableOnInteraction:false
        }}
        speed={5000}
        modules={[Autoplay]}
        className='max-w-[80%]'
        >
            {SkillData.map((skill,index)=>(
                <SwiperSlide key={index}>
                    <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                    />

                   
                </SwiperSlide>
            ))}



        </Swiper>
        <Swiper 
        slidesPerView={5}
        loop={true}
        autoplay={{
            delay:0,
            disableOnInteraction:false,
            reverseDirection:true
        }}
        speed={5000}
        modules={[Autoplay]}
        className='max-w-[80%]'
        >
            {SkillData.map((skill,index)=>(
                <SwiperSlide key={index}>
                    <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                    />

                   
                </SwiperSlide>
            ))}



        </Swiper>

      </div>
    </div>
    </section>
  )
}

export default Skills