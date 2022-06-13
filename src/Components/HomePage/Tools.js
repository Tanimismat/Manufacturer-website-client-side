import useTools from '../Hooks/useTools';
import Tool from '../HomePage/Tool';

const Tools = () => {

    const [tools] = useTools()
    console.log(tools)

    return (
        <div className='tools'>
            
        </div>
    );
};

export default Tools;