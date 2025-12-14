import { useParams, Link } from 'react-router-dom';
import { getSubject, semesterColors } from '@/data/syllabusData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrintButton from '@/components/PrintButton';
import { ArrowLeft, BookOpen, Hash } from 'lucide-react';

const SubjectPage = () => {
  const { code } = useParams<{ code: string }>();
  const subject = getSubject(code || '');

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Subject Not Found</h1>
          <Link to="/" className="text-primary hover:underline font-body">Return to Home</Link>
        </div>
      </div>
    );
  }

  const colors = semesterColors[subject.semester as keyof typeof semesterColors];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header showHomeButton />
      
      <main className="flex-1 px-4 py-8 md:py-12 print-content">
        <div className="max-w-4xl mx-auto">
          {/* Subject Header */}
          <div className="mb-8 md:mb-12 animate-fade-in">
            <div className="flex flex-wrap items-center gap-3 mb-4 no-print">
              <span className={`${colors.bg} text-primary-foreground px-3 py-1 rounded-full text-sm font-medium font-body`}>
                Semester {subject.semester}
              </span>
              <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium font-body flex items-center gap-1">
                <Hash className="w-3 h-3" />
                {subject.code}
              </span>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {subject.title}
            </h1>
            
            <div className="flex items-center gap-2 text-muted-foreground font-body">
              <BookOpen className="w-5 h-5" />
              <span>{subject.units.length} Units</span>
            </div>
            
            {/* Print-only header info */}
            <div className="hidden print:block mt-4 text-sm text-muted-foreground">
              <p>Course Code: {subject.code}</p>
              <p>Semester: {subject.semester}</p>
            </div>
          </div>
          
          {/* Print Button */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <PrintButton />
          </div>
          
          {/* Units */}
          <div className="space-y-6">
            {subject.units.map((unit, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 md:p-8 shadow-elegant border border-border/50 opacity-0 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 100}ms`, animationFillMode: 'forwards' }}
              >
                <h2 className="font-display text-xl md:text-2xl font-bold text-primary mb-4">
                  {unit.title}
                </h2>
                <p className="text-foreground font-body leading-relaxed text-justify">
                  {unit.content}
                </p>
              </div>
            ))}
          </div>
          
          {/* Navigation Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 no-print animate-fade-in" style={{ animationDelay: '700ms' }}>
            <Link 
              to={`/semester/${subject.semester}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors duration-300 font-body"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Semester {subject.semester}
            </Link>
            
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity duration-300 font-body"
            >
              All Semesters
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubjectPage;
