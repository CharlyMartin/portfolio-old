import React from 'react';

function Footer(props) {
  const renderList = () => {
    return props.data.map((obj) => {
      return (
        <div className="footer-items">
          <h3 className="footer-item-feature" key={obj.feature}>{obj.feature}</h3>
          <p className="footer-item-benefit">{obj.benefit}</p>
        </div>
      );
    })
  };

  return (
    <div className="footer">
      <div className="page-container">
        <h2>How I can help</h2>
        {renderList()}
      </div>
    </div>
  );
}

export default Footer;
