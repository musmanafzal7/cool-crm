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
      <button className="bg-green-400 py-1 px-4">New Customer</button>
      <button className="bg-blue-400 py-1 px-4">Extend Search</button>
      <input type="text" />
    </div>
  );
}
function App() {
  const buttons = [
    {
      label: "Customer Service",
      icon: (
        <FontAwesomeIcon className="text-white" icon={faHeadphonesSimple} />
      ),
      link: "/customer-service",
    },
    {
      label: "Purchasing",
      icon: <FontAwesomeIcon icon={faCartArrowDown} />,
      link: "/customer-service",
    },
    {
      label: "Warehouse",
      icon: <FontAwesomeIcon icon={faTruckRampBox} />,
      link: "/customer-service",
    },
    {
      label: "Job Costing",
      icon: <FontAwesomeIcon icon={faSearchDollar} />,
      link: "/customer-service",
    },
    {
      label: "Tools",
      icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
      link: "/customer-service",
    },
  ];
  const buttons2 = [
    {
      label: "Estimates",
      icon: <FontAwesomeIcon className="text-white" icon={faCalculator} />,
      link: "/customer-service",
    },
    {
      label: "Orders",
      icon: <FontAwesomeIcon icon={faI} />,
      link: "/customer-service",
    },
    {
      label: "CRM",
      icon: <FontAwesomeIcon icon={faPeopleGroup} />,
      link: "/customer-service",
    },
  ];
  const buttons3 = [
    {
      label: "Customer Search",
      icon: "",
      link: "/customer-service",
    },
    {
      label: "Open Activities",
      icon: "",
      link: "/customer-service",
    },
    {
      label: "Real Time ACtivities",
      icon: "",
      link: "/customer-service",
    },
    {
      label: "Contract Pricing Search",
      icon: "",
      link: "/customer-service",
    },
  ];
  const NavbarArray = [
    {
      buttonClass: "bg-slate-400 hover:bg-blue-900",
      class: "bg-black ",
      buttons: buttons,
      icon: faHome,
      rightSection: rightSection,
    },
    {
      buttonClass: "bg-blue-900 hover:bg-blue-400",
      class: "bg-blue-900 ",
      buttons: buttons2,
      rightSection: rightSection2,
    },
    {
      buttonClass: "bg-slate-400 hover:bg-purple-300",
      class: "bg-slate-400 ",
      buttons: buttons3,
      rightSection: () => {
        return <></>;
      },
    },
  ];
  return (
    <>
      {NavbarArray.map((navbar) => {
        return (
          <>
            <NavbarComp
              buttonClass={navbar.buttonClass}
              class={navbar.class}
              buttons={navbar.buttons}
              icon={navbar.icon}
              rightSection={navbar.rightSection}
            />
          </>
        );
      })}

      <ExtendSearchForm />
      <CRMTable />
    </>
  );
}

export default App;
