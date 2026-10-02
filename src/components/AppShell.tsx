import { ReactNode } from "react";
import BottomNav from "./BottomNav";

const AppShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <div className="mx-auto w-full max-w-lg px-0 pb-24 md:ml-24 md:max-w-6xl md:px-6 md:pb-12 lg:mr-6">
      {children}
    </div>
    <BottomNav />
  </div>
);

export default AppShell;