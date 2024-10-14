"use client"

import {AppBar} from "@repo/ui/appbar"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <div className="text-lg">
      <AppBar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
    </div>
  );
}
