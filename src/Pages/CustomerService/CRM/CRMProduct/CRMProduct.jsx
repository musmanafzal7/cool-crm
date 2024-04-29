import ExtendSearchForm from "../../../../assets/components/Forms/ExtendSearchForm";
import CRMTable from "../../../../assets/components/Tables/CRMTable";
import PropTypes from "prop-types";

function HomeView(props) {
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
      title: "Code",
      dataIndex: "code",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
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
      title: "City",
      dataIndex: "City",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Zip Code",
      dataIndex: "Zip Code",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Type - Customer",
      dataIndex: "TypeCustomer",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Representative",
      dataIndex: "Representative",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "CSR",
      dataIndex: "CSR",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Active",
      dataIndex: "Active",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Email",
      dataIndex: "Email",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Website",
      dataIndex: "Website",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Terms",
      dataIndex: "Terms",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Source",
      dataIndex: "Source",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      address: "New York No. 1 Lake Park",
      City: "lahore",
      State: "Punjab",
      ZipCode: "2939",
      Phone: "209029092",
      TypeCustomer: true,
      Representative: "nan",
      CSR: "kdjk",
      Active: "yes",
      Email: "iman@gmail.com",
      Website: "immnhejj",
      Terms: "jdhjh",
      Source: "bdjbdnb",
    },
  ];

  return (
    <>
      {props.extendSearch && (
        <ExtendSearchForm
          action={(e) => {
            props.setExtendSearch(e);
          }}
          dynamicClass={
            props.extendSearch ? "extend-search-form " : "extend-search-form-ou"
          }
        />
      )}
      <CRMTable columns={columns} rows={data} />
    </>
  );
}

export default HomeView;
HomeView.propTypes = {
  extendSearch: PropTypes.string.isRequired,
  setExtendSearch: PropTypes.func,
};
