import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import { Subject } from '@/data/syllabusData';

interface SubjectCardProps {
  subject: Subject;
  delay?: number;
}

const SubjectCard = ({ subject, delay = 0 }: SubjectCardProps) => {
  return (
    <Link 
      to={`/subject/${subject.code}`}
      className="subject-card group block opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          <FileText className="w-6 h-6" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground font-body mb-1">
                {subject.code}
              </p>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {subject.title}
              </h3>
            </div>
            
            <ArrowRight className="flex-shrink-0 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 mt-1" />
          </div>
          
          <p className="mt-2 text-sm text-muted-foreground font-body">
            {subject.units.length} Units
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
