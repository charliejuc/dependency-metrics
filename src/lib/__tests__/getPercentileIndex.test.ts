import { getPercentileIndex } from "../../utils";

describe("getPercentileIndex", () => {
  describe("with 10 values", () => {
    it("should return the correct index for 0.5 percentile", () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const percentile = 0.5;
      const index = getPercentileIndex(arr, percentile);
      expect(index).toBe(4);
    });

    it("should return the correct index for 0.7 percentile", () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const percentile = 0.7;
      const index = getPercentileIndex(arr, percentile);
      expect(index).toBe(6);
    });

    it("should return the correct index for 0.3 percentile", () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const percentile = 0.3;
      const index = getPercentileIndex(arr, percentile);
      expect(index).toBe(2);
    });

    it("should return the correct index for 1 percentile", () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const percentile = 1;
      const index = getPercentileIndex(arr, percentile);
      expect(index).toBe(9);
    });

    it("should return the correct index for 0 percentile", () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const percentile = 0;
      const index = getPercentileIndex(arr, percentile);
      expect(index).toBe(0);
    });
  });

  describe("with 5 values", () => {
    it("should return the correct index for 0.5 percentile", () => {
      const arr = [1, 2, 3, 4, 5];
      const percentile = 0.5;
      const index = getPercentileIndex(arr, percentile);
      expect(index).toBe(2);
    });

    it("should return the correct index for 0.7 percentile", () => {
      const arr = [1, 2, 3, 4, 5];
      const percentile = 0.7;
      const index = getPercentileIndex(arr, percentile);
      expect(index).toBe(2);
    });

    it("should return the correct index for 0.3 percentile", () => {
      const arr = [1, 2, 3, 4, 5];
      const percentile = 0.3;
      const index = getPercentileIndex(arr, percentile);
      expect(index).toBe(1);
    });

    it("should return the correct index for 1 percentile", () => {
      const arr = [1, 2, 3, 4, 5];
      const percentile = 1;
      const index = getPercentileIndex(arr, percentile);
      expect(index).toBe(4);
    });

    it("should return the correct index for 0 percentile", () => {
      const arr = [1, 2, 3, 4, 5];
      const percentile = 0;
      const index = getPercentileIndex(arr, percentile);
      expect(index).toBe(0);
    });
  });
});
