import React from 'react'

function Explore() {
  return (
    <div>
      <section id='Explore'>
        <div className='title'>
            <h2>Explore The World With Us</h2>
            <div className='line'></div>
        </div>
        <div className='row'>
            <div className="col">
                <img src="./img1.png" alt="" />
                <h3>Everest Camp Trek</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Non doloribus tempora praesentium minus mollitia animi 
                   obcaecati consequatur pariatur quos ipsam iusto placeat nisi 
                   odit officia corrupti adipisci,illum saepe id?</p>
                   <a href='#' className='btn'>Learn More</a>
            </div>
            <div className="col">
                <img src="./img2.png" alt="" />
                <h3>Walking Holidays</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Non doloribus tempora praesentium minus mollitia animi 
                   obcaecati consequatur pariatur quos ipsam iusto placeat nisi 
                   odit officia corrupti adipisci,illum saepe id?</p>
                   <a href='#' className='btn'>Learn More</a>
            </div>

        </div>

      </section>
    </div>
  )
}

export default Explore
