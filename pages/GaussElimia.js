import { useState } from "react";

export default function gaussElimia() {
  const [size, setsize] = useState(3);

  const [matrixA, setmatrixA] = useState(
    /* [
      [2, 3, 4, 3, 2],
      [4, 1, 2, 2, 4],
      [3, 2, 5, 3, 6],
      [6, 3, 4, 1, 7],
      [4, 1, 2, 1, 8],
    ] */
    [...Array(size)].map((x) => Array(size).fill(0))
  );

  const [matrixX, setmatrixX] = useState(
    /*  [37, 17, 34, 42, 21] */
    [...Array(size)].fill(0)
  );

  const [result, setresult] = useState([]);

  const handleChangeSize = (event) => {
    setsize(event.target.value);
  };

  const handleChangeA = (row, column, event) => {
    let copy = [...matrixA];
    copy[row][column] = +event.target.value;
    setmatrixA(copy);
  };

  const handleChangeX = (column, event) => {
    let copy = [...matrixX];
    copy[column] = +event.target.value;
    setmatrixX(copy);
  };

  function gauss(matrix, x) {
    let A = [...matrix];
    var i, k, j;

    // Just make a single matrix
    for (i = 0; i < A.length; i++) {
      A[i].push(x[i]);
    }

    var n = A.length;

    for (i = 0; i < n; i++) {
      // Make all rows below this one 0 in current column
      for (k = i + 1; k < n; k++) {
        var c = -A[k][i] / A[i][i];
        for (j = i; j < n + 1; j++) {
          if (i === j) {
            A[k][j] = 0;
          } else {
            A[k][j] += c * A[i][j];
          }
        }
      }
      console.log(A);
    }

    // Solve equation Ax=b for an upper triangular matrix A
    x = [...Array(n)];
    for (i = n - 1; i > -1; i--) {
      x[i] = A[i][n] / A[i][i];
      for (k = i - 1; k > -1; k--) {
        A[k][n] -= A[k][i] * x[i];
      }
    }

    setresult(x);
    setmatrixA([...Array(size)].map((x) => Array(size).fill(0)));
    setmatrixX([...Array(size)].fill(0));
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
                  <th>Size</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-xl">
                <tr></tr>
                <tr>
                  <td>{size}</td>
                  <td>
                    <input
                      type="number"
                      onChange={handleChangeSize}
                      className="w-12 text-center"
                    />
                  </td>
                  <td></td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
          </div>
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
                          className="w-10 text-center"
                        />
                        x{icol + 1}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex-4 mx-5 bg-gray-200 text-gray-500 rounded-lg shadow">
            <table className="table-auto text-center text-md">
              <thead>
                <tr className="text-3xl font-semibold tracking-wide text-center text-gray-900 uppercase border-b border-gray-600">
                  <th>X</th>
                </tr>
              </thead>
              <tbody className="text-xl">
                {matrixX.map((column, icol) => (
                  <tr key={icol} className="">
                    <td className="px-4 py-3 ">
                      =
                      <input
                        type="number"
                        onChange={(e) => handleChangeX(icol, e)}
                        className="w-12 text-center"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex-4 mx-5 bg-gray-200 text-gray-500 rounded-lg shadow">
            <table className="table-auto text-center text-md">
              <thead>
                <tr className="text-3xl font-semibold tracking-wide text-center text-gray-900 uppercase border-b border-gray-600">
                  <th>A</th>
                </tr>
              </thead>
              <tbody className="text-xl justify-center">
                <button
                  onClick={() => gauss(matrixA, matrixX)}
                  className="mr-5 hover:text-gray-900 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                >
                  Calculate
                </button>
                {result.map((column, icol) => (
                  <tr>
                    <td key={icol} className="px-4 py-3">
                      {column}
                    </td>
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
