import github from "../components/images/github.png";
import linkedinn from "../components/images/linkedin.png";
import email from "../components/images/email.png";

export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="button-container">
        <button>
          <a
            href="https://github.com/OmarNahhass"
            target="_blank"
            rel="noopener noreferrer"
            className="button-social"
          >
            <img src={github} alt="Visit My GitHub" />
          </a>
        </button>
        <button>
          {" "}
          <a
            href="https://www.linkedin.com/in/omar-nahhas-840876262/"
            target="_blank"
            rel="noopener noreferrer"
            className="button-social"
          >
            <img src={linkedinn} alt="Visit My LinkedIn" />
          </a>
        </button>
        <button>
          <a
            href="mailto:omarnahhas@hotmail.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="button-social"
          >
            <img src={email} alt="Email me" />
          </a>
        </button>
      </div>
      <div className="copyright-notice">
        ©2024 Omar Nahhas. All Rights Reserved.
      </div>
    </div>
  );
}
