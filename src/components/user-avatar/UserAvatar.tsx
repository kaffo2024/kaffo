"use client";
import * as React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Skeleton } from "antd";

function UserAvatar() {
  const { data, status } = useSession();

  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined className="opacity-80" />,
      label: "الحساب",
      className: "py-3 hover:bg-gray-50 transition-colors duration-300",
    },
    {
      key: "2",
      icon: <LogoutOutlined className="opacity-80" />,
      label: "تسجيل الخروج",
      onClick: () => signOut({ redirect: false }),
      danger: true,
      className: "py-3 hover:bg-red-50 transition-colors duration-300",
    },
  ];

  return (
    <>
      {status === "loading" ? (
        <Skeleton.Avatar active size="large" className="opacity-70" />
      ) : status === "unauthenticated" ? (
        <Button
          type="primary"
          onClick={() => signIn()}
          className="bg-gradient-to-r from-koromiko-400 to-koromiko-500 hover:from-koromiko-500 hover:to-koromiko-600 border-0 rounded-lg font-medium h-10 px-6 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5 text-white"
        >
          تسجيل الدخول
        </Button>
      ) : (
        <Dropdown
          menu={{
            items: menuItems,
            className:
              "rtl-dropdown min-w-[180px] rounded-xl shadow-lg border border-gray-100 py-2",
          }}
          placement="bottomLeft"
          trigger={["click", "hover"]}
          arrow={{ pointAtCenter: true }}
        >
          <Avatar
            size="large"
            className="bg-gradient-to-br from-calypso-700 to-calypso-800 text-white cursor-pointer hover:scale-[1.02] transition-all duration-300 border-2 border-white/50 shadow-sm hover:shadow"
          >
            {data?.user?.username?.slice(0, 2)?.toUpperCase() || "US"}
          </Avatar>
        </Dropdown>
      )}
    </>
  );
}


export default UserAvatar