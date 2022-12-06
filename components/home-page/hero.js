import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return (
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image
            src="/images/site/youssouf.jpg"
            alt="An image showing Youssouf"
            width={300}
            height={300}
          />
        </div>
        <h1>Hi, I'm Youssouf</h1>
        <p>
          I blog about web developpement - especialy frontend framworks like
          Angular or React.
        </p>
      </section>
    );
}

export default Hero;