export default function SocialIcon({ link, iconPath }) {
  return (
    <li className="dib ph2 raise">
      <a target="_blank" rel="noreferrer" href={link} className="link bg-white black db relative br-100 pa2">
        <img src={iconPath} width="50px" height="50px" className="db" />
      </a>
    </li>
  )
}
