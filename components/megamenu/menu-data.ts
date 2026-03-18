import type { ApiMenuResponse, NavItem } from "./types";

/**
 * Fetches and normalises the menu from the API.
 * Called only from Server Components — never imported in client bundles.
 */
export async function getMenuItems(): Promise<NavItem[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/menu`, {
      // ISR: re-fetch at most once per hour in the background
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`[menu] fetch failed — status ${res.status}`);
      return [];
    }

    const json: ApiMenuResponse = await res.json();

    if (!json.success || !Array.isArray(json.data?.items)) {
      console.error("[menu] unexpected response shape", json);
      return [];
    }

    // Normalise: map ApiMenuItem → NavItem (flatten to 2 levels)
    return json.data.items.map((item) => ({
      id: item.id,
      label: item.label,
      url: item.url,
      children: (item.children ?? []).map((child) => ({
        id: child.id,
        label: child.label,
        url: child.url,
      })),
    }));
  } catch (err) {
    console.error("[menu] unexpected error", err);
    return [];
  }
}
