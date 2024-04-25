import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
function NavbarComp(props) {
  return (
    <div
      className={`${props.class} flex items-center justify-between gap-2 pt-1 px-2 text-[white]`}
    >
      <div className="flex gap-2">
        <FontAwesomeIcon className="self-center" icon={props.icon} />
        {props.buttons.map((item) => {
          return (
            <>
              <button
                className={` ${props.buttonClass}  ease-linear transition-[12s] p-2 gap-2 flex justify-center items-center`}
                type="button"
              >
                {item.icon}
                {item.label}
              </button>
            </>
          );
        })}
      </div>
      <div className="flex gap-[2em] items-center justify-center">
        <props.rightSection></props.rightSection>
      </div>
    </div>
  );
}

export default NavbarComp;
NavbarComp.propTypes = {
  buttons: PropTypes.array.isRequired,
  icon: PropTypes.object,
  class: PropTypes.string,
  buttonClass: PropTypes.string.isRequired,
};
