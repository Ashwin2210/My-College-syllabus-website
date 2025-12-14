import { useParams, Link } from 'react-router-dom';
import { getSemester, semesterColors } from '@/data/syllabusData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubjectCard from '@/components/SubjectCard';
import { ArrowLeft, GraduationCap } from 'lucide-react';

const SemesterPage = () => {
  const { id } = useParams<{ id: string }>();
  const semesterNumber = parseInt(id || '1', 10);
  const semester = getSemester(semesterNumber);

  if (!semester) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Semester Not Found</h1>
          <Link to="/" className="text-primary hover:underline font-body">Return to Home</Link>
        </div>
      </div>
    );
  }

  const colors = semesterColors[semesterNumber as keyof typeof semesterColors];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header showHomeButton />
      
      <main className="flex-1 px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Semester Header Card */}
          <div 
            className={`${colors.bg} rounded-2xl p-6 md:p-8 mb-8 md:mb-12 shadow-elegant animate-scale-in`}
          >
            <div className="flex items-center gap-4 text-primary-foreground">
              <div className="p-4 rounded-xl bg-white/20 backdrop-blur-sm">
                <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest opacity-80 font-body">Semester</p>
                <h1 className="font-display text-3xl md:text-4xl font-bold">{semesterNumber}</h1>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-primary-foreground/90 font-body">
                <span className="font-semibold">{semester.subjects.length} Subjects</span> in this semester
              </p>
            </div>
          </div>
          
          {/* Subjects Grid */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 animate-fade-in">
              Subjects
            </h2>
            
            <div className="grid gap-4">
              {semester.subjects.map((subject, index) => (
                <SubjectCard 
                  key={subject.code} 
                  subject={subject}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
          
          {/* Back Link */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Semesters
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SemesterPage;
