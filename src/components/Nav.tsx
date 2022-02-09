import { Link, useMatch } from "react-router-dom";
import { useAuth } from "src/context/auth-context";

const Links = [
  {
    link: "/dashboard",
    name: "لوحة التحكم",
  },
  {
    link: "/projects",
    name: "المشاريع",
  },
];

function NavLink(props: any) {
  const match = useMatch(props.to);
  return (
    <Link {...props} className={`   ${match ? "text-orange-500" : null} `} />
  );
}

function Nav() {
  const { logout }: any = useAuth();

  return (
    <nav>
      <ul className=" space-y-4">
        {Links.map((link) => (
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
