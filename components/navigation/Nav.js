import useMediaQuery from "../../hooks/useMediaQuery";
import NavDesktop from "../navigation/nav-desktop/NavDesktop";
import Hamburger from "../hamburger-menu/Hamburger";

export default function Nav() {
  const isBreakpoint = useMediaQuery(900);

  return <>{isBreakpoint ? <Hamburger /> : <NavDesktop />}</>;
}
