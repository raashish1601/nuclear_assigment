import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="topbar">
        <p>
          <h1>Dashboard</h1>
        </p>
        <p>Home / Dashboard</p>
      </div>
      <div className="category-box">
        <ul>
          <li className="listitem">
            <div className="cat-header">EARNINGS (MONTHLY)</div>
            <div className="cat-digit">
              $40,000
              <svg
                className="image"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
              </svg>
            </div>
            <div className="cat-change gain">
              3.48%
              <span>Since last month</span>
            </div>
          </li>
          <li className="listitem">
            <div className="cat-header">SALES</div>
            <div className="cat-digit">
              650
              <svg
                className="image"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
              </svg>
            </div>
            <div className="cat-change gain">
              12%
              <span>Since last years</span>
            </div>
          </li>
          <li className="listitem">
            <div className="cat-header">NEW USER</div>
            <div className="cat-digit">
              366
              <svg
                className="image"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
              </svg>
            </div>
            <div className="cat-change gain">
              20.4%
              <span>Since last month</span>
            </div>
          </li>
          <li className="listitem">
            <div className="cat-header">PENDING REQUESTS</div>
            <div className="cat-digit">
              18
              <svg
                className="image"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" />
              </svg>
            </div>
            <div className="cat-change loss">
              1.10%
              <span>Since yesterday</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="products-sold">
        <div className="heading">
          <p className="main-head text-purple-600">Products Sold</p>
          <p className="month">
            <select
              className="bg-purple-600"
              style={{ color: "white", borderRadius: "3px", padding: "4px" }}
            >
              <option>Month</option>
            </select>
          </p>
        </div>
        <div className="contents">
          <ul>
            <li>
              <div className="content-heading">
                <p>Oblong T-Shirt</p>
                <p className="subtext">600 of 800 items</p>
              </div>
              <div className="bar percent-80"></div>
            </li>
            <li>
              <div className="content-heading">
                <p>Gundam 90'Editions</p>
                <p className="subtext">500 of 800 items</p>
              </div>
              <div className="bar percent-75"></div>
            </li>
            <li>
              <div className="content-heading">
                <p>Rounded Hat</p>
                <p className="subtext">455 of 800 items</p>
              </div>
              <div className="bar percent-60"></div>
            </li>
            <li>
              <div className="content-heading">
                <p>Indomie Gorang</p>
                <p className="subtext">400 of 800 items</p>
              </div>
              <div className="bar percent-50"></div>
            </li>
            <li>
              <div className="content-heading">
                <p>Remote control car racing</p>
                <p className="subtext">200 of 800 items</p>
              </div>
              <div className="bar percent-25"></div>
            </li>
          </ul>
          <span className="ending" style={{ color: "blue" }}>
            View More
          </span>
        </div>
      </div>
      <aside>
        <div className="invoice">
          <div className="top-headers">
            <p className="font-semibold" style={{ color: "blue" }}>
              Invoice
            </p>
            <p>
              <span
                className="bg-red-600 overflow-hidden"
                style={{ padding: "3px", color: "white" }}
              >
                View More
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-300 border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Order ID
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Customer
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Item
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <span style={{ color: "blue" }}>RA0449</span>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Udin Wayang
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Nasi Padang
                      </td>
                      <td className=" text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <span
                          className="bg-green-400"
                          style={{
                            color: "white",
                            borderRadius: "3px",
                            padding: "2px"
                          }}
                        >
                          Delivered
                        </span>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <span
                          className="bg-purple-600"
                          style={{
                            color: "white",
                            borderRadius: "3px",
                            padding: "6px"
                          }}
                        >
                          Detail
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <span style={{ color: "blue" }}>RA5324</span>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Jaenab Bajigur
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Gundam 90' Edition
                      </td>
                      <td className=" text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <span
                          className="bg-orange-400"
                          style={{
                            color: "white",
                            borderRadius: "3px",
                            padding: "2px"
                          }}
                        >
                          Shipping
                        </span>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <span
                          className="bg-purple-600"
                          style={{
                            color: "white",
                            borderRadius: "3px",
                            padding: "6px"
                          }}
                        >
                          Detail
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <span style={{ color: "blue" }}>RA0449</span>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Rivat Mahesa
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Oblong T-Shirt
                      </td>
                      <td className=" text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <span
                          className="bg-red-400"
                          style={{
                            color: "white",
                            borderRadius: "3px",
                            padding: "2px"
                          }}
                        >
                          Pending
                        </span>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <span
                          className="bg-purple-600"
                          style={{
                            color: "white",
                            borderRadius: "3px",
                            padding: "6px"
                          }}
                        >
                          Detail
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <span style={{ color: "blue" }}>RA1453</span>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Indri Junanda
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Hat rounded
                      </td>
                      <td className=" text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <span
                          className="bg-blue-400"
                          style={{
                            color: "white",
                            borderRadius: "3px",
                            padding: "2px"
                          }}
                        >
                          Processing
                        </span>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <span
                          className="bg-purple-600"
                          style={{
                            color: "white",
                            borderRadius: "3px",
                            padding: "6px"
                          }}
                        >
                          Detail
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
