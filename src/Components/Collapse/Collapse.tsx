import { useState, useRef } from 'react'

interface CollapseProps {
  title: string;
  content: string | string[];
}

function Collapse({ title, content }: Readonly<CollapseProps>) {
	const [active, setActive] = useState('')
	const [height, setHeight] = useState('0px')
  const [upDown, setUpDown] = useState('up')

	const contentCollapse = useRef<HTMLDivElement>(null)

	// Si le content n'est pas de type object
	const contentArray = []
	if (!Array.isArray(content)) {
		contentArray.push(content)
	} else {
		for (const list of content) {
				contentArray.push(list)
		}
	}

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
						{contentArray.map((item, index) => (
							<div key={`${index}-${item}`}>{item}</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default Collapse