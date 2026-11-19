import Container from '../ui/Container';
import Divider from '../ui/Divider';

const Footer = () => {
  const footerSections = [
    {
      title: 'Atención al cliente',
      links: ['Centro de ayuda', 'Seguridad', 'Cancelaciones', 'Resseñas'],
    },
    {
      title: 'Alojamiento',
      links: ['Alquilar tu hogar', 'Anfitrión profesional', 'Publicar tu negocio', 'Centro de anfitriones'],
    },
    {
      title: 'Airbnb',
      links: ['Newsroom', 'Nuevas características', 'Empleos', 'Inversores'],
    },
  ];

  return (
    <footer className="bg-gray-50 mt-12 sm:mt-16 pt-8 sm:pt-12 pb-20 sm:pb-8">
      <Container>
        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 text-sm mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider className="my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            © 2026 Airbnb Clone. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Términos
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
