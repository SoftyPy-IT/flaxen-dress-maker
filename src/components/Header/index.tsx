import DropdownUser from "./DropdownUser";
import MenuIcon from '@mui/icons-material/Menu';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white border-b">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 lg:justify-end 2xl:px-11">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block p-1.5 lg:hidden"
          >
            <MenuIcon />
          </button>
        </div>
        <DropdownUser />
      </div>
    </header>
  );
};

export default Header;
