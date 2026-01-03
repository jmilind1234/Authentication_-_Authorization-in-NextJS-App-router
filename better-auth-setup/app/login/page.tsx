"use client";

import { authClient } from "@/lib/auth-client";

function LoginPage() {
  const handleGithubLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard"
    });
  };
  return (
    <button style={{ border: "1px solid black" }} onClick={handleGithubLogin}>
      Github Login
    </button>
  );
}

export default LoginPage;
