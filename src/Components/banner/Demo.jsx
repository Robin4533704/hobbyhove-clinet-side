import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const TooltipDemo = () => (
  <div className="space-x-4">
    <a id="not-clickable">◕‿‿◕</a>
    <Tooltip anchorSelect="#not-clickable">
      <button>You can't click me :(</button>
    </Tooltip>

    <a id="clickable">◕‿‿◕</a>
    <Tooltip anchorSelect="#clickable" clickable>
      <button>You can click me!</button>
    </Tooltip>
  </div>
);

export default TooltipDemo;
