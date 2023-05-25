import React from 'react'
import CardBlogPet from '../components/CardBlogPet'
import DetailBlogPet from '../components/DetailBlogPet'
import DetailBlogTincion from '../components/DetailBlogTincion'
import deg_rosado from '../static/images/deg_rosa.png'
import deg_azul from '../static/images/deg_azul.png'
import deg_naranja from '../static/images/deg_naranja.png'
import deg_verde from '../static/images/deg_verde_oscuro.png'

function Blog() {
  return (
    <div className='flex justify-center'>
      <CardBlogPet/>
      <DetailBlogPet/>
      <DetailBlogTincion/>
      <GradientVerde/>
      <GradientNaranja/>
    </div>
  )
}

function GradientNaranja() {
  return (
    <div className="h-80 w-80 lg:w-1/3 rounded-full absolute top-80 md:top-3/4 lg:top-1/3 lg:left-28 left-0 z-0">
      <img src={deg_naranja} alt="naranaja" />
    </div>
  );
}

function GradientVerde() {
  return (
    <div className="h-80 w-80 lg:w-2/5 rounded-full absolute lg:top-0 lg:right-32 top-10 right-0 z-0 opacity-90">
      <img src={deg_verde} alt="verde" />
    </div>
  );
}

export default Blog