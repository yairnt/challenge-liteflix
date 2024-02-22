/* eslint-disable react/prop-types */

import sizes from '../../themes/Sizes';
import colors from '../../themes/Colors';

import './styles.css';

const Text = ({
  as: Component = 'p',
  size,
  weight = 400,
  customSize,
  color,
  children,
  underline,
  onClick = () => {},
  styles
}) => {
  const [theme, shade] = color ? color.split('-') : ['default', 'default'];

  const style = {
    ...styles,
    fontSize: sizes[size] || customSize || sizes.default,
    color: colors[theme]?.[shade] || colors[color] || color,
    fontWeight: weight || 'regular',
    textDecoration: underline ? "underline" : 'none',
  };

  return (
    <Component
      onClick={onClick}
      className="component-text"
      style={{ ...style }}
    >
      {children}
    </Component>
  );
};

export default Text;

