import findCombination from "../src/findCombination";

describe("findCombination", () => {
  it("returns an empty array for a board with no combination", () => {
    expect(findCombination([
      ["a", "b", "c", "d"],
      ["b", "c", "d", "a"],
      ["c", "d", "a", "b"],
      ["d", "a", "b", "c"]
    ])).toEqual([]);
  });

  it("correctly finds an horizontal line of 3", () => {
    expect(findCombination([
      ["a", "a", "a", "d"],
      ["b", "c", "d", "a"],
      ["c", "d", "a", "b"],
      ["d", "a", "b", "c"]
    ])).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 }
    ]);

    expect(findCombination([
      ["b", "c", "d", "a"],
      ["d", "a", "a", "a"],
      ["c", "d", "a", "b"],
      ["d", "a", "b", "c"]
    ])).toEqual([
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 }
    ]);

    expect(findCombination([
      ["b", "c", "d", "a"],
      ["c", "d", "a", "b"],
      ["d", "a", "b", "c"],
      ["a", "a", "a", "d"]
    ])).toEqual([
      { x: 0, y: 3 },
      { x: 1, y: 3 },
      { x: 2, y: 3 }
    ]);
  });

  it("correctly finds an vertical line of 3", () => {
    expect(findCombination([
      ["a", "b", "c", "d"],
      ["b", "c", "d", "a"],
      ["b", "d", "a", "b"],
      ["b", "a", "b", "c"]
    ])).toEqual([
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 }
    ]);

    expect(findCombination([
      ["a", "b", "c", "d"],
      ["b", "b", "d", "a"],
      ["c", "b", "a", "b"],
      ["d", "c", "b", "c"]
    ])).toEqual([
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 }
    ]);

    expect(findCombination([
      ["a", "b", "c", "d"],
      ["b", "c", "d", "a"],
      ["c", "d", "a", "a"],
      ["d", "a", "b", "a"]
    ])).toEqual([
      { x: 3, y: 1 },
      { x: 3, y: 2 },
      { x: 3, y: 3 }
    ]);
  });
});
