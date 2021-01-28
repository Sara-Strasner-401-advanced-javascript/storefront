import './footer.scss';

function Footer() {
  return (
    <div className="footer">
      <footer>
        <h4>
          by Sara Strasner | Stacy Burris | Tina Myers |{' '}
          <a href="https://github.com/sarastrasner" className="text-info">
            Find me on Github
        </a>{' '}
        |{' '}
          <a
            href="https://www.linkedin.com/in/sarastrasner/"
            className="text-info"
          >
            Find me on LinkedIn
        </a>
        </h4>
      </footer>
    </div>
  );
}

export default Footer;
