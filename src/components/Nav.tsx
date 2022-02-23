import { Link, useMatch, useParams } from "react-router-dom";
import { useAuth } from "src/context/auth-context";
import { adminLinks, useProjectLinks } from "src/utils/links";

function NavLink(props: any) {
  const match = useMatch(props.to);
  return <Link {...props} className={`${match ? "text-orange-500" : null}`} />;
}

function Nav() {
  const { logout, user }: any = useAuth();

  const projectLinks = useProjectLinks();

  const links = user.role === "ADMIN" ? adminLinks : projectLinks;

  return (
    <nav>
      <ul className=" space-y-4">
        {links?.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to}>{link.label}</NavLink>
          </li>
        ))}
        <li className=" cursor-pointer" onClick={logout}>
          تسجيل الخروج
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
