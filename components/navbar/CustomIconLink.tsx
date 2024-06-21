"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

function CustomIconLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <motion.a
      target="_blank"
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-6 mx-3"
    >
      {children}
    </motion.a>
  );
}

export default CustomIconLink;
