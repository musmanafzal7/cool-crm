import PropTypes from "prop-types";

import { Table } from "antd";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
function CRMTable(props) {
  return (
    <>
      <div
        className={`rounded-md border  m-2 transition-all duration-[9s] ease-in-out flex-1`}
      >
        <div className="w-full sticky top-0 bg-blue-800 text-white flex justify-between p-2 ">
          <h1>CRM Search</h1>
          <button>Reset Filters</button>
        </div>
        <div className="max-w-[1000px] w-full overflow-x-auto">
          <Table
            columns={props.columns}
            dataSource={props.rows}
            onChange={onChange}
            pagination={{
              pageSize: 8,
            }}
          
            showSorterTooltip={{
              target: "sorter-icon",
            }}
          />
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
