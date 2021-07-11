import footer from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={footer.footer}>
            <a
                className={footer.vercelText}
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{" "}
                <img src="/vercel.svg" alt="Vercel Logo" className={footer.logo} />
            </a>
            <p>&copy; 2021 Borum Tech</p>
            <ul className={footer.legalLinks}>
                {/* <li className={layout.privacyPolicy}>
            <Link to="/legal/PrivacyPolicy">
              <a>Privacy Policy</a>
            </Link>
          </li> */}
            </ul>
        </footer>
    );
}