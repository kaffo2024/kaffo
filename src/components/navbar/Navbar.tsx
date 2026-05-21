"use client";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import {
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  AppstoreOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Button, Layout } from "antd";
import Link from "next/link";
import UserAvatar from "../user-avatar/UserAvatar";
import { usePathname } from "next/navigation";

const { Header } = Layout;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  const navItems = [
    {
      key: "home",
      label: "الرئيسية",
      icon: <HomeOutlined className="text-base opacity-80" />,
      href: "/",
    },
    {
      key: "services",
      label: "خدماتنا",
      icon: <AppstoreOutlined className="text-base opacity-80" />,
      href: "/services",
    },
    {
      key: "about",
      label: "من نحن",
      icon: <InfoCircleOutlined className="text-base opacity-80" />,
      href: "/about",
    },
    {
      key: "contact",
      label: "اتصل بنا",
      icon: <ContactsOutlined className="text-base opacity-80" />,
      href: "/contact",
    },
  ];

  const handleNavClick = (key: string) => {
    setMobileMenuOpen(false);
  };

  return (
    <Header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-0 border-b border-gray-100/80 shadow-sm/50 h-auto py-3 px-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-calypso-400/20 to-koromiko-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <Link href={"/"}>
                <img
                  src="/logo/Logo.svg"
                  width={100}
                  height={60}
                  alt="Kaffo Logo"
                  className="transition-all duration-300 hover:scale-[1.02] drop-shadow-sm hover:drop-shadow w-20 md:w-24 flex"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => handleNavClick(item.key)}
                className={`group relative text-gray-600 hover:text-calypso-700 font-medium flex items-center gap-2 transition-all duration-300 py-2 px-1 ${
                  item.href === pathname ? "text-calypso-700" : ""
                }`}
              >
                {item.icon}
                <span className="transition-all duration-300 group-hover:translate-x-[-2px]">
                  {item.label}
                </span>
                <span
                  className={`absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-calypso-500 to-koromiko-400 transition-all duration-300 group-hover:w-full ${
                    item.href === pathname ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}

            {/* User Avatar */}
            <div className="transition-all duration-300 hover:scale-105">
              <UserAvatar />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {session ? (
              <div className="transition-all duration-300 hover:scale-105">
                <UserAvatar />
              </div>
            ) : (
              <Button
                type="primary"
                onClick={() => signIn()}
                className="bg-gradient-to-r from-koromiko-400 to-koromiko-500 border-0 rounded-lg font-medium h-9 px-4 text-sm shadow-sm transition-all duration-300 text-white"
              >
                دخول
              </Button>
            )}

            <Button
              type="text"
              icon={
                mobileMenuOpen ? (
                  <CloseOutlined className="opacity-80" />
                ) : (
                  <MenuOutlined className="opacity-80" />
                )
              }
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-calypso-700 hover:bg-calypso-50/50 rounded-lg transition-all duration-300"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 mt-4 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="border-t border-gray-100/80 pt-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => handleNavClick(item.key)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                    item.href == pathname
                      ? "bg-calypso-50/90 text-calypso-700"
                      : "text-gray-600 hover:bg-gray-50/50 hover:text-calypso-600"
                  }`}
                >
                  <div
                    className={`transition-all duration-300 ${
                      item.href == pathname ? "scale-110" : ""
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>

            {!session && (
              <div className="pt-4 border-t border-gray-100/80 mt-2">
                <Button
                  type="primary"
                  onClick={() => {
                    signIn();
                    setMobileMenuOpen(false);
                  }}
                  block
                  className="bg-gradient-to-r from-koromiko-400 to-koromiko-500 hover:from-koromiko-500 hover:to-koromiko-600 border-0 rounded-xl font-medium h-12 transition-all duration-300 text-white"
                >
                  تسجيل الدخول
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Header>
  );
}
