import useTools from "../Hooks/useTools";
import Tool from "../HomePage/Tool";

const Tools = () => {
	const [tools] = useTools();
	// console.log(tools)

	return (
		<div className="hero ">
			<div className="grid  lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 overflow-auto ">
				{tools.map((tool, index) => (
					<Tool key={tool._id} tool={tool}></Tool>
				))}
			</div>
		</div>
	);
};

export default Tools;
