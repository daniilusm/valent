/** @format */

import { useMemo } from "react";
import cx from "classnames";
import { bool, string } from "prop-types";

import ErrorMessage from "./ErrorMessage";

import s from "./Input.module.scss";

const Input = ({ className, error, isDark, ...props }) => {
  const hasValue = useMemo(() => {
    return props.value.length > 0;
  }, [props.value]);

  return (
    <div className={s.wrapper}>
      <input
        className={cx(className, s.root, {
          [s.fillBorder]: hasValue,
          [s.darkInput]: isDark,
        })}
        {...props}
      />
      {error && <ErrorMessage text={error} isBlackText={isDark} />}
    </div>
  );
};

Input.propTypes = {
  className: string,
  error: string,
  isDark: bool,
};

Input.defaultProps = {
  isDark: false,
};

export default Input;
