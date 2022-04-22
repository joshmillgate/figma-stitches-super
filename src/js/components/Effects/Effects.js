import React, {useGlobal} from 'reactn';
import { Link } from 'react-router-dom';
import Shadow from './Shadow';
import BorderRadius from './BorderRadius';
import messages from '../../helpers/randomMessages';

const Effects = () => {
  const [shadows] = useGlobal('shadows');
  const [borderRadii] = useGlobal('radii');
  const hasShadows = Object.keys(shadows).length > 0;
  const hasBorderRadii = Object.keys(borderRadii).length > 0;

  const feedbackShadows = messages.emptyShadows[
      Math.floor(Math.random() * messages.emptyShadows.length)
    ];
  const feedbackBorderRadii = messages.emptyBorderRadii[
    Math.floor(Math.random() * messages.emptyBorderRadii.length)
  ];


  return(
    <div className="row">
      <div className="col">
        <div className="w-full border-b border-gray-200 py-4">
          <h2 className="t-beta">Effects</h2>
          <p className="intro">Effect Styles we found in your Figma file</p>
        </div>
      </div>
      <div className="col">
        <h3 className="t-gamma mt-4">Border-radius</h3>
      </div>
      { hasBorderRadii
        ? (
          Object.keys(borderRadii).map((i) => (
            <BorderRadius key={i} {...borderRadii[i]} />
          ))
        ) :
        <div className="col mt-4">
          <div className="richtext">
            <p>{feedbackBorderRadii}</p>
          </div>
        </div>
      }
      <div className="col">
        <h3 className="t-gamma mt-4">Shadows</h3>
      </div>
      { hasShadows
        ? (
          Object.keys(shadows).map((i) => (
            <Shadow key={i} {...shadows[i]} />
          ))
        ) :
        <div className="col mt-4">
          <div className="richtext">
            <p>{feedbackShadows}</p>
          </div>
        </div>
      }

      <div className="col flex justify-between mt-8">
        <Link to="/typography" className="button button--green">
          Previous
        </Link>
        <Link to="/export" className="button button--green">
          Next
        </Link>
      </div>
    </div>
  )
}

export default Effects;
