import { useState, useEffect } from "react";

export default function matrix1() {
  const [matrixA, setmatrixA] = useState(
    Array.from(
      { length: 3 },
      () => Array.from({ length: 3 }),
      () => null
    )
    /* [
      [2, 3, 4, 2],
      [3, 0, 1, 3],
      [1, 3, 9, 0],
      [9, 4, 0, 5],
    ] */
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
      answer += Math.pow(-1, i) * M[0][i] * det(deleteRowAndColumn(M, i));
    }
    return answer;
  }

  function deleteRowAndColumn(M, index) {
    var temp = [];
    for (var i = 1; i < M.length; i++) {
      temp.push(M[i].slice(0));
    }
    for (var i = 0; i < temp.length; i++) {
      temp[i].splice(index, 1);
    }
    return temp;
  }

  /* function det(m) {
    var size = Math.sqrt(m.length);

    if (size % 1 !== 0) {
      return null;
    }
    if (size === 2) {
      return m[0] * m[3] - m[1] * m[2];
    }
    return m.slice(0, size).reduce(function (t, v, i) {
      var sub = [];
      console.log("size", size);
      for (var r = size; r < m.length; r += size) {
        sub = sub.concat(m.slice(r, r + i), m.slice(r + i + 1, r + size));
        console.log(r, i);
        console.log(m.slice(r, r + i));
        console.log(m.slice(r + i + 1, r + size));
        console.log(sub, "Sub");
      }
      return t + (i % 2 === 0 ? -1 : 1) * v * det(sub);
    }, 0);
  } */

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
                  <th>Det A</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-center align-center">
                <tr>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3">{det(matrixA)}</td>
                  <td className="px-4 py-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
