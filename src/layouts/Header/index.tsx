import React from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/brand/logo.svg";
import DarkModeSwitcher from "./DarkModeSwitcher";
import useAuth from "../../hooks/useAuth";
import DropdownUser from "./DropdownUser";
import SearchForm from "./SearchForm";
import { displaySearch } from "./SearchForm/utils/search";
import FilterIcon from "../../components/icons/FilterIcon";
import { useAppDispatch } from "../../hooks/redux";
import {
  togglePlansFilterModalIsOpen,
  toggleScenesFilterModalIsOpen,
  toggleProjectsFilterModalIsOpen,
} from "../../store/slices/global/slice";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const { isAuthenticated } = useAuth();
  const pathname = useLocation().pathname;
  const dispatch: Function = useAppDispatch();
  const [showFilterButton, setShowFilterButton] = React.useState(false);

  const handleFilter = () => {
    if (pathname.includes("plan/listing")) {
      dispatch(togglePlansFilterModalIsOpen());
    }
    if (pathname.includes("scene/listing")) {
      dispatch(toggleScenesFilterModalIsOpen());
    }
    if (pathname.includes("project/listing")) {
      dispatch(toggleProjectsFilterModalIsOpen());
    }
  };

  React.useEffect(() => {
    if (
      pathname.includes("plan/listing") ||
      pathname.includes("scene/listing") ||
      pathname.includes("project/listing")
    ) {
      setShowFilterButton(true);
    } else {
      setShowFilterButton(false);
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 px-6 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-2 shadow-2">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="flex items-center justify-start gap-4">
          {showFilterButton && (
            <button
              onClick={handleFilter}
              className="ring-1 rounded-sm p-1 ring-current hidden sm:block"
            >
              <FilterIcon />
            </button>
          )}
          {displaySearch(pathname) ? (
            <div className="hidden sm:block rounded-sm p-1 ring-current ring-1 pr-2">
              <SearchForm />
            </div>
          ) : (
            <div className="opacity-0" style={{ pointerEvents: "none" }}>
              <SearchForm />
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
          </ul>

          {isAuthenticated ? <DropdownUser /> : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
