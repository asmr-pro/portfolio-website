"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Welcome to my portfolio! I'm Mustafa Munib, a passionate full-stack developer with a Bachelor's degree in Computer Science from KEU, Kabul. My journey in the world of technology began with a curiosity for coding, which eventually led me to pursue formal education in the field.

During my time at KEU, I immersed myself in various aspects of computer science, gaining a solid foundation in both theoretical concepts and practical applications. From algorithms and data structures to web development and software engineering, I embraced every opportunity to expand my knowledge and hone my skills.

Since graduating in 2023, I've been dedicated to pushing the boundaries of what's possible in the digital realm. As a full-stack developer, I thrive on the challenge of creating seamless user experiences across the entire stack, from front-end interfaces to back-end systems. Whether I'm crafting elegant code or collaborating with cross-functional teams, my goal is always the same: to deliver innovative solutions that make a meaningful impact.

Beyond my technical expertise, I bring a proactive mindset and a strong commitment to continuous learning. I'm constantly exploring new technologies and staying abreast of industry trends, ensuring that I remain at the forefront of innovation.

I'm excited to share my journey and showcase the projects that reflect my passion for technology and my dedication to excellence. Thank you for visiting, and I look forward to connecting with you!      </p>
    </motion.section>
  );
}
