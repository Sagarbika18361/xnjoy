import React from 'react'
import RedirectPage from './components/RedirectPage'

export default  function page({params}) {


  return (
    <section className='mb-40'>
      <RedirectPage code={params?.code} />
    </section>
  )
}
