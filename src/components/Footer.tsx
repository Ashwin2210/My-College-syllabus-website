const Footer = () => {
  return (
    <footer className="no-print py-8 px-4 text-center border-t border-border/50 bg-muted/30">
      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} Ramakrishna Mission Vivekananda College. All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground/70 mt-2 font-body">
        B.Com Information System Management - Course Syllabus Portal
      </p>
    </footer>
  );
};

export default Footer;
