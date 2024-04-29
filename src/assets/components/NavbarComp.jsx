import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
function NavbarComp(props) {
  const navigate = useNavigate();
  return (
    <div
      className={`${props.class} flex z-[1] flex-wrap h-auto relative items-center justify-between gap-2 pt-1 px-2 text-[white]`}
    >
      <div className="flex gap-2  flex-wrap">
        <FontAwesomeIcon className="self-center" icon={props.icon} />
        {props.buttons.map((item) => {
          return (
            <>
              <button
                className={` ${
                  item.link == props.page
                    ? props.activeColor
                    : props.buttonClass
                }   ease-linear rounded-t-md transition-[12s] p-2 gap-2 flex justify-center items-center`}
                type="button"
                onClick={() => {
                  props.action(item.link);
                  navigate(item.link);
                }}
              >
                {item.icon}
                {item.label}
              </button>
            </>
          );
        })}
      </div>
      <div className="flex gap-2 max-md:gap-1.5  items-center justify-center">
        <props.rightSection></props.rightSection>
      </div>
    </div>
  );
}

export default NavbarComp;
NavbarComp.propTypes = {
  buttons: PropTypes.array.isRequired,
  icon: PropTypes.object,
  page: PropTypes.object,
  class: PropTypes.string,
  action: PropTypes.func,
  buttonClass: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
};
