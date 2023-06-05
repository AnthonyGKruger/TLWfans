import Image from "next/image";

const Fan = (props) => {
	return (
		<div className="col-span-4 lg:col-span-6">
			{/*<!-- Component: Basic blog card --> */}
			<div className="overflow-hidden rounded bg-white border-2 text-slate-500 shadow-md shadow-slate-200">
				{/*  <!-- Image --> */}
				<figure>
					<Image
						height={200}
						width={200}
						src={props.imageLocation}
						alt="card image"
						className="mx-auto"
					/>
				</figure>
				{/*  <!-- Body--> */}
				<div className="p-6">
					<header className="mb-4">
						<h3 className="text-xl font-medium text-slate-700 text-center">
							{props.itemCode}
						</h3>
					</header>
					<div className="w-full overflow-x-auto">
						<table
							className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200"
							cellspacing="0"
						>
							<tbody>
								{/* <tr>
									<th
										scope="col"
										className="h-6 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
									>
										Name
									</th>
									<th
										scope="col"
										className="h-6 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
									>
										Title
									</th>
								</tr> */}
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Fan Name:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.fanName}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Brand:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.brand}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Material:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.material}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Blades:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.bladeCount}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Blade Material:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.bladeMaterial}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Reversable Blades:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.reversableBlades}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Blade Span:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.bladeSpan}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Control Method:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.controlMethod}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Light Kit:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.lightKit}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Recommended Globe:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.recommendedGlobe}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Reversable Motor:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.reversableMotor}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Rod Length:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.rodLength}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Warranty:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.warranty}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Timer:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.timer}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Coastal:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.coastal}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Speed:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.speed}
									</td>
								</tr>
								<tr>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										Motor Strength:
									</td>
									<td className="h-6 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
										{props.motorWattage}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			{/*<!-- End Basic blog card --> */}
		</div>
	);
};

export default Fan;
