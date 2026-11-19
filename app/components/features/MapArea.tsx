import Container from '../ui/Container';

const MapArea = () => {
  return (
    <Container className="py-8">
      <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96 sm:h-full min-h-96 flex items-center justify-center">
        <div className="text-center">
          <svg
            className="w-12 h-12 text-gray-400 mx-auto mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 20l-5.447-2.724A1 1 0 003 16.382V5.618a1 1 0 011.553-.894L9 7.882m0 0l6-3.5m-6 3.5v11.618m6-11.5l5.447-2.724A1 1 0 0021 5.618v10.764a1 1 0 01-1.553.894L15 12.882m0 0l-6 3.5m6-3.5v11.618"
            />
          </svg>
          <p className="text-gray-600 font-medium">Mapa interactivo</p>
          <p className="text-sm text-gray-500">Próximamente</p>
        </div>
      </div>
    </Container>
  );
};

export default MapArea;
