import PropTypes from "prop-types";
function ExtendSearchForm(props) {
  return (
    <>
      <form
        action="submit"
        className={`border rounded-md mt-2 mx-2 ${props.dynamicClass}`}
      >
        <h1 className="bg-blue-800 text-white text-[18px] p-1">
          Extended Search
        </h1>
        <div className="flex gap-2 justify-between max-sm:flex-wrap">
          <div className="p-3 max-w-[60%] w-full flex-auto max-sm:max-w-full  flex flex-col gap-2 col-span-2">
            {[1, 2, 1].map(() => {
              return (
                <>
                  <div className="flex items-center  gap-5">
                    <label htmlFor="" className="max-w-[200px] w-full">
                      User Field 1
                    </label>
                    <select
                      name="field1"
                      className="max-w-[230px] rounded-md outline-none border-[2px] p-1 w-full"
                      id="field1"
                    >
                      <option value="field1">field1</option>
                      <option value="field1">field1</option>
                      <option value="field1">field1</option>
                    </select>
                    <label htmlFor="" className="min-w-[50px]">
                      Value
                    </label>
                    <input
                      className="max-w-[230px] rounded-md outline-none border-[2px] p-1 px-2 w-full"
                      type="text"
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex flex-col flex-auto justify-around">
            <div className="flex">
              <label className="max-w-[230px] w-full">
                Parent Company name
              </label>
              <input
                className="max-w-[230px]  rounded-md outline-none px-2 border-[2px] p-1 w-full"
                type="text"
              />
            </div>
            <div className="flex items-center gap-2 ">
              <label htmlFor="Contacts">Display Contacts</label>
              <input type="checkbox" name="Contacts" id="Contacts" />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  props.action(false);
                }}
                type="button"
                className="py-2 rounded-md px-4 bg-slate-500 text-white text-[14px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => {
                  props.action(false);
                }}
                className="py-2 px-4 rounded-md bg-blue-400 text-white text-[14px]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ExtendSearchForm;
ExtendSearchForm.propTypes = {
  dynamicClass: PropTypes.string,
  action: PropTypes.func,
};
