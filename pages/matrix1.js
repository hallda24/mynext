import react, { useState } from "react";

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
      () => null
    )
  );

  console.log(matrixA);

  const handleChange = (row, column, event) => {
    let copy = [...matrixA];
    copy[row][column] = +event.target.value;
    setmatrixA(copy);
  };

  const matrixMuti = (a, b) => {
    return a.map((_, i) =>
      b[0].map((_, j) => a[i].reduce((sum, _, k) => sum + a[i][k] + b[k][j]))
    );
  };

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
                          onChange={(e) => handleChange(irow, icol, e)}
                          className="w-7"
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
                <tr>
                  <td className="px-4 py-3 ">1</td>
                  <td className="px-4 py-3 ">-1</td>
                  <td className="px-4 py-3 ">3</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 ">2</td>
                  <td className="px-4 py-3 ">0</td>
                  <td className="px-4 py-3 ">1</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 ">0</td>
                  <td className="px-4 py-3 ">2</td>
                  <td className="px-4 py-3">-5</td>
                </tr>
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
                matrix1(matrixA, matrixB)
                <tr>
                  <td className="px-4 py-3 ">{matrixA}</td>
                  <td className="px-4 py-3 ">-1</td>
                  <td className="px-4 py-3 ">3</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 ">2</td>
                  <td className="px-4 py-3 ">0</td>
                  <td className="px-4 py-3 ">1</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 ">0</td>
                  <td className="px-4 py-3 ">2</td>
                  <td className="px-4 py-3">-5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
