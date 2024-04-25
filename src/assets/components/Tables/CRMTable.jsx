function CRMTable() {
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
      <div className="rounded-md border m-2">
        <div className="w-full bg-blue-400 text-white flex justify-between p-2 ">
          <h1>CRM Search</h1>
          <button>Reset Filters</button>
        </div>
        <table className=" w-full border ">
          <thead>
            <tr>
              {tableHeader.map((item) => {
                return (
                  <>
                    <th className="p-2">{item}</th>
                  </>
                );
              })}
            </tr>
          </thead>
          <tbody className="max-h-[200px] overflow-y-auto">
            {Array(9)
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
                            <td className=" p-2">{item}</td>
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
    </>
  );
}

export default CRMTable;
