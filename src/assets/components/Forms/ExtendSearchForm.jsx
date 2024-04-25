function ExtendSearchForm() {
  return (
    <>
      <form action="submit" className="border rounded-md mt-2 mx-2">
        <h1 className="bg-blue-400 text-white text-[18px] p-1">
          Extended Search
        </h1>
        <div className="grid grid-cols-3">
          {" "}
          <div className="p-3  flex flex-col gap-2 col-span-2">
            {[1, 2, 1].map(() => {
              return (
                <>
                  {" "}
                  <div className="flex items-center gap-5">
                    <label htmlFor="" className="max-w-[200px] w-full">
                      User Field 1
                    </label>
                    <select
                      name="field1"
                      className="max-w-[230px] border-[2px] p-1 w-full"
                      id="field1"
                    >
                      <option value="field1">field1</option>
                      <option value="field1">field1</option>
                      <option value="field1">field1</option>
                    </select>
                    <label htmlFor="">Value</label>
                    <input
                      className="max-w-[230px] border-[2px] p-1 w-full"
                      type="text"
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex flex-col justify-around">
            <div className="flex">
              <label className="max-w-[230px] w-full">
                Parent Company name
              </label>
              <input
                className="max-w-[230px] border-[2px] p-1 w-full"
                type="text"
              />
            </div>
            <div className="flex items-center gap-2 ">
              <label htmlFor="Contacts">Display Contacts</label>
              <input type="checkbox" name="Contacts" id="Contacts" />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="py-2 px-4 bg-slate-500 text-white text-[14px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-400 text-white text-[14px]"
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
