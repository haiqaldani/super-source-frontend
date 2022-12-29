import cx from "classnames";
import Link from "next/link";

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href = "/" } = props;

  const classTitle = cx({
    "nav-link": true,
    "nav-text": true,
    "active": active,
  });

  return (
    <li className="nav-item">
      <Link href={href} legacyBehavior>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
