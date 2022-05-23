import useTools from '../Hooks/useTools';
import Tool from '../HomePage/Tool';

const Tools = () => {

    const [tools] = useTools()

    return (
        <div className='tools'>
            {
                tools.map(tool => <Tool
                    key={tool.id}
                    tool={tool}
                ></Tool>)
            }
        </div>
    );
};

export default Tools;