
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CookiesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/politica-cookies");
  }, [router]);
  return null;
}
