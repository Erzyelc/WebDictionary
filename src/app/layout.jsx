import "@styles/globals.css";
import Theme from "@/components/Theme";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Dictionary",
  description: "Free Web Dictionary using the Free Dictionary API.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
};

export default RootLayout;
