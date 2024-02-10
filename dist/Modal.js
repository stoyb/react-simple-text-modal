"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
var _react = _interopRequireDefault(require("react"));
var _ModalModule = _interopRequireDefault(require("./Modal.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  let {
    isOpen,
    handleClose,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: isOpen ? _ModalModule.default.modalContainerBlock : _ModalModule.default.modalContainerNone
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default.modalContent
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: _ModalModule.default.modalText
  }, children), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleClose,
    className: _ModalModule.default.modalButton
  }, "X"))));
}
;