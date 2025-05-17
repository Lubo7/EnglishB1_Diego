import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

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

interface HomeProps {
  weeks: Week[];
}

const Home: React.FC<HomeProps> = ({ weeks }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">English B1 Course Overview</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {weeks.map((week, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{week.title}</h2>
            <ul className="space-y-2 mb-6">
              {week.topics.slice(0, 3).map((topic, topicIndex) => (
                <li key={topicIndex} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {topic}
                </li>
              ))}
              {week.topics.length > 3 && (
                <li className="text-gray-500 italic">
                  +{week.topics.length - 3} more topics...
                </li>
              )}
            </ul>
            <div className="space-y-3 mb-6">
              {week.skills.map((skill, skillIndex) => {
                const Icon = skill.icon;
                return (
                  <div key={skillIndex} className="flex items-start">
                    <Icon className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">{skill.name}</h3>
                      <p className="text-sm text-gray-600">{skill.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link
              to={`/week/${index + 1}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              View Week Details
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;