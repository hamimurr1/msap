import { useParams } from "react-router-dom";

const Login = () => {
  const { role } = useParams(); // user / provider / manager

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 capitalize">
          {role} Login
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />

          <button
            type="submit"
            className="w-full py-2 bg-[#41644A] text-white rounded-lg hover:opacity-90"
          >
            Login as {role}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
