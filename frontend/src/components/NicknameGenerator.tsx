import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
// Assuming these components exist

function NicknameGenerator() {
  const [nickname, setNickname] = useState("");
  const [emoji, setEmoji] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<{ nickname: string; emoji: string }[]>(
    []
  );

  const fetchNickname = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:8000/nickname");
    const data = await response.json();
    setNickname(data.nickname);
    setEmoji(data.emoji);
    setHistory([...history, { nickname: data.nickname, emoji: data.emoji }]);
    setIsLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${nickname} ${emoji}`);
    alert("Copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <Image
        src="/logo.png"
        alt="Logo"
        width={150}
        height={150}
        className="animate-bounce"
      />
      <h1 className="text-5xl font-extrabold text-gray-900 mb-2">水果动物</h1>
      <h2 className="text-2xl text-white font-semibold mb-4">你的名字</h2>
      <Card className="flex flex-col items-center p-6 shadow-lg rounded-lg bg-white">
        {isLoading ? (
          <Skeleton className="w-full max-w-xs h-8 bg-gray-300 rounded animate-pulse mb-2"></Skeleton>
        ) : (
          <h2 className="text-3xl font-bold text-center">
            {nickname || "葡萄猴子"} {emoji || "🍇🐒"}
          </h2>
        )}
      </Card>
      <Button
        className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 font-bold"
        onClick={fetchNickname}
      >
        Click Me
      </Button>
    </div>
  );
}

export default NicknameGenerator;
