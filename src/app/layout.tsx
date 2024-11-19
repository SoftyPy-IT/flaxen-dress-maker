"use client";
import "@/app/globals.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <DefaultLayout>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {loading ? <Loader /> : children}
          </div>
        </DefaultLayout>
      </body>
    </html>
  );
}
