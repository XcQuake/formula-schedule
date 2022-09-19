import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Stats.scss';

const Stats: React.FC = () => {
  const history = useHistory();
  const { content } = useTypedSelector((state) => state.popup);

  const handleClose = (): void => {
    history.goBack();
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
