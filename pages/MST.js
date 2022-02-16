import { useState, useEffect } from "react";

export default function matrix1() {
  const [V, setV] = useState(5);

  const [item, setitem] = useState(
    //[...Array(capacity)].map((x) => Array(capacity).fill(0))
    [
      [0, 2, 0, 6, 0],
      [2, 0, 3, 8, 5],
      [0, 3, 0, 0, 7],
      [6, 8, 0, 0, 9],
      [0, 5, 7, 9, 0],
    ]
  );

  const handleChangeitem = (row, column, event) => {
    let copy = [...item];
    copy[row][column] = +event.target.value;
    setitem(copy);
  };

  // A utility function to find the vertex with
  // minimum key value, from the set of vertices
  // not yet included in MST
  function minKey(key, mstSet) {
    // Initialize min value
    let min = Number.MAX_VALUE,
      min_index;

    for (let v = 0; v < V; v++)
      if (mstSet[v] == false && key[v] < min) (min = key[v]), (min_index = v);

    return min_index;
  }

  function primMST(graph) {
    // Array to store constructed MST
    let parent = [];

    // Key values used to pick minimum weight edge in cut
    let key = [];

    // To represent set of vertices included in MST
    let mstSet = [];

    // Initialize all keys as INFINITE
    for (let i = 0; i < V; i++)
      (key[i] = Number.MAX_VALUE), (mstSet[i] = false);

    // Always include first 1st vertex in MST.
    // Make key 0 so that this vertex is picked as first vertex.
    key[0] = 0;
    parent[0] = -1; // First node is always root of MST

    // The MST will have V vertices
    for (let count = 0; count < V - 1; count++) {
      // Pick the minimum key vertex from the
      // set of vertices not yet included in MST
      let u = minKey(key, mstSet);

      // Add the picked vertex to the MST Set
      mstSet[u] = true;

      // Update key value and parent index of
      // the adjacent vertices of the picked vertex.
      // Consider only those vertices which are not
      // yet included in MST
      for (let v = 0; v < V; v++)
        // graph[u][v] is non zero only for adjacent vertices of m
        // mstSet[v] is false for vertices not yet included in MST
        // Update the key only if graph[u][v] is smaller than key[v]
        if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v])
          (parent[v] = u), (key[v] = graph[u][v]);
    }
    return parent;
  }

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
                                value={col}
                                type="number"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                onChange={(e) =>
                                  handleChangeitem(irow, icol, e)
                                }
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

          {/* <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th>V</th>
                      </tr>
                    </thead>
                    <tbody>
                      <input
                        type="number"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={handleChangeV}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 px-5">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-6">Edge</th>
                        <th className="py-3 px-6">Weight</th>
                      </tr>
                    </thead>
                    <tbody>
                      {primMST(item).map((row, irow) => (
                        <tr>
                          <td className="py-3 px-6">{row}</td>
                          <td className="py-3 px-6">
                            {item[irow][primMST(item)[irow]]}
                          </td>
                        </tr>
                      ))}
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
