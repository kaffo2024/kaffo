"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

interface ActiveLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  exact?: boolean;
}

function ActiveLink({
  href,
  children,
  className = "",
  activeClassName = "",
  inactiveClassName = "",
  exact = false,
  ...props
}: ActiveLinkProps) {
  const pathname = usePathname();

  // Handle exact matching
  const isActive = exact
    ? pathname === href
    : pathname.startsWith(href) && (href !== "/" || pathname === "/");

  // Combine classes
  const baseClasses = className;
  const activeClasses = isActive
    ? `${baseClasses} ${activeClassName}`.trim()
    : `${baseClasses} ${inactiveClassName}`.trim();

  // Special active styling for visual feedback
  const activeStyle = isActive
    ? {
        background:
          "linear-gradient(135deg, rgba(14, 107, 129, 0.1) 0%, rgba(251, 175, 64, 0.05) 100%)",
        borderRight: "3px solid #0e6b81",
      }
    : {};

  return (
    <Link
      href={href}
      className={`relative transition-all duration-300 ${activeClasses}`}
      style={activeStyle}
      {...props}
    >
      {/* Active Link Glow Effect */}
      {isActive && (
        <>
          <div className="absolute inset-0 rounded-xl bg-linear-to-r from-calypso/5 to-yellow-orange/5" />
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-orange rounded-full animate-pulse" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Hover Effect Container */}
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-linear-to-r from-calypso/5 to-transparent rounded-xl" />
      </div>
    </Link>
  );
}

export default ActiveLink;
