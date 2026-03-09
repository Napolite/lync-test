import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { BiCaretDown } from "react-icons/bi";

const Select = ({
  options,
  onSelect,
}: {
  options?: string[];
  onSelect: (val: any) => any;
}) => {
  const [selection, setSelection] = useState(options?.[0]);

  const [dropOpen, setDropOpen] = useState(false);

  const renderDropDown = () => {
    return (
      <div
        className="flex w-full flex-col bg-[#ffffff] border-1 border-[#00000040] shadow-lg min-h-[40px] rounded-[20px] absolute translate-y-[10px] py-[5px]"
        style={{ zIndex: 5 }}
      >
        {options?.map((opt) => (
          <button
            onClick={() => {
              setSelection(opt);
              setDropOpen(false);
            }}
            key={opt}
            className=" px-[8px]"
          >
            <div className="my-[5px] px-[2.5px] hover:bg-[rgba(128,128,128,0.2)] hover:rounded-[8px]">
              <div
                className="py-[8px] text-left bg-[red] px-[10px] rounded-[8px] flex items-center justify-between"
                style={{
                  backgroundColor:
                    selection === opt
                      ? "rgba(128, 128, 128, 0.2)"
                      : "transparent",
                }}
              >
                <p>{opt}</p>
                {selection === opt && <CheckIcon size={14} />}
              </div>
            </div>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full relative">
      <button
        className="w-full bg-[rgba(128,128,128,0.2)] h-[50px] rounded-[8px] relative flex flex-row items-center justify-between px-[10px]"
        onClick={() => setDropOpen(!dropOpen)}
      >
        <p className="p-[16px]">{selection}</p>
        <BiCaretDown />
      </button>
      {dropOpen && renderDropDown()}
    </div>
  );
};

export default Select;
