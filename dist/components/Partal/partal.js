import ReactDOM from 'react-dom';
var Partal = function (_a) {
    var children = _a.children;
    return ReactDOM.createPortal(children, document.body);
};
export default Partal;
