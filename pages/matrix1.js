import { useState, useEffect } from "react";

export default function matrix1() {
  const [matrixA, setmatrixA] = useState(
    Array.from(
      { length: 3 },
      () => Array.from({ length: 3 }),
      () => null
    )
  );
  const [matrixB, setmatrixB] = useState(
    Array.from(
      { length: 3 },
      () => Array.from({ length: 3 }),
      () => 1
    )
  );

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

  useEffect(() => {
    MatrixMuti();
  }, [matrixA, matrixB]);

  function MatrixMuti(A = matrixA, B = matrixB) {
    return A.map((row, i) =>
      row.map((_, j) => A[i].reduce((sum, _, n) => sum + A[i][n] * B[n][j], 0))
    );
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
                <tr className="text-3xl font-semibold tracking-wide text-center text-gray-900 uppercase border-b border-gray-600">
                  <th></th>
                  <th>B</th>
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
                <tr className="text-3xl font-semibold tracking-wide text-center text-gray-900 uppercase border-b border-gray-600">
                  <th></th>
                  <th>AB</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-xl">
                {MatrixMuti().map((row, irow) => (
                  <tr key={irow} className="">
                    {row.map((col, icol) => (
                      <td key={icol} className="px-4 py-3">
                        {col}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
