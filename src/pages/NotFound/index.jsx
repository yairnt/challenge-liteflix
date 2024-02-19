import { Link } from 'react-router-dom';

import Text from '../../components/Text';
import './styles.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Text size="h1" color="primary-redMedium" underline>
        404 - Not Found
      </Text>
      <Text size="p" color="default">
        La página que estás buscando no existe.
      </Text>
      <Link to="/">
        <Text size="p" color="secondary-greenStrong" underline>
          Volver a la página de inicio
        </Text>
      </Link>
    </div>
  );
};

export default NotFound;
