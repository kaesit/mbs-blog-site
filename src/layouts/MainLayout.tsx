import React from 'react';
import { Outlet } from 'react-router-dom';
import CardNav from '../components/CardNav'; // Adjust path if needed
import logo from '../logo.svg'; // Adjust path if needed

// --- We moved the 'items' array from index.tsx to here ---
// This keeps all the navbar logic in one place.
const items = [
  {
    label: "About",
    bgColor: "#A02C2C",
    textColor: "#E0F0FF",
    links: [
      {
        label: "Me",
        href: "/about",
        ariaLabel: "About Careers",
      },
    ],
  },
  {
    label: "Projects",
    bgColor: "#258C8F",
    textColor: "#E0F0FF",
    links: [
      {
        label: "Featured",
        href: "/projects",
        ariaLabel: "Featured Projects",
      },
      {
        label: "Case Studies",
        href: "https://github.com/kaesit",
        ariaLabel: "Project Case Studies",
      },
    ],
  },
  {
    label: "Contact",
    bgColor: "#1F4F7A",
    textColor: "#E0F0FF",
    links: [
      {
        label: "Contact Form",
        href: "/contact",
        ariaLabel: "Contact Us",
      },
      {
        label: "Email",
        href: "https://github.com/kaesit",
        ariaLabel: "Email us",
      },
      {
        label: "Instagram",
        href: "https://github.com/kaesit",
        ariaLabel: "Instagram",
      },
      {
        label: "LinkedIn",
        href: "https://github.com/kaesit",
        ariaLabel: "LinkedIn",
      },
    ],
  },
  {
    label: "Blogs",
    bgColor: "#002D7A",
    textColor: "#E0F0FF",
    links: [
      {
        label: "Newest Blogs",
        href: "/blog",
        ariaLabel: "Newest Blogs",
      },
      {
        label: "Movie & Show Critics",
        href: "https://github.com/kaesit",
        ariaLabel: "Movies & Shows",
      },
      {
        label: "Technology Blogs",
        href: "https://github.com/kaesit",
        ariaLabel: "Technology",
      },
    ],
  },
];

const MainLayout: React.FC = () => {
  return (
    <>
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        menuColor="#f5f5f5"
        buttonBgColor="transparent"
        buttonTextColor="#f5f5f5"
      />
      
      {/* This Outlet renders the child route (e.g., About, Projects) */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;