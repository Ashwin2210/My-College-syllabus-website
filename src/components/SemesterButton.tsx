import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { semesterColors } from '@/data/syllabusData';

interface SemesterButtonProps {
  semester: number;
  delay?: number;
}

const SemesterButton = ({ semester, delay = 0 }: SemesterButtonProps) => {
  const colors = semesterColors[semester as keyof typeof semesterColors];
  
  return (
    <Link 
      to={`/semester/${semester}`}
      className={`semester-btn ${colors.bg} ${colors.hover} group relative flex flex-col items-center justify-center p-8 md:p-10 rounded-2xl text-primary-foreground min-h-[180px] md:min-h-[220px] opacity-0 animate-slide-up`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex flex-col items-center gap-4">
        <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
          <BookOpen className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        
        <div className="text-center">
          <span className="block text-sm uppercase tracking-widest opacity-80 font-body">Semester</span>
          <span className="block text-4xl md:text-5xl font-display font-bold mt-1">{semester}</span>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <span className="text-xs uppercase tracking-wider opacity-0 group-hover:opacity-70 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 font-body">
          View Subjects →
        </span>
      </div>
    </Link>
  );
};

export default SemesterButton;
