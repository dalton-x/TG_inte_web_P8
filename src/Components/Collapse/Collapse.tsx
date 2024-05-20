import { useState, useRef } from 'react'

function Collapse({ title, content }) {
	const [active, setActive] = useState('')
	const [height, setHeight] = useState('0px')
  const [upDown, setUpDown] = useState('up')

	const contentCollapse = useRef<HTMLDivElement>(null)

	const toggleCollapse = () => {
		setActive(active === '' ? 'active' : '');
		let newHeight = '';
		if (active === 'active') {
			newHeight = '0px';
		} else if (contentCollapse.current) {
			newHeight = `${contentCollapse.current.scrollHeight}px`;
		}
		setHeight(newHeight);
		setUpDown(active === 'active' ? '0deg' : '-180deg');
	};
	return (
		<div className="ks-collapse-section">
      <div onClick={toggleCollapse} role="button">
        <div className={`ks-collapse ${active}`} >
          <span className="ks-collapse-title">{title}</span> 
					<div className="ks-chevron">
						<i className="fa-solid fa-chevron-up ks-textWhite ks-chevron-fa"
								style={{ 
									transform: `rotate(${upDown})`
								}}></i>
					</div>
        </div>
      </div>
			<div
				ref={contentCollapse}
				style={{ maxHeight: `${height}` }}
				className="ks-collapse-content"
			>
				<div className="ks-collapse-text">
						{content}
				</div>
			</div>
		</div>
	)
}

export default Collapse