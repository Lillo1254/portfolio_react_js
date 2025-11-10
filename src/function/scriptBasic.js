// Utilities to compute scale values for sections based on scroll position

/**
 * Compute a scale value based on the first matching range.
 * A range is an object: { min: number, max: number | Infinity, value: number }
 */
export function computeScaleByRanges(scrollY, ranges, defaultValue = 0) {
  if (!Array.isArray(ranges) || ranges.length === 0) return defaultValue;
  for (let i = 0; i < ranges.length; i += 1) {
    const range = ranges[i];
    const min = typeof range.min === "number" ? range.min : -Infinity;
    const max = typeof range.max === "number" ? range.max : Infinity;
    if (scrollY >= min && scrollY < max) return range.value;
  }
  return defaultValue;
}

/**
 * Section 1 scale logic reproduced parametrically.
 * - >=1950 => 0
 * - <200   => 1
 * - From 200 to 1900 every 100px decreases by 0.05 starting at 0.9
 */
export function computeSection1Scale(scrollY) {
  if (scrollY >= 1950) return 0;
  if (scrollY < 200) return 1;
  const stepsFrom200 = Math.floor((scrollY - 200) / 100);
  const value = 0.9 - stepsFrom200 * 0.05;
  return Math.max(0, Number(value.toFixed(2)));
}

// Section 2 scale configuration (exactly mirrors the original conditions)
const section2Ranges = [
  { min: 1950, max: 2000, value: 0 },
  { min: 2000, max: 2200, value: 0.05 },
  { min: 2200, max: 2400, value: 0.1 },
  { min: 2400, max: 2600, value: 0.3 },
  { min: 2600, max: 2700, value: 0.5 },
  { min: 2700, max: 2900, value: 0.7 },
  { min: 2900, max: 3000, value: 1 },
  { min: 3000, max: 3200, value: 1 },
  { min: 3200, max: 3400, value: 1 },
  { min: 3400, max: 3500, value: 1 },
  { min: 3500, max: 3600, value: 0.7 },
  { min: 3600, max: 3700, value: 0.5 },
  { min: 3700, max: 3800, value: 0.4 },
  { min: 3800, max: 3900, value: 0.3 },
  { min: 3900, max: 4000, value: 0.15 },
  { min: 4000, max: Infinity, value: 0 },
];

export function computeSection2Scale(scrollY) {
  if (scrollY < 1950) return 0;
  return computeScaleByRanges(scrollY, section2Ranges, 0);
}

// Section 3 scale configuration (cleaned ranges equivalent to original logic)
const section3Ranges = [
  { min: 4050, max: 4200, value: 0.05 },
  { min: 4200, max: 4400, value: 0.1 },
  { min: 4400, max: 4600, value: 0.3 },
  { min: 4600, max: 4700, value: 0.5 },
  { min: 4700, max: 4900, value: 0.7 },
  { min: 4900, max: 5000, value: 1 },
  { min: 5000, max: 5200, value: 1 },
  { min: 5200, max: 5400, value: 1 },
  { min: 5400, max: 5500, value: 0.8 },
  { min: 5500, max: 5600, value: 0.6 },
  { min: 5600, max: 5700, value: 0.4 },
  { min: 5700, max: 5800, value: 0.3 },
  { min: 5800, max: 5900, value: 0.15 },
  { min: 5900, max: 6000, value: 0.1 },
  { min: 6000, max: Infinity, value: 0 },
];

export function computeSection3Scale(scrollY) {
  if (scrollY < 4050) return 0;
  return computeScaleByRanges(scrollY, section3Ranges, 0);
}

// Section 4 scale configuration
const section4Ranges = [
  { min: 6050, max: 6200, value: 0.05 },
  { min: 6200, max: 6400, value: 0.1 },
  { min: 6400, max: 6600, value: 0.2 },
  { min: 6600, max: 6700, value: 0.3 },
  { min: 6700, max: 6900, value: 0.4 },
  { min: 6900, max: 7000, value: 0.5 },
  { min: 7000, max: 7200, value: 0.6 },
  { min: 7200, max: 7400, value: 0.7 },
  { min: 7400, max: 7500, value: 0.8 },
  { min: 7500, max: 7600, value: 0.9 },
  { min: 7600, max: 7700, value: 1 },
  { min: 7700, max: 9000, value: 1 },
];

export function computeSection4Scale(scrollY) {
  if (scrollY < 6050) return 0;
  return computeScaleByRanges(scrollY, section4Ranges, 0);
}

// Fetch latest public repositories for a given GitHub username
export async function fetchLatestPublicRepos(username, limit = 4) {
  const safeLimit = Math.max(1, Math.min(limit, 10));
  const url = `https://api.github.com/users/${encodeURIComponent(
    username
  )}/repos?sort=updated&direction=desc&per_page=${safeLimit}`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  const repos = await response.json();
  return repos.map((r) => ({
    id: r.id,
    name: r.name,
    htmlUrl: r.html_url,
    description: r.description,
    language: r.language,
    stars: r.stargazers_count,
    updatedAt: r.updated_at,
  }));
}