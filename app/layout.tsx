import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "selfiecat.club";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: "Selfie Cat — The Internet's Greatest Camera Roll",
    description: "A living tribute to Manny, the legendary Selfie Cat—and the community keeping the camera roll alive.",
    keywords: ["Selfie Cat", "Manny the cat", "Manny Selfie Cat", "internet meme", "Solana memecoin"],
    openGraph: {
      title: "Selfie Cat — He Took the Selfie. We Kept the Receipts.",
      description: "The story, the squad, and the viral camera roll that made internet history.",
      type: "website",
      images: [{ url: socialImage, width: 1792, height: 938, alt: "Selfie Cat commemorative archive" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Selfie Cat — The Internet's Greatest Camera Roll",
      description: "A living tribute to the cat who put the whole pack in frame.",
      images: [socialImage],
    },
    icons: { icon: "/selfie-cat-tribute.png", shortcut: "/selfie-cat-tribute.png" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
