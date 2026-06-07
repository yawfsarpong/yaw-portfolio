export const PROJECTS = [
  {
    id: 'cap-and-trap',
    num: '01',
    tier: 'primary',
    title: 'Cap and Trap',
    tagline: 'Science communication design: how the deep ocean hid 100 parts per million of atmospheric CO₂ during the Last Glacial Maximum.',
    discipline: 'Science Communication  ·  Data Visualisation  ·  Editorial Design',
    accentColor: '#14B8A6',
    tags: ['Palaeoclimate', 'Deep Ocean', 'Science Comm'],
    year: '2024',

    heroEyebrow: 'Palaeoclimate  ·  Deep Ocean Systems',
    heroBrief: 'During the Last Glacial Maximum, 80 to 100 ppmv of atmospheric CO₂ disappeared from the sky. The science explaining where it went existed in an MSc thesis. This project designed the story that made it visible.',

    slides: [
      '/media/cap-and-trap/slide-01.jpg',
      '/media/cap-and-trap/slide-02.jpg',
      '/media/cap-and-trap/slide-03.jpg',
      '/media/cap-and-trap/slide-04.jpg',
      '/media/cap-and-trap/slide-05.jpg',
      '/media/cap-and-trap/slide-06.jpg',
      '/media/cap-and-trap/slide-07.jpg',
      '/media/cap-and-trap/slide-08.jpg',
      '/media/cap-and-trap/slide-09.jpg',
      '/media/cap-and-trap/slide-10.jpg',
      '/media/cap-and-trap/slide-11.jpg',
      '/media/cap-and-trap/slide-12.jpg',
      '/media/cap-and-trap/slide-13.jpg',
    ],
    video: '/media/cap-and-trap/cap-and-trap-video.mp4',

    problemStatement: 'During the Last Glacial Maximum (LGM), approximately 20,000 years ago, Earth\'s atmosphere held 80 to 100 ppmv less CO₂ than during warm interglacial periods. With the terrestrial biosphere smaller in the ice age, only one reservoir was large enough to absorb that deficit: the deep ocean. The mechanism was scientifically contested, and the science, locked inside academic papers, was invisible to any public audience.',
    problemMetrics: [
      { value: '100 ppm', label: 'atmospheric CO₂ deficit during the Last Glacial Maximum' },
      { value: '5,730 yr', label: 'radiocarbon half-life, the clock used to read ocean age' },
      { value: '20,000', label: 'years ago, the Last Glacial Maximum' },
    ],

    researchTitle: 'Reading the science before designing the story',
    researchBody: 'The research foundation was the MSc thesis completed at the University of Bremen: "Using natural radiocarbon to constrain modeled water mass ages in the deep Pacific for preindustrial and last glacial maximum time slices" (2020). The work ran the MIT general circulation model (MITgcm) across two climate states, Pre-Industrial and LGM, and tested two competing mechanisms. The Cap: expanded Southern Ocean sea ice (33 million km²) acting as a physical lid, blocking deep CO₂ from outgassing. The Trap: sluggish deep circulation, slowed to roughly 30% of its normal strength, pooling carbon in the abyss instead of returning it to the surface.',
    researchMethods: [
      'MIT general circulation model (MITgcm), full ocean simulation across two climate states',
      'Pre-Industrial and LGM boundary conditions, plus-ice and minus-ice experiments',
      'GLODAP empirical radiocarbon dataset for model calibration against observations',
      'Radiocarbon age analysis (δ14C) across depth profiles and ocean basins',
      'AMOC transport and Deacon Cell overturning comparison across climate states',
      'Python (NumPy, matplotlib), MITgcm model output post-processing and δ14C depth profile analysis',
    ],

    process: [
      {
        step: '01', label: 'Reading the Data',
        body: 'Extracted key findings from the thesis: AMOC collapsed from 25.5 Sv to 12.0 Sv; the LGM North Atlantic reversed from a circulation engine to a stagnant reservoir; the deep North Pacific became the oldest water mass on Earth, with a volume-weighted radiocarbon age of 2,450 years.',
        img: 'Thesis Extraction  ·  Data Mapping',
        slideIdx: 0,
      },
      {
        step: '02', label: 'Story Architecture',
        body: 'Mapped the scientific argument into a 13-slide narrative: establish the mystery, explain the radiocarbon clock, introduce the two suspects, simulate both climate states, confirm each mechanism, and reveal the deep Pacific as the abyssal vault. Each slide carries one claim.',
        img: 'Narrative Arc  ·  Slide Map',
        slideIdx: 2,
      },
      {
        step: '03', label: 'Visual Design',
        body: 'Python generated the original thesis figures for scientific publication. Those were rebuilt from scratch as public-facing visual narratives: deep ocean blues, high-contrast overlays, and paired comparison maps that translated the model output into something a general audience could read without a physics background.',
        img: 'Slide Design  ·  Visual Language',
        slideIdx: 6,
      },
      {
        step: '04', label: 'Science Simplification',
        body: 'The hardest design decision was naming the two mechanisms. "Cap" and "Trap" reduced complex oceanographic processes to two physical metaphors: a lid that blocked escape, a vault that slowed return. Together they account for 100 ppmv of missing atmospheric CO₂, without losing the science.',
        img: 'Language Iteration  ·  Metaphor Testing',
        slideIdx: 12,
      },
    ],

    solutionTitle: 'A 13-slide cinematic narrative, built on an MSc thesis',
    solutionBody: 'Cap and Trap translates an oceanography thesis into a public-facing science communication presentation and narrated video. The LGM circulation was approximately 30% weaker than pre-industrial (AMOC: 25.5 Sv to 12.0 Sv). Sea ice expanded to 33 million km², sealing the Southern Ocean surface. The deep North Pacific, starved of flushing, became an abyssal vault hosting water with a volume-weighted radiocarbon age of 2,450 years. Together, the Cap and the Trap sequestered 100 ppmv of atmospheric CO₂.',
    solutionMetrics: [
      { value: '13', label: 'science communication slides in the final presentation' },
      { value: '~30%', label: 'reduction in LGM ocean circulation strength (AMOC: 25.5 to 12.0 Sv)' },
      { value: '2,450 yr', label: 'volume-weighted radiocarbon age of glacial deep Pacific water' },
    ],

    reflectionQuote: 'The data existed. The story did not. Design was the bridge between a thesis nobody would read and a mystery everyone should know about.',
    reflectionBody: 'Science communication is not simplification. It is translation. Every choice to name, visualise, or sequence the data carried consequences for how the science landed. The most important moment was realising that "Cap" and "Trap" were not just good names — they were accurate ones. The metaphors were already in the science. They just needed to be surfaced.',
  },

  {
    id: 'charge-corridor',
    num: '02',
    tier: 'primary',
    title: 'Charge Corridor',
    tagline: 'A viability analysis of UK EV charging infrastructure gaps on the freight corridors that carry 70% of the country\'s road goods.',
    discipline: 'Transport Systems  ·  Infrastructure Analysis  ·  Data Design',
    accentColor: '#52B788',
    tags: ['Zero Emission Transport', 'EV Infrastructure', 'UK Freight'],
    year: '2025',

    slides: [
      '/media/charge-corridor/corridor-viability.jpg',
      '/media/charge-corridor/charging-gap.jpg',
      '/media/charge-corridor/slide-03.jpg',
      '/media/charge-corridor/slide-04.jpg',
      '/media/charge-corridor/slide-05.jpg',
      '/media/charge-corridor/slide-06.jpg',
      '/media/charge-corridor/slide-07.jpg',
      '/media/charge-corridor/slide-08.jpg',
      '/media/charge-corridor/slide-09.jpg',
      '/media/charge-corridor/slide-10.jpg',
      '/media/charge-corridor/slide-11.jpg',
      '/media/charge-corridor/slide-12.jpg',
    ],

    heroEyebrow: 'EV Infrastructure  ·  UK Strategic Road Network',
    heroBrief: 'The UK has committed to zero emission freight by 2040. But the charging network on the Strategic Road Network has gaps that make ZE HGV routes commercially unviable today. This project mapped where those gaps are largest and what closing them requires.',

    problemStatement: 'Zero-emission HGVs need charging infrastructure within viable dwell distances of every major freight corridor. Gaps in motorway service area coverage, grid capacity constraints, and inconsistent deployment planning leave operators facing a patchwork network that makes route planning unreliable and ZE fleet transition financially risky before it begins.',
    problemMetrics: [
      { value: '70%', label: 'of UK HGV freight moves along just 8 major motorway corridors' },
      { value: '350 kW', label: 'minimum charge rate required for viable commercial HGV turnaround windows' },
      { value: '2040', label: 'UK target year for zero emission new HGV sales, with infrastructure readiness still lagging' },
    ],

    researchTitle: 'Following the freight before designing the framework',
    researchBody: 'Four years managing vehicle lifecycle performance and infrastructure delivery programmes in the UK meant the freight corridor problem was familiar before the analysis started. The work pulled together route density data, existing charge point locations, and grid constraint maps to surface the corridors where the gap is largest. Not every charger on the network, just where the gaps make ZE fleet operation commercially impossible.',
    researchMethods: [
      'UK freight route density analysis using Department for Transport traffic count data',
      'Existing charge point mapping against motorway service area locations',
      'Grid capacity constraint analysis using NESO distribution network maps',
      'Fleet operator consultation: charge window requirements and dwell constraints',
      'Zero Emission HGV Demonstration cohort infrastructure data synthesis',
    ],

    process: [
      {
        step: '01', label: 'Route Analysis', slideIdx: 3,
        body: 'Identified the eight corridors carrying 70% of UK HGV freight. Mapped existing high-power charge points (150 kW and above) against each corridor and calculated viable refuelling intervals for 19-tonne and 44-tonne ZE configurations.',
        img: 'Corridor Map  ·  Charge Point Audit',
      },
      {
        step: '02', label: 'Gap Modelling', slideIdx: 7,
        body: 'Built a grid capacity layer over the corridor map. Found that several motorway service areas with high dwell demand sit in areas where grid reinforcement would add 18 to 24 months to any deployment timeline, regardless of planning decisions.',
        img: 'Gap Model  ·  Grid Constraint Layer',
      },
      {
        step: '03', label: 'Viability Scoring', slideIdx: 9,
        body: 'Developed a viability index for each corridor: charge availability ratio (viable chargers per freight movement), maximum gap distance, and grid constraint risk score. Corridors scoring below the threshold represent structural barriers, not slow deployment.',
        img: 'Viability Index  ·  Corridor Scoring Matrix',
      },
      {
        step: '04', label: 'Decision Framework', slideIdx: 11,
        body: 'Translated the corridor scores into a prioritisation matrix for infrastructure investment. Outputs were designed for two audiences: fleet operators deciding which routes to transition first, and infrastructure planners deciding where to deploy next.',
        img: 'Investment Matrix  ·  Operator and Planner Views',
      },
    ],

    solutionTitle: 'A viability map for zero emission freight corridors',
    solutionBody: 'Charge Corridor is an infrastructure gap analysis that identifies where ZE HGV viability breaks down on the UK Strategic Road Network. Eight major corridors, scored against charge availability, grid capacity, and dwell window constraints. The framework gives fleet operators a clear picture of which routes can transition now and which need infrastructure investment first.',
    solutionMetrics: [
      { value: '8', label: 'major freight corridors scored for ZE operational viability' },
      { value: '350 kW', label: 'minimum charge rate threshold for commercial HGV viability' },
      { value: '2 views', label: 'fleet operator and infrastructure planner perspectives on the same dataset' },
    ],

    reflectionQuote: 'Zero emission freight is an infrastructure problem before it is a vehicle problem. The vehicles exist. The network does not.',
    reflectionBody: 'The temptation was to recommend specific charger locations. That is an engineering task, not a design one. The actual work was simpler and harder: make the gap legible in terms that fleet operators and planners could both act on. Viability scoring was the translation layer. It converted corridor-level data into a shared language for two audiences who had been looking at the same problem from different angles.',
  },

  {
    id: 'shore-power',
    num: '03',
    tier: 'primary',
    title: 'Shore Power',
    tagline: 'A systems framework for assessing UK port readiness for zero emission shipping, from cold ironing to hydrogen bunkering.',
    discipline: 'Maritime Systems  ·  Infrastructure Design  ·  Science Communication',
    accentColor: '#14B8A6',
    tags: ['Clean Maritime', 'Port Infrastructure', 'Zero Emission Shipping'],
    year: '2025',

    slides: [
      '/media/shore-power/port-readiness-radar.jpg',
      '/media/shore-power/technology-pathway.jpg',
      '/media/shore-power/slide-03.jpg',
      '/media/shore-power/slide-04.jpg',
      '/media/shore-power/slide-05.jpg',
      '/media/shore-power/slide-06.jpg',
      '/media/shore-power/slide-07.jpg',
      '/media/shore-power/slide-08.jpg',
      '/media/shore-power/slide-09.jpg',
      '/media/shore-power/slide-10.jpg',
      '/media/shore-power/slide-11.jpg',
      '/media/shore-power/slide-12.jpg',
    ],

    heroEyebrow: 'Clean Maritime  ·  UK Port Infrastructure',
    heroBrief: 'Shipping produces approximately 3% of global CO₂ emissions. UK ports are where the physical infrastructure of decarbonisation meets the commercial realities of international freight. This project built the framework for understanding how ready those ports actually are.',

    problemStatement: 'Decarbonising UK shipping requires port infrastructure to evolve in parallel with vessel technology. Shore power (cold ironing), hydrogen bunkering, and ammonia supply chains each carry different infrastructure requirements, grid dependencies, and lead times. No integrated framework existed to assess where UK ports sit on this readiness spectrum, or what sequence of investment would move them forward most efficiently.',
    problemMetrics: [
      { value: '~3%', label: 'of global CO₂ comes from international shipping' },
      { value: '£206M', label: 'UK government SHORE programme investment in clean maritime infrastructure to 2025' },
      { value: '2050', label: 'IMO target year for net zero international shipping emissions' },
    ],

    researchTitle: 'Understanding port systems before designing the assessment',
    researchBody: 'Port decarbonisation is not a single problem. It is a layered system of energy infrastructure, vessel schedules, cargo handling, regulatory obligations, and commercial pressure. Mapping that system had to happen before any useful design decisions could be made. The research pulled in data from UK port authority consultations, SHORE competition outputs, and IMO strategy documents, combined with direct operational experience from large-scale infrastructure delivery programmes.',
    researchMethods: [
      'UK port authority consultations: energy, operations, and sustainability teams',
      'UK SHORE Clean Maritime Demonstration Competition cohort output review',
      'IMO GHG strategy analysis cross-referenced with the UK Clean Maritime Plan',
      'Berth-level power demand modelling by vessel type and average dwell window',
      'Technology readiness assessment: shore power, green hydrogen, methanol, and ammonia pathways',
    ],

    process: [
      {
        step: '01', label: 'System Mapping', slideIdx: 4,
        body: 'Mapped the full UK port decarbonisation system: vessel energy demand by type and dwell time, berth power availability, grid connection constraints, and proximity to hydrogen production or distribution assets.',
        img: 'Port System Map  ·  Energy Flow Diagram',
      },
      {
        step: '02', label: 'Readiness Index', slideIdx: 0,
        body: 'Developed a port readiness index across four dimensions: grid capacity, land availability for energy infrastructure, vessel fleet composition at berth, and regulatory status. Each dimension was scored independently before being combined into a port-level score.',
        img: 'Readiness Index  ·  Four-Dimension Model',
      },
      {
        step: '03', label: 'Technology Matching', slideIdx: 6,
        body: 'Different vessel types require different zero-emission fuel pathways. Short-sea ferries and coastal vessels align with battery systems and shore power. Deep-sea container ships require hydrogen, ammonia, or methanol bunkering. The framework matched technology pathway to fleet profile at each port.',
        img: 'Technology Pathway Matrix  ·  Fleet Profile Map',
      },
      {
        step: '04', label: 'Port Brief Template', slideIdx: 10,
        body: 'Translated the readiness index and technology pathway into a one-page port decarbonisation brief: a shared starting document giving port authorities, vessel operators, and investors a common picture of what readiness means at a specific location.',
        img: 'Port Brief Template  ·  Stakeholder Alignment Format',
      },
    ],

    solutionTitle: 'A readiness framework for zero emission UK ports',
    solutionBody: 'Shore Power is a decarbonisation readiness assessment covering the UK port estate. Each assessment produces a four-dimension readiness score, a technology pathway recommendation matched to the vessel fleet at that port, and a prioritised infrastructure investment brief. The framework was designed to align port authorities, vessel operators, and infrastructure investors around a common picture of what readiness means and what sequence of investment makes most sense.',
    solutionMetrics: [
      { value: '4', label: 'readiness dimensions scored per port: grid, land, fleet, regulation' },
      { value: '3', label: 'zero emission fuel pathways assessed and matched to vessel type' },
      { value: '1 page', label: 'port decarbonisation brief designed for alignment across multiple stakeholders' },
    ],

    reflectionQuote: 'Port decarbonisation is not a technology problem. It is a coordination problem between organisations that have never had to work on the same timeline.',
    reflectionBody: 'The port brief template turned out to be more useful than the readiness index. It gave port authorities, vessel operators, and infrastructure investors a shared vocabulary they could all work from. Each group had been planning independently, with no reference point that showed where the others were starting from. Getting that alignment in place was the actual design task. It required holding the oceanographic science and the operational reality of large-scale infrastructure delivery in the same frame at the same time.',
  },

  {
    id: 'fleet-zero',
    num: '04',
    tier: 'secondary',
    title: 'Fleet Zero',
    tagline: 'A lifecycle planning framework for commercial fleet operators transitioning to zero emission vehicles.',
    discipline: 'Systems Design  ·  Operational Analysis  ·  Transport',
    accentColor: '#52B788',
    tags: ['Fleet Transition', 'ZE HGV', 'Lifecycle Planning'],
    year: '2024',

    slides: [
      '/media/fleet-zero/whole-life-cost.jpg',
      '/media/fleet-zero/fleet-readiness.jpg',
      '/media/fleet-zero/slide-03.jpg',
      '/media/fleet-zero/slide-04.jpg',
      '/media/fleet-zero/slide-05.jpg',
      '/media/fleet-zero/slide-06.jpg',
      '/media/fleet-zero/slide-07.jpg',
      '/media/fleet-zero/slide-08.jpg',
      '/media/fleet-zero/slide-09.jpg',
      '/media/fleet-zero/slide-10.jpg',
      '/media/fleet-zero/slide-11.jpg',
      '/media/fleet-zero/slide-12.jpg',
    ],

    heroEyebrow: 'Fleet Transition  ·  Zero Emission Vehicles',
    heroBrief: 'Fleet operators face a transition decision that spans multiple years, significant capital outlay, and real operational risk. The data to make that decision exists. No single framework brought it together in terms operators could act on internally.',

    problemStatement: 'Transitioning a commercial fleet to zero emission vehicles is not a single procurement decision. It involves vehicle lead times running to 18 months or longer, depot charging infrastructure investment, route viability analysis, and a total cost of ownership calculation that changes as energy prices shift. Most operators were making these decisions one vehicle at a time, without a portfolio view of where the transition risk was concentrated.',
    problemMetrics: [
      { value: '£450K+', label: 'typical purchase price for a 44-tonne zero emission HGV' },
      { value: '18-36 months', label: 'typical lead time from fleet decision to first ZE vehicle delivered' },
      { value: '3x', label: 'higher upfront cost versus diesel equivalent, before whole-life comparison' },
    ],

    researchTitle: 'Understanding the decision before designing the framework',
    researchBody: 'Years of managing vehicle lifecycle performance and programme delivery across large-scale EV infrastructure rollouts meant the fleet transition decision was familiar territory before the analysis started. The research mapped the full transition journey from initial assessment through to first-year operational performance. The framework was built to serve operators who needed a credible internal business case as much as those who needed route-level operational data.',
    researchMethods: [
      'Fleet operator interviews: procurement, operations, and sustainability leads',
      'Total cost of ownership modelling across diesel, BEV, and FCEV configurations',
      'Depot charging infrastructure requirement mapping by fleet size and duty cycle',
      'Zero Emission HGV Demonstration cohort operational data review',
      'Route viability analysis: range, payload, and charge window constraints',
    ],

    process: [
      {
        step: '01', label: 'Decision Mapping', slideIdx: 2,
        body: 'Mapped the complete fleet transition decision tree: which vehicles to phase in first, which depot infrastructure to build first, and which routes to electrify before others. Most operators were making route-level decisions without a portfolio view of where the transition risk sat.',
        img: 'Decision Tree  ·  Portfolio vs Route View',
      },
      {
        step: '02', label: 'Cost Modelling', slideIdx: 3,
        body: 'Built a whole-life cost comparison model across diesel, battery electric, and fuel cell configurations. The key variable was energy price and grid tariff assumptions, which determine break-even year more decisively than vehicle purchase price.',
        img: 'Whole-Life Cost Model  ·  Break-Even Sensitivity Analysis',
      },
      {
        step: '03', label: 'Readiness Assessment', slideIdx: 5,
        body: 'Developed a fleet readiness assessment covering three domains: route analysis (duty cycle against vehicle range), depot assessment (power capacity and land for charge infrastructure), and operational assessment (driver training and scheduling changes required).',
        img: 'Readiness Assessment  ·  Three-Domain Scoring',
      },
      {
        step: '04', label: 'Transition Roadmap', slideIdx: 8,
        body: 'Combined the cost model and readiness assessment into a phased transition roadmap template: a year-by-year sequence of vehicle introductions, infrastructure builds, and operational adjustments, with clear decision gates at each phase.',
        img: 'Phased Roadmap  ·  Decision Gate Template',
      },
    ],

    solutionTitle: 'A whole-fleet framework, not a route-by-route analysis',
    solutionBody: 'Fleet Zero is a lifecycle planning framework for commercial fleet operators transitioning to zero emission vehicles. It produces a whole-life cost comparison, a fleet readiness assessment, and a phased transition roadmap with clear decision gates. Designed to support the internal business case as much as the operational planning that follows a commitment to transition.',
    solutionMetrics: [
      { value: '3', label: 'powertrain configurations modelled: diesel, BEV, FCEV' },
      { value: '4 phases', label: 'structured transition roadmap with decision gates at each stage' },
      { value: '1 document', label: 'complete fleet brief for internal and external stakeholder alignment' },
    ],

    reflectionQuote: 'Fleet operators were not resistant to zero emission transition. They were waiting for a framework that made the risk legible.',
    reflectionBody: 'Most fleet transition decisions were stalling on internal business case quality, not on vehicle technology or charging infrastructure. That finding shaped the whole framework. A whole-life cost model with clear assumptions and sensitivity analysis turned out to be more useful than a route map. Operators could defend a well-structured cost model internally. A route analysis without financial grounding gave them nothing to take into a board conversation.',
  },

  {
    id: 'wayfinder',
    num: '05',
    tier: 'secondary',
    title: 'Wayfinder',
    tagline: 'Mapping where accessible transport infrastructure fails the 13.9 million UK residents who depend on it most.',
    discipline: 'Service Design  ·  Accessibility  ·  Geospatial Analysis',
    accentColor: '#F4A261',
    tags: ['Accessible Transport', 'Disability', 'UK Infrastructure'],
    year: '2024',

    slides: [
      '/media/wayfinder/step-free-access.jpg',
      '/media/wayfinder/compound-gap-scores.jpg',
      '/media/wayfinder/slide-03.jpg',
      '/media/wayfinder/slide-04.jpg',
      '/media/wayfinder/slide-05.jpg',
      '/media/wayfinder/slide-06.jpg',
      '/media/wayfinder/slide-07.jpg',
      '/media/wayfinder/slide-08.jpg',
      '/media/wayfinder/slide-09.jpg',
      '/media/wayfinder/slide-10.jpg',
      '/media/wayfinder/slide-11.jpg',
      '/media/wayfinder/slide-12.jpg',
    ],

    heroEyebrow: 'Accessible Transport  ·  UK Infrastructure',
    heroBrief: '13.9 million people in the UK live with a disability. A substantial proportion face transport systems that were not designed for them and have not been meaningfully upgraded. The infrastructure gap is real, consistent, and largely unmapped in any form that supports investment decisions.',

    problemStatement: 'Accessible transport is a legal requirement across UK rail, bus, and active travel infrastructure. The reality is uneven. Step-free access, real-time audio information, tactile wayfinding, and accessible waiting environments vary dramatically between operators, modes, and regions. No single consistent framework measures the infrastructure gap, which means investment decisions remain fragmented and under-evidenced.',
    problemMetrics: [
      { value: '13.9M', label: 'people in the UK living with a disability' },
      { value: '£72bn', label: 'estimated annual economic cost of inaccessible transport (Scope, 2023)' },
      { value: '40%', label: 'of UK rail stations without step-free access to all platforms' },
    ],

    researchTitle: 'Understanding the infrastructure before designing the map',
    researchBody: 'Operational experience across large infrastructure programmes and a background in quantitative environmental analysis shaped how this project approached the data. The work mapped physical and digital accessibility infrastructure across UK transport modes. The goal was not to audit individual stations or stops but to identify systemic patterns: where multiple accessibility failures compound, which populations are most affected, and where investment would create the largest shift in access.',
    researchMethods: [
      'Step-free access audit: UK rail stations using Office of Rail and Road published data',
      'Bus network coverage analysis against ONS disability prevalence by LSOA',
      'Active Travel England infrastructure ratings cross-referenced with disability hotspot data',
      'Disability organisation consultation: Scope, RNIB, Sense UK',
      'Department for Transport Inclusive Transport Strategy gap analysis',
    ],

    process: [
      {
        step: '01', label: 'Infrastructure Audit', slideIdx: 3,
        body: 'Mapped accessibility infrastructure across rail, bus, and active travel modes at local authority level, using Office of Rail and Road data, BODS bus stop accessibility ratings, and Department for Transport active travel quality scores.',
        img: 'Infrastructure Audit  ·  Multi-Mode Coverage Map',
      },
      {
        step: '02', label: 'Population Overlay', slideIdx: 1,
        body: 'Overlaid ONS disability prevalence data at LSOA level against the infrastructure audit. Identified compound failure zones: local authorities with high disability prevalence and low accessibility provision across multiple transport modes simultaneously.',
        img: 'Compound Failure Map  ·  Disability Prevalence Overlay',
      },
      {
        step: '03', label: 'Priority Scoring', slideIdx: 8,
        body: 'Built a compound accessibility gap score for each local authority: infrastructure deficit weighted against the size of the affected disabled population. The score identifies where investment would create the largest per-person improvement in access.',
        img: 'Priority Score  ·  Investment Impact Model',
      },
      {
        step: '04', label: 'Policy Brief', slideIdx: 10,
        body: 'Translated the priority framework into a policy brief format: a summary of the 20 compound failure zones with the highest scores, the specific infrastructure gaps in each, and a cross-modal intervention sequence for each area.',
        img: 'Policy Brief Template  ·  Cross-Modal Intervention Sequence',
      },
    ],

    solutionTitle: 'A compound accessibility gap map for UK transport',
    solutionBody: 'Wayfinder maps where accessible transport infrastructure fails at scale across the UK. A compound gap score combining infrastructure deficit and disability prevalence identifies the 20 local authority areas where multiple accessibility failures overlap most severely. Designed for transport operators, disability organisations, and policy makers who need a shared evidence base for investment and intervention decisions.',
    solutionMetrics: [
      { value: '20', label: 'compound failure zones identified across UK transport modes' },
      { value: '3 modes', label: 'rail, bus, and active travel assessed simultaneously' },
      { value: '£72bn', label: 'estimated annual economic cost of inaccessible transport' },
    ],

    reflectionQuote: 'Accessible transport is not a niche problem. It is the mainstream infrastructure failure that mainstream transport planning has consistently treated as peripheral.',
    reflectionBody: 'The compound failure map reframed the problem. Individual accessibility audits produce lists of broken lifts and missing ramps. The compound map shows which communities have no viable alternative when one mode fails. That shift from single-mode audit to cross-modal systems view is where the analytical and design work actually lives.',
  },

  {
    id: 'amoc-watch',
    num: '06',
    tier: 'secondary',
    title: 'AMOC Watch',
    tagline: 'A science communication design for translating Atlantic Meridional Overturning Circulation monitoring data into climate risk a policy audience can act on.',
    discipline: 'Science Communication  ·  Data Visualisation  ·  Climate Systems',
    accentColor: '#14B8A6',
    tags: ['Climate Systems', 'Ocean Science', 'Science Comm'],
    year: '2024',

    slides: [
      '/media/amoc-watch/amoc-time-series.jpg',
      '/media/amoc-watch/regional-impacts.jpg',
      '/media/amoc-watch/slide-03.jpg',
      '/media/amoc-watch/slide-04.jpg',
      '/media/amoc-watch/slide-05.jpg',
      '/media/amoc-watch/slide-06.jpg',
      '/media/amoc-watch/slide-07.jpg',
      '/media/amoc-watch/slide-08.jpg',
      '/media/amoc-watch/slide-09.jpg',
      '/media/amoc-watch/slide-10.jpg',
      '/media/amoc-watch/slide-11.jpg',
      '/media/amoc-watch/slide-12.jpg',
    ],

    heroEyebrow: 'Atlantic Circulation  ·  Climate Risk Communication',
    heroBrief: 'The AMOC has been weakening. The RAPID array has been monitoring it continuously since 2004. The problem is not observation. It is translation: turning a 20-year dataset of ocean current measurements into something a climate policy audience can read.',

    problemStatement: 'AMOC weakening is among the most consequential potential tipping points in the Earth climate system. The RAPID monitoring array at 26.5°N has collected continuous observational data since 2004, showing a long-term decline in overturning strength. That data lives in academic databases and scientific papers. No public-facing design framework exists to communicate what the trend means, what the uncertainty looks like, or what a 30% weakening represents in practical climate terms.',
    problemMetrics: [
      { value: '26.5°N', label: 'latitude of the RAPID monitoring array, the primary continuous AMOC measurement system' },
      { value: '~20 yr', label: 'continuous AMOC monitoring record from the RAPID array (2004 to present)' },
      { value: '~30%', label: 'estimated AMOC weakening since the mid-20th century (Caesar et al., 2018)' },
    ],

    researchTitle: 'Building on the thesis to design the translation',
    researchBody: 'The MSc thesis on deep Pacific radiocarbon ages required a detailed working understanding of AMOC behaviour across climate states. In the cap-and-trap model runs, AMOC strength dropped from 25.5 Sv pre-industrial to 12.0 Sv in the Last Glacial Maximum. That model context created a precise framework for understanding what AMOC variability means physically. AMOC Watch applied that framework to the question of real-time monitoring communication.',
    researchMethods: [
      'RAPID array data analysis: AMOC transport time series 2004 to present',
      'Caesar et al. (2018) proxy reconstruction review: SST fingerprint methodology',
      'IPCC AR6 AMOC tipping point assessment and uncertainty framing',
      'Science communication audit: existing AMOC public-facing content landscape',
      'Policy audience research: what AMOC weakening means for UK climate adaptation planning',
    ],

    process: [
      {
        step: '01', label: 'Translation Framework', slideIdx: 4,
        body: 'Built a three-layer translation framework for the RAPID time series: raw Sv measurements, physical interpretation (what that transport volume means for Atlantic heat redistribution), and policy implications (what weakening means for UK climate, rainfall patterns, and regional sea level).',
        img: 'Translation Framework  ·  Three-Layer Model',
      },
      {
        step: '02', label: 'Uncertainty Visualisation', slideIdx: 0,
        body: 'AMOC monitoring data carries significant natural variability around the long-term trend. The core design challenge was communicating the difference between seasonal noise and structural weakening without misrepresenting uncertainty. Designed a visual grammar that separates trend from variability with clear labelling at each scale.',
        img: 'Uncertainty Visual  ·  Trend vs Variability Grammar',
      },
      {
        step: '03', label: 'Regional Impact Mapping', slideIdx: 9,
        body: 'Translated AMOC weakening into tangible regional impacts for a UK and European policy audience: changes to the North Atlantic storm track, winter temperature anomalies, and sea level differential along the US East Coast and UK coastline that follow from reduced northward heat transport.',
        img: 'Regional Impact Map  ·  Policy Audience Translation',
      },
      {
        step: '04', label: 'Dashboard Design', slideIdx: 11,
        body: 'Designed a public-facing AMOC monitoring dashboard concept: current transport strength, rolling 12-month trend, proxy reconstruction context, and a plain-language status indicator. Built around the principle that the monitoring data should not require a physical oceanography background to interpret.',
        img: 'Dashboard Concept  ·  Public Monitoring View',
      },
    ],

    solutionTitle: 'A public translation layer for AMOC monitoring data',
    solutionBody: 'AMOC Watch is a science communication design framework that takes the RAPID array time series and makes it legible to a climate policy audience. It separates natural variability from structural trend, maps physical changes to regional impact, and frames uncertainty in a way that preserves the signal. The dashboard concept gives climate communicators and policy teams a reference design for working with continuous ocean monitoring data.',
    solutionMetrics: [
      { value: '20 yr', label: 'continuous RAPID monitoring record translated for non-specialist audiences' },
      { value: '3 layers', label: 'translation framework: Sv measurement, physical interpretation, policy implication' },
      { value: '1 page', label: 'dashboard concept for public-facing AMOC status communication' },
    ],

    reflectionQuote: 'The AMOC data does not need improving. It needs translating. That is a design problem, not a science problem.',
    reflectionBody: 'Working through the cap-and-trap thesis gave a precise physical picture of what AMOC weakening means: slower overturning, less heat transported north, and a cascade of regional climate consequences that follow from that. AMOC Watch was built to put that understanding in front of a policy audience that has no reason to read oceanography papers. Representing uncertainty honestly was the central design problem. The RAPID data carries real natural variability around the long-term trend, and misrepresenting that in either direction misleads the audience. Separating time scales was the solution: short-term variability shown clearly apart from the structural trend, each labelled explicitly so the reader knows what is noise and what is signal.',
  },

  {
    id: 'solar-futures-ghana',
    num: '07',
    tier: 'secondary',
    title: 'Solar Futures Ghana',
    tagline: 'A spatial analysis of solar energy access gaps in Ghana: where the resource is strongest and where the grid has not yet reached.',
    discipline: 'Energy Systems  ·  Geospatial Analysis  ·  Design Research',
    accentColor: '#F4A261',
    tags: ['Solar Energy', 'West Africa', 'Energy Access'],
    year: '2023',

    slides: [
      '/media/solar-futures-ghana/irradiance-access.jpg',
      '/media/solar-futures-ghana/opportunity-scores.jpg',
      '/media/solar-futures-ghana/slide-03.jpg',
      '/media/solar-futures-ghana/slide-04.jpg',
      '/media/solar-futures-ghana/slide-05.jpg',
      '/media/solar-futures-ghana/slide-06.jpg',
      '/media/solar-futures-ghana/slide-07.jpg',
      '/media/solar-futures-ghana/slide-08.jpg',
      '/media/solar-futures-ghana/slide-09.jpg',
      '/media/solar-futures-ghana/slide-10.jpg',
      '/media/solar-futures-ghana/slide-11.jpg',
      '/media/solar-futures-ghana/slide-12.jpg',
    ],

    heroEyebrow: 'Solar Energy  ·  Ghana Grid Access',
    heroBrief: 'Ghana has some of the strongest solar irradiance in West Africa. Large portions of its population remain without reliable grid electricity. The gap between those two facts is both a resource planning problem and a design problem. This project mapped where the mismatch is largest.',

    problemStatement: 'Ghana has made substantial progress on electricity access over the past decade, but distribution remains uneven. Northern and rural regions carry the largest access deficits while sitting on the highest solar irradiance potential in the country. Without a spatial framework combining resource quality, grid proximity, and population demand, investment decisions default to areas of existing infrastructure rather than areas of greatest need.',
    problemMetrics: [
      { value: '>5.5', label: 'kWh/m²/day average solar irradiance in northern Ghana, among the highest in West Africa' },
      { value: '~15%', label: 'estimated rural electrification gap in northern Ghana as of 2022' },
      { value: '2030', label: 'Ghana target year for universal electricity access under the National Electrification Scheme' },
    ],

    researchTitle: 'Starting from the physics of the resource',
    researchBody: 'An undergraduate physics degree from the University of Cape Coast, on the central coast of Ghana, provided both the technical foundation and personal context for this project. Solar energy systems were part of the BSc curriculum. The electrification trajectory across the country was visible directly. This project combined that foundation with geospatial analysis to ask a specific question: where does the solar resource exist at the scale required for meaningful off-grid or mini-grid development, and where is it furthest from existing grid infrastructure?',
    researchMethods: [
      'NASA POWER solar irradiance dataset: daily and monthly GHI across Ghana at 0.5-degree resolution',
      'Energising Development (EnDev) grid coverage mapping and rural electricity access data',
      'Ghana Grid Company (GRIDCo) transmission infrastructure spatial data',
      'World Bank Ghana electricity access statistics with regional disaggregation',
      'Population density overlay: Ghana Statistical Service 2021 census district data',
    ],

    process: [
      {
        step: '01', label: 'Resource Mapping', slideIdx: 3,
        body: 'Mapped solar global horizontal irradiance across all 16 regions of Ghana using NASA POWER data. Identified irradiance bands, seasonal variation patterns, and the north-south gradient that concentrates the strongest resource in the Savannah, North East, and Upper East regions.',
        img: 'Irradiance Map  ·  Regional Resource Gradient',
      },
      {
        step: '02', label: 'Grid Gap Analysis', slideIdx: 5,
        body: 'Overlaid GRIDCo transmission infrastructure against the irradiance map. Built a grid proximity index for each district: distance to nearest high-voltage line, distance to nearest distribution substation, and estimated connection cost per household based on terrain and distance.',
        img: 'Grid Gap Map  ·  Proximity Index by District',
      },
      {
        step: '03', label: 'Demand Overlay', slideIdx: 7,
        body: 'Added population density and electricity access rate by district. Combined with the resource and grid gap data to produce a compound opportunity score: districts with high irradiance, large unelectrified populations, and significant grid distance represent the strongest case for off-grid or mini-grid investment.',
        img: 'Compound Opportunity Map  ·  Three-Variable Score',
      },
      {
        step: '04', label: 'Investment Brief Template', slideIdx: 9,
        body: 'Translated the spatial analysis into a district-level investment brief: resource quality, population demand, grid gap, and recommended technology pathway (rooftop solar, mini-grid, or grid extension). Designed for energy planning agencies and development finance institutions working on sub-Saharan Africa energy access.',
        img: 'District Brief Template  ·  Investment Pathway View',
      },
    ],

    solutionTitle: 'A compound opportunity map for solar investment in Ghana',
    solutionBody: 'Solar Futures Ghana produces a spatial analysis identifying where the mismatch between solar resource and grid access is largest. A compound opportunity score combining irradiance quality, population demand, and grid distance ranks all 261 districts by off-grid and mini-grid investment priority. District-level briefs translate the spatial data into investment pathway recommendations for energy planners and development finance institutions.',
    solutionMetrics: [
      { value: '261', label: 'districts scored for solar investment opportunity across all 16 regions' },
      { value: '3 variables', label: 'combined in compound score: irradiance quality, population demand, grid distance' },
      { value: '>5.5 kWh', label: 'average daily irradiance in highest-priority northern districts' },
    ],

    reflectionQuote: 'Ghana does not have an energy resource problem. It has an infrastructure distribution problem. The solar potential is already there.',
    reflectionBody: 'The most striking finding was how cleanly the opportunity concentrated in the northern regions. The areas with the worst grid access and the largest unelectrified populations are also the areas with the strongest solar resource. The spatial analysis did not discover a hidden opportunity. It made an obvious one visible in a form that investment decisions could actually use.',
  },
]

export const getPrimary = () => PROJECTS.filter(p => p.tier === 'primary')
export const getSecondary = () => PROJECTS.filter(p => p.tier === 'secondary')
export const getById = (id) => PROJECTS.find(p => p.id === id)
