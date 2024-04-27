import PropTypes from "prop-types";
function CRMTable(props) {
  const tableHeader = [
    "Name",
    "Code",
    "Address",
    "City",
    "State",
    "ZipCode",
    "Phone",
    "Type - Customer ",
    "Representative",
    "CSR - Customer Service Representative",
    "Active",
    "Email",
    "Website",
    "Terms",
    "Source",
  ];
  return (
    <>
      <div
        className={`rounded-md border m-2 transition-all duration-[9s] ease-in-out flex-1`}
        style={
          props.extendSearch
            ? { height: "100%", transition: "height 5s ease" }
            : { height: "90%", transition: "height 5s ease" }
        }
      >
        <div className="w-full sticky top-0 bg-blue-800 text-white flex justify-between p-2 ">
          <h1>CRM Search</h1>
          <button>Reset Filters</button>
        </div>
        <div className="overflow-x-auto overflow-y-auto ">
          <table className=" w-full border max-w-[1000px]  ">
            <thead className="">
              <tr>
                {tableHeader.map((item) => {
                  return (
                    <>
                      <th className="p-2 min-w-[150px] text-left ">{item}</th>
                    </>
                  );
                })}
              </tr>
            </thead>
            <tbody className="">
              {Array(5)
                .fill("")
                .map((item, index) => {
                  return (
                    <>
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-100" : ""}
                      >
                        {tableHeader.map((item) => {
                          return (
                            <>
                              <td className=" min-w-[150px] p-2">{item}</td>
                            </>
                          );
                        })}
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CRMTable;
CRMTable.propTypes = {
  extendSearch: PropTypes.bool,
};
