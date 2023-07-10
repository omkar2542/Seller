import { withTheme } from '@emotion/react';
import './FirstPage.css'
import img1 from './images1234.png';


export default function FirstPage(props) {


    const items = [1, 2, 3, 4, 5, 6];
    return (
        <div className='table-data'>
            <div className='title'>{props.title}</div>
            <table className='actual-table'>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Salse (USD)</th>
                    </tr>

                    {items.map((item, index) => (
                        ( index%2===0? 
                            
                    <tr style={{backgroundColor:'rgb(223,223,223)'}}>
                        <td className='image'> <img src={img1}/> <div className='text'>US</div></td>
                        <td> Cell 2</td>
                    </tr>
                            
                        : 
                        
                    <tr style={{backgroundColor:'white'}}>
                        <td className='image'><img src={img1}/>  <div className='text'>US</div> </td>
                        <td> Cell 2</td>
                    </tr>
                        )
                    
                    ))}

                </tbody>
            </table>
        </div>
    )
}
