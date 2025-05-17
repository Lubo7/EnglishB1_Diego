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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Your B1 English Course
        </h1>
        <p className="text-xl text-gray-600">
          A comprehensive 4-week program to prepare for your B1 English exam
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {weeks.map((week, index) => (
          <Link
            key={index}
            to={`/week/${index + 1}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {week.title}
              </h2>
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Key Topics:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {week.topics.slice(0, 3).map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between text-blue-600">
                <span className="font-medium">Start Learning</span>
                <ChevronRight className="h-5 w-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;