"use client";
import StyledComponentsRegistry from "../../_utilities/antd-registry";
import ConfigProvider from "antd/es/config-provider";
import NotificationProvider from "@/app/_contexts/notification";

const Wrapper = ({ children }: any) => {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider>
        <NotificationProvider>{children}</NotificationProvider>
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
};

export default Wrapper;
