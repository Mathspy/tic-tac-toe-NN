import { networkPlay, isGameOver, noMoreMovesLeft, reverseTurn } from "../logic"

describe("noMoreMovesLeft", () => {
	test("should return true if board is full", () => {
		expect(noMoreMovesLeft(["X", "O", "X", "X", "X", "O", "O", "X", "O"])).toBe(true)
		expect(noMoreMovesLeft(["X", "X", "O", "O", "O", "X", "X", "O", "X"])).toBe(true)
	})

	test("should return false if board is not full", () => {
		expect(noMoreMovesLeft(["?", "O", "X", "X", "X", "O", "O", "X", "O"])).toBe(false)
		expect(noMoreMovesLeft(["X", "X", "O", "O", "?", "X", "X", "O", "X"])).toBe(false)
	})
})

describe("reverseTurn", () => {
	test("should be able to reverse O to X", () => {
		expect(reverseTurn("O")).toBe("X")
	})

	test("should be able to reverse X to O", () => {
		expect(reverseTurn("X")).toBe("O")
	})

	test("should error on any other input", () => {
		expect(() => reverseTurn("hello test")).toThrow()
	})
})

describe("isGameOver", () => {
	test("should return false if board is empty", () => {
	    expect(isGameOver(
	        ["?", "?", "?",
	        "?", "?", "?",
	        "?", "?", "?"]
	    )).toBe(false)
	})

	test("should return false if there are no winners", () => {
	    expect(isGameOver(
	        ["X", "?", "O",
	        "O", "X", "?",
	        "O", "X", "?"]
	    )).toBe(false)

	    expect(isGameOver(
	        ["O", "X", "O",
	        "X", "O", "X",
	        "X", "O", "X"]
	    )).toBe(false)

	    expect(isGameOver(
	        ["?", "?", "X",
	        "?", "?", "?",
	        "?", "?", "?"]
	    )).toBe(false)
	})

	test("should be able to return X or O depending on winner", () => {
	    expect(isGameOver(
	        ["X", "X", "?",
	        "O", "O", "O",
	        "?", "?", "X"]
	    )).toBe("O")

	    expect(isGameOver(
	        ["O", "?", "?",
	        "X", "X", "X",
	        "?", "?", "O"]
	    )).toBe("X")
	})

	test("should be able to detect horizontal victories", () => {
	    expect(isGameOver(
	        ["X", "X", "X",
	        "O", "?", "O",
	        "?", "?", "?"]
	    )).toBe("X")

	    expect(isGameOver(
	        ["O", "?", "?",
	        "X", "X", "X",
	        "?", "?", "O"]
	    )).toBe("X")

	    expect(isGameOver(
	        ["O", "O", "?",
	        "?", "?", "O",
	        "X", "X", "X"]
	    )).toBe("X")
	})

	test("should be able to detect vertical victories", () => {
	    expect(isGameOver(
	        ["X", "O", "?",
	        "X", "O", "?",
	        "X", "?", "?"]
	    )).toBe("X")

	    expect(isGameOver(
	        ["?", "X", "O",
	        "O", "X", "?",
	        "?", "X", "?"]
	    )).toBe("X")

	    expect(isGameOver(
	        ["O", "O", "X",
	        "?", "?", "X",
	        "?", "?", "X"]
	    )).toBe("X")
	})

	test("should be able to detect diagonal victories", () => {
	    expect(isGameOver(
	        ["X", "O", "X",
	        "O", "X", "O",
	        "X", "O", "?"]
	    )).toBe("X")

	    expect(isGameOver(
	        ["X", "O", "X",
	        "O", "X", "O",
	        "?", "O", "X"]
	    )).toBe("X")
	})
})