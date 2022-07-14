import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const initialValue = window.location.pathname === '/';

  const [isHome, setIsHome] = useState(initialValue);
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      if (location.pathname === '/') {
        setIsHome(true);
      } else {
        setIsHome(false);
      }
    });
  }, [history]);

  return (
    <footer className={`footer${isHome ? ' home-footer' : ''}`}>
      <div className="container p-4">
        <div className="row">
          <div className="col text-center">
            <p className="copyrights">
              &copy; Team Binary Beast. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <a
              href="https://github.com/Videh75/CalorieTracker_RNSIT-Hack"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
