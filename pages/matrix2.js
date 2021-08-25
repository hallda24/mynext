import { useState, useEffect } from "react";

export default function matrix1() {
  const [matrixA, setmatrixA] = useState(
    Array.from(
      { length: 3 },
      () => Array.from({ length: 3 }),
      () => null
    )
  );
  /* [
      [2, 3, 4],
      [3, 0, 5],
      [1, 3, 9],
    ] */
  const [matrixB, setmatrixB] = useState(
    Array.from(
      { length: 3 },
      () => Array.from({ length: 3 }),
      () => null
    )
  );
  /* [
      [3, 4, 1],
      [2, 2, 4],
      [3, 8, 6],
    ] */

  const handleChangeA = (row, column, event) => {
    let copy = [...matrixA];
    copy[row][column] = +event.target.value;
    setmatrixA(copy);
  };

  const handleChangeB = (row, column, event) => {
    let copy = [...matrixB];
    copy[row][column] = +event.target.value;
    setmatrixB(copy);
  };

  /* useEffect(() => {
    MatrixMuti();
  }, [matrixA, matrixB]); */

  function MatrixMuti(A = matrixA, B = matrixB) {
    return A.map((row, i) =>
      row.map((_, j) => A[i].reduce((sum, _, n) => sum + A[i][n] * B[n][j], 0))
    );
  }

  function MatrixMutiAbt(A = matrixA, B = matrixB) {
    var Bt = transpose(B);
    return transpose(
      A.map((row, i) =>
        row.map((_, j) =>
          A[i].reduce((sum, _, n) => sum + A[i][n] * Bt[n][j], 0)
        )
      )
    );
  }

  function MatrixMutiAtBt(A = matrixA, B = matrixB) {
    var At = transpose(A);
    var Bt = transpose(B);
    return A.map((row, i) =>
      row.map((_, j) =>
        A[i].reduce((sum, _, n) => sum + At[i][n] * Bt[n][j], 0)
      )
    );
  }

  function transpose(matrix) {
    return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
  }

  return (
    <>
      <div className="container mx-auto px-4 mt-5">
        <div className="flex justify-center">
          <div className="flex-4 mx-5 bg-gray-200 text-gray-500 rounded-lg shadow">
            <table className="table-auto text-center text-md">
              <thead>
                <tr className="text-3xl font-semibold tracking-wide text-center text-gray-900 uppercase border-b border-gray-600">
                  <th></th>
                  <th>A</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-xl">
                {matrixA.map((row, irow) => (
                  <tr key={irow} className="">
                    {row.map((column, icol) => (
                      <td key={icol} className="px-4 py-3 ">
                        <input
                          type="number"
                          onChange={(e) => handleChangeA(irow, icol, e)}
                          className="w-7 text-center"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex-4 mx-5 bg-gray-200 text-gray-500 rounded-lg shadow border-indigo-600 border-2">
            <table className="table-auto text-center text-md">
              <thead>
                <tr className="text-3xl font-semibold tracking-wide text-center text-gray-900 border-b border-gray-600">
                  <th></th>
                  <th>Bt</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-xl">
                {matrixB.map((row, irow) => (
                  <tr key={irow} className="">
                    {row.map((column, icol) => (
                      <td key={icol} className="px-4 py-3">
                        <input
                          type="number"
                          onChange={(e) => handleChangeB(irow, icol, e)}
                          className="w-7 text-center"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex-4 mx-5 bg-gray-200 text-gray-500 rounded-lg shadow border-indigo-600 border-2">
            <table className="table-auto text-center text-md">
              <thead>
                <tr className="text-3xl font-semibold tracking-wide text-center text-gray-900 border-b border-gray-600">
                  <th></th>
                  <th>ABt</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-xl">
                {MatrixMutiAbt().map((row, irow) => (
                  <tr key={irow} className="">
                    {row.map((col, icol) => (
                      <td key={icol} className="px-4 py-3">
                        {(col = col || 0)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex-4 mx-5 bg-gray-200 text-gray-500 rounded-lg shadow">
            <table className="table-auto text-center text-md">
              <thead>
                <tr className="text-3xl font-semibold tracking-wide text-center text-gray-900 border-b border-gray-600">
                  <th></th>
                  <th>At</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-xl">
                {matrixA.map((row, irow) => (
                  <tr key={irow} className="">
                    {row.map((column, icol) => (
                      <td key={icol} className="px-4 py-3 ">
                        <input
                          type="number"
                          onChange={(e) => handleChangeA(irow, icol, e)}
                          className="w-7 text-center"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex-4 mx-5 bg-gray-200 text-gray-500 rounded-lg shadow border-indigo-600 border-2">
            <table className="table-auto text-center text-md">
              <thead>
                <tr className="text-3xl font-semibold tracking-wide text-center text-gray-900 border-b border-gray-600">
                  <th></th>
                  <th>Bt</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-xl">
                {matrixB.map((row, irow) => (
                  <tr key={irow} className="">
                    {row.map((column, icol) => (
                      <td key={icol} className="px-4 py-3">
                        <input
                          type="number"
                          onChange={(e) => handleChangeB(irow, icol, e)}
                          className="w-7 text-center"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex-4 mx-5 bg-gray-200 text-gray-500 rounded-lg shadow border-indigo-600 border-2">
            <table className="table-auto text-center text-md">
              <thead>
                <tr className="text-3xl font-semibold tracking-wide text-center text-gray-900 border-b border-gray-600">
                  <th></th>
                  <th>AtBt</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-xl">
                {MatrixMutiAtBt().map((row, irow) => (
                  <tr key={irow} className="">
                    {row.map((col, icol) => (
                      <td key={icol} className="px-4 py-3">
                        {(col = col || 0)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex container justify-center mt-5">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-200 p-5">1</div>
          <div className="bg-gray-200 p-5">1</div>
          <div className="bg-gray-200 p-5">1</div>
          <div className="bg-gray-200 p-5">1</div>
          <div className="bg-gray-200 p-5">1</div>
          <div className="bg-gray-200 p-5">1</div>
          <div className="bg-gray-200 p-5">1</div>
          <div className="bg-gray-200 p-5">1</div>
          <div className="bg-gray-200 p-5">1</div>
        </div>
      </div>
    </>
  );
}
