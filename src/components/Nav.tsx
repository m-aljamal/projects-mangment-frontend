import { Link, useMatch } from "react-router-dom";
import { useAuth } from "src/context/auth-context";
import { adminLinks, userLinks } from "src/utils/links";

function NavLink(props: any) {
  const match = useMatch(props.to);
  return <Link {...props} className={`${match ? "text-orange-500" : null}`} />;
}

function Nav() {
  const { logout, user }: any = useAuth();

  const links = user.role === "ADMIN" ? adminLinks : userLinks;
  return (
    <nav>
      <ul className=" space-y-4">
        {links?.map((link) => (
          <li key={link.link}>
            <NavLink to={link.link}>{link.name}</NavLink>
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
