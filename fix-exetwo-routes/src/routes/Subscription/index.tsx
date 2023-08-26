import { Link } from "react-router-dom";
import Button from "../../component/Button";
import Card from "../../component/Card";

export default function Subscription() {
  return (
    <main>
      <section>
        <div className="container">
          <Link to="/">
            <h2 className="section-title">Faça sua inscrição!</h2>
          </Link>
          <div className="mt30 mb30">
            <Card title="Página de inscrição" />
          </div>
          <div className="dflex">
            <Link to="/promotion">
              <Button text="Ver promoção" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
