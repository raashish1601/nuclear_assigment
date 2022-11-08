import { FaTable, FaUser, FaWpforms, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div
      className="navbar-container w-60 h-full shadow-md bg-white absolute"
      id="sidenavSecExample"
    >
      <div className="pt-4 pb-2 px-6">
        <Link href="/">
          <div className="flex items-center">
            <div className="shrink-0">
              <span>
                <FaUser />
                Dashboard
              </span>
            </div>
            <div className="grow ml-3"></div>
          </div>
        </Link>
      </div>

      <ul className="relative px-1">
        <li className="relative">
          <div
            style={{
              marginTop: "20px",
              marginLeft: "25px",
              fontSize: "12px",
              color: "gray"
            }}
          >
            FEATURES
          </div>
          <Link
            to="/"
            className="styling flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <FaUser />
            <span style={{ marginLeft: "5px" }}>Dashboard</span>
            <FaChevronRight style={{ marginLeft: "7px" }} />
          </Link>
        </li>
        <li className="relative" id="sidenavSecEx2">
          <Link
            to="/table"
            className="styling flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <FaTable />
            <span style={{ marginLeft: "5px" }}>Table</span>
            <FaChevronRight style={{ marginLeft: "7px" }} />
          </Link>
        </li>
        <li className="relative" id="sidenavSecEx3">
          <Link
            to="/form"
            className="styling flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <FaWpforms />
            <span style={{ marginLeft: "5px" }}>Form</span>
            <FaChevronRight style={{ marginLeft: "7px" }} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
