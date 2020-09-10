import React from 'react';

const EllipsisText = (props) => {
    let {
        text,
        length,
        tail
    } = props
    return (
        (text.length > length) ? <p>{text.substring(0, length)}...</p> : <p>{text}</p>
      );
}
 
export default EllipsisText;