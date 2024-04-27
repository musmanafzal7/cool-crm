import CRMTable from "../../../assets/components/Tables/CRMTable";

function CUstomerActivities() {
  const columns = [
    "Customer Name",
    "Contact",
    "Contact Phone",
    "Description (Activity)",
    "Date",
    "Result/Status",
    "Owner",
    "Assigned To",
    "Type",
    "Priority",
    "Due Date",
  ];
  return (
    <>
      {" "}
      <CRMTable columns={columns} rows={columns} />
    </>
  );
}

export default CUstomerActivities;
