import { Link, useMatch } from "react-router-dom";
import { useAuth } from "src/context/auth-context";
import { adminLinks, projectLinks } from "src/utils/links";

function NavLink(props: any) {
  const match = useMatch(props.to);
  return <Link {...props} className={`${match ? "text-orange-500" : null}`} />;
}

function Nav() {
  const { logout, user }: any = useAuth();

  const links =
    user.role === "ADMIN" ? adminLinks : projectLinks(user.projectId);

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
