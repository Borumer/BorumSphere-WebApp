import layout from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={layout.container}>
      {props.children}

      <footer className={layout.footer}>
        <a
          className={layout.vercelText}
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={layout.logo} />
        </a>
        <p>&copy; 2020 Borum Tech</p>
        <ul className={layout.legalLinks}>
          {/* <li className={layout.privacyPolicy}>
            <Link href="/legal/PrivacyPolicy">
              <a>Privacy Policy</a>
            </Link>
          </li> */}
        </ul>
      </footer>
    </div>
  );
}
