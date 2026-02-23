/**
 * MegaMenu — Server Component entry point.
 *
 * Fetches menu data at request time (with ISR) so zero client-side
 * data fetching happens. Passes the normalised items to <NavbarClient>.
 *
 * Usage in app/layout.tsx:
 *
 *   import { MegaMenu } from "@/components/mega-menu";
 *   ...
 *   <MegaMenu />
 */

import { getMenuItems } from "./menu-data";
import { NavbarClient } from "./navbar-client";

export async function MegaMenu() {
  const items = await getMenuItems();
  return <NavbarClient items={items} />;
}
