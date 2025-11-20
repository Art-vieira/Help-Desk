/**
 * Página Home: dashboard inicial do usuário após login.
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="mt-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-blue-800 mb-2">Bem-vindo ao HelpDesk!</h1>
        <p className="text-gray-600 text-center max-w-md mb-8">
          Você está logado. Aqui podem aparecer seus chamados, atalhos, notificações, ou outras informações do sistema.
        </p>
        {/* Adicione widgets, cards, gráficos ou atalhos abaixo */}
        {/* Exemplo: */}
        {/* <div className="bg-white p-6 rounded-xl shadow w-full max-w-sm">Card de exemplo</div> */}
      </div>
    </div>
  );
}
