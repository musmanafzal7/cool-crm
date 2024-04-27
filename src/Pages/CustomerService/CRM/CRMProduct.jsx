import ExtendSearchForm from "../../../assets/components/Forms/ExtendSearchForm";
import CRMTable from "../../../assets/components/Tables/CRMTable";
import PropTypes from "prop-types";

function HomeView(props) {
  const columns = [
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
      <CRMTable columns={columns} rows={columns} />
    </>
  );
}

export default HomeView;
HomeView.propTypes = {
  extendSearch: PropTypes.string.isRequired,
  setExtendSearch: PropTypes.func,
};
