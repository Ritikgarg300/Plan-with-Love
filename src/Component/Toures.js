import './Toures.css'
import Cards from './Cards'
function Toures({tours,removeTours}){
    return (<div className='container'>
        <h2 className='title'>Plan with Love</h2>
        <div className='cards'>
         {
            tours.map((tour)=>{
                return <Cards {...tour} removeTours={removeTours} key={tour.id} ></Cards>
            })
         }
        </div>
    </div>); 
}
export default Toures;