import { ReactNode } from "react";

export default function CreateLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
