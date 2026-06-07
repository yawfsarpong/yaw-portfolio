export const PROJECTS = [
  {
    id: 'cap-and-trap',
    num: '01',
    tier: 'primary',
    title: 'Cap and Trap',
    tagline: 'Science communication design: how the deep ocean sequestered 80 to 100 ppmv of atmospheric CO₂ during the Last Glacial Maximum — and how a physics-trained designer turned an oceanography thesis into a public-facing narrative.',
    discipline: 'Science Communication  ·  Data Visualisation  ·  Editorial Design',
    accentColor: '#14B8A6',
    tags: ['Palaeoclimate', 'Deep Ocean', 'Science Comm'],
    year: '2024',

    heroEyebrow: 'Palaeoclimate  ·  Deep Ocean Systems',
    heroBrief: 'During the Last Glacial Maximum, 80 to 100 ppmv of atmospheric CO₂ disappeared from the sky. The science explaining where it went existed inside an MSc thesis at the University of Bremen. This project designed the story that made it visible — without losing the physics.',

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

    problemStatement: 'During the Last Glacial Maximum (LGM), approximately 20,000 years ago, Earth\'s atmosphere held 80 to 100 ppmv less CO₂ than during warm interglacial periods. Ice cores make this deficit clear. What they cannot tell you is where the carbon went. The terrestrial biosphere was smaller during the ice age, ruling out land as the sink. Only one reservoir on Earth was large enough: the deep ocean. The scientific mechanism explaining how the ocean stored that carbon was contested and, more critically, locked inside academic literature that no general audience would ever read. That was the design problem.',
    problemMetrics: [
      { value: '80–100 ppm', label: 'atmospheric CO₂ deficit during the Last Glacial Maximum, confirmed by Antarctic ice core records' },
      { value: '5,730 yr', label: 'radiocarbon (¹⁴C) half-life — the geochemical clock used to date and age deep ocean water masses' },
      { value: '13.0 Sv', label: 'AMOC transport strength during the LGM in the model runs, versus 25.5 Sv pre-industrial — a 49% reduction' },
    ],

    researchTitle: 'Reading the science before designing the story',
    researchBody: 'The foundation was the MSc thesis completed at the University of Bremen: "Using natural radiocarbon to constrain modeled water mass ages in the deep Pacific for preindustrial and last glacial maximum time slices" (2020). The work ran the MIT general circulation model (MITgcm) across four experiment configurations — Pre-Industrial baseline, LGM with expanded sea ice (LGM+ice), LGM without expanded sea ice (LGM−ice), and a combined LGM state — and tested two competing sequestration mechanisms against the GLODAP observational radiocarbon database.\n\nThe Cap: expanded Southern Ocean sea ice reaching approximately 33 million km² acted as a physical lid, blocking deep CO₂ from outgassing at the surface. The Trap: sluggish deep circulation — AMOC weakened from 25.5 Sv to 13.0 Sv — pooled ancient carbon in the abyss rather than returning it to the surface. The LGM North Atlantic inverted from an active circulation engine to a stagnant reservoir. The deep North Pacific, starved of flushing by both mechanisms, became the oldest water mass on Earth at a volume-weighted radiocarbon age of 2,450 years.',
    researchMethods: [
      'MITgcm ocean general circulation model across four experiment configurations: Pre-Industrial, LGM+ice, LGM−ice, combined LGM state',
      'GLODAP v2 empirical radiocarbon dataset used for model calibration and validation against observational δ¹⁴C profiles',
      'Radiocarbon age analysis (Δ¹⁴C) across vertical depth profiles and ocean basins to identify oldest water mass signatures',
      'AMOC transport diagnostics: meridional overturning streamfunction comparison across Pre-Industrial and LGM states',
      'Deacon Cell and Antarctic Bottom Water (AABW) formation rate analysis under expanded sea ice boundary conditions',
      'Python (NumPy, matplotlib) for MITgcm output post-processing, δ¹⁴C depth profile visualisation, and overturning streamfunction plotting',
    ],

    process: [
      {
        step: '01', label: 'Reading the Data',
        body: 'Extracted the core quantitative findings from the thesis: AMOC collapsed from 25.5 Sv to 13.0 Sv between Pre-Industrial and LGM states. The LGM North Atlantic reversed from a circulation engine to a near-stagnant reservoir. The deep North Pacific became the oldest water mass on Earth, with a volume-weighted radiocarbon age of 2,450 years. The combined LGM experiment — both sea ice expansion and weakened overturning acting together — produced the deepest and most persistent carbon sequestration of the four configurations.',
        img: 'Thesis Extraction  ·  Data Mapping',
        slideIdx: 0,
      },
      {
        step: '02', label: 'Story Architecture',
        body: 'Mapped the scientific argument into a 13-slide narrative sequence: establish the mystery (the missing CO₂), introduce the radiocarbon clock as the dating tool, present the two suspects (Cap and Trap), run through each MITgcm experiment configuration, compare model output against GLODAP observations to validate the mechanisms, and close with the deep Pacific as the abyssal vault. Each slide carries a single scientific claim. No slide asks the audience to hold more than one new idea.',
        img: 'Narrative Arc  ·  Slide Map',
        slideIdx: 2,
      },
      {
        step: '03', label: 'Visual Design',
        body: 'The original thesis figures were generated in Python for scientific publication — functional, accurate, and unreadable to a non-specialist. Each was rebuilt from scratch as a public-facing visual: deep ocean blues and neutral overlays to anchor the spatial context, high-contrast paired comparison maps for Pre-Industrial versus LGM states, and a consistent visual grammar for radiocarbon age, transport strength, and sea ice extent that carried across all 13 slides without requiring a legend re-read each time.',
        img: 'Slide Design  ·  Visual Language',
        slideIdx: 6,
      },
      {
        step: '04', label: 'Science Simplification',
        body: 'The hardest design decision was naming the two mechanisms. The Cap and the Trap are not simplifications — they are accurate physical descriptions of what the model shows: a sea ice lid that blocked surface outgassing, and a deep circulation slowdown that prevented ancient carbon from returning to the atmosphere. The names had to be short enough to hold in memory across a 13-slide argument, and precise enough that anyone who went back to the original thesis would find the physics intact. Both conditions were met.',
        img: 'Language Iteration  ·  Metaphor Testing',
        slideIdx: 12,
      },
    ],

    solutionTitle: 'A 13-slide public narrative built on a validated ocean circulation model',
    solutionBody: 'Cap and Trap translates a quantitative oceanography thesis into a science communication presentation and narrated video. The LGM circulation ran at approximately 49% of pre-industrial AMOC strength (13.0 Sv versus 25.5 Sv). Southern Ocean sea ice expanded to roughly 33 million km², sealing the surface exchange that would have returned deep CO₂ to the atmosphere. The deep North Pacific, isolated by both mechanisms, became an abyssal vault with water aged at 2,450 radiocarbon years — nearly four times older than the same water mass under pre-industrial conditions. Together, the Cap and the Trap sequestered 80 to 100 ppmv of atmospheric CO₂. The four-configuration MITgcm experiment design makes it possible to separate the contribution of each mechanism, rather than treating the LGM as a single undifferentiated state.',
    solutionMetrics: [
      { value: '49%', label: 'reduction in AMOC transport strength between Pre-Industrial (25.5 Sv) and LGM (13.0 Sv) model states' },
      { value: '2,450 yr', label: 'volume-weighted radiocarbon age of glacial deep Pacific water, versus roughly 700 yr pre-industrial' },
      { value: '4 runs', label: 'MITgcm experiment configurations allowing mechanism separation: PI, LGM+ice, LGM−ice, combined LGM' },
    ],

    reflectionQuote: 'The data existed. The story did not. Design was the bridge between a thesis nobody would read and a mechanism everyone should understand.',
    reflectionBody: 'Science communication is not simplification. It is translation, and translation carries consequences. Every decision to name, sequence, or visualise a finding changes how it lands and whether it survives the journey from specialist to public context. The most important realisation in this project was that Cap and Trap were not invented metaphors — they were already present in the physics. The sea ice lid is a cap in the most literal sense. The weakened overturning is a trap in the most precise sense. What design did was surface the language that was already inside the science.',
  },

  {
    id: 'charge-corridor',
    num: '02',
    tier: 'primary',
    title: 'Charge Corridor',
    tagline: 'A viability analysis of ZE HGV charging infrastructure gaps on the UK freight corridors that carry 70% of the country\'s road goods — built from four years of operational infrastructure delivery experience.',
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
    heroBrief: 'The UK has committed to zero emission freight by 2040. The charging network on the Strategic Road Network has gaps that make ZE HGV operation commercially unviable on several corridors today. This project mapped exactly where those gaps are, why they exist, and what closing them requires — with the operational credibility of someone who has spent four years managing large-scale ZEV infrastructure delivery programmes.',

    problemStatement: 'Zero-emission HGVs require high-power charging infrastructure within viable dwell distances of every major freight corridor. Gaps in motorway service area coverage, grid capacity constraints at key locations, and inconsistent deployment planning mean operators face a patchwork network that makes route planning unreliable and ZE fleet transition financially risky. The problem is not uniformly distributed. On several corridors, the constraint is not slow deployment — it is structural grid capacity, where reinforcement timelines of 18 to 24 months mean no planning intervention can close the gap in the near term.',
    problemMetrics: [
      { value: '70%', label: 'of UK HGV freight moves along 8 major motorway corridors: M1, M6, M62, M4, A14, M5, A1(M), M8' },
      { value: '350 kW', label: 'minimum charge rate required for viable commercial HGV turnaround within standard dwell windows' },
      { value: '18–24 months', label: 'grid reinforcement lead time at constrained motorway service areas, independent of planning decisions' },
    ],

    researchTitle: 'Following the freight before designing the framework',
    researchBody: 'Four years managing vehicle lifecycle performance and ZEV infrastructure delivery programmes across the UK meant the freight corridor problem was operationally familiar before the analysis started. The constraint taxonomy — charge availability, grid capacity, dwell window compatibility — came from direct programme delivery experience, not secondary research alone. The analytical work layered DfT road traffic count data, the NESO distribution network constraint maps, and Zero Emission HGV and Infrastructure Demonstration (ZEHID) cohort data to surface the specific corridors where the gap is structural rather than simply unfilled.',
    researchMethods: [
      'UK HGV corridor density analysis: DfT Road Traffic Statistics Table TRA0101, major freight route identification',
      'High-power charge point audit: Zap-Map API and NESO public data, 150 kW+ units mapped against motorway service area locations per corridor',
      'Grid capacity constraint analysis: National Grid ESO distribution reinforcement queue data and DNO constraint zone maps',
      'ZEHID cohort infrastructure data synthesis: charge window requirements, dwell constraints, and overnight stop patterns from operator trials',
      'Fleet operator consultation: procurement, operations, and route planning leads at three large UK logistics operators',
      'Viability index construction: charge availability ratio, maximum inter-charger gap distance, and grid constraint risk score per corridor',
    ],

    process: [
      {
        step: '01', label: 'Route Analysis', slideIdx: 3,
        body: 'Identified the eight corridors carrying approximately 70% of UK HGV freight — M1, M6, M62, M4, A14, M5, A1(M), and M8 — using DfT road traffic count data. Mapped every high-power charge point (150 kW and above) against each corridor and calculated viable refuelling intervals for 19-tonne and 44-tonne zero emission configurations. The audit revealed that charge point density varies by a factor of more than four between the best and worst-served corridors.',
        img: 'Corridor Map  ·  Charge Point Audit',
      },
      {
        step: '02', label: 'Gap Modelling', slideIdx: 7,
        body: 'Built a grid capacity constraint layer over the corridor map using NESO distribution network data. The critical finding was that several high-dwell motorway service areas sit in areas where the local distribution network cannot support the required additional load without reinforcement — a process that takes 18 to 24 months from application to energisation, independent of planning or funding decisions. On those locations, the gap is not a deployment delay. It is a structural constraint with a fixed lead time.',
        img: 'Gap Model  ·  Grid Constraint Layer',
      },
      {
        step: '03', label: 'Viability Scoring', slideIdx: 9,
        body: 'Developed a viability index for each corridor across three dimensions: charge availability ratio (viable chargers per freight movement), maximum gap distance between viable charge points, and grid constraint risk score (proportion of service areas in constrained zones). Corridors scoring below the viability threshold represent structural barriers — not slow deployment that will self-correct as investment arrives, but locations where infrastructure readiness requires active intervention at the grid level first.',
        img: 'Viability Index  ·  Corridor Scoring Matrix',
      },
      {
        step: '04', label: 'Decision Framework', slideIdx: 11,
        body: 'Translated the corridor scores into a prioritisation framework for two distinct audiences who are often planning independently. Fleet operators need to know which routes can support ZE fleet operation now and which require phased introduction. Infrastructure planners and DSOs need to know where grid reinforcement should be sequenced before charger deployment begins. A single dataset, structured for two different decision contexts — this dual-audience design was the most important output of the analysis.',
        img: 'Investment Matrix  ·  Operator and Planner Views',
      },
    ],

    solutionTitle: 'A structural viability map for zero emission freight on the UK Strategic Road Network',
    solutionBody: 'Charge Corridor identifies where ZE HGV viability breaks down on the eight UK freight corridors carrying 70% of road goods. Each corridor is scored against charge availability, grid capacity at dwell locations, and the maximum operational gap a 44-tonne ZE configuration can tolerate without a range failure. The grid constraint analysis adds the dimension most gap analyses miss: where the constraint is structural and has a fixed lead time, not simply an investment shortfall. The framework outputs two prioritised views — one for fleet operators deciding route sequencing, one for infrastructure planners and DNOs deciding where grid reinforcement should precede charger deployment.',
    solutionMetrics: [
      { value: '8', label: 'major freight corridors scored: M1, M6, M62, M4, A14, M5, A1(M), M8' },
      { value: '3 dimensions', label: 'viability index: charge availability ratio, maximum gap distance, grid constraint risk score' },
      { value: '2 audiences', label: 'fleet operators and infrastructure planners — one dataset, two decision-ready views' },
    ],

    reflectionQuote: 'Zero emission freight is an infrastructure problem before it is a vehicle problem. The vehicles exist. The grid constraints are real. They have a timeline that no planning decision can compress.',
    reflectionBody: 'The finding that changed this project was the grid reinforcement lead time. Most analyses of ZE freight gaps treat the problem as a deployment rate question: build more chargers faster, close the gap. The grid constraint layer showed that on several high-value service area locations, the answer is not faster deployment — it is earlier grid investment, sequenced 18 to 24 months ahead of charger deployment. That reframes the infrastructure planning conversation entirely. It is not a question of where to put chargers. It is a question of which grid upgrades need to start now for the chargers to arrive on time.',
  },

  {
    id: 'shore-power',
    num: '03',
    tier: 'primary',
    title: 'Shore Power',
    tagline: 'A decarbonisation readiness framework for UK ports: assessing grid capacity, berth infrastructure, vessel fleet composition, and technology pathway alignment across six major port estates.',
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
    heroBrief: 'Shipping produces approximately 3% of global CO₂ emissions. UK ports are where the physical infrastructure of decarbonisation meets the commercial realities of international freight. The gap between what ports currently have and what zero emission shipping requires is large, specific, and rarely assessed in integrated form. This project built the framework for doing that honestly.',

    problemStatement: 'Decarbonising UK shipping requires port infrastructure to evolve in parallel with vessel technology, and on a timeline that aligns with vessel replacement cycles rather than public investment cycles. Shore power (cold ironing) for vessels at berth, hydrogen and ammonia bunkering for deep-sea routes, and methanol supply chains each carry different infrastructure requirements, grid dependencies, and lead times. Shore power infrastructure, from grid connection to berth equipment, can be operational in two to three years if grid capacity exists. Hydrogen bunkering infrastructure at commercial scale is five to seven years from first investment to operation. No integrated framework existed to assess where UK ports sit on this readiness spectrum, or in what sequence infrastructure investment would move them forward most efficiently.',
    problemMetrics: [
      { value: '~3%', label: 'of global CO₂ emissions from international shipping (IMO Fourth GHG Study, 2020)' },
      { value: '£206M', label: 'UK government SHORE programme investment in clean maritime demonstration infrastructure to 2025' },
      { value: '2–7 yr', label: 'infrastructure lead time range: 2–3 years for shore power vs 5–7 years for hydrogen bunkering at commercial scale' },
    ],

    researchTitle: 'Understanding port systems before designing the assessment',
    researchBody: 'Port decarbonisation is not a single infrastructure problem. It is a layered system in which energy infrastructure, vessel schedules, cargo type, berth geometry, regulatory obligations, and commercial pressure all interact simultaneously. The framework had to accommodate that complexity without making the assessment unusable at a practical level. Research pulled from UK port authority consultations, SHORE programme competition outputs, IMO strategy documents, and the operational experience of large-scale infrastructure delivery — specifically the insight that the critical path in complex infrastructure programmes is almost never the technology. It is the grid connection, the planning permission, and the coordination between organisations that have never had to work on the same timeline before.',
    researchMethods: [
      'UK port authority consultations at Felixstowe, Southampton, Dover, Immingham, Liverpool, and Tilbury: energy, operations, and sustainability teams',
      'SHORE Clean Maritime Demonstration Competition cohort output review: technology readiness and grid connection experience across funded projects',
      'IMO 2023 GHG Strategy cross-referenced with UK Clean Maritime Plan and Environmental Improvement Plan targets',
      'Berth-level power demand modelling by vessel type (ro-ro ferry, container, cruise, bulk) and average dwell window',
      'Technology readiness assessment: shore power (OPS), green hydrogen, methanol, and ammonia bunkering pathways — TRL, infrastructure requirements, and commercial lead times',
    ],

    process: [
      {
        step: '01', label: 'System Mapping', slideIdx: 4,
        body: 'Mapped the full UK port decarbonisation system across six major port estates — Felixstowe, Southampton, Dover, Immingham, Liverpool, and Tilbury — covering vessel energy demand by type and dwell time, current berth power availability, grid connection constraints at each location, and proximity to any existing or planned hydrogen production or distribution infrastructure.',
        img: 'Port System Map  ·  Energy Flow Diagram',
      },
      {
        step: '02', label: 'Readiness Index', slideIdx: 0,
        body: 'Developed a port readiness index across four dimensions: grid capacity (available and committed MW at the port boundary), land availability for energy infrastructure (space for electrolysers, bunkering facilities, or OPS equipment), vessel fleet composition at berth (the proportion of calls by vessels with viable zero emission alternatives in the current market), and regulatory status (OPS mandate progress under IMO and UK Clean Maritime Plan obligations). Each dimension was scored independently before aggregation into a port-level score, preserving the ability to diagnose where the constraint lies.',
        img: 'Readiness Index  ·  Four-Dimension Model',
      },
      {
        step: '03', label: 'Technology Matching', slideIdx: 6,
        body: 'Different vessel types require fundamentally different zero emission fuel pathways, and the technology lead times are not equivalent. Short-sea ferries and coastal vessels operating routes under approximately 300 nautical miles — including Dover-Calais, Irish Sea services, and North Sea crossings — align with battery systems and shore power: both technologies are commercially available and infrastructure can be deployed within standard planning cycles. Deep-sea container ships and bulk carriers require hydrogen, ammonia, or methanol bunkering: technologies with longer commercial lead times and larger infrastructure footprints. The framework matched technology pathway to vessel fleet profile at each port rather than applying a single decarbonisation pathway across all locations.',
        img: 'Technology Pathway Matrix  ·  Fleet Profile Map',
      },
      {
        step: '04', label: 'Port Brief Template', slideIdx: 10,
        body: 'Translated the readiness index and technology pathway analysis into a one-page port decarbonisation brief: a shared starting document that gives port authorities, vessel operators, and infrastructure investors a common picture of what readiness means at a specific location. The brief specifies the constraint (grid, land, fleet, regulatory), the technology pathway aligned to the dominant vessel type at that berth, and the infrastructure investment sequence required to move from current state to operational zero emission capability.',
        img: 'Port Brief Template  ·  Stakeholder Alignment Format',
      },
    ],

    solutionTitle: 'A readiness framework that distinguishes between ports that need investment and ports that need coordination',
    solutionBody: 'Shore Power produces a four-dimension readiness score, a technology pathway recommendation matched to the vessel fleet profile at each port, and a prioritised infrastructure investment brief. Applied across six major UK port estates — Felixstowe, Southampton, Dover, Immingham, Liverpool, Tilbury — the framework reveals that port decarbonisation constraints are not uniform. Some ports are grid-constrained; some are land-constrained; some are operating vessel fleets with no commercially available zero emission alternative yet. The critical finding is that short-sea and ferry routes have no technical barrier to shore power deployment now, while deep-sea container routes require a different investment sequence aligned to hydrogen and methanol infrastructure timelines.',
    solutionMetrics: [
      { value: '6', label: 'UK port estates assessed: Felixstowe, Southampton, Dover, Immingham, Liverpool, Tilbury' },
      { value: '4 dimensions', label: 'readiness index: grid capacity, land availability, vessel fleet composition, regulatory status' },
      { value: '2–3 yr vs 5–7 yr', label: 'shore power versus hydrogen bunkering lead times — the infrastructure sequencing gap that drives investment prioritisation' },
    ],

    reflectionQuote: 'Port decarbonisation is not a technology problem. It is a coordination problem between organisations that have never had to plan on the same timeline — and the technology lead time gap makes that coordination failure expensive.',
    reflectionBody: 'The port brief template turned out to be more operationally useful than the readiness index. It gave port authorities, vessel operators, and infrastructure investors a shared vocabulary they could all work from. Each group had been planning independently — port authorities modelling grid upgrades, vessel operators assessing fuel switching costs, investors evaluating hydrogen project pipelines — with no reference point that showed where the others were starting from. The 2-to-7 year lead time differential between shore power and hydrogen bunkering is the most important number in that alignment conversation. It means ports cannot sequence all zero emission technologies in parallel: shore power investment decisions need to be made now, while hydrogen infrastructure decisions are being made in the 2027 to 2030 window.',
  },

  {
    id: 'fleet-zero',
    num: '04',
    tier: 'secondary',
    title: 'Fleet Zero',
    tagline: 'A lifecycle planning framework for commercial fleet operators transitioning to zero emission vehicles — built on operational delivery experience and ZEHID cohort data, not vendor specifications.',
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
    heroBrief: 'Fleet operators face a transition decision that spans multiple years, significant capital outlay, and real operational risk. The data to support that decision exists in ZEHID cohort trials, energy tariff modelling, and depot infrastructure assessments. No single framework brought it together in terms an operator could use internally — or take into a board conversation.',

    problemStatement: 'Transitioning a commercial fleet to zero emission vehicles is not a procurement decision. It involves vehicle lead times of 18 months or longer, depot charging infrastructure investment that may require MVA-scale grid connections, route viability analysis against vehicle range under real duty cycles, and a whole-life cost calculation that is acutely sensitive to energy tariff assumptions. Most operators were approaching this one vehicle at a time, without a portfolio view of where transition risk was concentrated — and without a sequencing model that told them whether to start with the route, the depot, or the vehicle specification. The answer, consistently, is route first.',
    problemMetrics: [
      { value: '£450K+', label: 'typical purchase price for a 44-tonne battery electric HGV at current market rates' },
      { value: '4–8 years', label: 'whole-life break-even range versus diesel equivalent, depending on energy tariff and duty cycle intensity' },
      { value: '18–36 months', label: 'typical lead time from fleet commitment to first ZE vehicle delivered and operational' },
    ],

    researchTitle: 'Understanding the decision before designing the framework',
    researchBody: 'Four years managing vehicle lifecycle performance and infrastructure delivery programmes across large-scale ZEV rollouts gave a direct operational view of where fleet transition decisions stall. The pattern repeated: operators committing to vehicles before auditing depots, or auditing depots before understanding which routes were actually viable under real duty cycle and range constraints. The correct sequencing — route assessment first, depot infrastructure second, vehicle specification third — is not obvious from a vendor sales process, but it is the difference between a transition that works and one that creates stranded assets in year two.\n\nThe research drew on Zero Emission HGV and Infrastructure Demonstration (ZEHID) cohort operational data, whole-life cost modelling across diesel, BEV, and FCEV configurations, and direct consultation with fleet operators, depot engineers, and energy procurement teams.',
    researchMethods: [
      'ZEHID cohort operational data review: real-world range performance, charge session patterns, and energy consumption by duty cycle',
      'Whole-life cost modelling: diesel versus BEV versus FCEV across energy tariff scenarios from 12p/kWh to 28p/kWh',
      'Depot infrastructure assessment methodology: power capacity audit, DNO connection enquiry process, land availability, and MVA demand calculation for multiple-charger scenarios',
      'Route viability analysis: 44-tonne duty cycle range modelling against vehicle specifications from current OEM market',
      'Fleet operator interviews: procurement, operations, depot engineering, and sustainability leads at UK logistics operators',
    ],

    process: [
      {
        step: '01', label: 'Decision Mapping', slideIdx: 2,
        body: 'Mapped the complete fleet transition decision sequence and identified the most common structural error: operators choosing vehicles before establishing route and depot viability. The correct order is route assessment (which duty cycles are viable under current ZE vehicle range), then depot assessment (can the site support the required grid connection and charging infrastructure), then vehicle specification (which powertrain configuration matches the validated route and depot profile). Starting with the vehicle creates downstream mismatches that are expensive to resolve.',
        img: 'Decision Tree  ·  Portfolio vs Route View',
      },
      {
        step: '02', label: 'Cost Modelling', slideIdx: 3,
        body: 'Built a whole-life cost comparison model across diesel, battery electric, and fuel cell configurations. The break-even analysis spans four to eight years depending on energy tariff assumptions and duty cycle intensity. The most sensitive variable is not vehicle purchase price — it is the energy tariff. Operators on flexible industrial tariffs in the 12 to 15 pence per kWh range reach break-even in four to five years. Operators on standard grid rates above 24 pence per kWh are looking at seven to eight years or longer, which changes the board-level investment case entirely.',
        img: 'Whole-Life Cost Model  ·  Break-Even Sensitivity Analysis',
      },
      {
        step: '03', label: 'Readiness Assessment', slideIdx: 5,
        body: 'Developed a three-domain fleet readiness assessment covering route (duty cycle distance against ZEHID-validated vehicle range, with payload correction), depot (current power capacity, available land for charge infrastructure, and estimated MVA demand for the target fleet size), and operational (driver training, scheduling changes, and overnight charge management requirements). The depot MVA calculation is often the first moment operators understand the scale of grid infrastructure involved: a 20-vehicle ZE depot with 150 kW overnight chargers requires approximately 3 MVA of dedicated supply.',
        img: 'Readiness Assessment  ·  Three-Domain Scoring',
      },
      {
        step: '04', label: 'Transition Roadmap', slideIdx: 8,
        body: 'Combined the cost model and readiness assessment into a phased transition roadmap with explicit decision gates at each stage. Phase one: route validation and depot feasibility, with a go/no-go gate on grid connection viability. Phase two: vehicle procurement initiation, aligned to the 18 to 36 month lead time, with depot infrastructure works running in parallel. Phase three: operational introduction with first-year performance tracking against the ZEHID benchmark data. Phase four: fleet scale-up based on operational evidence, not vendor projections.',
        img: 'Phased Roadmap  ·  Decision Gate Template',
      },
    ],

    solutionTitle: 'A sequenced transition framework, not a procurement checklist',
    solutionBody: 'Fleet Zero is a lifecycle planning framework that gives commercial fleet operators a structured path through the ZE transition decision. It produces a route and depot viability assessment, a whole-life cost model with energy tariff sensitivity built in, and a phased transition roadmap with decision gates that prevent commitment before readiness is confirmed. The sequencing insight — route first, depot second, vehicle third — is operationally straightforward once stated, but it runs counter to the sales process that most operators encounter first. The framework exists to correct that sequence before capital is committed.',
    solutionMetrics: [
      { value: '3 domains', label: 'readiness assessment: route viability, depot infrastructure capacity, operational change requirements' },
      { value: '4–8 yr', label: 'whole-life break-even range: energy tariff is the decisive variable, not vehicle purchase price' },
      { value: '4 phases', label: 'transition roadmap with decision gates — route and depot validation precede vehicle procurement, always' },
    ],

    reflectionQuote: 'Fleet operators were not resistant to zero emission transition. They were waiting for a framework that sequenced the decisions correctly and made the risk legible at board level.',
    reflectionBody: 'The most consistently useful output was the whole-life cost model with energy tariff sensitivity. Most internal business cases operators were presenting to boards treated energy cost as a single number — typically the current retail rate. Showing the break-even range across realistic tariff scenarios, from flexible industrial rates to standard grid prices, changed the conversation from "is ZE viable" to "what energy contract do we need to make ZE financially defensible." That reframing from technology question to commercial question was what most operators needed to move from analysis to commitment.',
  },

  {
    id: 'wayfinder',
    num: '05',
    tier: 'secondary',
    title: 'Wayfinder',
    tagline: 'The first cross-modal compound accessibility gap analysis for UK transport: mapping where rail, bus, and active travel failures overlap for the 13.9 million people who depend on accessible infrastructure.',
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
    heroBrief: '13.9 million people in the UK live with a disability. A substantial proportion face transport infrastructure that was not designed for them and has not been meaningfully upgraded. The problem is not simply underinvestment. It is that accessible transport failures have always been audited one mode at a time — which means the communities where rail, bus, and active travel all fail simultaneously have never been systematically identified.',

    problemStatement: 'Accessible transport is a legal requirement across UK rail, bus, and active travel infrastructure. The reality is uneven and the unevenness is not random. Step-free access, real-time audio information, tactile wayfinding, and accessible waiting environments vary dramatically between operators, modes, and regions. The critical problem is that existing accessibility assessments are single-mode by design — Office of Rail and Road audits rail; bus stop accessibility is assessed separately; active travel infrastructure has its own rating system. No framework combines these to identify where multiple accessibility failures compound for the same population, which is where investment decisions would create the largest per-person improvement in access.',
    problemMetrics: [
      { value: '13.9M', label: 'people in the UK living with a disability (Family Resources Survey 2022–23)' },
      { value: '40%', label: 'of UK rail stations without step-free access to all platforms (ORR Station Usage Data 2023)' },
      { value: '£72bn', label: 'estimated annual economic cost of inaccessible transport to disabled people and their households (Scope, 2023)' },
    ],

    researchTitle: 'Understanding where single-mode audits fail before designing a cross-modal framework',
    researchBody: 'The starting observation was that accessibility investment in UK transport has followed infrastructure planning silos: rail upgrades funded through DfT Access for All, bus improvements through local transport plans, active travel through Active Travel England. Each programme produces its own audit, its own metric, and its own investment case. No organisation routinely asks: where do all three fail for the same community at the same time? That question is not answerable from any existing dataset in isolation. Answering it required joining Office of Rail and Road station accessibility data, BODS bus stop ratings, Active Travel England infrastructure scores, and ONS disability prevalence at Lower Super Output Area level — and building the compound failure score that makes the overlap visible.',
    researchMethods: [
      'ORR station accessibility audit: step-free access status, real-time information provision, and accessible waiting environments for all UK rail stations',
      'Bus Open Data Service (BODS) stop-level accessibility ratings cross-referenced with local transport authority network coverage data',
      'Active Travel England infrastructure quality ratings by local authority, cross-referenced with cycling and walking route continuity assessments',
      'ONS disability prevalence at LSOA level from Census 2021 and Family Resources Survey regional disaggregation',
      'DfT Access for All programme investment data: funded stations, committed upgrades, and pipeline projects against compound failure zone rankings',
    ],

    process: [
      {
        step: '01', label: 'Infrastructure Audit', slideIdx: 3,
        body: 'Mapped accessibility infrastructure across rail, bus, and active travel modes at local authority level. Rail assessment used ORR published data on step-free access, real-time audio information, and platform accessibility. Bus assessment used BODS stop-level ratings and network coverage density against disability prevalence. Active travel assessment used Active Travel England quality scores for walking and cycling routes in and around town centres.',
        img: 'Infrastructure Audit  ·  Multi-Mode Coverage Map',
      },
      {
        step: '02', label: 'Population Overlay', slideIdx: 1,
        body: 'Overlaid ONS Census 2021 disability prevalence data at LSOA level against the multi-mode infrastructure audit. The compound failure zones that emerged — areas where rail, bus, and active travel all score below threshold simultaneously — were concentrated in specific post-industrial and rural geographies. Bradford, Barnsley, Stoke-on-Trent, and County Durham all appear in the highest-scoring compound failure zones. These are not areas with a single broken lift. They are areas where no accessible alternative exists when any one mode fails.',
        img: 'Compound Failure Map  ·  Disability Prevalence Overlay',
      },
      {
        step: '03', label: 'Priority Scoring', slideIdx: 8,
        body: 'Built a compound accessibility gap score for each local authority: infrastructure deficit across all three modes, weighted against the size of the affected disabled population and the absence of viable cross-modal alternatives. The score identifies where investment would create the largest per-person improvement in access — not simply where infrastructure is worst, but where poor infrastructure and high disability prevalence and limited modal alternatives all occur together.',
        img: 'Priority Score  ·  Investment Impact Model',
      },
      {
        step: '04', label: 'Policy Brief', slideIdx: 10,
        body: 'Translated the priority framework into a policy brief aligned to DfT Access for All funding cycles. The brief identifies the 20 compound failure zones with the highest scores, the specific infrastructure deficits in each mode for each area, and a cross-modal intervention sequence designed to restore at least one viable accessible route before upgrading secondary modes. The sequencing logic follows from the compound score: restore the mode with the highest disabled population dependency first.',
        img: 'Policy Brief Template  ·  Cross-Modal Intervention Sequence',
      },
    ],

    solutionTitle: 'A compound accessibility gap map that makes the systemic failure visible for the first time',
    solutionBody: 'Wayfinder maps where accessible transport infrastructure fails at scale across the UK — not mode by mode, but as a compound system failure affecting 13.9 million people. The compound gap score, combining infrastructure deficit across rail, bus, and active travel with disability prevalence and modal alternative availability, identifies 20 local authority areas where multiple accessibility failures overlap most severely. Bradford, Barnsley, Stoke-on-Trent, and County Durham are among the highest-scoring zones. The framework is designed for transport operators, disability organisations, and policy teams who need a shared evidence base for investment decisions — and who are currently working from single-mode audits that cannot answer the question that matters most: where is there no accessible way to get anywhere?',
    solutionMetrics: [
      { value: '20', label: 'compound failure zones identified where rail, bus, and active travel accessibility all score below threshold' },
      { value: '3 modes', label: 'rail, bus, and active travel assessed simultaneously — the first cross-modal compound analysis of its kind' },
      { value: '£72bn', label: 'estimated annual economic cost of inaccessible transport — the investment case that single-mode audits cannot make alone' },
    ],

    reflectionQuote: 'Individual accessibility audits produce lists of broken lifts. The compound map shows which communities have no viable alternative when one mode fails. Those are different problems with different policy implications.',
    reflectionBody: 'The compound failure map reframed the problem in a way that single-mode audits cannot. The Access for All programme funds rail station upgrades based on footfall and network connectivity. That logic does not find Bradford or Barnsley, because neither has high-footfall rail stations. The compound score finds them because they have large disabled populations, below-threshold bus networks, and active travel infrastructure that scores in the bottom quartile nationally — simultaneously. The policy intervention those areas need is not a rail upgrade. It is a coordinated cross-modal investment that starts with restoring basic accessible connectivity at the local bus network level, where most journeys for most disabled residents actually begin.',
  },

  {
    id: 'amoc-watch',
    num: '06',
    tier: 'secondary',
    title: 'AMOC Watch',
    tagline: 'A science communication design that takes 20 years of RAPID array monitoring data and makes Atlantic Meridional Overturning Circulation risk readable for a climate policy audience.',
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
    heroBrief: 'The AMOC has been weakening. The RAPID array at 26.5°N has been measuring it continuously since 2004. The data exists, the trend is real, and the regional consequences for UK climate are significant. The problem is not observation. It is translation — turning a dataset of Sverdrup measurements into something a climate policy audience can interpret without misreading the uncertainty.',

    problemStatement: 'AMOC weakening is among the most consequential potential tipping points in the Earth climate system. The RAPID monitoring array at 26.5°N has collected continuous observational data since 2004, recording a long-term decline in overturning strength against a background of high natural variability. AMOC transport at 26.5°N varies between approximately 6 and 19 Sverdrup across the observational record, with a mean declining trend. That variability is scientifically significant and communicatively difficult: the noise is real, the signal is real, and conflating them in either direction misleads a policy audience. No public-facing design framework existed to communicate what the trend means, how the uncertainty should be read, or what a structural weakening of this magnitude means for UK regional climate.',
    problemMetrics: [
      { value: '6–19 Sv', label: 'AMOC transport range across the RAPID array observational record at 26.5°N (2004 to present)' },
      { value: '~30%', label: 'estimated AMOC weakening since mid-20th century based on Caesar et al. (2018) SST proxy reconstruction' },
      { value: '~20 yr', label: 'continuous monitoring record from RAPID — long enough for trend detection, short enough to carry significant uncertainty' },
    ],

    researchTitle: 'Building on the thesis to design the translation',
    researchBody: 'The MSc thesis on deep Pacific radiocarbon ages required working through AMOC behaviour across two climate states in detail. In the cap-and-trap model runs, AMOC dropped from 25.5 Sv pre-industrial to 13.0 Sv during the Last Glacial Maximum — a 49% reduction that fundamentally altered deep water mass age, heat redistribution, and carbon sequestration patterns across the Atlantic and Pacific. That model context created a precise physical framework for understanding what AMOC variability means at different time scales and magnitudes. AMOC Watch applied that framework to a different question: how do you communicate a monitoring dataset that shows a real trend embedded in real noise without either alarming a policy audience unnecessarily or understating a geophysically significant signal?',
    researchMethods: [
      'RAPID array transport time series analysis: meridional overturning circulation at 26.5°N, 2004 to present, annual and sub-annual resolution',
      'Caesar et al. (2018) SST fingerprint proxy reconstruction review: methodology, confidence intervals, and comparison to direct RAPID observations',
      'IPCC AR6 Chapter 9 AMOC assessment: tipping point evidence, uncertainty framing, and low-likelihood high-impact risk classification',
      'Three-scale temporal analysis: short-term variability (annual, 6–19 Sv range), medium-term trend (5-year rolling mean, RAPID record), long-term baseline (Caesar proxy reconstruction from mid-20th century)',
      'Science communication audit: existing AMOC public-facing content including UK Met Office, RAPID programme communications, and climate policy briefings',
    ],

    process: [
      {
        step: '01', label: 'Translation Framework', slideIdx: 4,
        body: 'Built a three-layer translation framework for the RAPID time series. Layer one: raw Sv measurements — what the instrument records. Layer two: physical interpretation — what that transport volume means for Atlantic heat redistribution, deep water formation, and carbon exchange at the ocean surface. Layer three: policy implication — what a sustained weakening trend means for UK winter temperatures, North Atlantic storm track behaviour, and sea level differential along the UK coastline. Each layer requires different communication design, and conflating them is the most common failure in existing AMOC public communication.',
        img: 'Translation Framework  ·  Three-Layer Model',
      },
      {
        step: '02', label: 'Uncertainty Visualisation', slideIdx: 0,
        body: 'The central design challenge was representing three distinct temporal scales without misrepresenting any of them. Annual variability in the RAPID record spans roughly 6 to 19 Sv — that range is real and should be shown. The 5-year rolling mean trend within the RAPID record shows a decline. The Caesar proxy reconstruction extends the baseline to mid-20th century, showing a longer-term weakening. Designed a visual grammar that separates these three scales explicitly: short-term variability in a lighter weight, medium-term rolling trend as the primary signal, and the proxy reconstruction as historical context with clearly labelled uncertainty bands. Conflating any two of these scales produces a misleading picture.',
        img: 'Uncertainty Visual  ·  Trend vs Variability Grammar',
      },
      {
        step: '03', label: 'Regional Impact Mapping', slideIdx: 9,
        body: 'Translated AMOC weakening into tangible regional consequences for a UK and European policy audience: reduction in northward heat transport leading to cooler North Atlantic sea surface temperatures, southward shift in the North Atlantic storm track, increased UK winter precipitation variability, and differential sea level rise along the US East Coast and UK coastline driven by reduced northward salt transport. These consequences are physically established in the scientific literature; the design challenge was representing their probability range and timescale dependence honestly.',
        img: 'Regional Impact Map  ·  Policy Audience Translation',
      },
      {
        step: '04', label: 'Dashboard Design', slideIdx: 11,
        body: 'Designed a public-facing AMOC monitoring dashboard concept structured around three temporal views: a 7-day rolling RAPID transport reading in Sv, a 12-month trailing mean trend line with the natural variability envelope shown explicitly, and a long-term status indicator referencing the Caesar proxy baseline. The status indicator uses a three-tier system — stable, declining, and structurally weakened — with threshold values drawn from the scientific literature. The dashboard was designed around the principle that the monitoring data should not require a physical oceanography background to interpret, but should not hide the uncertainty that a physical oceanography background would require.',
        img: 'Dashboard Concept  ·  Public Monitoring View',
      },
    ],

    solutionTitle: 'A public translation layer for AMOC monitoring data that takes the uncertainty seriously',
    solutionBody: 'AMOC Watch is a science communication design framework that takes the RAPID array time series and makes it legible to a climate policy audience without flattening the uncertainty. It separates three temporal scales — annual variability (6–19 Sv range), 5-year rolling trend, and Caesar proxy long-term baseline — and represents each at the appropriate visual weight. The regional impact mapping translates Sv measurements into UK-relevant climate consequences. The dashboard concept gives climate communicators and policy teams a reference design for working with continuous ocean monitoring data: a 7-day rolling reading, a 12-month trailing mean, and a three-tier status indicator anchored to the scientific literature.',
    solutionMetrics: [
      { value: '3 timescales', label: 'annual variability (6–19 Sv), 5-year rolling trend, and Caesar proxy baseline — each visualised separately' },
      { value: '3 tiers', label: 'dashboard status indicator: stable, declining, structurally weakened — thresholds from peer-reviewed literature' },
      { value: '20 yr', label: 'RAPID monitoring record translated for non-specialist audiences, including the uncertainty that comes with that record length' },
    ],

    reflectionQuote: 'The AMOC data does not need improving. It needs translating at three time scales simultaneously — which is a harder design problem than it looks.',
    reflectionBody: 'Working through the cap-and-trap thesis gave a precise physical intuition for what AMOC weakening means at different magnitudes and timescales. A 49% reduction in AMOC strength — as in the LGM model runs — produces one set of consequences. A 30% weakening from mid-20th century levels, as suggested by the Caesar proxy, produces a different and smaller set. The annual variability in the RAPID record — 6 to 19 Sv — is larger than the long-term trend signal, which means the trend can only be seen clearly on a 5-year or longer view. That multi-scale structure is the central challenge for public communication, and it is the thing that existing AMOC communication gets wrong most often: showing the raw data without the context that explains why the trend requires a longer view to see.',
  },

  {
    id: 'solar-futures-ghana',
    num: '07',
    tier: 'secondary',
    title: 'Solar Futures Ghana',
    tagline: 'A spatial analysis of where Ghana\'s solar resource is strongest, where the grid has not yet reached, and what that mismatch means for investment sequencing — grounded in a physics degree from the University of Cape Coast.',
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
    heroBrief: 'An undergraduate physics degree from the University of Cape Coast, on the central coast of Ghana, provided both the technical foundation and personal context for this project. Solar energy systems were part of the BSc curriculum. The uneven electrification of the country was visible directly. This project used geospatial analysis to answer the specific question that context raised: where does the mismatch between resource quality and grid access create the strongest case for off-grid and mini-grid investment?',

    problemStatement: 'Ghana has made measurable progress on electricity access, but the distribution is structurally uneven. Northern Ghana — the Savannah, North East, and Upper East regions — carries the largest electricity access deficits while sitting on the highest solar irradiance potential in the country, averaging 5.5 to 6.0 kWh/m²/day compared to 4.5 to 5.0 kWh/m²/day in the south. Without a spatial framework combining resource quality, grid proximity, and population demand at district level, energy investment defaults to areas near existing infrastructure rather than areas of greatest resource-demand mismatch. The analysis Ghana needed was not a national average. It was a district-level map of where the opportunity is concentrated.',
    problemMetrics: [
      { value: '5.5–6.0', label: 'kWh/m²/day average solar irradiance in northern Ghana (Savannah, North East, Upper East regions) — among the highest in West Africa' },
      { value: '~15%', label: 'estimated rural electrification gap in northern Ghana as of 2022, versus near-universal access in Greater Accra' },
      { value: '261', label: 'districts scored for solar investment opportunity across all 16 regions of Ghana' },
    ],

    researchTitle: 'Starting from the physics of the resource',
    researchBody: 'The BSc in Physics from the University of Cape Coast included solar energy systems as part of the curriculum. That technical grounding meant the project started from the resource physics — global horizontal irradiance, its north-south gradient across Ghana, seasonal variation patterns, and the relationship between GHI and the performance of different solar technologies — rather than from secondary literature summaries. Combined with direct observation of the electricity access landscape in Ghana, the analytical framework was shaped by both technical training and geographic proximity to the problem.\n\nThe geospatial analysis used NASA POWER irradiance data at 0.5-degree resolution, GRIDCo transmission infrastructure mapping, EnDev grid coverage data, and Ghana Statistical Service census district data to build a compound opportunity score that identifies where resource quality, population demand, and grid distance converge most strongly.',
    researchMethods: [
      'NASA POWER solar irradiance dataset: daily and monthly GHI across Ghana at 0.5-degree resolution, with seasonal disaggregation to capture harmattan-period variation in the north',
      'GRIDCo (Ghana Grid Company) transmission infrastructure spatial data: high-voltage line routes and substation locations used to calculate grid proximity index by district',
      'Energising Development (EnDev) rural electricity access mapping and World Bank Ghana electricity access statistics with regional and district disaggregation',
      'Ghana Statistical Service Census 2021 district population data overlaid with access rate estimates to calculate unelectrified population per district',
      'Technology pathway modelling: rooftop solar (<10 km from grid), mini-grid systems (10–50 km from grid), and solar home systems (>50 km from grid) matched to grid proximity bands',
    ],

    process: [
      {
        step: '01', label: 'Resource Mapping', slideIdx: 3,
        body: 'Mapped solar global horizontal irradiance across all 16 regions of Ghana using NASA POWER data. The north-south irradiance gradient is pronounced and consistent: the Savannah, North East, and Upper East regions average 5.5 to 6.0 kWh/m²/day annually, while Greater Accra, Western Region, and the coast average 4.5 to 5.0 kWh/m²/day. Seasonal variation analysis showed that the north maintains high irradiance year-round, with the harmattan season reducing it only modestly in December and January.',
        img: 'Irradiance Map  ·  Regional Resource Gradient',
      },
      {
        step: '02', label: 'Grid Gap Analysis', slideIdx: 5,
        body: 'Overlaid GRIDCo transmission infrastructure against the irradiance map. Built a grid proximity index for each of the 261 districts: distance to the nearest high-voltage transmission line, distance to the nearest distribution substation, and an estimated grid connection cost per household based on terrain classification and distance band. The analysis confirmed that the districts with the highest solar resource and the lowest electricity access are also the furthest from existing grid infrastructure — distances of 30 to 80 km from the nearest substation are common in the highest-scoring opportunity zones.',
        img: 'Grid Gap Map  ·  Proximity Index by District',
      },
      {
        step: '03', label: 'Demand Overlay', slideIdx: 7,
        body: 'Added population density and district-level electricity access rate from Ghana Statistical Service census data. Combined with resource quality and grid proximity to produce a compound opportunity score: districts with high irradiance (above 5.5 kWh/m²/day), large unelectrified populations, and significant grid distance (above 30 km to nearest substation) represent the strongest case for off-grid or mini-grid investment. Applied three technology pathway thresholds based on grid proximity: rooftop solar for districts within 10 km of the grid, mini-grid systems for 10 to 50 km, and solar home systems for districts beyond 50 km.',
        img: 'Compound Opportunity Map  ·  Three-Variable Score',
      },
      {
        step: '04', label: 'Investment Brief Template', slideIdx: 9,
        body: 'Translated the spatial analysis into a district-level investment brief format for energy planning agencies and development finance institutions. Each brief specifies resource quality (annual GHI), unelectrified population, grid distance band, recommended technology pathway, and approximate system scale required to achieve meaningful access. The briefs were designed for the planning context typical of institutions like the Energy Commission of Ghana, the Development Bank of Ghana, and multilateral development finance partners working on Sub-Saharan Africa energy access.',
        img: 'District Brief Template  ·  Investment Pathway View',
      },
    ],

    solutionTitle: 'A compound opportunity map that concentrates investment attention where the mismatch is largest',
    solutionBody: 'Solar Futures Ghana produces a spatial analysis identifying where the mismatch between solar resource quality and grid access is greatest across Ghana\'s 261 districts. The compound opportunity score — irradiance quality, unelectrified population, and grid distance combined — ranks every district by off-grid and mini-grid investment priority. The three-pathway technology framework, calibrated to grid proximity bands, gives energy planners a specific recommendation rather than a general observation: rooftop solar where the grid is near, mini-grid systems where it is reachable within cost-effective range, and solar home systems in the most remote zones where grid extension is not economically viable in any planning horizon.',
    solutionMetrics: [
      { value: '261', label: 'districts scored across all 16 regions of Ghana — compound score: irradiance, unelectrified population, grid distance' },
      { value: '3 pathways', label: 'rooftop solar (<10 km to grid), mini-grid (10–50 km), solar home systems (>50 km) — matched to grid proximity' },
      { value: '0.5–1.0 kWh', label: 'irradiance advantage of northern Ghana over the south — resource differential that investment planning should reflect, and often does not' },
    ],

    reflectionQuote: 'Ghana does not have an energy resource problem. It has an infrastructure distribution problem. The solar potential is already there — the analysis just needed to make it visible at the district level where investment decisions are actually made.',
    reflectionBody: 'The most striking finding was how cleanly the highest-priority districts concentrated in the northern regions — not because that was expected, but because the compound score confirmed it quantitatively across all three dimensions simultaneously: the best solar resource, the worst grid access, and the largest unelectrified populations all overlap in the Savannah, North East, and Upper East regions. The analysis did not find a hidden opportunity. It made an obvious one legible in a form that investment and planning decisions could actually use. The personal connection to this geography — having studied physics in Cape Coast, on the southern coast where electricity access is near-universal — made the north-south contrast in the data more than a statistical finding.',
  },
]

export const getPrimary = () => PROJECTS.filter(p => p.tier === 'primary')
export const getSecondary = () => PROJECTS.filter(p => p.tier === 'secondary')
export const getById = (id) => PROJECTS.find(p => p.id === id)
