import {
  faBell,
  faCalculator,
  faCalendar,
  faCartArrowDown,
  faDesktop,
  faFile,
  faGear,
  faHeadphonesSimple,
  faHome,
  faI,
  faPeopleGroup,
  faScrewdriverWrench,
  faSearchDollar,
  faTruckRampBox,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import NavbarComp from "./assets/components/NavbarComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExtendSearchForm from "./assets/components/Forms/ExtendSearchForm";
import CRMTable from "./assets/components/Tables/CRMTable";
import { useState } from "react";
function App() {
  const [extendSearch, setExtendSearch] = useState(false);
  const [page, setPage] = useState("Customer-Service");
  const [subPage, setSubPage] = useState("CRM");
  const [category, setCategory] = useState("Customer search");
  function rightSection() {
    const icons = [faGear, faFile, faDesktop, faCalendar, faBell];
    return (
      <>
        {icons.map((item) => {
          return (
            <>
              <FontAwesomeIcon className="text-[22px] text-white" icon={item} />
            </>
          );
        })}
      </>
    );
  }
  function rightSection2() {
    return (
      <div className="flex gap-2 justify-end">
        <button className="bg-green-400 rounded-md py-1 px-4">
          New Customer
        </button>
        <button
          onClick={() => {
            setExtendSearch(!extendSearch);
          }}
          className="bg-blue-400 rounded-md py-1 px-4"
        >
          Extend Search
        </button>
        <input type="text" />
      </div>
    );
  }

  const buttons = [
    {
      label: "Customer Service",
      icon: (
        <FontAwesomeIcon className="text-white" icon={faHeadphonesSimple} />
      ),
      link: "Customer-Service",
    },
    {
      label: "Purchasing",
      icon: <FontAwesomeIcon icon={faCartArrowDown} />,
      link: "purchasing",
    },
    {
      label: "Warehouse",
      icon: <FontAwesomeIcon icon={faTruckRampBox} />,
      link: "warehouse",
    },
    {
      label: "Job Costing",
      icon: <FontAwesomeIcon icon={faSearchDollar} />,
      link: "Job-Costing",
    },
    {
      label: "Tools",
      icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
      link: "Tools",
    },
  ];
  const buttons2 = [
    {
      label: "Estimates",
      icon: <FontAwesomeIcon className="text-white" icon={faCalculator} />,
      link: "Estimates",
    },
    {
      label: "Orders",
      icon: <FontAwesomeIcon icon={faI} />,
      link: "Orders",
    },
    {
      label: "CRM",
      icon: <FontAwesomeIcon icon={faPeopleGroup} />,
      link: "CRM",
    },
  ];
  const buttons3 = [
    {
      label: "Customer Search",
      icon: "",
      link: "Customer search",
    },
    {
      label: "Open Activities",
      icon: "",
      link: "open-activities",
    },
    {
      label: "Real Time Activities",
      icon: "",
      link: "real-time-activities",
    },
    {
      label: "Contract Pricing Search",
      icon: "",
      link: "contract-pricing-search",
    },
  ];
  const NavbarArray = [
    {
      buttonClass: "bg-slate-400 hover:bg-blue-900",
      activeColor: "bg-blue-900",
      class: "bg-black ",
      buttons: buttons,
      icon: faHome,
      rightSection: rightSection,
      action: (e) => {
        setPage(e);
      },
      page: page,
    },
    {
      buttonClass: "bg-blue-900 hover:bg-blue-800",
      activeColor: "bg-blue-800",
      class: "bg-blue-900 ",
      buttons: buttons2,
      rightSection: rightSection2,
      action: (e) => {
        setSubPage(e);
      },
      page: subPage,
    },
    {
      buttonClass: "bg-slate-400 hover:bg-slate-500",
      activeColor: "bg-slate-500",
      class: "bg-slate-400 ",
      buttons: buttons3,
      rightSection: () => {
        return <></>;
      },
      action: (e) => {
        setCategory(e);
      },
      page: category,
    },
  ];
  return (
    <div className="flex flex-col h-[100vh]">
      {NavbarArray.map((navbar) => {
        return (
          <>
            <NavbarComp
              buttonClass={navbar.buttonClass}
              class={navbar.class}
              buttons={navbar.buttons}
              icon={navbar.icon}
              rightSection={navbar.rightSection}
              activeColor={navbar?.activeColor}
              action={navbar?.action}
              page={navbar?.page}
            />
          </>
        );
      })}

      {extendSearch && (
        <ExtendSearchForm
          action={(e) => {
            setExtendSearch(e);
          }}
          dynamicClass={
            extendSearch ? "extend-search-form " : "extend-search-form-ou"
          }
        />
      )}
      <CRMTable extendSearch={extendSearch} />
    </div>
  );
}

export default App;
