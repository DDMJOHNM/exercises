// O(log(m * n)) - treat 2D matrix as flattened sorted array and binary search
export function is2DMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length, n = matrix[0]!.length;
  let r = 0, c = n - 1;

  while (r < m && c >= 0) {
      if (matrix[r]![c]! > target) {
          c--;
      } else if (matrix[r]![c]! < target) {
          r++;
      } else {
          return true;
      }
  }
  return false;
}