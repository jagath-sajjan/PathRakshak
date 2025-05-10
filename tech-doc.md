## 🔍 Overview

PathRakshak is a route optimization engine built for military logistics. It is capable of computing safest and fastest routes by avoiding defined hostile regions using a graph-based approach and custom risk scoring.

---

## 🧠 Algorithms

### 📌 Graph Model

* **Nodes**: Latitude/Longitude waypoints
* **Edges**: Road segments with distance
* **Edge Weight** = `distance + (risk factor × % of segment inside threat zone)`

### 📌 Risk Score Calculation

```ts
weight = α * distance + β * (length_inside_threat / total_length)
```

* α: Distance weight factor
* β: Risk weight factor (configurable)

### 📌 Pathfinding Algorithms

* **Dijkstra’s Algorithm**: Finds the shortest path based on current edge weights
* \**A* (A-Star)\*\*: Adds heuristic (Haversine distance to destination)

### 📌 Threat Zone Intersection

* Calculated using **Turf.js `booleanIntersects`** and `lineIntersect` for each edge segment
* Zones drawn as GeoJSON polygons

---

## 🗺️ Mapping and Interaction

* Interactive map (Leaflet.js / Mapbox GL JS)
* Users can:

  * Set source/destination
  * Draw or upload threat zones
  * View suggested routes
  * Toggle heatmap/risk overlays

---

## 💾 Data Formats

* **GeoJSON**: Used for importing/exporting paths and threat zones
* **Graph Object**: In-memory adjacency list (custom JS object)

```json
{
  "A": [{ "to": "B", "distance": 5.2, "risk": 0.3 }],
  "B": [{ "to": "C", "distance": 2.1, "risk": 0.1 }]
}
```

---

## 🧪 Testing

* Unit tests for edge scoring functions
* Threat zone overlap tests
* Path validity checks using mock battlefield scenarios

---

## 📤 Output

* Optimal route with ETA and total risk score
* Visual map route
* Optional: PDF export of mission plan

---
