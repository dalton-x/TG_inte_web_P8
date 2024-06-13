import { useState, useRef } from 'react'
import CollapseInterface from "../../Interfaces/CollapseInterface"

function Collapse({ title, content }: Readonly<CollapseInterface>) {
	const [state, setState] = useState({
		active: '',
		height: '0px',
		upDown: 'down'
	});
	
	const contentCollapse = useRef<HTMLDivElement>(null);

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
		setState(prevState => {
			let newHeight = '0px';
			if (prevState.active !== 'active' && contentCollapse.current) {
				newHeight = `${contentCollapse.current.scrollHeight}px`;
			}
			return {
				active: prevState.active === '' ? 'active' : '',
				height: newHeight,
				upDown: prevState.active === 'active' ? '0deg' : '-180deg'
			};
		});
	};

	return (
		<div className="ks-collapse-section">
      <div onClick={toggleCollapse} role="button">
        <div className={`ks-collapse ${state.active}`} >
          <span className="ks-collapse-title">{title}</span> 
					<div className="ks-chevron">
						<i className="fa-solid fa-chevron-up ks-textWhite ks-chevron-fa"
								style={{ 
									transform: `rotate(${state.upDown})`
								}}></i>
					</div>
        </div>
      </div>
			<div
				ref={contentCollapse}
				style={{ maxHeight: `${state.height}` }}
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