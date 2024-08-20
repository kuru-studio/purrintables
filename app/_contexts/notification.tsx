import React, { createContext, useContext } from "react";
import { notification } from "antd";

interface NotificationContextType {
  openNotification: (message: string, description: string) => void;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
// Create a custom hook to use the NotificationContext

// Notification context provider component
export default function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [api, contextHolder] = notification.useNotification();

  function openNotification(message: string, description: string) {
    api.open({
      message,
      description,
      duration: 2,
      placement: "bottomRight",
    });
  }

  return (
    <NotificationContext.Provider value={{ openNotification }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
}
