import Footer from "../Footer/footer";
import layout from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={layout.container}>
      <section className="App">
        {props.children}
      </section>

      <Footer />
    </div>
  );
}
