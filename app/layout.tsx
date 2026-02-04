import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Bangla Bazar | বাংলাদেশের ইকমার্স মার্কেটপ্লেস",
  description:
    "বাংলাদেশের জন্য প্রথম সারির মাল্টি-সেলার ইকমার্স প্ল্যাটফর্ম, যেখানে সেলার এবং অ্যাডমিন সবকিছু নিয়ন্ত্রণ করতে পারে।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
