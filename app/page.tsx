import { CircuitBoard, FileDown, GitBranch, Globe, MapPin, Shield, Truck } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-900 text-blue-100 font-mono">
      {/* Blueprint Grid Background */}
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 150, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 150, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Header Section */}
      <header className="relative z-10 border-b border-blue-500/30 bg-navy-950/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative h-10 w-10 mr-3">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse"></div>
                <CircuitBoard className="h-10 w-10 text-blue-400" />
              </div>
              <span className="text-xl font-bold tracking-wider text-blue-300">PathRakshak</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 border border-blue-500/30 bg-blue-900/10 text-blue-300 text-xs tracking-wider">
                CLASSIFIED // INDIAN ARMY
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-100 tracking-tight">
                PathRakshak
                <span className="block text-2xl md:text-3xl text-blue-300 mt-2">Strategic Convoy Routing System</span>
              </h1>
              <p className="text-blue-300 text-lg max-w-xl leading-relaxed">
                AI-guided route planning for safe, efficient military logistics movement in high-risk environments and
                war-like scenarios.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-6 py-3 bg-blue-600/20 border border-blue-500 text-blue-100 hover:bg-blue-500/30 transition-colors rounded relative overflow-hidden group">
                  <span className="relative z-10">System Overview</span>
                  <span className="absolute inset-0 bg-blue-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </button>
                <button className="px-6 py-3 border border-blue-500/50 text-blue-300 hover:bg-blue-900/30 transition-colors rounded">
                  Technical Specifications
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-lg border border-blue-500/20"></div>
              <div className="relative h-[400px] rounded-lg overflow-hidden border border-blue-500/30">
                <div className="absolute inset-0 bg-navy-950/70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full p-4">
                    <div className="relative w-full h-full border border-blue-500/30 rounded bg-navy-900/50 overflow-hidden">
                      {/* Blueprint Map */}
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(0, 150, 255, 0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 150, 255, 0.2) 1px, transparent 1px)
                          `,
                          backgroundSize: "40px 40px",
                        }}
                      />

                      {/* Map Elements */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
                        {/* Safe Route */}
                        <path
                          d="M100,300 C150,200 250,150 350,200 C450,250 550,300 700,250"
                          stroke="#00ff00"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="10,5"
                          className="animate-pulse"
                        />

                        {/* Danger Zone */}
                        <path
                          d="M300,100 C400,50 500,100 450,200 C400,300 300,250 300,100"
                          stroke="#ff3333"
                          strokeWidth="2"
                          fill="#ff333320"
                          className="animate-pulse"
                        />

                        {/* Points */}
                        <circle
                          cx="100"
                          cy="300"
                          r="10"
                          fill="#0088ff"
                          className="animate-ping"
                          style={{ animationDuration: "3s" }}
                        />
                        <circle cx="100" cy="300" r="5" fill="#00aaff" />

                        <circle
                          cx="700"
                          cy="250"
                          r="10"
                          fill="#0088ff"
                          className="animate-ping"
                          style={{ animationDuration: "3s" }}
                        />
                        <circle cx="700" cy="250" r="5" fill="#00aaff" />

                        {/* Convoy Icons */}
                        <circle cx="250" cy="230" r="8" fill="none" stroke="#00aaff" strokeWidth="2" />
                        <circle cx="450" cy="230" r="8" fill="none" stroke="#00aaff" strokeWidth="2" />
                        <circle cx="550" cy="260" r="8" fill="none" stroke="#00aaff" strokeWidth="2" />
                      </svg>

                      {/* HUD Elements */}
                      <div className="absolute top-4 left-4 text-xs text-blue-300">
                        <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>SAFE ROUTE CALCULATED</span>
                        </div>
                        <div className="mt-2">LAT: 28.5355° N | LONG: 77.2510° E</div>
                        <div className="mt-1">THREAT LEVEL: MODERATE</div>
                      </div>

                      <div className="absolute bottom-4 right-4 text-xs text-blue-300">
                        <div>DISTANCE: 127.4 KM</div>
                        <div>ETA: 3H 42M</div>
                        <div>RISK SCORE: 0.37</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 h-full w-full bg-blue-500/5 rounded-lg border border-blue-500/10 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-16 bg-navy-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-100 inline-block relative">
              How It Works
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500/50"></span>
            </h2>
            <p className="text-blue-300 mt-4 max-w-2xl mx-auto">
              PathRakshak employs advanced algorithms to calculate optimal routes while avoiding threat zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Input Node */}
            <div className="relative border border-blue-500/30 bg-navy-900/50 p-6 rounded-lg group hover:bg-navy-800/30 transition-colors">
              <div className="absolute inset-0 bg-blue-500/5 rounded-lg transform scale-0 group-hover:scale-100 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-200 text-center mb-3">Input Points</h3>
                <ul className="text-blue-300 space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-400 mr-2"></span>
                    Origin & Destination
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-red-400 mr-2"></span>
                    Threat Zone Polygons
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-green-400 mr-2"></span>
                    Safe Zone Markers
                  </li>
                </ul>
              </div>
              <svg className="absolute bottom-0 right-0 h-20 w-20 text-blue-500/10" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M50,10 L50,90 M10,50 L90,50" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            {/* Process Node */}
            <div className="relative border border-blue-500/30 bg-navy-900/50 p-6 rounded-lg group hover:bg-navy-800/30 transition-colors">
              <div className="absolute inset-0 bg-blue-500/5 rounded-lg transform scale-0 group-hover:scale-100 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center mb-4 mx-auto">
                  <GitBranch className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-200 text-center mb-3">Risk-Weighted Pathfinding</h3>
                <div className="text-blue-300 text-sm">
                  <div className="p-2 border border-blue-500/20 bg-blue-500/5 rounded mb-2 font-mono text-xs">
                    Risk = α·distance + β·threat
                  </div>
                  <p className="text-xs text-blue-300/80 mb-2">
                    Dijkstra/A* algorithm with custom risk heuristics to calculate optimal routes
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span>Threat Avoidance</span>
                    <span className="text-green-400">87%</span>
                  </div>
                  <div className="w-full bg-navy-800 h-1 mt-1 mb-2">
                    <div className="bg-green-400 h-1" style={{ width: "87%" }}></div>
                  </div>
                </div>
              </div>
              <svg className="absolute bottom-0 right-0 h-20 w-20 text-blue-500/10" viewBox="0 0 100 100">
                <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M35,35 L65,35 L65,65 L35,65 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M20,20 L35,35 M80,20 L65,35 M20,80 L35,65 M80,80 L65,65"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Output Node */}
            <div className="relative border border-blue-500/30 bg-navy-900/50 p-6 rounded-lg group hover:bg-navy-800/30 transition-colors">
              <div className="absolute inset-0 bg-blue-500/5 rounded-lg transform scale-0 group-hover:scale-100 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center mb-4 mx-auto">
                  <FileDown className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-200 text-center mb-3">Route Suggestions</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-green-400">Primary Route</span>
                    <span className="text-xs">Risk: 0.21</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400">Alternate Route</span>
                    <span className="text-xs">Risk: 0.35</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-red-400">Emergency Route</span>
                    <span className="text-xs">Risk: 0.58</span>
                  </div>
                  <p className="text-xs text-blue-300/80 mt-2">Routes ranked by safety & ETA</p>
                </div>
              </div>
              <svg className="absolute bottom-0 right-0 h-20 w-20 text-blue-500/10" viewBox="0 0 100 100">
                <path d="M10,30 L90,30 M10,50 L90,50 M10,70 L90,70" stroke="currentColor" strokeWidth="2" />
                <circle cx="30" cy="30" r="5" fill="currentColor" />
                <circle cx="50" cy="50" r="5" fill="currentColor" />
                <circle cx="70" cy="70" r="5" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Flow Arrows */}
          <div className="hidden md:block max-w-4xl mx-auto">
            <div className="flex justify-center mt-4">
              <svg className="h-8 w-32 text-blue-500" viewBox="0 0 100 20">
                <path d="M0,10 L90,10 M80,5 L90,10 L80,15" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <svg className="h-8 w-32 text-blue-500" viewBox="0 0 100 20">
                <path d="M0,10 L90,10 M80,5 L90,10 L80,15" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Logic */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-100 inline-block relative">
              Interactive Map Logic
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500/50"></span>
            </h2>
            <p className="text-blue-300 mt-4 max-w-2xl mx-auto">
              Visualize threat zones and calculate optimal routes in real-time with our interactive mapping system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden border border-blue-500/30">
                <div className="absolute inset-0 bg-navy-950/70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full p-4">
                    <div className="relative w-full h-full border border-blue-500/30 rounded bg-navy-900/50 overflow-hidden">
                      {/* Blueprint Map */}
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(0, 150, 255, 0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 150, 255, 0.2) 1px, transparent 1px)
                          `,
                          backgroundSize: "40px 40px",
                        }}
                      />

                      {/* Map Elements */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
                        {/* Road Network */}
                        <path
                          d="M100,100 L300,100 L500,200 L700,200 M300,100 L300,300 L500,400 L700,400 M500,200 L500,400 M100,300 L300,300 M100,500 L300,500 L500,400 M700,200 L700,400"
                          stroke="#4488ff"
                          strokeWidth="2"
                          fill="none"
                        />

                        {/* Danger Zone 1 */}
                        <path
                          d="M350,150 C450,100 550,150 500,250 C450,350 350,300 350,150"
                          stroke="#ff3333"
                          strokeWidth="2"
                          fill="#ff333320"
                          className="animate-pulse"
                        />

                        {/* Danger Zone 2 */}
                        <path
                          d="M200,350 C300,300 400,350 350,450 C300,550 200,500 200,350"
                          stroke="#ff3333"
                          strokeWidth="2"
                          fill="#ff333320"
                          className="animate-pulse"
                        />

                        {/* Safe Route */}
                        <path
                          d="M100,100 L300,100 L300,300 L100,300"
                          stroke="#00ff00"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="10,5"
                        />

                        {/* Risky Route */}
                        <path
                          d="M100,300 L300,300 L500,400 L700,400"
                          stroke="#ffaa00"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="10,5"
                        />

                        {/* Points */}
                        <circle cx="100" cy="100" r="8" fill="#0088ff" />
                        <circle cx="700" cy="400" r="8" fill="#0088ff" />

                        {/* Nodes */}
                        <circle cx="300" cy="100" r="5" fill="#4488ff" />
                        <circle cx="500" cy="200" r="5" fill="#4488ff" />
                        <circle cx="700" cy="200" r="5" fill="#4488ff" />
                        <circle cx="300" cy="300" r="5" fill="#4488ff" />
                        <circle cx="500" cy="400" r="5" fill="#4488ff" />
                        <circle cx="100" cy="300" r="5" fill="#4488ff" />
                        <circle cx="100" cy="500" r="5" fill="#4488ff" />
                        <circle cx="300" cy="500" r="5" fill="#4488ff" />
                      </svg>

                      {/* HUD Elements */}
                      <div className="absolute top-4 left-4 text-xs text-blue-300">
                        <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>ROUTE ANALYSIS ACTIVE</span>
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 text-xs text-blue-300">
                        <div>NODES: 12</div>
                        <div>EDGES: 16</div>
                        <div>THREAT ZONES: 2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 h-full w-full bg-blue-500/5 rounded-lg border border-blue-500/10 -z-10"></div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-200">Risk-Aware Routing</h3>
                <p className="text-blue-300">
                  The system constructs a weighted graph representation of the road network, with edges weighted by both
                  distance and risk factors.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-300">01</span>
                    </div>
                    <div>
                      <h4 className="text-blue-200 font-bold">Graph Construction</h4>
                      <p className="text-blue-300 text-sm mt-1">
                        Road networks are represented as nodes and edges with weighted risk values.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-300">02</span>
                    </div>
                    <div>
                      <h4 className="text-blue-200 font-bold">Threat Zone Intersection</h4>
                      <p className="text-blue-300 text-sm mt-1">
                        Calculates where routes intersect with threat zones using geospatial algorithms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-300">03</span>
                    </div>
                    <div>
                      <h4 className="text-blue-200 font-bold">Dynamic Rerouting</h4>
                      <p className="text-blue-300 text-sm mt-1">
                        Real-time updates to threat zones trigger automatic recalculation of optimal routes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-blue-500/30 bg-blue-900/10 rounded-lg">
                <h4 className="text-blue-200 font-bold mb-2">Edge Weight Formula</h4>
                <div className="font-mono text-sm text-blue-300 bg-navy-950 p-3 rounded border border-blue-500/20">
                  weight = α·distance + β·(length_inside_threat / total_length)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative z-10 py-16 bg-navy-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-100 inline-block relative">
              Tech Stack & Algorithms
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500/50"></span>
            </h2>
            <p className="text-blue-300 mt-4 max-w-2xl mx-auto">
              Built with cutting-edge technologies for reliable performance in mission-critical scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative border border-blue-500/30 bg-navy-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-200 mb-4">Frontend</h3>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <span className="font-bold">React</span>
                    <p className="text-xs text-blue-300/80">Component-based UI architecture</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <span className="font-bold">Leaflet/Mapbox</span>
                    <p className="text-xs text-blue-300/80">Interactive mapping capabilities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <span className="font-bold">Turf.js</span>
                    <p className="text-xs text-blue-300/80">Advanced geospatial analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <span className="font-bold">D3.js</span>
                    <p className="text-xs text-blue-300/80">Data visualization</p>
                  </div>
                </li>
              </ul>
              <svg className="absolute bottom-3 right-3 h-16 w-16 text-blue-500/10" viewBox="0 0 100 100">
                <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="40" y="40" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative border border-blue-500/30 bg-navy-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-200 mb-4">Backend</h3>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <span className="font-bold">Node.js</span>
                    <p className="text-xs text-blue-300/80">Server-side JavaScript runtime</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <span className="font-bold">Express</span>
                    <p className="text-xs text-blue-300/80">Web application framework</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <span className="font-bold">Dijkstra/A* Implementation</span>
                    <p className="text-xs text-blue-300/80">Custom pathfinding algorithms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <span className="font-bold">WebSockets</span>
                    <p className="text-xs text-blue-300/80">Real-time updates</p>
                  </div>
                </li>
              </ul>
              <svg className="absolute bottom-3 right-3 h-16 w-16 text-blue-500/10" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M50,20 L50,80 M20,50 L80,50" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative border border-blue-500/30 bg-navy-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-200 mb-4">Data</h3>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <span className="font-bold">GeoJSON</span>
                    <p className="text-xs text-blue-300/80">Geospatial data format</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <span className="font-bold">OpenStreetMap</span>
                    <p className="text-xs text-blue-300/80">Base map data</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <span className="font-bold">In-memory Graph</span>
                    <p className="text-xs text-blue-300/80">Optimized data structure for routing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <span className="font-bold">MongoDB</span>
                    <p className="text-xs text-blue-300/80">Route history and configuration storage</p>
                  </div>
                </li>
              </ul>
              <svg className="absolute bottom-3 right-3 h-16 w-16 text-blue-500/10" viewBox="0 0 100 100">
                <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M30,30 L20,20 M70,30 L80,20 M30,70 L20,80 M70,70 L80,80"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Scenarios */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-100 inline-block relative">
              Deployment Scenarios
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500/50"></span>
            </h2>
            <p className="text-blue-300 mt-4 max-w-2xl mx-auto">
              PathRakshak is designed for diverse operational environments and mission profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Scenario 1 */}
            <div className="relative border border-blue-500/30 bg-navy-900/50 p-6 rounded-lg group hover:bg-navy-800/30 transition-colors">
              <div className="absolute inset-0 bg-blue-500/5 rounded-lg transform scale-0 group-hover:scale-100 transition-transform"></div>
              <div className="relative z-10">
                <div className="h-48 mb-4 border border-blue-500/30 rounded bg-navy-950/50 overflow-hidden relative">
                  {/* Mountain Terrain Blueprint */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                    <path
                      d="M0,150 L50,100 L100,120 L150,80 L200,110 L250,70 L300,90 L350,60 L400,100 L400,200 L0,200 Z"
                      fill="#0066aa20"
                      stroke="#0088cc"
                      strokeWidth="1"
                    />
                    <path
                      d="M0,180 L50,160 L100,170 L150,150 L200,165 L250,145 L300,155 L350,140 L400,160 L400,200 L0,200 Z"
                      fill="#0066aa30"
                      stroke="#0088cc"
                      strokeWidth="1"
                    />

                    {/* Route */}
                    <path
                      d="M50,180 C100,170 150,160 200,170 C250,180 300,170 350,180"
                      fill="none"
                      stroke="#00ff00"
                      strokeWidth="2"
                      strokeDasharray="5,3"
                    />

                    {/* Danger Zone */}
                    <path
                      d="M150,120 C180,100 220,100 250,120 C280,140 280,170 250,190 C220,210 180,210 150,190 C120,170 120,140 150,120"
                      fill="#ff000020"
                      stroke="#ff0000"
                      strokeWidth="1"
                      className="animate-pulse"
                    />

                    {/* Start/End Points */}
                    <circle cx="50" cy="180" r="5" fill="#00aaff" />
                    <circle cx="350" cy="180" r="5" fill="#00aaff" />
                  </svg>

                  <div className="absolute bottom-2 left-2 text-xs text-blue-300">
                    <div>TERRAIN: MOUNTAINOUS</div>
                    <div>ELEVATION: 1200-3500M</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-200 mb-2">Border Convoy in Mountains</h3>
                <p className="text-blue-300 text-sm">
                  Navigate challenging mountain terrain with limited road networks while avoiding hostile zones and
                  accounting for elevation constraints.
                </p>

                <div className="mt-4 pt-4 border-t border-blue-500/20">
                  <div className="flex justify-between text-xs text-blue-300">
                    <span>Key Challenges:</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-blue-300">
                    <li className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 mr-2"></span>
                      Limited route options
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 mr-2"></span>
                      Steep terrain constraints
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 mr-2"></span>
                      Weather vulnerability
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="relative border border-blue-500/30 bg-navy-900/50 p-6 rounded-lg group hover:bg-navy-800/30 transition-colors">
              <div className="absolute inset-0 bg-blue-500/5 rounded-lg transform scale-0 group-hover:scale-100 transition-transform"></div>
              <div className="relative z-10">
                <div className="h-48 mb-4 border border-blue-500/30 rounded bg-navy-950/50 overflow-hidden relative">
                  {/* Urban Blueprint */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                    {/* Grid Streets */}
                    <path
                      d="M50,50 L350,50 M50,100 L350,100 M50,150 L350,150 M100,25 L100,175 M200,25 L200,175 M300,25 L300,175"
                      stroke="#0088cc"
                      strokeWidth="1"
                    />

                    {/* Buildings */}
                    <rect x="60" y="60" width="30" height="30" fill="#0066aa20" stroke="#0088cc" strokeWidth="1" />
                    <rect x="120" y="60" width="40" height="30" fill="#0066aa20" stroke="#0088cc" strokeWidth="1" />
                    <rect x="220" y="60" width="30" height="30" fill="#0066aa20" stroke="#0088cc" strokeWidth="1" />
                    <rect x="270" y="60" width="20" height="30" fill="#0066aa20" stroke="#0088cc" strokeWidth="1" />

                    <rect x="60" y="110" width="30" height="30" fill="#0066aa20" stroke="#0088cc" strokeWidth="1" />
                    <rect x="120" y="110" width="70" height="30" fill="#0066aa20" stroke="#0088cc" strokeWidth="1" />
                    <rect x="240" y="110" width="50" height="30" fill="#0066aa20" stroke="#0088cc" strokeWidth="1" />

                    {/* Danger Zones */}
                    <rect
                      x="210"
                      y="50"
                      width="80"
                      height="50"
                      fill="#ff000020"
                      stroke="#ff0000"
                      strokeWidth="1"
                      className="animate-pulse"
                    />
                    <rect
                      x="110"
                      y="100"
                      width="90"
                      height="50"
                      fill="#ff000020"
                      stroke="#ff0000"
                      strokeWidth="1"
                      className="animate-pulse"
                    />

                    {/* Route */}
                    <path
                      d="M50,50 L100,50 L100,150 L300,150 L300,50 L350,50"
                      fill="none"
                      stroke="#00ff00"
                      strokeWidth="2"
                      strokeDasharray="5,3"
                    />

                    {/* Start/End Points */}
                    <circle cx="50" cy="50" r="5" fill="#00aaff" />
                    <circle cx="350" cy="50" r="5" fill="#00aaff" />
                  </svg>

                  <div className="absolute bottom-2 left-2 text-xs text-blue-300">
                    <div>TERRAIN: URBAN</div>
                    <div>DENSITY: HIGH</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-200 mb-2">Urban Route with Civil Unrest</h3>
                <p className="text-blue-300 text-sm">
                  Navigate through dense urban environments with multiple civil unrest zones, roadblocks, and dynamic
                  threat patterns.
                </p>

                <div className="mt-4 pt-4 border-t border-blue-500/20">
                  <div className="flex justify-between text-xs text-blue-300">
                    <span>Key Challenges:</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-blue-300">
                    <li className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 mr-2"></span>
                      Rapidly changing threat zones
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 mr-2"></span>
                      Civilian population density
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 mr-2"></span>
                      Multiple route options
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="relative border border-blue-500/30 bg-navy-900/50 p-6 rounded-lg group hover:bg-navy-800/30 transition-colors">
              <div className="absolute inset-0 bg-blue-500/5 rounded-lg transform scale-0 group-hover:scale-100 transition-transform"></div>
              <div className="relative z-10">
                <div className="h-48 mb-4 border border-blue-500/30 rounded bg-navy-950/50 overflow-hidden relative">
                  {/* Night Blueprint */}
                  <div className="absolute inset-0 bg-navy-950"></div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                    {/* Terrain */}
                    <path
                      d="M0,150 C50,140 100,160 150,150 C200,140 250,160 300,150 C350,140 400,160 400,150 L400,200 L0,200 Z"
                      fill="#0066aa10"
                      stroke="#0088cc"
                      strokeWidth="1"
                    />

                    {/* Roads */}
                    <path
                      d="M50,50 L350,50 M50,100 L350,100 M50,150 L350,150 M100,25 L100,175"
                      stroke="#0088cc50"
                      strokeWidth="1"
                    />

                    {/* Danger Zones */}
                    <circle
                      cx="150"
                      cy="80"
                      r="40"
                      fill="#ff000020"
                      stroke="#ff0000"
                      strokeWidth="1"
                      className="animate-pulse"
                    />
                    <circle
                      cx="250"
                      cy="120"
                      r="30"
                      fill="#ff000020"
                      stroke="#ff0000"
                      strokeWidth="1"
                      className="animate-pulse"
                    />
                    <circle
                      cx="300"
                      cy="60"
                      r="25"
                      fill="#ff000020"
                      stroke="#ff0000"
                      strokeWidth="1"
                      className="animate-pulse"
                    />

                    {/* Route */}
                    <path
                      d="M50,50 L100,50 L100,150 L200,150 L200,100 L350,100"
                      fill="none"
                      stroke="#00ff00"
                      strokeWidth="2"
                      strokeDasharray="5,3"
                    />

                    {/* Start/End Points */}
                    <circle cx="50" cy="50" r="5" fill="#00aaff" />
                    <circle cx="350" cy="100" r="5" fill="#00aaff" />
                  </svg>

                  <div className="absolute bottom-2 left-2 text-xs text-blue-300">
                    <div>CONDITION: NIGHT-TIME</div>
                    <div>VISIBILITY: LOW</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-200 mb-2">Night-time Movement</h3>
                <p className="text-blue-300 text-sm">
                  Plan and execute night-time movements avoiding airstrike zones, enemy surveillance, and maximizing
                  stealth capabilities.
                </p>

                <div className="mt-4 pt-4 border-t border-blue-500/20">
                  <div className="flex justify-between text-xs text-blue-300">
                    <span>Key Challenges:</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-blue-300">
                    <li className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 mr-2"></span>
                      Limited visibility
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 mr-2"></span>
                      Airstrike avoidance
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 mr-2"></span>
                      Stealth prioritization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative z-10 py-16 bg-navy-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-100 inline-block relative">
              Key Features
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500/50"></span>
            </h2>
            <p className="text-blue-300 mt-4 max-w-2xl mx-auto">
              PathRakshak provides comprehensive tools for mission planning and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="flex items-start space-x-4 p-4 border border-blue-500/30 bg-navy-900/50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-200">Draw Threat Zones Manually</h3>
                <p className="text-blue-300 text-sm mt-1">
                  Manually define and adjust threat zones on the map with intuitive drawing tools.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 border border-blue-500/30 bg-navy-900/50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                <Globe className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-200">Real-time Route Updates</h3>
                <p className="text-blue-300 text-sm mt-1">
                  Routes automatically recalculate as threat zones change or new intelligence is received.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 border border-blue-500/30 bg-navy-900/50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-200">Supports Offline Map Overlays</h3>
                <p className="text-blue-300 text-sm mt-1">
                  Pre-load map data for offline use in areas with limited connectivity.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 border border-blue-500/30 bg-navy-900/50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                <Truck className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-200">Custom Risk Scoring Matrix</h3>
                <p className="text-blue-300 text-sm mt-1">
                  Customize risk parameters based on mission requirements and convoy characteristics.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 border border-blue-500/30 bg-navy-900/50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                <GitBranch className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-200">GeoJSON Import/Export</h3>
                <p className="text-blue-300 text-sm mt-1">
                  Seamlessly import and export route data in standard GeoJSON format for interoperability.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 border border-blue-500/30 bg-navy-900/50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                <FileDown className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-200">PDF Briefing Export</h3>
                <p className="text-blue-300 text-sm mt-1">
                  Generate comprehensive mission briefings with route details for commanders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto border border-blue-500/30 bg-navy-900/50 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-100">Ready for Deployment</h2>
                <p className="text-blue-300 mt-4 max-w-2xl mx-auto">
                  PathRakshak is built for the Indian Army's most challenging logistics scenarios. Request access to
                  deploy this system for your unit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-6 py-3 bg-blue-600/20 border border-blue-500 text-blue-100 hover:bg-blue-500/30 transition-colors rounded relative overflow-hidden group">
                  <span className="relative z-10">Request System Access</span>
                  <span className="absolute inset-0 bg-blue-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </button>
                <button className="px-6 py-3 border border-blue-500/50 text-blue-300 hover:bg-blue-900/30 transition-colors rounded">
                  Technical Documentation
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-500/20 text-center">
                <p className="text-blue-300 text-sm">
                  <span className="text-blue-200 font-bold">SECURITY NOTICE:</span> PathRakshak is a classified system.
                  Authorized personnel only.
                </p>
              </div>
            </div>

            {/* Circuit Board Pattern */}
            <svg className="absolute bottom-0 right-0 h-64 w-64 text-blue-500/5" viewBox="0 0 200 200">
              <path d="M20,20 L180,20 L180,180 L20,180 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M40,40 L160,40 L160,160 L40,160 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M60,60 L140,60 L140,140 L60,140 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M80,80 L120,80 L120,120 L80,120 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <path
                d="M20,20 L40,40 M180,20 L160,40 M20,180 L40,160 M180,180 L160,160"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M60,60 L80,80 M140,60 L120,80 M60,140 L80,120 M140,140 L120,120"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M20,100 L80,100 M120,100 L180,100 M100,20 L100,80 M100,120 L100,180"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-500/30 bg-navy-950/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative h-8 w-8 mr-2">
                <CircuitBoard className="h-8 w-8 text-blue-400" />
              </div>
              <span className="text-lg font-bold tracking-wider text-blue-300">PathRakshak</span>
            </div>

            <div className="text-center md:text-right text-xs text-blue-300/70">
              <p>© {new Date().getFullYear()} Indian Army - Strategic Systems Division</p>
              <p className="mt-1">CLASSIFIED // FOR OFFICIAL USE ONLY</p>
              <p className="mt-1">Jagath's idea for the army</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
