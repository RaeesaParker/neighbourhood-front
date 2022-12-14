import "./InfoModal.css";

const InfoModal = ({
  title,
  message,
  response,
  buttons,
  setVis,
  action,
  actionOn,
}) => {
  //
  const handleOnClick = (val) => {
    console.log(val);

    if (action && val == actionOn) {
      action();
    }
    setVis(false);
  };

  return (
    <modal-overlay>
      <info-modal>
        <modal-heading>
          <i className="fa-solid fa-triangle-exclamation alert-icon"></i>
          {title}
        </modal-heading>
        <modal-content>
          <p>{message}</p>
        </modal-content>
        <footer>
          {buttons.map((b, index) => {
            return (
              <button
                key={index}
                onClick={() => handleOnClick(b)}
              >
                {b}
              </button>
            );
          })}
        </footer>
      </info-modal>
    </modal-overlay>
  );
};

export default InfoModal;
