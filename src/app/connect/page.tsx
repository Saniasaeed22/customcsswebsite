export default function connect(){
    return(
    
        <section className="connect" style={{ backgroundImage:"url(connect.png)"}}>
        
            <div className="connect-content">
            <h2>Connect With Us</h2>
                <input type="text" placeholder="Full Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="number" placeholder="Phone" required/>
                <textarea placeholder="Your Message" rows={5}></textarea>
                <button className="btn">Send Message</button>
            </div>
     </section>
         
    );}

    
