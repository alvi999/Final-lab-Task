import axios from "axios";
import Link from "next/link";

export default async function GetProductDetails({
  params,
}: {
  params: { productID: string };
}) {
  try {
    const response = await axios.get(
      `http://localhost:5000/products/${params.productID}`
    );
    const data = response.data;

    return (
      <div className="flex justify-center">
        <div className="w-full sm:w-1/2 lg:w-2/4 p-4">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md">
            {/* <img
              className="rounded-t-lg w-full"
              src="https://via.assets.so/img.jpg?w=1280&h=800&tc=blue&bg=#cecece&t=Course Image"
              alt="Course Image"
            /> */}

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-gray-900">
                {data.title}
              </h5>

              <p className="mb-3 text-gray-700">{data.description}</p>
              <Link
                href={"/products/update/" + data.id}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-200"
              >
                <span>Edit Product</span>
                <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.293 13.293a1 1 0 001.414 1.414L11 6.414 9.586 5l-9 9zM18 5a1 1 0 00-1-1h-3.586a1 1 0 00-.707.293l-11 11a1 1 0 00-.084 1.32l2.38 4.763a1 1 0 001.321.424l4.764-2.381a1 1 0 00.423-1.321L13.585 14H17a1 1 0 001-1V5zm-1 2v4h-1.585l-7-7H17a1 1 0 011 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none focus:ring-offset-2 focus:ring-offset-red-200 ml-4"
              >
                <span>Delete Product</span>
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
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
}