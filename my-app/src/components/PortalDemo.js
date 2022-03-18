import React from "react";
import ReactDOM from "react-dom";

const portaldemo = document.getElementById('portal-root')
function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Portal Demo</h1>,
        portaldemo
    )
}
export default PortalDemo