import { ArrowUpRight, User, DotsThreeOutline, FigmaLogo, BehanceLogo, InstagramLogo } from "phosphor-react"
import './style.css'

export default function Card(props) {
  return (
    <>
      <div className="card">

        <header>
          <DotsThreeOutline weight="light" size={40} />
          <span>ITH.LAB</span>
          <User size={20} weight="bold" />
        </header>

        <section>
          <div className="profile-image">
            <img src={props.photo} alt={props.name} />
          </div>
          <div className="infos">
            <h3 className="name">{props.name} <span className="pronoum">{props.pronoum}</span></h3>
            <span className="occupation">{props.occupation} @ {props.enterprise}</span>
            <p className="description">
              {props.description}
            </p>
          </div>
        </section>

        <div className="social-links">
          <p>Social Links:</p>

          <span className="social">
            <FigmaLogo size={24} weight="bold" />
            <a href={`https://figma.com/@${props.social.figma}`}>
              {props.social.figma}
              <ArrowUpRight size={16} />
            </a>
          </span>

          <span className="social">
            <BehanceLogo size={24} weight="bold" />
            <a href={`https://behance.net/${props.social.behance}`}>
              {props.social.behance}
              <ArrowUpRight size={16} />
            </a>

          </span>

          <span className="social">
            <InstagramLogo size={24} weight="bold" />
            <a href={`https://instagram.com/${props.social.instagram}`}>
              {props.social.instagram}
              <ArrowUpRight size={16} />
            </a>
          </span>

          <span className="country">{props.country}</span>
        </div>

      </div>
    </>
  )
}