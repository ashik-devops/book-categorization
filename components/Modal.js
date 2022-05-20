import classNames from "classnames";

export default function SuperLargeModal({ state, children }) {
  const visible = {
    margin: "0",
    position: "fixed",
    "z-index": "99999",
  };
  return (
    <div
      id="superlarge-modal-size-preview"
      className={classNames({
        modal: true,
        "overflow-y-auto": true,
        show: state === "visible",
      })}
      style={state === "visible" ? visible : {}}
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-body p-10 text-center">{children}</div>
        </div>
      </div>
    </div>
  );
}
