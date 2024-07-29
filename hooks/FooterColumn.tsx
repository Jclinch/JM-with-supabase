
import React from 'react';
import Link from 'next/link';

interface FooterColumnProps {
  title: string;
  links: { text: string, href: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-lg font-semibold mb-2 text-[#A4A4A6]">{title}</h3>
      <ul className="flex flex-col items-center space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-sm text-[#ff8906] hover:text-white">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
