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

  it("correctly finds a line of 4", () => {
    expect(findCombination([
      ["b", "c", "d", "a"],
      ["a", "a", "a", "a"],
      ["c", "d", "a", "b"],
      ["d", "a", "b", "c"]
    ])).toEqual([
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 }
    ]);

    expect(findCombination([
      ["a", "b", "c", "d"],
      ["b", "a", "c", "a"],
      ["c", "d", "c", "b"],
      ["d", "a", "c", "d"]
    ])).toEqual([
      { x: 2, y: 0 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 2, y: 3 }
    ]);
  });

  it("correctly finds a line of 5", () => {
    expect(findCombination([
      ["b", "c", "d", "a", "e"],
      ["a", "a", "a", "a", "a"],
      ["c", "d", "a", "b", "e"],
      ["e", "a", "b", "c", "d"],
      ["d", "a", "b", "c", "e"]
    ])).toEqual([
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 4, y: 1 }
    ]);

    expect(findCombination([
      ["a", "b", "c", "d", "e"],
      ["b", "a", "c", "e", "b"],
      ["c", "d", "c", "b", "d"],
      ["e", "a", "c", "d", "b"],
      ["d", "a", "c", "e", "d"]
    ])).toEqual([
      { x: 2, y: 0 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 2, y: 3 },
      { x: 2, y: 4 }
    ]);

    expect(findCombination([
      ["a", "b", "c", "d", "e", "f", "g", "h"],
      ["b", "c", "d", "e", "f", "g", "h", "a"],
      ["c", "d", "c", "f", "g", "h", "a", "b"],
      ["d", "e", "c", "g", "h", "a", "b", "c"],
      ["e", "f", "c", "h", "a", "b", "c", "d"],
      ["f", "g", "c", "a", "b", "c", "d", "e"],
      ["g", "h", "c", "b", "c", "d", "e", "f"],
      ["h", "a", "b", "c", "d", "e", "f", "g"]
    ])).toEqual([
      { x: 2, y: 2 },
      { x: 2, y: 3 },
      { x: 2, y: 4 },
      { x: 2, y: 5 },
      { x: 2, y: 6 }
    ]);
  });

  it("correctly finds an L", () => {
    expect(findCombination([
      ["b", "c", "d", "b"],
      ["d", "a", "a", "a"],
      ["c", "a", "c", "b"],
      ["d", "a", "b", "c"]
    ])).toEqual([
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 }
    ]);

    expect(findCombination([
      ["b", "c", "d", "b"],
      ["c", "a", "c", "b"],
      ["d", "a", "b", "c"]
      ["c", "a", "a", "a"],
    ])).toEqual([
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 },
      { x: 2, y: 3 },
      { x: 3, y: 3 }
    ]);

    expect(findCombination([
      ["b", "c", "d", "b"],
      ["d", "a", "a", "a"],
      ["c", "b", "c", "a"],
      ["d", "c", "b", "a"]
    ])).toEqual([
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 3, y: 2 },
      { x: 3, y: 3 }
    ]);

    expect(findCombination([
      ["b", "c", "d", "b"],
      ["c", "b", "c", "a"],
      ["d", "c", "b", "a"]
      ["c", "a", "a", "a"],
    ])).toEqual([
      { x: 1, y: 3 },
      { x: 1, y: 3 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 }
    ]);
  })
});
