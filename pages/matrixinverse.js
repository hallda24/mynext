import { useState, useEffect } from "react";

export default function matrix1() {
  const [matrixA, setmatrixA] = useState(
    [...Array(4)].map((x) => Array(4).fill(0))
    // [
    //   [2, 3, 4, 1],
    //   [3, 0, 9, 2],
    //   [1, 3, 2, 3],
    //   [1, 2, 3, 4],
    // ]
  );
  const [matrixInverse, setmatrixInverse] = useState(
    [...Array(4)].map((x) => Array(4).fill(0))
  );
  const handleChangeA = (row, column, event) => {
    let copy = [...matrixA];
    copy[row][column] = +event.target.value;
    setmatrixA(copy);
  };

  function det(M) {
    if (M.length == 2) {
      return M[0][0] * M[1][1] - M[0][1] * M[1][0];
    }
    var answer = 0;
    for (var i = 0; i < M.length; i++) {
      answer += Math.pow(-1, i) * M[0][i] * det(deleteRowAndColumn(M, 0, i));
    }
    return answer;
  }

  function deleteRowAndColumn(M, row, col) {
    var temp = [];
    for (var i = 0; i < M.length; i++) {
      temp.push(M[i].slice(0));
    }
    temp.splice(row, 1);
    for (var i = 0; i < temp.length; i++) {
      temp[i].splice(col, 1);
    }
    return temp;
  }

  function transpose(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < i; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
  }

  function Inverse(M = matrixA) {
    var arr = [...Array(M.length)].map((x) => Array(M[0].length).fill(0));
    let detAll = det(M);
    for (let i = 0; i < M.length; i++) {
      for (let j = 0; j < M[0].length; j++) {
        arr[i][j] = det(deleteRowAndColumn(M, i, j));
      }
    }
    transpose(arr);
    for (let i = 0; i < M.length; i++) {
      for (let j = 0; j < M[0].length; j++) {
        arr[i][j] = arr[i][j] / detAll;
      }
    }
    return arr;
  }

  return (
    <>
      <div className="container mx-auto px-4 mt-5">
        <div className="flex justify-center">
          <div className="flex-4 mx-5 bg-gray-200 text-gray-500 rounded-lg shadow">
            <table className="table-auto text-center text-md">
              <thead>
                <tr className="text-3xl font-semibold tracking-wide text-center text-gray-900 uppercase border-b border-gray-600">
                  <th>A</th>
                  <th></th>
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
                  <th>Inverse A</th>
                </tr>
              </thead>
              <tbody className="text-xl">
                {Inverse().map((row, irow) => (
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
    </>
  );
}
