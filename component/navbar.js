import Link from "next/link";

function Nav() {
  return (
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href="/">
        <button className="mr-5 btn-indigo">Home</button>
      </Link>
      <Link href="/about">
        <button className="mr-5 hover:text-gray-900 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
          About
        </button>
      </Link>
      <Link href="/matrix1">
        <button className="mr-5 hover:text-gray-900 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
          Matrix1
        </button>
      </Link>
      <Link href="/matrix2">
        <button className="mr-5 hover:text-gray-900 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
          Matrix2
        </button>
      </Link>
      <Link href="/matrixdet">
        <button className="mr-5 hover:text-gray-900 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
          Matrixdet
        </button>
      </Link>
      <Link href="/matrixinverse">
        <button className="mr-5 hover:text-gray-900 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
          MatrixInverse
        </button>
      </Link>
      <Link href="/Knapsack">
        <button className="mr-5 hover:text-gray-900 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
          knapsack
        </button>
      </Link>
      <Link href="/MST">
        <button className="mr-5 hover:text-gray-900 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
          MST
        </button>
      </Link>
      <Link href="/GaussElimia">
        <button className="mr-5 hover:text-gray-900 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
          GaussElimia
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
