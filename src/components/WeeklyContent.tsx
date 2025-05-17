import React from 'react';
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

interface WeeklyContentProps {
  weeks: Week[];
}

const WeeklyContent: React.FC<WeeklyContentProps> = ({ weeks }) => {
  const { weekId } = useParams();
  const weekIndex = weekId ? parseInt(weekId) - 1 : 0;
  const week = weeks[weekIndex];

  if (!week) {
    return <div>Week not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{week.title}</h1>

      <div className="grid gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Topics</h2>
          <ul className="space-y-2">
            {week.topics.map((topic, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <GrammarSection weekId={weekIndex + 1} />
        <ReadingSection weekId={weekIndex + 1} />
        <ListeningSection weekId={weekIndex + 1} />
        <WritingSection weekId={weekIndex + 1} />
        <SpeakingSection weekId={weekIndex + 1} />

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