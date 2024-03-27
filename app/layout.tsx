import "./globals.css";
import { Public_Sans } from "next/font/google";


const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title></title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content=""
        />
        <meta property="og:title" content="" />
        <meta
          property="og:description"
          content="Starter template showing how to use LangChain in Next.js projects. See source code and deploy your own at https://github.com/langchain-ai/langchain-nextjs-template!"
        />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="" />
        <meta
          name="twitter:description"
          content=""
        />
        <meta name="twitter:image" content="" />
      </head>
      <body className={publicSans.className}>
        <div className="">
          
          {children}
        </div>
      </body>
    </html>
  );
}
