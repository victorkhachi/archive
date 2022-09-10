import './index.scss'
import Img from '../../img/guide.png'
import Socials from '../../components/socials'

export default function Guide(){
    return(
        <div className='home guide'>
            <div className="top_img">
                <img src={Img} alt="" />
            </div>
            <p>Hendrerit egestas turpis venenatis vitae. In sit nisl tortor vel id.</p>
            <button>Download guide</button>
            <div style={{position:'relative'}}>
            <Socials/>
            </div>

        </div>
    )
}