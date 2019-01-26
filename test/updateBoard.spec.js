import updateBoard from "../src/updateBoard";

describe("updateBoard", () => {
  it("correctly replaces values at given coordinates", () => {
    expect(updateBoard([
      ["a", "b", "c", "d"],
      ["b", "c", "d", "a"],
      ["c", "d", "a", "b"],
      ["d", "a", "b", "c"]
    ], [
      { x: 3, y: 0 }
    ], () => "Z")).toEqual([
      ["a", "b", "c", "Z"],
      ["b", "c", "d", "a"],
      ["c", "d", "a", "b"],
      ["d", "a", "b", "c"]
    ]);
  });

  it("correctly makes values from above cells go down to inject the new value from the top", () => {
    expect(updateBoard([
      ["a", "b", "c", "d"],
      ["b", "c", "d", "a"],
      ["c", "d", "a", "b"],
      ["d", "a", "b", "c"]
    ], [
      { x: 3, y: 2 }
    ], () => "Z")).toEqual([
      ["a", "b", "c", "Z"],
      ["b", "c", "d", "d"],
      ["c", "d", "a", "a"],
      ["d", "a", "b", "c"]
    ]);
  });

  it("works as intended when replacing multiple values", () => {
    expect(updateBoard([
      ["a", "b", "c", "d"],
      ["b", "c", "d", "a"],
      ["c", "d", "a", "b"],
      ["d", "a", "b", "c"]
    ], [
      { x: 3, y: 1 },
      { x: 3, y: 2 }
    ], () => "Z")).toEqual([
      ["a", "b", "c", "Z"],
      ["b", "c", "d", "Z"],
      ["c", "d", "a", "d"],
      ["d", "a", "b", "c"]
    ]);
  });
});
