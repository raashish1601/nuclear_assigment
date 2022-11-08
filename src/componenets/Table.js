import { useState, useEffect } from "react";
import axios from "axios";
import "./table.css";

export default function Table() {
  const [posts, setPosts] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
      .then((res) => setPosts(res.data));
    // console.log(posts);
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handler = (e) => {
    // console.log(e.target.id);
    if (e.target.id === "next") {
      if (currentPage <= totalPages - 1) {
        setCurrentPage(currentPage + 1);
      }
    } else if (e.target.id === "prev") {
      if (currentPage >= 2) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <div className="align">
      <div className="table-container">
        <div className="data" style={{ color: "blue" }}>
          DataTables
        </div>
        <div className="grid place-items-center h-screen main-container">
          <div className="flex flex-col ">
            <span>
              <div className="flex flex-row justify-between">
                <div>
                  <span style={{ marginRight: "3px" }}>Show</span>
                  <select
                    className="cursor-pointer border-2 rounded-md border-gray-800"
                    onChange={(e) => {
                      setPostsPerPage(e.target.value);
                    }}
                  >
                    <option value="10">10</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                  </select>
                  <span style={{ marginLeft: "3px" }}>entries</span>
                </div>
                <label>
                  Search:&nbsp;
                  <input className=" border-solid border-2 border-gray-800 rounded"></input>
                </label>
              </div>
            </span>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-[200vw]">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 w-full">
                <div className="overflow-hidden">
                  <table className="min-w-full ">
                    <thead className="bg-gray-300 border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left -pr-70 "
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left pr-20"
                        >
                          Position
                        </th>
                        <th
                          scope="col"
                          className="pr-10 text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Office
                        </th>

                        <th
                          scope="col"
                          className="pr-20 text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Age
                        </th>
                        <th
                          scope="col"
                          className="pr-20 text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Start date
                        </th>
                        <th
                          scope="col"
                          className="pr-10 text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Salary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentPosts.map((post) => {
                        return (
                          <tr
                            className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                            key={post.id}
                          >
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {post.name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {post.role}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              Tokyo
                            </td>

                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {Math.floor(Math.random() * 10)}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              2012/11/28
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              ${Math.floor(Math.random() * 10000)}
                            </td>
                          </tr>
                        );
                      })}
                      <div className="footer">
                        <span className="cursor-pointer">
                          <span id="prev" onClick={handler}>
                            Previous
                          </span>
                          {pages.map((page) => {
                            return (
                              <span
                                id="page"
                                className={`${
                                  page === currentPage ? "active" : "non-active"
                                } `}
                                key={page}
                                onClick={() => setCurrentPage(page)}
                              >{`${page}  `}</span>
                            );
                          })}
                          <span id="next" onClick={handler}>
                            Next
                          </span>
                        </span>
                      </div>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
