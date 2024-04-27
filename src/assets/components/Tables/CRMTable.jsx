import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function CRMTable(props) {
  return (
    <>
      <div
        className={`rounded-md border m-2 transition-all duration-[9s] ease-in-out flex-1`}
      >
        <div className="w-full sticky top-0 bg-blue-800 text-white flex justify-between p-2 ">
          <h1>CRM Search</h1>
          <button>Reset Filters</button>
        </div>
        <div className="overflow-x-auto overflow-y-auto ">
          <table className=" min-w-[98.8vw] w-full border max-w-[1000px]  ">
            <thead className="">
              <tr>
                {props.columns.map((item) => {
                  return (
                    <>
                      <th className="p-2 min-w-[150px] text-left ">{item}</th>
                    </>
                  );
                })}
              </tr>
              <tr className="bg-gray-100 ">
                {props.columns.map(() => {
                  return (
                    <>
                      <td className=" min-w-[150px] p-2 ">
                        <div className="flex gap-1 items-center">
                          {" "}
                          <select className="py-1 px-2 bg-white rounded-md outline-none">
                            <option value="contains">Contains</option>
                            <option value="contains">Contains</option>
                            <option value="contains">Contains</option>
                            <option value="contains">Contains</option>
                          </select>
                          <FontAwesomeIcon icon={faFilter} />
                        </div>
                      </td>
                    </>
                  );
                })}
              </tr>
            </thead>
            <tbody className="">
              {props.rows.map((item, index) => {
                return (
                  <>
                    <tr
                      key={index}
                      className={index % 2 !== 0 ? "bg-gray-100" : ""}
                    >
                      {props.columns.map((item) => {
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
  columns: PropTypes.array,
  rows: PropTypes.array,
};
