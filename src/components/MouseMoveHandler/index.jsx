import PropTypes from 'prop-types';
import { useMouse } from '../../hooks';
function MouseMoveHandler ({ render }) {
  const {x, y} = useMouse();
  return render({ x, y });
}

MouseMoveHandler.propTypes = {
  render: PropTypes.func.isRequired,
};

export default MouseMoveHandler;
