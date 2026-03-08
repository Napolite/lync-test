function Tab({ children, px = true }: any) {
  return (
    <div
      className="rounded-[10px] ring-1 ring-[#00000030] h-auto w-auto py-[15px] flex-1"
      style={{ paddingLeft: px ? 20 : 0, paddingRight: px ? 20 : 0 }}
    >
      {children}
    </div>
  );
}

export default Tab;
