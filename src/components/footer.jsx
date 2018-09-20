import React from 'react';

function Footer(props) {
  const renderList = () => {
    return props.data.map((obj) => {
      return (
        <div className="footer-item" key={obj.feature}>
          <div className="footer-item-content">
            <h3 className="footer-item-feature" id={obj.colour}>{obj.feature}</h3>
            <p className="footer-item-benefit">{obj.benefit}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="footer">
      <div className="page-container">
        <h2 className="footer-title">How I can help</h2>

        <div className="footer-items">
          {renderList()}
        </div>

      </div>
    </div>
  );
}

export default Footer;
