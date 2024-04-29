import CRMTable from "../../../assets/components/Tables/CRMTable";

function CustomerProjects() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: {
        target: "full-header",
      },
      // filters: [
      //   {
      //     text: "Joe",
      //     value: "Joe",
      //   },
      //   {
      //     text: "Jim",
      //     value: "Jim",
      //   },
      //   {
      //     text: "Submenu",
      //     value: "Submenu",
      //     children: [
      //       {
      //         text: "Green",
      //         value: "Green",
      //       },
      //       {
      //         text: "Black",
      //         value: "Black",
      //       },
      //     ],
      //   },
      // ],
      // onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Project Name",
      dataIndex: "PName",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Project Number",
      dataIndex: "PNumber",
      // filters: [
      //   {
      //     text: "London",
      //     value: "London",
      //   },
      //   {
      //     text: "New York",
      //     value: "New York",
      //   },
      // ],
      // onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: "Project Date",
      dataIndex: "PDate",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Project Type",
      dataIndex: "PType",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Status",
      dataIndex: "Status",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Value",
      dataIndex: "Value",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Last Activity Date",
      dataIndex: "LastActivityDate",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
  ];
  const data = [
    {
      key: "1",
      Name: "Customer Name",
      PName: "Project Name",
      PNumber: "Project Number",
      PDate: "Project Date",
      PType: "Project Type",
      Status: "Status",
      Source: "Source",
      Value: "Value",
      LastActivityDate: "Last Activity Date",
    },
  ];

  return (
    <>
      {" "}
      <CRMTable columns={columns} rows={data} />
    </>
  );
}

export default CustomerProjects;
