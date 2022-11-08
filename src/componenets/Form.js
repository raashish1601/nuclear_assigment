import "./form.css";
export default function Form() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white grid place-items-center h-screen ">
      <form
        className=" w-full max-w-lg border-solid border-2 border-inherit-600 ... rounded"
        style={{ padding: "10px" }}
        onSubmit={submitHandler}
      >
        <div className="text-7xl">
          <strong className="my-5">Basic info</strong>
        </div>
        <hr />
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First name
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
              id="grid-first-name"
              type="text"
              placeholder="Enter client's first name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
              id="grid-last-name"
              type="text"
              placeholder="Enter client's last name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-mobile-no"
            >
              Mobile number
            </label>
            <input
              name="phone"
              className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
              id="grid-mobile-no phone"
              type="text"
              placeholder="Enter client's mobile no"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email address
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
              id="grid-email"
              type="email"
              placeholder="Enter client's email address"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-gender"
            >
              Gender
            </label>
            <div className="relative">
              <select
                class="block appearance-none w-full  border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                id="grid-state"
              >
                <option>Select an option</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-dob"
            >
              Date of birth
            </label>
            <input
              type="date"
              name="begin"
              placeholder="Day and month"
              min="1997-01-01"
              className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-dob"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-year"
            >
              Year
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-year"
              type="email"
              placeholder="Year"
            />
          </div>
        </div>
        <div className=" flex space-x-2 justify-center"></div>
        <button
          type="submit"
          style={{ padding: "5px", fontSize: "15px" }}
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
