
export default function Jumbotron({ title, subtitle, imageUrl }) {

	const centerElement = {
		"minHeight" : "30rem",
		"maxWidth" : "30rem",
	};

	const imageStyle = {
		width : "auto",
		height : "100%",
		left : "auto"
	};


	return (
		<div className="ph3 bg-center cover progressive replace" data-href={imageUrl}>
			<img src="/img/global-preloader.jpg" className="preview" alt="jumbotron image" />
			<div className="center centerElement imageStyle">
				<img src="/img/logobaner.png"/>
			</div>
		</div>
	)
}
