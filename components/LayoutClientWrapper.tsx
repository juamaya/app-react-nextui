"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Evita renderizar hasta que el componente se haya montado en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evita el renderizado en SSR para prevenir el error

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main
        className="container mx-auto max-w-7xl pt-16 px-6 flex-grow"
        role="main"
      >
        {/* Animación de cambio de página */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, scale: 0.98, y: 35 }}
            animate={{ opacity: 1, scale: 1 , y: 0 }}
          
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <span className="text-default-600">Juamaya 🚀 2025</span>
      </footer>
    </div>
  );
}
