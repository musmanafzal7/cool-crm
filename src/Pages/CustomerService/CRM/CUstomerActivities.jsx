import CRMTable from "../../../assets/components/Tables/CRMTable";

function CUstomerActivities() {
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
      title: "Contact",
      dataIndex: "Contact",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Contact Phone",
      dataIndex: "ContactPhone",
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
      title: "Description",
      dataIndex: "Description",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Date",
      dataIndex: "Date",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Result/Status",
      dataIndex: "Result",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Owner",
      dataIndex: "Owner",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Assign to",
      dataIndex: "Assign",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Type",
      dataIndex: "Type",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Priority",
      dataIndex: "Priority",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
  ];
  const data = [
    {
      Name: "Customer Name",
      Contact: "Contact",
      ContactPhone: "Contact Phone",
      Description: "Description (Activity)",
      Date: "Date",
      Result: "Result/Status",
      Owner: "Owner",
      Assigned: "Assigned To",
      Type: "Type",
      Priority: "Priority",
      DueDate: "Due Date",
    },
  ];

  return (
    <>
      {" "}
      <CRMTable columns={columns} rows={data} />
    </>
  );
}

export default CUstomerActivities;
