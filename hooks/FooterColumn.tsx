
import React from 'react';
import Link from 'next/link';

interface FooterColumnProps {
  title: string;
  links: { text: string, href: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col items-left mx-auto justify-center h-[80px] md:h-0 ">
      <h3 className=" text-[8px] md:text-lg font-semibold mb-0 text-[#A4A4A6] mt-4 md:mt-4">{title}</h3>
      <ul className="items-center justify-evenly space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-[4px] md:text-sm text-[#ff8906] hover:text-white">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
