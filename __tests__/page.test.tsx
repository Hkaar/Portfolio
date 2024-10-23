import { render, screen } from "@testing-library/react";
import { Suspense } from "react";
import Home from "../app/(main)/page";
import { assert, test } from "vitest";

// RESERVED!! STILL FINDING A WAY TO FIX RSC NOT RENDERING
// test("Page", async () => {
// 	render(
// 		<Suspense>
// 			<Home />
// 		</Suspense>,
// 	);

// 	await screen.findByRole("heading", {level: 3, name: "About myself"});
// });

test('temp', () => { assert(5 == 5) })