"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function LoginButton() {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      variant="outline"
      onClick={() => {
        setLoading(true);
        signIn("google");
      }}
      disabled={loading}
    >
      Continue with Google
    </Button>
  );
}
