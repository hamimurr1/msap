import { useParams, useNavigate } from "react-router-dom";

const Login = () => {
  const { role } = useParams(); // user / provider / manager
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // redirect based on role
    if (role === "user") {
      navigate("/user/dashboard");
    } else if (role === "provider") {
      navigate("/provider/dashboard");
    } else if (role === "manager") {
      navigate("/manager/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 capitalize">
          {role} Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41644A]"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41644A]"
          />

          <button
            type="submit"
            className="w-full py-2 bg-[#41644A] text-white rounded-lg hover:opacity-90"
          >
            Login as {role}
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full py-2 border rounded-lg text-sm hover:bg-gray-50"
          >
            Back to Home
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
