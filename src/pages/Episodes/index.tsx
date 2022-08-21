import { FC } from 'react'
import { useParams } from 'react-router-dom';

const Episode: FC = () => {
  const { param } = useParams()
  return (
    <div>
      Episode  {param}
    </div>

  );
}

export default Episode;