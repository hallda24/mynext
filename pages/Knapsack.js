import { useState, useEffect } from "react";

export default function matrix1() {
  const [capacity, setcapacity] = useState(45);

  const [item, setitem] = useState(
    //[...Array(2)].map((x) => Array(capacity).fill(0))
    [
      [26, 31, 51, 19, 20],
      [8, 13, 12, 15, 20],
    ]
  );

  const handleChangeitem = (row, column, event) => {
    let copy = [...item];
    copy[row][column] = +event.target.value;
    setitem(copy);
  };

  const handleChangeCapacity = (e) => {
    setcapacity(+e.target.value);
  };

  const pw = (item, capacity) => {
    let newArr = [...Array(3)].map((x) => Array(item[0].length).fill(0));
    item[0].map((col, icol) => {
      newArr[0][icol] = item[0][icol];
      newArr[1][icol] = item[1][icol];
      newArr[2][icol] = item[0][icol] / item[1][icol];
    });

    var r,
      result = 0;
    while (capacity > 0) {
      if (item[1][r] < capacity) {
        result += item[0][r];
        capacity = capacity - item[1][r];
      } else {
        let valuse = capacity * item[0][r];
        let weight = item[1][r];
        let p_w = valuse / weight;
        result = result + p_w;
        capacity = 0;
      }
      r++;
    }
    return newArr;
  };

  const knapSack = (values, weights, n, target) => {
    if (target < 0) {
      return Number.MIN_SAFE_INTEGER;
    }

    if (n < 0 || target === 0) {
      return 0;
    }

    let include =
      values[n] + knapSack(values, weights, n - 1, target - weights[n]);

    let exclude = knapSack(values, weights, n - 1, target);

    return Math.max(include, exclude);
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-5">
        <div className="flex">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        {item.map((row, irow) => (
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
                      {item.map((row, irow) => (
                        <tr className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700">
                          {row.map((col, icol) => (
                            <td
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700"
                            >
                              <input
                                type="number"
                                value={col}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                onChange={(e) =>
                                  handleChangeitem(irow, icol, e)
                                }
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                      <tr className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700">
                        {pw(item, capacity)[2].map((row, irow) => (
                          <td className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 text-center">
                            {row}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th>capacity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="number"
                            value={capacity}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            onChange={handleChangeCapacity}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-md p-2">
                          {knapSack(
                            item[0],
                            item[1],
                            item[0].length - 1,
                            capacity
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
