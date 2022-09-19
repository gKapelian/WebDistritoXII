import SocialIcon from './social-icon-big'

const RedItem = ({name, img, link, description }) => (
  <div className="ph2">
    <h3 className="b f5 grey-3 tc lh-title mb3">{name}</h3>
	<div
		className="tc center"
	>
		<SocialIcon
			link={link}
			iconPath={img}
		/>
	</div>
  </div>
)

export default function Redes({heading, description, redes}) {
  return (
    <div className="bg-off-white pv4 ph3">
      <div className="mw7 center">
        <h2 className="f2 b lh-title mb3">{heading}</h2>
        <p className="mw6">{description}</p>
        <div className="flex-ns mhn2-ns mw7">
          {
            redes.map(p => (
              <div className="w-33-ns ph2" key={p.name}>
                <RedItem 
                  name={p.name}
                  img={p.img}
                  description={p.description}
                  link={p.link}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
