import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
// Assuming these components exist

function NicknameGenerator() {
  const [nickname, setNickname] = useState("");
  const [emoji, setEmoji] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const fetchNickname = async () => {
    setIsLoading(true); // Start loading
    const response = await fetch("http://localhost:8000/nickname");
    const data = await response.json();
    setNickname(data.nickname);
    setEmoji(data.emoji);
    setIsLoading(false); // End loading
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100 p-4">
      <Image src="/logo.png" alt="Logo" width={150} height={150} />
      <h1 className="text-4xl font-bold text-gray-800">水果动物</h1>
      <h2 className="text-xl text-gray-500">你的名字</h2>
      <Card className="flex flex-col items-center p-4">
        {isLoading ? (
          <>
            <div className="w-full max-w-xs h-8 bg-gray-300 rounded animate-pulse mb-2"></div>{" "}
            {/* Adjusted for a more gray color and size */}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold">
              {nickname || "香橙猴子"} {emoji || "🍊🐒"}
            </h2>
          </>
        )}
      </Card>
      <Button className="mt-4" onClick={fetchNickname}>
        Generate
      </Button>
    </div>
  );
}

export default NicknameGenerator;
