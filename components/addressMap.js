import React from 'react';

export default function AddressMap() {
	return (
		<div
			className="bg-grey-1 flex-l mhn1-l ph3 center mw7 google-map-code"
			style={{
				width : '100%'
			}}
		>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.377732711456!2d-58.3969958!3d-34.645162299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb6a495547e7%3A0x35720e7390a2085a!2sLuna%20902%2C%20C1437%20CABA!5e0!3m2!1ses!2sar!4v1662962651569!5m2!1ses!2sar"
				width="100%"
				height="100%"
				frameBorder="0"
				style={{
					border : 0,
					minHeight : '400px'
				}}
				allowFullScreen=""
				loading="lazy"
				aria-hidden="false"
				tabIndex="0"
			>
			</iframe>
		</div>
	);
}
