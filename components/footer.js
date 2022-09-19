// import Link from 'next/link'
import NewsletterForm from './newsletter-form'
import SocialIcon from './social-icon'

export default function Footer() {
  return (
    <footer className="bg-black ph3 pv4 white">
      <div className="mw7 center pt3">
        <div className="measure-narrow center mb4">
          <img className="db w4 center mb4 br0" src="/img/logoBlanco.svg" alt="Kaldi logo" />
        </div>
        <div className="flex-ns justify-between">
          <div>
            <h3 className="f4 b lh-title mb1 primary">Distrito XII</h3>
            <ul className="mb3">
              <li><a href="/" className="link">Home</a></li>
              <li><a href="/acerca" className="link">Acerca de Nosotros</a></li>
              <li><a href="/cv" className="link">Dejanos tu CV</a></li>
              <li className="primary"><a href="" className="link">www.distritoxii.com.ar</a></li>
            </ul>
          </div>
          <div>
            <h3 className="f4 b lh-title mb1 primary"><a href="/donde" className="link">Dirección: Luna 902, Parque Patricios</a></h3>
            <ul className="mb3">
              <li><a href="tel:" className="link">Llamanos o Whatsapp a <br />() </a></li>
            </ul>
          </div>
          <div>
            <h3 className="f4 b lh-title mb2 primary">Redes Sociales</h3>
            <ul className="mhn2">
              <SocialIcon link="#" iconPath="/img/icons-facebook.svg" />
              <SocialIcon link="#" iconPath="/img/icons-instagram.svg" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
