import "./globals.css";
import LeftBarPage from "@/components/LeftBar";
import RightBarPage from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg zl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          <div className="md:ml-8 px-2 h-screen">
            <LeftBarPage />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray  h-screen">{children}</div>
          <div className=" hidden lg:flex flex-1  h-screen">
            <RightBarPage />
          </div>
        </div>
      </body>
    </html>
  );
}
