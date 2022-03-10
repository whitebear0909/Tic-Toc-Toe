import { calculateWinner, isFullBoard } from "./services/function.service";

describe("test for global functions:", () => {
  it("test for calculateWinner() function", () => {
    expect(calculateWinner(['x', 'x', 'x', null, 'x', null, null, null, null, null, null, null, null, null, null, null ], 4)).toEqual('x');
  });

  it("test for isFullBoard() function", () => {
    expect(isFullBoard(['x', null, 'x', null, 'x', null, null, null, null, null, null, null ])).toEqual(false);
  });
});
