import axios from "axios";
import Link from "next/link";

export default async function Products() {
  try {
    const response = await axios.get("http://localhost:5000/products/");
    const data = response.data;

    return (
      <div className="flex flex-wrap justify-center">
        {data.map((product: any) => (
          <div
            key={product.id}
            className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-4"
          >
            <div className="bg-white border border-gray-200 rounded-lg shadow-md">
              {/* <Link href={"/products/" + product.id}>
                <img
                  className="rounded-t-lg w-full"
                  src="https://via.assets.so/img.jpg?w=1280&h=800&tc=blue&bg=#cecece&t=Course Image"
                  alt="Course Image"
                />
              </Link> */}
              <div className="p-5">
                <Link href={"/products/" + product.id}>
                  <h5 className="mb-2 text-2xl font-bold text-gray-900">
                    {product.title}
                  </h5>
                </Link>
                <p className="mb-3 text-gray-700">{product.description}</p>
                <Link
                  href={"/products/" + product.id}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-200"
                >
                  <span>Read more</span>
                  <svg
                    className="w-4 h-4 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3a1 1 0 011-1h6a1 1 0 011 1v1h3a1 1 0 011 1v1a3 3 0 01-3 3H5a3 3 0 01-3-3V5a1 1 0 011-1h3V3zm-1 6a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V9zm5 4a1 1 0 112 0v2a1 1 0 11-2 0v-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
}