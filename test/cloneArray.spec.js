import cloneArray from "../src/cloneArray";

describe("cloneArray", () => {
  it("correctly creates of copy of an array", () => {
    const array = ["a", "b", "c"];
    const clone = cloneArray(array);

    expect(clone).toEqual(["a", "b", "c"]);
    expect(array === clone).toBeFalsy();
  });

  it("correctly handles multidimensional arrays by cloning deeply", () => {
    const array = [["a"], [["b"]], "c"];
    const clone = cloneArray(array);

    expect(clone).toEqual([["a"], [["b"]], "c"]);
    expect(array[0] === clone[0]).toBeFalsy();
    expect(array[1] === clone[1]).toBeFalsy();
    expect(array[1][0] === clone[1][0]).toBeFalsy();
  });
});
