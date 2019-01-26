import isAdjacent from "../src/isAdjacent";

describe("isAdjacent", () => {
  it("should correctly determine adjacent cells", () => {
    expect(isAdjacent({ x: 0, y: 0 }, { x: 1, y: 0 })).toBe(true);
    expect(isAdjacent({ x: 1, y: 0 }, { x: 0, y: 0 })).toBe(true);
    expect(isAdjacent({ x: 0, y: 0 }, { x: 0, y: 1 })).toBe(true);
    expect(isAdjacent({ x: 0, y: 1 }, { x: 0, y: 0 })).toBe(true);

    expect(isAdjacent({ x: 0, y: 0 }, { x: 2, y: 0 })).toBe(false);
    expect(isAdjacent({ x: 2, y: 0 }, { x: 0, y: 0 })).toBe(false);
    expect(isAdjacent({ x: 0, y: 0 }, { x: 0, y: 2 })).toBe(false);
    expect(isAdjacent({ x: 0, y: 2 }, { x: 0, y: 0 })).toBe(false);

    expect(isAdjacent({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(false);
  });
});
