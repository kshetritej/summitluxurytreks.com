import { getMenuItems } from "./menu-data";
import { NavbarClient } from "./navbar-client";

export async function MegaMenu() {
  const items = await getMenuItems();
  return <NavbarClient items={items} />;
}
