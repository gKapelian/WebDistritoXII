export default function OnePerson({heading, description, blurbs}) {
  return (
    <div className="bg-off-white pv4">
      <div className="ph3 mw7 center">
        <h2 className="f2 b lh-title mb2">{heading}</h2>
        {description.map((elemento, index)=> {
            return <p className="mb4 mw6" key={index}>{elemento}</p>
        })}
        <div className="flex-ns flex-wrap mhn2-ns mb3">
          {
            blurbs.map(p => (
              <div key={p.name} className="ph2-ns center mb4">
                <div className="flex bg-grey-1">
                  <img src={p.image} alt="person image" className="center db mv3 w-240" />
                </div>
                <div className="left-right-column">
                  <p className="bold tc mt2 mb1">
                    {p.name}
                  </p>
                  <div className="r-col">
                    <p>{p.text}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
