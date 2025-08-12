
export default function Masthead() {
  return (
			<div className="border-b border-gray-200 py-4">
				<div className="container mx-auto px-4 flex flex-col items-center">
					<div className="text-xs  mb-2">
						{new Date().toLocaleString("default", { month: "long" })}{" "}
						{new Date().getDate()}, {new Date().getFullYear()}
					</div>
					<div className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-center">
						Telligent
					</div>
					<div className="text-sm  mt-2">
						Mental Wellness for a Better Tomorrow
					</div>
				</div>
			</div>
		);
}