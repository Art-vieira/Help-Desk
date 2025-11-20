import { useForm } from "react-hook-form";
import LogoIconDark from "../imagens/Logo_IconDark.jpg";
import LoginBackground from "../imagens/Login_Background.jpg";

type LoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Fundo azul à esquerda (desktop) */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src={LoginBackground}
            alt="Login background"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Card do formulário */}
        <div className="w-full p-8 md:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col items-center mb-4">
            <img
              src={LogoIconDark}
              alt="HelpDesk"
              className="w-12 h-12 mb-2"
            />
            <span className="text-xl font-bold text-blue-800">HelpDesk</span>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Acesse o portal</h2>
              <p className="text-sm text-gray-500 mb-4">
                Entre usando seu e-mail e senha cadastrados.
              </p>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mt-2">
                E-MAIL
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Informe o e-mail" })}
                placeholder="exemplo@mail.com"
                className="w-full p-2 border rounded bg-gray-50 mt-1 mb-2"
              />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email.message}</p>
              )}
              <label htmlFor="password" className="block text-xs font-semibold text-gray-600 mt-2">
                SENHA
              </label>
              <input
                id="password"
                type="password"
                {...register("password", { required: "Digite sua senha" })}
                placeholder="Digite sua senha"
                className="w-full p-2 border rounded bg-gray-50 mt-1 mb-2"
              />
              {errors.password && (
                <p className="text-xs text-red-600">{errors.password.message}</p>
              )}
              <button
                type="submit"
                className="w-full mt-4 py-2 bg-black text-white rounded"
              >
                Entrar
              </button>
            </div>
            <div className="bg-gray-100 rounded-xl border p-6 text-center">
              <p className="font-semibold text-sm mb-1">
                Ainda não tem uma conta?
              </p>
              <p className="text-xs text-gray-500 mb-2">
                Cadastre agora mesmo
              </p>
              <button
                type="button"
                className="w-full py-2 rounded bg-gray-200 font-semibold hover:bg-gray-300"
              >
                Criar conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
