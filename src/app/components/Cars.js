// component
import Brands from "./Brands"
import CarSlider from "./CarSlider"


const Cars = () => {
    return (
        <section className='h-screen flex items-center bg-yellow-200' id='cars'>
            <div className="container mx-auto">
                <Brands/>
                <CarSlider/>
            </div>
        </section>
    )
}

export default Cars