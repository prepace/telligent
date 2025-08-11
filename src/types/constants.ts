/* 
    Serve as enums of a particular data model
    Ex.: Locations have a LocationType
*/

// eslint-disable-next-line
 const locationTypes = [
	"geology",
	"continent",
	"region",
	"nation",
	"state",
	"province",
	"county",
	"municipality",
	"admin_area",
	"neighborhood",
	"street",
	"parcel",
] as const;

// eslint-disable-next-line
const processSteps = [
	"ocr",
	"nlp",
	"gpt",
	"locations",
	"entities",
	"events",
	"tags",
	"transcription",
	"words",
];

export type LocationType = (typeof locationTypes)[number];
export type ProcessStep = (typeof processSteps)[number];
