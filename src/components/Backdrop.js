import React from 'react';
import '../style.css';

export default function Backdrop(props) {
  return <div className="backdrop" onClick={props.onCancel} />;
}
