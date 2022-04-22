import React, { useGlobal } from 'reactn';
import ClipboardJS from 'clipboard';
import { Link } from 'react-router-dom';
import Highlight, { defaultProps } from 'prism-react-renderer';
import util from 'util';
import { cleanupTheme } from '../../helpers/helpers';

const Export = () => {
  const [theme] = useGlobal();
  const cleanTheme = cleanupTheme(theme);

  const fileContent = `import { createStitches } from '@stitches/react'

  const stitches = createStitches(
    ${util.inspect({ theme: cleanTheme }, { depth: null })}
  )

  export { stitches as default }`;

  const markup = `${JSON.stringify(cleanTheme, null, ' ')}`.trim();

  React.useEffect(() => {
    const clipboard = new ClipboardJS('.copy-button');

    return () => clipboard.destroy();
  }, []);

  return (
    <div className="row">
      <div className="col flex">
        <div className="w-full border-b border-gray-200 py-4">
          <h2 className="t-beta">Export theme</h2>
          <p className="intro">
            See prepared JSON for createStitches. Copy to clipboard below to get
            full stitches.config with import and export
          </p>
        </div>
      </div>
      <div className="col mt-8 flex items-center">
        <button
          className="button button--grey mr-4 copy-button"
          data-clipboard-text={fileContent}
        >
          Copy Stitches config
        </button>
      </div>
      <div className="col mt-8 relative">
        <Highlight {...defaultProps} code={markup} language="javascript">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
      <div className="col flex justify-between mt-8">
        <Link to="/effects" className="button button--green">
          Previous
        </Link>
      </div>
    </div>
  );
};

export default Export;
