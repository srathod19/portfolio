"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedIntroProps {
  title: string;
  description: React.ReactNode;
}

export default function AnimatedIntro({
  title,
  description,
}: AnimatedIntroProps) {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-lg max-w-xl"
      >
        {description}
      </motion.p>
    </div>
  );
}
