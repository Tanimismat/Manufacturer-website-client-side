import useTools from '../Hooks/useTools';
import Tool from '../HomePage/Tool';

const Tools = () => {

    const [tools] = useTools()
    console.log(tools)

    return (
        <div className='tools'>
            {
                tools.map((tool, index) => <Tool key={tool._id} tool={tool}></Tool>)
            }
        </div>
    );
};

export default Tools;