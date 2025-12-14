import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SemesterButton from '@/components/SemesterButton';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col gradient-hero">
      <div className="flex-1 flex flex-col">
        <div className="bg-background/95 backdrop-blur-sm">
          <Header />
        </div>
        
        <main className="flex-1 px-4 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16 animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Course Syllabus
              </h2>
              <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
                Select a semester to view the complete syllabus for all subjects. 
                Click on any subject to view detailed unit-wise content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[1, 2, 3, 4, 5, 6].map((semester, index) => (
                <SemesterButton 
                  key={semester} 
                  semester={semester}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </main>
        
        <div className="bg-background">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
