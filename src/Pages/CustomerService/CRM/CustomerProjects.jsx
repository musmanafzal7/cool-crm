import CRMTable from "../../../assets/components/Tables/CRMTable";

function CustomerProjects() {
  const columns = [
    "Customer Name",
    "Project Name",
    "Project Number",
    "Project Date",
    "Project Type",
    "Status",
    "Source",
    "Value",
    "Last Activity Date",
  ];
  return (
    <>
      {" "}
      <CRMTable columns={columns} rows={columns} />
    </>
  );
}

export default CustomerProjects;
