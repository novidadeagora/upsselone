import { useState, useEffect } from "react";
import logo from "@/assets/mago-coxinhas-logo.png";

const Index = () => {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: "",
    time: "",
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      const time = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentDateTime({ date, time });
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl">
        <div className="rounded-2xl bg-card p-8 shadow-2xl border border-border">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 overflow-hidden rounded-xl shadow-lg">
              <img
                src={logo}
                alt="Mago das Coxinhas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-black text-center mb-6 text-fire-red uppercase tracking-tight">
            Seu Pedido Foi Cancelado!
          </h1>

          {/* DateTime Info */}
          <div className="bg-muted rounded-lg p-6 mb-6 text-center">
            <p className="text-lg text-foreground mb-2">
              Seu pedido foi cancelado em{" "}
              <span className="font-bold text-fire-red">{currentDateTime.date}</span>{" "}
              às{" "}
              <span className="font-bold text-fire-red">{currentDateTime.time}</span>
            </p>
            <p className="text-muted-foreground">
              O reembolso está sendo processado pela nossa equipe.
            </p>
          </div>

          {/* Cancellation Fee */}
          <div className="bg-fire-red/10 border border-fire-red/30 rounded-lg p-6 mb-6 text-center">
            <p className="text-lg text-foreground mb-2">
              Pague a taxa de cancelamento de:{" "}
              <span className="text-2xl font-bold text-fire-red">R$ 7,90</span>
            </p>
          </div>

          {/* Instructions */}
          <div className="text-center mb-6">
            <p className="text-lg text-foreground font-semibold">
              Por favor, efetue o pagamento agora e receba o seu reembolso em até{" "}
              <span className="text-fire-orange font-bold">5 minutos</span>.
            </p>
          </div>

          {/* Payment Button */}
          <div className="flex justify-center">
            <a 
              href="https://www.pagamentos-seguro.link/checkout/1649c2ac-b616-43a5-bfbf-44d38b8603ea"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fire-red hover:bg-fire-red/90 text-white font-bold text-xl px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 uppercase tracking-wide inline-block"
            >
              Pagar Agora R$ 7,90
            </a>
          </div>

          {/* Footer Info */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Em caso de dúvidas, entre em contato com nossa equipe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
