import React from 'react'
import CardBlogPet from '../components/CardBlogPet'
import DetailBlogPet from '../components/DetailBlogPet'
import DetailBlogTincion from '../components/DetailBlogTincion'

function Blog() {
  return (
    <div className='flex justify-center'>
      <CardBlogPet/>
      <DetailBlogPet/>
      <DetailBlogTincion/>
    </div>
  )
}

export default Blog