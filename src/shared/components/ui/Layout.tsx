import { LayoutProps } from "../../../types";
import { Footer } from "../Footer";
import { Sidebar } from "../Sidebar";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
