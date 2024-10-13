"use client"

import {useBalance} from "@repo/store/useBalance"

export default function Home() {
  const balance = useBalance();

  return (
    <div className="text-lg bg-green-400">
      hi there{balance}
    </div>
  );
}
