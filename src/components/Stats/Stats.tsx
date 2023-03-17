import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Stats.scss';

const Stats: React.FC = () => {
  const navigate = useNavigate();
  const { content } = useTypedSelector((state) => state.stats);

  const handleClose = (): void => {
    navigate(-1);
  };

  return (
    <div className="stats stats_open">
      <button
        className="stats__back-button"
        aria-label="close"
        type="button"
        onClick={handleClose}
      />
      {content}
    </div>
  );
};

export default Stats;
