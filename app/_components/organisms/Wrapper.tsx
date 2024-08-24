"use client";
import StyledComponentsRegistry from "../../_utilities/antd-registry";
import ConfigProvider from "antd/es/config-provider";
import NotificationProvider from "@/app/_contexts/notification";
import { Provider as JotaiProvider } from "jotai";

const Wrapper = ({ children }: any) => {
  return (
    <JotaiProvider>
      <StyledComponentsRegistry>
        <ConfigProvider>
          <NotificationProvider>{children}</NotificationProvider>
        </ConfigProvider>
      </StyledComponentsRegistry>
    </JotaiProvider>
  );
};

export default Wrapper;
