const Unauthorized = ({ onBackToLogin }) => {
    return (
      <div className="text-center p-6">
        <h1 className="text-2xl font-bold text-red-600">Unauthorized</h1>
        <p>You are not authorized to access this application.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={onBackToLogin}
        >
          Back to Login
        </button>
      </div>
    );
  };
  
  export default Unauthorized;
  