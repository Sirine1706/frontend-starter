import { Link } from "react-router-dom";

import PlusIcon from "../icons/PlusIcon";
import useAuth from "../../hooks/useAuth";

enum RoleCode {
  ADMIN = "ADMIN",
  USER = "USER",
  DEVELOPER = "DEVELOPER",
}

interface BreadcrumbProps {
  pageName: string;
  ctaLink: string;
  ctaText: string;
  showCta?: boolean;
}
const BreadcrumbCTA = (props: BreadcrumbProps) => {
  const { user } = useAuth();
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {props.pageName}
      </h2>

      {props.showCta && (
        <nav>
          <div className="flex items-center gap-2">
            <Link className="flex items-center gap-2" to={props.ctaLink}>
              <PlusIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              <span>{props.ctaText}</span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default BreadcrumbCTA;
