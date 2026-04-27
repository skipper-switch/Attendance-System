"use client"
import SignInImage from "../../../public/images/signin-img.png";
import SignUpImage from "../../../public/images/signup-img.png";
import ImageSection from "@/components/auth/ImageSection";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const pathname = usePathname();
  const isSignUPPage = pathname === "/sign-up";
 

  return (
       <main className="remove-scrollbar flex flex-col lg:flex-row min-h-screen w-full justify-center lg:justify-between items-center lg:items-stretch">
      {isSignUPPage ? (
        <>
          <div className="hidden lg:flex h-screen w-[40%] sticky top-0 items-center justify-end bg-sky-1">
            <ImageSection
              imageSrc={SignUpImage}
              altText="sign-up-image"
              containerWidth="40%"
              imageHeight={1000}
              imageWidth={1000}
              className="h-10 w-fit"
              placeholder="blur"
            />
          
          </div>
          <div className="flex w-full lg:w-[60%] justify-center lg:justify-start px-4">
            {children}
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full lg:w-[60%] justify-center lg:justify-start px-4">
            {children}
          </div>
          <div className="hidden lg:flex h-screen w-[40%] sticky top-0 items-center justify-end bg-sky-1">
            <ImageSection
              imageSrc={SignInImage}
              altText="sign-in-image"
              containerWidth="40%"
              imageHeight={1000}
              imageWidth={1000}
              className="h-10 w-fit"
              placeholder="blur"
            />
          </div>
        </>
      )}
    </main>
  );
}
