import "./voice-call.scss";

const VoiceCall = () => {
  return (
    <div className="voice-call-container">
      <div className="voice-card">
        <div className="card-content" id="secundary">
          <img src="./assets/images/image6.png" />
          <span>Candidate</span>
        </div>
      </div>
      <div className="voice-card">
        <div className="card-content" id="primary">
          <img src="./assets/images/michael.png" />
          <span>You</span>
        </div>
      </div>
    </div>
  );
};

export default VoiceCall;
