// redirect to /about page using Link component
import Link from 'next/link';

//when people go to /start-here, they will automatically redirected to /about. Automatically redirect
//to /about page when they go to /start-here
function Contact() {
    return <div> Send me
    
    <a href="mailto:jdcampolargo@hotmail.com"> an email</a>

    </div>
  }
  
  export default Contact