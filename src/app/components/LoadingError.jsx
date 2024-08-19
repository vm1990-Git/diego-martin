const LoadingError = ({ loading, error, page }) => {
  if (loading && page === 1) {
    return (
      <div className="loading-container">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="my-3 fw-semibold">Cargando Propiedades</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        Error loading properties: {error.message}
      </div>
    );
  }

  return null;
};

export default LoadingError;
