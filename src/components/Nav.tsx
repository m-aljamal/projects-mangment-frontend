import { Link, useMatch, useParams } from "react-router-dom";
import { useAuth } from "src/context/auth-context";
import { adminLinks, useProjectLinks } from "src/utils/links";

function NavLink(props: any) {
  const match = useMatch(props.to);

  return (
    <Link
      className={` hover:bg-gray-700 hover:text-white hover:rounded-md py-2 block  ${
        match ? "bg-gray-700 rounded-md text-white" : "text-gray-400"
      }`}
      {...props}
    />
  );
}

function Nav() {
  const { user }: any = useAuth();

  const projectLinks = useProjectLinks();

  const links = user.role === "ADMIN" ? adminLinks : projectLinks;

  return (
    <nav>
      <ul className=" space-y-4">
        {links?.map((link) => (
          <li key={link.label}>
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
