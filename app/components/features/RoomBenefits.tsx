import Container from '../ui/Container';
import Title from '../ui/Title';

const roomBenefits = [
  {
    title: 'Cancelación flexible',
    description: 'Cancela hasta 7 días antes de la llegada y recibe un reembolso total',
  },
  {
    title: 'Comunicación segura',
    description: 'Comunícate con el anfitrión a través de la plataforma',
  },
  {
    title: 'Alojamiento verificado',
    description: 'Este alojamiento ha sido verificado por nuestro equipo',
  },
];

const RoomBenefits = () => (
  <section className="mt-8 bg-gray-50 py-12">
    <Container>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {roomBenefits.map((benefit) => (
          <div key={benefit.title} className="text-center">
            <Title level={3} size="base" className="mb-2">{benefit.title}</Title>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default RoomBenefits;