import { Link } from 'react-router-dom';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import logo from '/logo2.png';

const Footer = () => {
  return (
    <footer className='text-light-2 bg-dark-2 border-t border-dark-1-border p-3 lg:p-4'>
      <section className='flex justify-between'>
        <ul className='flex items-center gap-2 text-3xl lg:text-4xl'>
          <li>
            <Link
              rel='nofollow'
              to='https://github.com/JuaniLlaberia'
              target='_blank'
              className='hover:text-light-1'
            >
              <AiOutlineGithub />
            </Link>
          </li>
          <li>
            <Link
              rel='nofollow'
              to='https://www.linkedin.com/in/juan-ignacio-llaberia-241b351b3/'
              target='_blank'
              className='hover:text-light-1'
            >
              <AiOutlineLinkedin />
            </Link>
          </li>
        </ul>
        <div className='flex items-center lg:text-lg'>
          <img
            src={logo}
            className='w-12 lg:w-16'
          />
          © {new Date().getFullYear()}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
