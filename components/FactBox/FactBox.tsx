"use client";

import { randRange } from "@/lib/commonUtils";
import { useState, useEffect } from "react";

const factList = [
  "Gummy bears were originally called dancing bears",
  "The hagfish is the only animal that has a skull but no spine",
  "Shoes that were specific to left and right were not made until the Civil War",
  "The Turks call the turkey an American bird",
  "Comets in ancient Greece were called hairy stars",
  "A “cronut” is a cross between a doughnut and a croissant",
  "Rabbits can see behind them without moving their heads.",
  "A Chihuahua and a dachshund mix is a “chiweenie”",
  "Moons can have moons, and they are called moonmoons",
  "The word good-bye is a contraction of God be with ye",
  "Jellyfish can't fart"
] as const;

export default function FactBox(props: React.HTMLAttributes<HTMLSpanElement>) {
  const [fact, setFact] = useState(factList[Math.round(randRange(0, 11))]);

  useEffect(() => {
    setInterval(() => {
      setFact(factList[Math.round(randRange(0, 11))]);
    }, 1000)
  })

  return (
    <span {...props}>
      {fact}
    </span>
  )
}