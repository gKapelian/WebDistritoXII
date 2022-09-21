export default function Jumbotron({ imageBanner, imageUrl }) {

	return (
		<div className="ph3 bg-center cover progressive replace" data-href={imageUrl}>
			<img src="/img/global-preloader.jpg" className="preview" alt="jumbotron image" />
			<div className="center centerElement imageStyle">
				<img src={imageBanner}/>
			</div>
		</div>
	)
}
