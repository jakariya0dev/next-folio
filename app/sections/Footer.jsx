const Footer = () => {
  return (
    <footer className="bg-gray-900 text-center text-gray-200 py-6 border-t-2 border-gray-800">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Jakariya | Full-Stack Developer. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
