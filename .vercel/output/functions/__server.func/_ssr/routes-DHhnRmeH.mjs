import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Landmark, c as ExternalLink, d as ArrowRight, f as ArrowLeft, i as MapPin, l as Copy, o as House, r as Printer, s as GraduationCap, t as Zap, u as Check } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DHhnRmeH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans font-medium transition-opacity duration-150 ease-out disabled:opacity-40 disabled:pointer-events-none min-h-11 px-4 text-sm", {
	variants: { variant: {
		primary: "bg-accent text-accent-fg rounded-sm hover:opacity-90",
		ghost: "bg-transparent text-fg rounded-sm hover:bg-raised",
		outline: "bg-transparent text-fg rounded-sm shadow-border hover:shadow-border-hover",
		danger: "bg-danger text-bg rounded-sm hover:opacity-90"
	} },
	defaultVariants: { variant: "primary" }
});
function Button({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({ variant }), className),
		...props
	});
}
var ROLE_LABEL = {
	campus: "Park campus",
	lab: "Laboratory pad",
	housing: "Student housing",
	vet: "Veterinary house",
	shop: "Town shop",
	town: "Main Street",
	pasture: "Pasture / buffer"
};
var STATS = [
	{
		value: "314 ac",
		label: "Highway campus"
	},
	{
		value: "Dorms",
		label: "Student housing on site"
	},
	{
		value: "Vet house",
		label: "Resident veterinarian"
	},
	{
		value: "Fergus",
		label: "Electric cooperative"
	}
];
var SLIDES = [
	{
		kicker: "Musselshell Biotech Park  ·  Roundup, Montana",
		title: "A working campus that can hold a town together after coal.",
		body: "Roundup sits on Highway 12 and Highway 87, fifty minutes from Billings, on Fergus Electric Cooperative’s lines. The park puts a livestock laboratory, student housing, a veterinary house, and a caretaker’s grounds on land that has been hay and pasture for a century. It is sized for the county, the co-op, the builders who already work here, and the schools that already teach the trades.",
		image: "/images/campus-concept.jpg",
		caption: "Concept · laboratory, dormitory, veterinary house, and caretaker cottage on the Hwy 87 N tract"
	},
	{
		kicker: "What stands on the ground",
		title: "Laboratory. Dormitory. Veterinary house. Caretaker. Town shop.",
		body: "The laboratory prints open lattice parts and tests whether an early embryo is sound. The dormitory houses students on rotation. The veterinary house is a home and clinic for a resident veterinarian. The caretaker lives on the grounds and runs pasture, water, fence, and buildings. Downtown, a two-bay shop on Main Street gives the town a door that is not out on the highway.",
		image: "/images/housing.jpg",
		caption: "Student housing in front, veterinary house and caretaker cottage behind"
	},
	{
		kicker: "The laboratory",
		title: "Lattice parts, a quiet test, and a clear yes or no.",
		body: "Staff print lattice structures — open parts that let air and fluid through, the way living tissue does. Early embryos sit on those lattices. A gentle vibration tells whether a sample is whole; growth under the microscope tells the rest. A trained computer helps the veterinarian sort viable from non-viable so the call is not a guess. Cattle and sheep producers are the first users. This is livestock work, not a hospital.",
		image: "/images/lab-bench.jpg",
		caption: "A lattice in a dish · animal-science bench, not a glass tower"
	},
	{
		kicker: "Power and the co-op",
		title: "Fergus Electric is the USDA door. The park is drawn to fit it.",
		body: "Fergus Electric Cooperative already serves Musselshell County. It is a member-owned utility — about 4,155 members, fourteen counties, four thousand miles of line. Rural electric co-ops that borrow from USDA can apply for Rural Economic Development Loan and Grant funds: zero-interest money the co-op then lends to a job-creating project. That is the USDA co-op path. The park asks Fergus for a load study, a letter, and, if the board agrees, to sit as that intermediary."
	},
	{
		kicker: "Schools",
		title: "The students already exist. They need a place to stand.",
		body: "Montana State in Bozeman teaches animal science, reproduction, and biotechnology. City College at MSU Billings, fifty minutes down the highway, teaches welding, carpentry, construction, diesel, and electrical work. Miles Community College teaches pre-veterinary and animal science. MSU Extension already sits in Roundup. Billings is standing a veterinary college. The park is the rural rotation — beds, a bench, a barn, and a veterinarian on the grounds."
	},
	{
		kicker: "Revitalization",
		title: "Main Street is already moving. This gives it a reason to stay open.",
		body: "The Wier Building on Main Street is already under repair with Montana Main Street money. The county has been looking for a payroll that is not a mine. Construction of the park goes to local carpenters, electricians, well drillers, and City College trades. Then a standing staff and a rotating student body buy groceries, fill rooms, and keep lights on after five o’clock. That is the scale of the thing, and why it belongs here rather than on a beltway.",
		image: "/images/roundup-prairie.jpg",
		caption: "Musselshell prairie west of Roundup"
	}
];
var CAMPUS = [
	{
		id: "lab",
		title: "Biotech laboratory",
		place: "On the 314-acre highway tract",
		body: "A full livestock laboratory for embryonic viability. Staff print open lattice structures, set early embryos on them, and test which ones are sound. The test is a quiet vibration — how the sample rings — plus growth under the microscope. A trained computer helps sort viable from non-viable. Cattle and sheep first. Students work the benches under the resident veterinarian."
	},
	{
		id: "dorms",
		title: "Dormitory housing",
		place: "On campus, walking distance to the lab",
		body: "Simple shared rooms for students on rotation from Montana State, City College, and Miles Community College. Shared kitchen and study hall. Not a hotel and not apartments for tourists. Housing is what makes a rural rotation real. Without beds, students go home at five and the county sees none of them."
	},
	{
		id: "vet",
		title: "Veterinary house",
		place: "On the grounds, with a clinic bay",
		body: "A proper house for a resident veterinarian, with a clinic bay and an isolation stall. Large-animal work for the county; oversight of the laboratory; teaching for pre-veterinary and animal-science students. Montana does not yet have a public veterinary college. A house and a clinic in Roundup is how Billings and Bozeman students learn this country."
	},
	{
		id: "caretaker",
		title: "Caretaker grounds",
		place: "Cottage, yard, pasture, and water",
		body: "A caretaker lives on site and runs pasture, well, fence, snow, and buildings, the way a research station has always been run. This is not a vacant lab with a contract mower. Someone is home when a pipe breaks at two in the morning. The cottage and yard are part of the plan, not an afterthought."
	},
	{
		id: "shop",
		title: "Town shop",
		place: "304 Main Street",
		body: "A two-bay shop on the corner of Highway 87 and Highway 12. Day-one fabrication and a front door on Main Street. Students and trades can work in town, not only out on the highway tract. Downtown needs a reason to stay lit. This is that reason."
	}
];
var POWER = {
	lead: "Fergus Electric Cooperative is the partner that makes USDA money possible. The park is written so the co-op can take it, not so a developer can go around it.",
	facts: [
		{
			k: "Co-op",
			v: "Fergus Electric Cooperative, Inc. · member-owned · 1938"
		},
		{
			k: "Reach",
			v: "4,155 members · 14 counties · 4,037 miles of line"
		},
		{
			k: "Musselshell",
			v: "Roundup office · 17128 Hwy 12 East · 406-323-1602"
		},
		{
			k: "Hours",
			v: "Monday–Thursday 7:00 a.m.–5:30 p.m."
		},
		{
			k: "USDA path",
			v: "Rural Economic Development Loan and Grant — the co-op is the applicant"
		}
	],
	usda: [
		"Rural electric cooperatives that borrow from USDA can apply for Rural Economic Development Loan and Grant (REDLG) funds.",
		"USDA lends or grants to the co-op at zero interest. The co-op then lends to a local job-creating project.",
		"Montana has used this exact path — a telephone cooperative lent a million dollars so Custer County could build a multi-use building in Miles City.",
		"The park is a job-creating rural project on co-op lines. That is what the program is for.",
		"The ask of Fergus is a load study, a letter of support, and, if the board agrees, to sit as the USDA intermediary. Not a surprise large load."
	],
	people: [
		{
			name: "Carson Sweeney",
			role: "General Manager",
			where: "Lewistown headquarters · 84423 US Hwy 87 · 406-538-3465"
		},
		{
			name: "Bret Nellermoe",
			role: "Assistant line superintendent, Roundup",
			where: "17128 Hwy 12 East · 406-323-1602"
		},
		{
			name: "Terry Frost",
			role: "Board president · District 5, South Roundup / Musselshell",
			where: "Elected from this ground"
		}
	]
};
var SCHOOLS = [
	{
		name: "Montana State University — Bozeman",
		fit: "Animal and Range Sciences, reproduction, biotechnology, and bioengineering. The laboratory is a field station those departments can use without building a second campus."
	},
	{
		name: "City College at MSU Billings",
		fit: "Fifty minutes down Highway 87. Welding, metal fabrication, carpentry, construction, diesel, and electrical technician. Those shops build the park and then keep it running. Nursing and allied health cover the clinic bay."
	},
	{
		name: "Miles Community College",
		fit: "Pre-veterinary, animal science, livestock management, and agriculture. A two-year path that already points at this kind of work. Dormitory beds in Roundup make a semester rotation possible."
	},
	{
		name: "MSU Extension — Roundup",
		fit: "Already in the county. Reed Cooley, county agent, 204 8th Avenue East, 406-323-2704. 4-H, livestock, and community development. The park should sit next to Extension, not replace it."
	},
	{
		name: "Rocky Vista — Billings veterinary college (in progress)",
		fit: "Billings is working toward a veterinary college. The two nearest accredited colleges today are more than five hundred miles away. A resident veterinarian and a rural clinic in Roundup is the rotation those students will need."
	},
	{
		name: "Local builders and trades",
		fit: "Carpenters, electricians, well drillers, concrete, and fence from Roundup and Billings. City College construction and welding as the pipeline. The story is not a fly-in general contractor. It is the shops that already work here, given a job of this scale."
	}
];
var IMPACT = [
	{
		title: "A payroll that is not a mine",
		body: "Musselshell County is about 5,700 people. Roundup is about 2,100. Coal still holds a large share of the tax base. The county has already been looking for what comes next. A laboratory, a veterinary house, a caretaker, and a rotating student body is a standing payroll. Construction is the first wave. Then grocery, rent, and Main Street after five o’clock."
	},
	{
		title: "Main Street already started",
		body: "The Wier Building at 215 Main is under repair with Montana Main Street money. The state has already put dollars into downtown Roundup. Students and staff give that building, and the rest of the block, a reason to stay open. 304 Main as a town shop puts fabrication on the same street."
	},
	{
		title: "Housing that serves school, not speculation",
		body: "Dormitory rooms on campus keep students in the county instead of driving home to Billings every night. A caretaker cottage and a veterinary house put two households on the land year-round. That is housing with a job attached, which is the kind that lasts."
	},
	{
		title: "Producers at the bench",
		body: "Embryo work is already part of Montana cattle country. The laboratory makes that work local: lattice parts printed here, viability tested here, a veterinarian on the grounds. Extension can walk a producer in. That is economic development a rancher can use, not a brochure."
	}
];
var ASKS = [
	{
		who: "Musselshell County Commission",
		what: "Fifteen minutes on a Targeted Economic Development District for the highway tract, and whether 215 Main remains a partnership path for a Main Street door. Land use and a public letter are the county’s part. The county is not being asked to buy the laboratory."
	},
	{
		who: "Fergus Electric Cooperative",
		what: "A load study for 304 Main and the 314-acre tract. A letter of support. If the board agrees, sit as the USDA Rural Economic Development Loan and Grant intermediary so the park is a co-op project, not a private end-run."
	},
	{
		who: "MSU Extension and partner schools",
		what: "Rotation agreements: beds, benches, and a veterinarian for animal science, pre-veterinary, construction, welding, and electrical students. Extension stays the public door for producers."
	},
	{
		who: "Builders and trades",
		what: "Local general work, City College carpentry and welding, licensed electrical, well and septic. The park is a construction job of real scale. It should be bid to the people who already work in this county."
	}
];
var CONTACTS = {
	county: {
		name: "Musselshell County Commission",
		address: "506 Main Street, Roundup, MT 59072",
		phone: "406-323-1104",
		people: [
			{
				name: "Robert Pancratz",
				role: "District 1 · Chairman",
				cell: "406-331-0096"
			},
			{
				name: "Mike Goffena",
				role: "District 2 · Vice Chairman",
				cell: "406-331-0095"
			},
			{
				name: "Michael Turley",
				role: "District 3",
				cell: "406-331-0097"
			}
		]
	},
	fergus: {
		name: "Fergus Electric Cooperative",
		hq: "84423 US Hwy 87, Lewistown, MT 59457 · 406-538-3465",
		roundup: "17128 Hwy 12 East, Roundup · 406-323-1602",
		hours: "Monday–Thursday 7:00 a.m.–5:30 p.m.",
		mail: "ferguselectric@ferguselectric.coop",
		web: "https://www.ferguselectric.coop/"
	},
	extension: {
		name: "MSU Extension — Musselshell / Golden Valley",
		address: "204 8th Avenue East, Roundup, MT 59072",
		phone: "406-323-2704",
		agent: "Reed Cooley, county agent"
	},
	land: {
		name: "Land assembly",
		firm: "Neil Beyer · ELEPHAS / eXp Realty",
		phone: "406-272-6568",
		email: "neil@elephasre.com"
	}
};
var PROPERTIES = [
	{
		id: "hwy87-314",
		rank: 1,
		name: "US Hwy 87 N campus",
		address: "S34 T09N R25E, Roundup area",
		price: "$900,000",
		acres: "314.19 acres",
		role: "campus",
		why: "The park. Open grazing, ponderosa, wild hay, on-site power, existing well. Room for the laboratory, dormitory, veterinary house, caretaker cottage, and pasture. First sale in more than a century.",
		show: "Power, well, highway frontage, where the lab pad and housing sit, where cattle stay.",
		maps: "https://www.google.com/maps/search/?api=1&query=US+Hwy+87+N+Roundup+MT",
		agent: "Keller Williams Yellowstone · Garilynn Rapp · MLS 359976",
		notes: "This is the campus. Everything else supports it."
	},
	{
		id: "hwy87-pad",
		rank: 2,
		name: "Highway 87 shop pad",
		address: "US Hwy 87, Roundup area",
		price: "$275,000",
		acres: "3.48 acres",
		role: "lab",
		why: "A compact pad for printing and shop work if the 314-acre tract needs a separate utility-ready lot.",
		show: "Utilities, SID, three-phase if present.",
		maps: "https://www.google.com/maps/search/?api=1&query=Highway+87+Roundup+MT+commercial",
		notes: "Confirm power before anyone pours a slab."
	},
	{
		id: "main-304",
		rank: 3,
		name: "304 Main Street",
		address: "304 Main Street, Roundup, MT",
		price: "$180,000",
		acres: "five commercial lots",
		building: "1,114 sf, two-bay shop",
		role: "shop",
		why: "Day-one town shop. Corner of Highway 87 and Highway 12. Students and trades work downtown. Main Street stays lit.",
		show: "Door height, panel, floor drain, floodplain.",
		maps: "https://www.google.com/maps/search/?api=1&query=304+Main+Street+Roundup+MT",
		agent: "Big M Realty · Kenneth Minnie · 406-323-3111 · MLS 358499",
		notes: "The town door. Keep it even if the highway campus is the campus."
	},
	{
		id: "main-218",
		rank: 4,
		name: "218 Main Street",
		address: "218 Main Street, Roundup, MT",
		price: "$150,000",
		acres: "town lot",
		building: "3,561 sf, 1915 brick",
		role: "town",
		why: "Classrooms and offices on Main Street. A 1915 brick building that can hold a study hall and a public desk for producers.",
		show: "Floodplain, roof, heat, whether it can take a classroom load.",
		maps: "https://www.google.com/maps/search/?api=1&query=218+Main+Street+Roundup+MT",
		notes: "Confirm floodplain before anyone writes an offer."
	},
	{
		id: "first-st",
		rank: 5,
		name: "1st Street E office",
		address: "Nhn 1st Street E, Roundup, MT",
		price: "$200,000",
		acres: "town lot",
		role: "town",
		why: "Admin fallback if 218 Main does not pencil.",
		show: "Parking, heat, whether it is a clean office.",
		maps: "https://www.google.com/maps/search/?api=1&query=1st+Street+E+Roundup+MT",
		notes: "Third choice for a town desk."
	},
	{
		id: "klein",
		rank: 6,
		name: "24 Klein Road",
		address: "24 Klein Rd, Roundup area",
		price: "$92,500",
		acres: "7.56 acres",
		role: "lab",
		why: "Industrial-edge pad. Overflow shop if the highway pad is gone.",
		show: "Access, power, neighbors.",
		maps: "https://www.google.com/maps/search/?api=1&query=24+Klein+Rd+Roundup+MT",
		notes: "South / Signal Peak geography."
	},
	{
		id: "buck-52",
		rank: 7,
		name: "52 Buckskin Road",
		address: "52 Buckskin Rd, Roundup area",
		price: "$149,000",
		acres: "40 acres",
		role: "pasture",
		why: "Livestock buffer and student pasture. Quiet ground around the campus.",
		show: "Water, fence, whether it can carry a small flock or herd.",
		maps: "https://www.google.com/maps/search/?api=1&query=52+Buckskin+Rd+Roundup+MT",
		notes: "Assemblage with 120 Buckskin if both are clean."
	},
	{
		id: "buck-120",
		rank: 8,
		name: "120 Buckskin Road",
		address: "120 Buckskin Rd, Roundup area",
		price: "$99,000",
		acres: "40 acres",
		role: "pasture",
		why: "Same cluster. Two forties make a working pasture block for the veterinary house.",
		show: "Shared fence with 52. Water.",
		maps: "https://www.google.com/maps/search/?api=1&query=120+Buckskin+Rd+Roundup+MT",
		notes: "Ask for a one-plat sketch with 52, 51, and 118."
	},
	{
		id: "holly",
		rank: 9,
		name: "25 Holly Lane",
		address: "25 Holly Ln, Roundup area",
		price: "$82,999",
		acres: "13.28 acres",
		role: "housing",
		why: "A smaller tract that can take overflow student housing or a second caretaker lot.",
		show: "Drive, well, whether a simple dormitory wing would sit right.",
		maps: "https://www.google.com/maps/search/?api=1&query=25+Holly+Ln+Roundup+MT",
		notes: "Price cut 2 September."
	},
	{
		id: "buck-tbd",
		rank: 10,
		name: "TBD Buckskin Road",
		address: "Buckskin Rd, Roundup area",
		price: "$69,500",
		acres: "20 acres",
		role: "pasture",
		why: "Entry pasture. Useful if the larger forties do not close.",
		show: "Legal access. Water.",
		maps: "https://www.google.com/maps/search/?api=1&query=Buckskin+Rd+Roundup+MT",
		notes: "Map 51 and 118 Buckskin with this if an assemblage is real."
	}
];
var COUNTY_LETTER = `Musselshell County Commission
506 Main Street
Roundup, MT 59072

Commissioners —

This is a brief for a biotech park in Musselshell County: a livestock laboratory, dormitory housing for students, a veterinary house, and a caretaker on the grounds, with a two-bay shop on Main Street.

The laboratory prints open lattice parts and tests whether an early embryo is sound — a quiet vibration and a trained reading, under a resident veterinarian. Cattle and sheep producers are the first users. Students from Montana State, City College at MSU Billings, and Miles Community College would live on site and work the benches and the trades.

The highway tract under review is 314 acres on US Hwy 87 N. 304 Main Street is the town shop. Fergus Electric Cooperative is the power partner and the USDA door: rural electric co-ops can apply for Rural Economic Development Loan and Grant funds and lend them to a job-creating project.

The county is not being asked to buy the laboratory. The ask is fifteen minutes on a Targeted Economic Development District for the highway tract, and whether 215 Main remains a partnership path for a Main Street door.

The Wier Building is already under repair with Montana Main Street money. A campus of this scale is what gives that street a reason to stay open — construction first, then a standing staff and a rotating student body.

A printed brief is attached. We will walk in when the Commission has time.

Musselshell Biotech Park
Roundup, Montana`;
var FERGUS_LETTER = `Carson Sweeney, General Manager
Bret Nellermoe, Assistant Line Superintendent — Roundup
Terry Frost, Board President, District 5
Fergus Electric Cooperative
84423 US Hwy 87, Lewistown, MT 59457
Roundup office: 17128 Hwy 12 East

This park is drawn for Fergus Electric, not around it.

Musselshell Biotech Park would put a livestock laboratory, student dormitory, veterinary house, and caretaker cottage on the 314-acre tract on US Hwy 87 N, with a two-bay shop at 304 Main Street. Both sites sit on Fergus lines.

The USDA path that fits a cooperative is the Rural Economic Development Loan and Grant program. USDA lends or grants to a rural electric co-op at zero interest. The co-op then lends to a local job-creating project. Montana has already used this path. The park is that kind of project.

The ask of Fergus is three things, in order:

1. A load study for 304 Main and the highway tract — staged, not a surprise large load.
2. A letter of support the county and USDA can put in a file.
3. If the board agrees, Fergus as the USDA intermediary so this is a co-op economic-development project.

We will leave a printed brief at the Roundup office and are ready for twenty minutes when the desk is open.

Musselshell Biotech Park
Roundup, Montana`;
var SCHOOLS_LETTER = `To partner schools and MSU Extension —

Musselshell Biotech Park in Roundup is a rural campus with four parts that schools can actually use: a livestock laboratory, dormitory housing, a veterinary house with a resident veterinarian, and a caretaker on the grounds.

The laboratory prints open lattice structures and tests embryonic viability for cattle and sheep. Students work the benches. City College trades — welding, carpentry, construction, electrical — build and keep the place. Miles Community College pre-veterinary and animal-science students have a semester rotation that is not a drive-by. Montana State animal science has a field station that is not in Bozeman. Extension in Roundup remains the public door for producers.

The ask is a rotation agreement, not a new college. Beds, benches, and a veterinarian. We would like twenty minutes with the people who place students.

A printed brief is attached.

Musselshell Biotech Park
Roundup, Montana`;
var TABS = [
	{
		id: "park",
		label: "Park"
	},
	{
		id: "campus",
		label: "Campus"
	},
	{
		id: "power",
		label: "Power"
	},
	{
		id: "schools",
		label: "Schools"
	},
	{
		id: "sites",
		label: "Sites"
	},
	{
		id: "impact",
		label: "Impact"
	},
	{
		id: "ask",
		label: "Ask"
	}
];
var ROLE_FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "campus",
		label: "Campus"
	},
	{
		id: "lab",
		label: "Lab"
	},
	{
		id: "housing",
		label: "Housing"
	},
	{
		id: "vet",
		label: "Vet"
	},
	{
		id: "shop",
		label: "Shop"
	},
	{
		id: "town",
		label: "Town"
	},
	{
		id: "pasture",
		label: "Pasture"
	}
];
function ParkApp() {
	const [tab, setTab] = (0, import_react.useState)("park");
	const [slide, setSlide] = (0, import_react.useState)(0);
	const [copied, setCopied] = (0, import_react.useState)(null);
	const copy = (0, import_react.useCallback)(async (key, text) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(key);
			window.setTimeout(() => setCopied(null), 1600);
		} catch {
			setCopied(null);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
				if (tab !== "park") return;
				e.preventDefault();
				setSlide((s) => e.key === "ArrowRight" ? Math.min(SLIDES.length - 1, s + 1) : Math.max(0, s - 1));
			}
			const n = Number(e.key);
			if (n >= 1 && n <= TABS.length) setTab(TABS[n - 1].id);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [tab]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				"data-nav": true,
				className: "sticky top-0 z-30 border-b border-border bg-bg/95 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-1 flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-accent uppercase",
							children: "Musselshell Biotech Park"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm text-muted",
							children: "Roundup, Montana · county brief"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "no-print shrink-0",
						onClick: () => window.print(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Save PDF"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "no-print mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 pb-3",
					children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"data-tab": t.id,
						onClick: () => setTab(t.id),
						className: cn("min-h-11 whitespace-nowrap rounded-sm px-3 text-sm font-medium transition-colors duration-150", tab === t.id ? "bg-accent text-accent-fg" : "text-muted hover:bg-raised hover:text-fg"),
						children: t.label
					}, t.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:py-8",
				children: [
					tab === "park" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, {
						slide,
						setSlide
					}),
					tab === "campus" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Campus, {}),
					tab === "power" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Power, {}),
					tab === "schools" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Schools, {}),
					tab === "sites" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sites, {}),
					tab === "impact" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Impact, {}),
					tab === "ask" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ask, {
						copy,
						copied
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "no-print border-t border-border px-4 py-4 text-center text-xs text-subtle",
				children: "Musselshell Biotech Park · Roundup, Montana · For the county, the co-op, the schools, and the builders."
			})
		]
	});
}
function Deck({ slide, setSlide }) {
	const s = SLIDES[slide];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-4",
				children: STATS.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-surface px-4 py-4 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl font-medium tracking-tight text-fg tabular-nums",
						children: st.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: st.label
					})]
				}, st.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-xl bg-surface shadow-border",
				children: [s.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-video overflow-hidden bg-raised",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: s.caption ?? s.title,
						className: "size-full object-cover"
					}), s.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 bottom-0 bg-bg/80 px-4 py-3 sm:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-fg",
							children: s.caption
						})
					}) : null]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 p-5 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-accent uppercase",
							children: s.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-3xl text-base leading-relaxed text-muted",
							children: s.body
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print flex items-center justify-between gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => setSlide((n) => Math.max(0, n - 1)),
						disabled: slide === 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Back"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1.5",
						children: SLIDES.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": `Slide ${i + 1}`,
							onClick: () => setSlide(i),
							className: cn("h-2 rounded-full transition-all duration-150", i === slide ? "w-6 bg-accent" : "w-2 bg-subtle hover:bg-muted")
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setSlide((n) => Math.min(SLIDES.length - 1, n + 1)),
						disabled: slide === SLIDES.length - 1,
						children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "no-print text-center text-xs text-subtle",
				children: "Arrow keys move slides"
			})
		]
	});
}
function Campus() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium tracking-tight",
				children: "What stands on the ground"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: "Five parts. The laboratory does the science. The dormitory holds the students. The veterinary house holds the veterinarian. The caretaker holds the land. The town shop holds Main Street."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/campus-concept.jpg",
					alt: "Campus concept: laboratory, dormitory, veterinary house, caretaker cottage",
					className: "aspect-video w-full rounded-lg object-cover shadow-border"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/lab-bench.jpg",
					alt: "Lattice structure in a laboratory dish",
					className: "aspect-video w-full rounded-lg object-cover shadow-border"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-3",
				children: CAMPUS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg bg-surface p-5 shadow-border print-break",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-accent",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium text-fg",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-subtle",
								children: c.place
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: c.body
					})]
				}, c.id))
			})
		]
	});
}
function Power() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium tracking-tight",
				children: "Fergus Electric and the USDA co-op path"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: POWER.lead
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: POWER.facts.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-surface px-4 py-4 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-accent uppercase",
						children: f.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg",
						children: f.v
					})]
				}, f.k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-3 rounded-lg bg-surface p-5 shadow-border",
				children: POWER.usda.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-sm leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-accent",
						children: i + 1
					}), line]
				}, line))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: POWER.people.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-raised p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-fg",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: p.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-subtle",
							children: p.where
						})
					]
				}, p.name))
			})
		]
	});
}
function Schools() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium tracking-tight",
				children: "Schools, students, and the people who build"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: "The park is a rotation site, not a new university. Beds, benches, a veterinarian, and a job of real scale for the trades already taught fifty minutes down the road."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/housing.jpg",
				alt: "Student dormitory with veterinary house and caretaker cottage",
				className: "aspect-video w-full rounded-lg object-cover shadow-border"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-3",
				children: SCHOOLS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg bg-surface p-5 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-fg",
						children: s.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: s.fit
					})]
				}, s.name))
			})
		]
	});
}
function Sites() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [open, setOpen] = (0, import_react.useState)(PROPERTIES[0].id);
	const list = (0, import_react.useMemo)(() => filter === "all" ? PROPERTIES : PROPERTIES.filter((p) => p.role === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium tracking-tight",
				children: "Ten sites, in this order"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: "Close on the 314-acre tract and 304 Main if they are clean. Assemble Buckskin if the campus needs quiet pasture. Confirm floodplain on every Main Street brick."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print flex flex-wrap gap-1",
				children: ROLE_FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setFilter(f.id),
					className: cn("min-h-11 rounded-full px-4 text-sm", filter === f.id ? "bg-accent text-accent-fg" : "bg-raised text-muted hover:text-fg"),
					children: f.label
				}, f.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-3",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, {
					property: p,
					open: open === p.id,
					onToggle: () => setOpen(open === p.id ? null : p.id)
				}, p.id))
			})
		]
	});
}
function PropertyCard({ property: p, open, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-lg bg-surface shadow-border print-break",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: onToggle,
			className: "flex w-full items-start gap-4 px-4 py-4 text-left sm:px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-2xl text-accent tabular-nums",
				children: String(p.rank).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-fg",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-wide text-subtle uppercase",
							children: ROLE_LABEL[p.role]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-muted",
						children: p.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-fg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.price }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.acres }),
							p.building ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.building }) : null
						]
					})
				]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 border-t border-border px-4 py-4 sm:px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-fg",
					children: p.why
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-fg",
						children: "Show: "
					}), p.show]
				}),
				p.agent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: p.agent
				}),
				p.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-subtle",
					children: p.notes
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2 pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: p.maps,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex min-h-11 items-center gap-2 rounded-sm bg-accent px-4 text-sm font-medium text-accent-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), "Maps"]
					}), p.listing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: p.listing,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex min-h-11 items-center gap-2 rounded-sm px-4 text-sm text-fg shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" }), "Listing"]
					})]
				})
			]
		})]
	});
}
function Impact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium tracking-tight",
				children: "What a project of this scale does for the county"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: "Roundup is about 2,100 people. The county is about 5,700. A laboratory, beds, a veterinarian, and a caretaker is not a smokestack. It is a reason for Main Street to stay open, and a payroll that is not a mine."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/roundup-prairie.jpg",
				alt: "Prairie west of Roundup",
				className: "aspect-video w-full rounded-lg object-cover shadow-border"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: IMPACT.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg bg-surface p-5 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-fg",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: item.body
					})]
				}, item.title))
			})
		]
	});
}
function Ask({ copy, copied }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium tracking-tight",
				children: "What we are asking"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: "Letters are ready to copy. Nothing here is a tax increase and nothing here asks the county to buy a laboratory."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "size-4" }),
						title: CONTACTS.county.name,
						lines: [
							CONTACTS.county.address,
							CONTACTS.county.phone,
							...CONTACTS.county.people.map((p) => `${p.name} · ${p.role} · ${p.cell}`)
						],
						href: `tel:4063231104`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4" }),
						title: CONTACTS.fergus.name,
						lines: [
							CONTACTS.fergus.hq,
							CONTACTS.fergus.roundup,
							CONTACTS.fergus.hours,
							CONTACTS.fergus.mail
						],
						href: `tel:4065383465`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-4" }),
						title: CONTACTS.extension.name,
						lines: [
							CONTACTS.extension.address,
							CONTACTS.extension.phone,
							CONTACTS.extension.agent
						],
						href: `tel:4063232704`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4" }),
						title: CONTACTS.land.name,
						lines: [
							CONTACTS.land.firm,
							CONTACTS.land.phone,
							CONTACTS.land.email
						],
						href: `tel:4062726568`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col gap-3",
				children: ASKS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg bg-surface p-5 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-fg",
						children: a.who
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: a.what
					})]
				}, a.who))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterBlock, {
				title: "Letter to the Commission",
				text: COUNTY_LETTER,
				k: "county",
				copy,
				copied
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterBlock, {
				title: "Letter to Fergus Electric",
				text: FERGUS_LETTER,
				k: "fergus",
				copy,
				copied
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterBlock, {
				title: "Letter to the schools",
				text: SCHOOLS_LETTER,
				k: "schools",
				copy,
				copied
			})
		]
	});
}
function LetterBlock({ title, text, k, copy, copied }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-raised p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-medium",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: () => copy(k, text),
				children: [copied === k ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), "Copy"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "mt-4 overflow-x-auto whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted",
			children: text
		})]
	});
}
function ContactCard({ icon, title, lines, href }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 text-accent",
		children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-medium text-fg",
			children: title
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-3 flex flex-col gap-1.5",
		children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "text-sm leading-relaxed text-muted",
			children: l
		}, l))
	})] });
	const cls = "rounded-lg bg-surface p-5 shadow-border text-left";
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: cn(cls, "block hover:shadow-border-hover"),
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cls,
		children: inner
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParkApp, {});
}
//#endregion
export { Home as component };
