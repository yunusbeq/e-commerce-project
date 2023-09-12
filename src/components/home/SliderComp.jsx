import React from 'react'
import Slider from 'react-slick';


const SliderComp = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div>
       <Slider {...settings}>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-7xl font-bold'>En Kaliteli Saatler</div>
            <div className='text-lg my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur neque voluptate alias maiores dignissimos distinctio assumenda. Corporis odio tempora architecto quibusdam aut ipsum! Veniam voluptates quas consequatur vel saepe nihil?</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
          </div>

          <img src="https://productimages.hepsiburada.net/s/21/375/9914377732146.jpg/format:webp" alt=""></img>
          </div>


          
          
          <div className='!flex items-center bg-gray-1oo px-6'>
            <div className=''>
              <div className='text-6xl font-bold'>En Kaliteli Saatler</div>
              <div className='text-lg my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur neque voluptate alias maiores dignissimos distinctio assumenda. Corporis odio tempora architecto quibusdam aut ipsum! Veniam voluptates quas consequatur vel saepe nihil?</div>
              <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img src="https://img01.huaweifile.com/eu/tr/huawei/uomcdn/TRHW/pms/202305/gbom/6941487291861/428_428_0F736D413B72037EF1B18AF87D83030Dmp.png" alt=""></img>
          </div>
          
        


        </Slider>
    </div>
  )
}


export default SliderComp