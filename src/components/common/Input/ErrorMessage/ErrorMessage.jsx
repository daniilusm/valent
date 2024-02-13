import { bool, string } from 'prop-types';
import cx from 'classnames';

import s from './ErrorMessage.module.scss';

const ErrorMessage = ({ className, text, isBlackText }) => {
  return (
    <div className={cx(className, s.root, { [s.blackText]: isBlackText })}>
      {text}
    </div>
  );
};

ErrorMessage.propTypes = {
  className: string,
  text: string,
  isBlackText: bool,
};

ErrorMessage.defaultProps = {
  isBlackText: false,
};

export default ErrorMessage;
