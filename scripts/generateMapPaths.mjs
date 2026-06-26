// Pre-render world.geojson to SVG path strings
// Run: node scripts/generateMapPaths.mjs

import { readFileSync, writeFileSync } from 'fs';
import { geoNaturalEarth1, geoPath } from 'd3-geo';

const W = 760;
const H = 420;

const geojson = JSON.parse(readFileSync('./public/world.geojson', 'utf-8'));

const projection = geoNaturalEarth1()
  .scale(130)
  .translate([W / 2, H / 2]);

const pathGen = geoPath(projection);

const paths = geojson.features.map(f => pathGen(f) ?? '').filter(Boolean);

const regions = [
  [80.27, 13.08],  // India
  [55.27, 25.20],  // UAE & GCC
  [28.32, -15.38], // Africa
  [-0.12, 51.50]   // Global Expansion
];

const projectedRegions = regions.map(lonLat => projection(lonLat) ?? [0, 0]);

const output = JSON.stringify({ paths, viewBox: `0 0 ${W} ${H}`, projectedRegions });

writeFileSync('./src/data/worldMapPaths.json', output, 'utf-8');
console.log(`✅ Generated ${paths.length} country paths & region points → src/data/worldMapPaths.json`);
