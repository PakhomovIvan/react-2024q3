import { IconType } from 'react-icons';
import { TbBrandDiscord } from 'react-icons/tb';
import { VscGithub } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import * as style from './Footer.module.css';

type Data = { Icon: IconType; link: string };

const data: Data[] = [
  {
    Icon: VscGithub,
    link: 'https://github.com/PakhomovIvan',
  },
  {
    Icon: TbBrandDiscord,
    link: 'https://discordapp.com/users/hits4382',
  },
];

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.wrapper}>
          <div className={style.contact}>
            {data.map(({ Icon, link }) => (
              <Link to={link} target="_blank" key={link}>
                <Icon className={style.icon} />
              </Link>
            ))}
          </div>
          <div className={style.inc}>&copy; 2024</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
