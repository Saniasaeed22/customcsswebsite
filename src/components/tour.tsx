import React from 'react'

function Tour() {
  return (
    <div>
      <section id='tour'>
        <div className='row'>
            <div className='content-col'>
        <h2>UP COMING TOURS & DESTINATION</h2>
        <div className='line'></div>
        <p>Embark on a journey of discovery and adventure with our expertly 
        crafted tours and stunning destinations. Whether you dream of relaxing
         on pristine beaches, wandering through vibrant city streets, or immersing
          yourself in rich cultural experiences, we have something for every traveler.
           From exotic getaways to tranquil retreats, each destination is carefully selected
         to ensure unforgettable memories. Let us take you beyond the ordinary, creating stories
          you’ll treasure for a lifetime. Your next adventure awaits—let us make it extraordinary </p>
          <button className='btn'>Learn More</button>
          </div>
          <div className='col image-col'>
            <div className='image-gallery'>
            <img src='./img3.png' alt=''></img>
            <img src='./img4.png' alt=''></img>
            <img src='./img5.png' alt=''></img>
            <img src='./img6.png' alt=''></img>

            </div>
          </div>
          </div>
      </section>
    </div>
  )
}

export default Tour;
