import '../css/Hero.css';
import FancyButton from './FancyButton';

const Hero = () => {
    return (  
        
            <section className="section">
                <div className="hero-info d-flex flex-column justify-content-center align-items-center">
                    <img className='hero-img' src={process.env.PUBLIC_URL + 'Images/heroImg.png'} alt="" />
                    <FancyButton text='اطلب الان'/>
                    <img className='hero-bg' src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask4898%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='url(%23SvgjsLinearGradient4899)'%3e%3c/rect%3e%3cpath d='M1920 0L1632.87 0L1920 405.87z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1632.87 0L1920 405.87L1920 608.5699999999999L855.6199999999999 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M855.6199999999999 0L1920 608.5699999999999L1920 689.75L474.1099999999999 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M474.1099999999999 0L1920 689.75L1920 782.38L451.8399999999999 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 1080L605.34 1080L0 1054.23z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 1054.23L605.34 1080L860.8100000000001 1080L0 585.22z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 585.22L860.8100000000001 1080L1434.0700000000002 1080L0 382.56000000000006z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 382.56000000000006L1434.0700000000002 1080L1773.3000000000002 1080L0 177.97000000000006z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask4898'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='10.94%25' y1='-19.44%25' x2='89.06%25' y2='119.44%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient4899'%3e%3cstop stop-color='rgba(255%2c 255%2c 255%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 255%2c 255%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="" />
                </div>
                <div className='section-img-side'>
                    <img src={process.env.PUBLIC_URL + 'Images/img1.jpg'} alt="" />
                </div>
            </section>
    );
}
 
export default Hero;

