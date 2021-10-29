import React,{Component} from 'react';
export class Content extends Component{
    render()
    {
        return(
            <div className="Content">
                <div className='Left'>
                <ul>
                    <li>Flex</li>
                    <li>Layout</li>
                    <li>React</li>
                </ul>
                </div>
                <div className='Right'></div>
            </div>
        )
    }
}