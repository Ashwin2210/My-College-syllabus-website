import { Printer } from 'lucide-react';

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="no-print inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-elegant hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-body"
    >
      <Printer className="w-5 h-5" />
      Print Syllabus
    </button>
  );
};

export default PrintButton;
