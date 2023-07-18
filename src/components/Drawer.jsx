import React, { forwardRef } from 'react';
const Drawer = forwardRef((props, ref) => {
    return (
        <menu className="dropdown" ref={ref}>
            {props.children}
        </menu>
    );
});
export default Drawer;