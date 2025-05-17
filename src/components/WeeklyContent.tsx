import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Book, GraduationCap, Headphones, MessageSquare, Pen } from 'lucide-react';
import GrammarSection from './week-sections/GrammarSection';
import ReadingSection from './week-sections/ReadingSection';
import ListeningSection from './week-sections/ListeningSection';
import WritingSection from './week-sections/WritingSection';
import SpeakingSection from './week-sections/SpeakingSection';

interface Skill {
  icon: React.ElementType;
  name: string;
  content: string;
}

interface Week {
  title: string;
  topics: string[];
  skills: Skill[];
}

type SectionType = 'grammar' | 'reading' | 'listening' | 'writing' | 'speaking';

interface WeeklyContentProps {
  weeks: Week[];
  defaultSection?: SectionType;
}

const WeeklyContent: React.FC<WeeklyContentProps> = ({ weeks, defaultSection }) => {
  const { weekId } = useParams();
  const [activeSection, setActiveSection] = useState<SectionType>(defaultSection || 'grammar');
  const [isLoading, setIsLoading] = useState(true);
  const weekIndex = weekId ? parseInt(weekId) - 1 : 0;
  const week = weeks[weekIndex];

  useEffect(() => {
    // Simulate loading content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [weekId, activeSection]);

  if (!week) {
    return <div>Week not found</div>;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const sections: { id: SectionType; label: string; icon: React.ElementType }[] = [
    { id: 'grammar', label: 'Grammar', icon: Book },
    { id: 'reading', label: 'Reading', icon: GraduationCap },
    { id: 'listening', label: 'Listening', icon: Headphones },
    { id: 'writing', label: 'Writing', icon: Pen },
    { id: 'speaking', label: 'Speaking', icon: MessageSquare },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{week.title}</h1>

      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`
                  flex items-center py-4 px-1 border-b-2 font-medium text-sm
                  ${activeSection === id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                <Icon className="h-5 w-5 mr-2" />
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="grid gap-8">
        {activeSection === 'grammar' && <GrammarSection weekId={weekIndex + 1} />}
        {activeSection === 'reading' && <ReadingSection weekId={weekIndex + 1} />}
        {activeSection === 'listening' && <ListeningSection weekId={weekIndex + 1} />}
        {activeSection === 'writing' && <WritingSection weekId={weekIndex + 1} />}
        {activeSection === 'speaking' && <SpeakingSection weekId={weekIndex + 1} />}

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills Practice</h2>
          <div className="space-y-4">
            {week.skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="flex items-start">
                  <Icon className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">{skill.name}</h3>
                    <p className="text-gray-600">{skill.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyContent;