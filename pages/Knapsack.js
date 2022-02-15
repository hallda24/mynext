import { useState, useEffect } from "react";

export default function matrix1() {
  const [PandWarray, setPandWarray] = useState(
    [...Array(2)].map((x) => Array(4).fill(0))
    // [
    //   [2, 3, 4, 1],
    //   [3, 0, 9, 2],
    //   [1, 3, 2, 3],
    //   [1, 2, 3, 4],
    // ]
  );

  const handleChangeA = (row, column, event) => {
    let copy = [...PandWarray];
    copy[row][column] = +event.target.value;
    setPandWarray(copy);
    console.table(PandWarray);
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-5">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      {PandWarray.map((row, irow) => (
                        <>
                          {row.map((col, icol) =>
                            irow == 0 ? (
                              <th
                                scope="col"
                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                              >
                                {icol}
                              </th>
                            ) : null
                          )}
                        </>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PandWarray.map((row, irow) => (
                      <tr className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700">
                        {row.map((_, icol) => (
                          <td
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700"
                          >
                            <input
                              type="number"
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              onChange={(e) => handleChangeA(irow, icol, e)}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
