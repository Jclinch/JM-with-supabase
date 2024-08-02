import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    skills: string;
    description: string;
    link: string;
  }[];
  className?: string;
  titleClassName?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-row-1 md:grid-cols-2  lg:grid-cols-3  py-10 items-center justify-center md:items-start md:justify-start",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#ff8906] dark:bg-slate-800/[0.8] block  rounded-3xl" //shadow
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardSkills>{item.skills}</CardSkills>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-[160px] md:h-full w-[280px] md:w-full p-4 overflow-hidden bg-[#23242A] border border-transparent dark:border-[#ff8906] group-hover:border-[#ff8906] relative ", //z-20 & border color
        className
      )}
    >
      <div className="relative "> {/*z-50*/}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h5 className={cn("text-[#fadebf] font-bold text-xs md:text-lg tracking-wide mt-[-20px] md:mt-4", className)}>
      {children}
    </h5>
  );
};
export const CardSkills = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-[#ff8906] font-extrabold text-sm md:text-xl tracking-wide mt-0 md:mt-4", className)}>
      {children}
    </p>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-[5px] md:mt-8 text-white tracking-wide leading-relaxed text-xs",
        className
      )}
    >
      {children}
    </p>
  );
};


